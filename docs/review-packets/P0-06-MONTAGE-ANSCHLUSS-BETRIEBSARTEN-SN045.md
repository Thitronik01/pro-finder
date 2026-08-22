# P0-06: Montage und elektrischer Anschluss ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

P0-01 bis P0-05 bündeln ausschließlich **quellenvalidierte** Segmente. Die elf hier
zugeordneten Segmente sind quellennahe Erstextraktionen vom 2026-08-22; ihre PDF-Seiten
stehen auf `extracted`, nicht auf `validated`. Die unabhängige zweite Durchsicht steht
aus.

Das Paket existiert trotzdem, weil kein sicherheitskritisches Segment ohne
Entscheidungszuordnung bleiben darf – genau das sichert der Unit-Test
`deckt alle sicherheitskritischen Segmente mit genau einem Prüfpaket ab`. Es wird nach der
unabhängigen Gegenprüfung der Seiten 5–14 finalisiert und erst dann auf
„bereit für Fachreview" gesetzt. Bis dahin ist es eine Arbeitsgrundlage, kein Dossier zur
Vorlage.

## Zweck und Geltungsbereich

Das Paket ist das **erste von drei technischen Prüfpaketen der Generation ab SN-045**. Es
bündelt die elf P0-Segmente zu Montage, elektrischem Anschluss und Haftungsaussagen aus
DOC-IBA-SN045, deutschen PDF-Seiten 5, 7, 8, 11 und 12. Betriebsarten, Geofencing und
GPS-Diagnose stehen in P0-07; SIM, Aktivierung und anrufgesteuerte Funktionen in P0-08.
Das Dokument besitzt keine Textebene; alle Aussagen stammen aus 300-dpi-Renderings,
sicherheitskritische Werte zusätzlich aus 500- bis 600-dpi-Ausschnitten.

Werte der Generation **bis SN-044** erscheinen hier ausschließlich als gekennzeichnete
Gegenquelle und werden nicht übernommen. SMS-Zeichenfolgen (BLK-005), die
Berechtigungsregel für Zielrufnummern (BLK-006), Koordinaten, Kartenadressen und
Kontaktdaten (BLK-004) bleiben ausgelassen.

## Zugeordnete Segmente

| Segment                                           | Thema                                    | Quelle               |
| ------------------------------------------------- | ---------------------------------------- | -------------------- |
| `IBA045-DE-P005-S01-MELDEN-STATT-VERHINDERN`      | Grenze der Ortungsfunktion               | DOC-IBA-SN045, S. 5  |
| `IBA045-DE-P005-S02-STARTERBATTERIE`              | Tiefentladung und Zuordnung des Geräts   | DOC-IBA-SN045, S. 5  |
| `IBA045-DE-P007-S01-MONTAGEORT`                   | Montageort, Motorraumverbot, Ausrichtung | DOC-IBA-SN045, S. 7  |
| `IBA045-DE-P007-S04-ABBILDUNG-AUSRICHTUNG`        | Richtig/Falsch nur über Farbe            | DOC-IBA-SN045, S. 7  |
| `IBA045-DE-P008-S01-ANSCHLUSSLEGENDE`             | Marken A–D und Pinbelegung 1–8           | DOC-IBA-SN045, S. 8  |
| `IBA045-DE-P008-S02-ANSCHLUSSABBILDUNG`           | unerklärtes rotes X, drei Antennennamen  | DOC-IBA-SN045, S. 8  |
| `IBA045-DE-P011-S01-VERSORGUNG-UND-MESSEINGAENGE` | Versorgung, Absicherung, Messeingänge    | DOC-IBA-SN045, S. 11 |
| `IBA045-DE-P011-S03-AUSGAENGE-BELASTBARKEIT`      | 12 V / 500 mA, Relais mit Freilaufdiode  | DOC-IBA-SN045, S. 11 |
| `IBA045-DE-P011-S04-AUSGANGSSTEUERUNGSARTEN`      | dauerhaft, Impuls, freie Zeit            | DOC-IBA-SN045, S. 11 |
| `IBA045-DE-P012-S01-GPS-ANTENNE-ANSCHLIESSEN`     | spannungsfrei, Hauptkabelbaum            | DOC-IBA-SN045, S. 12 |
| `IBA045-DE-P012-S02-SATELLITENDATEN-SPEICHERN`    | 13,5 V über mindestens fünf Minuten      | DOC-IBA-SN045, S. 12 |

