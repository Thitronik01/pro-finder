# P0-10: Meldungen, Alarmwege und Status-LED ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

Wie P0-06 bis P0-09 bündelt dieses Paket quellennahe Erstextraktionen vom 2026-08-22. Ihre
PDF-Seiten stehen auf `extracted`, nicht auf `validated`; die unabhängige zweite Durchsicht
steht aus.

## Zweck und Geltungsbereich

Dieses Paket behandelt, **was das Gerät meldet und wie ein Mensch das erkennt** – die neun
Meldungsarten aus Kapitel 4, den Anlernmodus aus Kapitel 5 und die neun Betriebszustände
der Status-LED aus Kapitel 3. Quelle sind DOC-IBA-SN045, deutsche PDF-Seiten 18, 19, 20
und 24.

Der rote Faden: **Fast alles hängt an der WiPro III.** Sechs der neun Meldungen stammen
nicht vom Pro-finder selbst, sondern von der gekoppelten Alarmanlage. Was ein Pro-finder
ohne diese Komponente meldet, sagt die Quelle nirgends.

SMS-Zeichenfolgen und Gerätewortlaute bleiben wegen BLK-005 ausgelassen; Koordinaten und
Kartenadressen der abgebildeten Beispielmeldungen werden grundsätzlich nicht übernommen.

## Zugeordnete Segmente

| Segment                                             | Thema                                 | Quelle               |
| --------------------------------------------------- | ------------------------------------- | -------------------- |
| `IBA045-DE-P018-S01-BETRIEBSZUSTAENDE`              | neun LED-Zustände                     | DOC-IBA-SN045, S. 18 |
| `IBA045-DE-P018-S02-FARBABHAENGIGE-ZUSTANDSANZEIGE` | Farbe als einziges Merkmal            | DOC-IBA-SN045, S. 18 |
| `IBA045-DE-P019-S03-DIEBSTAHLMELDUNG`               | stiller Alarm, 900 m, WiPro-Bindung   | DOC-IBA-SN045, S. 19 |
| `IBA045-DE-P019-S04-SPANNUNGSWARNUNG`               | 11,2 V / 12,5 V, Standby              | DOC-IBA-SN045, S. 19 |
| `IBA045-DE-P019-S05-BEISPIELMELDUNGEN-AUSLASSUNG`   | Ortsdaten der Beispielbilder gesperrt | DOC-IBA-SN045, S. 19 |
| `IBA045-DE-P020-S01-WEITERE-MELDUNGSARTEN`          | sechs weitere Meldungen               | DOC-IBA-SN045, S. 20 |
| `IBA045-DE-P020-S02-ANRUF-AN-MASTERNUMMER`          | zusätzlicher Anruf bei drei Meldungen | DOC-IBA-SN045, S. 20 |
| `IBA045-DE-P020-S03-EINGABEHILFE-AUSLASSUNG`        | Geräteantwort auf ungültige Befehle   | DOC-IBA-SN045, S. 20 |
| `IBA045-DE-P020-S04-MANUELLER-ALARM-HERKUNFT`       | zwei Auslöser für dieselbe Meldung    | DOC-IBA-SN045, S. 20 |
| `IBA045-DE-P024-S01-ANLERNMODUS`                    | Fernstart des Anlernmodus             | DOC-IBA-SN045, S. 24 |
| `IBA045-DE-P024-S02-ANLERNBEFEHLE-AUSLASSUNG`       | Anlernbefehle gesperrt                | DOC-IBA-SN045, S. 24 |

Als P1-Gegenbelege stehen daneben `IBA045-DE-P019-S01-MELDUNGSANGABEN` und
`IBA045-DE-P019-S02-STATUSBERICHT-INHALT`.

## A. Meldungsarten und ihre Auslöser

