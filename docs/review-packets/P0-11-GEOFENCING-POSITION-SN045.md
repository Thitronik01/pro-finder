# P0-11: Geofencing, Statusbericht und Positionsbewertung ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Elf sicherheitskritische Segmente aus DOC-IBA-SN045, deutsche PDF-Seiten 21, 22 und 24.
Alle drei Seiten wurden am 2026-08-23 vollständig gegen die englischen Seiten 45, 46 und 48
gelesen.

Der Radius des Geofencings wird nicht wiedergegeben, solange Rückfrage 14 offen ist
(BLK-007). Befehlszeichenfolgen bleiben ausgelassen (BLK-005).

## Zugeordnete Segmente

| Segment                                      | Thema                                  | Quelle |
| -------------------------------------------- | -------------------------------------- | ------ |
| `IBA045-DE-P021-S01-ALARMANLAGE-PER-ANRUF`   | Umschalten per Anruf                   | S. 21  |
| `IBA045-DE-P021-S02-NUR-BERECHTIGTE`         | Zugriff nur für berechtigte Nummern    | S. 21  |
| `IBA045-DE-P021-S03-GEOFENCING-PRINZIP`      | virtueller Zaun                        | S. 21  |
| `IBA045-DE-P021-S04-GEOFENCING-SCHALTWEGE`   | Pin 3 und Kurznachricht                | S. 21  |
| `IBA045-DE-P021-S05-GEOFENCING-AUTOMATIK`    | Kopplung an die Alarmanlage            | S. 21  |
| `IBA045-DE-P022-S01-STATUSBERICHT-ANFORDERN` | zwei Anforderungswege                  | S. 22  |
| `IBA045-DE-P022-S02-GPS-STATUS-IM-BERICHT`   | letzte gültige Position                | S. 22  |
| `IBA045-DE-P022-S03-POSITION-SMARTPHONE`     | Positionsabfrage mit Verweis           | S. 22  |
| `IBA045-DE-P024-S01-ANLERNMODUS`             | Anlernmodus der Alarmanlage            | S. 24  |
| `IBA045-DE-P024-S02-POSITION-NUTZEN`         | Hausnummergenauigkeit                  | S. 24  |
| `IBA045-DE-P024-S03-OHNE-GPS-EMPFANG`        | zehn Minuten, Zeitbezug der UTC-Angabe | S. 24  |

## A. Geofencing

| ID       | Zu prüfende Aussage                                                                               | Quelle ab SN-045     | Gegenquelle oder offene Lücke                                                                           | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                              |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| P0-11-A1 | Geofencing legt einen virtuellen Zaun um den aktuellen Standort.                                  | S. 21                | Sachgleich auf S. 45. Nicht gesagt, wann der Bezugspunkt gesetzt und wann er neu gesetzt wird.          | keine eigene DSC               | Festlegung und Aktualisierung des Bezugspunkts spezifizieren.                 |
| P0-11-A2 | Der Auslöseradius ist in beiden Fassungen derselbe.                                               | S. 21                | Innerhalb dieser Generation deckungsgleich; über die Generationen hinweg stehen drei Werte im Register. | DSC-078; Rückfrage 14, BLK-007 | Verbindlichen Radius je Generation bestätigen.                                |
| P0-11-A3 | In zwei Schalterstellungen schaltet Pin 3 das Geofencing, sonst eine Kurznachricht.               | S. 21                | Sachgleich. Was gilt, wenn beide Wege einander widersprechen, sagt keine Fassung.                       | keine eigene DSC               | Vorrangregel zwischen Pin 3, Kurznachricht und Alarmanlagenzustand festlegen. |
| P0-11-A4 | Vor der Nutzung an einem neuen Standort muss das Geofencing am alten Standort deaktiviert werden. | S. 21                | Sachgleich. Es gibt keine Rückmeldung darüber, welcher Standort gerade gilt.                            | keine eigene DSC               | Erkennbarkeit des aktiven Bezugspunkts sicherstellen.                         |
| P0-11-A5 | Bei scharfer Alarmanlage ist Geofencing automatisch aktiv, bei unscharfer automatisch inaktiv.    | S. 21                | Sachgleich in beide Richtungen. Das ist ein zweiter, impliziter Schaltweg neben A3.                     | keine eigene DSC               | Zusammenspiel der Schaltwege verbindlich festlegen.                           |
| P0-11-A6 | Nur berechtigte Nummern können auf den Pro-finder zugreifen.                                      | S. 21, roter Hinweis | Sachgleich. Die Erkennungsregel fehlt in beiden Fassungen.                                              | DSC-017; Rückfrage 10          | Erkennungsregel und Schutz gegen Rufnummernfälschung bestätigen.              |

