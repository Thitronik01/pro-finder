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

if (errors > 0) {
  console.error(`\ncontent:check FEHLGESCHLAGEN – ${errors} Problem(e).`);
  process.exit(1);
}
console.log('content:check OK – Terminologie, Quellenpflicht und Versionstrennung geprüft.');
