import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: {
    default: 'Anleitung für den Pro-finder – THITRONIK (interner Pilot)',
    template: '%s – Pro-finder Anleitung (interner Pilot)',
  },
  description:
    'Barrierefreie digitale Anleitung für den THITRONIK Pro-finder. Interner Pilot, Inhalte in Prüfung.',
  robots: { index: false, follow: false },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers();
  const language = requestHeaders.get('x-page-language') === 'en' ? 'en' : 'de';
  const english = language === 'en';

  return (
    <html lang={language}>
      <body>
        <a className="skip-link" href="#main">
          {english ? 'Skip to content' : 'Zum Inhalt springen'}
        </a>
        <header className={styles.header}>
          <p className={styles.brand}>
            <Link href="/pro-finder/start">
              THITRONIK Pro-finder – {english ? 'Manual' : 'Anleitung'}
            </Link>
          </p>
          <p className={styles.pilotNote}>
            {english
              ? 'Internal pilot – content under review, not an official publication'
              : 'Interner Pilot – Inhalte in Prüfung, keine offizielle Veröffentlichung'}
          </p>
        </header>
        <main id="main" className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <nav aria-label={english ? 'Footer' : 'Fußzeile'}>
            <ul className={styles.footerList}>
              <li>
                <Link href="/pro-finder/start">
                  {english ? 'Manual start page' : 'Startseite der Anleitung'}
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  {english ? 'Project progress (internal)' : 'Projektfortschritt (intern)'}
                </Link>
              </li>
              <li>
                <Link href="/review">
                  {english ? 'Review workspace (internal)' : 'Reviewoberfläche (intern)'}
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
