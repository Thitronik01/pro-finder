#!/usr/bin/env node
/**
 * Content-Checks:
 *  1. Terminologie: verbotene Schreibvarianten in Content, App-Code und Docs.
 *  2. Quellenpflicht: Nicht-Platzhalter-Aufgaben brauchen Seitenangaben.
 *  3. Sicherheitsregel: sicherheitsrelevante/-kritische Inhalte dürfen nicht
 *     als „freigegeben" markiert sein, solange kein technischer Review dokumentiert ist.
 *
 * Die Schema-Validierung selbst läuft zusätzlich typsicher in tests/unit/content.test.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let errors = 0;

// --- 1. Terminologie ---------------------------------------------------------
// Verbotene Varianten laut Projektauftrag. „Pro-Finder" (großes F) ist ein offener
// Konflikt und wird nur gemeldet, wenn er außerhalb des Konfliktregisters auftaucht.
const FORBIDDEN = [
  { pattern: /Tritroni[ck]/g, hint: 'THITRONIK' },
  { pattern: /Thitronic/g, hint: 'THITRONIK' },
  { pattern: /ProFinder/g, hint: 'Pro-finder' },
  { pattern: /Profinder/g, hint: 'Pro-finder' },
  { pattern: /Softwarestand SN-04[45]/g, hint: 'Seriennummernbereich bis SN-044 / ab SN-045' },
];

const SCAN_DIRS = ['app', 'components', 'content', 'design', 'lib'];
const SCAN_EXT = new Set(['.ts', '.tsx', '.json', '.md', '.svg', '.css', '.mjs']);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      yield* walk(full);
    } else if (SCAN_EXT.has(path.extname(entry.name))) {
      yield full;
    }
  }
}

for (const dir of SCAN_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const { pattern, hint } of FORBIDDEN) {
      pattern.lastIndex = 0;
      const match = pattern.exec(text);
      if (match) {
        // Treffer in Zeilen, die den Konflikt/die Normalisierung selbst dokumentieren, sind erlaubt.
        const line = text.slice(0, match.index).split('\n').length;
        const lineText = text.split('\n')[line - 1] ?? '';
        if (/Normalisier|Konflikt|verboten|FORBIDDEN|→/.test(lineText)) continue;
        console.error(
          `Terminologie: ${path.relative(ROOT, file)}:${line} enthält "${match[0]}" – erwartet: ${hint}`,
        );
        errors++;
      }
    }
  }
}

// --- 2 + 3. Aufgaben-Regeln --------------------------------------------------
const tasksRoot = path.join(ROOT, 'content', 'tasks');
if (fs.existsSync(tasksRoot)) {
  for (const file of walk(tasksRoot)) {
    if (!file.endsWith('.json')) continue;
    const rel = path.relative(ROOT, file);
    const task = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!task.placeholder) {
      const withPages = (task.sources ?? []).filter((s) => s.pages !== null);
      if (withPages.length === 0) {
        console.error(
          `Quellenpflicht: ${rel} ist kein Platzhalter, hat aber keine Quelle mit Seitenangabe.`,
        );
        errors++;
      }
    }
    if (task.safety_class !== 'normal' && task.review_status === 'freigegeben') {
      console.error(
        `Sicherheitsregel: ${rel} (${task.safety_class}) darf ohne dokumentierten technischen Review nicht "freigegeben" sein.`,
      );
      errors++;
    }
    // Gerätegenerationen dürfen nie vermischt werden: Pfad muss zur Deklaration passen.
    const parts = rel.split(path.sep);
    const genFromPath = parts[2];
    const langFromPath = parts[3];
    if (task.generation !== genFromPath || task.language !== langFromPath) {
      console.error(
        `Versionstrennung: ${rel} deklariert ${task.generation}/${task.language}, liegt aber unter ${genFromPath}/${langFromPath}.`,
      );
      errors++;
    }
  }
}

// --- 4. Keine Orts- und Kontaktdaten aus den Beispiel-SMS --------------------
// Die Quell-PDFs zeigen Meldungen mit echten Koordinaten, Kartenlinks und
// Rufnummern. Sie dürfen nicht in den Content-Layer wandern (Projektauftrag §14:
// keine echten Kundendaten, Zielrufnummern oder Fahrzeugdaten – auch nicht als
// Beispiel). Ausgenommen ist die Support-Aufgabe: die Herstellerrufnummer ist eine
// veröffentlichte Kontaktangabe und dort der Inhalt selbst.
const KOORDINATEN = /\b\d{1,3}[.,]\d{4,}\s*[,;]\s*\d{1,3}[.,]\d{4,}\b/;
const KARTENLINK = /(?:maps\.google|goo\.gl\/maps|google\.[a-z]+\/maps|openstreetmap\.org)/i;
const RUFNUMMER = /\+\d{1,3}[\d\s/-]{7,}/;

const NUTZERTEXT_FELDER = (task) => [
  ['goal', task.goal],
  ...(task.prerequisites ?? []).map((p, i) => [`prerequisites[${i}]`, p]),
  ...(task.warnings ?? []).map((w, i) => [`warnings[${i}].text`, w.text]),
  ...(task.steps ?? []).flatMap((s, i) => [
    [`steps[${i}].text`, s.text],
    [`steps[${i}].expected`, s.expected],
  ]),
  ['expected_result', task.expected_result],
  ...(task.error_cases ?? []).flatMap((e, i) => [
    [`error_cases[${i}].problem`, e.problem],
    [`error_cases[${i}].correction`, e.correction],
  ]),
  ...(task.tables_md ?? []).map((t, i) => [`tables_md[${i}]`, t]),
  ...(task.figures ?? []).flatMap((f, i) => [
    [`figures[${i}].alt`, f.alt],
    [`figures[${i}].long_description`, f.long_description],
    ...(f.steps_text ?? []).map((s, j) => [`figures[${i}].steps_text[${j}]`, s]),
    [`figures[${i}].data_table_md`, f.data_table_md],
  ]),
];

if (fs.existsSync(tasksRoot)) {
  for (const file of walk(tasksRoot)) {
    if (!file.endsWith('.json')) continue;
    const rel = path.relative(ROOT, file);
    const task = JSON.parse(fs.readFileSync(file, 'utf8'));
    const istSupport = task.slug === 'support';
    for (const [feld, text] of NUTZERTEXT_FELDER(task)) {
      if (typeof text !== 'string' || text.length === 0) continue;
      if (KOORDINATEN.test(text)) {
        console.error(`Ortsdaten: ${rel} ${feld} enthält Koordinaten aus einer Beispiel-SMS.`);
        errors++;
      }
      if (KARTENLINK.test(text)) {
        console.error(`Ortsdaten: ${rel} ${feld} enthält einen Kartenlink aus einer Beispiel-SMS.`);
        errors++;
      }
      if (!istSupport && RUFNUMMER.test(text)) {
        console.error(
          `Kontaktdaten: ${rel} ${feld} enthält eine Rufnummer. Zielrufnummern und ` +
            `Beispielnummern gehören nicht in den Content-Layer; die Herstellernummer ` +
            `steht ausschließlich in der Support-Aufgabe.`,
        );
        errors++;
      }
    }
  }
}

// --- 5. Verweise auf das Widerspruchsregister müssen zeigen, wohin sie sagen ---
// Zwei Fehler, die beide dazu führen, dass eine Belegstelle auf einen fremden Sachverhalt
// zeigt – und beide fallen ohne Prüfung nicht auf:
//  - ein Verweis auf eine DSC-Nummer, die es (noch) nicht gibt: sobald das Register bis
//    dorthin wächst, zeigt er stillschweigend auf einen unverwandten Eintrag;
//  - eine doppelt vergebene Nummer. Das ist beim Anlegen der Positionen zur deutschen
//    Master-Extraktion tatsächlich passiert: die neuen Einträge wurden an die *letzte*
//    Überschrift der Datei angehängt statt an die *höchste* Nummer. DISCREPANCIES.md ist
//    nicht durchgehend aufsteigend sortiert – DSC-035 steht am Ende, DSC-038 und DSC-039
//    weiter oben –, sodass die beiden Nummern doppelt vergeben wurden.
// Die Beweiskette dieses Projekts hängt daran, dass Belegstellen halten.
const registerDatei = path.join(ROOT, 'docs', 'DISCREPANCIES.md');
if (fs.existsSync(registerDatei)) {
  const register = fs.readFileSync(registerDatei, 'utf8');
  const vergeben = new Set([...register.matchAll(/^### (DSC-\d+)/gm)].map((m) => m[1]));

  const docsDir = path.join(ROOT, 'docs');
  for (const file of fs.readdirSync(docsDir)) {
    if (!file.endsWith('.md')) continue;
    const text = fs.readFileSync(path.join(docsDir, file), 'utf8');
    const unbekannt = new Set(
      [...text.matchAll(/DSC-\d+/g)].map((m) => m[0]).filter((id) => !vergeben.has(id)),
    );
    for (const id of unbekannt) {
      console.error(
        `Registerverweis: docs/${file} verweist auf ${id}, das in DISCREPANCIES.md nicht existiert.`,
      );
      errors++;
    }
  }

  // Doppelt vergebene Nummern hätten dieselbe Wirkung von der anderen Seite.
  const alle = [...register.matchAll(/^### (DSC-\d+)/gm)].map((m) => m[1]);
  const doppelt = alle.filter((id, i) => alle.indexOf(id) !== i);
  for (const id of new Set(doppelt)) {
    console.error(`Registerverweis: ${id} ist in DISCREPANCIES.md mehrfach vergeben.`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\ncontent:check FEHLGESCHLAGEN – ${errors} Problem(e).`);
  process.exit(1);
}
console.log(
  'content:check OK – Terminologie, Quellenpflicht, Versionstrennung, Orts-/Kontaktdaten ' +
    'und Registerverweise geprüft. (Tabellen: tests/unit/content.test.ts)',
);
