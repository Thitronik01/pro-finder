# P0-03: Meldungen, Alarm und Geofencing bis SN-044

Stand: 2026-08-11 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Dieses Paket bündelt die elf sicherheitskritischen Segmente aus DOC-BMA-SN044,
PDF-Seiten 12–15. Fünf sicherheitsrelevante Segmente derselben Seiten dienen als
Gegenbelege. Die Quellseiten wurden am 2026-08-11 erneut bei 400 dpi gerendert und
vollständig gegen Seitenbild, Region und Kontext geprüft.

Das Paket gilt ausschließlich für den Seriennummernbereich bis SN-044. Aussagen aus der
Generation ab SN-045 oder aus anderen Sprachfassungen sind nur ausdrücklich markierte
Gegenquellen. Sie werden nicht als gültige Werte übernommen.

## Harte Sperren

- Keine SMS-Befehlszeichenfolge wird reproduziert oder freigegeben (BLK-005).
- Keine Koordinate, Kartenadresse, Beispielrufnummer oder Guthabenangabe wird übernommen.
- Der Geofencing-Radius bleibt wegen DSC-061/078 und Rückfrage 14 vollständig ausgelassen.
- Die Kennzeichnung berechtigter Nummern bleibt wegen DSC-056 und BLK-006 ausgelassen.
- Deutsche Beispielbilder in allen Sprachteilen belegen keine Gerätemeldungssprache
  (DSC-072, Rückfrage 17).
- Eine Entscheidung in diesem Dossier ersetzt weder Firmwarebeleg noch unabhängigen
  technischen und sicherheitskritischen Review.

## Zugeordnete Segmente

| Segment                                            | Thema                               | Quelle               |
| -------------------------------------------------- | ----------------------------------- | -------------------- |
| `BMA044-DE-P012-S03-DIEBSTAHLMELDUNG`              | Diebstahlmeldung und stiller Alarm  | DOC-BMA-SN044, S. 12 |
| `BMA044-DE-P012-S04-SPANNUNGSWARNUNG`              | Unterspannung und Rückkehrschwelle  | DOC-BMA-SN044, S. 12 |
| `BMA044-DE-P013-S01-NOTRUFMELDUNG`                 | Notruf in Betriebsart A             | DOC-BMA-SN044, S. 13 |
| `BMA044-DE-P013-S03-HILFE-SMS-AUSLASSUNG`          | gesperrte Gerätebefehlsliste        | DOC-BMA-SN044, S. 13 |
| `BMA044-DE-P013-S04-WIPRO-ALARMMELDUNGEN`          | Einbruch-, Gas- und manueller Alarm | DOC-BMA-SN044, S. 13 |
| `BMA044-DE-P014-S01-SMS-ALARMSTEUERUNG-AUSLASSUNG` | gesperrte SMS-Alarmsteuerung        | DOC-BMA-SN044, S. 14 |
| `BMA044-DE-P014-S02-ALARMSTEUERUNG-PER-ANRUF`      | Anrufsteuerung in Betriebsart 2/3   | DOC-BMA-SN044, S. 14 |
| `BMA044-DE-P014-S03-BERECHTIGTE-NUMMERN`           | Zugriffsbeschränkung                | DOC-BMA-SN044, S. 14 |
| `BMA044-DE-P015-S01-GEOFENCING-DEFINITION`         | virtueller Bereich ohne Radius      | DOC-BMA-SN044, S. 15 |
| `BMA044-DE-P015-S02-GEOFENCING-STEUERWEGE`         | Pin 3, Schalterstellung und WiPro   | DOC-BMA-SN044, S. 15 |
| `BMA044-DE-P015-S03-STATUSBERICHT-ANFORDERN`       | befehlsfreier Anrufweg              | DOC-BMA-SN044, S. 15 |

## A. Statusbericht und Meldungsfelder

