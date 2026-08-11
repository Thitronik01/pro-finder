# P0-05: Ausgänge und Positionsbewertung bis SN-044

Stand: 2026-08-11 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Dieses Paket bündelt die fünf verbleibenden P0-Segmente aus DOC-BMA-SN044,
PDF-Seiten 16–17. Beide Seiten wurden am 2026-08-11 erneut bei 300 dpi gerendert und
vollständig gegen Seitenbild, Region und Kontext geprüft. Die elektrischen Grenzwerte der
Ausgänge verbleiben in P0-01; hier werden Steuerungswirkung und Positionsinterpretation
geprüft.

SMS-Zeichenfolgen, Platzhalterregeln, Koordinaten, Kartenadressen und historische
Bildschirmtexte bleiben ausgelassen. Das Paket gilt ausschließlich bis SN-044.

## Zugeordnete Segmente

| Segment                                         | Thema                                    | Quelle               |
| ----------------------------------------------- | ---------------------------------------- | -------------------- |
| `BMA044-DE-P016-S01-AUSGAENGE-UEBERSICHT`       | zwei getrennte Ausgänge                  | DOC-BMA-SN044, S. 16 |
| `BMA044-DE-P016-S02-AUSGANGSSTEUERUNGSARTEN`    | dauerhaft, gepulst und zeitlich begrenzt | DOC-BMA-SN044, S. 16 |
| `BMA044-DE-P016-S03-AUSGANGSBEFEHLE-AUSLASSUNG` | gesperrte Befehle und Ersetzungsregel    | DOC-BMA-SN044, S. 16 |
| `BMA044-DE-P017-S02-KEIN-GPS-EMPFANG`           | letzte Position bei Empfangsausfall      | DOC-BMA-SN044, S. 17 |
| `BMA044-DE-P017-S03-POSITION-UND-UTC-ZEIT`      | UTC-Zeit und Alarmposition               | DOC-BMA-SN044, S. 17 |

## A. Ausgänge und Steuerungswirkung

| ID       | Zu prüfende Aussage                                                                          | Genaue Quelle bis SN-044                                               | Gegenquelle oder offene Lücke                                                                                                          | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                                                |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| P0-05-A1 | Der Pro-finder besitzt zwei getrennt steuerbare Ausgänge.                                    | DOC-BMA-SN044, S. 16, Einleitung 2.7                                   | Elektrische Ausführung und Belastungsgrenzen stehen nur in S. 6 und P0-01. Keine galvanische Trennung oder Ruhestellung dokumentiert.  | keine eigene DSC                  | Ausgangstyp, Ruhestellung, gemeinsame Masse, Schutzbeschaltung und Verhalten beim Booten bestätigen.            |
| P0-05-A2 | Ein Ausgang kann dauerhaft ein- und wieder ausgeschaltet werden.                             | DOC-BMA-SN044, S. 16, erster Block                                     | Verhalten nach Spannungsunterbrechung, Neustart, Funkfehler oder erneutem Einschalten ist offen.                                       | DSC-052                           | Persistenz, Idempotenz, Timeout, Fehlerantwort und sicheren Ausschaltweg spezifizieren.                         |
| P0-05-A3 | Der gepulste Modus schaltet einen Ausgang für eine Sekunde ein.                              | DOC-BMA-SN044, S. 16, zweiter Block                                    | Keine Toleranz, Wiederholsperre, Parallelität oder Wirkung auf angeschlossene Relais dokumentiert.                                     | DSC-052                           | Pulsdauer und Toleranz, Wiederholrate, Lastannahme und Fehlerverhalten bestätigen.                              |
| P0-05-A4 | Der zeitlich begrenzte Modus erlaubt 1 bis 120 Minuten.                                      | DOC-BMA-SN044, S. 16, dritter Block                                    | Verhalten außerhalb des Bereichs, bei erneutem Befehl und bei Spannungsunterbrechung fehlt; die Geräte-Hilfe führt die Variante nicht. | DSC-052/054; Rückfrage 1          | Wertebereich, Einheit, Validierung, Neustartverhalten und Rückmeldung spezifizieren.                            |
| P0-05-A5 | Nach jedem beschriebenen Schaltvorgang wird ein Statusbericht gesendet.                      | DOC-BMA-SN044, S. 16, Ergebnisabsätze                                  | Unklar ist, welches Feld den tatsächlichen Ausgangszustand belegt und ob Berichtversand Schalterfolg garantiert.                       | DSC-060; Rückfrage 11             | Atomare Erfolgskriterien, Statusfeld, Empfänger, Timeout und Teilerfolg festlegen.                              |
| P0-05-A6 | Befehlszeichenfolgen und die Ersetzungsregel für den zweiten Ausgang bleiben gesperrt.       | DOC-BMA-SN044, S. 16, sämtliche Eingabezeilen und roter Schlusshinweis | Geräte-Hilfe auf S. 13 widerspricht den Textbefehlen und enthält keine Zeitvariante.                                                   | DSC-054/063; Rückfrage 1, BLK-005 | Firmwarebestätigte Schnittstelle je Ausgang, Revision und Sprache einschließlich Fehlerantwort liefern.         |
| P0-05-A7 | Ein Ausgang darf nur innerhalb der in P0-01 geprüften elektrischen Grenzen betrieben werden. | DOC-BMA-SN044, S. 6, Ausgangsabschnitt; S. 16, Verweis auf 1.5         | Quelle nennt Garantieverlust bei Überlast, aber keinen Schutz-, Abschalt- oder Diagnoseweg.                                            | P0-01                             | Lastart, Relais/Freilaufdiode, Kurzschluss-/Übertemperaturschutz und kontrollierbaren Fehlerzustand bestätigen. |

