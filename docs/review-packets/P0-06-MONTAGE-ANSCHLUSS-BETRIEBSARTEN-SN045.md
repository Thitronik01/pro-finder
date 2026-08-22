# P0-06: Montage, Anschluss und Betriebsarten ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

P0-01 bis P0-05 bündeln ausschließlich **quellenvalidierte** Segmente. Die zehn hier
zugeordneten Segmente sind quellennahe Erstextraktionen vom 2026-08-22; ihre PDF-Seiten
stehen auf `extracted`, nicht auf `validated`. Die unabhängige zweite Durchsicht steht
aus.

Das Paket existiert trotzdem, weil kein sicherheitskritisches Segment ohne
Entscheidungszuordnung bleiben darf – genau das sichert der Unit-Test
`deckt alle sicherheitskritischen Segmente mit genau einem Prüfpaket ab`. Es wird nach der
unabhängigen Gegenprüfung der Seiten 5–9 finalisiert und erst dann auf
„bereit für Fachreview" gesetzt. Bis dahin ist es eine Arbeitsgrundlage, kein Dossier zur
Vorlage.

## Zweck und Geltungsbereich

Das Paket ist das **erste technische Prüfpaket der Generation ab SN-045**. Es bündelt die
zehn P0-Segmente aus DOC-IBA-SN045, deutschen PDF-Seiten 5, 7, 8 und 9. Das Dokument
besitzt keine Textebene; alle Aussagen stammen aus 300-dpi-Renderings, sicherheitskritische
Werte zusätzlich aus 500-dpi-Ausschnitten.

Werte der Generation **bis SN-044** erscheinen hier ausschließlich als gekennzeichnete
Gegenquelle und werden nicht übernommen. SMS-Zeichenfolgen (BLK-005), die
Berechtigungsregel für Zielrufnummern (BLK-006), Koordinaten, Kartenadressen und
Kontaktdaten (BLK-004) bleiben ausgelassen.

## Zugeordnete Segmente

| Segment                                        | Thema                                      | Quelle              |
| ---------------------------------------------- | ------------------------------------------ | ------------------- |
| `IBA045-DE-P005-S01-MELDEN-STATT-VERHINDERN`   | Grenze der Ortungsfunktion                 | DOC-IBA-SN045, S. 5 |
| `IBA045-DE-P005-S02-STARTERBATTERIE`           | Tiefentladung und Zuordnung des Geräts     | DOC-IBA-SN045, S. 5 |
| `IBA045-DE-P007-S01-MONTAGEORT`                | Montageort, Motorraumverbot, Ausrichtung   | DOC-IBA-SN045, S. 7 |
| `IBA045-DE-P007-S04-ABBILDUNG-AUSRICHTUNG`     | Richtig/Falsch nur über Farbe              | DOC-IBA-SN045, S. 7 |
| `IBA045-DE-P008-S01-ANSCHLUSSLEGENDE`          | Marken A–D und Pinbelegung 1–8             | DOC-IBA-SN045, S. 8 |
| `IBA045-DE-P008-S02-ANSCHLUSSABBILDUNG`        | unerklärtes rotes X, drei Antennennamen    | DOC-IBA-SN045, S. 8 |
| `IBA045-DE-P009-S02-ANRUF-LOEST-STATUSBERICHT` | Anruf als Auslöser, Berechtigungsvorbehalt | DOC-IBA-SN045, S. 9 |
| `IBA045-DE-P009-S05-GEOFENCING-PIN3`           | Geofencing über Pin 3                      | DOC-IBA-SN045, S. 9 |
| `IBA045-DE-P009-S06-ANRUF-SCHALTET-WIPRO`      | WiPro III per Anruf scharf/unscharf        | DOC-IBA-SN045, S. 9 |
| `IBA045-DE-P009-S07-MANUELLER-ALARM-PIN3`      | Panikalarm über Pin 3 in Betriebsart A     | DOC-IBA-SN045, S. 9 |

Als P1-Gegenbelege stehen daneben `IBA045-DE-P006-S01-LIEFERUMFANG` (Sicherungswert 3 A),
`IBA045-DE-P007-S03-EXTERNE-GPS-ANTENNE` (Kabellänge) und
`IBA045-DE-P009-S04-STATUSBERICHT-SPANNUNGEN` (U1 bis U5).

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

## B. Betriebsarten, Pin 3 und anrufgesteuerte Funktionen

