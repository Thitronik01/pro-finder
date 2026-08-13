import Link from 'next/link';
import { loadTasks, type Generation } from '@/lib/content/content';
import { GENERATION_LABELS } from '@/lib/content/schema';
import { VersionBanner } from './VersionBanner';
import { StatusBadge } from './StatusBadge';

/**
 * Übersichtsseite einer Gerätegeneration: aufgabenbasierte Navigation.
 * Platzhalter-Aufgaben werden angezeigt, aber eindeutig als „in Vorbereitung" markiert.
 */
export function GuideOverview({
  generation,
  language,
}: {
  generation: Generation;
  language: 'de' | 'en';
}) {
  const tasks = loadTasks(generation, language);
  const heading =
    language === 'de'
      ? `Anleitung für den Pro-finder (${GENERATION_LABELS[generation]})`
      : `Pro-finder manual (${GENERATION_LABELS[generation]})`;
  return (
    <>
      <h1>{heading}</h1>
      <VersionBanner generation={generation} language={language} />
      {language === 'en' ? (
        <p lang="en">
          Pilot translation. Content is being reviewed; unverified content is clearly marked.
        </p>
      ) : (
        <p>
          Wählen Sie eine Aufgabe. Noch nicht geprüfte Inhalte sind deutlich gekennzeichnet und
          werden nach der seitenweisen Prüfung der Original-Anleitungen ergänzt.
        </p>
      )}
      <nav aria-label={language === 'de' ? 'Aufgaben' : 'Tasks'}>
        <ul>
          {tasks.map((t) => (
            <li key={t.slug}>
              <Link href={`/pro-finder/${generation}/${language}/${t.slug}`}>{t.title}</Link>
              {t.placeholder ? (
                <em> {language === 'de' ? '– in Vorbereitung' : '– in preparation'}</em>
              ) : (
                <em> {language === 'de' ? '– Entwurf' : '– draft'}</em>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {tasks.length === 0 ? <StatusBadge status="platzhalter" language={language} /> : null}
    </>
  );
}
