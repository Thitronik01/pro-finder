import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'node_modules/**',
    '.agent/**',
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
  ]),
  {
    rules: {
      // Barrierefreiheit: Bilder ohne Alternativtext sind ein Fehler, keine Warnung.
      'jsx-a11y/alt-text': 'error',
    },
  },
]);
