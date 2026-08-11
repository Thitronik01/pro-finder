# P0-04: Montage, Betriebsarten und GPS-Diagnose bis SN-044

Stand: 2026-08-11 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Dieses Paket bündelt die acht noch nicht zugeordneten P0-Segmente aus
DOC-BMA-SN044, PDF-Seiten 3–7. Die Seiten wurden am 2026-08-11 erneut bei 300 dpi
gerendert und vollständig gegen Seitenbild, Region und Kontext geprüft. Elektrische
Anschlusswerte aus Seite 6 bleiben im Paket P0-01; sie erscheinen hier nur als
gekennzeichnete Gegenbelege.

Das Paket gilt ausschließlich für den Seriennummernbereich bis SN-044. SMS-Befehle und
das widersprüchliche Intervall der Betriebsart D bleiben vollständig ausgelassen.

## Zugeordnete Segmente

| Segment                                           | Thema                                   | Quelle              |
| ------------------------------------------------- | --------------------------------------- | ------------------- |
| `BMA044-DE-P003-S03-MONTAGEORT`                   | Montageort des Hauptgeräts              | DOC-BMA-SN044, S. 3 |
| `BMA044-DE-P004-S02-BETRIEBSART-FUNKTIONSGRUPPEN` | Funktionsgruppen der Betriebsarten      | DOC-BMA-SN044, S. 4 |
| `BMA044-DE-P005-S01-ANRUF-UND-WIPRO`              | Anruf, Hilfeereignis und WiPro-Ausnahme | DOC-BMA-SN044, S. 5 |
| `BMA044-DE-P005-S02-BETRIEBSARTENTABELLE`         | Betriebsarten 0 bis F                   | DOC-BMA-SN044, S. 5 |
| `BMA044-DE-P005-S03-BETRIEBSART-D-AUSLASSUNG`     | gesperrtes Intervall der Betriebsart D  | DOC-BMA-SN044, S. 5 |
| `BMA044-DE-P007-S01-GPS-DIAGNOSE`                 | GPS-Diagnose in Betriebsart F           | DOC-BMA-SN044, S. 7 |
| `BMA044-DE-P007-S02-GPS-REFLEXIONEN`              | Fehlalarme durch GPS-Reflexionen        | DOC-BMA-SN044, S. 7 |
| `BMA044-DE-P007-S03-SMS-BEFEHL-AUSLASSUNG`        | gesperrte Geofencing-Zeichenfolge       | DOC-BMA-SN044, S. 7 |

## A. Montageort

| ID       | Zu prüfende Aussage                                                                                                      | Genaue Quelle bis SN-044                                       | Gegenquelle oder offene Lücke                                                                                        | DSC / Rückfrage          | Benötigte THITRONIK-Entscheidung                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| P0-04-A1 | Das Hauptgerät wird im Fahrzeuginneren, gegen unbefugten Zugriff geschützt und dennoch servicezugänglich montiert.       | DOC-BMA-SN044, S. 3, Abschnitt 1.2                             | Kein konkreter Abstand zu Wärme, Feuchte, Metallflächen, Funkquellen oder Airbags dokumentiert.                      | keine eigene DSC         | Verbindliche Ausschlusszonen, Befestigung, Servicezugang und Umweltbedingungen festlegen.               |
| P0-04-A2 | Montage im Motorraum ist ausgeschlossen; die Geräteoberseite zeigt nach oben und der GPS-Empfänger benötigt freie Sicht. | DOC-BMA-SN044, S. 3, zweiter Absatz von 1.2                    | „Freie Sicht“ wird nur für Kunststoff, Glas und Holz erläutert; Metall, Beschichtungen und beheizte Scheiben fehlen. | keine eigene DSC         | Zulässige Materialien, Orientierung, Abschattung und Mindestempfang für die interne Antenne bestätigen. |
| P0-04-A3 | Eine externe GPS-Antenne bleibt eine Option, wenn der Geräteort keinen Empfang erlaubt.                                  | DOC-BMA-SN044, S. 3, Schlussabsatz; S. 6–7, Abschnitte 1.6/1.7 | Deutsch, Französisch und Schwedisch nennen 2 m als feste Kabellänge, Englisch formuliert eine Obergrenze.            | DSC-073/079; Rückfrage 6 | Lieferlänge, maximal zulässige Gesamtlänge, Verlängerbarkeit und Verlegeanforderungen bestätigen.       |

## B. Betriebsartenschalter und Funktionsgruppen

