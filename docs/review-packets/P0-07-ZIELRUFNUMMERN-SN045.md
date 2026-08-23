# P0-07: Zielrufnummern und Programmiernachricht ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Dieses Paket bündelt die sieben sicherheitskritischen Segmente zu den Zielrufnummern, ihrer
Programmierung und ihrer Löschung aus DOC-IBA-SN045, deutsche PDF-Seiten 15 bis 17 (interne
Seiten 13 bis 15).

Alle drei Seiten wurden am 2026-08-23 vollständig gegen die **englische Fassung derselben
Auflage** gelesen (PDF-Seiten 39 und 40). Dabei hat sich der englische Teil in jeder Zeile
als sachgleich erwiesen; die Abweichungen sind Layout und ein abweichendes Länderbeispiel.

Zeichenfolgen von Programmiernachrichten, Beispielrufnummern und die aus einem Beispiel
ableitbare Berechtigungsregel bleiben ausgelassen (BLK-005, BLK-006). Das Paket gilt
ausschließlich ab SN-045.

## Zugeordnete Segmente

| Segment                                          | Thema                                  | Quelle               |
| ------------------------------------------------ | -------------------------------------- | -------------------- |
| `IBA045-DE-P015-S03-ZIELRUFNUMMERNARTEN`         | drei Arten von Zielrufnummern          | DOC-IBA-SN045, S. 15 |
| `IBA045-DE-P015-S04-PROGRAMMIERUNG-EINLEITUNG`   | Obergrenze und Leerzeichenverbot       | DOC-IBA-SN045, S. 15 |
| `IBA045-DE-P016-S01-SYNTAXGRAFIK`                | Aufbau der Programmiernachricht        | DOC-IBA-SN045, S. 16 |
| `IBA045-DE-P016-S02-KENNZEICHEN-LUECKE`          | fehlende Regel zur Berechtigung        | DOC-IBA-SN045, S. 16 |
| `IBA045-DE-P017-S01-BEISPIELTABELLE-LUECKE`      | nicht wiedergegebene Beispieltabelle   | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P017-S03-SPEICHER-LOESCHEN`           | Löschen über den Betriebsartenschalter | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P017-S04-UEBERSCHREIBEN-MASTERNUMMER` | Überschreiben über die Masternummer    | DOC-IBA-SN045, S. 17 |

## A. Arten und Berechtigung von Zielrufnummern

| ID       | Zu prüfende Aussage                                                                                                         | Genaue Quelle ab SN-045                    | Gegenquelle oder offene Lücke                                                                                                                                                               | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                          |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------- |
| P0-07-A1 | Es lassen sich bis zu zehn Zielrufnummern speichern.                                                                        | S. 15, Abschnitt 2.7                       | Sachgleich auf der englischen S. 39. Verhalten beim Überschreiten der Zahl fehlt in beiden Fassungen.                                                                                       | keine eigene DSC               | Verhalten bei mehr als zehn Nummern und bei Dubletten festlegen.          |
| P0-07-A2 | Die Masternummer ist die beim Speichern zuerst genannte Nummer.                                                             | S. 15, Abschnitt 2.7                       | Sachgleich. Ob es genau eine Masternummer gibt und wie sie gewechselt wird, sagt keine Fassung.                                                                                             | Rückfrage 10                   | Anzahl, Wechselweg und Verlustfall der Masternummer bestätigen.           |
| P0-07-A3 | Über die Masternummer lassen sich jederzeit neue Zielrufnummern programmieren, ohne den Betriebsartenschalter zu betätigen. | S. 15, Abschnitt 2.7; S. 17, Abschnitt 2.9 | Sachgleich in beiden Fassungen und an beiden Stellen. Das ist der zweite, physisch nicht abgesicherte Zugangsweg zum Speicher.                                                              | Rückfrage 10                   | Absicherung dieses Wegs gegen Rufnummernfälschung bestätigen.             |
| P0-07-A4 | Autorisierte Nummern dürfen die Ausgänge steuern und Statusberichte anfordern.                                              | S. 15, Abschnitt 2.7                       | Sachgleich. Woran das Gerät die Autorisierung erkennt, steht an dieser Stelle in keiner Fassung.                                                                                            | DSC-017; Rückfrage 10          | Erkennungsregel und ihr Verhalten bei unterdrückter Rufnummer bestätigen. |
| P0-07-A5 | Nicht autorisierte Nummern erhalten ausschließlich Statusmeldungen.                                                         | S. 15, Abschnitt 2.7                       | Sachgleich. Umfang dieser Meldungen und ihre Datenschutzgrenze sind offen.                                                                                                                  | Rückfrage 11                   | Festlegen, welche Positionsdaten eine nicht autorisierte Nummer erhält.   |
| P0-07-A6 | Die Kennzeichnung autorisiert / nicht autorisiert ist nirgends als Regel ausgeschrieben.                                    | S. 16, Syntaxgrafik                        | In **allen zehn** geprüften Sprachfassungen erklärt die Grafik nur zwei Zeichen; die Regel ist nur aus dem dritten Tabellenbeispiel ableitbar. Die Gegenprüfung bestätigt das für Englisch. | DSC-017; Rückfrage 10, BLK-006 | Die Regel als Regel liefern, nicht als Beispiel.                          |

