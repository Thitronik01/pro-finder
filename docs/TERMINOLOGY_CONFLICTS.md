# Terminologiekonfliktregister

Stand: 2026-08-06. Konflikte werden dokumentiert; Quellen werden nicht still korrigiert.
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

Verbotene Normalisierungen: Seriennummernpräfixe, führende Nullen, SMS-Befehle,
PIN-Regeln, URLs, Telefonnummern, Einheiten, Anschlüsse und Kabelfarben dürfen nie aus
Stilgründen verändert werden.

## Offene Grundsatzfrage: sind SMS-Befehle überhaupt geschützte Token?

`AGENTS.md` und der Projektauftrag behandeln SMS-Befehle als vor der Übersetzung
geschützte Token, die in allen Sprachen identisch bleiben. Der Seiten-Audit vom
2026-08-07 widerlegt diese Annahme für DOC-IBA-SN045: dieselbe interne Seite 19 von 23
nennt auf Deutsch `fence an`/`fence aus` und auf Englisch `fence on`/`fence off`; die
Hilfe-SMS nennt auf Deutsch `SCHARF`/`UNSCHARF`, auf Englisch `ARM`/`DISARM`. `status`
und `position` sind dagegen in beiden Fassungen gleich.

Damit gibt es drei mögliche Sachlagen, die das Projekt nicht selbst entscheiden darf:
das Gerät akzeptiert beide Befehlssätze, die Befehlssprache ist konfigurierbar, oder eine
der beiden Sprachfassungen ist falsch.

Arbeitsregel bis zur Klärung durch THITRONIK: SMS-Befehle werden **weder** automatisch
übersetzt **noch** automatisch unverändert übernommen. Jeder Befehl bleibt exakt so, wie
er in der jeweiligen Quellsprachfassung steht, wird mit Dokument- und Seitenquelle
geführt und als `sicherheitskritisch` markiert. Der Tokenvergleich darf für Befehle
deshalb keine Gleichheit über Sprachen hinweg erzwingen. Siehe
[DISCREPANCIES.md](DISCREPANCIES.md) DSC-013 und DSC-014.
