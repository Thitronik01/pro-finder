import { createServerClient } from '@supabase/ssr';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Die Seitensprache muss bereits im serverseitig erzeugten <html>-Element stimmen.
 * Der Proxy gibt die Sprache der englischen Pilotroute an das Root-Layout weiter;
 * alle anderen Routen verwenden Deutsch.
 */
export async function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const isDevelopment = process.env.NODE_ENV === 'development';
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDevelopment ? " 'unsafe-eval'" : ''};
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    connect-src 'self' https://*.supabase.co wss://*.supabase.co;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  const english =
    request.nextUrl.pathname.startsWith('/pro-finder/sn-045-plus/en') ||
    (request.nextUrl.pathname === '/pro-finder/wechsel' &&
      request.nextUrl.searchParams.get('sprache') === 'en');
  requestHeaders.set('x-page-language', english ? 'en' : 'de');
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', csp);

  let response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const isReviewRoute = request.nextUrl.pathname.startsWith('/review');
  const isLoginRoute = request.nextUrl.pathname.startsWith('/review/login');
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (isReviewRoute && process.env.DATA_MODE === 'supabase' && supabaseUrl && supabaseKey) {
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, cacheHeaders) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request: { headers: requestHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
          Object.entries(cacheHeaders).forEach(([key, value]) => response.headers.set(key, value));
        },
      },
    });

    const { data } = await supabase.auth.getClaims();
    if (!data?.claims && !isLoginRoute) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/review/login';
      loginUrl.search = '';
      const redirectResponse = NextResponse.redirect(loginUrl);
      response.cookies.getAll().forEach((cookie) => redirectResponse.cookies.set(cookie));
      for (const key of ['cache-control', 'expires', 'pragma']) {
        const value = response.headers.get(key);
        if (value) redirectResponse.headers.set(key, value);
      }
      response = redirectResponse;
    }
  }

  if (isReviewRoute) {
    response.headers.set('Cache-Control', 'private, no-store');
  }
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  matcher: [
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
