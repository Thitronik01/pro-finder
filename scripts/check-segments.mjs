#!/usr/bin/env node
/**
 * Prüft die versionierten content_segments vor Datenbankimport und Übersetzung.
 * IDs, project_id und Zeitstempel bleiben Datenbankverantwortung; source_doc_key
 * wird beim Import gegen source_documents.doc_key aufgelöst.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  SEGMENT_SCHEMA_VERSION,
  loadAllContentSegments,
  segmentChecksum,
} from '../lib/content/segment-schema.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inventory = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'sources', 'inventory', 'documents.json'), 'utf8'),
);
const documents = new Map(inventory.documents.map((document) => [document.doc_id, document]));
const register = fs.readFileSync(path.join(ROOT, 'docs', 'DISCREPANCIES.md'), 'utf8');
const discrepancyIds = new Set(
  [...register.matchAll(/^### (DSC-\d{3})/gm)].map((match) => match[1]),
);

const commandPatterns = [
  /\b(?:FENCE|Fence|fence)\s+(?:AN|AUS|ON|OFF|AV|PA|an|aus|on|off|av|pa)\b/,
  /\b[AB]\s+(?:AN|AUS|ON|OFF|IMPULS|PULSE|\d{1,3})\b/i,
  /\bGPS\s+(?:ON|OFF)\b/i,
  /\bALARM\s+AUS\b/i,
  /`(?:STATUS|SCHARF|UNSCHARF|ARM|DISARM|POS|SKARP|OSKARP)`/,
];

let loaded;
try {
  loaded = loadAllContentSegments(ROOT);
} catch (error) {
  console.error(`Segment-Schema: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

let errors = 0;
const keys = new Set();
const taskSlugsByPath = new Map();
const pageRecordsByDoc = new Map();
const coveredSourcePages = new Set();

function fail(file, message) {
  console.error(`Segment-Referenz: ${file}: ${message}`);
  errors++;
}

for (const { file, segment } of loaded) {
  if (keys.has(segment.segment_key)) fail(file, `segment_key ${segment.segment_key} ist doppelt.`);
  keys.add(segment.segment_key);

  const normalizedFile = file.split(path.sep).join('/');
  const expectedDir = `content/segments/v${SEGMENT_SCHEMA_VERSION}/${segment.serial_range}/${segment.language}/`;
  if (!normalizedFile.startsWith(expectedDir)) {
    fail(file, `Pfad muss mit ${expectedDir} beginnen.`);
  }
  const expectedName = `${segment.segment_key.toLowerCase()}.json`;
  if (path.basename(file) !== expectedName) {
    fail(file, `Dateiname muss ${expectedName} lauten.`);
  }

  const document = documents.get(segment.source_doc_key);
  if (!document) {
    fail(file, `source_doc_key ${segment.source_doc_key} fehlt im Dokumentinventar.`);
  } else {
    if (segment.source_page_end > document.page_count) {
      fail(
        file,
        `Seitenende ${segment.source_page_end} liegt hinter Seite ${document.page_count}.`,
      );
    }
    if (document.serial_range !== segment.serial_range && segment.serial_range !== 'beide') {
      fail(
        file,
        `Generation ${segment.serial_range} passt nicht zum Dokument (${document.serial_range}).`,
      );
    }
  }

  const taskDir = path.join(ROOT, 'content', 'tasks', segment.serial_range, segment.language);
  const taskPathKey = `${segment.serial_range}/${segment.language}`;
  if (!taskSlugsByPath.has(taskPathKey)) {
    const slugs = new Set();
    if (fs.existsSync(taskDir)) {
      for (const taskName of fs.readdirSync(taskDir).filter((name) => name.endsWith('.json'))) {
        const task = JSON.parse(fs.readFileSync(path.join(taskDir, taskName), 'utf8'));
        slugs.add(task.slug);
      }
    }
    taskSlugsByPath.set(taskPathKey, slugs);
  }
  if (!taskSlugsByPath.get(taskPathKey).has(segment.task_slug)) {
    fail(file, `task_slug ${segment.task_slug} löst nicht zu einer Aufgabendatei auf.`);
  }

  const pagesFile = path.join(ROOT, 'sources', 'pages', `${segment.source_doc_key}.json`);
  if (!fs.existsSync(pagesFile)) {
    fail(file, `Seitenrecord ${path.relative(ROOT, pagesFile)} fehlt.`);
  } else {
    if (!pageRecordsByDoc.has(segment.source_doc_key)) {
      pageRecordsByDoc.set(segment.source_doc_key, JSON.parse(fs.readFileSync(pagesFile, 'utf8')));
    }
    const pageRecord = pageRecordsByDoc.get(segment.source_doc_key);
    for (let page = segment.source_page_start; page <= segment.source_page_end; page++) {
      coveredSourcePages.add(`${segment.source_doc_key}:${page}`);
      const sourcePage = pageRecord.pages.find((entry) => entry.page === page);
      if (!sourcePage) {
        fail(file, `PDF-Seite ${page} fehlt im Seitenrecord.`);
      } else if (['not_started', 'blocked'].includes(sourcePage.status)) {
        fail(file, `PDF-Seite ${page} hat unzureichenden Status ${sourcePage.status}.`);
      }
    }
  }

  for (const discrepancy of segment.discrepancy_refs) {
    if (!discrepancyIds.has(discrepancy)) {
      fail(file, `${discrepancy} existiert nicht in docs/DISCREPANCIES.md.`);
    }
  }

  const expectedChecksum = segmentChecksum(segment.body_md);
  if (segment.checksum !== expectedChecksum) {
    fail(file, `checksum ist veraltet; erwartet ${expectedChecksum}.`);
  }

  for (const pattern of commandPatterns) {
    const match = `${segment.title}\n${segment.body_md}`.match(pattern);
    if (match) {
      fail(file, `übersetzbarer Text enthält gesperrte SMS-Befehlszeichenfolge „${match[0]}“.`);
    }
  }
}

for (const document of inventory.documents) {
  const pagesFile = path.join(ROOT, 'sources', 'pages', `${document.doc_id}.json`);
  if (!fs.existsSync(pagesFile)) continue;
  const pageRecord =
    pageRecordsByDoc.get(document.doc_id) ?? JSON.parse(fs.readFileSync(pagesFile, 'utf8'));
  for (const sourcePage of pageRecord.pages) {
    if (
      ['extracted', 'validated', 'approved'].includes(sourcePage.status) &&
      !coveredSourcePages.has(`${document.doc_id}:${sourcePage.page}`)
    ) {
      fail(
        path.relative(ROOT, pagesFile),
        `PDF-Seite ${sourcePage.page} steht auf ${sourcePage.status}, ist aber durch kein Segment belegt.`,
      );
    }
  }
}

if (loaded.length === 0) {
  console.error('Segment-Schema: Keine versionierten content_segments gefunden.');
  process.exit(1);
}

if (errors > 0) {
  console.error(`\nsegments:check FEHLGESCHLAGEN – ${errors} Problem(e).`);
  process.exit(1);
}

console.log(
  `segments:check OK – ${loaded.length} Segment(e), Schema v${SEGMENT_SCHEMA_VERSION}, ` +
    'Pfade, Quellen, Seitenstatus, Aufgaben, DSC-Verweise, Prüfsummen und BLK-005 geprüft.',
);
