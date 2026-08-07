#!/usr/bin/env node
/**
 * Schutz der Read-only-Referenz: Der lokale Klon der Händlerplattform darf nie
 * verändert werden. Vor und nach jeder Analyse muss `git status --porcelain` leer sein.
 * Fehlt der Klon (z. B. in CI), ist das in Ordnung – er ist bewusst nicht versioniert.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REF = path.join(ROOT, '.agent', 'reference', 'thitronik-haendlerplattform');

if (!fs.existsSync(REF)) {
  console.log('reference:check OK – Referenzklon nicht vorhanden (z. B. CI), nichts zu prüfen.');
  process.exit(0);
}

const status = execSync('git status --porcelain', { cwd: REF, encoding: 'utf8' }).trim();
if (status !== '') {
  console.error('reference:check FEHLGESCHLAGEN – Referenzklon ist verändert:');
  console.error(status);
  process.exit(1);
}

const pushUrl = execSync('git remote get-url --push origin', { cwd: REF, encoding: 'utf8' }).trim();
if (pushUrl !== 'DISABLED') {
  console.error(`reference:check FEHLGESCHLAGEN – Push-URL ist nicht deaktiviert (${pushUrl}).`);
  process.exit(1);
}

console.log('reference:check OK – Referenzklon unverändert, Push deaktiviert.');
