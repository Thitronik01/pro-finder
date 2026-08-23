import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadFixturePacketOverview } from '@/lib/review-data';
import styles from '../../review.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Prüfpaket (intern)',
};

type PacketPageProps = {
  params: Promise<{ id: string }>;
};

const LANGUAGE_LABEL: Record<string, string> = { de: 'Deutsch', en: 'Englisch' };

export default async function PacketPage({ params }: PacketPageProps) {
  const { id } = await params;
  const overview = loadFixturePacketOverview(decodeURIComponent(id).toUpperCase());
  if (!overview) notFound();

  const open = overview.segments.length - overview.crossCheckedCount;

  return (
    <>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Prüfpaket</p>
        <h1>{overview.id}</h1>
        <p className={styles.lede}>
          {overview.segments.length} zugeordnete Segmente in{' '}
          {overview.languages.map((code) => LANGUAGE_LABEL[code] ?? code).join(' und ')}.
        </p>
        <p className={styles.meta}>
          <Link href="/review">Zurück zur Warteschlange</Link>
          {' · '}
          <Link href={`/review?priority=P0&packet=${overview.id}`}>
            Als gefilterte Warteschlange öffnen
          </Link>
        </p>
      </header>

      <div className={styles.alert} role="note">
        <h2>Arbeitshilfe, keine Freigabe</h2>
        <p>
          Ein Paket bündelt Entscheidungen, es trifft keine. Das zugehörige Dossier mit den einzeln
          referenzierbaren Fragen liegt unter <code>docs/review-packets/</code>. Alle Segmente
          bleiben Entwurf, bis eine protokollierte, unabhängige Entscheidung vorliegt.
        </p>
      </div>

      <section aria-labelledby="basis-title">
        <h2 id="basis-title">Worauf das Paket ruht</h2>
        <ul>
          <li>
            <strong>
              {overview.crossCheckedCount} von {overview.segments.length} Segmenten
            </strong>{' '}
            stützen sich auf eine Quellseite, die unabhängig gegen eine zweite Sprachfassung
            gegengelesen wurde.
            {open > 0 ? (
              <>
                {' '}
                Die übrigen {open} ruhen allein auf der Extraktion selbst – das ist beim Review zu
                berücksichtigen.
              </>
            ) : null}
          </li>
          <li>Betroffene Quellseiten: {overview.sourcePages.join(' · ')}</li>
          <li>
            Berührte Registereinträge:{' '}
            {overview.discrepancyRefs.length ? (
              overview.discrepancyRefs.map((ref, index) => (
                <span key={ref}>
                  {index > 0 ? ', ' : ''}
                  <Link href={`/review?dsc=${ref}`}>{ref}</Link>
                </span>
              ))
            ) : (
              <>keine</>
            )}
          </li>
        </ul>
      </section>

      <section aria-labelledby="segments-title">
        <h2 id="segments-title">Zugeordnete Segmente</h2>
        <div
          className={styles.tableRegion}
          role="region"
          aria-labelledby="packet-caption"
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption id="packet-caption" className={styles.caption}>
              Segmente des Prüfpakets mit Sprache, Art, Sicherheitsklasse, Quelle, Prüfstand der
              Quellseite und Registerbezug
            </caption>
            <thead>
              <tr>
                <th scope="col">Segment</th>
                <th scope="col">Sprache</th>
                <th scope="col">Art</th>
                <th scope="col">Sicherheit</th>
                <th scope="col">Quelle</th>
                <th scope="col">Quellseite geprüft</th>
                <th scope="col">Registerbezug</th>
              </tr>
            </thead>
            <tbody>
              {overview.segments.map((segment) => (
                <tr key={segment.key}>
                  <th scope="row">
                    <Link href={`/review/segment/${segment.key}`}>{segment.title}</Link>
                    <span className={styles.itemKey}>{segment.key}</span>
                  </th>
                  <td lang={segment.language}>
                    {LANGUAGE_LABEL[segment.language] ?? segment.language}
                  </td>
                  <td>{segment.segmentType}</td>
                  <td>{segment.safetyClass}</td>
                  <td>{segment.sourceLabel}</td>
                  <td>
                    {segment.sourcePageStatus === 'validated'
                      ? 'unabhängig gegengeprüft'
                      : (segment.sourcePageStatus ?? 'unbekannt')}
                  </td>
                  <td>
                    {segment.discrepancyRefs.length ? segment.discrepancyRefs.join(', ') : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
