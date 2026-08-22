# P0-08: SIM, Aktivierung und anrufgesteuerte Funktionen ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

Wie P0-06 und P0-07 bündelt dieses Paket quellennahe Erstextraktionen vom 2026-08-22.
Ihre PDF-Seiten stehen auf `extracted`, nicht auf `validated`; die unabhängige zweite
Durchsicht steht aus. Es existiert, damit kein sicherheitskritisches Segment ohne
Entscheidungszuordnung bleibt, und wechselt erst nach dieser Gegenprüfung auf
„bereit für Fachreview".

## Zweck und Geltungsbereich

Das Paket bündelt die zehn P0-Segmente zu SIM-Karte, Inbetriebnahme, Statusbericht und
den anrufgesteuerten Funktionen aus DOC-IBA-SN045, deutschen PDF-Seiten 9, 13, 14, 17,
21 und 22.
Montage und elektrischer Anschluss stehen in P0-06; Betriebsarten, Geofencing und
GPS-Diagnose in P0-07.

Der sicherheitskritische Kern liegt hier nicht in einem Zahlenwert, sondern in einer
**Zugriffsfrage**: Ein Anruf auf die Gerätenummer löst einen Statusbericht aus oder
schaltet die Alarmanlage scharf beziehungsweise unscharf – aber woran das Gerät eine
berechtigte Nummer erkennt, sagt die Quelle im gesamten Kapitel 1 nicht.

Werte der Generation **bis SN-044** erscheinen ausschließlich als gekennzeichnete
Gegenquelle. SMS-Zeichenfolgen bleiben wegen BLK-005 ausgelassen, die Berechtigungsregel
wegen BLK-006.

## Zugeordnete Segmente

| Segment                                         | Thema                                      | Quelle               |
| ----------------------------------------------- | ------------------------------------------ | -------------------- |
| `IBA045-DE-P009-S02-ANRUF-LOEST-STATUSBERICHT`  | Anruf als Auslöser, Berechtigungsvorbehalt | DOC-IBA-SN045, S. 9  |
| `IBA045-DE-P009-S06-ANRUF-SCHALTET-WIPRO`       | WiPro III per Anruf scharf/unscharf        | DOC-IBA-SN045, S. 9  |
| `IBA045-DE-P013-S01-SIM-FORMAT`                 | freigeschaltete Nano-SIM                   | DOC-IBA-SN045, S. 13 |
| `IBA045-DE-P013-S03-SIM-VORBEREITEN`            | vier Schritte am Mobilgerät                | DOC-IBA-SN045, S. 13 |
| `IBA045-DE-P013-S04-SIM-EINSETZEN`              | Halterung auf der Platine, ESD-Symbol      | DOC-IBA-SN045, S. 13 |
| `IBA045-DE-P014-S02-AKTIVIEREN`                 | Inbetriebnahme, LED-Folge, Status-SMS      | DOC-IBA-SN045, S. 14 |
| `IBA045-DE-P017-S02-SIM-VORAUSSETZUNG-LOESCHEN` | SIM-Karte für den Löschvorgang             | DOC-IBA-SN045, S. 17 |
| `IBA045-DE-P021-S01-WIPRO-PER-ANRUF`            | WiPro III per Anruf, Betriebsarten 2 und 3 | DOC-IBA-SN045, S. 21 |
| `IBA045-DE-P022-S01-STATUSBERICHT-ANFORDERN`    | zwei Wege, Ausnahme in 2 und 3             | DOC-IBA-SN045, S. 22 |
| `IBA045-DE-P022-S02-GPS-STATUS-IM-BERICHT`      | GPS-Status, letzte gültige Position        | DOC-IBA-SN045, S. 22 |

Als P1-Gegenbelege stehen daneben `IBA045-DE-P013-S02-SIM-AUSWAHL` (Prepaid-Aufladeweg)
und `IBA045-DE-P014-S03-NUMMER-SPEICHERN` (Adressbucheintrag).

## A. Zugriff und anrufgesteuerte Funktionen

