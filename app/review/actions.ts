'use server';

import { redirect } from 'next/navigation';
import { createServerSupabaseClient, getSupabasePublicConfig } from '@/lib/supabase/server';

export async function signIn(formData: FormData) {
  if (process.env.DATA_MODE !== 'supabase' || !getSupabasePublicConfig()) {
    redirect('/review/login?fehler=konfiguration');
  }

  const email = formData.get('email');
  const password = formData.get('password');
  if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
    redirect('/review/login?fehler=eingabe');
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect('/review/login?fehler=anmeldung');

  redirect('/review');
}

export async function signOut() {
  if (process.env.DATA_MODE === 'supabase' && getSupabasePublicConfig()) {
    const supabase = await createServerSupabaseClient();
    await supabase.auth.signOut();
  }
  redirect('/review/login');
}
