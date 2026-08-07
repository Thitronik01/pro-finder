import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    // Ohne explizite Root-Erkennung zieht Turbopack ein fremdes Lockfile aus dem
    // Benutzerprofil heran und warnt bei jedem Build.
    root: process.cwd(),
  },
  // Der Pilot ist intern: niemals von Suchmaschinen indexieren lassen.
  // Zusätzliche Security Headers werden in netlify.toml je Deploy-Kontext gesetzt.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
