import type { Metadata } from 'next';
import Link from 'next/link';
import { GENERATION_LABELS, GENERATIONS } from '@/lib/content/schema';
import styles from './wechsel.module.css';

type Gen = (typeof GENERATIONS)[number];

function isGeneration(value: string | undefined): value is Gen {
  return value === 'sn-001-044' || value === 'sn-045-plus';
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ sprache?: string }>;
}): Promise<Metadata> {
  const { sprache } = await searchParams;
  return {
    title:
      sprache === 'en'
        ? 'Confirm device-generation change'
        : 'Gerätegeneration wechseln – Bestätigung',
  };
}

/**
 * Ausdrückliche Bestätigung des Generationswechsels (ohne JavaScript, rein über Links),
 * damit Anleitungen für „bis SN-044" und „ab SN-045" nie unbemerkt vermischt werden.
 */
export default async function WechselPage({
  searchParams,
}: {
  searchParams: Promise<{ von?: string; nach?: string; sprache?: string }>;
}) {
  const { von, nach, sprache } = await searchParams;
  const lang = sprache === 'en' ? 'en' : 'de';
  const english = lang === 'en';

  if (!isGeneration(von) || !isGeneration(nach) || von === nach) {
    return (
      <>
        <h1>{english ? 'Choose a device generation' : 'Gerätegeneration wählen'}</h1>
        <p>
          {english
            ? 'Please choose the appropriate manual on the start page.'
            : 'Bitte wählen Sie die Anleitung über die Startseite aus.'}
        </p>
        <p>
          <Link href="/pro-finder/start">
            {english ? 'Go to the manual start page' : 'Zur Startseite der Anleitung'}
          </Link>
        </p>
      </>
    );
  }

  // Die englische Pilotfassung existiert nur für „ab SN-045"; beim Wechsel auf die ältere
  // Generation wird deshalb auf Deutsch gewechselt und das deutlich gesagt.
  const targetLang = nach === 'sn-001-044' ? 'de' : lang;
  const targetHref = `/pro-finder/${nach}/${targetLang}`;
  const label = (generation: Gen) => {
    if (!english) return GENERATION_LABELS[generation];
    return generation === 'sn-001-044' ? 'up to SN-044' : 'from SN-045';
  };

  return (
    <>
      <h1>{english ? 'Switch device generation?' : 'Gerätegeneration wechseln?'}</h1>
      <p className={styles.confirmBox}>
        {english
          ? 'You are currently reading the manual for device generation '
          : 'Sie lesen gerade die Anleitung für die Gerätegeneration '}
        <strong>{label(von)}</strong>.
        {english
          ? ' You are about to switch to the manual for '
          : ' Sie sind dabei, zur Anleitung für '}
        <strong>{label(nach)}</strong>
        {english ? '.' : ' zu wechseln.'}
      </p>
      <p>
        {english
          ? 'Operation and installation differ between the two device generations. Switch only if your device serial number belongs to the other generation.'
          : 'Die beiden Gerätegenerationen unterscheiden sich in Bedienung und Montage. Wechseln Sie nur, wenn die Seriennummer Ihres Geräts zur anderen Generation gehört.'}
      </p>
      {nach === 'sn-001-044' && lang === 'en' ? (
        <p lang="en">
          Note: the manual for devices up to SN-044 is currently available in German only. You will
          switch to the German version.
        </p>
      ) : null}
      <ul className={styles.actions}>
        <li>
          <Link href={targetHref}>
            {english
              ? `Yes, switch to the manual ${label(nach)}`
              : `Ja, zur Anleitung „${label(nach)}“ wechseln`}
          </Link>
        </li>
        <li>
          <Link href={`/pro-finder/${von}/${lang}`}>
            {english ? `No, stay with ${label(von)}` : `Nein, bei „${label(von)}“ bleiben`}
          </Link>
        </li>
      </ul>
    </>
  );
}
