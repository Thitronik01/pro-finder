import { readFile } from 'node:fs/promises';

const MIN_FONT_SIZE_MM = 2.12;
const cardDirectory = new URL('./', import.meta.url);

const cards = [
  {
    file: 'card-front.svg',
    required: [
      'data-card-status="draft"',
      'data-placeholder="qr"',
      'data-placeholder="braille"',
      'QR-FLÄCHE',
      'PLATZHALTER',
      'URL-ENTWURF:',
      'URL OFFEN',
      'NICHT SCANNBAR',
    ],
  },
  {
    file: 'card-back.svg',
    required: [
      'data-card-status="draft"',
      'data-placeholder="braille"',
      '[TELEFON OFFEN]',
      '[E-MAIL OFFEN]',
      'URL-ENTWURF:',
      'ZIEL OFFEN',
    ],
  },
];

const removedProductionAnnotations = [
  'fühlbare Kerbe',
  'Karten-Revision',
  'Maße durch Dienstleister',
  'Rahmen um den QR-Code',
  'NFC-Bereich fühlbar',
];

let failed = false;

for (const card of cards) {
  const source = await readFile(new URL(card.file, cardDirectory), 'utf8');
  const errors = [];

  if (!source.includes('width="85.6mm"') || !source.includes('height="53.98mm"')) {
    errors.push('Endformat ist nicht 85,6 × 53,98 mm.');
  }

  if (!source.includes('viewBox="0 0 85.6 53.98"')) {
    errors.push('viewBox stimmt nicht millimetergenau mit dem Endformat überein.');
  }

  const textTags = [...source.matchAll(/<text\b([^>]*)>/gu)];
  if (textTags.length === 0) {
    errors.push('Keine sichtbaren Texte gefunden.');
  }

  for (const [index, match] of textTags.entries()) {
    const fontSize = match[1].match(/\bfont-size="([0-9.]+)"/u);
    if (!fontSize) {
      errors.push(`Text ${index + 1} hat keine explizite Schriftgröße.`);
      continue;
    }

    const sizeInMillimetres = Number(fontSize[1]);
    if (!Number.isFinite(sizeInMillimetres) || sizeInMillimetres < MIN_FONT_SIZE_MM) {
      errors.push(
        `Text ${index + 1} verwendet ${fontSize[1]} mm; erforderlich sind mindestens ${MIN_FONT_SIZE_MM} mm (6 pt).`,
      );
    }
  }

  for (const marker of card.required) {
    if (!source.includes(marker)) {
      errors.push(`Erforderliche Entwurfskennzeichnung fehlt: ${marker}`);
    }
  }

  for (const annotation of removedProductionAnnotations) {
    const visibleText = [...source.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gu)]
      .map((match) => match[1].replace(/<[^>]+>/gu, '').trim())
      .join(' ');
    if (visibleText.includes(annotation)) {
      errors.push(`Interne Produktionsannotation ist noch sichtbar: ${annotation}`);
    }
  }

  if (card.file === 'card-front.svg') {
    const pathCount = [...source.matchAll(/<path\b/gu)].length;
    if (pathCount !== 1) {
      errors.push('Der Kartenentwurf darf noch kein als Pfad eingebettetes QR-Muster enthalten.');
    }
  }

  const visibleText = [...source.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gu)]
    .map((match) => match[1].replace(/<[^>]+>/gu, '').trim())
    .join(' ');
  if (visibleText.includes('@') || /\b(?:tel|mailto):/iu.test(visibleText)) {
    errors.push('Der Entwurf enthält unerwartete Support-Kontaktdaten.');
  }

  if (errors.length > 0) {
    failed = true;
    console.error(`FEHLER ${card.file}`);
    for (const error of errors) console.error(`  - ${error}`);
  } else {
    const smallestFont = Math.min(
      ...textTags.map((match) => Number(match[1].match(/\bfont-size="([0-9.]+)"/u)?.[1])),
    );
    console.log(
      `OK ${card.file}: ${textTags.length} Texte, kleinste Schrift ${smallestFont.toFixed(2)} mm (${(
        smallestFont * 2.83465
      ).toFixed(2)} pt).`,
    );
  }
}

if (failed) process.exitCode = 1;
