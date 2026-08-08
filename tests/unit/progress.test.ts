import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  computeOverall,
  documentProgress,
  pageProgress,
  PROGRESS_END,
  PROGRESS_START,
  replaceProgressBlock,
  translationProgress,
  WEIGHTS,
} from '@/lib/progress.mjs';

describe('pageProgress', () => {
  it('bildet Seitenstatus auf Prozentwerte ab', () => {
    expect(pageProgress({ status: 'not_started' })).toBe(0);
    expect(pageProgress({ status: 'inspected' })).toBe(25);
    expect(pageProgress({ status: 'extracted' })).toBe(50);
    expect(pageProgress({ status: 'validated' })).toBe(75);
    expect(pageProgress({ status: 'approved' })).toBe(100);
  });

  it('blocked behält den letzten erreichten Wert', () => {
    expect(pageProgress({ status: 'blocked', progress_percent: 50 })).toBe(50);
    expect(pageProgress({ status: 'blocked' })).toBe(0);
  });

  it('wirft bei unbekanntem Status', () => {
    expect(() => pageProgress({ status: 'fertig' })).toThrow();
  });
});

describe('documentProgress', () => {
  it('ist die Summe der Seitenwerte durch die Seitenzahl', () => {
    const pages = [
      { status: 'approved' },
      { status: 'inspected' },
      { status: 'not_started' },
      { status: 'blocked', progress_percent: 75 },
    ];
    expect(documentProgress(pages)).toBe((100 + 25 + 0 + 75) / 4);
  });

  it('ist 0 für leere Dokumente', () => {
    expect(documentProgress([])).toBe(0);
  });
});

describe('computeOverall', () => {
  it('gewichtet laut Projektauftrag (Summe der Gewichte = 1)', () => {
    const sum = Object.values(WEIGHTS).reduce((a, b) => a + b, 0);
    expect(sum).toBeCloseTo(1);
  });

  it('berechnet die gewichtete Summe', () => {
    const all100 = Object.fromEntries(Object.keys(WEIGHTS).map((k) => [k, 100]));
    expect(computeOverall(all100)).toBeCloseTo(100);
    expect(computeOverall({ bootstrap: 100 })).toBeCloseTo(5);
    expect(computeOverall({ source_audit: 50, application: 50 })).toBeCloseTo(0.2 * 50 + 0.2 * 50);
  });

  it('lehnt Werte außerhalb von 0–100 ab', () => {
    expect(() => computeOverall({ bootstrap: 101 })).toThrow();
    expect(() => computeOverall({ bootstrap: -1 })).toThrow();
  });
});

describe('translationProgress', () => {
  it('gewichtet nach Segmentwortzahl', () => {
    const segments = [
      { words: 100, progress_percent: 100 },
      { words: 300, progress_percent: 0 },
    ];
    expect(translationProgress(segments)).toBe(25);
  });

  it('ist 0 ohne Segmente', () => {
    expect(translationProgress([])).toBe(0);
  });
});

describe('replaceProgressBlock', () => {
  const block = [
    PROGRESS_START,
    '',
    '**Gesamtfortschritt: 42 %**',
    '',
    '| Workstream | Gewicht | Fortschritt |',
    '| --- | --- | --- |',
    '| Bootstrap | 5 % | 100 % |',
    '',
    'Offene Blocker: 2 · Nächste Aktion: Seiten 17–26 prüfen',
    '',
    PROGRESS_END,
  ].join('\n');

  const dokument = [
    '# Projektstatus',
    '',
    'Handgeschriebene Einleitung, die erhalten bleiben muss.',
    '',
    PROGRESS_START,
    '',
    '**Gesamtfortschritt: 41 %**',
    '',
    PROGRESS_END,
    '',
    '## Blocker',
    '',
    'Handgeschriebener Abschnitt nach dem Block.',
    '',
  ].join('\n');

  it('ersetzt nur den Bereich zwischen den Markern', () => {
    const md = replaceProgressBlock(dokument, block, PROGRESS_START, PROGRESS_END);
    expect(md).toContain('Handgeschriebene Einleitung, die erhalten bleiben muss.');
    expect(md).toContain('Handgeschriebener Abschnitt nach dem Block.');
    expect(md).toContain('**Gesamtfortschritt: 42 %**');
    expect(md).not.toContain('**Gesamtfortschritt: 41 %**');
  });

  it('meldet einen zweiten Lauf mit unveränderten Daten nicht als Fehlschlag', () => {
    // Regression: Die Erfolgsprüfung verglich früher die Datei mit sich selbst
    // (`md === before`). Beim zweiten Lauf ist die Ersetzung korrekt, die Datei aber zu
    // Recht unverändert – das galt fälschlich als Fehler und brach die vorgeschriebene
    // Reihenfolge progress → format → check ab, sobald `npm run progress` zweimal lief.
    const ersterLauf = replaceProgressBlock(dokument, block, PROGRESS_START, PROGRESS_END);
    expect(ersterLauf).not.toBeNull();

    const zweiterLauf = replaceProgressBlock(ersterLauf, block, PROGRESS_START, PROGRESS_END);
    expect(zweiterLauf).not.toBeNull();
    expect(zweiterLauf).toBe(ersterLauf);
  });

  it('meldet einen Fehlschlag, wenn die Ersetzung nicht greift', () => {
    // Beide Marker stehen in der Datei, aber END vor START: Der Ausdruck findet nichts,
    // der Block landet nicht in der Datei. Genau das muss weiterhin auffallen.
    const verdreht = [
      '# Projektstatus',
      '',
      PROGRESS_END,
      '',
      '**Gesamtfortschritt: 41 %**',
      '',
      PROGRESS_START,
      '',
    ].join('\n');
    expect(replaceProgressBlock(verdreht, block, PROGRESS_START, PROGRESS_END)).toBeNull();
  });

  it('behandelt $-Zeichen im Block als Text', () => {
    // next_action ist freier Text aus docs/progress-input.json. In einem
    // String-Replacement wären $&, $1 und $` Sonderzeichen und würden zu Teilen der
    // Fundstelle expandiert – also zum Markertext selbst.
    const mitDollar = [
      PROGRESS_START,
      '',
      'Nächste Aktion: $& $1 $` in der Preisliste klären',
      '',
      PROGRESS_END,
    ].join('\n');
    const md = replaceProgressBlock(dokument, mitDollar, PROGRESS_START, PROGRESS_END);
    expect(md).toContain('Nächste Aktion: $& $1 $` in der Preisliste klären');
  });

  it('hängt den Block an, wenn die Marker fehlen', () => {
    const ohneMarker = '# Projektstatus\n\nNoch kein Fortschrittsblock.\n';
    const md = replaceProgressBlock(ohneMarker, block, PROGRESS_START, PROGRESS_END);
    expect(md).toContain('Noch kein Fortschrittsblock.');
    expect(md).toContain(block);
  });

  it('die Marker stehen wörtlich so in docs/PROJECT_STATUS.md', () => {
    // Driften Marker und Datei auseinander, ersetzt das Skript nichts mehr, sondern
    // hängt stillschweigend einen zweiten Block an.
    const status = fs.readFileSync(path.join(process.cwd(), 'docs', 'PROJECT_STATUS.md'), 'utf8');
    expect(status).toContain(PROGRESS_START);
    expect(status).toContain(PROGRESS_END);
  });
});
