import { defineConfig } from 'vitest/config';
import path from 'node:path';

// .mts stellt sicher, dass Vitest die Konfiguration mit dem nativen ESM-Loader liest.

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      // Nur fuer Tests: siehe tests/stubs/server-only.ts.
      'server-only': path.resolve(__dirname, 'tests/stubs/server-only.ts'),
    },
  },
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
  },
});