| ID       | Zu prüfende Aussage                                                                                  | Genaue Quelle ab SN-045                                       | Gegenquelle oder offene Lücke                                                                                                                                                | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| P0-06-B1 | Ein Anruf auf die eingelegte SIM-Karte beendet der Pro-finder selbst und sendet einen Statusbericht. | DOC-IBA-SN045, S. 9, Funktionsgruppe 1                        | Kein Timeout, keine Fehlerantwort und keine Angabe, was bei nicht berechtigten Anrufern geschieht. Die Quelle nennt hier „Nano SIM-Karte", drei Absätze später „SIM-Karte".  | DSC-069, DSC-050 | Ablauf, Zeitgrenzen, Fehlerfall und Verhalten gegenüber unberechtigten Anrufern spezifizieren.                 |
| P0-06-B2 | Nur „berechtigte Nummern" erhalten den Statusbericht.                                                | DOC-IBA-SN045, S. 9, Funktionsgruppen 1 und 5                 | Woran das Gerät eine berechtigte Nummer erkennt, sagt die Quelle im gesamten Kapitel 1 nicht; die Regel ist nur aus Beispielzeilen auf S. 17 erschließbar.                   | DSC-044, BLK-006 | Die Berechtigungsregel firmwareseitig bestätigen und einen veröffentlichbaren Wortlaut liefern.                |
| P0-06-B3 | Ein Anruf schaltet die WiPro III (safe.lock) von scharf nach unscharf und umgekehrt.                 | DOC-IBA-SN045, S. 9, Funktionsgruppe 5                        | Der Absatz nennt keine Schalterstellung. Ob dieselbe Rufnummer je nach Betriebsart Statusbericht **oder** Schaltvorgang auslöst, ergibt sich erst aus der Tabelle auf S. 10. | DSC-052          | Zuordnung Funktionsgruppe ↔ Schalterstellung verbindlich festlegen und Fehlbedienungsrisiko bewerten.          |
| P0-06-B4 | Geofencing ist über Spannung an Pin 3 kontrolliert ein- und ausschaltbar.                            | DOC-IBA-SN045, S. 9, Funktionsgruppe 4                        | Die zugehörigen Spannungswerte stehen erst in der Tabelle auf S. 10. Ob Geofencing ohne WiPro III überhaupt meldet, ist widersprüchlich dokumentiert.                        | DSC-042, BLK-007 | Schaltschwelle, Polarität, Entprellung und die Abhängigkeit von der WiPro III klären.                          |
| P0-06-B5 | Derselbe Pin 3 löst in Betriebsart A einen manuellen Alarm (Panikalarm) aus.                         | DOC-IBA-SN045, S. 9, Funktionsgruppe 6                        | Pin 3 trägt damit auf einer Seite zwei Funktionen. Das Verhältnis erklärt die Quelle nicht – ob sich Geofencing und Panikalarm ausschließen, bleibt offen.                   | DSC-050, DSC-042 | Doppelbelegung auflösen: Welche Funktion gilt in welcher Schalterstellung, und schließen sie einander aus?     |
| P0-06-B6 | Der Panikalarm kann über einen Taster ausgelöst werden.                                              | DOC-IBA-SN045, S. 9, Funktionsgruppe 6, zweiter Satz          | Weder Spannung, Mindestdauer, Entprellung noch Wiederholsperre sind genannt. Auch der Empfängerkreis der Alarmmeldung ist an dieser Stelle offen.                            | DSC-052          | Schaltspezifikation für den Taster (Spannung, Dauer, Sperrzeit) und Empfängerkreis der Alarmmeldung festlegen. |
| P0-06-B7 | Die Legende nennt Pin 3 „Messeingang (U3)", der Fließtext nutzt ihn als Steuereingang.               | DOC-IBA-SN045, S. 8, Legende gegen S. 9, Funktionsgruppen 4/6 | Ein Pin ist zugleich als Messeingang dokumentiert und als Steuereingang benutzt. Die Quelle stellt beide Rollen nicht gegenüber.                                             | DSC-050          | Rolle des Pin 3 eindeutig festlegen: Messeingang, Steuereingang oder beides – und mit welcher Beschaltung.     |

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
| P0-06-B1 bis B7 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-06-C1 bis C3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 5 bis 9 stehen auf `validated`; alle zehn Segmente haben eine
  unabhängige Gegenprüfung. **Erst dann** wechselt dieses Paket auf
  „bereit für Fachreview".
- Jede der 18 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Die Doppelbelegung von Pin 3 (B5, B7) ist aufgelöst; solange sie offen ist, nennt die
  HTML-Anleitung keine der beiden Funktionen als gesicherten Bedienweg.
- Das rote X auf der Anschlussabbildung (A7) ist erklärt oder als „nicht verwendet"
  bestätigt.
- Die Zuordnung der Haftungsaussage zu Pro-finder oder WiPro III (C2) ist entschieden.
- Kein Wert aus DOC-BMA-SN044 wird in diesem Paket auf die Generation ab SN-045
  übertragen. Dieses Dossier erteilt keine Freigabe.
