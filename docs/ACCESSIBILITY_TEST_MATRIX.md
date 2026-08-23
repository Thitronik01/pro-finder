# Manuelle Accessibility-Testmatrix

Stand: 2026-08-23. `offen` bedeutet: nicht ausgeführt. Automatische axe-Prüfungen ersetzen
keinen Test mit assistiven Technologien und keine Konformitätserklärung.

## Automatisierter Lauf (Playwright + axe)

Der aktuelle Lauf am 2026-08-23 umfasst **86 von 86 bestandene Tests** über Chromium und
ein 375-px-Mobilprofil. Alle vierzehn englischen Taskrouten werden einzeln mit axe
geprüft; zusätzlich sichert ein Browserpfad Entwurfsstatus, englisches `lang`,
Quellenanzeige, die zugängliche Pin-Tabelle und gesperrte Supportlinks. Beim erstmaligen Browserlauf am
2026-08-07 gingen fünf Fehlschläge auf drei reale Mängel in der eigenen Oberfläche
zurück. Alle drei sind behoben:

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

Seit dem 2026-08-13 prüft ein eigener Reduced-Motion-Pfad sieben Kernrouten mit emulierter
Nutzereinstellung `reduce`. Er bricht bei laufenden Animationen, Autoplay-Medien oder
berechneten Animations-/Übergangsdauern über 1 ms ab. Damit ist die technische Reaktion
der Oberfläche automatisiert abgesichert. Die manuelle Betriebssystem-/Browserprüfung
bleibt trotzdem offen.

### Vier weitere Matrixzeilen sind seit dem 2026-08-23 automatisiert

- **Windows Forced Colors** – ein eigener Pfad emuliert `forced-colors: active` über zehn
  Kernrouten und prüft axe, unsichtbar gewordenen Text und die Fokusanzeige. Der Test
  beginnt mit einer Zusicherung, dass die Emulation im verwendeten Browser überhaupt
  greift; ohne sie wäre der Lauf ohne Aussage.
- **200 % Zoom** und **400 % Zoom / Reflow** – geprüft über die CSS-Viewportbreiten 640 und
  320 Pixel, die diesen Zoomstufen auf einem 1280-Pixel-Fenster entsprechen. Der Test
  verlangt neben der Freiheit von Seiten-Horizontalscroll ausdrücklich, dass **keine**
  Überschrift per `display: none` weggeblendet wird, um Platz zu schaffen. Informationsverlust
  ist damit ebenso abgedeckt wie das Scrollverhalten.
- **Bilder deaktiviert** – hier hat der Test etwas anderes ergeben als erwartet. Der erste
  Anlauf blockierte Bildanfragen und prüfte die Textalternativen; eine eingebaute
  Absicherung gegen einen leer durchlaufenden Lauf zeigte, dass **kein einziges Bild**
  blockiert wurde. Die Anwendung bindet überhaupt keine Bilder ein, weder als `img` noch
  als Hintergrundbild. Abbildungen der Quelle sind durchgängig als Text ausgedrückt. Der
  Test schreibt jetzt genau diese stärkere Eigenschaft fest: Es kann kein Bild ausfallen,
  weil es keines gibt. Bindet jemand später eines ein, schlägt er an.

**Was diese vier Zeilen weiterhin nicht belegen:** Ein emulierter Forced-Colors-Modus ist
nicht dasselbe wie das Windows-Kontrastdesign mit seinen Systemfarben, und eine geänderte
Viewportbreite ist nicht dasselbe wie Browserzoom mit skalierten Schriften. Die Zeilen
stehen deshalb auf `automatisiert, manuell offen` – nicht auf `bestanden`.

Was der Lauf **nicht** belegt: axe prüft nur einen Teil der WCAG-Kriterien maschinell.
Die folgende Matrix bleibt maßgeblich.

| Test                                      | Zielroute/-artefakt                                   | Status                       | Nachweis/Abweichung                                                       |
| ----------------------------------------- | ----------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------- |
| Nur Tastatur, Fokusreihenfolge, Skip-Link | Start, Generationen, Wechsel, Task, Review, Dashboard | offen                        | Playwright deckt Teilpfad automatisiert ab                                |
| NVDA + Firefox                            | deutsche Start-/Taskroute                             | offen                        | Testperson und Version protokollieren                                     |
| NVDA + Chrome                             | deutsche und englische Route                          | offen                        | Sprachwechsel und Tabellen prüfen                                         |
| VoiceOver + Safari/macOS                  | kompletter Kernpfad                                   | offen                        |                                                                           |
| VoiceOver iOS                             | Start, QR-Ziel, Task                                  | offen                        |                                                                           |
| TalkBack Android                          | Start, NFC-/QR-Ziel, Task                             | offen                        |                                                                           |
| 200 % Zoom                                | alle Kernrouten                                       | automatisiert, manuell offen | 640 CSS px über 10 Routen; kein Überlauf, keine ausgeblendete Überschrift |
| 400 % Zoom / Reflow                       | alle Kernrouten                                       | automatisiert, manuell offen | 320 CSS px über 10 Routen; Tabellen scrollen in eigener Region            |
| Windows Forced Colors                     | alle Kernrouten                                       | automatisiert, manuell offen | emuliert über 10 Routen: axe, sichtbarer Text, Fokusanzeige               |
| Reduced Motion                            | alle Kernrouten                                       | automatisiert, manuell offen | sieben Kernrouten: keine laufende Animation, kein Autoplay                |
| Bilder deaktiviert                        | alle Kernrouten                                       | **automatisiert bestanden**  | Die Anwendung bindet keine Bilder ein; Abbildungen stehen als Text        |
| Langsame Verbindung                       | Start und Task                                        | offen                        | Basisinhalt bleibt nutzbar                                                |
| Kartenkontrast/Reflexion                  | physischer Andruck                                    | offen, blockierend           | Messwert und Lichtbedingungen erfassen                                    |
| QR-Scan iOS/Android                       | physischer Andruck                                    | offen, blockierend           | Distanz, Winkel, Licht, Beschädigung                                      |
| NFC iOS/Android + Write-Lock              | physische Karte                                       | offen, blockierend           | erst nach URL-Freigabe sperren                                            |
| Taktile Orientierung                      | physische Karte                                       | offen, blockierend           | betroffene Testpersonen einbeziehen                                       |
| Braille                                   | physische Karte                                       | offen, blockierend           | Dienstleister + Braille lesende Personen                                  |
