#!/usr/bin/env node
/**
 * Token-, Zahlen- und Einheitenvergleich zwischen deutschem Master und Übersetzungen.
 *
 * Geschützte Token (dürfen sich zwischen Master und Übersetzung nicht unterscheiden):
 * Produktnamen, Artikel-/Seriennummern, URLs, Telefonnummern, Zahlenwerte mit Einheiten
 * (V, A, mA, mm, °C …).
 *
 * SMS-Befehle sind hier bewusst NICHT enthalten. Der Seiten-Audit hat belegt, dass die
 * Quelle sie lokalisiert (`fence an`/`fence aus` gegenüber `fence on`/`fence off`,
 * `SCHARF`/`UNSCHARF` gegenüber `ARM`/`DISARM`). Eine Gleichheitsprüfung über Sprachen
 * hinweg würde korrekte Übersetzungen als Fehler melden und falsche durchwinken. Bis
 * THITRONIK die Befehlssprache klärt, werden Befehle nur pro Sprachfassung mit
 * Seitenquelle geführt – siehe docs/DISCREPANCIES.md DSC-013/DSC-014 und
 * docs/TERMINOLOGY_CONFLICTS.md.
 *
 * Verglichen werden Aufgaben mit gleicher Positions-Nummer im Dateinamen
 * (z. B. de/01-… ↔ en/01-…). Solange die EN-Pilotdatei ein Platzhalter ist,
 * wird sie übersprungen (nichts zu vergleichen).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const PROTECTED_PATTERNS = [
  /THITRONIK(?: App)?/g,
  /Pro-finder/g,
  /WiPro III(?: safe\.lock)?/g,
  /\bSN-?\d{3}\b/g,
  /\b\d+[.,]?\d*\s?(?:V|A|mA|Ah|mm|cm|m|g|kg|°C|MHz|GHz|dBm)\b/g,
  /https?:\/\/\S+/g,
  /\+\d[\d\s/-]{5,}/g,
  /\b[A-Z]{2,}\d{2,}\b/g,
];

function extractTokens(text) {
  const tokens = [];
  for (const pattern of PROTECTED_PATTERNS) {
    pattern.lastIndex = 0;
    for (const m of text.matchAll(pattern)) tokens.push(m[0]);
  }
  return tokens.sort();
}

function taskText(task) {
  return JSON.stringify([
    task.goal,
    task.prerequisites,
    task.warnings?.map((w) => w.text),
    task.steps?.map((s) => [s.text, s.expected]),
    task.expected_result,
    task.error_cases,
    task.tables_md,
  ]);
}

const deDir = path.join(ROOT, 'content', 'tasks', 'sn-045-plus', 'de');
const enDir = path.join(ROOT, 'content', 'tasks', 'sn-045-plus', 'en');

let errors = 0;
let compared = 0;

if (fs.existsSync(deDir) && fs.existsSync(enDir)) {
  const deFiles = fs.readdirSync(deDir).filter((f) => f.endsWith('.json'));
  const enFiles = fs.readdirSync(enDir).filter((f) => f.endsWith('.json'));
  for (const enFile of enFiles) {
    const num = enFile.split('-')[0];
    const deFile = deFiles.find((f) => f.startsWith(`${num}-`));
    if (!deFile) continue;
    const de = JSON.parse(fs.readFileSync(path.join(deDir, deFile), 'utf8'));
    const en = JSON.parse(fs.readFileSync(path.join(enDir, enFile), 'utf8'));
    if (de.placeholder || en.placeholder) continue; // noch nichts zu vergleichen
    compared++;
    const deTokens = extractTokens(taskText(de));
    const enTokens = extractTokens(taskText(en));
    const missing = deTokens.filter((t) => !enTokens.includes(t));
    const added = enTokens.filter((t) => !deTokens.includes(t));
    if (missing.length > 0 || added.length > 0) {
      console.error(`Token-Abweichung ${deFile} ↔ ${enFile}:`);
      for (const t of missing) console.error(`  fehlt in EN: ${t}`);
      for (const t of added) console.error(`  nur in EN:  ${t}`);
      errors++;
    }
  }
}

if (errors > 0) {
  console.error(`\ntokens:check FEHLGESCHLAGEN – ${errors} Aufgabe(n) mit Token-Abweichungen.`);
  process.exit(1);
}
console.log(
  `tokens:check OK – ${compared} Aufgabenpaar(e) verglichen (Platzhalter werden übersprungen).`,
);
