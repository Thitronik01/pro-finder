import { describe, expect, it } from 'vitest';
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
});
