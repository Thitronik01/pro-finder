import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { loadFixtureReviewData, loadSupabaseReviewData, type ReviewItem } from '@/lib/review-data';
import { createServerSupabaseClient, getSupabasePublicConfig } from '@/lib/supabase/server';
import { REVIEW_PACKET_IDS, reviewPriorityLabel, type ReviewPriority } from '@/lib/review-priority';
import { signOut } from './actions';
import styles from './review.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Reviewoberfläche (intern)',
};

type ReviewPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined): string {
  const selected = Array.isArray(value) ? value[0] : value;
  return selected?.trim() ?? '';
}

function filterItems(
  items: ReviewItem[],
  generation: string,
  status: string,
  priority: string,
  packet: string,
  query: string,
): ReviewItem[] {
  const normalizedQuery = query.toLocaleLowerCase('de');
  return items.filter(
    (item) =>
      (!generation || item.generation === generation) &&
      (!status || item.status === status) &&
      (!priority || item.priority === priority) &&
      (!packet || item.packetId === packet) &&
      (!normalizedQuery ||
        `${item.title} ${item.key} ${item.sourceLabel} ${item.packetId ?? ''}`
          .toLocaleLowerCase('de')
          .includes(normalizedQuery)),
  );
}

function formatStatusCounts(counts: Record<string, number>): string {
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b, 'de'))
    .map(([status, count]) => `${status}: ${count}`)
    .join(', ');
}