| ID       | Zu prüfende Aussage                                                                       | Genaue Quelle ab SN-045                       | Gegenquelle oder offene Lücke                                                                                                                                       | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                               |
| -------- | ----------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| P0-08-A1 | Ein Anruf auf die Gerätenummer wird automatisch beendet und löst einen Statusbericht aus. | DOC-IBA-SN045, S. 9, Funktionsgruppe 1        | Kein Timeout, keine Fehlerantwort, keine Angabe zum Verhalten gegenüber unberechtigten Anrufern. Der Anruf ist damit ein Bedienweg ohne dokumentierte Rückmeldung.  | keine eigene DSC | Ablauf, Zeitgrenzen, Fehlerfall und Verhalten gegenüber unberechtigten Anrufern spezifizieren. |
| P0-08-A2 | Nur „berechtigte Nummern" erhalten den Statusbericht.                                     | DOC-IBA-SN045, S. 9, Funktionsgruppen 1 und 5 | Woran das Gerät eine berechtigte Nummer erkennt, sagt Kapitel 1 nicht; die Regel ist allein aus Beispielzeilen auf S. 17 erschließbar.                              | DSC-044, BLK-006 | Berechtigungsregel firmwareseitig bestätigen und einen veröffentlichbaren Wortlaut liefern.    |
| P0-08-A3 | Ein Anruf schaltet die WiPro III (safe.lock) von unscharf nach scharf und umgekehrt.      | DOC-IBA-SN045, S. 9, Funktionsgruppe 5        | Der Absatz nennt keine Schalterstellung; erst die Tabelle auf S. 10 ordnet das Verhalten den Stellungen 2 und 3 zu. Ein Umschalten ohne Zustandskenntnis ist blind. | DSC-052          | Zustandsrückmeldung vor dem Schalten festlegen und Fehlbedienungsrisiko bewerten.              |
| P0-08-A4 | Nach erfolgreichem Schaltvorgang sendet das Gerät einen Statusbericht an den Anrufer.     | DOC-IBA-SN045, S. 9, Funktionsgruppe 5        | Welches Feld den tatsächlichen Scharf-Zustand belegt, ist an dieser Stelle nicht dokumentiert; ein Teilerfolg ist nicht unterscheidbar.                             | DSC-045          | Erfolgskriterium, Statusfeld, Empfänger und Timeout festlegen.                                 |

## B. SIM-Karte

| ID       | Zu prüfende Aussage                                                                        | Genaue Quelle ab SN-045                           | Gegenquelle oder offene Lücke                                                                                                                                                | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                     |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------ |
| P0-08-B1 | Benötigt wird eine freigeschaltete SIM-Karte im Format Nano-SIM.                           | DOC-IBA-SN045, S. 13, Abschnitt 2.1, Abs. 1       | Bis SN-044 nennt die Quelle eine Micro-SIM – die unmittelbar nutzerrelevante Generationsabweichung. Innerhalb dieses Dokuments schwankt zusätzlich die Schreibweise.         | DSC-069, DSC-050 | Kartenformat je Generation und eine einheitliche Schreibweise verbindlich festlegen. |
| P0-08-B2 | Die PIN-Abfrage ist zu **deaktivieren**.                                                   | DOC-IBA-SN045, S. 13, Abschnitt 2.1, Schritt 1    | **Gegenteil der älteren Vorgabe:** Bis SN-044 verlangt die Quelle eine feste PIN **und** eine aktivierte Abfrage. Eine öffentliche Anleitung muss die Tragweite benennen.    | Rückfrage 15     | Bestätigen, welche Vorgabe je Generation gilt, und die Sicherheitsfolgen benennen.   |
| P0-08-B3 | Mailbox, Rufumleitungen und Komfortfunktionen sind zu deaktivieren, Roaming zu aktivieren. | DOC-IBA-SN045, S. 13, Abschnitt 2.1, Schritte 2–4 | Warum diese Dienste stören, erklärt die Quelle nicht. Ohne Begründung ist für Nutzende nicht erkennbar, welcher Schritt zwingend und welcher optional ist.                   | DSC-052          | Je Schritt benennen, welche Gerätefunktion ohne ihn ausfällt.                        |
| P0-08-B4 | Bei einem iPhone muss iMessages für die vier Schritte deaktiviert sein.                    | DOC-IBA-SN045, S. 13, roter Achtung-Kasten        | Die Quelle nennt keine Begründung und keinen Hinweis, ob iMessages danach wieder aktiviert werden darf.                                                                      | DSC-052          | Wirkung und Dauer der Anforderung klären.                                            |
| P0-08-B5 | Die Karte wird in eine Halterung auf der Platine eingelegt und verriegelt.                 | DOC-IBA-SN045, S. 13, Abschnitt 2.2               | Das Foto trägt ein gelbes ESD-Symbol **ohne Begleittext und ohne Signalwort**; eine Schutzmaßnahme nennt die Quelle nicht. Die Lage der Halterung ist nur im Bild erkennbar. | DSC-063 (analog) | Freigegebenen ESD-Warntext und eine Textalternative zur Platinenabbildung liefern.   |

## C. Inbetriebnahme