| ID       | Zu prüfende Aussage                                                                                                                                      | Genaue Quelle bis SN-044                                           | Gegenquelle oder offene Lücke                                                                                                                     | DSC / Rückfrage               | Benötigte THITRONIK-Entscheidung                                                                        |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| P0-03-A1 | Ein Statusbericht wird auf Anforderung oder abhängig von der Betriebsart automatisch versendet.                                                          | DOC-BMA-SN044, S. 12, Absatz „Statusbericht“; S. 15, Abschnitt 2.5 | Der Verweis auf Abschnitt 2.3 trifft nicht den vollständigen Anforderungsweg; die Betriebsartentabelle auf S. 5 enthält Intervalle und Ausnahmen. | DSC-055; Rückfragen 11/16     | Auslöser und Intervall je Betriebsart sowie den maßgeblichen Abschnitt bestätigen.                      |
| P0-03-A2 | Der Bericht enthält Position, Geschwindigkeit und Ausgangszustände; je nach Betriebsart zusätzlich Spannungen U2–U5 und Umgebungstemperatur.             | DOC-BMA-SN044, S. 12, Statusbericht; S. 15, letzter Absatz von 2.5 | Die Beispielabbildung zeigt weitere Felder, die der Fließtext nicht vollständig erklärt; ab SN-045 weicht die Feldbeschreibung ebenfalls ab.      | DSC-060; Rückfrage 11         | Verbindliches Feldschema, Reihenfolge, Einheiten, optionale Felder und Gerätewortlaut liefern.          |
| P0-03-A3 | Bei gültigem GPS-Empfang wird laut Quelle nur die Position angezeigt; ohne gültige Position erscheint ein Fehlerhinweis und die letzte gültige Position. | DOC-BMA-SN044, S. 15, letzter Absatz von 2.5                       | Kein Alter der Ersatzposition und keine eindeutige UTC-Zuordnung dokumentiert.                                                                    | Rückfrage 11                  | Alter, Zeitbezug, Kennzeichnung und sichere Interpretation der Ersatzposition bestätigen.               |
| P0-03-A4 | Außerhalb der Betriebsarten 2 und 3 kann der Statusbericht per Anruf angefordert werden; das Gerät beendet den Anruf und antwortet ohne Guthabenanzeige. | DOC-BMA-SN044, S. 15, Anrufweg in 2.5                              | In Betriebsart 2/3 hat der Anruf laut S. 14 eine Schaltwirkung auf die WiPro. Eine Fehlwahl kann daher eine andere Funktion auslösen.             | DSC-064                       | Exakte Betriebsartengrenze, Anzahl Freizeichen, Timeout, Rückmeldung und sicheren Fehlerpfad festlegen. |
| P0-03-A5 | Meldungen können GPS-Bereitschaft, UTC, Position, Geschwindigkeit und Prepaid-Guthaben enthalten; die Nachricht ist auf 160 Zeichen begrenzt.            | DOC-BMA-SN044, S. 12, Begriffsliste und roter Hinweis              | Die neun Beispiel-SMS liegen nur als Bild vor; Sprache, Kürzungsregel und Priorität der Felder sind nicht beschrieben.                            | DSC-060/063; Rückfragen 11/17 | Vollständiges Meldungsschema, Kürzungslogik, Zeichensatz und Sprache je Firmware bestätigen.            |

## B. Diebstahl- und Spannungswarnung

