export const REVIEW_PRIORITIES = ['P0', 'P1', 'P2'] as const;

export type ReviewPriority = (typeof REVIEW_PRIORITIES)[number];

export const REVIEW_PACKET_IDS = ['P0-01', 'P0-02'] as const;

export type ReviewPacketId = (typeof REVIEW_PACKET_IDS)[number];

const REVIEW_PACKET_BY_SEGMENT_KEY: Record<string, ReviewPacketId> = {
  'BMA044-DE-P004-S01-ANSCHLUSSUEBERSICHT': 'P0-01',
  'BMA044-DE-P006-S01-VERSORGUNG-UND-MESSEINGAENGE': 'P0-01',
  'BMA044-DE-P006-S02-GEMEINSAME-BATTERIE': 'P0-01',
  'BMA044-DE-P006-S03-AUSGAENGE': 'P0-01',
  'BMA044-DE-P006-S05-GPS-ANTENNE-ANSCHLIESSEN': 'P0-01',
  'BMA044-DE-P018-S01-TECHNISCHE-DATEN': 'P0-01',
  'BMA044-DE-P008-S01-SIM-VORAUSSETZUNGEN': 'P0-02',
  'BMA044-DE-P008-S02-PIN-VORGABE-AUSLASSUNG': 'P0-02',
  'BMA044-DE-P009-S01-INBETRIEBNAHME-UND-PROGRAMMIERUNG': 'P0-02',
  'BMA044-DE-P009-S02-ZIELRUFNUMMERNROLLEN': 'P0-02',
  'BMA044-DE-P009-S03-SYNTAX-AUSLASSUNG': 'P0-02',
  'BMA044-DE-P010-S01-PROGRAMMIERSTRUKTUR': 'P0-02',
  'BMA044-DE-P010-S02-SYNTAX-UND-BEISPIELE-AUSLASSUNG': 'P0-02',
  'BMA044-DE-P011-S01-ZIELRUFNUMMERN-LOESCHEN': 'P0-02',
  'BMA044-DE-P011-S02-MASTERNUMMER-UEBERSCHREIBEN': 'P0-02',
  'BMA044-DE-P011-S03-STATUS-LED-NORMALBETRIEB': 'P0-02',
  'BMA044-DE-P011-S04-FARBABHAENGIGE-STATUSANZEIGE': 'P0-02',
};

const PRIORITY_BY_SAFETY_CLASS: Record<string, ReviewPriority> = {
  sicherheitskritisch: 'P0',
  sicherheitsrelevant: 'P1',
  normal: 'P2',
};

export function reviewPriority(safetyClass: string): ReviewPriority {
  return PRIORITY_BY_SAFETY_CLASS[safetyClass] ?? 'P1';
}

export function reviewPacketId(segmentKey: string): ReviewPacketId | null {
  return REVIEW_PACKET_BY_SEGMENT_KEY[segmentKey] ?? null;
}

export function reviewPriorityLabel(priority: ReviewPriority): string {
  switch (priority) {
    case 'P0':
      return 'P0 - sicherheitskritisch';
    case 'P1':
      return 'P1 - sicherheitsrelevant';
    case 'P2':
      return 'P2 - normal';
  }
}

export function compareReviewPriority(
  a: { priority: ReviewPriority; key: string },
  b: { priority: ReviewPriority; key: string },
): number {
  return (
    REVIEW_PRIORITIES.indexOf(a.priority) - REVIEW_PRIORITIES.indexOf(b.priority) ||
    a.key.localeCompare(b.key, 'de')
  );
}