| ID       | Zu prüfende Aussage                                                                                                                     | Genaue Quelle bis SN-044                                                                | Gegenquelle oder offene Lücke                                                                                                                 | DSC / Rückfrage                | Benötigte THITRONIK-Entscheidung                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| P0-04-B1 | Der Betriebsartenschalter bestimmt Anrufwirkung, automatische Berichte, enthaltene Spannungen und Pin-3-Funktion.                       | DOC-BMA-SN044, S. 4–5, Abschnitt 1.4 und Tabelle                                        | Die Quelle beschreibt keinen sicheren Wechselzeitpunkt, keine Neustartpflicht und keine Rückmeldung der aktiven Stellung.                     | DSC-063                        | Wechselablauf, Stromzustand, Wirksamkeitszeitpunkt und kontrollierbare Bestätigung der Stellung festlegen.    |
| P0-04-B2 | Ein Bericht per Anruf wird nur für berechtigte Nummern beschrieben.                                                                     | DOC-BMA-SN044, S. 4, erster Funktionsblock                                              | Die Berechtigungskennzeichnung ist nirgends ausdrücklich erklärt.                                                                             | DSC-056; Rückfrage 10, BLK-006 | Autorisierung, Absenderprüfung, Ablehnungsantwort und Rate-Limits bestätigen.                                 |
| P0-04-B3 | Je nach Betriebsart kann ein Anruf die WiPro umschalten und danach einen Statusbericht auslösen.                                        | DOC-BMA-SN044, S. 5, erster Funktionsblock; S. 14, Abschnitt 2.3                        | „Nächster Zustand“ und Verhalten bei Wiederholung oder unbekanntem Ausgangszustand sind nicht definiert.                                      | DSC-056/064                    | Zustandsautomat, Idempotenz, Timeout, Kostenannahme und Erfolgskriterium spezifizieren.                       |
| P0-04-B4 | In einer vorgesehenen Betriebsart kann Spannung an Pin 3 eine Hilfe-/Notrufmeldung auslösen.                                            | DOC-BMA-SN044, S. 5, zweiter Funktionsblock und Tabellenzeile A; S. 13, Notrufabschnitt | S. 5 spricht von beliebiger Spannung, ohne Schwelle, Dauer oder Entprellung.                                                                  | DSC-063                        | Elektrische Schwelle, Mindestdauer, zulässige Quelle, Ereignisname und Fehlerverhalten bestätigen.            |
| P0-04-B5 | Die Betriebsarten 7 bis D werden zunächst als Betrieb ohne WiPro beschrieben; ab `SN 0686-010` soll eine WiPro-Verbindung möglich sein. | DOC-BMA-SN044, S. 5, Informationsabsatz                                                 | Das Dokument erklärt weder Nummernlogik noch Hardware-/Firmwareunterschied; die allgemeine Pilotgrenze SN-044 ist eine andere Klassifikation. | DSC-023; Rückfrage 4           | Bedeutung, Vergleichsregel und Geltungsbereich von `SN 0686-010` sowie kompatible WiPro-Varianten bestätigen. |

## C. Betriebsartentabelle

| ID       | Zu prüfende Aussage                                                                                                                 | Genaue Quelle bis SN-044                                             | Gegenquelle oder offene Lücke                                                                  | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                                         |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------- |
| P0-04-C1 | Die Tabelle führt die Stellungen 0 bis F mit Anrufwirkung, Berichtintervall, Spannungsfeldern und Pin-3-Funktion.                   | DOC-BMA-SN044, S. 5, vollständige Tabelle                            | Verbundene Zellen C/D und E/F sind ohne semantische Erklärung nicht eindeutig linearisierbar.  | DSC-063               | Maschinenlesbare Solltabelle mit explizitem Wert für jede Zelle liefern.                                 |
| P0-04-C2 | Die Stellungen 4 bis 7 senden automatische Berichte in den sichtbaren Intervallen 15 Minuten, 60 Minuten, 6 Stunden und 24 Stunden. | DOC-BMA-SN044, S. 5, Zeilen 4–7                                      | Keine Toleranz, Startbedingung, Zeitzone, Netzfehler- oder Nachholregel dokumentiert.          | keine eigene DSC      | Zeitbasis, Toleranz, Start/Reset und Verhalten bei Netz- oder Spannungsunterbrechung bestätigen.         |
| P0-04-C3 | Stellung 8 und B verwenden invertierte Pin-3-Schwellen oberhalb 6 V beziehungsweise unterhalb 5 V.                                  | DOC-BMA-SN044, S. 5, Zeilen 8/B                                      | Bereich 5–6 V, Hysterese, Mindestdauer und Messpunkt bleiben undefiniert.                      | DSC-062               | Pegellogik, Toleranz, Hysterese, undefinierten Bereich und Vorrang anderer Geofencing-Wege festlegen.    |
| P0-04-C4 | Stellung C nennt 90 Sekunden bei anliegender Spannung und eingebuchtem Pro-finder.                                                  | DOC-BMA-SN044, S. 5, Zeile C                                         | Unklar sind Spannungseingang, Schwelle, Startzeitpunkt, Dauer und Verhalten bei Netzausfall.   | keine eigene DSC      | Vollständige Auslöse- und Wiederholungslogik für Stellung C spezifizieren.                               |
| P0-04-C5 | Für Stellung D wird kein Intervall veröffentlicht.                                                                                  | DOC-BMA-SN044, S. 5, Zeile D                                         | Deutsch und Französisch nennen 8 Minuten, Englisch 8 Sekunden; Schwedisch bestätigt 8 Minuten. | DSC-066; Rückfrage 16 | Firmwarebezogenen Sollwert, Einheit, Toleranz und Übersetzungsfehler verbindlich entscheiden.            |
| P0-04-C6 | Stellung E löscht Zielrufnummern, Stellung F startet die GPS-Diagnose.                                                              | DOC-BMA-SN044, S. 5, Zeilen E/F; S. 11 und S. 7 als Detailabschnitte | Tabelle nennt keine Schutzbedingung, Bestätigung oder Rückkehrstellung.                        | DSC-059/063           | Sicheren Eintritt, Abbruch, Erfolgskriterium und Wiederherstellung der vorherigen Betriebsart festlegen. |

