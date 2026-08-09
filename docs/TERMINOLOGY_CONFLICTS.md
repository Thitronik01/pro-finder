# Terminologiekonfliktregister

Stand: 2026-08-09. Konflikte werden dokumentiert; Quellen werden nicht still korrigiert.
Die aktuelle Produktschreibweise des Piloten bleibt bis zur fachlichen Entscheidung
`Pro-finder`.

| ID       | Begriff/Varianten                                                 | Beleg                                                                                                                    | Arbeitsregel                                                                               | Status                                     |
| -------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
| TERM-001 | `Pro-finder` / `Pro-Finder`                                       | Projektauftrag und mehrere PDFs verwenden `Pro-finder`; Referenzplattform und DOC-IBA-SN045-Titel verwenden `Pro-Finder` | Produkttext vorerst `Pro-finder`; Originalzitat unverändert kennzeichnen                   | offen, THITRONIK-Entscheidung erforderlich |
| TERM-002 | `Status-LED` / `Status LED`                                       | Sollschreibweise vs. mehrere PDF-Seiten                                                                                  | Master normalisiert auf `Status-LED`; Originalform im Quellenrecord erhalten               | akzeptierte Arbeitsnormalisierung          |
| TERM-003 | `bis SN-044` / `ab SN-045` / `ab Seriennr. -045` / `SN 0699-045+` | Dokumenttitel und Metadaten                                                                                              | UI verwendet `bis SN-044` und `ab SN-045`; Präfix `0699` und führende Nullen nie entfernen | technische Leseregel/Fundort offen         |
| TERM-004 | `SIM-Karte` / `SIM Karte`                                         | DOC-KA-SN045                                                                                                             | Master verwendet `SIM-Karte`; Original bleibt im Record                                    | akzeptierte Arbeitsnormalisierung          |
| TERM-005 | `THITRONIK App` / `THITRONIK®App` / `THITRONIK® App`              | Kurzanleitungen/Referenz                                                                                                 | UI verwendet `THITRONIK App`; Marken-/Rechtsfreigabe für ® offen                           | offen                                      |
| TERM-006 | `Thitronik GmbH` / `THITRONIK`                                    | juristische Adresse vs. Marke                                                                                            | Marke `THITRONIK`; juristische Firmierung in Quellen nicht umschreiben                     | geklärte Kontextregel                      |
| TERM-007 | `Pro-finder` / `Pro-Zoeker`                                       | DOC-IBA-SN045 Seite 186; niederländische Aktivierung                                                                     | Produktname nie übersetzen; Quellabweichung als DSC-083 erhalten                           | offener niederländischer Sprachreview      |
| TERM-008 | `Hoofdnummer` / `Stamnummer` / `masternummer`                     | DOC-IBA-SN045 Seiten 187 und 189                                                                                         | Keine Variante als niederländischen Master festlegen                                       | offener niederländischer Sprachreview      |
| TERM-009 | `hoofdbedradingsbundel` / `hoofdkabelboom`                        | DOC-IBA-SN045 Seite 189; zwei Bezeichnungen innerhalb desselben Löschvorgangs                                            | Erst nach Bauteil- und Sprachreview vereinheitlichen                                       | offen                                      |
| TERM-010 | `Netwerk zoeken` / `Op het lichtnet zoeken`                       | DOC-IBA-SN045 Seiten 191 und 198; gleicher Betriebszustand                                                               | Technischen Begriff nicht aus der Schlussseite übernehmen                                  | offen; DSC-083                             |

Verbotene Normalisierungen: Seriennummernpräfixe, führende Nullen, SMS-Befehle,
PIN-Regeln, URLs, Telefonnummern, Einheiten, Anschlüsse und Kabelfarben dürfen nie aus
Stilgründen verändert werden.

## Offene Grundsatzfrage: sind SMS-Befehle überhaupt geschützte Token?

`AGENTS.md` und der Projektauftrag behandeln SMS-Befehle als vor der Übersetzung
geschützte Token, die in allen Sprachen identisch bleiben. Der Seiten-Audit bis
2026-08-09 widerlegt diese Annahme für DOC-IBA-SN045: Acht vollständig geprüfte
Sprachfassungen ergeben acht unterschiedliche Profile. Selbst innerhalb einzelner
Fassungen wechseln die Zeichenfolgen; Italienisch nennt `recinto spento` und
`fence disattivato`, Niederländisch `fence off` und `fence uit`. Der niederländische
Positionsbefehl ist zudem nur als `positi` gedruckt, die Hilfe-SMS nennt `POS`.

Damit gibt es drei mögliche Sachlagen, die das Projekt nicht selbst entscheiden darf:
das Gerät akzeptiert beide Befehlssätze, die Befehlssprache ist konfigurierbar, oder eine
der beiden Sprachfassungen ist falsch.

Arbeitsregel bis zur Klärung durch THITRONIK: SMS-Befehle werden **weder** automatisch
übersetzt **noch** automatisch unverändert übernommen. Jeder Befehl bleibt exakt so, wie
er in der jeweiligen Quellsprachfassung steht, wird mit Dokument- und Seitenquelle
geführt und als `sicherheitskritisch` markiert. Der Tokenvergleich darf für Befehle
deshalb keine Gleichheit über Sprachen hinweg erzwingen. Siehe
[DISCREPANCIES.md](DISCREPANCIES.md) DSC-013, DSC-014, DSC-033 und DSC-083.
