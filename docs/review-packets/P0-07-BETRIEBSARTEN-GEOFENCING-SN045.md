# P0-07: Betriebsarten, Geofencing und GPS-Diagnose ab SN-045

Stand: 2026-08-22 · Status: **in Vorbereitung – noch nicht zum Fachreview freigegeben**

## Warum dieses Paket noch nicht reviewbereit ist

Wie P0-06 und P0-08 bündelt dieses Paket quellennahe Erstextraktionen vom 2026-08-22.
Ihre PDF-Seiten stehen auf `extracted`, nicht auf `validated`; die unabhängige zweite
Durchsicht steht aus. Es existiert, damit kein sicherheitskritisches Segment ohne
Entscheidungszuordnung bleibt, und wechselt erst nach dieser Gegenprüfung auf
„bereit für Fachreview".

## Zweck und Geltungsbereich

Das Paket bündelt die fünfzehn P0-Segmente zu Betriebsarten, Geofencing, GPS-Diagnose und
Positionsbewertung aus DOC-IBA-SN045, deutschen PDF-Seiten 9, 10, 12, 21 und 24. Montage und elektrischer Anschluss
stehen in P0-06; SIM, Aktivierung und anrufgesteuerte Funktionen in P0-08.

Es ist das Paket mit dem **höchsten Anteil an Werten, die eine Fehlfunktion unbemerkt
lassen**: Ein falsch gewählter Schalterwert, eine nicht erkannte Farbe oder ein
abgelehnter Befehl erzeugen keine Fehlermeldung, sondern nur ein Ausbleiben der
erwarteten Meldung.

Werte der Generation **bis SN-044** erscheinen ausschließlich als gekennzeichnete
Gegenquelle. SMS-Zeichenfolgen bleiben wegen BLK-005 vollständig ausgelassen.

## Zugeordnete Segmente

| Segment                                              | Thema                                  | Quelle               |
| ---------------------------------------------------- | -------------------------------------- | -------------------- |
| `IBA045-DE-P009-S05-GEOFENCING-PIN3`                 | Geofencing über Pin 3                  | DOC-IBA-SN045, S. 9  |
| `IBA045-DE-P009-S07-MANUELLER-ALARM-PIN3`            | Panikalarm über Pin 3 in Betriebsart A | DOC-IBA-SN045, S. 9  |
| `IBA045-DE-P010-S01-BETRIEBSARTENTABELLE`            | Stellungen 0 bis F                     | DOC-IBA-SN045, S. 10 |
| `IBA045-DE-P010-S02-GEOFENCING-SCHALTSCHWELLEN`      | gegenläufige Schwellen in 8 und B      | DOC-IBA-SN045, S. 10 |
| `IBA045-DE-P010-S03-GPS-SUCHMODI`                    | Stellungen C und D, 90 s und 8 min     | DOC-IBA-SN045, S. 10 |
| `IBA045-DE-P012-S03-GPS-DIAGNOSE`                    | LED-Zustände in Stellung F             | DOC-IBA-SN045, S. 12 |
| `IBA045-DE-P012-S04-ROT-NACH-ZURUECKSCHALTEN`        | Doppelbedeutung der roten Anzeige      | DOC-IBA-SN045, S. 12 |
| `IBA045-DE-P012-S05-GPS-REFLEXIONEN`                 | Fehlalarm durch Signalreflexionen      | DOC-IBA-SN045, S. 12 |
| `IBA045-DE-P012-S06-DEAKTIVIERUNGSBEFEHL-AUSLASSUNG` | gesperrte Abschaltzeichenfolge         | DOC-IBA-SN045, S. 12 |
| `IBA045-DE-P021-S03-GEOFENCING-DEFINITION`           | virtueller Zaun, 900 Meter             | DOC-IBA-SN045, S. 21 |
| `IBA045-DE-P021-S04-GEOFENCING-STEUERWEGE`           | Pin 3 in 8 und B, sonst SMS            | DOC-IBA-SN045, S. 21 |
| `IBA045-DE-P021-S05-GEOFENCING-WIPRO-KOPPLUNG`       | automatische Kopplung an WiPro III     | DOC-IBA-SN045, S. 21 |
| `IBA045-DE-P021-S06-GEOFENCING-BEFEHLE-AUSLASSUNG`   | Geofencing-Befehle gesperrt            | DOC-IBA-SN045, S. 21 |
| `IBA045-DE-P024-S04-KEIN-GPS-EMPFANG`                | zehn Minuten, dann letzte Position     | DOC-IBA-SN045, S. 24 |
| `IBA045-DE-P024-S05-UTC-UND-ALARMPOSITION`           | UTC gehört zur Position                | DOC-IBA-SN045, S. 24 |