## D. GPS-Diagnose und Reflexionen

| ID       | Zu prüfende Aussage                                                                                        | Genaue Quelle bis SN-044                     | Gegenquelle oder offene Lücke                                                                                 | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                                             |
| -------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| P0-04-D1 | Stellung F zeigt drei GPS-Zustände: rot leuchtend, gelb blinkend und grün leuchtend.                       | DOC-BMA-SN044, S. 7, Abschnitt 1.7           | Farbe ist innerhalb gleicher Leuchtart das einzige Merkmal; Blinkfrequenz und alternative Rückmeldung fehlen. | DSC-059/063; Rückfrage 12         | Farbunabhängige Rückmeldung, Blinkmuster, Timeout und maschinenlesbaren Status bereitstellen.                |
| P0-04-D2 | Rot bedeutet laut Quelle nicht angeschlossen; Anschlussprüfung erfolgt nur bei getrennter Versorgung.      | DOC-BMA-SN044, S. 7, erster Diagnosezustand  | Derselbe Rotzustand nach Rückkehr in die Ausgangsstellung soll dagegen eine fehlende SIM bedeuten.            | DSC-059                           | Kontextabhängige Zustände, sichere Trennung der Versorgung und Diagnosepfad bestätigen.                      |
| P0-04-D3 | Gelbes Blinken länger als fünf Minuten weist laut Quelle auf ungeeigneten Montageort oder Überdachung hin. | DOC-BMA-SN044, S. 7, zweiter Diagnosezustand | Kein Toleranzfenster, Satellitenminimum oder Verhalten bei schlechtem Wetter dokumentiert.                    | DSC-063                           | Timeout, Empfangskriterium, zulässige Umgebungsbedingungen und nächsten sicheren Schritt festlegen.          |
| P0-04-D4 | Grün bedeutet gültige GPS-Position; danach soll der Schalter in die vorherige Stellung zurück.             | DOC-BMA-SN044, S. 7, dritter Diagnosezustand | „Ausgangsposition“ wird nicht gespeichert oder angezeigt; eine falsche Rückkehr kann Funktionen ändern.       | DSC-059                           | Sichere Dokumentation/Wiederherstellung der vorherigen Stellung und unabhängiges Erfolgskriterium festlegen. |
| P0-04-D5 | Reflexionen in Hallen und unter Dächern können Diebstahlfehlalarme auslösen.                               | DOC-BMA-SN044, S. 7, Schlussabsatz           | Empfohlene Deaktivierung kollidiert mit der automatischen Aktivierung bei geschärfter WiPro auf S. 15.        | DSC-062/064; Rückfrage 9          | Vorrang, sichere Hallenprozedur, Wiederaktivierung und kontrollierbaren Zustand bestimmen.                   |
| P0-04-D6 | Die konkrete SMS-Zeichenfolge zur Deaktivierung bleibt gesperrt.                                           | DOC-BMA-SN044, S. 7, letzte Zeile            | Handbuch, Geräte-Hilfe und Sprachfassungen nennen abweichende Formen.                                         | DSC-054/067; Rückfrage 1, BLK-005 | Firmwarebeleg für den gültigen Bedienweg je Sprache/Revision und Erfolgskontrolle liefern.                   |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-04-A1 bis A3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-04-B1 bis B5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-04-C1 bis C6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-04-D1 bis D6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Jede der 20 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Betriebsartentabelle und GPS-Zustände liegen vollständig maschinenlesbar und
  farbunabhängig vor.
- Seriennummernausnahme, Pin-3-Pegel, Intervalle und sichere Schalterwechsel sind geklärt.
- BLK-005/006 sowie die Auslassung des Intervalls D bleiben bis zum unabhängigen Review
  wirksam.
- Erst danach dürfen Segmentstatus über die abgesicherten Supabase-Transitionen geändert
  werden. Dieses Dossier selbst erteilt keine Freigabe.