Als P1-Gegenbelege stehen daneben `IBA045-DE-P006-S01-LIEFERUMFANG` (Sicherungswert 3 A),
`IBA045-DE-P007-S03-EXTERNE-GPS-ANTENNE` (Kabellänge),
`IBA045-DE-P011-S02-WIPRO-VERBINDEN` (optionales Verbindungskabel) und
`IBA045-DE-P011-S05-GPS-ANTENNE-MONTIEREN` (Klebefläche, 15 °C, waagerechte Lage).

## A. Montage, Ausrichtung und Anschluss

| ID       | Zu prüfende Aussage                                                                                 | Genaue Quelle ab SN-045                       | Gegenquelle oder offene Lücke                                                                                                                                                | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| P0-06-A1 | Der Montageort muss im Fahrzeuginneren liegen; im Motorraum darf das Gerät keinesfalls sitzen.      | DOC-IBA-SN045, S. 7, Abschnitt 1.1, Absatz 2  | Die Quelle nennt keinen Grund (Temperatur, Feuchte, EMV) und keinen zulässigen Temperaturbereich am Montageort; die technische Tabelle auf S. 25 nennt nur Gerätegrenzwerte. | keine eigene DSC | Physikalische Begründung und zulässige Umgebungsbedingungen am Montageort benennen, damit die Anleitung sie nennen darf. |
| P0-06-A2 | Die Geräteoberseite muss nach oben zeigen, weil der GPS-Empfänger integriert ist.                   | DOC-IBA-SN045, S. 7, Abschnitt 1.1, Absatz 2  | Welche Seite die „Oberseite" ist, ist nur über das Foto erkennbar; ein tastbares oder beschriftetes Merkmal am Gehäuse ist nicht dokumentiert.                               | siehe A4         | Eindeutiges, nicht rein visuelles Merkmal der Oberseite bestätigen (Aufdruck, Form, Tastmerkmal).                        |
| P0-06-A3 | „Freie Sicht" zum Satelliten ist erforderlich; Kunststoff, Glas und Holz sind unschädlich.          | DOC-IBA-SN045, S. 7, Abschnitt 1.1, Absatz 3  | „Freie Sicht" wird nirgends definiert. Metall, Isolierglas und beschichtete Scheiben sind nicht erwähnt, obwohl sie der häufigste reale Störfall sind.                       | DSC-052          | Materialliste vervollständigen und ein prüfbares Kriterium für „freie Sicht" liefern.                                    |
| P0-06-A4 | Richtige und falsche Geräteausrichtung sind nur über Grün/Rot und ein Verbotszeichen unterschieden. | DOC-IBA-SN045, S. 7, dreiteilige Abbildung    | Die Abbildung hat keine Bildunterschrift. Nur das Verbotszeichen trägt mit dem Diagonalbalken ein farbunabhängiges Merkmal; die grüne Montagezone trägt keines.              | DSC-047 (analog) | Freigegebene Textalternative je Teilbild und ein farbunabhängiges Merkmal für die empfohlene Montagezone liefern.        |
| P0-06-A5 | Pin 1 ist Masse (GND), Pin 8 ist Dauerplus 12 V.                                                    | DOC-IBA-SN045, S. 8, Legendentabelle          | Bis SN-044 heißt derselbe Pin 8 „Betriebsspannung U1, +12 V" (DOC-BMA-SN044, S. 4) – als Gegenquelle notiert, nicht übernommen. Aderfarben nennt die Legende nicht.          | DSC-069          | Verbindliche Pinbelegung je Generation, Aderfarbzuordnung und Absicherung (Bezug: Flachsicherung 3 A) bestätigen.        |
| P0-06-A6 | Pin 6 ist Ausgang B, Pin 7 ist Ausgang A.                                                           | DOC-IBA-SN045, S. 8, Legendentabelle          | Die Reihenfolge ist gegenläufig zur Nummerierung – ein klassischer Verwechslungsfall. Belastungsgrenzen stehen erst in der technischen Tabelle auf S. 25.                    | keine eigene DSC | Zuordnung bestätigen und entscheiden, ob die Anleitung die Vertauschung ausdrücklich hervorheben soll.                   |
| P0-06-A7 | Zwischen den Marken B und C markiert ein rotes X einen Anschluss, den die Legende nicht erklärt.    | DOC-IBA-SN045, S. 8, beschriftetes Gerätefoto | In allen zehn Sprachfassungen identisch unerklärt (DSC-022). Eine Lesart als „nicht verwendet" ist eine Annahme; ein falsch belegter Anschluss ist ein Verdrahtungsrisiko.   | DSC-022          | Bedeutung des Anschlusses und des roten X verbindlich klären und einen freigegebenen Wortlaut liefern.                   |
| P0-06-A8 | Dieselbe optionale Antenne trägt drei Bezeichnungen auf einer Seite.                                | DOC-IBA-SN045, S. 8: Etikett, Bild, Legende   | „GPS-pro" (Etikett), „GPS-Antenne (Optional)" (eingebettete Bildbeschriftung, in keiner Sprache lokalisiert), „Externe GPS-Antenne (Optional)" (Legende).                    | DSC-022, DSC-050 | Verbindliche Produktbezeichnung samt Artikelnummer festlegen; Bildbeschriftung für die Lokalisierung freigeben.          |

