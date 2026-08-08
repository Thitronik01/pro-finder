#!/usr/bin/env node
/**
 * Traegt Batch-Ergebnisse der Seitenpruefung in die Seitenrecords ein.
 *
 * Die seitenweise Pruefung nach docs/IST_AUDIT.md laeuft in Batches von 9-10 Seiten.
 * Jeder Batch liefert ein JSON-Array von Seitenrecords unter tmp/records/, benannt
 * <doc_id>-<von>-<bis>.json. Dieses Werkzeug fuehrt sie in sources/pages/<doc_id>.json
 * zusammen - kontrolliert, nicht per Hand.
 *
 * Warum ein Skript und kein manuelles Einfuegen: die Records enthalten Masse,
 * Zeichenzahlen und Seitenzahlen, die gegen die tatsaechliche PDF pruefbar sind. Genau
 * dort entstehen beim Einfuegen von Hand stille Fehler - eine verschobene Seitenzahl
 * haengt Befunde an die falsche Quelle, und der Projektauftrag verlangt Belege bis auf
 * Seitenebene.
 *
 * Aufruf:
 *     node scripts/merge-page-records.mjs            # prueft und schreibt
 *     node scripts/merge-page-records.mjs --dry-run  # prueft nur
 *
 * Das Werkzeug gehoert nicht zum Build und wird von `npm run check` nicht aufgerufen.
 * Es schreibt ausschliesslich sources/pages/*.json und ueberschreibt einen vorhandenen
 * Record nur, wenn er den Status not_started hat - bereits geprueft Seiten sind gegen
 * versehentliches Zurueckfallen geschuetzt.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RECORDS_DIR = path.join(ROOT, 'tmp', 'records');
const PAGES_DIR = path.join(ROOT, 'sources', 'pages');
const STATS_FILE = path.join(ROOT, 'tmp', 'pagestats.json');

const dryRun = process.argv.includes('--dry-run');

const PFLICHTFELDER = [
  'page',
  'status',
  'progress_percent',
  'width_mm',
  'height_mm',
  'extractable_chars',
  'content_type',
  'languages',
  'summary',
  'accessibility_issues',
  'discrepancies',
  'next_action',
];

const ERLAUBTE_STATUS = new Set([
  'not_started',
  'inspected',
  'extracted',
  'validated',
  'approved',
  'blocked',
]);

const STATUS_WERT = {
  not_started: 0,
  inspected: 25,
  extracted: 50,
  validated: 75,
  approved: 100,
};

let fehler = 0;
const meldung = (text) => {
  console.error(text);
  fehler += 1;
};

if (!fs.existsSync(RECORDS_DIR)) {
  console.error(`Kein Verzeichnis ${path.relative(ROOT, RECORDS_DIR)} - nichts zu tun.`);
  process.exit(1);
}

const stats = fs.existsSync(STATS_FILE) ? JSON.parse(fs.readFileSync(STATS_FILE, 'utf8')) : null;
if (!stats) {
  console.warn(
    'Hinweis: tmp/pagestats.json fehlt. Masse und Zeichenzahlen werden nicht gegengeprueft.',
  );
}

// --- Batchdateien einlesen ---------------------------------------------------

const proDokument = new Map();

for (const datei of fs.readdirSync(RECORDS_DIR).sort()) {
  if (!datei.endsWith('.json')) continue;
  // Aus dem Dateinamen wird nur die Dokument-ID gelesen. Der Seitenbereich stammt aus
  // den Records selbst: ein abgebrochener Batch schreibt seine Seiten in mehrere
  // Teildateien mit abweichenden Namen, und ein Bereich im Dateinamen, der nicht zum
  // Inhalt passt, wäre gefährlicher als gar keiner.
  const treffer = /^(DOC-[A-Z0-9-]+?)-\d+/.exec(datei);
  if (!treffer) {
    meldung(`Dateiname nennt keine Dokument-ID (erwartet "DOC-...-<seiten>.json"): ${datei}`);
    continue;
  }
  const [, docId] = treffer;

  let records;
  try {
    records = JSON.parse(fs.readFileSync(path.join(RECORDS_DIR, datei), 'utf8'));
  } catch (e) {
    meldung(`${datei}: kein gueltiges JSON (${e.message})`);
    continue;
  }
  if (!Array.isArray(records)) {
    meldung(`${datei}: erwartet wird ein Array von Seitenrecords.`);
    continue;
  }

  if (records.length === 0) {
    meldung(`${datei}: leeres Array.`);
    continue;
  }

  for (const record of records) {
    for (const feld of PFLICHTFELDER) {
      if (!(feld in record)) meldung(`${datei}, Seite ${record.page}: Feld "${feld}" fehlt.`);
    }
    if (!Number.isInteger(record.page) || record.page < 1) {
      meldung(`${datei}: ungueltige Seitenzahl ${JSON.stringify(record.page)}.`);
      continue;
    }
    if (!ERLAUBTE_STATUS.has(record.status)) {
      meldung(`${datei}, Seite ${record.page}: unbekannter Status "${record.status}".`);
    }
    if (record.status in STATUS_WERT && record.progress_percent !== STATUS_WERT[record.status]) {
      meldung(
        `${datei}, Seite ${record.page}: progress_percent ${record.progress_percent} passt nicht ` +
          `zu Status "${record.status}" (erwartet ${STATUS_WERT[record.status]}).`,
      );
    }
    if (!record.summary || String(record.summary).trim().length < 40) {
      meldung(`${datei}, Seite ${record.page}: summary fehlt oder ist zu knapp.`);
    }
    if (!Array.isArray(record.languages) || record.languages.length === 0) {
      meldung(`${datei}, Seite ${record.page}: languages fehlt oder ist leer.`);
    }

    // Masse und Zeichenzahl gegen die tatsaechliche PDF pruefen.
    const stat = stats?.[docId]?.find((s) => s.page === record.page);
    if (stat) {
      if (record.width_mm !== stat.w_mm || record.height_mm !== stat.h_mm) {
        meldung(
          `${datei}, Seite ${record.page}: Masse ${record.width_mm}x${record.height_mm} mm ` +
            `weichen von der PDF ab (${stat.w_mm}x${stat.h_mm} mm).`,
        );
      }
      if (record.extractable_chars !== stat.readable) {
        meldung(
          `${datei}, Seite ${record.page}: extractable_chars ${record.extractable_chars} ` +
            `weicht von der PDF ab (${stat.readable}).`,
        );
      }
    }

    if (!proDokument.has(docId)) proDokument.set(docId, new Map());
    const vorhanden = proDokument.get(docId);
    if (vorhanden.has(record.page)) {
      meldung(`${docId}: Seite ${record.page} kommt in mehreren Batchdateien vor.`);
    }
    vorhanden.set(record.page, record);
  }
}

if (fehler > 0) {
  console.error(`\n${fehler} Problem(e) gefunden. Es wurde nichts geschrieben.`);
  process.exit(1);
}

// --- Zusammenfuehren ---------------------------------------------------------

let geschrieben = 0;
let uebersprungen = 0;

for (const [docId, records] of proDokument) {
  const zielDatei = path.join(PAGES_DIR, `${docId}.json`);
  if (!fs.existsSync(zielDatei)) {
    console.error(`Seitenrecord-Datei fehlt: ${path.relative(ROOT, zielDatei)}`);
    process.exit(1);
  }
  const ziel = JSON.parse(fs.readFileSync(zielDatei, 'utf8'));
  const index = new Map(ziel.pages.map((p, i) => [p.page, i]));

  for (const [seite, record] of [...records].sort((a, b) => a[0] - b[0])) {
    const i = index.get(seite);
    if (i === undefined) {
      console.error(`${docId}: Seite ${seite} existiert im Zieldokument nicht.`);
      process.exit(1);
    }
    if (ziel.pages[i].status !== 'not_started') {
      console.warn(
        `${docId} Seite ${seite}: bereits "${ziel.pages[i].status}" - uebersprungen, ` +
          `um eine geprueft Seite nicht zu ueberschreiben.`,
      );
      uebersprungen += 1;
      continue;
    }
    ziel.pages[i] = record;
    geschrieben += 1;
  }

  if (!dryRun) {
    fs.writeFileSync(zielDatei, `${JSON.stringify(ziel, null, 2)}\n`, 'utf8');
  }
  const gezaehlt = ziel.pages.filter((p) => p.status !== 'not_started').length;
  console.log(
    `${docId}: ${gezaehlt} von ${ziel.pages.length} Seiten mit Status ` +
      `${dryRun ? '(Probelauf, nicht geschrieben)' : 'geschrieben'}`,
  );
}

console.log(
  `\n${geschrieben} Seitenrecord(s) uebernommen, ${uebersprungen} uebersprungen.` +
    (dryRun ? ' Probelauf - keine Datei geaendert.' : ''),
);