| ID       | Zu prüfende Aussage                                                                                       | Genaue Quelle bis SN-044                             | Gegenquelle oder offene Lücke                                                                                                              | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| P0-03-B1 | Diebstahlmeldung setzt laut Quelle eine aktivierte WiPro voraus.                                          | DOC-BMA-SN044, S. 12, Absatz „Diebstahlmeldung“      | Abschnitt 2.4 auf S. 15 beschreibt Geofencing zusätzlich über Pin 3 beziehungsweise SMS. Ab SN-045 ist die Abhängigkeit offen.             | DSC-062; Rückfrage 9, BLK-007     | Firmwarebezogene Voraussetzung je Schalterstellung und Verhalten ohne WiPro bestätigen.              |
| P0-03-B2 | Diebstahlmeldung ist zunächst ein stiller Alarm; Blinker und Sirene werden nicht automatisch aktiviert.   | DOC-BMA-SN044, S. 12, Absatz „Diebstahlmeldung“      | Die nachträgliche SMS-Steuerung auf S. 14 ist wegen widersprüchlicher Befehle gesperrt.                                                    | DSC-054/063; Rückfrage 1, BLK-005 | Alarmwirkung, Quittierung und einen sicheren, freigegebenen Eskalationsweg festlegen.                |
| P0-03-B3 | Nach der Diebstahlmeldung wird die Masternummer zusätzlich angerufen.                                     | DOC-BMA-SN044, S. 12, roter Anrufhinweis             | Keine Anrufdauer, Wiederholung, Fehlerbehandlung oder Bestätigung dokumentiert; Hinweis nur farblich hervorgehoben.                        | DSC-063                           | Anrufreihenfolge, Wiederholungen, Rufaufbau, Fehlverhalten und Protokollierung bestätigen.           |
| P0-03-B4 | Der Geofencing-Radius wird nicht veröffentlicht.                                                          | DOC-BMA-SN044, S. 12 und 15, sichtbare Radiusangaben | Französisch derselben Anleitung nennt einen dritten Wert; ab SN-045 gilt ein anderer Wert.                                                 | DSC-061/078; Rückfrage 14         | Radius je Hardware-/Firmwarestand mit Toleranz, Messmethode und Geltungsbereich liefern.             |
| P0-03-B5 | Außer Betriebsart B wechselt der Pro-finder bei dauerhaft weniger als 11,2 V in den Bereitschaftsbetrieb. | DOC-BMA-SN044, S. 12, Absatz „Spannungswarnung“      | Parallelfassungen bestätigen den Wert, aber „dauerhaft“ besitzt keine Zeitdefinition; technische Tabelle nennt nur den Versorgungsbereich. | DSC-060/063                       | Schwelle, Hysterese, Mindestdauer, Messpunkt, Toleranz und Verhalten in Betriebsart B bestätigen.    |
| P0-03-B6 | Erst oberhalb von 12,5 V kehrt der Pro-finder in den Normalbetrieb zurück.                                | DOC-BMA-SN044, S. 12, letzter Satz                   | Keine Verzögerung, Toleranz oder Rückkehrmeldung dokumentiert.                                                                             | DSC-060/063                       | Rückkehrschwelle, Messdauer, Toleranz, Rückmeldung und Verhalten bei pendelnder Spannung bestätigen. |

## C. Notruf und WiPro-Alarmmeldungen