## B. Versorgung, Ausgänge und GPS-Antennenanschluss

| ID       | Zu prüfende Aussage                                                                         | Genaue Quelle ab SN-045                         | Gegenquelle oder offene Lücke                                                                                                                                   | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| P0-06-B1 | Pin 1 und Pin 8 werden polungsrichtig an eine Spannungsversorgung mit 12 V DC gelegt.       | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Abs. 1     | Die technische Tabelle auf S. 25 nennt für dasselbe Gerät einen Bereich statt eines Nennwerts. Derselbe Widerspruch besteht bis SN-044 zwischen S. 6 und S. 18. | DSC-069          | Nennspannung und zulässigen Bereich gegeneinander abgrenzen; Verpolungsschutz und Folgen einer Verpolung nennen. |
| P0-06-B2 | Die Plus-Leitung wird mit der beiliegenden Sicherung abgesichert.                           | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Abs. 1     | Der Absatz nennt keinen Wert. Nur die Lieferumfangsliste auf S. 6 nennt eine Flachsicherung mit 3 A; Einbauort und maximale Leitungslänge fehlen ganz.          | keine eigene DSC | Sicherungswert, Charakteristik, Einbauort und maximale Leitungslänge verbindlich festlegen.                      |
| P0-06-B3 | Die Pins 2 bis 5 sind Messeingänge für Spannungen von 0 bis 30 V.                           | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Abs. 1     | Eingangswiderstand, Genauigkeit, Überspannungsfestigkeit und das Verhalten oberhalb von 30 V sind nicht dokumentiert.                                           | keine eigene DSC | Eingangsdaten und zulässige Überlast je Messeingang bestätigen.                                                  |
| P0-06-B4 | Pin 6 und Pin 7 liefern 12 V und sind mit 500 mA belastbar.                                 | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Abs. 3     | Kein Kurzschluss-, Übertemperatur- oder Diagnoseverhalten dokumentiert. Die Quelle nennt nur den Garantieverlust bei Überlastung, keinen Schutzmechanismus.     | keine eigene DSC | Ausgangstyp, Schutzbeschaltung, Ruhestellung und Verhalten beim Booten bestätigen.                               |
| P0-06-B5 | Über 500 mA ist ein hochwertiges KFZ-Relais mit Freilaufdiode zu verwenden.                 | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Abs. 3     | „Hochwertig" ist kein prüfbares Kriterium. Ob die Freilaufdiode im Relais oder extern sitzt, sagt die Quelle nicht.                                             | keine eigene DSC | Prüfbare Relaisanforderung und Beschaltungsbeispiel liefern.                                                     |
| P0-06-B6 | Ein Ausgang kann dauerhaft, als Ein-Sekunden-Impuls oder für eine freie Zeit schalten.      | DOC-IBA-SN045, S. 11, Abschnitt 1.4, Aufzählung | Der Wertebereich der freien Zeit steht nicht auf dieser Seite. Zustand nach Spannungsausfall, Neustart oder erneutem Befehl ist offen.                          | DSC-052          | Wertebereich, Persistenz, Abbruchweg und Ruhestellung nach Neustart spezifizieren.                               |
| P0-06-B7 | Zum Anschließen der GPS-Antenne muss der Pro-finder spannungsfrei sein.                     | DOC-IBA-SN045, S. 12, Abschnitt 1.5.2, Abs. 1   | Die Quelle verlangt dafür, den „Hauptkabelbaum" abzuziehen, erklärt den Begriff aber nirgends und ordnet ihn keiner Marke der Anschlussabbildung auf S. 8 zu.   | DSC-050          | Den Begriff Hauptkabelbaum definieren und einer Marke der Anschlussabbildung zuordnen.                           |
| P0-06-B8 | Nach der Installation muss die Betriebsspannung mindestens fünf Minuten über 13,5 V liegen. | DOC-IBA-SN045, S. 12, Abschnitt 1.5.2, Abs. 2   | Der Wert ist erfasst, aber fachlich unbestätigt. Woran ein abgeschlossener Speichervorgang erkennbar ist und was ein Abbruch bewirkt, sagt die Quelle nicht.    | DSC-052          | Schwelle, Mindestdauer, erkennbares Abschlusskriterium und Folgen eines Abbruchs bestätigen.                     |

