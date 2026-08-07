import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import styles from './dashboard.module.css';

export const metadata: Metadata = {
  title: 'Projektfortschritt (intern)',
};

type Progress = {
  overall_percent: number;
  weights: Record<string, number>;
  workstreams: Record<string, { label: string; percent: number; note: string }>;
  pdf_documents: {
    doc_id: string;
    page_count: number;
    percent: number;
    status_counts: Record<string, number>;
  }[];
  pdf_pages_total: number;
  blockers: { id: string; title: string; detail: string; severity: string }[];
  safety_critical_open: string[];
  next_action: string;
};

function loadProgress(): Progress | null {
  const file = path.join(process.cwd(), 'docs', 'progress.json');
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8')) as Progress;
}

/**
 * Fortschrittsdashboard: Prozentwerte immer als Text UND <progress>-Element,
 * Blocker und sicherheitskritische Restarbeiten immer sichtbar – Farbe ist nie
 * die einzige Statusanzeige.
 */
export default function DashboardPage() {
  const p = loadProgress();
  if (!p) {
    return (
      <>
        <h1>Projektfortschritt</h1>
        <p>
          Noch kein Fortschrittsstand berechnet. Bitte <code>npm run progress</code> ausführen.
        </p>
      </>
    );
  }
  return (
    <>
      <h1>Projektfortschritt (intern)</h1>
      <p aria-live="off">
        Gesamtfortschritt: <strong>{p.overall_percent} %</strong>
      </p>
      <progress
        max={100}
        value={p.overall_percent}
        aria-hidden="true"
        className={styles.progress}
      />

      <section aria-labelledby="ws-heading" className={styles.scrollSection}>
        <h2 id="ws-heading">Workstreams</h2>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Fortschritt je Workstream mit Gewicht laut Projektauftrag
          </caption>
          <thead>
            <tr>
              <th scope="col">Workstream</th>
              <th scope="col">Gewicht</th>
              <th scope="col">Fortschritt</th>
              <th scope="col">Anmerkung</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(p.workstreams).map(([key, ws]) => (
              <tr key={key}>
                <th scope="row">{ws.label}</th>
                <td>{Math.round((p.weights[key] ?? 0) * 100)} %</td>
                <td>
                  {ws.percent} % <progress max={100} value={ws.percent} aria-hidden="true" />
                </td>
                <td>{ws.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section aria-labelledby="pdf-heading" className={styles.scrollSection}>
        <h2 id="pdf-heading">PDF-Seitenprüfung ({p.pdf_pages_total} Seiten gesamt)</h2>
        <table className={styles.table}>
          <caption className={styles.caption}>
            Seitenweise Prüfung der Original-PDFs; Zähler je Status
          </caption>
          <thead>
            <tr>
              <th scope="col">Dokument</th>
              <th scope="col">Seiten</th>
              <th scope="col">Fortschritt</th>
              <th scope="col">Status-Zähler</th>
            </tr>
          </thead>
          <tbody>
            {p.pdf_documents.map((d) => (
              <tr key={d.doc_id}>
                <th scope="row">{d.doc_id}</th>
                <td>{d.page_count}</td>
                <td>
                  {d.percent} % <progress max={100} value={d.percent} aria-hidden="true" />
                </td>
                <td>
                  {Object.entries(d.status_counts)
                    .map(([status, n]) => `${status}: ${n}`)
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section aria-labelledby="blocker-heading">
        <h2 id="blocker-heading">Offene Blocker ({p.blockers.length})</h2>
        <dl>
          {p.blockers.map((b) => (
            <div key={b.id}>
              <dt>
                {b.id}: {b.title} (Schwere: {b.severity})
              </dt>
              <dd>{b.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="crit-heading">
        <h2 id="crit-heading">Sicherheitskritische Restarbeiten</h2>
        <ul>
          {p.safety_critical_open.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next-heading">
        <h2 id="next-heading">Nächste Aktion</h2>
        <p>{p.next_action}</p>
      </section>
    </>
  );
}
