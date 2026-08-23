import 'server-only';

import fs from 'node:fs';
import path from 'node:path';
import type { SupabaseClient } from '@supabase/supabase-js';
import { loadAllContentSegments } from './content/segment-schema.mjs';
import {
  compareReviewPriority,
  reviewPacketId,
  reviewPriority,
  type ReviewPacketId,
  type ReviewPriority,
} from './review-priority';

export type ReviewItem = {
  key: string;
  title: string;
  generation: string;
  language: string;
  status: string;
  safetyClass: string;
  priority: ReviewPriority;
  packetId: ReviewPacketId | null;
  placeholder: boolean;
  href: string | null;
  sourceLabel: string;
  /** DSC-Nummern des Widerspruchsregisters, auf die sich dieses Segment beruft. */
  discrepancyRefs: string[];
  /**
   * Status der Quellseite. `validated` heisst: die Seite wurde unabhaengig
   * gegengeprueft. Das macht im Review sichtbar, welche Segmente auf einer
   * zweiten Quelle ruhen und welche nur auf der Extraktion selbst.
   */
  sourcePageStatus: string | null;
};

/**
 * Vollansicht eines Segments fuer den Fachreview. Sie zeigt zusaetzlich den
 * `change_reason` - dort steht, wogegen gegengelesen wurde und was dabei
 * herauskam - sowie den `crosscheck_note` der zugehoerigen Quellseite.
 */
export type SegmentDetail = {
  key: string;
  title: string;
  bodyMd: string;
  segmentType: string;
  taskSlug: string;
  generation: string;
  language: string;
  status: string;
  safetyClass: string;
  priority: ReviewPriority;
  packetId: ReviewPacketId | null;
  sourceDocKey: string;
  sourcePageStart: number;
  sourcePageEnd: number;
  sourceRegion: string;
  prevContext: string | null;
  nextContext: string | null;
  changeReason: string;
  discrepancyRefs: string[];
  checksum: string;
  taskHref: string | null;
  /** Freitext aus dem Seitenrecord: was an dieser Quellseite gegengeprueft wurde. */
  pageCrosscheckNote: string | null;
  pageStatus: string | null;
  /** Gegenstueck derselben Fundstelle in der anderen Sprachfassung, falls vorhanden. */
  counterpart: SegmentCounterpart | null;
};

export type SegmentCounterpart = {
  key: string;
  title: string;
  language: string;
  bodyMd: string;
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
  crosscheck_note?: string;
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
  const pageStatusIndex = new Map(
    loadPageFiles().flatMap((file) =>
      file.pages.map((page) => [`${file.doc_id}:${page.page}`, page.status] as const),
    ),
  );

  const items = loadAllContentSegments()
    .map(({ segment }) => ({
      key: segment.segment_key,
      title: segment.title,
      generation: segment.serial_range,
      language: segment.language,
      status: segment.review_status,
      safetyClass: segment.safety_class,
      priority: reviewPriority(segment.safety_class),
      packetId: reviewPacketId(segment.segment_key),
      placeholder: segment.review_status !== 'freigegeben',
      href: ['sn-001-044', 'sn-045-plus'].includes(segment.serial_range)
        ? `/pro-finder/${segment.serial_range}/${segment.language}/${segment.task_slug}`
        : null,
      sourceLabel: `${segment.source_doc_key}, S. ${segment.source_page_start}${segment.source_page_end !== segment.source_page_start ? `-${segment.source_page_end}` : ''}`,
      discrepancyRefs: segment.discrepancy_refs ?? [],
      sourcePageStatus:
        pageStatusIndex.get(`${segment.source_doc_key}:${segment.source_page_start}`) ?? null,
    }))
    .sort(compareReviewPriority);

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
    items,
    documents,
    findings,
    translationCount: items.filter((item) => item.language !== 'de').length,
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

  const items = segments
    .map((segment) => {
      const generation = textValue(segment, 'serial_range');
      const language = textValue(segment, 'language');
      const slug = textValue(segment, 'task_slug', '');
      const safetyClass = textValue(segment, 'safety_class');
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
        safetyClass,
        priority: reviewPriority(safetyClass),
        packetId: reviewPacketId(textValue(segment, 'segment_key')),
        placeholder: textValue(segment, 'review_status') !== 'freigegeben',
        href:
          slug && ['sn-001-044', 'sn-045-plus'].includes(generation)
            ? `/pro-finder/${generation}/${language}/${slug}`
            : null,
        sourceLabel: `${document ? textValue(document, 'doc_key') : 'Quelle nicht verknüpft'}${pages ? `, S. ${pages}` : ''}`,
        discrepancyRefs: [],
        sourcePageStatus: null,
      };
    })
    .sort(compareReviewPriority);

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

