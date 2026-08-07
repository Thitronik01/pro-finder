import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import type { SupabaseClient } from '@supabase/supabase-js';
import { loadAllTasks } from './content/content';

export type ReviewItem = {
  key: string;
  title: string;
  generation: string;
  language: string;
  status: string;
  safetyClass: string;
  placeholder: boolean;
  href: string | null;
  sourceLabel: string;
};

export type PageDocumentSummary = {
  key: string;
  pageCount: number;
  statusCounts: Record<string, number>;
};

export type ReviewFinding = {
  key: string;
  title: string;
  detail: string;
  severity: string;
  status: string;
};

export type ReviewData = {
  mode: 'fixtures' | 'supabase';
  projectName: string;
  items: ReviewItem[];
  documents: PageDocumentSummary[];
  findings: ReviewFinding[];
  translationCount: number;
  assetRequestCount: number;
  error: string | null;
};

type PageRecord = {
  page: number;
  status: string;
  discrepancies?: string[];
};

type PageFile = {
  doc_id: string;
  page_count: number;
  pages: PageRecord[];
};

function loadPageFiles(): PageFile[] {
  const dir = path.join(process.cwd(), 'sources', 'pages');
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')) as PageFile);
}

export function loadFixtureReviewData(): ReviewData {
  const tasks = loadAllTasks().map(({ file, task }) => ({
    key: `${task.generation}/${task.language}/${task.slug}`,
    title: task.title,
    generation: task.generation,
    language: task.language,
    status: task.review_status,
    safetyClass: task.safety_class,
    placeholder: task.placeholder,
    href: `/pro-finder/${task.generation}/${task.language}/${task.slug}`,
    sourceLabel:
      task.sources
        .map((source) => `${source.doc}${source.pages ? `, S. ${source.pages}` : ''}`)
        .join('; ') || file,
  }));

  const pageFiles = loadPageFiles();
  const documents = pageFiles.map((document) => ({
    key: document.doc_id,
    pageCount: document.page_count,
    statusCounts: document.pages.reduce<Record<string, number>>((counts, page) => {
      counts[page.status] = (counts[page.status] ?? 0) + 1;
      return counts;
    }, {}),
  }));

  const findings = pageFiles.flatMap((document) =>
    document.pages.flatMap((page) =>
      (page.discrepancies ?? []).map((detail, index) => ({
        key: `${document.doc_id}-${page.page}-${index}`,
        title: `${document.doc_id}, PDF-Seite ${page.page}`,
        detail,
        severity: 'noch einzustufen',
        status: 'offen',
      })),
    ),
  );

  return {
    mode: 'fixtures',
    projectName: 'THITRONIK Pro-finder Barrierefreiheits-Pilot',
    items: tasks,
    documents,
    findings,
    translationCount: tasks.filter((item) => item.language !== 'de').length,
    assetRequestCount: 0,
    error: null,
  };
}

type DbRow = Record<string, unknown>;

function textValue(row: DbRow, key: string, fallback = '—'): string {
  const value = row[key];
  return typeof value === 'string' && value.trim() ? value : fallback;
}

/** Liest ausschließlich Daten, die die RLS-Policies der angemeldeten Person erlauben. */
export async function loadSupabaseReviewData(supabase: SupabaseClient): Promise<ReviewData> {
  const results = await Promise.all([
    supabase.from('projects').select('id, slug, name').limit(1),
    supabase
      .from('content_segments')
      .select(
        'id, segment_key, title, serial_range, language, review_status, safety_class, task_slug, source_document_id, source_page_start, source_page_end',
      )
      .order('updated_at', { ascending: false }),
    supabase.from('source_documents').select('id, doc_key, page_count'),
    supabase.from('source_pages').select('document_id, status'),
    supabase
      .from('discrepancies')
      .select('id, title, description, severity, status, document_id, page_number')
      .order('updated_at', { ascending: false }),
    supabase.from('translations').select('id', { count: 'exact', head: true }),
    supabase.from('asset_requests').select('id', { count: 'exact', head: true }),
  ]);

  const firstError = results.find((result) => result.error)?.error;
  const projects = (results[0].data ?? []) as DbRow[];
  const segments = (results[1].data ?? []) as DbRow[];
  const sourceDocuments = (results[2].data ?? []) as DbRow[];
  const sourcePages = (results[3].data ?? []) as DbRow[];
  const discrepancies = (results[4].data ?? []) as DbRow[];

  const documentsById = new Map(
    sourceDocuments.map((document) => [textValue(document, 'id'), document]),
  );

  const documents = sourceDocuments.map((document) => {
    const id = textValue(document, 'id');
    const relevantPages = sourcePages.filter((page) => textValue(page, 'document_id') === id);
    return {
      key: textValue(document, 'doc_key'),
      pageCount: Number(document.page_count ?? relevantPages.length),
      statusCounts: relevantPages.reduce<Record<string, number>>((counts, page) => {
        const status = textValue(page, 'status', 'unbekannt');
        counts[status] = (counts[status] ?? 0) + 1;
        return counts;
      }, {}),
    };
  });

  const items = segments.map((segment) => {
    const generation = textValue(segment, 'serial_range');
    const language = textValue(segment, 'language');
    const slug = textValue(segment, 'task_slug', '');
    const document = documentsById.get(textValue(segment, 'source_document_id'));
    const start = segment.source_page_start;
    const end = segment.source_page_end;
    const pages = start ? `${start}${end && end !== start ? `–${end}` : ''}` : null;

    return {
      key: textValue(segment, 'segment_key'),
      title: textValue(segment, 'title', textValue(segment, 'segment_key')),
      generation,
      language,
      status: textValue(segment, 'review_status'),
      safetyClass: textValue(segment, 'safety_class'),
      placeholder: textValue(segment, 'review_status') !== 'freigegeben',
      href:
        slug && ['sn-001-044', 'sn-045-plus'].includes(generation)
          ? `/pro-finder/${generation}/${language}/${slug}`
          : null,
      sourceLabel: `${document ? textValue(document, 'doc_key') : 'Quelle nicht verknüpft'}${pages ? `, S. ${pages}` : ''}`,
    };
  });

  const findings = discrepancies.map((finding) => {
    const document = documentsById.get(textValue(finding, 'document_id'));
    const page = finding.page_number ? `, PDF-Seite ${finding.page_number}` : '';
    return {
      key: textValue(finding, 'id'),
      title: textValue(finding, 'title'),
      detail: textValue(finding, 'description'),
      severity: textValue(finding, 'severity'),
      status: `${textValue(finding, 'status')} · ${document ? textValue(document, 'doc_key') : 'ohne Dokument'}${page}`,
    };
  });

  return {
    mode: 'supabase',
    projectName: projects.length ? textValue(projects[0], 'name') : 'Kein freigegebenes Projekt',
    items,
    documents,
    findings,
    translationCount: results[5].count ?? 0,
    assetRequestCount: results[6].count ?? 0,
    error: firstError
      ? 'Reviewdaten konnten nicht vollständig geladen werden. RLS, Projektmitgliedschaft und Migrationen prüfen.'
      : null,
  };
}