## B. Position bei fehlendem GPS-Empfang

| ID       | Zu prüfende Aussage                                                                                      | Genaue Quelle bis SN-044                                               | Gegenquelle oder offene Lücke                                                                                             | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                        |
| -------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| P0-05-B1 | Ohne GPS-Empfang wartet der Pro-finder laut Quelle bis zu 10 Minuten auf eine gültige Position.          | DOC-BMA-SN044, S. 17, vorletzter Absatz                                | Startpunkt der Wartezeit, Abbruchbedingung, Netzabhängigkeit und Toleranz fehlen.                                         | keine eigene DSC | Timerstart, Toleranz, Parallelbetrieb, Abbruch und Status während der Wartezeit bestätigen.             |
| P0-05-B2 | Bleibt der Empfang aus, enthält der Statusbericht die zuletzt empfangene Position.                       | DOC-BMA-SN044, S. 17, vorletzter Absatz; S. 15, letzter Absatz von 2.5 | Kein maximales Alter, Genauigkeit, Herkunft oder verpflichtendes Kennzeichen „nicht aktuell“ dokumentiert.                | Rückfrage 11     | Alter, Genauigkeit, Kennzeichnung, Speicherpersistenz und Datenschutzgrenzen festlegen.                 |
| P0-05-B3 | Eine zuletzt empfangene Position darf nicht automatisch als aktueller Fahrzeugstandort behandelt werden. | Abgeleitete Sicherheitsfolge aus DOC-BMA-SN044, S. 17                  | Das PDF zeigt historische Kartenbilder und behauptet häufige Hausnummerngenauigkeit, nennt aber keine Genauigkeitsgrenze. | DSC-060/082      | Freigegebenen Warnwortlaut und maschinenlesbare Kennzeichnung von Aktualität/Genauigkeit bereitstellen. |

## C. Alarm, Lichtmaschine und UTC

| ID       | Zu prüfende Aussage                                                                                       | Genaue Quelle bis SN-044            | Gegenquelle oder offene Lücke                                                                                                         | DSC / Rückfrage               | Benötigte THITRONIK-Entscheidung                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| P0-05-C1 | Bei Alarm und aktiver Lichtmaschine fragt der Pro-finder die Position laut Quelle fortlaufend ab.         | DOC-BMA-SN044, S. 17, Schlussabsatz | „Aktive Lichtmaschine“ besitzt keinen Messpunkt, keine Schwelle und keinen Bezug zu U1–U5; Verhalten ohne aktive Lichtmaschine fehlt. | keine eigene DSC              | Eingang, Schwelle, Erkennungslogik, Abfrageintervall und Verhalten ohne Signal bestätigen.          |
| P0-05-C2 | Bei anschließendem Empfangsabbruch soll die gespeicherte Position unmittelbar vor dem Abbruch stammen.    | DOC-BMA-SN044, S. 17, Schlussabsatz | Keine Definition von „unmittelbar“, Genauigkeit oder maximalem Speicherabstand.                                                       | Rückfrage 11                  | Zeit-/Genauigkeitsgrenze und überprüfbares Statusfeld festlegen.                                    |
| P0-05-C3 | Die UTC-Zeit in der Meldung gehört zur zuletzt empfangenen Position, nicht zwingend zum Versandzeitpunkt. | DOC-BMA-SN044, S. 17, letzter Satz  | Meldungsschema und Gerätewortlaut sind nicht vollständig textzugänglich; Sprache ist unbestätigt.                                     | DSC-060/072; Rückfragen 11/17 | Zeitquelle, Format, Zeitzone, Positionsbezug und Kennzeichnung des Versandzeitpunkts spezifizieren. |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-05-A1 bis A7 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-05-B1 bis B3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-05-C1 bis C3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Jede der 13 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Ausgangswirkung, Persistenz, Zeitverhalten, Grenzwerte und Erfolgskontrolle sind
  vollständig spezifiziert; BLK-005 bleibt bis zur unabhängigen Befehlsentscheidung aktiv.
- Letzte Position und UTC-Zeit sind mit Alter, Genauigkeit und eindeutiger
  Aktualitätskennzeichnung maschinenlesbar definiert.
- Historische Koordinaten und Kartenbilder werden nicht als Test- oder Produktdaten
  übernommen.
- Erst danach dürfen Segmentstatus über die abgesicherten Supabase-Transitionen geändert
  werden. Dieses Dossier selbst erteilt keine Freigabe.