/**
 * Seitenpaarung des Dokuments DOC-IBA-SN045 zwischen deutschem und englischem
 * Sprachteil. Der Versatz ist nicht konstant: Er betraegt 24 und faellt zwischen
 * Abschnitt 2.8 und Kapitel 5 auf 23, weil der deutsche Teil die Syntaxgrafik auf
 * eine eigene Seite setzt und die englische Fassung das in Kapitel 4 ausgleicht.
 * Belegt und je Seite begruendet in docs/CROSSCHECK_SN045_DE_EN.md (DSC-021).
 */
const IBA045_PAGE_PAIRS: ReadonlyArray<readonly [number, number]> = [
  [5, 29],
  [6, 30],
  [7, 31],
  [8, 32],
  [9, 33],
  [10, 34],
  [11, 35],
  [12, 36],
  [13, 37],
  [14, 38],
  [15, 39],
  [16, 39],
  [17, 40],
  [18, 41],
  [19, 42],
  [20, 43],
  [21, 45],
  [22, 46],
  [23, 47],
  [24, 48],
  [25, 49],
];

/** Liefert die Seite der jeweils anderen Sprachfassung, sofern eine Paarung belegt ist. */
export function counterpartPage(
  docKey: string,
  language: string,
  page: number,
): { language: string; page: number } | null {
  if (docKey !== 'DOC-IBA-SN045') return null;
  if (language === 'de') {
    const pair = IBA045_PAGE_PAIRS.find(([de]) => de === page);
    return pair ? { language: 'en', page: pair[1] } : null;
  }
  if (language === 'en') {
    const pair = IBA045_PAGE_PAIRS.find(([, en]) => en === page);
    return pair ? { language: 'de', page: pair[0] } : null;
  }
  return null;
}

function pageRecordFor(docKey: string, page: number): PageRecord | null {
  const file = loadPageFiles().find((entry) => entry.doc_id === docKey);
  return file?.pages.find((entry) => entry.page === page) ?? null;
}

export function loadFixtureSegmentDetail(segmentKey: string): SegmentDetail | null {
  const all = loadAllContentSegments();
  const match = all.find(({ segment }) => segment.segment_key === segmentKey);
  if (!match) return null;
  const segment = match.segment;

  const pair = counterpartPage(segment.source_doc_key, segment.language, segment.source_page_start);
  const counterpartMatches = pair
    ? all.filter(
        ({ segment: other }) =>
          other.language === pair.language &&
          other.source_doc_key === segment.source_doc_key &&
          other.source_page_start === pair.page,
      )
    : [];
  // Bei mehreren Segmenten je Seite wird das thematisch naechste ueber den
  // Aufgabenbezug und die Position auf der Seite gewaehlt; dieselbe Aufgabe zaehlt
  // staerker als die reine Reihenfolge.
  const sameTask = counterpartMatches.find(
    ({ segment: other }) => other.segment_type === segment.segment_type,
  );
  const counterpartSegment = (sameTask ?? counterpartMatches[0])?.segment ?? null;

  const pageRecord = pageRecordFor(segment.source_doc_key, segment.source_page_start);

  return {
    key: segment.segment_key,
    title: segment.title,
    bodyMd: segment.body_md,
    segmentType: segment.segment_type,
    taskSlug: segment.task_slug,
    generation: segment.serial_range,
    language: segment.language,
    status: segment.review_status,
    safetyClass: segment.safety_class,
    priority: reviewPriority(segment.safety_class),
    packetId: reviewPacketId(segment.segment_key),
    sourceDocKey: segment.source_doc_key,
    sourcePageStart: segment.source_page_start,
    sourcePageEnd: segment.source_page_end,
    sourceRegion: segment.source_region,
    prevContext: segment.prev_context,
    nextContext: segment.next_context,
    changeReason: segment.change_reason,
    discrepancyRefs: segment.discrepancy_refs ?? [],
    checksum: segment.checksum,
    taskHref: ['sn-001-044', 'sn-045-plus'].includes(segment.serial_range)
      ? `/pro-finder/${segment.serial_range}/${segment.language}/${segment.task_slug}`
      : null,
    pageCrosscheckNote: pageRecord?.crosscheck_note ?? null,
    pageStatus: pageRecord?.status ?? null,
    counterpart: counterpartSegment
      ? {
          key: counterpartSegment.segment_key,
          title: counterpartSegment.title,
          language: counterpartSegment.language,
          bodyMd: counterpartSegment.body_md,
          sourceLabel: `${counterpartSegment.source_doc_key}, S. ${counterpartSegment.source_page_start}`,
        }
      : null,
  };
}

/** Alle DSC-Nummern, auf die sich mindestens ein Segment beruft - fuer den Filter. */
export function loadReferencedDiscrepancyIds(): string[] {
  return [
    ...new Set(loadAllContentSegments().flatMap(({ segment }) => segment.discrepancy_refs ?? [])),
  ].sort();
}
