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
  '/pro-finder/sn-045-plus/en/determine-device-generation',
  '/pro-finder/sn-045-plus/en/choose-installation-location',
  '/pro-finder/sn-045-plus/en/wire-connections',
  '/pro-finder/sn-045-plus/en/prepare-and-insert-sim-card',
  '/pro-finder/sn-045-plus/en/install-app-and-activate',
  '/pro-finder/sn-045-plus/en/manage-destination-numbers',
  '/pro-finder/sn-045-plus/en/understand-status-led',
  '/pro-finder/sn-045-plus/en/understand-messages',
  '/pro-finder/sn-045-plus/en/use-geofencing',
  '/pro-finder/sn-045-plus/en/request-status-report',
  '/pro-finder/sn-045-plus/en/control-outputs',
  '/pro-finder/sn-045-plus/en/troubleshoot-problems',
  '/pro-finder/sn-045-plus/en/technical-data',
  '/pro-finder/sn-045-plus/en/get-help-and-support',
  '/pro-finder/wechsel?von=sn-045-plus&nach=sn-001-044&sprache=de',
  '/dashboard',
  '/review',
  '/review/segment/IBA045-DE-P010-S01-BETRIEBSARTENTABELLE',
  '/review/packet/P0-09',
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

test('englischer Pilot zeigt vierzehn belegte Entwurfsaufgaben ohne Platzhalter', async ({
  page,
}) => {
  await page.goto('/pro-finder/sn-045-plus/en');
  const taskLinks = page.getByRole('navigation', { name: 'Tasks' }).getByRole('link');
  await expect(taskLinks).toHaveCount(14);
  await expect(page.getByText('– draft', { exact: true })).toHaveCount(14);
  await expect(page.getByText('– in preparation', { exact: true })).toHaveCount(0);

  await page.getByRole('link', { name: 'Wire the connections and module' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByText('Draft – content has not yet been reviewed')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
  const pinTable = page.getByRole('table', {
    name: 'Table 1: Wire the connections and module',
  });
  await expect(pinTable.getByRole('columnheader', { name: 'Pin' })).toBeVisible();
  await expect(pinTable.getByRole('row', { name: '1 Ground (GND)' })).toBeVisible();

  await page.goto('/pro-finder/sn-045-plus/en/get-help-and-support');
  await expect(
    page.getByText('Withheld pending current confirmation', { exact: true }),
  ).toHaveCount(3);
  await expect(page.locator('a[href^="tel:"], a[href^="mailto:"]')).toHaveCount(0);
});

test('Segmentdetail zeigt Beleg, Gegenprüfung und Gegenstück der anderen Sprachfassung', async ({
  page,
}) => {
  await page.goto('/review/segment/IBA045-DE-P025-S02-STROMAUFNAHME-LUECKE');
  await expect(page.locator('h1')).toHaveCount(1);

  // Der Aenderungsgrund ist der eigentliche Beleg der Gegenpruefung.
  await expect(
    page.getByRole('heading', { name: 'Änderungsgrund und Ergebnis der Gegenprüfung' }),
  ).toBeVisible();
  await expect(page.getByText(/bei 400 dpi zeichengenau gesichert/)).toBeVisible();

  // Der Seitenvermerk aus dem Seitenrecord muss sichtbar sein, nicht nur in der Datei stehen.
  await expect(
    page.getByRole('heading', { name: 'Was an dieser Quellseite geprüft wurde' }),
  ).toBeVisible();

  // Registerbezug ist verlinkt und filtert die Warteschlange.
  await page.getByRole('link', { name: 'DSC-088' }).click();
  await expect(page).toHaveURL(/dsc=DSC-088/);
  await expect(page.getByRole('region', { name: 'Content-Warteschlange' })).toContainText(
    'DSC-088',
  );

  // Das englische Gegenstueck ist erreichbar und als eigenstaendige Extraktion markiert.
  await page.goto('/review/segment/IBA045-DE-P025-S02-STROMAUFNAHME-LUECKE');
  await expect(page.getByText(/keine Übersetzungen voneinander/)).toBeVisible();
  await page.getByRole('link', { name: 'Dieses Segment öffnen' }).click();
  await expect(page).toHaveURL(/IBA045-EN-P049-/);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('Paketansicht zeigt beide Sprachfassungen und den Prüfstand der Quellseiten', async ({
  page,
}) => {
  await page.goto('/review/packet/P0-12');
  await expect(page.locator('h1')).toHaveText('P0-12');
  // Ein SN-045-Paket enthaelt beide Fassungen; das ist der Kern der Gegenpruefung.
  await expect(page.getByText(/Deutsch und Englisch/)).toBeVisible();
  const rows = page.locator('table').first().locator('tbody tr');
  await expect(rows.filter({ hasText: 'IBA045-DE-' }).first()).toBeVisible();
  await expect(rows.filter({ hasText: 'IBA045-EN-' }).first()).toBeVisible();
  // Alle Quellseiten dieses Pakets sind gegengelesen - die Ansicht muss das ausweisen.
  await expect(page.getByText(/von 14 Segmenten/)).toBeVisible();
  // Registerbezuege sind verlinkt.
  await page.getByRole('link', { name: 'DSC-088' }).first().click();
  await expect(page).toHaveURL(/dsc=DSC-088/);
});

test('Paketansicht weist einen unbekannten Schlüssel als 404 aus', async ({ page }) => {
  const response = await page.goto('/review/packet/P0-99');
  expect(response?.status()).toBe(404);
});

test('Quellseiten-Filter trennt gegengeprüfte von nur gesichteten Segmenten', async ({ page }) => {
  await page.goto('/review?pageStatus=validated&language=de&generation=sn-045-plus');
  // Auf die Tabelle einschraenken: das Filterformular enthaelt dieselben Begriffe
  // als Auswahloptionen und wuerde eine Negativpruefung auf der Sektion verfaelschen.
  const rows = page.locator('table').first().locator('tbody tr');
  await expect(rows.first()).toBeVisible();
  await expect(rows.filter({ hasText: 'unabhängig gegengeprüft' })).toHaveCount(await rows.count());
});

test('Sprachfilter trennt deutsche und englische Segmente', async ({ page }) => {
  await page.goto('/review?language=en&priority=P0');
  const queue = page.getByRole('region', { name: 'Content-Warteschlange' });
  await expect(queue).toContainText('IBA045-EN-');
  await expect(queue).not.toContainText('IBA045-DE-');
});

test('Reviewoberfläche ist im Fixture-Modus lesend und filterbar', async ({ page }) => {
  await page.goto('/review');
  await expect(page.locator('h1')).toHaveText('Reviewoberfläche');
  await expect(page.getByText('Git-Fixtures', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Freigaben bleiben gesperrt' })).toBeVisible();
  await expect(page.getByText('167 / 167', { exact: true })).toBeVisible();

  // exact: true, weil getByLabel per Teilzeichenkette sucht und die
  // Tabellen-Caption der Warteschlange den Begriff ebenfalls enthaelt.
  await page.getByLabel('Gerätegeneration', { exact: true }).selectOption('sn-001-044');
  await page.getByRole('button', { name: 'Filter anwenden' }).click();
  await expect(page).toHaveURL(/generation=sn-001-044/);
  await expect(page.getByRole('region', { name: 'Content-Warteschlange' })).toContainText(
    'sn-001-044',
  );

  await page.getByRole('link', { name: 'P0-01 als Paket öffnen' }).click();
  await expect(page).toHaveURL(/\/review\/packet\/P0-01/);
  await expect(page.locator('h1')).toHaveText('P0-01');
  await page.getByRole('link', { name: 'Als gefilterte Warteschlange öffnen' }).click();
  await expect(page).toHaveURL(/packet=P0-01/);
  await expect(page.getByText('6 Treffer', { exact: true })).toBeVisible();
  await page.goto('/review?generation=sn-001-044');

  await page.getByRole('link', { name: 'P0-02 als Paket öffnen' }).click();
  await expect(page).toHaveURL(/\/review\/packet\/P0-02/);
  await expect(page.locator('h1')).toHaveText('P0-02');
  await page.getByRole('link', { name: 'Als gefilterte Warteschlange öffnen' }).click();
  await expect(page).toHaveURL(/packet=P0-02/);
  await expect(page.getByText('11 Treffer', { exact: true })).toBeVisible();
  await page.goto('/review?generation=sn-001-044');

  await page.getByRole('link', { name: 'P0-03 als Paket öffnen' }).click();
  await expect(page).toHaveURL(/\/review\/packet\/P0-03/);
  await expect(page.locator('h1')).toHaveText('P0-03');
  await page.getByRole('link', { name: 'Als gefilterte Warteschlange öffnen' }).click();
  await expect(page).toHaveURL(/packet=P0-03/);
  await expect(page.getByText('11 Treffer', { exact: true })).toBeVisible();
  await page.goto('/review?generation=sn-001-044');

  await page.getByRole('link', { name: 'P0-04 als Paket öffnen' }).click();
  await expect(page).toHaveURL(/\/review\/packet\/P0-04/);
  await expect(page.locator('h1')).toHaveText('P0-04');
  await page.getByRole('link', { name: 'Als gefilterte Warteschlange öffnen' }).click();
  await expect(page).toHaveURL(/packet=P0-04/);
  await expect(page.getByText('8 Treffer', { exact: true })).toBeVisible();
  await page.goto('/review?generation=sn-001-044');

  await page.getByRole('link', { name: 'P0-05 als Paket öffnen' }).click();
  await expect(page).toHaveURL(/\/review\/packet\/P0-05/);
  await expect(page.locator('h1')).toHaveText('P0-05');
  await page.getByRole('link', { name: 'Als gefilterte Warteschlange öffnen' }).click();
  await expect(page).toHaveURL(/packet=P0-05/);
  await expect(page.getByText('5 Treffer', { exact: true })).toBeVisible();
  await page.goto('/review?generation=sn-001-044');

  await page.getByLabel('Prüfpaket', { exact: true }).selectOption('P0-01');
  await page.getByRole('button', { name: 'Filter anwenden' }).click();
  await expect(page).toHaveURL(/packet=P0-01/);
  await expect(page.getByText('6 Treffer', { exact: true })).toBeVisible();
});

test('Kernseiten verursachen bei 320 CSS-Pixeln keinen Seiten-Horizontalscroll', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  for (const path of [
    '/pro-finder/start',
    '/pro-finder/sn-045-plus/de/status-led',
    '/review',
    '/review/segment/IBA045-DE-P010-S01-BETRIEBSARTENTABELLE',
  ]) {
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
  for (const path of [
    '/pro-finder/start',
    '/review',
    '/review/segment/IBA045-DE-P010-S01-BETRIEBSARTENTABELLE',
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  }
});

test('Kernrouten respektieren Reduced Motion ohne laufende Bewegung oder Autoplay', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const paths = [
    '/pro-finder/start',
    '/pro-finder/sn-001-044/de',
    '/pro-finder/sn-045-plus/de/status-led',
    '/pro-finder/sn-045-plus/en/understand-status-led',
    '/pro-finder/wechsel?generation=sn-045-plus&language=de',
    '/review',
    '/dashboard',
  ];

  for (const path of paths) {
    await page.goto(path);
    expect(
      await page.evaluate(() => {
        const parseDurations = (value: string) =>
          value.split(',').map((duration) => {
            const normalized = duration.trim();
            return normalized.endsWith('ms')
              ? Number.parseFloat(normalized)
              : Number.parseFloat(normalized) * 1000;
          });

        const nonReducedStyles = [...document.querySelectorAll('*')]
          .map((element) => {
            const style = getComputedStyle(element);
            return {
              element: element.tagName.toLowerCase(),
              animationMs: Math.max(...parseDurations(style.animationDuration)),
              transitionMs: Math.max(...parseDurations(style.transitionDuration)),
            };
          })
          .filter(({ animationMs, transitionMs }) => animationMs > 1 || transitionMs > 1);

        const runningAnimations = document
          .getAnimations()
          .filter((animation) => animation.playState === 'running').length;
        const autoplayMedia = document.querySelectorAll('audio[autoplay], video[autoplay]').length;

        return { autoplayMedia, nonReducedStyles, runningAnimations };
      }),
      `${path} enthält trotz Reduced Motion Bewegung`,
    ).toEqual({ autoplayMedia: 0, nonReducedStyles: [], runningAnimations: 0 });
  }
});
