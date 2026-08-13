/**
 * Fortschrittsmodell des Piloten (reine Funktionen, von Skripten, Tests und App genutzt).
 *
 * PDF-Seitenstatus → Fortschrittswert in Prozent. `blocked` behält den letzten
 * erreichten Wert, der im Seitenrecord als `progress_percent` gespeichert ist.
 */
export const PAGE_STATUS_VALUES = {
  not_started: 0,
  inspected: 25,
  extracted: 50,
  validated: 75,
  approved: 100,
};

/** Fortschritt einer einzelnen Seite in Prozent. */
export function pageProgress(page) {
  if (page.status === 'blocked') {
    return typeof page.progress_percent === 'number' ? page.progress_percent : 0;
  }
  const value = PAGE_STATUS_VALUES[page.status];
  if (value === undefined) {
    throw new Error(`Unbekannter Seitenstatus: ${page.status}`);
  }
  return value;
}

/** PDF-Fortschritt: Summe der Seitenstatuswerte / Anzahl aller Seiten. */
export function documentProgress(pages) {
  if (pages.length === 0) return 0;
  const sum = pages.reduce((acc, p) => acc + pageProgress(p), 0);
  return sum / pages.length;
}

/** Workstream-Gewichte laut Projektauftrag (Summe = 1). */
export const WEIGHTS = {
  bootstrap: 0.05,
  source_audit: 0.2,
  german_master: 0.2,
  card: 0.1,
  application: 0.2,
  translation: 0.1,
  qa: 0.1,
  handoff: 0.05,
};

export const WORKSTREAM_LABELS = {
  bootstrap: 'Bootstrap',
  source_audit: 'Quelleninventar und PDF-Prüfung',
  german_master: 'Content-Modell und deutscher Master',
  card: 'Setup-Karte',
  application: 'Webanleitung und Review-UI',
  translation: 'Übersetzungspilot',
  qa: 'Accessibility-, Security- und Content-QA',
  handoff: 'Staging und Übergabe',
};

/**
 * Gesamtfortschritt: gewichtete Summe der Workstreams (jeweils 0–100).
 * Fehlende Workstreams gelten als 0.
 */
export function computeOverall(streams) {
  let total = 0;
  for (const [key, weight] of Object.entries(WEIGHTS)) {
    const value = streams[key] ?? 0;
    if (value < 0 || value > 100) {
      throw new Error(`Workstream ${key}: Wert ${value} liegt außerhalb von 0–100.`);
    }
    total += weight * value;
  }
  return total;
}

/**
 * Übersetzungsfortschritt, gewichtet nach Segmentwortzahl:
 * Segmente = [{ words, progress_percent }]
 */
export function translationProgress(segments) {
  const totalWords = segments.reduce((acc, s) => acc + s.words, 0);
  if (totalWords === 0) return 0;
  const weighted = segments.reduce((acc, s) => acc + s.words * s.progress_percent, 0);
  return weighted / totalWords;
}

/**
 * Marker des generierten Abschnitts in docs/PROJECT_STATUS.md.
 *
 * Sie stehen hier und nicht im Skript, damit Skript und Test wörtlich denselben Text
 * benutzen. An diesem Text hängt die Maskierung in `replaceProgressBlock`; eine zweite
 * Kopie im Test prüfte die Maskierung gegen einen harmloseren Marker als den echten.
 */
export const PROGRESS_START =
  '<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->';
export const PROGRESS_END = '<!-- PROGRESS:END -->';

// Die Marker enthalten Klammern und Punkte. Ohne Maskierung würde
// „(generiert … editieren)“ zur Capture-Group und der Ausdruck träfe seinen eigenen
// Quelltext nie – der replace liefe stillschweigend ins Leere.
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Setzt `block` zwischen die Marker in `md` – oder hängt ihn an, wenn die Marker fehlen.
 * Ergebnis ist das neue Markdown, oder `null`, wenn der Block danach nicht in der Datei
 * steht. Dann hat die Ersetzung nicht gegriffen und der Aufrufer muss abbrechen.
 *
 * Eigene Funktion, weil das Erfolgskriterium leicht zu verwechseln ist: Ob sich die
 * *Datei* geändert hat, sagt nichts über den Erfolg. Ein zweiter Lauf mit unveränderten
 * Daten schreibt denselben Block und lässt die Datei zu Recht unberührt. Die frühere
 * Prüfung im Skript verglich Datei mit Datei und hielt genau diesen Normalfall für einen
 * Fehlschlag – das brach die vorgeschriebene Reihenfolge progress → format → check,
 * sobald `npm run progress` zweimal lief. Geprüft wird deshalb, ob der Block *dort steht*.
 * Die Regressionstests dazu stehen in tests/unit/progress.test.ts. Begründung wie bei
 * lib/content/markdown-table.ts: Was Skript und Test gemeinsam benutzen, kann nicht
 * auseinanderlaufen.
 */
export function replaceProgressBlock(md, block, start, end) {
  const hasMarkers = md.includes(start) && md.includes(end);
  // Ersetzung über eine Funktion, nicht über einen String: In einem String-Replacement
  // wären $&, $1 und $` Sonderzeichen. Der Block enthält mit next_action freien Text aus
  // docs/progress-input.json, in dem ein $ vorkommen kann.
  const next = hasMarkers
    ? md.replace(new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`), () => block)
    : `${md}\n\n${block}\n`;
  return next.includes(block) ? next : null;
}