## C. Grundsatzaussagen und Haftung

| ID       | Zu prüfende Aussage                                               | Genaue Quelle ab SN-045                         | Gegenquelle oder offene Lücke                                                                                                                                   | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                               |
| -------- | ----------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| P0-06-C1 | Der Pro-finder kann einen Diebstahl nur melden, nicht verhindern. | DOC-IBA-SN045, S. 5, Haftungsausschluss, Abs. 1 | Die Aussage trägt kein Signalwort und ist typografisch nicht als Warnung ausgezeichnet, obwohl sie die Kernerwartung an das Produkt begrenzt.                   | DSC-063 (analog) | Freigegebenen Warnwortlaut und Platzierung für die HTML-Anleitung bestätigen.                  |
| P0-06-C2 | „Die Alarmanlage" ist an die Starterbatterie angeschlossen.       | DOC-IBA-SN045, S. 5, Haftungsausschluss, Abs. 2 | Derselbe Abschnitt führt den Pro-finder als **Ortungssystem** und die WiPro III als **Alarmanlage** ein. Welches Gerät die Tiefentladung verursacht, ist offen. | DSC-050          | Verbindlich klären, welches Gerät gemeint ist, und den Absatz entsprechend korrigieren lassen. |
| P0-06-C3 | Bei leerer Batterie lässt sich das Fahrzeug nicht entriegeln.     | DOC-IBA-SN045, S. 5, Haftungsausschluss, Abs. 2 | Keine Ruhestromangabe an dieser Stelle, keine Standzeitabschätzung und kein Hinweis auf einen Notentriegelungsweg.                                              | DSC-052          | Ruhestrom, realistische Standzeit und dokumentierten Notentriegelungsweg bereitstellen.        |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-06-A1 bis A8 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-06-B1 bis B8 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-06-C1 bis C3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 5 bis 14 stehen auf `validated`; alle zehn Segmente haben eine
  unabhängige Gegenprüfung. **Erst dann** wechselt dieses Paket auf
  „bereit für Fachreview".
- Jede der 19 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Nennspannung und zulässiger Bereich (B1) sowie der Sicherungswert (B2) sind
  entschieden; bis dahin nennt die HTML-Anleitung beide Angaben nebeneinander.
- Das rote X auf der Anschlussabbildung (A7) ist erklärt oder als „nicht verwendet"
  bestätigt.
- Die Zuordnung der Haftungsaussage zu Pro-finder oder WiPro III (C2) ist entschieden.
- Kein Wert aus DOC-BMA-SN044 wird in diesem Paket auf die Generation ab SN-045
  übertragen. Dieses Dossier erteilt keine Freigabe.
