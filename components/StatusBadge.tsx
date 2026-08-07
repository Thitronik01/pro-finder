import styles from './StatusBadge.module.css';

const LABELS: Record<string, string> = {
  entwurf: 'Entwurf – inhaltlich noch nicht geprüft',
  in_review: 'In Prüfung',
  freigegeben: 'Fachlich freigegeben',
  platzhalter: 'In Vorbereitung – Inhalt folgt nach der Seitenprüfung',
};

const LABELS_EN: Record<string, string> = {
  entwurf: 'Draft – content has not yet been reviewed',
  in_review: 'Under review',
  freigegeben: 'Technically approved',
  platzhalter: 'In preparation – content follows after the page-by-page review',
};

/**
 * Status wird immer als Text ausgegeben (nie nur über Farbe) und ist damit auch
 * für Screenreader und Forced-Colors-Modi eindeutig.
 */
export function StatusBadge({
  status,
  language = 'de',
}: {
  status: keyof typeof LABELS | string;
  language?: 'de' | 'en';
}) {
  const english = language === 'en';
  const label = (english ? LABELS_EN : LABELS)[status] ?? status;
  return (
    <p className={`${styles.badge} badge`}>
      <strong>{english ? 'Status:' : 'Status:'}</strong> {label}
    </p>
  );
}
