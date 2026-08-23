import { describe, expect, it } from 'vitest';
import { loadAllContentSegments } from '@/lib/content/segment-schema.mjs';
import {
  compareReviewPriority,
  reviewPacketId,
  reviewPriority,
  reviewPriorityLabel,
} from '@/lib/review-priority';

describe('Reviewpriorität', () => {
  it('ordnet Sicherheitsklassen stabil P0 bis P2 zu', () => {
    expect(reviewPriority('sicherheitskritisch')).toBe('P0');
    expect(reviewPriority('sicherheitsrelevant')).toBe('P1');
    expect(reviewPriority('normal')).toBe('P2');
    expect(reviewPriority('unbekannt')).toBe('P1');
  });

  it('sortiert kritische Einträge zuerst und danach nach Schlüssel', () => {
    const items = [
      { priority: 'P2' as const, key: 'C' },
      { priority: 'P0' as const, key: 'B' },
      { priority: 'P0' as const, key: 'A' },
      { priority: 'P1' as const, key: 'D' },
    ];

    expect(items.sort(compareReviewPriority).map((item) => item.key)).toEqual(['A', 'B', 'D', 'C']);
  });

  it('liefert verständliche Beschriftungen ohne reine Farbcodierung', () => {
    expect(reviewPriorityLabel('P0')).toContain('sicherheitskritisch');
    expect(reviewPriorityLabel('P1')).toContain('sicherheitsrelevant');
    expect(reviewPriorityLabel('P2')).toContain('normal');
  });

  it('ordnet nur die sechs Segmente des ersten technischen Prüfpakets P0-01 zu', () => {
    expect(reviewPacketId('BMA044-DE-P004-S01-ANSCHLUSSUEBERSICHT')).toBe('P0-01');
    expect(reviewPacketId('BMA044-DE-P006-S05-GPS-ANTENNE-ANSCHLIESSEN')).toBe('P0-01');
    expect(reviewPacketId('BMA044-DE-P018-S01-TECHNISCHE-DATEN')).toBe('P0-01');
    expect(reviewPacketId('BMA044-DE-P003-S04-EXTERNE-GPS-ANTENNE')).toBeNull();
  });

  it('ordnet die elf sicherheitskritischen SIM- und Programmiersegmente P0-02 zu', () => {
    expect(reviewPacketId('BMA044-DE-P008-S01-SIM-VORAUSSETZUNGEN')).toBe('P0-02');
    expect(reviewPacketId('BMA044-DE-P010-S02-SYNTAX-UND-BEISPIELE-AUSLASSUNG')).toBe('P0-02');
    expect(reviewPacketId('BMA044-DE-P011-S04-FARBABHAENGIGE-STATUSANZEIGE')).toBe('P0-02');
    expect(reviewPacketId('BMA044-DE-P008-S03-SIM-AUSWAHL-UND-ROAMING')).toBeNull();
  });

  it('ordnet die elf Meldungs-, Alarm- und Geofencingsegmente P0-03 zu', () => {
    expect(reviewPacketId('BMA044-DE-P012-S03-DIEBSTAHLMELDUNG')).toBe('P0-03');
    expect(reviewPacketId('BMA044-DE-P014-S03-BERECHTIGTE-NUMMERN')).toBe('P0-03');
    expect(reviewPacketId('BMA044-DE-P015-S03-STATUSBERICHT-ANFORDERN')).toBe('P0-03');
    expect(reviewPacketId('BMA044-DE-P015-S04-STATUSBERICHT-GPS-UND-AUSGAENGE')).toBeNull();
  });

  it('ordnet Montage, Betriebsarten und GPS-Diagnose P0-04 zu', () => {
    expect(reviewPacketId('BMA044-DE-P003-S03-MONTAGEORT')).toBe('P0-04');
    expect(reviewPacketId('BMA044-DE-P005-S03-BETRIEBSART-D-AUSLASSUNG')).toBe('P0-04');
    expect(reviewPacketId('BMA044-DE-P007-S03-SMS-BEFEHL-AUSLASSUNG')).toBe('P0-04');
    expect(reviewPacketId('BMA044-DE-P006-S04-GPS-ANTENNE-MONTIEREN')).toBeNull();
  });

  it('ordnet Ausgangssteuerung und Positionsbewertung P0-05 zu', () => {
    expect(reviewPacketId('BMA044-DE-P016-S01-AUSGAENGE-UEBERSICHT')).toBe('P0-05');
    expect(reviewPacketId('BMA044-DE-P017-S03-POSITION-UND-UTC-ZEIT')).toBe('P0-05');
    expect(reviewPacketId('BMA044-DE-P017-S01-POSITION-IN-KARTEN-NUTZEN')).toBeNull();
  });

  it('ordnet SIM-Vorbereitung und Aktivierung ab SN-045 P0-06 zu', () => {
    expect(reviewPacketId('IBA045-DE-P013-S04-SIM-VORBEREITEN')).toBe('P0-06');
    expect(reviewPacketId('IBA045-DE-P014-S04-AKTIVIERUNG-OHNE-APP')).toBe('P0-06');
    expect(reviewPacketId('IBA045-DE-P013-S05-IPHONE-IMESSAGES')).toBeNull();
  });

  it('ordnet Zielrufnummern und Programmiernachricht ab SN-045 P0-07 zu', () => {
    expect(reviewPacketId('IBA045-DE-P015-S03-ZIELRUFNUMMERNARTEN')).toBe('P0-07');
    expect(reviewPacketId('IBA045-DE-P016-S02-KENNZEICHEN-LUECKE')).toBe('P0-07');
    expect(reviewPacketId('IBA045-DE-P017-S04-UEBERSCHREIBEN-MASTERNUMMER')).toBe('P0-07');
    expect(reviewPacketId('IBA045-DE-P017-S02-SIM-EINGELEGT')).toBeNull();
  });

  it('deckt alle 51 sicherheitskritischen Segmente mit genau einem Prüfpaket ab', () => {
    const p0Segments = loadAllContentSegments().filter(
      ({ segment }) => reviewPriority(segment.safety_class) === 'P0',
    );

    expect(p0Segments).toHaveLength(51);
    for (const { file, segment } of p0Segments) {
      expect(reviewPacketId(segment.segment_key), file).not.toBeNull();
    }
  });
});
