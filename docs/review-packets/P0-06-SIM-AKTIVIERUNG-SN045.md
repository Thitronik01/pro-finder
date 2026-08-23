# P0-06: SIM-Karte und Aktivierung ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Dieses Paket bündelt die drei sicherheitskritischen Segmente zur Kartenvorbereitung und zur
Inbetriebnahme aus DOC-IBA-SN045, deutsche PDF-Seiten 13 und 14 (interne Seiten 11 und 12).

Beide Seiten wurden am 2026-08-23 vollständig gegen die **englische Fassung derselben
Auflage** gelesen (PDF-Seiten 37 und 38). Die Prüfung stützt sich damit nicht auf eine
Selbstdurchsicht, sondern auf ein zweites, unabhängiges Dokument; die Methode steht in
[CROSSCHECK_SN045_DE_EN.md](../CROSSCHECK_SN045_DE_EN.md).

Anbieternamen, Bezugsadressen der App und QR-Codes bleiben ausgelassen (BLK-004, DSC-027).
Das Paket gilt ausschließlich ab SN-045; kein Wert aus DOC-BMA-SN044 wird herangezogen.

**Nachtrag 2026-08-23:** Seit der Extraktion des englischen Sprachteils sind diesem Paket
zusätzlich die englischen Segmente derselben Fundstellen zugeordnet. Sie sind Extraktionen
der englischen Quelle selbst, keine Übersetzungen des deutschen Masters. Eine Entscheidung
dieses Pakets gilt damit für beide Fassungen; wo sie auseinanderlaufen, ist das in der
jeweiligen Zeile vermerkt.

## Zugeordnete Segmente

| Segment                                   | Thema                                      | Quelle               |
| ----------------------------------------- | ------------------------------------------ | -------------------- |
| `IBA045-DE-P013-S04-SIM-VORBEREITEN`      | vier Einstellungen an der Karte            | DOC-IBA-SN045, S. 13 |
| `IBA045-DE-P014-S03-AKTIVIERUNG-LED`      | Spannung anlegen, Farbfolge der Status-LED | DOC-IBA-SN045, S. 14 |
| `IBA045-DE-P014-S04-AKTIVIERUNG-OHNE-APP` | Aktivierung ohne App und Rückmeldung       | DOC-IBA-SN045, S. 14 |

## A. Vorbereitung der SIM-Karte

| ID       | Zu prüfende Aussage                                                              | Genaue Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                                                              | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                                                  |
| -------- | -------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| P0-06-A1 | Die PIN-Abfrage der Karte muss deaktiviert werden.                               | S. 13, Schritt 1        | Die englische Seite 37 nennt denselben Schritt. Ob eine Karte ohne PIN-Schutz betrieben werden darf und was bei aktiver PIN geschieht, sagt keine Fassung. | Rückfrage 15                      | Bestätigen, dass der Betrieb eine deaktivierte PIN voraussetzt, und das Geräteverhalten bei aktiver PIN benennen. |
| P0-06-A2 | Mailbox und alle Rufumleitungen müssen deaktiviert werden.                       | S. 13, Schritt 2        | Sachgleich in der englischen Fassung. Wirkung einer aktiven Mailbox auf Alarmanrufe ist nirgends beschrieben.                                              | keine eigene DSC                  | Fehlerbild bei aktiver Mailbox benennen und ob es den Alarmweg unterbricht.                                       |
| P0-06-A3 | Sämtliche Komfortfunktionen müssen deaktiviert werden.                           | S. 13, Schritt 3        | Die Liste der Beispiele ist je Sprachfassung unterschiedlich lang; die französische nennt zwei weitere Funktionen. Eine abschließende Liste gibt es nicht. | DSC-027                           | Abschließende, verbindliche Liste der zu deaktivierenden Zusatzdienste liefern.                                   |
| P0-06-A4 | Roaming muss aktiviert werden, falls nicht voreingestellt.                       | S. 13, Schritt 4        | Sachgleich in der englischen Fassung. Kein Hinweis auf Kosten oder auf das Verhalten ohne Roaming im Inland.                                               | keine eigene DSC                  | Bestätigen, ob Roaming zwingend ist oder nur für den Auslandsbetrieb.                                             |
| P0-06-A5 | Bei einem iPhone muss iMessages vorher deaktiviert sein.                         | S. 13, Achtung-Kasten   | Sachgleich in der englischen Fassung. Kein Hinweis auf andere Betriebssysteme oder auf vergleichbare Dienste.                                              | keine eigene DSC                  | Bestätigen, ob die Bedingung auf iMessages beschränkt ist.                                                        |
| P0-06-A6 | Die Kartenanforderungen selbst sind zwischen den Fassungen nicht deckungsgleich. | S. 13 gegen S. 37       | Die englische Fassung verbietet die Multi-Operator-Karte und fordert bestimmte Netzstandards und Dienste; der deutsche Master schweigt dazu.               | **DSC-086**, DSC-027; Rückfrage 5 | Klären, ob Verbot und Mindestanforderungen generell gelten und im deutschen Master fehlen.                        |

## B. Aktivierung und Rückmeldung

| ID       | Zu prüfende Aussage                                                                                    | Genaue Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                                                                           | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                  |
| -------- | ------------------------------------------------------------------------------------------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------- |
| P0-06-B1 | Nach Anlegen der Spannung blinkt die Status-LED kurz rot und anschließend gelb-grün.                   | S. 14, Abschnitt 2.4    | Wörtlich sachgleich in der englischen Fassung („flashes red briefly and then yellow-green"). Dauer, Wiederholung und Verhalten bei Fehlern fehlen.                      | keine eigene DSC      | Zeitfenster je Phase, Abbruchbedingung und Fehleranzeige bestätigen.              |
| P0-06-B2 | Ohne App wird der Pro-finder durch eine Programmiernachricht an seine Rufnummer aktiviert.             | S. 14, Abschnitt 2.4    | Sachgleich. Der Inhalt der Nachricht bleibt gesperrt (BLK-005); siehe P0-07.                                                                                            | BLK-005; Rückfrage 1  | Firmwarebestätigte Nachrichtenschnittstelle einschließlich Fehlerantwort liefern. |
| P0-06-B3 | Nach Empfang und Speicherung blinkt die Status-LED grün und eine Statusnachricht geht an den Absender. | S. 14, Abschnitt 2.4    | Sachgleich. Es fehlt, was geschieht, wenn die Nachricht unvollständig oder von einer unbekannten Nummer kommt.                                                          | Rückfrage 10          | Erfolgskriterium, Empfänger und Verhalten bei fehlerhafter Nachricht festlegen.   |
| P0-06-B4 | Die App macht laut Quelle die Abschnitte 2.5 bis 2.8 entbehrlich.                                      | S. 14, Abschnitt 2.4    | Die Aussage steht in beiden Fassungen, ist aber nicht haltbar: 2.5 bis 2.8 enthalten Schritte, die die App nicht ersetzen kann. Deshalb nicht als Bedienweg übernommen. | DSC-043; Rückfrage 13 | Bestätigen, welche Schritte die App tatsächlich ersetzt.                          |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-06-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-06-B1 bis B4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
