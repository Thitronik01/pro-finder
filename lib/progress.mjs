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
