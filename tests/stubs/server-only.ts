// Vitest laeuft in Node und nicht im React-Server-Kontext. Das echte Paket
// `server-only` wirft dort beim Import. Der Stub erlaubt es, serverseitige
// Ladefunktionen zu testen, ohne die Schutzwirkung im Build aufzuheben:
// Next.js loest weiterhin das echte Paket auf.
export {};