| ID       | Zu prüfende Aussage                                                                          | Genaue Quelle ab SN-045                          | Gegenquelle oder offene Lücke                                                                                                                                        | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                 |
| -------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------ |
| P0-10-A1 | Die Diebstahlmeldung ist ein **stiller Alarm** – weder Blinker noch Sirene werden aktiviert. | DOC-IBA-SN045, S. 19, Abschnitt Diebstahlmeldung | Der Verweis auf Abschnitt 5.1 für das nachträgliche Auslösen führt ins Leere: Jener Abschnitt beschreibt nur einen Anruf und nennt weder Blinker noch Sirene.        | DSC-041          | Belegten Weg zum Auslösen von Blinker und Sirene liefern oder den Verweis korrigieren lassen.    |
| P0-10-A2 | Die Diebstahlmeldung setzt eine **aktivierte WiPro III** voraus.                             | DOC-IBA-SN045, S. 19                             | Ob ein Pro-finder ohne WiPro III meldet, sagt keine Stelle. Das ist der harte Kern von BLK-007.                                                                      | DSC-042, BLK-007 | Verhalten ohne WiPro III verbindlich klären.                                                     |
| P0-10-A3 | **Der manuelle Alarm hat zwei verschiedene Auslöser.**                                       | DOC-IBA-SN045, S. 9 gegen S. 20                  | Kapitel 1: Spannung an Pin 3 am Pro-finder. Kapitel 4: Panikalarm der WiPro III. Wer einen Taster verbaut, aber keine WiPro III besitzt, steht ohne Antwort da.      | DSC-052          | Auflösen, welcher Weg gilt, ob beide zur selben Meldung führen und was ohne WiPro III geschieht. |
| P0-10-A4 | Vier der neun Meldungen stammen von der WiPro III, nicht vom Pro-finder.                     | DOC-IBA-SN045, S. 20                             | Die Quelle sagt nicht, dass diese Meldungen ohne die Komponente ersatzlos entfallen. Ein Käufer ohne WiPro III erwartet sie trotzdem.                                | DSC-042          | Meldungsumfang je Ausbaustufe verbindlich benennen.                                              |
| P0-10-A5 | **Drei Meldungen rufen zusätzlich die Masternummer an.**                                     | DOC-IBA-SN045, S. 20, drei rote Zusätze          | Wie oft, mit welchem Timeout, und rückt eine andere Zielrufnummer nach? Ausgerechnet die Diebstahlmeldung löst keinen Anruf aus.                                     | DSC-052          | Anrufverhalten spezifizieren und die Auswahl der drei Meldungen begründen.                       |
| P0-10-A6 | Die Spannungswarnung schaltet ab 11,2 V in den Standby, Rückkehr über 12,5 V.                | DOC-IBA-SN045, S. 19, Abschnitt Spannungswarnung | Werte erfasst, fachlich unbestätigt. Ob das Gerät im Standby noch ortet und meldet, sagt die Quelle nicht. In Betriebsart B entfällt die Warnung – der Standby auch? | DSC-046, DSC-052 | Schwellen bestätigen und das Verhalten im Standby-Modus beschreiben.                             |

## B. Was der Mensch am Gerät ablesen kann

