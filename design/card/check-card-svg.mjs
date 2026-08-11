import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const MIN_FONT_SIZE_MM = 2.12;
const cardDirectory = new URL('./', import.meta.url);
const conceptDirectory = new URL('./concepts/user-drafts-2026-08-11/', import.meta.url);

const conceptReferences = [
  [
    '01-orientation-notch.png',
    1722834,
    '56e74d2380e705a974ad335831d6e80596eb03d8702878ee844fe19b8a79dff9',
  ],
  [
    '02-back-nfc-support.png',
    1874999,
    '77c40f155180c500a37f400d7ab55025f4a6a2ee2d8e2db7a7d40d37b96d9ab7',
  ],
  [
    '03-front-back-presentation.png',
    1933148,
    'a38e6a50c650f002bce33a948fef4965cbff4467046b419ca09bc51abed66a33',
  ],
  ['04-qr-detail.png', 2149438, '2e2e1e7242add9cb7649a9e0228983ab9f6e3903f3f7a0614608279fd4cdb705'],
  [
    '05-nfc-detail-a.png',
    2144174,
    '83363b6c321be52bb166b6c365fc98f697b35ea03aa8306aa60f1692c7b533c0',
  ],
  [
    '06-front-layout.png',
    1940050,
    '10ad5bd8d1e2df61bf5a6fbe85e3568da1b9abdd1290073258fc6723ce9562b0',
  ],
  [
    '07-nfc-detail-b.png',
    2144174,
    '83363b6c321be52bb166b6c365fc98f697b35ea03aa8306aa60f1692c7b533c0',
  ],
];

const cards = [
  {
    file: 'card-front.svg',
    side: 'front',
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
    side: 'back',
    required: [
      'data-card-status="draft"',
      'data-placeholder="braille"',
      '[TELEFON OFFEN]',
      '[E-MAIL OFFEN]',
      'URL-ENTWURF:',
      'ZIEL OFFEN',
    ],
  },
  {
    file: 'card-front-de-example.svg',
    side: 'front',
    required: [
      'data-card-status="draft"',
      'data-card-language="de"',
      'data-placeholder="qr"',
      'data-placeholder="braille"',
      'QR-FLÄCHE',
      'PLATZHALTER',
      'URL-ENTWURF:',
      'NICHT SCANNBAR',
      'Pro-finder',
    ],
  },
  {
    file: 'card-back-de-example.svg',
    side: 'back',
    required: [
      'data-card-status="draft"',
      'data-card-language="de"',
      'data-placeholder="braille"',
      '[TELEFON OFFEN]',
      '[E-MAIL OFFEN]',
      'NFC-ZIEL NOCH OFFEN',
      'Pro-finder',
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

  if (card.side === 'front') {
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

for (const [file, expectedBytes, expectedHash] of conceptReferences) {
  const content = await readFile(new URL(file, conceptDirectory));
  const actualHash = createHash('sha256').update(content).digest('hex');
  const width = content.readUInt32BE(16);
  const height = content.readUInt32BE(20);
  const errors = [];

  if (content.length !== expectedBytes)
    errors.push(`Dateigröße ${content.length} statt ${expectedBytes} Bytes.`);
  if (actualHash !== expectedHash)
    errors.push(`SHA-256 ${actualHash} stimmt nicht mit dem Übergabestand überein.`);
  if (width !== 1448 || height !== 1086)
    errors.push(`Bildmaße ${width} × ${height} statt 1448 × 1086 Pixel.`);

  if (errors.length > 0) {
    failed = true;
    console.error(`FEHLER ${file}`);
    for (const error of errors) console.error(`  - ${error}`);
  } else {
    console.log(`OK ${file}: ${width} × ${height} Pixel, SHA-256 bestätigt.`);
  }
}

if (failed) process.exitCode = 1;
