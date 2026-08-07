import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <p>Fehler 404</p>
      <h1>Diese Seite wurde nicht gefunden</h1>
      <p>Der Link ist möglicherweise veraltet oder gehört zu einer anderen Gerätegeneration.</p>
      <p>
        <Link href="/pro-finder/start">Zur Versionsauswahl der Anleitung</Link>
      </p>
    </>
  );
}
