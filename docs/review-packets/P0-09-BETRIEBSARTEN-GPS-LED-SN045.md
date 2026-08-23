# P0-09: Betriebsarten, GPS-Diagnose und Status-LED ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Zehn sicherheitskritische Segmente aus DOC-IBA-SN045, deutsche PDF-Seiten 9, 10, 12 und 18.
Alle vier Seiten wurden am 2026-08-23 vollständig gegen die englischen Seiten 33, 34, 36 und
41 gelesen. Die Betriebsartentabelle wurde dabei Zelle für Zelle über alle sechzehn Zeilen
und elf Spalten verglichen.

Dieses Paket entscheidet, was der Drehschalter tatsächlich schaltet und was die Status-LED
tatsächlich anzeigt. Beides ist am Gerät nur visuell zugänglich.

**Nachtrag 2026-08-23:** Seit der Extraktion des englischen Sprachteils sind diesem Paket
zusätzlich die englischen Segmente derselben Fundstellen zugeordnet. Sie sind Extraktionen
der englischen Quelle selbst, keine Übersetzungen des deutschen Masters. Eine Entscheidung
dieses Pakets gilt damit für beide Fassungen; wo sie auseinanderlaufen, ist das in der
jeweiligen Zeile vermerkt.

## Zugeordnete Segmente

| Segment                                     | Thema                                  | Quelle |
| ------------------------------------------- | -------------------------------------- | ------ |
| `IBA045-DE-P009-S01-BETRIEBSART-EINLEITUNG` | Wirkung des Drehschalters              | S. 9   |
| `IBA045-DE-P009-S02-ANRUF-STATUSBERICHT`    | Anruf löst Statusbericht aus           | S. 9   |
| `IBA045-DE-P009-S03-AUTOMATISCHE-BERICHTE`  | Intervallberichte und Spannungsangaben | S. 9   |
| `IBA045-DE-P009-S04-GEOFENCING-SCHALTBAR`   | Geofencing über Pin 3                  | S. 9   |
| `IBA045-DE-P009-S05-ANRUF-WIPRO`            | Anruf schaltet die Alarmanlage         | S. 9   |
| `IBA045-DE-P009-S06-MANUELLER-ALARM`        | manueller Alarm über Pin 3             | S. 9   |
| `IBA045-DE-P010-S01-BETRIEBSARTENTABELLE`   | vollständige Tabelle, 16 Stellungen    | S. 10  |
| `IBA045-DE-P012-S03-GPS-DIAGNOSE`           | drei Diagnosezustände der LED          | S. 12  |
| `IBA045-DE-P012-S04-GPS-REFLEXIONEN`        | Reflexionen lösen Fehlalarme aus       | S. 12  |
| `IBA045-DE-P018-S01-BETRIEBSZUSTAENDE`      | neun Betriebszustände der Status-LED   | S. 18  |

## A. Betriebsartenschalter

| ID       | Zu prüfende Aussage                                                                                                                    | Quelle ab SN-045        | Gegenquelle oder offene Lücke                                                                                                                                                                                                         | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                             |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| P0-09-A1 | Die Tabelle ordnet sechzehn Schalterstellungen sechs Eigenschaften zu.                                                                 | S. 10                   | Alle 16 Zeilen und 11 Spalten stimmen mit S. 34 überein.                                                                                                                                                                              | keine eigene DSC               | Tabelle als verbindlich bestätigen oder korrigieren.                         |
| P0-09-A2 | In Stellung D beträgt das Berichtsintervall 8 Minuten.                                                                                 | S. 10, Zeile D          | **Beide** Fassungen dieser Generation nennen 8 Minuten. Der deutsche Zellentext enthält einen doppelten Produktnamen und einen fehlenden Bindesatz. In der Generation bis SN-044 steht an derselben Stelle ein Faktor-60-Widerspruch. | DSC-087, DSC-066; Rückfrage 16 | Intervall je Generation bestätigen und den deutschen Zellentext korrigieren. |
| P0-09-A3 | In den Stellungen 8 und B schaltet die Spannung an Pin 3 das Geofencing – über 6 V beziehungsweise unter 5 V, mit umgekehrter Wirkung. | S. 10, Zeilen 8 und B   | Sachgleich. Zwischen 5 V und 6 V trifft die Quelle **keine** Aussage; das Verhalten in diesem Band ist undefiniert.                                                                                                                   | keine eigene DSC               | Verhalten zwischen 5 V und 6 V, Hysterese und Entprellung festlegen.         |
| P0-09-A4 | In Stellung A löst eine Spannung an Pin 3 einen manuellen Alarm aus.                                                                   | S. 9 und S. 10, Zeile A | Sachgleich. Keine Mindestdauer, Schwelle oder Entprellung genannt.                                                                                                                                                                    | keine eigene DSC               | Auslöseschwelle, Mindestdauer und Sperrzeit spezifizieren.                   |
| P0-09-A5 | Der Schalter wird auch für das Löschen der Zielrufnummern (E) und die GPS-Diagnose (F) benutzt.                                        | S. 10, Zeilen E und F   | Sachgleich. Beide Stellungen sind Servicefunktionen ohne Rückmeldung darüber, dass sie aktiv sind.                                                                                                                                    | keine eigene DSC               | Erkennbarkeit einer versehentlich stehen gebliebenen Servicestellung klären. |
| P0-09-A6 | Ein Anruf löst je nach Stellung einen Statusbericht aus oder schaltet die Alarmanlage um – jeweils nur für berechtigte Nummern.        | S. 9                    | Sachgleich („authorised numbers only“). Die Erkennungsregel fehlt in beiden Fassungen.                                                                                                                                                | DSC-017; Rückfrage 10          | Erkennungsregel und Verhalten bei unterdrückter Rufnummer bestätigen.        |

