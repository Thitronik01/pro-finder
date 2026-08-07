# Manuelle Accessibility-Testmatrix

Stand: 2026-08-07. `offen` bedeutet: nicht ausgeführt. Automatische axe-Prüfungen ersetzen
keinen Test mit assistiven Technologien und keine Konformitätserklärung.

## Automatisierter Lauf (Playwright + axe)

Am 2026-08-07 lief die Suite erstmals mit echtem Browser: 32 von 32 Tests bestanden,
über Chromium und ein 375-px-Mobilprofil. Der erste Lauf hatte fünf Fehlschläge, die auf
drei reale Mängel in der eigenen Oberfläche zurückgingen. Alle drei sind behoben:

1. **Scrollbereiche ohne Tastaturzugang** (`/dashboard`, axe-Regel
   `scrollable-region-focusable`, Schwere „serious"). Die Tabellen lagen in einer
   scrollenden `<section>` ohne Fokus — ohne Maus war der Inhalt nicht erreichbar. Der
   Scrollbereich ist jetzt ein eigenes Element mit `role="region"`, `tabindex="0"` und
   sichtbarem Fokus.
2. **Zwei verschachtelte Regionen mit identischem Namen** (`/review`). `<section>` und
   der innere Scrollbereich hießen beide „Content-Warteschlange"; beim Navigieren nach
   Regionen war nicht unterscheidbar, wo man landet. Der innere Bereich wird jetzt über
   die Tabellen-Caption benannt — die Tabellen haben dadurch zugleich erstmals eine
   Caption.
3. **Horizontaler Seitenüberlauf bei 320 CSS-Pixeln** (`/review`, 325 px — Verstoß gegen
   WCAG 1.4.10 Reflow). Zwei Ursachen: `grid-template-columns: 1fr` bedeutet
   `minmax(auto, 1fr)` und schrumpft nicht unter `min-content`; zusätzlich war die
   Überschrift „Reviewoberfläche" als unteilbares Kompositum breiter als die Spalte.
   Behoben durch `minmax(0, 1fr)` und global `hyphens: auto` mit `overflow-wrap`.

Der dritte Punkt ist über `/review` hinaus relevant: Deutsche Komposita sprengen schmale
Spalten regelmäßig. Die Silbentrennung greift jetzt dokumentweit und stützt sich auf das
serverseitig korrekt gesetzte `lang`-Attribut.

Was der Lauf **nicht** belegt: axe prüft nur einen Teil der WCAG-Kriterien maschinell.
Die folgende Matrix bleibt maßgeblich.

| Test                                      | Zielroute/-artefakt                                   | Status             | Nachweis/Abweichung                         |
| ----------------------------------------- | ----------------------------------------------------- | ------------------ | ------------------------------------------- |
| Nur Tastatur, Fokusreihenfolge, Skip-Link | Start, Generationen, Wechsel, Task, Review, Dashboard | offen              | Playwright deckt Teilpfad automatisiert ab  |
| NVDA + Firefox                            | deutsche Start-/Taskroute                             | offen              | Testperson und Version protokollieren       |
| NVDA + Chrome                             | deutsche und englische Route                          | offen              | Sprachwechsel und Tabellen prüfen           |
| VoiceOver + Safari/macOS                  | kompletter Kernpfad                                   | offen              |                                             |
| VoiceOver iOS                             | Start, QR-Ziel, Task                                  | offen              |                                             |
| TalkBack Android                          | Start, NFC-/QR-Ziel, Task                             | offen              |                                             |
| 200 % Zoom                                | alle Kernrouten                                       | offen              | kein Informationsverlust                    |
| 400 % Zoom / Reflow                       | alle Kernrouten                                       | offen              | 320 CSS px, kein 2D-Scrollen außer Tabellen |
| Windows Forced Colors                     | alle Kernrouten                                       | offen              | Status/Fokus nicht nur farblich             |
| Reduced Motion                            | alle Kernrouten                                       | offen              | kein Autoplay/unnötige Animation            |
| Bilder deaktiviert                        | Tasks mit Abbildungen                                 | offen              | Textalternative und Schritte vollständig    |
| Langsame Verbindung                       | Start und Task                                        | offen              | Basisinhalt bleibt nutzbar                  |
| Kartenkontrast/Reflexion                  | physischer Andruck                                    | offen, blockierend | Messwert und Lichtbedingungen erfassen      |
| QR-Scan iOS/Android                       | physischer Andruck                                    | offen, blockierend | Distanz, Winkel, Licht, Beschädigung        |
| NFC iOS/Android + Write-Lock              | physische Karte                                       | offen, blockierend | erst nach URL-Freigabe sperren              |
| Taktile Orientierung                      | physische Karte                                       | offen, blockierend | betroffene Testpersonen einbeziehen         |
| Braille                                   | physische Karte                                       | offen, blockierend | Dienstleister + Braille lesende Personen    |