| ID       | Zu prüfende Aussage                                                                  | Genaue Quelle bis SN-044                                        | Gegenquelle oder offene Lücke                                                                                                        | DSC / Rückfrage               | Benötigte THITRONIK-Entscheidung                                                                       |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| P0-03-C1 | In Betriebsart A löst Spannung an Pin 3 eine Notrufmeldung aus.                      | DOC-BMA-SN044, S. 13, erster Absatz; S. 5, Betriebsartentabelle | Pin 3 dient je Betriebsart auch als Messeingang beziehungsweise Geofencing-Eingang. Schwelle und Impulsdauer sind nicht beschrieben. | DSC-060/063                   | Elektrische Schaltschwellen, Mindestdauer, Entprellung, zulässige Quelle und Fehlverhalten bestätigen. |
| P0-03-C2 | Nach der Notrufmeldung wird die Masternummer zusätzlich angerufen.                   | DOC-BMA-SN044, S. 13, roter Hinweis                             | Keine Bestätigung, Wiederholung oder Eskalation dokumentiert.                                                                        | DSC-063                       | Anruflogik, Fehlerfall, Wiederholungen und Nachweis der Zustellung festlegen.                          |
| P0-03-C3 | Einbruchmeldung entsteht, wenn die WiPro einen Einbruchalarm meldet.                 | DOC-BMA-SN044, S. 13, Absatz „Einbruchmeldung“                  | Keine Ereigniscodes, Entprellung, Priorität oder Abgrenzung zu anderen Alarmtypen dokumentiert.                                      | DSC-060/063                   | Ereignisquelle, Geräte-/Firmwarekombination und Meldungsinhalt bestätigen.                             |
| P0-03-C4 | Gasalarm entsteht, wenn die WiPro einen Gasalarm meldet.                             | DOC-BMA-SN044, S. 13, Absatz „Gasalarm“                         | Sensor, Anschluss, Schwelle und Testweg sind in dieser Quelle nicht definiert.                                                       | DSC-060/063                   | Unterstützte Sensoren, Auslöseweg, Testverfahren und Fehlermeldung festlegen.                          |
| P0-03-C5 | Manueller Alarm entsteht durch das Auslösen eines Panikalarms an der WiPro.          | DOC-BMA-SN044, S. 13, Absatz „Manueller Alarm“                  | S. 4–5 beschreibt zugleich einen Pin-3-Weg in Betriebsart A; die Beziehung beider Wege ist nicht erklärt.                            | DSC-060/063                   | Auslöser je Konfiguration, Priorität, Rücksetzung und erwartete Rückmeldung bestätigen.                |
| P0-03-C6 | Nach Einbruch-, Gas- und manuellem Alarm wird die Masternummer zusätzlich angerufen. | DOC-BMA-SN044, S. 13, vierfacher roter Anrufhinweis             | Beispielbilder sind deutsch und nicht textzugänglich; keine Sprach- oder Eskalationslogik dokumentiert.                              | DSC-060/063/072; Rückfrage 17 | Einheitliche Anruflogik und Meldungssprache je Gerät bestätigen.                                       |

## D. Alarmsteuerung und Berechtigung

| ID       | Zu prüfende Aussage                                                                                                                         | Genaue Quelle bis SN-044            | Gegenquelle oder offene Lücke                                                                                             | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| P0-03-D1 | Die Quelle beschreibt eine SMS-Steuerung der WiPro mit Statusmeldung nach erfolgreichem Schalten; sämtliche Zeichenfolgen bleiben gesperrt. | DOC-BMA-SN044, S. 14, Abschnitt 2.2 | Geräte-Hilfe auf S. 13 und die vier Sprachfassungen widersprechen dem Fließtext.                                          | DSC-054; Rückfrage 1, BLK-005  | Akzeptierte Befehle, Groß-/Kleinschreibung, Sprache, Erfolgskriterium und Fehlerantwort je Firmware liefern.         |
| P0-03-D2 | In Betriebsart 2 und 3 schaltet ein Anruf die WiPro in den jeweils nächsten Zustand.                                                        | DOC-BMA-SN044, S. 14, Abschnitt 2.3 | „Nächster Zustand“ benennt weder Ausgangszustand noch Idempotenz; außerhalb 2/3 hat Anruf laut S. 15 eine andere Wirkung. | DSC-064                        | Zustandsautomat, sichere Wiederholung, Race-Conditions und Rücksetzweg spezifizieren.                                |
| P0-03-D3 | Das Gerät beendet den Schaltanruf vor einer kostenpflichtigen Verbindung und sendet einen Statusbericht an den Anrufer.                     | DOC-BMA-SN044, S. 14, Abschnitt 2.3 | Keine Zeitgrenze, Roamingausnahme, Verifikation oder Fehlerantwort dokumentiert.                                          | DSC-064                        | Timing, Kostenannahme, Netzfehler, Empfänger und bestätigendes Statusfeld festlegen.                                 |
| P0-03-D4 | Nur berechtigte Nummern können zugreifen; die technische Kennzeichnung wird nicht veröffentlicht.                                           | DOC-BMA-SN044, S. 14, Fetthinweis   | S. 9–10 beschreibt Rollen, erklärt aber die Zeichenregel nur implizit in Beispielen. Derselbe Mangel besteht ab SN-045.   | DSC-056; Rückfrage 10, BLK-006 | Firmwarebestätigte Autorisierungsregel, Absenderprüfung, Ablehnungsantwort, Spoofing-Schutz und Rate-Limits liefern. |