## B. GPS-Diagnose und Reflexionen

| ID       | Zu prüfende Aussage                                                                     | Quelle ab SN-045       | Gegenquelle oder offene Lücke                                                                                 | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                       |
| -------- | --------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------- |
| P0-09-B1 | Die Diagnosestellung zeigt drei Zustände: rot dauerhaft, gelb blinkend, grün dauerhaft. | S. 12, Abschnitt 1.5.3 | Alle drei Zeilen stimmen mit S. 36 überein. Die Zustände sind **allein** über die Farbe unterscheidbar.       | Rückfrage 12     | Nicht visuelle Rückmeldung der Diagnose bereitstellen oder die Grenze bestätigen.      |
| P0-09-B2 | Blinkt die Anzeige nach fünf Minuten noch gelb, ist die Antennenposition ungeeignet.    | S. 12                  | Sachgleich. Keine Angabe, ab wann der Zähler läuft.                                                           | keine eigene DSC | Startpunkt und Toleranz der fünf Minuten bestätigen.                                   |
| P0-09-B3 | Nach dem Zurückstellen bedeutet dauerhaft Rot, dass keine SIM-Karte eingesetzt ist.     | S. 12                  | Sachgleich. Dieselbe Anzeige bedeutet laut Kapitel 3 auch „Karte defekt“.                                     | keine eigene DSC | Unterscheidbarkeit von „fehlt“ und „defekt“ klären.                                    |
| P0-09-B4 | Reflexionen in Gebäuden können Diebstahlmeldungen auslösen, obwohl das Fahrzeug steht.  | S. 12                  | Sachgleich. Das ist eine ausdrückliche Fehlalarmquelle; die Quelle empfiehlt, das Geofencing zu deaktivieren. | BLK-007          | Bestätigen, ob die Deaktivierung die einzige Abhilfe ist und wie an sie erinnert wird. |

## C. Status-LED im Betrieb

| ID       | Zu prüfende Aussage                                                                                         | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                                           | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                         |
| -------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------ |
| P0-09-C1 | Kapitel 3 unterscheidet neun Betriebszustände über Farbe und Blinkrhythmus.                                 | S. 18            | Alle neun stimmen mit S. 41 überein. Die englische Fassung enthält zwei Satzfehler ohne Bedeutungsänderung.                             | DSC-018               | Zustandsliste als verbindlich bestätigen.                                |
| P0-09-C2 | Die neun Zustände werden ausschließlich visuell vermittelt; die Blinkgrafiken tragen keine Textalternative. | S. 18            | In beiden Fassungen identisch. Vier Zustände unterscheiden sich nur durch den Rhythmus derselben Farbe beziehungsweise durch Farbpaare. | Rückfrage 12          | Entscheiden, ob das Gerät eine nicht visuelle Rückmeldung erhalten kann. |
| P0-09-C3 | Dauerhaft Grün bedeutet Senden oder Empfangen, blinkend Grün den Normalbetrieb.                             | S. 18            | Sachgleich. Für die Generation bis SN-044 widersprechen sich zwei Dokumente an genau dieser Stelle.                                     | DSC-059; Rückfrage 12 | Bedeutung je Generation bestätigen; kein Wert wird übertragen.           |
| P0-09-C4 | Blinkt die Anzeige rot und grün, ist die SIM-PIN nicht deaktiviert.                                         | S. 18            | Sachgleich. Verknüpft mit der offenen PIN-Vorgabe.                                                                                      | Rückfrage 15          | Verbindliche PIN-Vorgabe bestätigen.                                     |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-09-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-09-B1 bis B4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-09-C1 bis C4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
