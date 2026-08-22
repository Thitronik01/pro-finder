# P0-09: Zielrufnummern, Programmierung und Berechtigung ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

Wie P0-06 bis P0-08 und P0-10 bündelt dieses Paket quellennahe Erstextraktionen vom
2026-08-22. Ihre PDF-Seiten stehen auf `extracted`, nicht auf `validated`; die unabhängige
zweite Durchsicht steht aus.

## Zweck und Geltungsbereich

Dieses Paket entscheidet, **wer den Pro-finder fernsteuern darf**. Es bündelt die neun
P0-Segmente zu Zielrufnummern, Programmier-SMS und Berechtigung aus DOC-IBA-SN045,
deutschen PDF-Seiten 15, 16, 17 und 21.

Es ist das Paket mit dem **direktesten Sicherheitsbezug** des gesamten Piloten: Ein
einzelnes Zeichen an einer einzelnen Stelle entscheidet, ob eine Rufnummer die Ausgänge
schalten und Statusberichte anfordern darf. Die Quelle spricht diese Regel an keiner
Stelle aus.

SMS-Zeichenfolgen bleiben wegen BLK-005 ausgelassen, die Berechtigungsregel und die
Beispielrufnummern wegen BLK-006.

## Zugeordnete Segmente

| Segment                                          | Thema                              | Quelle               |
| ------------------------------------------------ | ---------------------------------- | -------------------- |
| `IBA045-DE-P015-S01-LAENDERVORWAHL`              | Erreichbarkeit aus dem Ausland     | DOC-IBA-SN045, S. 15 |
| `IBA045-DE-P015-S03-ZIELRUFNUMMERNROLLEN`        | drei Arten von Zielrufnummern      | DOC-IBA-SN045, S. 15 |
| `IBA045-DE-P015-S04-PROGRAMMIER-SMS-FORM`        | Formregel ohne Leerzeichen         | DOC-IBA-SN045, S. 15 |
| `IBA045-DE-P016-S01-PROGRAMMIERSTRUKTUR`         | Aufbau als beschriftete Abbildung  | DOC-IBA-SN045, S. 16 |
| `IBA045-DE-P016-S02-KENNZEICHEN-AUSLASSUNG`      | Smartphone-Kennzeichen ausgelassen | DOC-IBA-SN045, S. 16 |
| `IBA045-DE-P017-S01-BEISPIELE-AUSLASSUNG`        | Berechtigungsregel gesperrt        | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P017-S03-SPEICHER-LOESCHEN`           | Löschweg über Schalterstellung E   | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P017-S04-MASTERNUMMER-UEBERSCHREIBEN` | Fernüberschreiben des Speichers    | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P021-S02-NUR-BERECHTIGTE-NUMMERN`     | Zugriffsvorbehalt in Kapitel 5     | DOC-IBA-SN045, S. 21 |

Als P1-Gegenbeleg steht daneben `IBA045-DE-P015-S02-SMS-KOSTEN`.

## A. Die Berechtigungsregel

| ID       | Zu prüfende Aussage                                                                          | Genaue Quelle ab SN-045                        | Gegenquelle oder offene Lücke                                                                                                                                                | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                      |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------- |
| P0-09-A1 | Autorisierte und nicht autorisierte Zielrufnummern unterscheiden sich nur durch ein Zeichen. | DOC-IBA-SN045, S. 17, Beispieltabelle, Zeile 3 | Der Fließtext benennt die Regel im gesamten geprüften deutschen Teil nicht. Sie ist ausschließlich aus dem Vergleich der drei Beispielzeilen erschließbar.                   | DSC-044, BLK-006 | Welches Zeichen bewirkt welche Berechtigungsstufe? Firmwarebestätigt, je Revision.                    |
| P0-09-A2 | **Dieselbe Zeichenposition trägt zwei Bedeutungen.**                                         | DOC-IBA-SN045, S. 16 gegen S. 17               | Die Abbildung auf S. 16 erklärt das führende Zeichen ausdrücklich als **Ländervorwahl-Präfix**; die Beispiele auf S. 17 nutzen dieselbe Stelle als Berechtigungskennzeichen. | DSC-044          | Klären, ob Rufnummernformat und Berechtigung wirklich dieselbe Stelle belegen – und die Doku trennen. |
| P0-09-A3 | Was bei fehlerhafter Eingabe geschieht, ist nicht dokumentiert.                              | Lücke in Abschnitt 2.8 und 2.9                 | Wird die Nachricht abgewiesen, oder wird die Nummer mit falscher Berechtigung gespeichert? Erhält der Absender eine Rückmeldung?                                             | DSC-044          | Fehlerverhalten und Rückmeldung bei ungültiger Programmier-SMS spezifizieren.                         |
| P0-09-A4 | Ein zweites Kennzeichen markiert Smartphone-Nummern.                                         | DOC-IBA-SN045, S. 16, roter Hinweis            | Die Quelle warnt davor, es bei einem Nicht-Smartphone zu setzen, sagt aber nicht, was dann geschieht – bleibt die Positionsangabe aus, oder kommt sie unlesbar an?           | DSC-044          | Wirkung des Kennzeichens und Verhalten bei falscher Verwendung bestätigen.                            |
| P0-09-A5 | Nur berechtigte Nummern können auf den Pro-finder zugreifen.                                 | DOC-IBA-SN045, S. 21, roter Hinweiskasten      | Die einzige Stelle in Kapitel 5, die den Zugriffsvorbehalt überhaupt nennt – ohne zu sagen, woran das Gerät eine berechtigte Nummer erkennt.                                 | DSC-044, BLK-006 | Einen veröffentlichbaren Wortlaut liefern, der die Regel erklärt, ohne sie zu erraten.                |

## B. Rollen, Master und Fernzugriff

| ID       | Zu prüfende Aussage                                                          | Genaue Quelle ab SN-045              | Gegenquelle oder offene Lücke                                                                                                                            | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                |
| -------- | ---------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| P0-09-B1 | Es gibt drei Arten von Zielrufnummern; bis zu zehn lassen sich speichern.    | DOC-IBA-SN045, S. 15, Abschnitt 2.7  | Bis SN-044 beschreibt die Quelle **vier** Arten. Ob eine Rolle entfallen ist oder nur anders geschnitten wird, sagt keine Fassung.                       | DSC-056          | Rollenmodell je Generation bestätigen und die Abweichung erklären.                              |
| P0-09-B2 | Die Masternummer ist die beim Speichern zuerst genannte Nummer.              | DOC-IBA-SN045, S. 15, Abschnitt 2.7  | Was geschieht, wenn eine neue Programmier-SMS eine andere Nummer an die erste Stelle setzt? Wechselt die Masterrolle stillschweigend mit?                | keine eigene DSC | Regeln für den Wechsel der Masterrolle festlegen.                                               |
| P0-09-B3 | **Die Masternummer kann den gesamten Speicher aus der Ferne überschreiben.** | DOC-IBA-SN045, S. 17, letzter Absatz | Ohne physischen Zugang und ohne Betriebsartenschalter. Die Quelle nennt weder eine Bestätigung noch eine Benachrichtigung der bisherigen Zielrufnummern. | DSC-044          | Bestätigungsschritt und Benachrichtigung der bisherigen Nummern festlegen oder begründen.       |
| P0-09-B4 | Der Speicher lässt sich am Gerät über die Schalterstellung E löschen.        | DOC-IBA-SN045, S. 17, Abschnitt 2.9  | Der Vorgang verlangt, den „Hauptkabelbaum" abzuziehen – ein Begriff, den die Quelle nirgends erklärt und keiner Marke der Anschlussabbildung zuordnet.   | DSC-050          | Begriff definieren und einer Marke zuordnen; Löschvorgang bestätigen.                           |
| P0-09-B5 | Für den Löschvorgang muss die SIM-Karte eingelegt sein.                      | DOC-IBA-SN045, S. 17, roter Hinweis  | Warum eine SIM-Karte für einen rein am Gerät ausgeführten Vorgang nötig ist, erklärt die Quelle nicht.                                                   | DSC-052          | Begründung liefern oder die Anforderung streichen lassen.                                       |
| P0-09-B6 | Die Rufnummer muss mit Ländervorwahl gespeichert werden.                     | DOC-IBA-SN045, S. 15, erster Absatz  | Betrifft den Adressbucheintrag am Telefon – also genau den Schritt, den die Quelle auf S. 14 für entbehrlich erklärt, wenn die App genutzt wird.         | DSC-043          | Klären, ob die App diesen Schritt übernimmt; wenn nicht, den Satz auf S. 14 korrigieren lassen. |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-09-A1 bis A5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-09-B1 bis B6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 15, 16, 17 und 21 stehen auf `validated`; alle neun Segmente haben eine
  unabhängige Gegenprüfung.
- Jede der 11 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- **A1 und A2 sind entschieden.** Bis dahin nennt die HTML-Anleitung weder ein
  Berechtigungszeichen noch eine daraus abgeleitete Regel und beschreibt die
  Programmier-SMS nur in ihrer Form, nicht in ihrer Syntax (BLK-006).
- Der Fernzugriff der Masternummer (B3) ist entweder mit einem Bestätigungsschritt
  abgesichert oder als beabsichtigtes Verhalten dokumentiert.
- Keine Beispielrufnummer aus der Quelle wird in Produkt-, Test- oder Fixturedaten
  übernommen. Dieses Dossier erteilt keine Freigabe.