## E. Geofencing-Steuerwege

| ID       | Zu prüfende Aussage                                                                                             | Genaue Quelle bis SN-044                                                   | Gegenquelle oder offene Lücke                                                                                                | DSC / Rückfrage                  | Benötigte THITRONIK-Entscheidung                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| P0-03-E1 | Geofencing bildet einen virtuellen Bereich; beim Verlassen ist eine Diebstahlmeldung vorgesehen.                | DOC-BMA-SN044, S. 15, erster Absatz von 2.4                                | Voraussetzung WiPro steht auf S. 12, nicht im Definitionsabsatz; Radius ist widersprüchlich.                                 | DSC-061/062/078; Rückfragen 9/14 | Funktionsvoraussetzungen, Bezugspunkt, Radius, Toleranz und Ereigniszeitpunkt je Revision bestätigen.        |
| P0-03-E2 | In den Schalterstellungen 8 und B wird Geofencing über Pin 3 geschaltet.                                        | DOC-BMA-SN044, S. 15, zweiter Absatz; S. 5, Betriebsartentabelle           | Die Tabelle zeigt invertierte Schaltlogik und lässt den Bereich zwischen den Schwellen undefiniert.                          | DSC-062                          | Pegel, Hysterese, undefinierten Bereich, Mindestdauer, Priorität und Fehlerzustand je Stellung festlegen.    |
| P0-03-E3 | In allen anderen Schalterstellungen sieht die Quelle SMS als Steuerweg vor; die Zeichenfolgen bleiben gesperrt. | DOC-BMA-SN044, S. 15, Abschnitt 2.4                                        | Befehle widersprechen der Geräte-Hilfe und den Parallelfassungen.                                                            | DSC-054; Rückfrage 1, BLK-005    | Freigegebenen Bedienweg je Stellung und Firmware liefern, einschließlich Erfolgskontrolle.                   |
| P0-03-E4 | Bei geschärfter WiPro ist Geofencing laut Quelle automatisch aktiv.                                             | DOC-BMA-SN044, S. 15, roter Hinweis                                        | S. 7 empfiehlt bei GPS-Reflexionen ein Abschalten; der Vorrang gegenüber automatischer Aktivierung wird nicht erklärt.       | DSC-062/063; Rückfrage 9         | Vorrang, Wiederaktivierung, Verhalten beim Schärfen/Entschärfen und sichtbare Zustandsrückmeldung festlegen. |
| P0-03-E5 | Der Geofencing-Zustand ist nicht zuverlässig barrierefrei kontrollierbar.                                       | DOC-BMA-SN044, S. 12, nur bildlich sichtbares Statusfeld; S. 15, Fließtext | Kein eigenes farbunabhängiges Gerätemerkmal; Beispiel-SMS-Feld ist nicht in der Textebene und seine Sprache ist unbestätigt. | DSC-060/072; Rückfragen 11/17    | Maschinenlesbares Zustandsfeld, exakten Wortlaut, Sprache und einen unabhängigen Kontrollweg bereitstellen.  |

## F. Schutz- und Accessibility-Entscheidungen