export default async function ReviewPage({ searchParams }: ReviewPageProps) {
  const useSupabase = process.env.DATA_MODE === 'supabase';

  if (useSupabase && !getSupabasePublicConfig()) {
    return (
      <>
        <h1>Reviewoberfläche</h1>
        <div className={styles.alert} role="alert">
          <h2>Staging ist noch nicht verbunden</h2>
          <p>
            Die erforderlichen Supabase-Umgebungsvariablen fehlen. Es werden keine internen Daten
            angezeigt. Details stehen in <code>docs/NETLIFY_STAGING.md</code>.
          </p>
        </div>
      </>
    );
  }

  const reviewContext = useSupabase
    ? await (async () => {
        const supabase = await createServerSupabaseClient();
        const { data: claimsData } = await supabase.auth.getClaims();
        if (!claimsData?.claims) redirect('/review/login');
        return {
          accountLabel:
            typeof claimsData.claims.email === 'string' ? claimsData.claims.email : 'angemeldet',
          data: await loadSupabaseReviewData(supabase),
        };
      })()
    : { accountLabel: null, data: loadFixtureReviewData() };
  const { accountLabel, data } = reviewContext;

  const params = await searchParams;
  const generation = first(params.generation);
  const status = first(params.status);
  const priority = first(params.priority);
  const packet = first(params.packet);
  const query = first(params.q);
  const filteredItems = filterItems(data.items, generation, status, priority, packet, query);
  const drafts = data.items.filter((item) => item.placeholder).length;
  const safetyOpen = data.items.filter(
    (item) => item.safetyClass !== 'normal' && item.status !== 'freigegeben',
  ).length;
  const p0Items = data.items.filter((item) => item.priority === 'P0');
  const preparedP0 = p0Items.filter((item) => item.packetId !== null).length;
  const inspectedPages = data.documents.reduce(
    (sum, document) =>
      sum +
      Object.entries(document.statusCounts)
        .filter(([pageStatus]) => !['not_started', 'blocked'].includes(pageStatus))
        .reduce((documentSum, [, count]) => documentSum + count, 0),
    0,
  );

  return (
    <>
      <header className={styles.pageHeader}>
        <div>
          <p className={styles.eyebrow}>Interner Arbeitsbereich · nur lesend</p>
          <h1>Reviewoberfläche</h1>
          <p className={styles.projectName}>{data.projectName}</p>
          <p className={styles.lede}>
            Prüfwarteschlange für Content, Quellen, Übersetzungen und bekannte Widersprüche.
          </p>
        </div>
        <div className={styles.sessionBox}>
          <p>
            Datenmodus:{' '}
            <strong>{data.mode === 'supabase' ? 'Supabase + RLS' : 'Git-Fixtures'}</strong>
          </p>
          {accountLabel ? <p className={styles.account}>{accountLabel}</p> : null}
          {data.mode === 'supabase' ? (
            <form action={signOut}>
              <button type="submit" className={styles.secondaryButton}>
                Abmelden
              </button>
            </form>
          ) : null}
        </div>
      </header>

      {data.error ? (
        <p className={styles.alert} role="alert">
          {data.error}
        </p>
      ) : null}

      <section aria-labelledby="summary-title">
        <h2 id="summary-title">Arbeitsstand</h2>
        <dl className={styles.metrics}>
          <div>
            <dt>Content-Segmente</dt>
            <dd>{data.items.length}</dd>
          </div>
          <div>
            <dt>Offene Entwürfe</dt>
            <dd>{drafts}</dd>
          </div>
          <div>
            <dt>Sicherheitsreviews offen</dt>
            <dd>{safetyOpen}</dd>
          </div>
          <div>
            <dt>P0 in Prüfpaketen</dt>
            <dd>
              {preparedP0} / {p0Items.length}
            </dd>
          </div>
          <div>
            <dt>PDF-Seiten mind. inspiziert</dt>
            <dd>{inspectedPages}</dd>
          </div>
          <div>
            <dt>Übersetzungen</dt>
            <dd>{data.translationCount}</dd>
          </div>
          <div>
            <dt>Asset-Anfragen</dt>
            <dd>{data.assetRequestCount}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="queue-title">
        <div className={styles.sectionHeading}>
          <div>
            <h2 id="queue-title">Content-Warteschlange</h2>
            <p>{filteredItems.length} Treffer</p>
          </div>
          <Link href="/dashboard">Gesamtfortschritt ansehen</Link>
        </div>

        <aside className={styles.packetNotice} aria-labelledby="review-packets-title">
          <h3 id="review-packets-title">Technische Prüfpakete</h3>
          <ul>
            <li>
              <strong>P0-01:</strong> sechs Segmente zu Elektrik, Ausgängen, GPS und technischen
              Daten. Dossier: <code>docs/review-packets/P0-01-ELEKTRIK-SN044.md</code>.{' '}
              <Link href="/review?generation=sn-001-044&priority=P0&packet=P0-01">
                P0-01 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-02:</strong> elf Segmente zu SIM, PIN, Zielrufnummern, Programmierung,
              Löschen und Status-LED. Dossier:{' '}
              <code>docs/review-packets/P0-02-SIM-ZIELRUFNUMMERN-SN044.md</code>.{' '}
              <Link href="/review?generation=sn-001-044&priority=P0&packet=P0-02">
                P0-02 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-03:</strong> elf Segmente zu Meldungen, Spannungswarnung, Alarm,
              Berechtigung und Geofencing. Dossier:{' '}
              <code>docs/review-packets/P0-03-MELDUNGEN-ALARM-GEOFENCING-SN044.md</code>.{' '}
              <Link href="/review?generation=sn-001-044&priority=P0&packet=P0-03">
                P0-03 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-04:</strong> acht Segmente zu Montage, Betriebsarten, GPS-Diagnose und
              Reflexionen. Dossier:{' '}
              <code>docs/review-packets/P0-04-MONTAGE-BETRIEBSARTEN-GPS-SN044.md</code>.{' '}
              <Link href="/review?generation=sn-001-044&priority=P0&packet=P0-04">
                P0-04 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-05:</strong> fünf Segmente zu Ausgangssteuerung und Positionsbewertung.
              Dossier: <code>docs/review-packets/P0-05-AUSGAENGE-POSITION-SN044.md</code>.{' '}
              <Link href="/review?generation=sn-001-044&priority=P0&packet=P0-05">
                P0-05 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>Die drei Pakete ab SN-045 sind noch nicht zum Fachreview freigegeben.</strong>{' '}
              Ihre PDF-Seiten stehen auf <code>extracted</code>; die unabhängige Gegenprüfung steht
              aus.
            </li>
            <li>
              <strong>P0-06 (in Vorbereitung, ab SN-045):</strong> fünfzehn Segmente zu Montage,
              Pinbelegung, Versorgung, Ausgängen und technischen Daten. Dossier:{' '}
              <code>docs/review-packets/P0-06-MONTAGE-ANSCHLUSS-BETRIEBSARTEN-SN045.md</code>.{' '}
              <Link href="/review?generation=sn-045-plus&priority=P0&packet=P0-06">
                P0-06 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-07 (in Vorbereitung, ab SN-045):</strong> fünfzehn Segmente zu
              Betriebsarten, den gegenläufigen Pin-3-Schaltschwellen, Geofencing, GPS-Diagnose und
              der Bewertung gespeicherter Positionen. Dossier:{' '}
              <code>docs/review-packets/P0-07-BETRIEBSARTEN-GEOFENCING-SN045.md</code>.{' '}
              <Link href="/review?generation=sn-045-plus&priority=P0&packet=P0-07">
                P0-07 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-08 (in Vorbereitung, ab SN-045):</strong> zehn Segmente zu SIM-Karte,
              Inbetriebnahme, Statusbericht und dem doppelt belegten Anruf. Dossier:{' '}
              <code>docs/review-packets/P0-08-SIM-AKTIVIERUNG-SN045.md</code>.{' '}
              <Link href="/review?generation=sn-045-plus&priority=P0&packet=P0-08">
                P0-08 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-09 (in Vorbereitung, ab SN-045):</strong> neun Segmente zu Zielrufnummern,
              Programmier-SMS und der ungeklärten Berechtigungsregel. Dossier:{' '}
              <code>docs/review-packets/P0-09-ZIELRUFNUMMERN-BERECHTIGUNG-SN045.md</code>.{' '}
              <Link href="/review?generation=sn-045-plus&priority=P0&packet=P0-09">
                P0-09 in der Warteschlange öffnen
              </Link>
            </li>
            <li>
              <strong>P0-10 (in Vorbereitung, ab SN-045):</strong> elf Segmente zu Meldungsarten,
              Alarmwegen, Anlernmodus und den neun Zuständen der Status-LED. Dossier:{' '}
              <code>docs/review-packets/P0-10-MELDUNGEN-ALARMWEGE-SN045.md</code>.{' '}
              <Link href="/review?generation=sn-045-plus&priority=P0&packet=P0-10">
                P0-10 in der Warteschlange öffnen
              </Link>
            </li>
          </ul>
        </aside>

        <form method="get" className={styles.filters} aria-label="Content filtern">
          <div>
            <label htmlFor="filter-query">Suche</label>
            <input
              id="filter-query"
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Titel, Schlüssel, Paket oder Quelle"
            />
          </div>
          <div>
            <label htmlFor="filter-generation">Gerätegeneration</label>
            <select id="filter-generation" name="generation" defaultValue={generation}>
              <option value="">Alle</option>
              <option value="sn-001-044">bis SN-044</option>
              <option value="sn-045-plus">ab SN-045</option>
              <option value="beide">beide</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-status">Reviewstatus</label>
            <select id="filter-status" name="status" defaultValue={status}>
              <option value="">Alle</option>
              <option value="entwurf">Entwurf</option>
              <option value="in_review">In Review</option>
              <option value="freigegeben">Freigegeben</option>
              <option value="abgelehnt">Abgelehnt</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-priority">Priorität</label>
            <select id="filter-priority" name="priority" defaultValue={priority}>
              <option value="">Alle</option>
              <option value="P0">P0 - sicherheitskritisch</option>
              <option value="P1">P1 - sicherheitsrelevant</option>
              <option value="P2">P2 - normal</option>
            </select>
          </div>
          <div>
            <label htmlFor="filter-packet">Prüfpaket</label>
            <select id="filter-packet" name="packet" defaultValue={packet}>
              <option value="">Alle</option>
              {REVIEW_PACKET_IDS.map((packetId) => (
                <option key={packetId} value={packetId}>
                  {packetId}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Filter anwenden</button>
          <Link href="/review" className={styles.resetLink}>
            Filter zurücksetzen
          </Link>
        </form>

        {filteredItems.length ? (
          <div
            className={styles.tableRegion}
            role="region"
            aria-labelledby="queue-caption"
            tabIndex={0}
          >
            <table className={styles.table}>
              <caption id="queue-caption" className={styles.caption}>
                Segmente der Warteschlange mit Prüfpaket, Priorität, Gerätegeneration, Sprache,
                Reviewstatus, Sicherheitsklasse und Quelle
              </caption>
              <thead>
                <tr>
                  <th scope="col">Segment</th>
                  <th scope="col">Prüfpaket</th>
                  <th scope="col">Priorität</th>
                  <th scope="col">Generation/Sprache</th>
                  <th scope="col">Status</th>
                  <th scope="col">Sicherheit</th>
                  <th scope="col">Quelle</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.key}>
                    <th scope="row">
                      {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
                      <span className={styles.itemKey}>{item.key}</span>
                    </th>
                    <td>{item.packetId ?? '—'}</td>
                    <td>{reviewPriorityLabel(item.priority as ReviewPriority)}</td>
                    <td>
                      {item.generation}, <span lang={item.language}>{item.language}</span>
                    </td>
                    <td>{item.status}</td>
                    <td>{item.safetyClass}</td>
                    <td>{item.sourceLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>Keine Treffer</h3>
            <p>Filter ändern oder zurücksetzen. Es wurden keine Inhalte ausgeblendet gelöscht.</p>
          </div>
        )}
      </section>

      <section aria-labelledby="sources-title">
        <h2 id="sources-title">PDF-Seitenstatus</h2>
        <div
          className={styles.tableRegion}
          role="region"
          aria-labelledby="sources-caption"
          tabIndex={0}
        >
          <table className={styles.table}>
            <caption id="sources-caption" className={styles.caption}>
              Original-PDFs mit Seitenzahl und Anzahl der Seiten je Prüfstatus
            </caption>
            <thead>
              <tr>
                <th scope="col">Dokument</th>
                <th scope="col">Seiten</th>
                <th scope="col">Statuszähler</th>
              </tr>
            </thead>
            <tbody>
              {data.documents.map((document) => (
                <tr key={document.key}>
                  <th scope="row">{document.key}</th>
                  <td>{document.pageCount}</td>
                  <td>{formatStatusCounts(document.statusCounts) || 'keine Datensätze'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="findings-title">
        <div className={styles.sectionHeading}>
          <div>
            <h2 id="findings-title">Offene Widersprüche</h2>
            <p>{data.findings.length} erfasste Befunde</p>
          </div>
        </div>
        {data.findings.length ? (
          <ol className={styles.findings}>
            {data.findings.slice(0, 30).map((finding) => (
              <li key={finding.key}>
                <h3>{finding.title}</h3>
                <p>{finding.detail}</p>
                <p className={styles.meta}>
                  Status: {finding.status}; Schwere: {finding.severity}
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className={styles.emptyState}>Keine Widersprüche im gewählten Datenmodus erfasst.</p>
        )}
        {data.findings.length > 30 ? (
          <p>
            Es werden die ersten 30 Befunde angezeigt. Für die vollständige Liste Datenbank oder
            Seitenrecords verwenden.
          </p>
        ) : null}
      </section>

      <aside className={styles.notice} aria-labelledby="workflow-note">
        <h2 id="workflow-note">Freigaben bleiben gesperrt</h2>
        <p>
          Diese Pilotansicht ist absichtlich nur lesend. Statuswechsel erfolgen ausschließlich über
          die abgesicherten Supabase-Transitionen mit unabhängigen Reviews; die UI dafür ist noch
          nicht freigegeben.
        </p>
      </aside>
    </>
  );
}
