import 'server-only';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export type SupabasePublicConfig = {
  url: string;
  publishableKey: string;
};

export function getSupabasePublicConfig(): SupabasePublicConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!url || !publishableKey) return null;
  return { url, publishableKey };
}

/**
 * Cookie-basierter SSR-Client. Der Secret Key wird bewusst nicht verwendet:
 * alle Review-Abfragen laufen als angemeldete Person durch die RLS-Policies.
 */
export async function createServerSupabaseClient() {
  const config = getSupabasePublicConfig();
  if (!config) {
    throw new Error('Supabase ist für diesen Deploy nicht konfiguriert.');
  }

  const cookieStore = await cookies();
  return createServerClient(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Components dürfen Cookies nicht schreiben. Der Proxy hält
          // die Session auf geschützten Review-Routen aktuell.
        }
      },
    },
  });
}
