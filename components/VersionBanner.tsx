import Link from 'next/link';
import { GENERATION_LABELS } from '@/lib/content/schema';
import type { Generation } from '@/lib/content/content';
import styles from './VersionBanner.module.css';

/**
 * Macht die Gerätegeneration auf jeder versionierten Seite eindeutig sichtbar –
 * auch für Screenreader – und bietet den ausdrücklich zu bestätigenden Wechsel an.
 */
export function VersionBanner({
  generation,
  language,
}: {
  generation: Generation;
  language: 'de' | 'en';
}) {
  const generationLabel = (value: Generation) =>
    language === 'en'
      ? value === 'sn-001-044'
        ? 'up to SN-044'
        : 'from SN-045'
      : GENERATION_LABELS[value];
  const label = generationLabel(generation);
  const other: Generation = generation === 'sn-045-plus' ? 'sn-001-044' : 'sn-045-plus';
  const otherLabel = generationLabel(other);
  const english = language === 'en';
  const regionLabel = english ? 'Device generation' : 'Gerätegeneration';
  return (
    <div className={`${styles.banner} version-banner`} role="region" aria-label={regionLabel}>
      <p className={styles.text}>
        <strong>
          {english ? 'Device generation' : 'Gerätegeneration'}: {label}
        </strong>{' '}
        · {english ? 'Language: English' : 'Sprache: Deutsch'}
      </p>
      <p className={styles.switch}>
        <Link
          href={`/pro-finder/wechsel?von=${generation}&nach=${other}&sprache=${language}`}
          aria-label={
            english
              ? `Switch to device generation ${otherLabel} – the change is confirmed on the next page`
              : `Zur Gerätegeneration ${otherLabel} wechseln – Wechsel wird auf der nächsten Seite bestätigt`
          }
        >
          {english
            ? `Switch to generation ${otherLabel} …`
            : `Zur Generation „${otherLabel}“ wechseln …`}
        </Link>
      </p>
    </div>
  );
}
