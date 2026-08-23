# P0-12: Ausgangssteuerung und technische Daten ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Sieben sicherheitskritische Segmente aus DOC-IBA-SN045, deutsche PDF-Seiten 22, 23 und 25.
Alle drei Seiten wurden am 2026-08-23 vollständig gegen die englischen Seiten 46, 47 und 49
gelesen. Die technischen Daten wurden Zeile für Zeile verglichen; die abweichende Zeile ist
bei 400 dpi zeichengenau gesichert.

Die elektrischen Grenzwerte der Ausgänge verbleiben in P0-08; hier werden Steuerungswirkung
und Werteverbindlichkeit geprüft. Befehlszeichenfolgen bleiben ausgelassen (BLK-005).

## Zugeordnete Segmente

| Segment                                     | Thema                                   | Quelle |
| ------------------------------------------- | --------------------------------------- | ------ |
| `IBA045-DE-P022-S04-AUSGAENGE-EINLEITUNG`   | zwei getrennte Ausgänge                 | S. 22  |
| `IBA045-DE-P023-S01-AUSGANG-DAUERHAFT`      | dauerhaft ein und aus                   | S. 23  |
| `IBA045-DE-P023-S02-AUSGANG-IMPULS`         | Impuls von einer Sekunde                | S. 23  |
| `IBA045-DE-P023-S03-AUSGANG-ZEIT`           | 1 bis 120 Minuten                       | S. 23  |
| `IBA045-DE-P023-S04-ZWEITER-AUSGANG-LUECKE` | Ersetzungsregel für den zweiten Ausgang | S. 23  |
| `IBA045-DE-P025-S01-TECHNISCHE-DATEN`       | vollständige Werteliste                 | S. 25  |
| `IBA045-DE-P025-S02-STROMAUFNAHME-LUECKE`   | abweichender Ruhestrom                  | S. 25  |

## A. Ausgangssteuerung

| ID       | Zu prüfende Aussage                                                                                                    | Quelle ab SN-045     | Gegenquelle oder offene Lücke                                                                                                 | DSC / Rückfrage               | Benötigte THITRONIK-Entscheidung                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------- |
| P0-12-A1 | Der Pro-finder besitzt zwei getrennt steuerbare Ausgänge.                                                              | S. 22                | Sachgleich auf S. 46. Die englische Abschnittsüberschrift benennt den Inhalt nicht.                                           | DSC-015                       | Überschrift korrigieren und Ausgangsanzahl bestätigen.                        |
| P0-12-A2 | Ein Ausgang lässt sich bis auf Widerruf ein- und wieder ausschalten.                                                   | S. 23                | Sachgleich auf S. 47, einschließlich Rückmeldung per Statusbericht. Verhalten nach Spannungsunterbrechung und Neustart fehlt. | DSC-052                       | Persistenz, Idempotenz und Zustand nach Neustart festlegen.                   |
| P0-12-A3 | Der Impulsbetrieb schaltet für eine Sekunde.                                                                           | S. 23                | Sachgleich. Keine Toleranz, keine Wiederholsperre, keine Lastannahme.                                                         | DSC-052                       | Pulsdauer, Toleranz und Wiederholrate bestätigen.                             |
| P0-12-A4 | Der Zeitbetrieb erlaubt 1 bis 120 Minuten.                                                                             | S. 23                | Sachgleich. Verhalten außerhalb des Bereichs, bei erneutem Befehl und bei Spannungsunterbrechung fehlt.                       | DSC-052                       | Wertebereich, Validierung, Fehlerantwort und Neustartverhalten spezifizieren. |
| P0-12-A5 | Nach jedem Schaltvorgang folgt ein Statusbericht.                                                                      | S. 23                | Sachgleich in allen drei Unterabschnitten. Welches Feld den tatsächlichen Ausgangszustand belegt, bleibt offen.               | Rückfrage 11                  | Erfolgskriterium, Statusfeld und Verhalten bei Teilerfolg festlegen.          |
| P0-12-A6 | Alle drei Schaltarten sind nur für den ersten Ausgang beschrieben; eine Ersetzungsregel überträgt sie auf den zweiten. | S. 23, roter Hinweis | Sachgleich. Die Regel gehört zur gesperrten Befehlssyntax und wird nicht wiedergegeben.                                       | BLK-005, BLK-006; Rückfrage 1 | Vollständige Schnittstelle je Ausgang liefern, nicht als Ersetzungsregel.     |

## B. Technische Daten

| ID       | Zu prüfende Aussage                                                                                                | Quelle ab SN-045  | Gegenquelle oder offene Lücke                                                                                                                 | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| P0-12-B1 | Die Spannungsversorgung beträgt 9–30 V.                                                                            | S. 25             | Sachgleich auf S. 49. Das Anschlusskapitel nennt dagegen 12 V Gleichspannung als „geeignete“ Quelle.                                          | DSC-069                           | Verbindlichen Bereich benennen und den Widerspruch zum Anschlusskapitel auflösen. |
| P0-12-B2 | Die Stromaufnahme im Normalbetrieb weicht zwischen den Fassungen ab: deutsch ein Bereich, englisch ein Einzelwert. | S. 25 gegen S. 49 | Bei 400 dpi gesichert. Wer nach der englischen Fassung auslegt, rechnet mit deutlich mehr Ruhestrom als nach der deutschen Untergrenze.       | **DSC-088**, DSC-069; Rückfrage 2 | Verbindlichen Wert oder Bereich festlegen und beide Fassungen angleichen.         |
| P0-12-B3 | Die Stromaufnahme bei der Netzsuche beträgt ca. 37 mA.                                                             | S. 25             | Sachgleich. Keine Angabe, wie lange die Netzsuche dauern darf.                                                                                | keine eigene DSC                  | Dauer und Häufigkeit der Netzsuche für die Batterieauslegung benennen.            |
| P0-12-B4 | Die Ausgänge sind mit 2 × 12 V / 500 mA angegeben.                                                                 | S. 25             | Sachgleich und deckungsgleich mit dem Anschlusskapitel.                                                                                       | keine eigene DSC                  | Als verbindlich bestätigen.                                                       |
| P0-12-B5 | Der Temperaturbereich reicht von −10 bis +80 °C.                                                                   | S. 25             | Sachgleich. Der Statusbericht meldet eine Temperatur „in unmittelbarer Nähe des Geräts“; ein Bezug zwischen beiden Angaben fehlt.             | keine eigene DSC                  | Bezug zwischen gemeldeter Temperatur und zulässigem Bereich herstellen.           |
| P0-12-B6 | Es lassen sich zehn Zielrufnummern speichern; das SIM-Format ist Nano-SIM.                                         | S. 25             | Sachgleich und deckungsgleich mit Kapitel 2. Für die Generation bis SN-044 gilt ein anderes Kartenformat.                                     | DSC-069                           | Als verbindlich bestätigen; kein Wert wird zwischen den Generationen übertragen.  |
| P0-12-B7 | Die Konformitätsangabe nennt die Richtlinie 2014/53/EU.                                                            | S. 25             | **Beide** Fassungen nennen dieselbe Richtlinie. Für die Generation bis SN-044 nennt die englische Fassung eine nicht existierende Richtlinie. | DSC-071                           | Konformitätsangabe je Generation bestätigen.                                      |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-12-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-12-B1 bis B7 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