Als P1-Gegenbeleg steht daneben `IBA045-DE-P009-S04-STATUSBERICHT-SPANNUNGEN` (U1 bis U5).

## A. Pin 3: Doppelbelegung und Schaltschwellen

| ID       | Zu prüfende Aussage                                                                           | Genaue Quelle ab SN-045                                | Gegenquelle oder offene Lücke                                                                                                                                    | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                                             |
| -------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| P0-07-A1 | In Stellung 8 schaltet über 6 V an Pin 3 das Geofencing **ein**, unter 5 V **aus**.           | DOC-IBA-SN045, S. 10, Tabelle, Zeile 8                 | Bei 600 dpi gesichert und in der englischen Tabelle auf S. 34 identisch. Was zwischen 5 V und 6 V geschieht, sagt keine Fassung.                                 | DSC-052          | Schaltschwelle, Hysterese, Verhalten im Zwischenbereich und Entprellzeit spezifizieren.                      |
| P0-07-A2 | In Stellung B ist dieselbe Zuordnung **umgekehrt**: über 6 V aus, unter 5 V ein.              | DOC-IBA-SN045, S. 10, Tabelle, Zeile B                 | Ebenfalls bei 600 dpi gesichert und englisch bestätigt. Wofür welche der beiden Stellungen gedacht ist, erklärt die Quelle an keiner Stelle.                     | DSC-052          | Anwendungsfall je Stellung benennen; ohne diese Angabe ist eine Fehlwahl nicht vermeidbar.                   |
| P0-07-A3 | Eine falsch gewählte Stellung kehrt die Geofencing-Wirkung um, ohne dass etwas gemeldet wird. | Sicherheitsfolge aus A1 und A2                         | Die Quelle nennt keine Rückmeldung, an der sich der tatsächliche Geofencing-Zustand ablesen ließe.                                                               | DSC-042, BLK-007 | Verbindliche Zustandsrückmeldung festlegen (Statusfeld, LED oder SMS-Antwort).                               |
| P0-07-A4 | Geofencing lässt sich über Pin 3 „kontrolliert" ein- und ausschalten, z. B. über die Zündung. | DOC-IBA-SN045, S. 9, Funktionsgruppe 4                 | Der Fließtext nennt die Schwellen nicht; sie stehen nur in der Tabelle der Folgeseite. Ob Geofencing ohne WiPro III meldet, bleibt widersprüchlich dokumentiert. | DSC-042, BLK-007 | Abhängigkeit von der WiPro III und Vorrang zwischen Pin 3 und automatischer Kopplung klären.                 |
| P0-07-A5 | Derselbe Pin 3 löst in Betriebsart A einen manuellen Alarm (Panikalarm) aus.                  | DOC-IBA-SN045, S. 9, Funktionsgruppe 6; S. 10, Zeile A | Pin 3 trägt damit zwei Funktionen, deren Verhältnis die Quelle nicht erklärt. Die Legende auf S. 8 nennt ihn zusätzlich „Messeingang (U3)" – eine dritte Rolle.  | DSC-050, DSC-042 | Rolle des Pin 3 je Schalterstellung eindeutig festlegen: Messeingang, Geofencing-Eingang oder Alarmauslöser. |
| P0-07-A6 | Der Panikalarm kann über einen Taster ausgelöst werden.                                       | DOC-IBA-SN045, S. 9, Funktionsgruppe 6, zweiter Satz   | Weder Spannung, Mindestdauer, Entprellung noch Wiederholsperre sind genannt; auch der Empfängerkreis der Alarmmeldung fehlt.                                     | DSC-052          | Schaltspezifikation für den Taster und Empfängerkreis der Alarmmeldung festlegen.                            |

