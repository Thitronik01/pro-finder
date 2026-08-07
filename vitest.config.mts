import { defineConfig } from 'vitest/config';
import path from 'node:path';

// .mts stellt sicher, dass Vitest die Konfiguration mit dem nativen ESM-Loader liest.

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
  },
});
