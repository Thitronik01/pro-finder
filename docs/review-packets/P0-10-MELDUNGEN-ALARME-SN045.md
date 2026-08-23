# P0-10: Meldungen, Alarme und Spannungswarnung ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Elf sicherheitskritische Segmente aus DOC-IBA-SN045, deutsche PDF-Seiten 19 und 20 (Kapitel 4
vollständig). Beide Seiten wurden am 2026-08-23 gegen die englischen Seiten 42, 43 und 44
gelesen – die englische Fassung verteilt dieselben Inhalte auf drei statt zwei Seiten und
gleicht damit die Seitenverschiebung nach DSC-021 aus.

Beispielnachrichten, Kartenadressen, Koordinaten und Meldungsstichwörter werden nicht
wiedergegeben (BLK-004, BLK-005).

**Nachtrag 2026-08-23:** Seit der Extraktion des englischen Sprachteils sind diesem Paket
zusätzlich die englischen Segmente derselben Fundstellen zugeordnet. Sie sind Extraktionen
der englischen Quelle selbst, keine Übersetzungen des deutschen Masters. Eine Entscheidung
dieses Pakets gilt damit für beide Fassungen; wo sie auseinanderlaufen, ist das in der
jeweiligen Zeile vermerkt.

## Zugeordnete Segmente

| Segment                                       | Thema                             | Quelle |
| --------------------------------------------- | --------------------------------- | ------ |
| `IBA045-DE-P019-S01-MELDUNGSFELDER`           | Felder einer Meldung              | S. 19  |
| `IBA045-DE-P019-S02-STATUSBERICHT-INHALT`     | Inhalt des Statusberichts         | S. 19  |
| `IBA045-DE-P019-S03-DIEBSTAHLMELDUNG`         | stiller Alarm                     | S. 19  |
| `IBA045-DE-P019-S04-SPANNUNGSWARNUNG`         | 11,2 V und 12,5 V, Standby        | S. 19  |
| `IBA045-DE-P019-S05-BEISPIELMELDUNGEN-LUECKE` | ausgelassene Beispielnachrichten  | S. 19  |
| `IBA045-DE-P020-S01-POSITIONS-MELDUNG`        | Positionsmeldung mit Verweis      | S. 20  |
| `IBA045-DE-P020-S02-EINGABEHILFE-LUECKE`      | ausgelassene Befehlsliste         | S. 20  |
| `IBA045-DE-P020-S03-EINBRUCHMELDUNG`          | Einbruch und Rückruf              | S. 20  |
| `IBA045-DE-P020-S04-GASALARM`                 | Gasalarm und Rückruf              | S. 20  |
| `IBA045-DE-P020-S05-MANUELLER-ALARM-MELDUNG`  | Panikalarm und Rückruf            | S. 20  |
| `IBA045-DE-P020-S06-DIEBSTAHL-ZUBEHOER`       | Zubehördiebstahl **ohne** Rückruf | S. 20  |

## A. Inhalt und Zuverlässigkeit der Meldungen

| ID       | Zu prüfende Aussage                                                                                 | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                                                            | DSC / Rückfrage                    | Benötigte THITRONIK-Entscheidung                                                           |
| -------- | --------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| P0-10-A1 | Eine Meldung kann GPS-Status, UTC-Zeit, Position und Geschwindigkeit enthalten.                     | S. 19            | Alle vier Felder stimmen mit S. 42 überein. Welche Felder in welcher Meldung **zwingend** vorkommen, sagt keine Fassung.                                 | Rückfrage 11                       | Verbindliches Meldungsschema je Meldungstyp liefern.                                       |
| P0-10-A2 | Der Statusbericht enthält zusätzlich Spannungen der Messeingänge und die Temperatur nahe dem Gerät. | S. 19            | Der Fließtext nennt in beiden Fassungen U2 bis U5. Die englische Beispielblase führt U2 und U3 in einer Zeile zusammen und zeigt vier statt fünf Zeilen. | DSC-089; Rückfrage 11              | Feldliste des Statusberichts verbindlich festlegen und das englische Beispiel korrigieren. |
| P0-10-A3 | Die Beispielnachrichten enthalten Kartenadressen und Positionswerte.                                | S. 19 und 20     | In beiden Fassungen identisch. Sie werden nach BLK-004 nicht wiedergegeben.                                                                              | DSC-082                            | Freigegebene, datenschutzkonforme Beispiele ohne reale Koordinaten liefern.                |
| P0-10-A4 | Die Antwort auf eine ungültige Nachricht zählt gültige Befehle auf.                                 | S. 20            | Die aufgezählten Befehle lauten je Sprachfassung anders; der deutsche Beispieltext ersetzt zudem Umlaute durch Vokal plus e.                             | DSC-054; Rückfrage 1, Rückfrage 17 | Firmwarebestätigte Befehlsliste je Sprache und Revision liefern.                           |

