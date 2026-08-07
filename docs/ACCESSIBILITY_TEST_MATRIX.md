# Manuelle Accessibility-Testmatrix

Stand: 2026-08-06. `offen` bedeutet: nicht ausgeführt. Automatische axe-Prüfungen ersetzen
keinen Test mit assistiven Technologien und keine Konformitätserklärung.

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
