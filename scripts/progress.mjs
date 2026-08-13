#!/usr/bin/env node
/**
 * Fortschrittsberechnung des Piloten.
 *
 * Liest sources/pages/*.json (PDF-Seitenstatus) und docs/progress-input.json
 * (manuell gepflegte Workstreams) und schreibt:
 *  - docs/progress.json (maschinenlesbar, wird vom Dashboard gerendert)
 *  - den generierten Abschnitt in docs/PROJECT_STATUS.md (zwischen den Markern)
 *
 * Aufruf: node scripts/progress.mjs [--check]
 * --check: schlägt fehl, wenn docs/progress.json nicht dem berechneten Stand entspricht.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  computeOverall,
  documentProgress,
  PROGRESS_END,
  PROGRESS_START,
  replaceProgressBlock,
  WEIGHTS,
  WORKSTREAM_LABELS,
} from '../lib/progress.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_DIR = path.join(ROOT, 'sources', 'pages');
const INPUT = path.join(ROOT, 'docs', 'progress-input.json');
const OUTPUT = path.join(ROOT, 'docs', 'progress.json');
const STATUS_MD = path.join(ROOT, 'docs', 'PROJECT_STATUS.md');

const input = JSON.parse(fs.readFileSync(INPUT, 'utf8'));

// PDF-Fortschritt je Dokument und gesamt
const documents = [];
let allPages = [];
for (const file of fs
  .readdirSync(PAGES_DIR)
  .filter((f) => f.endsWith('.json'))
  .sort()) {
  const rec = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, file), 'utf8'));
  const percent = documentProgress(rec.pages);
  const counts = {};
  for (const p of rec.pages) counts[p.status] = (counts[p.status] ?? 0) + 1;
  documents.push({
    doc_id: rec.doc_id,
    page_count: rec.page_count,
    percent: Math.round(percent * 10) / 10,
    status_counts: counts,
  });
  allPages = allPages.concat(rec.pages);
}
const sourceAudit = documentProgress(allPages);

const streams = { source_audit: Math.round(sourceAudit * 10) / 10 };
for (const [key, val] of Object.entries(input.workstreams)) {
  streams[key] = val.percent;
}

const overall = computeOverall(streams);

const result = {
  generated_at_note: 'Erzeugt durch scripts/progress.mjs; Datum siehe Git-Historie dieser Datei.',
  overall_percent: Math.round(overall * 10) / 10,
  weights: WEIGHTS,
  workstreams: Object.fromEntries(
    Object.keys(WEIGHTS).map((key) => [
      key,
      {
        label: WORKSTREAM_LABELS[key],
        percent: streams[key] ?? 0,
        note:
          key === 'source_audit'
            ? `Automatisch aus ${allPages.length} Seitenrecords berechnet.`
            : (input.workstreams[key]?.note ?? ''),
      },
    ]),
  ),
  pdf_documents: documents,
  pdf_pages_total: allPages.length,
  blockers: input.blockers,
  safety_critical_open: input.safety_critical_open,
  next_action: input.next_action,
};

const json = JSON.stringify(result, null, 2) + '\n';

if (process.argv.includes('--check')) {
  const existing = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, 'utf8') : '';
  if (existing !== json) {
    console.error(
      'FEHLER: docs/progress.json ist nicht aktuell. Bitte `npm run progress` ausführen und committen.',
    );
    process.exit(1);
  }
  console.log('OK: docs/progress.json ist aktuell.');
  process.exit(0);
}

fs.writeFileSync(OUTPUT, json);

// PROJECT_STATUS.md-Abschnitt zwischen Markern neu schreiben
const md = fs.readFileSync(STATUS_MD, 'utf8');
const lines = [PROGRESS_START, ''];
lines.push(`**Gesamtfortschritt: ${result.overall_percent} %**`, '');
lines.push('| Workstream | Gewicht | Fortschritt |');
lines.push('| --- | --- | --- |');
for (const key of Object.keys(WEIGHTS)) {
  const ws = result.workstreams[key];
  lines.push(`| ${ws.label} | ${Math.round(WEIGHTS[key] * 100)} % | ${ws.percent} % |`);
}
lines.push('');
lines.push('**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):', '');
lines.push('| Dokument | Seiten | Fortschritt |');
lines.push('| --- | --- | --- |');
for (const d of documents) {
  lines.push(`| ${d.doc_id} | ${d.page_count} | ${d.percent} % |`);
}
lines.push('');
lines.push(`Offene Blocker: ${result.blockers.length} · Nächste Aktion: ${result.next_action}`);
lines.push('', PROGRESS_END);
const block = lines.join('\n');
const nextMd = replaceProgressBlock(md, block, PROGRESS_START, PROGRESS_END);
if (nextMd === null) {
  console.error('FEHLER: Der Fortschrittsblock in PROJECT_STATUS.md wurde nicht ersetzt.');
  process.exit(1);
}
fs.writeFileSync(STATUS_MD, nextMd);

console.log(
  `Gesamtfortschritt: ${result.overall_percent} % · PDF-Audit: ${streams.source_audit} % über ${allPages.length} Seiten`,
);