## B. Statusbericht und Position

| ID       | Zu prüfende Aussage                                                                                         | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                     | DSC / Rückfrage           | Benötigte THITRONIK-Entscheidung                                          |
| -------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------- |
| P0-11-B1 | Ein Statusbericht lässt sich per Kurznachricht oder – außerhalb zweier Betriebsarten – per Anruf anfordern. | S. 22            | Sachgleich auf S. 46.                                                                                             | keine eigene DSC          | Beide Wege und ihre Einschränkung bestätigen.                             |
| P0-11-B2 | Ohne gültige Position weist der Bericht darauf hin und sendet die zuletzt gültige Position.                 | S. 22            | Sachverhalt sachgleich, **aber** die dafür ausgegebene Zeichenfolge lautet je Fassung anders.                     | **DSC-090**; Rückfrage 17 | Verbindlichen Gerätewortlaut und seine Sprache festlegen.                 |
| P0-11-B3 | Eine zuletzt gültige Position ist nicht der aktuelle Standort.                                              | S. 22 und S. 24  | Beide Fassungen nennen weder Höchstalter noch Genauigkeit noch eine verpflichtende Kennzeichnung „nicht aktuell“. | Rückfrage 11              | Alter, Genauigkeit und maschinenlesbare Kennzeichnung festlegen.          |
| P0-11-B4 | Ohne GPS-Empfang wartet das Gerät bis zu zehn Minuten auf eine gültige Position.                            | S. 24            | Sachgleich. Startpunkt und Abbruchbedingung fehlen.                                                               | keine eigene DSC          | Timerstart, Toleranz und Verhalten während der Wartezeit bestätigen.      |
| P0-11-B5 | Die UTC-Angabe gehört zur zuletzt empfangenen Position, nicht zum Versandzeitpunkt.                         | S. 24            | Sachgleich. Sicherheitsrelevant, weil die Zeitangabe sonst als Sendezeit gelesen wird.                            | Rückfrage 11              | Zeitquelle, Format und Kennzeichnung des Versandzeitpunkts spezifizieren. |
| P0-11-B6 | Die Position ist laut Quelle „oftmals bis auf die Hausnummer genau“.                                        | S. 24            | Sachgleich, aber in beiden Fassungen unbelegt: keine Genauigkeit in Metern, keine Bedingung.                      | keine eigene DSC          | Genauigkeitsangabe belegen oder die Aussage streichen.                    |

## C. Anlernmodus

| ID       | Zu prüfende Aussage                                                                       | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                               | DSC / Rückfrage      | Benötigte THITRONIK-Entscheidung                                                                          |
| -------- | ----------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------- |
| P0-11-C1 | Der Anlernmodus der Alarmanlage lässt sich per Kurznachricht aktivieren und deaktivieren. | S. 24            | Sachgleich auf S. 48. Die englische Fassung benennt den Modus auf derselben Seite zweifach. | **DSC-091**; BLK-005 | Verbindliche Benennung und Befehlsschnittstelle je Sprache liefern.                                       |
| P0-11-C2 | Solange der Modus aktiv ist, lassen sich neue Funk-Komponenten anlernen.                  | S. 24            | Sachgleich. Keine Zeitbegrenzung, keine Rückmeldung über den aktiven Zustand.               | keine eigene DSC     | Zeitbegrenzung und Zustandsanzeige festlegen – ein dauerhaft offener Anlernmodus ist eine Angriffsfläche. |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-11-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-11-B1 bis B6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-11-C1 bis C2 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
