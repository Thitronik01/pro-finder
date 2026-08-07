#!/usr/bin/env node
/**
 * Prueft, ob package-lock.json vollstaendig ist.
 *
 * Hintergrund: `npm ci` validiert den gesamten Abhaengigkeitsbaum, auch die
 * optionalen Plattformvarianten, die auf der eigenen Plattform gar nicht
 * installiert werden. Fehlt dort ein Eintrag, laeuft `npm ci` lokal
 * anstandslos durch und bricht auf einer anderen Plattform mit
 * "Missing: <paket> from lock file" ab.
 *
 * Genau das ist passiert: @img/sharp-wasm32 verlangt @emnapi/runtime ^1.11.1,
 * im Lockfile stand nur eine verschachtelte 1.10.0. Unter Windows faellt das
 * nie auf, in Linux-CI sofort.
 *
 * Dieses Skript loest jede deklarierte Abhaengigkeit nach den
 * node_modules-Regeln gegen das Lockfile auf und meldet, was fehlt oder den
 * geforderten Bereich nicht erfuellt.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lock = JSON.parse(fs.readFileSync(path.join(ROOT, 'package-lock.json'), 'utf8'));
const entries = lock.packages ?? {};

/** Node-Aufloesung: von der eigenen Ebene aus nach oben suchen. */
function resolve(fromPath, name) {
  const segments = fromPath === '' ? [] : fromPath.split('/');
  for (let i = segments.length; i >= 0; i--) {
    const base = segments.slice(0, i).join('/');
    const candidate = base ? `${base}/node_modules/${name}` : `node_modules/${name}`;
    if (Object.hasOwn(entries, candidate)) return entries[candidate];
  }
  return null;
}

/**
 * Minimaler semver-Bereichstest fuer die Formen, die in Lockfiles vorkommen:
 * exakt, ^, ~, >=, * und Alternativen mit ||. Unbekanntes gilt als erfuellt,
 * damit das Skript nicht faelschlich Alarm schlaegt.
 */
function satisfies(version, range) {
  if (!range || range === '*' || range === 'latest') return true;
  if (range.startsWith('npm:') || range.includes('://') || range.startsWith('file:')) return true;
  const parse = (v) => v.split('-')[0].split('.').map(Number);
  const [vMa, vMi = 0, vPa = 0] = parse(version);
  return range.split('||').some((partRaw) => {
    const part = partRaw.trim();
    const m = /^(\^|~|>=|>|=)?\s*v?(\d+)(?:\.(\d+))?(?:\.(\d+))?/.exec(part);
    if (!m) return true;
    const [, op = '=', maS, miS, paS] = m;
    const ma = Number(maS);
    const mi = miS === undefined ? 0 : Number(miS);
    const pa = paS === undefined ? 0 : Number(paS);
    const cmp =
      vMa !== ma ? Math.sign(vMa - ma) : vMi !== mi ? Math.sign(vMi - mi) : Math.sign(vPa - pa);
    if (op === '^') return vMa === ma && cmp >= 0;
    if (op === '~') return vMa === ma && vMi === mi && cmp >= 0;
    if (op === '>=') return cmp >= 0;
    if (op === '>') return cmp > 0;
    return cmp === 0;
  });
}

const probleme = [];
for (const [pfad, meta] of Object.entries(entries)) {
  if (!meta || typeof meta !== 'object' || meta.link) continue;
  // peerDependencies bewusst ausgelassen: npm ci erzwingt sie nicht auf
  // dieselbe Weise und optionale Peers wuerden Fehlalarme erzeugen.
  const deklariert = { ...meta.dependencies, ...meta.optionalDependencies };
  for (const [name, range] of Object.entries(deklariert)) {
    const ziel = resolve(pfad, name);
    if (!ziel) {
      probleme.push(`FEHLT     ${name}@${range}  (verlangt von ${pfad || 'root'})`);
    } else if (ziel.version && !satisfies(ziel.version, range)) {
      probleme.push(
        `BEREICH   ${name}@${range}  (verlangt von ${pfad || 'root'}, vorhanden: ${ziel.version})`,
      );
    }
  }
}

if (probleme.length > 0) {
  console.error('lockfile:check FEHLGESCHLAGEN – package-lock.json ist unvollstaendig:');
  for (const p of probleme) console.error(`- ${p}`);
  console.error('\nBitte `npm install --package-lock-only` ausfuehren und das Ergebnis committen.');
  process.exit(1);
}

console.log(
  `lockfile:check OK – ${Object.keys(entries).length} Eintraege, alle Abhaengigkeiten aufloesbar.`,
);
