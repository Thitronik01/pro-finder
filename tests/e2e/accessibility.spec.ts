import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Automatisierte Accessibility-Prüfung (axe-core, WCAG 2.x A/AA) und
 * Tastatur-Bedienbarkeit der zentralen Nutzerpfade.
 *
 * Wichtig: axe ersetzt keine manuellen Tests mit assistiven Technologien –
 * die manuelle Testmatrix ist in docs/MASTERPLAN.md dokumentiert und offen.
 */

const PAGES = [
  '/pro-finder/start',
  '/pro-finder/sn-045-plus/de',
  '/pro-finder/sn-045-plus/de/status-led',
  '/pro-finder/sn-001-044/de',
  '/pro-finder/sn-045-plus/en',
  '/pro-finder/wechsel?von=sn-045-plus&nach=sn-001-044&sprache=de',
  '/dashboard',
  '/review',
];

for (const path of PAGES) {
  test(`axe: keine WCAG-A/AA-Verstöße auf ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test('Startseite hat genau eine H1 und einen funktionierenden Skip-Link', async ({ page }) => {
  await page.goto('/pro-finder/start');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveText('Anleitung für den Pro-finder');
  // Skip-Link ist das erste fokussierbare Element und führt zu #main
  await page.keyboard.press('Tab');
  const skip = page.locator('.skip-link');
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
});

test('Versionsauswahl ist rein per Tastatur bedienbar', async ({ page }) => {
  await page.goto('/pro-finder/start');
  const link = page.getByRole('link', { name: 'Anleitung ab SN-045 (Deutsch)' });
  await link.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/pro-finder\/sn-045-plus\/de$/);
  // Gerätegeneration ist sichtbar und für Screenreader als Region ausgezeichnet
  const banner = page.getByRole('region', { name: 'Gerätegeneration' });
  await expect(banner).toContainText('ab SN-045');
});

test('Generationswechsel verlangt eine ausdrückliche Bestätigung', async ({ page }) => {
  await page.goto('/pro-finder/sn-045-plus/de');
  await page.getByRole('link', { name: /Zur Gerätegeneration bis SN-044 wechseln/ }).click();
  await expect(page).toHaveURL(/\/pro-finder\/wechsel/);
  await expect(page.locator('h1')).toContainText('Gerätegeneration wechseln?');
  await page.getByRole('link', { name: /Ja, zur Anleitung „bis SN-044/ }).click();
  await expect(page).toHaveURL(/\/pro-finder\/sn-001-044\/de$/);
});

test('Seitentitel nennt die Gerätegeneration', async ({ page }) => {
  await page.goto('/pro-finder/sn-045-plus/de/status-led');
  await expect(page).toHaveTitle(/ab SN-045/);
  await page.goto('/pro-finder/sn-001-044/de');
  await expect(page).toHaveTitle(/bis SN-044/);
});

test('Dokumentsprache und CSP werden serverseitig korrekt gesetzt', async ({ page }) => {
  const germanResponse = await page.goto('/pro-finder/start');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  const csp = germanResponse?.headers()['content-security-policy'] ?? '';
  expect(csp).toContain("script-src 'self' 'nonce-");
  expect(csp).toContain("'strict-dynamic'");
  expect(csp).not.toContain("'unsafe-inline'");

  await page.goto('/pro-finder/sn-045-plus/en');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('Reviewoberfläche ist im Fixture-Modus lesend und filterbar', async ({ page }) => {
  await page.goto('/review');
  await expect(page.locator('h1')).toHaveText('Reviewoberfläche');
  await expect(page.getByText('Git-Fixtures', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Freigaben bleiben gesperrt' })).toBeVisible();

  await page.getByLabel('Gerätegeneration').selectOption('sn-001-044');
  await page.getByRole('button', { name: 'Filter anwenden' }).click();
  await expect(page).toHaveURL(/generation=sn-001-044/);
  await expect(page.getByRole('region', { name: 'Content-Warteschlange' })).toContainText(
    'sn-001-044',
  );
});

test('Kernseiten verursachen bei 320 CSS-Pixeln keinen Seiten-Horizontalscroll', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  for (const path of ['/pro-finder/start', '/pro-finder/sn-045-plus/de/status-led', '/review']) {
    await page.goto(path);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth, `${path} hat horizontalen Seitenüberlauf`).toBeLessThanOrEqual(
      dimensions.clientWidth,
    );
  }
});

test('Start- und Reviewseite bleiben in Dark Mode und Reduced Motion axe-sauber', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
  for (const path of ['/pro-finder/start', '/review']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});