| ID       | Zu prüfende Aussage                                                                | Genaue Quelle ab SN-045                | Gegenquelle oder offene Lücke                                                                                                                                      | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                               |
| -------- | ---------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------- |
| P0-10-B1 | **Neun Betriebszustände, unterschieden allein über die Farbe der Status-LED.**     | DOC-IBA-SN045, S. 18, Kapitel 3        | Kein farbunabhängiges Merkmal dokumentiert. Drei Paare trennen sich nur dadurch, ob eine zweite Farbe hinzukommt. Die Blinkrhythmen zeigt die Quelle nur grafisch. | DSC-047, Rückfrage 12 | Farbunabhängiges Merkmal je Zustand bestätigen oder die Barriere ausdrücklich anerkennen.      |
| P0-10-B2 | „Blinkt rot/grün" bedeutet ab SN-045 **SIM-PIN nicht deaktiviert**.                | DOC-IBA-SN045, S. 18                   | Dieselbe Blinkfolge bedeutet bis SN-044 „PIN ist nicht 0000" – gegenläufige Erwartung bei identischer Anzeige.                                                     | DSC-047, Rückfrage 15 | Bedeutung je Generation bestätigen und die Verwechslungsgefahr bewerten.                       |
| P0-10-B3 | Eine Meldung kann GPS-Status, UTC-Zeit, Position und Geschwindigkeit enthalten.    | DOC-IBA-SN045, S. 19, Definitionsliste | Welche Angabe in welcher Betriebsart erscheint, sagt die Quelle nicht. Der Text kündigt eine Temperaturangabe an, die das Beispielbild nicht zeigt.                | DSC-045               | Feldliste je Meldungsart und Betriebsart verbindlich festlegen.                                |
| P0-10-B4 | Die Beispielmeldungen liegen ausschließlich als Bild vor.                          | DOC-IBA-SN045, S. 19 und 20            | Sie enthalten echte Koordinaten und Kartenadressen und werden deshalb nicht übernommen. Damit fehlt der Anleitung jedes Beispiel dafür, wie eine Meldung aussieht. | DSC-045, DSC-082      | Ein freigegebenes, anonymisiertes Meldungsbeispiel je Meldungsart bereitstellen.               |
| P0-10-B5 | Auf einen ungültigen Befehl antwortet das Gerät mit einer Liste möglicher Befehle. | DOC-IBA-SN045, S. 20, Eingabehilfe     | Diese Antwort ist die einzige Rückmeldung bei Fehleingabe – eine echte Fehlermeldung gibt es nicht. Mindestens ein genannter Befehl weicht vom Kapitel ab.         | DSC-014, BLK-005      | Wortlaut und Befehlsliste der Geräteantwort je Revision und Sprache firmwarebestätigt liefern. |
| P0-10-B6 | Die Eingabehilfe antwortet nur auf Nachrichten **von einer Zielrufnummer**.        | DOC-IBA-SN045, S. 20                   | Was bei Nachrichten von anderen Absendern geschieht, sagt die Quelle nicht.                                                                                        | DSC-052               | Verhalten gegenüber unbekannten Absendern spezifizieren.                                       |

## C. Anlernmodus

| ID       | Zu prüfende Aussage                                                                 | Genaue Quelle ab SN-045             | Gegenquelle oder offene Lücke                                                                                                                        | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                         |
| -------- | ----------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------ |
| P0-10-C1 | **Der Anlernmodus der Alarmanlage lässt sich per Nachricht aus der Ferne starten.** | DOC-IBA-SN045, S. 24, Abschnitt 5.6 | Solange er läuft, können neue Funk-Komponenten angelernt werden. Keine Zeitbegrenzung, keine Rückmeldung, keine Einschränkung auf bestimmte Nummern. | DSC-052, DSC-044 | Zeitbegrenzung, Zustandsrückmeldung und Berechtigungsschranke festlegen. |
| P0-10-C2 | Der Anlernbefehl weicht zwischen allen zehn Sprachfassungen ab.                     | DSC-033, Vergleichstabelle          | Von allen Befehlen streut dieser am stärksten – und er öffnet eine Sicherheitsfunktion.                                                              | DSC-033, BLK-005 | Firmwarebestätigte Zeichenfolge je Revision und Sprache liefern.         |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-10-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-10-B1 bis B6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-10-C1 bis C2 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 18, 19, 20 und 24 stehen auf `validated`; alle elf Segmente haben eine
  unabhängige Gegenprüfung.
- Jede der 14 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- **A3 ist aufgelöst:** Es steht fest, wodurch ein manueller Alarm entsteht und ob er ohne
  WiPro III möglich ist. Bis dahin nennt die Anleitung keinen der beiden Wege als gesichert.
- **C1 ist abgesichert:** Der Fernstart des Anlernmodus hat eine Zeitbegrenzung und eine
  erkennbare Rückmeldung, oder die Quelle begründet, warum beides entbehrlich ist.
- Für B1 liegt entweder ein farbunabhängiges Merkmal vor oder die schriftliche
  Feststellung, dass die Zustandsanzeige am Gerät nicht barrierefrei ablesbar ist.
- Keine Koordinate und keine Kartenadresse aus den Beispielbildern wird übernommen.
  Dieses Dossier erteilt keine Freigabe.