## B. Betriebsartentabelle und Meldeintervalle

| ID       | Zu prüfende Aussage                                                                               | Genaue Quelle ab SN-045                   | Gegenquelle oder offene Lücke                                                                                                                                                     | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                          |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| P0-07-B1 | Die Stellungen 4 bis 7 senden automatisch alle 15 Minuten, 60 Minuten, 6 Stunden bzw. 24 Stunden. | DOC-IBA-SN045, S. 10, Tabelle, Zeilen 4–7 | Die englische Tabelle auf S. 34 nennt dieselben Werte. Ob das Intervall ab Einschalten oder ab der letzten Meldung zählt, sagt keine Fassung.                                     | keine eigene DSC      | Intervallbezug, Toleranz und Verhalten bei fehlendem Netz bestätigen.                     |
| P0-07-B2 | Stellung C sendet alle 90 Sekunden, Stellung D alle 8 Minuten, solange das Gerät GPS sucht.       | DOC-IBA-SN045, S. 10, Tabelle, Zeilen C/D | **Wichtig:** Die englische Fassung auf S. 34 nennt ebenfalls 8 minutes. Der Faktor-60-Widerspruch aus DSC-066 (8 Minuten gegen 8 seconds) betrifft nur die Generation bis SN-044. | DSC-066, Rückfrage 16 | Bestätigen, dass ab SN-045 8 Minuten gilt, und das Ende der Berichtsfolge definieren.     |
| P0-07-B3 | Welche Spannungen der Statusbericht enthält, hängt von der Schalterstellung ab.                   | DOC-IBA-SN045, S. 10, Spaltengruppe U1–U5 | Die Tabelle kreuzt je Zeile keine, die ersten beiden oder alle fünf Spannungen an, ohne die Auswahl zu begründen. U1 taucht in der Pinlegende auf S. 8 gar nicht auf.             | DSC-045               | Messpunkt und Bedeutung von U1 benennen und die Auswahl je Stellung begründen.            |
| P0-07-B4 | Stellung E löscht die Zielrufnummern, Stellung F startet die GPS-Diagnose.                        | DOC-IBA-SN045, S. 10, Tabelle, Zeilen E/F | Zeile F verweist auf Abschnitt 1.5.2; die GPS-Diagnose steht in 1.5.3. Der Fehlverweis steht in allen zehn Sprachfassungen.                                                       | DSC-040               | Verweis korrigieren lassen; klären, ob Stellung E ohne weitere Bestätigung sofort löscht. |
| P0-07-B5 | Die Tabelle ist die einzige Quelle für die Zuordnung Funktion zu Schalterstellung.                | DOC-IBA-SN045, S. 10 gegen S. 9           | Abschnitt 1.3 auf S. 9 zählt sechs Funktionsgruppen auf, **ohne** einer einzigen eine Stellung zuzuordnen. Wer nur den Fließtext liest, kann nichts einstellen.                   | DSC-052               | Entscheiden, ob die Anleitung Funktion und Stellung künftig gemeinsam führt.              |

## C. GPS-Diagnose und Fehlalarm

