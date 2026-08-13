import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSupabasePublicConfig } from '@/lib/supabase/server';
import { signIn } from '../actions';
import styles from '../review.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Anmeldung zur Reviewoberfläche',
};

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

const ERROR_MESSAGES: Record<string, string> = {
  anmeldung: 'Die Anmeldung ist fehlgeschlagen. E-Mail-Adresse und Passwort prüfen.',
  eingabe: 'E-Mail-Adresse und Passwort sind erforderlich.',
  konfiguration: 'Supabase Auth ist für diesen Deploy nicht vollständig konfiguriert.',
};

export default async function ReviewLoginPage({ searchParams }: LoginPageProps) {
  if (process.env.DATA_MODE !== 'supabase') redirect('/review');

  const params = await searchParams;
  const errorKey = first(params.fehler);
  const configured = getSupabasePublicConfig() !== null;

  return (
    <article className={styles.loginPanel} aria-labelledby="login-title">
      <p className={styles.eyebrow}>Interner Arbeitsbereich</p>
      <h1 id="login-title">Zur Reviewoberfläche anmelden</h1>
      <p>
        Nur eingeladene Projektmitglieder erhalten Zugriff. Es gibt auf dieser Seite keine
        Selbstregistrierung.
      </p>

      {!configured ? (
        <div className={styles.alert} role="alert">
          <h2>Staging noch nicht verbunden</h2>
          <p>
            Projekt-URL und Publishable Key fehlen. Die öffentliche Anleitung bleibt verfügbar;
            Reviewdaten werden nicht angezeigt.
          </p>
        </div>
      ) : (
        <form action={signIn} className={styles.loginForm}>
          {errorKey ? (
            <p className={styles.formError} role="alert">
              {ERROR_MESSAGES[errorKey] ?? ERROR_MESSAGES.anmeldung}
            </p>
          ) : null}
          <div>
            <label htmlFor="email">E-Mail-Adresse</label>
            <input id="email" name="email" type="email" autoComplete="username" required />
          </div>
          <div>
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>
          <button type="submit">Anmelden</button>
        </form>
      )}

      <p>
        <Link href="/pro-finder/start">Zur öffentlichen Anleitung</Link>
      </p>
    </article>
  );
}
