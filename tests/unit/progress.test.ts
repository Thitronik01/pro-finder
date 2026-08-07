import { describe, expect, it } from 'vitest';
import {
  computeOverall,
  documentProgress,
  pageProgress,
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