| ID       | Zu prüfende Aussage                                                                          | Genaue Quelle ab SN-045                        | Gegenquelle oder offene Lücke                                                                                                                                 | DSC / Rückfrage       | Benötigte THITRONIK-Entscheidung                                                                    |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------- |
| P0-07-C1 | In Stellung F zeigt die Status-LED rot, gelb blinkend oder grün den GPS-Zustand.             | DOC-IBA-SN045, S. 12, Abschnitt 1.5.3          | Alle drei Zustände unterscheiden sich **ausschließlich** über die Farbe. Ein farbunabhängiges Merkmal ist nicht dokumentiert – eine Barriere am Gerät selbst. | DSC-047, Rückfrage 12 | Farbunabhängiges Unterscheidungsmerkmal (Blinkmuster, Takt) bestätigen oder als fehlend anerkennen. |
| P0-07-C2 | Blinkt die LED nach fünf Minuten noch gelb, ist der Montageort für GPS ungeeignet.           | DOC-IBA-SN045, S. 12, Zustandstabelle          | Die fünf Minuten sind erfasst, aber fachlich unbestätigt; ihr Startpunkt ist nicht definiert.                                                                 | DSC-052               | Startpunkt und Toleranz der Fünf-Minuten-Frist bestätigen.                                          |
| P0-07-C3 | Nach dem Zurückschalten bedeutet dieselbe rote Anzeige, dass keine SIM-Karte eingesetzt ist. | DOC-IBA-SN045, S. 12, Absatz unter der Tabelle | Rot trägt damit je nach Schalterstellung zwei verschiedene Bedeutungen, die die Quelle nicht gegenüberstellt. Falsche Fehlersuche ist die direkte Folge.      | DSC-047               | Beide Bedeutungen verbindlich gegenüberstellen und einen freigegebenen Wortlaut liefern.            |
| P0-07-C4 | Reflexionen in Gebäuden können Diebstahlmeldungen auslösen, obwohl das Fahrzeug steht.       | DOC-IBA-SN045, S. 12, vorletzter Absatz        | Die Quelle nennt keine Häufigkeit, keinen Schwellwert und keine Möglichkeit, einen Fehlalarm nachträglich als solchen zu erkennen.                            | DSC-042               | Fehlalarmverhalten quantifizieren und ein Erkennungsmerkmal im Meldungstext bereitstellen.          |
| P0-07-C5 | Die Quelle empfiehlt, Geofencing beim Abstellen im Gebäude per SMS zu deaktivieren.          | DOC-IBA-SN045, S. 12, letzter Absatz           | Die Zeichenfolge bleibt wegen BLK-005 ausgelassen: Zehn Sprachfassungen ergeben zehn Befehlsprofile, und ein abgelehnter Befehl erzeugt keine Fehlermeldung.  | DSC-033, BLK-005      | Firmwarebestätigte Zeichenfolge je Revision und Sprache samt Fehlerantwort liefern.                 |
| P0-07-C6 | Ziel der Abschalt-SMS ist die „Nummer des GSM-Moduls".                                       | DOC-IBA-SN045, S. 12, letzter Absatz           | Dieselbe Rufnummer heißt in Abschnitt 5.2 „Nummer des Pro-finder". Zwei Benennungen für dasselbe SMS-Ziel.                                                    | DSC-050               | Eine verbindliche Benennung für das SMS-Ziel festlegen.                                             |

## D. Kapitel 5.2 und die Bewertung gespeicherter Positionen