## B. Alarme und Rückruf

| ID       | Zu prüfende Aussage                                                                               | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                                           | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                              |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------------------------------- |
| P0-10-B1 | Die Diebstahlmeldung ist ein **stiller** Alarm; weder Blinker noch Sirene werden aktiviert.       | S. 19            | Sachgleich auf S. 42. Der Querverweis auf die nachträgliche Aktivierung führt in beiden Fassungen ins Leere und steht englisch doppelt. | DSC-041, DSC-089               | Bestätigen, wie Blinker und Sirene tatsächlich nachträglich aktiviert werden. |
| P0-10-B2 | Die Diebstahlmeldung setzt eine bestimmte Entfernung vom ursprünglichen Standort voraus.          | S. 19            | Beide Fassungen nennen denselben Wert. Über die Generationen hinweg stehen jedoch drei verschiedene Werte im Register.                  | DSC-078; Rückfrage 14, BLK-007 | Verbindlichen Radius je Generation bestätigen.                                |
| P0-10-B3 | Nach Einbruchmeldung, Gasalarm und manuellem Alarm ruft das Gerät zusätzlich die Masternummer an. | S. 20            | Sachgleich auf S. 43 für alle drei Typen. Nicht gesagt: was geschieht, wenn der Rückruf nicht angenommen wird.                          | keine eigene DSC               | Wiederholung, Timeout und Ersatzempfänger des Rückrufs festlegen.             |
| P0-10-B4 | Beim Meldungstyp „Diebstahl Zubehör“ fehlt der Rückrufhinweis als einzigem.                       | S. 20            | In **beiden** Fassungen gleichermaßen abwesend (englisch auf S. 44). Damit ist die Auslassung belegt, aber nicht erklärt.               | keine eigene DSC               | Bestätigen, ob der fehlende Rückruf beabsichtigt ist.                         |
| P0-10-B5 | Der manuelle Alarm wird durch Auslösen eines Panikalarms an der Alarmanlage ausgelöst.            | S. 20            | Sachgleich. Der Weg über Pin 3 aus Kapitel 1.3 wird hier nicht erwähnt; zwei Auslösewege ohne gemeinsame Darstellung.                   | keine eigene DSC               | Beide Auslösewege zusammenführen und unterscheidbar machen.                   |

## C. Spannungswarnung und Standby

| ID       | Zu prüfende Aussage                                                                              | Quelle ab SN-045 | Gegenquelle oder offene Lücke                                                                                      | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                          |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------- | --------------------------------------------------------- |
| P0-10-C1 | Unter dauerhaft 11,2 V wechselt das Gerät in den Standby-Modus und meldet das.                   | S. 19            | Sachgleich auf S. 42 (dort „11.2V“ ohne Leerzeichen, DSC-019). „Dauerhaft“ ist nicht definiert.                    | DSC-019          | Messdauer, Toleranz und Messpunkt der Schwelle festlegen. |
| P0-10-C2 | Erst über 12,5 V kehrt das Gerät in den Normalbetrieb zurück.                                    | S. 19            | Sachgleich. Die Hysterese von 1,3 V ist nicht erläutert.                                                           | keine eigene DSC | Hysterese und Rückkehrbedingung bestätigen.               |
| P0-10-C3 | Was der Standby-Modus für Ortung, Geofencing und Alarmmeldungen bedeutet, sagt die Quelle nicht. | S. 19            | Lücke in beiden Fassungen. Sicherheitsrelevant: Nutzerinnen könnten im Standby Schutz erwarten, der nicht besteht. | keine eigene DSC | Funktionsumfang im Standby-Modus verbindlich benennen.    |
| P0-10-C4 | In einer Betriebsart entfällt die Spannungswarnung.                                              | S. 19            | Sachgleich. Der Ausschluss steht nur in einer Klammer und wird in der Betriebsartentabelle nicht wiederholt.       | keine eigene DSC | Ausschluss bestätigen und in der Tabelle sichtbar machen. |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-10-A1 bis A4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-10-B1 bis B5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-10-C1 bis C4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
