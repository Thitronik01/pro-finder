import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadFixtureSegmentDetail } from '@/lib/review-data';
import { reviewPriorityLabel } from '@/lib/review-priority';
import styles from '../../review.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Segmentdetail (intern)',
};

type SegmentPageProps = {
  params: Promise<{ key: string }>;
};

const LANGUAGE_LABEL: Record<string, string> = {
  de: 'Deutsch',
  en: 'Englisch',
};

function languageLabel(code: string): string {
  return LANGUAGE_LABEL[code] ?? code;
}

export default async function SegmentDetailPage({ params }: SegmentPageProps) {
  const { key } = await params;
  const segmentKey = decodeURIComponent(key).toUpperCase();
  const detail = loadFixtureSegmentDetail(segmentKey);
  if (!detail) notFound();

  const pageRange =
    detail.sourcePageEnd !== detail.sourcePageStart
      ? `${detail.sourcePageStart}–${detail.sourcePageEnd}`
      : `${detail.sourcePageStart}`;

  return (
    <>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Segmentdetail</p>
        <h1>{detail.title}</h1>
        <p className={styles.lede}>
          <span className={styles.itemKey}>{detail.key}</span>
        </p>
        <p className={styles.meta}>
          <Link href="/review">Zurück zur Warteschlange</Link>
          {detail.packetId ? (
            <>
              {' · '}
              <Link href={`/review?priority=P0&packet=${detail.packetId}`}>
                Alle Segmente aus {detail.packetId}
              </Link>
            </>
          ) : null}
          {detail.taskHref ? (
            <>
              {' · '}
              <Link href={detail.taskHref}>Zugehörige Aufgabenseite</Link>
            </>
          ) : null}
        </p>
      </header>

      <div className={styles.alert} role="note">
        <h2>Entwurf, keine Freigabe</h2>
        <p>
          Dieses Segment steht auf <strong>{detail.status}</strong>. Weder die Gegenprüfung gegen
          eine zweite Sprachfassung noch die Aufnahme in ein Prüfpaket ist eine technische oder
          rechtliche Freigabe.
        </p>
      </div>

      <section aria-labelledby="classification-title">
        <h2 id="classification-title">Einordnung</h2>
        <div
          className={styles.tableRegion}
          role="region"
          aria-labelledby="classification-caption"
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption id="classification-caption" className={styles.caption}>
              Einordnung des Segments nach Art, Priorität, Generation, Sprache und Prüfpaket
            </caption>
            <tbody>
              <tr>
                <th scope="row">Art</th>
                <td>{detail.segmentType}</td>
              </tr>
              <tr>
                <th scope="row">Priorität</th>
                <td>{reviewPriorityLabel(detail.priority)}</td>
              </tr>
              <tr>
                <th scope="row">Sicherheitsklasse</th>
                <td>{detail.safetyClass}</td>
              </tr>
              <tr>
                <th scope="row">Generation</th>
                <td>{detail.generation}</td>
              </tr>
              <tr>
                <th scope="row">Sprache</th>
                <td lang={detail.language}>{languageLabel(detail.language)}</td>
              </tr>
              <tr>
                <th scope="row">Prüfpaket</th>
                <td>{detail.packetId ?? 'keinem Paket zugeordnet'}</td>
              </tr>
              <tr>
                <th scope="row">Aufgabe</th>
                <td>{detail.taskSlug}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="text-title">
        <h2 id="text-title">Übersetzbarer Text</h2>
        <p className={styles.meta}>
          Genau dieser Text geht in Übersetzung und Veröffentlichung. Gesperrte Inhalte –
          Befehlszeichenfolgen, Beispielrufnummern, Koordinaten, Kartenadressen und Kontaktdaten –
          stehen niemals hier, sondern ausschließlich im Änderungsgrund.
        </p>
        <pre className={styles.sourceText} lang={detail.language}>
          {detail.bodyMd}
        </pre>
      </section>

      <section aria-labelledby="evidence-title">
        <h2 id="evidence-title">Beleg und Gegenprüfung</h2>
        <div
          className={styles.tableRegion}
          role="region"
          aria-labelledby="evidence-caption"
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption id="evidence-caption" className={styles.caption}>
              Quelle, Region, Kontext und Ergebnis der Gegenprüfung
            </caption>
            <tbody>
              <tr>
                <th scope="row">Quelle</th>
                <td>
                  {detail.sourceDocKey}, PDF-Seite {pageRange}
                  {detail.pageStatus ? ` (Seitenstatus: ${detail.pageStatus})` : null}
                </td>
              </tr>
              <tr>
                <th scope="row">Region auf der Seite</th>
                <td>{detail.sourceRegion}</td>
              </tr>
              <tr>
                <th scope="row">Kontext davor</th>
                <td>{detail.prevContext ?? 'Beginn des Abschnitts'}</td>
              </tr>
              <tr>
                <th scope="row">Kontext danach</th>
                <td>{detail.nextContext ?? 'Ende des Abschnitts'}</td>
              </tr>
              <tr>
                <th scope="row">Prüfsumme</th>
                <td>
                  <span className={styles.itemKey}>{detail.checksum}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Änderungsgrund und Ergebnis der Gegenprüfung</h3>
        <p>{detail.changeReason}</p>

        {detail.pageCrosscheckNote ? (
          <>
            <h3>Was an dieser Quellseite geprüft wurde</h3>
            <p>{detail.pageCrosscheckNote}</p>
          </>
        ) : (
          <>
            <h3>Was an dieser Quellseite geprüft wurde</h3>
            <p>
              Für diese Seite ist keine unabhängige Gegenprüfung vermerkt. Der Beleg stützt sich
              allein auf die Extraktion selbst.
            </p>
          </>
        )}

        <h3>Registerbezüge</h3>
        {detail.discrepancyRefs.length ? (
          <ul>
            {detail.discrepancyRefs.map((ref) => (
              <li key={ref}>
                <Link href={`/review?dsc=${ref}`}>{ref}</Link> – alle Segmente mit diesem Bezug. Der
                Eintrag selbst steht in <code>docs/DISCREPANCIES.md</code>.
              </li>
            ))}
          </ul>
        ) : (
          <p>Dieses Segment beruft sich auf keinen Registereintrag.</p>
        )}
      </section>

      <section aria-labelledby="counterpart-title">
        <h2 id="counterpart-title">Gegenstück in der anderen Sprachfassung</h2>
        {detail.counterpart ? (
          <>
            <p className={styles.meta}>
              Die Seitenpaarung ist belegt und nicht über einen festen Versatz gebildet; sie steht
              in <code>docs/CROSSCHECK_SN045_DE_EN.md</code>. Beide Fassungen sind eigenständige
              Extraktionen ihrer jeweiligen Quelle, keine Übersetzungen voneinander.
            </p>
            <h3 lang={detail.counterpart.language}>{detail.counterpart.title}</h3>
            <p className={styles.meta}>
              <span className={styles.itemKey}>{detail.counterpart.key}</span> ·{' '}
              {languageLabel(detail.counterpart.language)} · {detail.counterpart.sourceLabel} ·{' '}
              <Link href={`/review/segment/${detail.counterpart.key}`}>Dieses Segment öffnen</Link>
            </p>
            <pre className={styles.sourceText} lang={detail.counterpart.language}>
              {detail.counterpart.bodyMd}
            </pre>
          </>
        ) : (
          <p>
            Für diese Fundstelle ist kein Gegenstück in einer anderen Sprachfassung erfasst. Eine
            Gegenprüfung dieses Segments stützt sich damit nicht auf ein zweites Dokument.
          </p>
        )}
      </section>
    </>
  );
}