| ID       | Zu prüfende Aussage                                                          | Genaue Quelle ab SN-045             | Gegenquelle oder offene Lücke                                                                                                                                    | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                      |
| -------- | ---------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| P0-08-C1 | Nach dem Anschließen blinkt die Status-LED kurz rot und danach gelb-grün.    | DOC-IBA-SN045, S. 14, Abschnitt 2.4 | Dieselbe Anzeige heißt an anderer Stelle „blinkt gelb/grün" und in der Kurzanleitung „blinkt grün/gelb" – drei Schreibweisen für einen Zustand.                  | DSC-050               | Eine verbindliche Benennung je LED-Zustand festlegen.                                 |
| P0-08-C2 | Ohne App wird der Pro-finder über eine Programmier-SMS aktiviert.            | DOC-IBA-SN045, S. 14, Abschnitt 2.4 | Aufbau und Inhalt der Nachricht bleiben wegen BLK-005 und BLK-006 ausgelassen; sie stehen in einem Kapitel, das noch nicht extrahiert ist.                       | BLK-005/006           | Firmwarebestätigte Struktur der Programmier-SMS samt Fehlerantwort liefern.           |
| P0-08-C3 | Mit der App entfallen laut Quelle die Schritte der Kapitel 2.5 bis 2.8.      | DOC-IBA-SN045, S. 14, Abschnitt 2.4 | Trifft nicht zu: Kapitel 2.5 verlangt einen Adressbucheintrag am Telefon samt Ländervorwahl, den keine App übernimmt. Die Erreichbarkeit des Geräts hängt daran. | DSC-043, Rückfrage 13 | Klären, welche Schritte die App tatsächlich ersetzt, und den Satz korrigieren lassen. |
| P0-08-C4 | Nach dem Speichern blinkt die LED grün und das Gerät sendet eine Status-SMS. | DOC-IBA-SN045, S. 14, Abschnitt 2.4 | Was geschieht, wenn die Nachricht nicht ankommt oder nur teilweise verarbeitet wird, sagt die Quelle nicht. Ein Fehlerzustand ist nicht dokumentiert.            | DSC-045               | Fehlerfall, Wiederholweg und erkennbaren Endzustand der Inbetriebnahme festlegen.     |

## D. Der Anruf als doppelt belegter Bedienweg

| ID       | Zu prüfende Aussage                                                                                                                                           | Genaue Quelle ab SN-045             | Gegenquelle oder offene Lücke                                                                                                                                         | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------ |
| P0-08-D1 | **Derselbe Anruf tut je nach Schalterstellung Verschiedenes.** In den Betriebsarten 2 und 3 schaltet er die WiPro III, sonst löst er einen Statusbericht aus. | DOC-IBA-SN045, S. 21 und 22         | Wer in den Stellungen 2 oder 3 einen Statusbericht per Anruf erwartet, schärft oder entschärft stattdessen die Alarmanlage. Die Quelle stellt beides nicht gegenüber. | DSC-052          | Die Doppelbelegung des Anrufs bewerten und eine erkennbare Rückmeldung festlegen.    |
| P0-08-D2 | Das Gerät beendet den Anruf, bevor eine kostenpflichtige Verbindung zustande kommt.                                                                           | DOC-IBA-SN045, S. 21, Abschnitt 5.1 | Kein Timeout, keine Angabe zur Anzahl der Freizeichen, keine Aussage über Roaming oder ausländische Netze.                                                            | keine eigene DSC | Zeitverhalten und Kostenfreiheit je Netz bestätigen.                                 |
| P0-08-D3 | Abschnitt 5.1 heißt „per SMS", beschreibt aber ausschließlich einen Anruf.                                                                                    | DOC-IBA-SN045, S. 21, Überschrift   | Damit läuft auch der Verweis von S. 19 ins Leere, der für Blinker und Sirene auf diesen Abschnitt zeigt.                                                              | DSC-041          | Überschrift korrigieren lassen und den fehlenden SMS-Weg nachliefern oder streichen. |
| P0-08-D4 | Der Statusbericht enthält den GPS-Status und die zuletzt gültige Position.                                                                                    | DOC-IBA-SN045, S. 22, Abschnitt 5.3 | Ohne Altersangabe und ohne Genauigkeit; siehe P0-07-D5.                                                                                                               | DSC-045          | Kennzeichnung der Aktualität festlegen (gemeinsam mit P0-07-D5 entscheiden).         |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-08-A1 bis A4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-08-B1 bis B5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-08-C1 bis C4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-08-D1 bis D4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 9, 13, 14, 17, 21 und 22 stehen auf `validated`; alle zehn Segmente haben eine
  unabhängige Gegenprüfung. **Erst dann** wechselt dieses Paket auf
  „bereit für Fachreview".
- Jede der 17 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Die Berechtigungsregel (A2) ist entschieden; bis dahin nennt die HTML-Anleitung weder
  ein Berechtigungszeichen noch eine daraus abgeleitete Regel (BLK-006).
- Die gegenläufigen PIN-Vorgaben der beiden Generationen (B2) sind bestätigt und
  begründet; keine der beiden Angaben wird auf die andere Generation übertragen.
- Der ESD-Hinweis (B5) besitzt einen freigegebenen Warntext.
- Die Aussage zur App (C3) ist korrigiert oder als unzutreffend bestätigt.
- BLK-005 und BLK-006 bleiben aktiv. Dieses Dossier erteilt keine Freigabe.