| ID       | Zu prüfende Aussage                                                                                         | Genaue Quelle bis SN-044                                          | Gegenquelle oder offene Lücke                                                                                           | DSC / Rückfrage                           | Benötigte THITRONIK-Entscheidung                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| P0-03-F1 | Warnungen und Anrufhinweise sind im PDF überwiegend nur rot oder fett ausgezeichnet.                        | DOC-BMA-SN044, S. 12–15, rote Hinweise ohne Signalwort            | Ohne Farbe beziehungsweise bei Vorlesen ist die Warnstufe nicht eindeutig.                                              | DSC-063                                   | Signalwort, semantische Stufe und verbindliche barrierefreie Formulierung je Hinweis freigeben.               |
| P0-03-F2 | Beispiel-SMS dürfen nicht als technisches Textschema dienen.                                                | DOC-BMA-SN044, S. 12–13, neun eingebettete Bilder                 | Die Bilder fehlen vollständig in der Textebene; alle Parallelfassungen verwenden dieselben deutschen Bilder.            | DSC-060/072; Rückfragen 11/17             | Maschinenlesbares, firmwarebezogenes Meldungsschema und lokalisierte Muster ohne Real-/Beispieldaten liefern. |
| P0-03-F3 | Befehls- und Berechtigungswerte bleiben bis zur unabhängigen Entscheidung außerhalb nutzerseitiger Inhalte. | DOC-BMA-SN044, S. 13–15, Hilfe-, Alarm- und Geofencing-Abschnitte | Handbuch, Geräte-Hilfe und Sprachfassungen widersprechen sich; die Berechtigungsregel ist nur aus Beispielen ableitbar. | DSC-054/056; Rückfragen 1/10, BLK-005/006 | Firmwarebeleg, Vier-Augen-Review und freigegebenen Wortlaut je Generation dokumentieren.                      |

## Reviewprotokoll

Für jede ID ist eine eigene Entscheidung erforderlich. „Bestätigt“ darf nur verwendet
werden, wenn Geltungsbereich und technischer Beleg eingetragen sind.

| ID              | Entscheidung: bestätigt / korrigiert / abgelehnt | Freigegebener Wortlaut oder technische Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------------------------------------ | ---------------------------------------------------- | -------------------------- | ------- | ---------------------- |
| P0-03-A1 bis A5 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |
| P0-03-B1 bis B6 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |
| P0-03-C1 bis C6 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |
| P0-03-D1 bis D4 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |
| P0-03-E1 bis E5 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |
| P0-03-F1 bis F3 | _je ID offen_                                    | _offen_                                              | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Jede der 29 Einzelentscheidungen besitzt Geltungsbereich, Firmware-/Technikbeleg und
  verantwortliche Rolle.
- Meldungsfelder, Sprache, Kürzungsregeln, Status- und Fehlerantworten sind verbindlich
  spezifiziert.
- Die 11,2-/12,5-V-Schwellen besitzen Messpunkt, Toleranz, Zeitbedingung, Hysterese und
  bestätigten Geltungsbereich.
- Notruf-, Diebstahl-, Einbruch-, Gas- und manueller Alarm besitzen eindeutige Auslöser,
  Zustellnachweis, Eskalation und Fehlerpfad.
- BLK-005/006 werden nicht aus PDF-Beispielen aufgelöst; Befehle und Berechtigungsregeln
  benötigen einen unabhängigen Firmwarebeleg.
- Geofencing besitzt je Revision bestätigte Voraussetzungen, Prioritäten, Radius und
  einen barrierefrei kontrollierbaren Zustand.
- Erst danach dürfen Segmentstatus über die abgesicherten Supabase-Transitionen geändert
  werden. Dieses Dossier selbst erteilt keine Freigabe.

Empfohlene Reihenfolge: D1/D4/E3 (Befehle und Berechtigung), B5/B6 (Spannung),
B1/E1–E4 (Geofencing), C1–C6 (Alarmwege), A1–A5 und F1–F3 (Meldungsschema und
barrierefreie Rückmeldung).
