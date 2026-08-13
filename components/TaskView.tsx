import { notFound } from 'next/navigation';
import { loadTask, type Generation } from '@/lib/content/content';
import { VersionBanner } from './VersionBanner';
import { StatusBadge } from './StatusBadge';
import { SourceRefList } from './SourceRefList';
import { DOC_LABELS } from '@/lib/content/schema';
import { parseMarkdownTable } from '@/lib/content/markdown-table';
import styles from './TaskView.module.css';

/**
 * Die Sicherheitsklasse eines Warnhinweises wird als Wort ausgegeben, nicht nur über
 * Rahmen und Hintergrund. Sonst wäre ein sicherheitskritischer Hinweis von einem
 * normalen ausschließlich optisch zu unterscheiden – für Screenreader, Forced-Colors
 * und Schwarzweißdruck gar nicht.
 */
const WARNUNG_LABEL: Record<string, { de: string; en: string }> = {
  normal: { de: 'Hinweis:', en: 'Note:' },
  sicherheitsrelevant: { de: 'Achtung:', en: 'Caution:' },
  sicherheitskritisch: {
    de: 'Warnung, sicherheitskritisch:',
    en: 'Warning, safety-critical:',
  },
};

/**
 * Detailseite einer Aufgabe: Ziel, Voraussetzungen, Warnungen, Schritte, erwartetes
 * Ergebnis, Fehlerfälle, Gerätegeneration, Quellen und Freigabestatus.
 */
export function TaskView({
  generation,
  language,
  slug,
}: {
  generation: Generation;
  language: 'de' | 'en';
  slug: string;
}) {
  const task = loadTask(generation, language, slug);
  if (!task) notFound();
  const de = language === 'de';
  return (
    <>
      <h1>{task.title}</h1>
      <VersionBanner generation={generation} language={language} />
      <StatusBadge
        status={task.placeholder ? 'platzhalter' : task.review_status}
        language={language}
      />

      <section aria-labelledby="ziel">
        <h2 id="ziel">{de ? 'Ziel' : 'Goal'}</h2>
        <p>{task.goal}</p>
      </section>

      {task.prerequisites.length > 0 && (
        <section aria-labelledby="voraussetzungen">
          <h2 id="voraussetzungen">{de ? 'Voraussetzungen' : 'Prerequisites'}</h2>
          <ul>
            {task.prerequisites.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>
      )}

      {task.warnings.length > 0 && (
        <section aria-labelledby="warnungen">
          <h2 id="warnungen">{de ? 'Warnhinweise' : 'Warnings'}</h2>
          {task.warnings.map((w, i) => {
            const label = WARNUNG_LABEL[w.safety_class] ?? WARNUNG_LABEL.sicherheitskritisch;
            return (
              <div
                key={i}
                className={`${styles.warning} ${w.safety_class !== 'normal' ? styles.warningKritisch : ''}`}
                role="note"
              >
                <p>
                  <strong>{de ? label.de : label.en}</strong> {w.text}
                </p>
              </div>
            );
          })}
        </section>
      )}

      {task.steps.length > 0 && (
        <section aria-labelledby="schritte">
          <h2 id="schritte">{de ? 'Schritte' : 'Steps'}</h2>
          <ol>
            {task.steps.map((s, i) => (
              <li key={i}>
                {s.text}
                {s.expected ? (
                  <p className={styles.expected}>
                    {de ? 'Erwartung: ' : 'Expected: '}
                    {s.expected}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      )}

      {task.tables_md.length > 0 && (
        <section aria-labelledby="tabellen">
          <h2 id="tabellen">{de ? 'Übersicht' : 'Reference'}</h2>
          {task.tables_md.map((markdown, i) => {
            const table = parseMarkdownTable(markdown);
            if (!table) return null;
            const label = de ? `Tabelle ${i + 1}: ${task.title}` : `Table ${i + 1}: ${task.title}`;
            return (
              <div
                key={i}
                className={styles.tableWrapper}
                tabIndex={0}
                role="region"
                aria-label={label}
              >
                <table className={styles.table}>
                  <caption>{label}</caption>
                  <thead>
                    <tr>
                      {table.headers.map((header, column) => (
                        <th scope="col" key={column}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, column) =>
                          column === 0 ? (
                            <th scope="row" key={column}>
                              {cell}
                            </th>
                          ) : (
                            <td key={column}>{cell}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </section>
      )}

      {task.figures.length > 0 && (
        <section aria-labelledby="abbildungen">
          <h2 id="abbildungen">
            {de ? 'Abbildungen und Textalternativen' : 'Figures and text alternatives'}
          </h2>
          {task.figures.map((figure) => (
            <figure key={figure.asset_key} className={styles.figure}>
              <p className={styles.figureStatus}>
                <strong>
                  {de ? 'Quellabbildung in Aufbereitung.' : 'Source figure being prepared.'}
                </strong>{' '}
                {de
                  ? 'Bis das freigegebene Asset vorliegt, ist die vollständige Textalternative maßgeblich.'
                  : 'The complete text alternative is authoritative until the approved asset is available.'}
              </p>
              <p>
                <strong>{de ? 'Kurzbeschreibung:' : 'Short alternative:'}</strong> {figure.alt}
              </p>
              <figcaption>
                <strong>{de ? 'Langbeschreibung:' : 'Long description:'}</strong>{' '}
                {figure.long_description}
              </figcaption>
              {figure.steps_text && figure.steps_text.length > 0 ? (
                <ol>
                  {figure.steps_text.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              ) : null}
              <p className={styles.figureSource}>
                {de ? 'Quelle' : 'Source'}: <span lang="de">{DOC_LABELS[figure.source.doc]}</span>
                {figure.source.pages
                  ? `, ${de ? 'Seite' : 'page'} ${figure.source.pages}`
                  : null}; {de ? 'Asset-Version' : 'asset version'}: {figure.asset_version}
              </p>
            </figure>
          ))}
        </section>
      )}

      {task.expected_result && (
        <section aria-labelledby="ergebnis">
          <h2 id="ergebnis">{de ? 'Erwartetes Ergebnis' : 'Expected result'}</h2>
          <p>{task.expected_result}</p>
        </section>
      )}

      {task.error_cases.length > 0 && (
        <section aria-labelledby="fehler">
          <h2 id="fehler">{de ? 'Wenn etwas nicht funktioniert' : 'Troubleshooting'}</h2>
          <dl>
            {task.error_cases.map((e, i) => (
              <div key={i}>
                <dt>{e.problem}</dt>
                <dd>{e.correction}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {task.placeholder && (
        <p className={styles.placeholderNote}>
          {de
            ? 'Der vollständige Inhalt dieser Aufgabe wird nach der seitenweisen Prüfung der Original-Anleitung ergänzt.'
            : 'The full content of this task will be added after the page-by-page review of the original manual.'}
        </p>
      )}

      <SourceRefList sources={task.sources} language={language} />
    </>
  );
}
