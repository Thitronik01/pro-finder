# Inhalts-Quellen-Zuordnung: Setup-Karte „THITRONIK Pro-finder"

Status: **Entwurf (v0.2-draft)** · Stand: 2026-08-06

Jedes Inhaltselement der Karte (Vorder- und Rückseite, Dateien `card-front.svg` und
`card-back.svg`) ist hier mit Quelle und Status erfasst. **Kein Element ohne Quellenzeile.**

Statuswerte:

- **belegt** – durch eine vorhandene Quelle gedeckt
- **Platzhalter** – bewusst noch ohne finalen Inhalt
- **zu bestätigen** – Inhalt vorgeschlagen, Freigabe durch THITRONIK steht aus

| Inhaltselement                        | Karteninhalt (Entwurf)                                                                                        | Quelle                                                                                                                                                                                                  | Status                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Produktname                           | „THITRONIK Pro-finder"                                                                                        | Produktseite `https://www.thitronik.de/produkte/produkt/pro-finder/`; Schreibweisenliste in `AGENTS.md` (Abschnitt „Schreibweisen"); ergänzend `sources/pdf/pro_finder-kurzanleitung-international.pdf` | belegt                                                                             |
| Titel „Anleitung / Manual"            | Funktionsbezeichnung der Karte, zweisprachig                                                                  | Projektauftrag Abschnitt 7 (Kartenkonzept: Einstieg in die digitale Anleitung)                                                                                                                          | zu bestätigen (Wortlaut durch THITRONIK)                                           |
| Kurzadresse (gedruckt)                | „thitronik.de/pro-finder/start"                                                                               | Projektauftrag Abschnitt 7 (permanenter Pfad `/pro-finder/start`); Domain von Produktseite abgeleitet                                                                                                   | zu bestätigen durch THITRONIK                                                      |
| QR-Ziel                               | `https://www.thitronik.de/pro-finder/start`                                                                   | Projektauftrag Abschnitt 7; `CARD_REQUIREMENTS.md` Abschnitt 2                                                                                                                                          | zu bestätigen durch THITRONIK (finaler Code erst danach, siehe Platzhalter im SVG) |
| NFC-Ziel                              | identisch mit QR-Ziel: `https://www.thitronik.de/pro-finder/start`                                            | Projektauftrag Abschnitt 7; `CARD_REQUIREMENTS.md` Abschnitte 2–3                                                                                                                                       | zu bestätigen durch THITRONIK                                                      |
| NFC-Beschriftung                      | „NFC: Karte ans Telefon halten"                                                                               | Projektauftrag Abschnitt 7 (barrierefreier Einstieg); Formulierung Entwurf dieses Dokuments                                                                                                             | zu bestätigen (Wortlaut durch THITRONIK / Nutzertest U1/G1)                        |
| Supporthinweis Telefon                | „[TELEFON OFFEN]“                                                                                             | keine belastbare Quelle im Repo vorhanden; bewusst nicht erfunden                                                                                                                                       | Platzhalter – zu bestätigen durch THITRONIK                                        |
| Supporthinweis E-Mail                 | „[E-MAIL OFFEN]“                                                                                              | keine belastbare Quelle im Repo vorhanden; bewusst nicht erfunden                                                                                                                                       | Platzhalter – zu bestätigen durch THITRONIK                                        |
| Mehrsprachigkeitshinweis              | „Anleitung in mehreren Sprachen: thitronik.de/pro-finder/start"                                               | Projektauftrag Abschnitt 7 (mehrsprachige digitale Anleitung); mehrsprachige Quelldokumente in `sources/pdf/` (u. a. `pro_finder-kurzanleitung-international.pdf`)                                      | zu bestätigen (Sprachumfang der Startseite offen)                                  |
| Braille-Text                          | noch kein Wortlaut; im Entwurf nur reservierte Zone „BRAILLE-FLÄCHE · PLATZHALTER“ ohne Punktgeometrie        | `CARD_REQUIREMENTS.md` Abschnitt 7 (verbindliche Anforderung: Festlegung durch qualifizierten Dienstleister, Prüfung durch Braille lesende Testpersonen)                                                | Platzhalter – blockierend offen                                                    |
| Fühlbare Kerbe (taktile Orientierung) | gekappte Ecke oben rechts (vorn) / oben links (hinten); keine interne Erläuterung auf der Druckfläche         | `CARD_REQUIREMENTS.md` Abschnitt 5; Geometrie Entwurf, Validierung über Testplan T1                                                                                                                     | zu bestätigen (Nutzertest offen)                                                   |
| Taktile QR-/NFC-Zonenmarkierung       | durchgezogene Rahmen um QR-Zone (vorn) und NFC-Zone (hinten); keine Produktionsannotation auf der Druckfläche | `CARD_REQUIREMENTS.md` Abschnitt 5; `card-print-spec.md` Abschnitt 4; Validierung über Testplan T2                                                                                                      | zu bestätigen (Nutzertest offen)                                                   |
| Entwurfsstatus                        | „ENTWURF“ sowie maschinenlesbar `data-card-status="draft"`; keine kleine Revisionszeile auf der Druckfläche   | dieses Entwurfspaket (`design/card/`, v0.2-draft)                                                                                                                                                       | belegt (projektintern)                                                             |

## Anmerkungen

- Die Angabe „Projektauftrag Abschnitt 7" bezeichnet den Kartenauftrag des
  Barrierefreiheits-Piloten; das Dokument selbst liegt derzeit **nicht** in diesem
  Repository. Sobald es unter `docs/` abgelegt ist, ist die Referenz auf
  Datei- und Abschnittsebene zu präzisieren.
- `sources/pages/` und `sources/inventory/` dokumentieren die PDF-Quellen. Ein
  versionierter Abzug der Produktseite fehlt weiterhin und sollte als Web-Quellrecord
  ergänzt werden, damit der zusätzliche Beleg für den Produktnamen repo-intern
  reproduzierbar ist.
- Kein Karteninhalt referenziert Gerätegenerationen; falls künftig doch nötig,
  gelten die verbindlichen Schreibweisen „bis SN-044" und „ab SN-045" und die
  Trennungsregeln aus `AGENTS.md`.