## B. Programmiernachricht

| ID       | Zu prüfende Aussage                                                                                                                         | Genaue Quelle ab SN-045                | Gegenquelle oder offene Lücke                                                                                                 | DSC / Rückfrage | Benötigte THITRONIK-Entscheidung                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------- |
| P0-07-B1 | Leerzeichen dienen nur der Darstellung und dürfen in der Nachricht nicht vorkommen.                                                         | S. 15, Abschnitt 2.8                   | Sachgleich auf S. 39. Fehlerantwort bei Leerzeichen ist nicht beschrieben.                                                    | BLK-005         | Verhalten bei fehlerhafter Nachricht bestätigen.               |
| P0-07-B2 | Die Nachricht beginnt mit der Ländervorwahl.                                                                                                | S. 16, Syntaxgrafik                    | Sachgleich; das genannte Beispielland weicht ab, die Beispielwerte der Grafik sind identisch und in beiden Fassungen deutsch. | DSC-019         | Verbindliches Format der Ländervorwahl bestätigen.             |
| P0-07-B3 | Ein vorangestelltes Kennzeichen schaltet die Positionsübertragung auf einen anklickbaren Verweis um und ist nur für Smartphones vorgesehen. | S. 16, Syntaxgrafik                    | Sachgleich. Was ein Nicht-Smartphone bei gesetztem Kennzeichen empfängt, sagt keine Fassung.                                  | Rückfrage 11    | Wirkung und Fehlerfall des Kennzeichens bestätigen.            |
| P0-07-B4 | Mehrere Empfänger werden fortlaufend und ohne Leerzeichen eingegeben.                                                                       | S. 17, Schlusssatz der Beispieltabelle | Sachgleich auf S. 40. Die zugehörigen Beispiele werden nicht wiedergegeben.                                                   | BLK-006         | Vollständige Syntaxdefinition ohne Beispielrufnummern liefern. |

## C. Löschen und Überschreiben des Speichers

| ID       | Zu prüfende Aussage                                                                          | Genaue Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                             | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                           |
| -------- | -------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------- |
| P0-07-C1 | Zum Löschen muss die Nano-SIM-Karte eingelegt sein.                                          | S. 17, Hinweiskasten    | Sachgleich auf S. 40, in beiden Fassungen als Warnung mit Dreieck gesetzt.                                                | keine eigene DSC | Bestätigen, warum die Karte für einen rein lokalen Vorgang nötig ist.      |
| P0-07-C2 | Der Löschvorgang verlangt vier Schritte am Gerät, darunter die Schalterstellung E.           | S. 17, Abschnitt 2.9    | Alle vier Schritte und die Schalterstellung sind auf S. 40 sachgleich. Der „Hauptkabelbaum" wird nirgends erklärt.        | DSC-050          | Bezeichnung und Lage des Kabelbaums sowie die Schalterstellung bestätigen. |
| P0-07-C3 | Nach dem Wiedereinstecken blinkt die Status-LED gelb-grün.                                   | S. 17, Abschnitt 2.9    | Sachgleich. Wartezeit und Verhalten, falls das Blinken ausbleibt, fehlen.                                                 | keine eigene DSC | Zeitfenster und Fehlerfall bestätigen.                                     |
| P0-07-C4 | Der Speicher lässt sich auch ohne Betriebsartenschalter über die Masternummer überschreiben. | S. 17, Schlussabsatz    | Sachgleich auf S. 40. Damit existieren zwei Wege, den Speicher zu leeren; nur einer verlangt physischen Zugang zum Gerät. | Rückfrage 10     | Diesen Weg gegen Rufnummernfälschung absichern oder ausschließen.          |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-07-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-07-B1 bis B4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-07-C1 bis C4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
