import { DOC_LABELS, type SourceRef } from '@/lib/content/schema';

/**
 * Quellnachweis bis auf Dokument- und Seitenebene – auf jeder inhaltlichen Seite sichtbar.
 */
export function SourceRefList({
  sources,
  language = 'de',
}: {
  sources: SourceRef[];
  language?: 'de' | 'en';
}) {
  if (sources.length === 0) return null;
  const english = language === 'en';
  return (
    <section aria-labelledby="quellen-heading">
      <h2 id="quellen-heading">{english ? 'Sources' : 'Quellen'}</h2>
      <ul>
        {sources.map((s, i) => (
          <li key={i}>
            <span lang="de">{DOC_LABELS[s.doc]}</span>
            {s.pages
              ? `, ${english ? 'page' : 'Seite'} ${s.pages}`
              : english
                ? ' – page reference pending page-by-page review'
                : ' – Seitenangabe folgt nach der Seitenprüfung'}
            {s.region ? ` (${s.region})` : null}
            {s.note ? ` – ${s.note}` : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
