import { describe, expect, it } from 'vitest';
import {
  counterpartPage,
  loadFixtureSegmentDetail,
  loadReferencedDiscrepancyIds,
} from '@/lib/review-data';

describe('Segmentdetail', () => {
  it('liefert Beleg, Änderungsgrund und Seitenvermerk eines gegengelesenen Segments', () => {
    const detail = loadFixtureSegmentDetail('IBA045-DE-P010-S01-BETRIEBSARTENTABELLE');
    expect(detail).not.toBeNull();
    expect(detail?.sourceDocKey).toBe('DOC-IBA-SN045');
    expect(detail?.sourcePageStart).toBe(10);
    expect(detail?.pageStatus).toBe('validated');
    // Der Aenderungsgrund ist der eigentliche Beleg: er nennt, wogegen gegengelesen wurde.
    expect(detail?.changeReason).toMatch(/englische Fassung/);
    expect(detail?.pageCrosscheckNote).toMatch(/Zelle fuer Zelle|Zelle für Zelle/);
    expect(detail?.discrepancyRefs).toContain('DSC-087');
  });

  it('gibt null zurück, statt einen unbekannten Schlüssel zu erfinden', () => {
    expect(loadFixtureSegmentDetail('GIBT-ES-NICHT')).toBeNull();
  });

  it('paart deutsche und englische Seiten über die belegte Tabelle, nicht über einen festen Versatz', () => {
    // Versatz 24 vor Abschnitt 2.8 ...
    expect(counterpartPage('DOC-IBA-SN045', 'de', 8)).toEqual({ language: 'en', page: 32 });
    // ... und 23 danach, weil die Syntaxgrafik deutsch eine eigene Seite belegt (DSC-021).
    expect(counterpartPage('DOC-IBA-SN045', 'de', 18)).toEqual({ language: 'en', page: 41 });
    expect(counterpartPage('DOC-IBA-SN045', 'en', 41)).toEqual({ language: 'de', page: 18 });
    // Fuer Dokumente ohne belegte Paarung wird nichts geraten.
    expect(counterpartPage('DOC-BMA-SN044', 'de', 5)).toBeNull();
  });

  it('findet das Gegenstück in der anderen Sprachfassung', () => {
    const detail = loadFixtureSegmentDetail('IBA045-DE-P025-S02-STROMAUFNAHME-LUECKE');
    expect(detail?.counterpart?.language).toBe('en');
    expect(detail?.counterpart?.key).toMatch(/^IBA045-EN-P049-/);
  });

  it('sammelt die im Bestand tatsächlich verwendeten Registerbezüge', () => {
    const ids = loadReferencedDiscrepancyIds();
    expect(ids).toContain('DSC-088');
    expect(ids).toEqual([...ids].sort());
    expect(ids.every((id) => /^DSC-\d{3}$/.test(id))).toBe(true);
  });
});

describe('Prüfstand der Quellseite in der Warteschlange', () => {
  it('markiert Segmente gegengeprüfter Seiten als validated', async () => {
    const { loadFixtureReviewData } = await import('@/lib/review-data');
    const items = loadFixtureReviewData().items;
    const crossChecked = items.find(
      (item) => item.key === 'IBA045-DE-P010-S01-BETRIEBSARTENTABELLE',
    );
    expect(crossChecked?.sourcePageStatus).toBe('validated');
    // Alle 21 deutschen und 21 englischen SN-045-Seiten sind gegengeprueft.
    const sn045 = items.filter((item) => item.key.startsWith('IBA045-'));
    expect(sn045.length).toBeGreaterThan(0);
    expect(sn045.every((item) => item.sourcePageStatus === 'validated')).toBe(true);
  });
});
