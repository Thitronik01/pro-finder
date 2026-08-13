#!/usr/bin/env node
/**
 * Leichtgewichtiger, deterministischer Secret-Scan für alle versionierten und
 * nicht ignorierten Dateien. Treffer geben nur Regel und Pfad aus, nie den Wert.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BINARY_EXTENSIONS = new Set([
  '.pdf',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.woff',
  '.woff2',
  '.zip',
]);

const RULES = [
  ['privater Schlüssel', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['Supabase Secret Key', /\bsb_secret_[A-Za-z0-9._-]{20,}\b/],
  ['GitHub Token', /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}\b/],
  ['GitHub Fine-grained Token', /\bgithub_pat_[A-Za-z0-9_]{20,}\b/],
  ['AWS Access Key', /\bAKIA[0-9A-Z]{16}\b/],
  ['Slack Token', /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  // `[^\S\r\n]` = horizontaler Whitespace. `\s` würde den Zeilenumbruch
  // überspringen und den leeren Platzhalter mit dem Namen der Folgezeile
  // verbinden – ein Fehlalarm auf einer korrekten .env.example.
  ['belegter Supabase-Secret-Wert', /SUPABASE_SECRET_KEY[^\S\r\n]*=[^\S\r\n]*[^\s#][^\r\n]*/],
  ['belegter Netlify-Token', /NETLIFY_AUTH_TOKEN[^\S\r\n]*=[^\S\r\n]*[^\s#][^\r\n]*/],
];

const output = execFileSync(
  'git',
  ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
  { cwd: ROOT, encoding: 'utf8' },
);

const findings = [];
for (const relative of output.split('\0').filter(Boolean)) {
  const file = path.join(ROOT, relative);
  if (!fs.statSync(file).isFile() || BINARY_EXTENSIONS.has(path.extname(file).toLowerCase())) {
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  for (const [name, pattern] of RULES) {
    if (pattern.test(content)) findings.push(`${relative}: ${name}`);
  }
}

if (findings.length > 0) {
  console.error('secrets:check FEHLGESCHLAGEN – potenzielle Geheimnisse gefunden:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log('secrets:check OK – keine bekannten hochriskanten Tokenmuster gefunden.');