| ID       | Zu prüfende Aussage                                                                        | Genaue Quelle ab SN-045              | Gegenquelle oder offene Lücke                                                                                                                              | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                  |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------- |
| P0-07-D1 | Der Zaun umfasst 900 Meter um den ursprünglichen Standort.                                 | DOC-IBA-SN045, S. 21, Abschnitt 5.2  | Worauf sich der ursprüngliche Standort bezieht – Ort der Aktivierung oder letzte gültige Position – und welche Toleranz gilt, sagt die Quelle nicht.       | DSC-061          | Bezugspunkt, Radius und Toleranz bestätigen; Werte je Generation getrennt halten. |
| P0-07-D2 | **Kopplung gegen Schaltweg:** Bei unscharfer WiPro III ist Geofencing automatisch inaktiv. | DOC-IBA-SN045, S. 21, roter Kasten   | Unmittelbar darüber steht, dass es sich in allen anderen Schalterstellungen per SMS einschalten lässt. Welche Aussage gewinnt, sagt die Quelle nicht.      | DSC-042, BLK-007 | Vorrang zwischen automatischer Kopplung und ausdrücklichem Schaltweg festlegen.   |
| P0-07-D3 | Vor der Nutzung an einem neuen Standort muss am alten deaktiviert werden.                  | DOC-IBA-SN045, S. 21, Abschnitt 5.2  | Was geschieht, wenn dieser Schritt entfällt – bleibt der alte Zaun bestehen, oder entsteht gar keiner? Die Quelle sagt es nicht.                           | DSC-052          | Verhalten bei ausgelassener Deaktivierung spezifizieren.                          |
| P0-07-D4 | Ohne GPS-Empfang wartet das Gerät bis zu zehn Minuten auf eine gültige Position.           | DOC-IBA-SN045, S. 24, Abschnitt 5.7  | Startpunkt, Toleranz und Abbruchbedingung der Frist fehlen. Derselbe Wert steht bis SN-044 (P0-05-B1).                                                     | DSC-052          | Timerstart, Toleranz und Status während der Wartezeit bestätigen.                 |
| P0-07-D5 | **Danach enthält der Bericht die zuletzt empfangene Position – ohne Kennzeichnung.**       | DOC-IBA-SN045, S. 22 und 24          | Kein Höchstalter, keine Genauigkeit, keine verpflichtende Markierung als nicht aktuell. Wer danach sucht, sucht möglicherweise am letzten Ort mit Empfang. | DSC-045          | Alter, Genauigkeit und eine maschinenlesbare Aktualitätskennzeichnung festlegen.  |
| P0-07-D6 | Die UTC-Zeit gehört zur Position, nicht zum Versandzeitpunkt.                              | DOC-IBA-SN045, S. 24, letzter Absatz | Steht erst am Kapitelende, nicht bei der Meldung. Was aktive Lichtmaschine bedeutet und was ohne dieses Signal geschieht, ist nicht dokumentiert.          | DSC-052          | Zeitquelle, Positionsbezug und Erkennung der Lichtmaschine spezifizieren.         |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-07-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-07-B1 bis B5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-07-C1 bis C6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-07-D1 bis D6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |

## Exit-Kriterien

- Die PDF-Seiten 9, 10, 12, 21 und 24 stehen auf `validated`; alle fünfzehn Segmente haben eine
  unabhängige Gegenprüfung. **Erst dann** wechselt dieses Paket auf
  „bereit für Fachreview".
- Jede der 23 Einzelentscheidungen besitzt Firmware-/Technikbeleg, Geltungsbereich und
  verantwortliche Rolle.
- Die gegenläufigen Schaltschwellen (A1, A2) sind samt Zwischenbereich und
  Zustandsrückmeldung spezifiziert; bis dahin nennt die HTML-Anleitung keine der beiden
  Stellungen als gesicherten Bedienweg.
- Die Doppel- beziehungsweise Dreifachrolle von Pin 3 (A5) ist aufgelöst.
- Für das Intervall der Stellung D (B2) liegt eine Bestätigung vor; bis dahin bleibt der
  Wert Entwurf, auch wenn Deutsch und Englisch übereinstimmen.
- Die farbabhängige GPS-Diagnose (C1) ist entweder um ein farbunabhängiges Merkmal
  ergänzt oder ausdrücklich als Gerätebarriere anerkannt.
- BLK-005 bleibt aktiv, bis die Befehlssprache unabhängig entschieden ist. Dieses Dossier
  erteilt keine Freigabe.
