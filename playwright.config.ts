import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // Mobile Viewport: Reflow-Prüfung auf kleinen Bildschirmen (WCAG 1.4.10)
    {
      name: 'mobile-375',
      use: { ...devices['Pixel 7'], viewport: { width: 375, height: 667 } },
    },
  ],
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      APP_ENV: 'local',
      DATA_MODE: 'fixtures',
    },
  },
});
