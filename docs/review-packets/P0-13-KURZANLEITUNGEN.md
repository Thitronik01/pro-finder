# P0-13: Kurzanleitungen gegen Handbücher (beide Generationen)

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Vierzehn sicherheitskritische Segmente aus den beiden Kurzanleitungen DOC-KA-SN044 und
DOC-KA-SN045, je zwei Seiten. Alle vier Seiten wurden am 2026-08-23 aus der Textebene
gelesen, an strittigen Stellen bei 500 dpi nachgerendert und gegen das Handbuch der
**jeweils eigenen Generation** gegengelesen.

Dieses Paket ist anders geschnitten als P0-01 bis P0-12: Es folgt nicht einem Thema, sondern
einem Befund. Die Kurzanleitung ist das Papier, das dem Gerät beiliegt – für viele
Nutzerinnen die einzige Anleitung, die sie je in der Hand halten. Bei fünf Fundstellen sagt
sie etwas anderes als das Handbuch derselben Generation und derselben Sprache. Solange
ungeklärt ist, welches Dokument gilt, kann keine Anleitung beide wiedergeben.

Beide Generationen sind in einem Paket, weil der Befund selbst generationsübergreifend ist.
Innerhalb der Entscheidungstabellen bleiben sie strikt getrennt; kein Wert wird übertragen.

## Zugeordnete Segmente

| Segment                                      | Thema                                    | Quelle              |
| -------------------------------------------- | ---------------------------------------- | ------------------- |
| `KA044-DE-P001-S01-MONTAGEORT`               | Montageort                               | KA bis SN-044, S. 1 |
| `KA044-DE-P001-S04-SIM-SCHRITTE-LUECKE`      | PIN-Vorgabe dieser Generation            | KA bis SN-044, S. 1 |
| `KA044-DE-P001-S05-BETRIEBSARTEN-AUSZUG`     | nur Betriebsarten 0–3                    | KA bis SN-044, S. 1 |
| `KA044-DE-P002-S01-STATUS-LED-NORMALBETRIEB` | Normalbetrieb der Status-LED             | KA bis SN-044, S. 2 |
| `KA044-DE-P002-S02-STATUSBERICHT-FELDER`     | Feldliste des Statusberichts             | KA bis SN-044, S. 2 |
| `KA044-DE-P002-S03-PROGRAMMIERUNG-APP`       | Erstinbetriebnahme über die App          | KA bis SN-044, S. 2 |
| `KA045-DE-P001-S01-STATUS-LED-NORMALBETRIEB` | Normalbetrieb der Status-LED             | KA ab SN-045, S. 1  |
| `KA045-DE-P001-S02-STATUSBERICHT-FELDER`     | Feldliste des Statusberichts             | KA ab SN-045, S. 1  |
| `KA045-DE-P001-S03-PROGRAMMIERUNG-APP`       | Erstinbetriebnahme über die App          | KA ab SN-045, S. 1  |
| `KA045-DE-P002-S01-MONTAGEORT`               | Montageort                               | KA ab SN-045, S. 2  |
| `KA045-DE-P002-S03-KARTENANFORDERUNGEN`      | Kartenanforderungen und Multi-SIM-Verbot | KA ab SN-045, S. 2  |
| `KA045-DE-P002-S05-SIM-SCHRITTE`             | Kartenkonfiguration                      | KA ab SN-045, S. 2  |
| `KA045-DE-P002-S06-ANSCHLUSSLEGENDE`         | Anschlusslegende                         | KA ab SN-045, S. 2  |
| `KA045-DE-P002-S07-BETRIEBSARTEN-AUSZUG`     | nur Betriebsarten 0–3                    | KA ab SN-045, S. 2  |

## A. Wo Kurzanleitung und Handbuch auseinanderlaufen

| ID       | Zu prüfende Aussage                                                            | Kurzanleitung                                                                                                                                       | Handbuch derselben Generation                                                                            | DSC / Rückfrage                   | Benötigte THITRONIK-Entscheidung                                                            |
| -------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------- |
| P0-13-A1 | Welche Karte empfohlen wird.                                                   | bis SN-044: Vertragskarte eines Anbieters eigener Wahl · ab SN-045: eine vorkonfigurierte Vertragskarte eines namentlich genannten Netzbetreibers   | beide Generationen: zwei namentlich genannte Anbieter                                                    | **DSC-093**, DSC-027; Rückfrage 5 | Verbindliche Empfehlung je Generation festlegen und alle vier Dokumente angleichen.         |
| P0-13-A2 | Ob eine Multi-SIM zulässig ist und welche Dienste die Karte unterstützen muss. | ab SN-045 deutsch: Multi-SIM ausgeschlossen, Kurznachricht, Telefonie und mobile Daten erforderlich, Restguthabenabfrage über 4G nicht möglich      | ab SN-045 deutsch: keine dieser Aussagen; nur die englische Fassung führt sie                            | **DSC-095**, DSC-086; Rückfrage 5 | Klären, warum das deutsche Handbuch schweigt, und die Angaben dort ergänzen.                |
| P0-13-A3 | Welche Felder ein Statusbericht enthält.                                       | beide Generationen wortgleich: Zustand der Alarmanlage, Zustand des Geofencings, Standortverweis, Geschwindigkeit, Ausgang A, Ausgang B, Temperatur | Position, Geschwindigkeit, Zustand der Ausgänge, **Spannungen der Messeingänge**, Temperatur             | **DSC-096**; Rückfrage 11         | Verbindliches Meldungsschema liefern; beide Listen können nicht zugleich vollständig sein.  |
| P0-13-A4 | Ob ein iPhone für die Kartenvorbereitung verwendet werden darf.                | bis SN-044: **kein iPhone** verwenden · ab SN-045: iMessage deaktivieren                                                                            | bis SN-044: iPhone und iMessage kommen im gesamten Handbuch nicht vor · ab SN-045: iMessage deaktivieren | **DSC-097**                       | Klären, ob das ältere Vollverbot eine technische Einschränkung war oder eine Vereinfachung. |
| P0-13-A5 | Wie das Gerät erstmals in Betrieb genommen wird.                               | beide Generationen: über die App, ohne zweiten Weg                                                                                                  | bis SN-044: ausschließlich über eine Programmiernachricht · ab SN-045: App **oder** Programmiernachricht | DSC-043; Rückfrage 13             | Verbindlichen Erstinbetriebnahmeweg je Generation benennen.                                 |

## B. Wo Kurzanleitung und Handbuch übereinstimmen

Für den Review ebenso wichtig: An diesen Stellen decken sich beide Dokumente, die Aussage
ist also doppelt belegt.

| ID       | Aussage                                                                           | Beleg                                                                           |
| -------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| P0-13-B1 | Montageort gesichert, zugänglich, im Fahrzeuginneren, nie im Motorraum.           | beide Generationen, Karte und Handbuch                                          |
| P0-13-B2 | Nach Installation und Programmierung blinkt die Status-LED im Normalbetrieb grün. | beide Generationen, Karte und Handbuch                                          |
| P0-13-B3 | Zuordnung A–D und Pin 1–8 der Anschlüsse.                                         | ab SN-045, Karte und Handbuch; einziger Unterschied ist die Benennung von Pin 8 |
| P0-13-B4 | PIN-Vorgabe je Generation: bis SN-044 aktivieren, ab SN-045 deaktivieren.         | jeweils Karte und Handbuch derselben Generation                                 |

## C. Was die Kurzanleitung gar nicht enthält

| ID       | Fehlende Angabe                                                                      | Folge                                                                                                                                   | Benötigte THITRONIK-Entscheidung                                                                          |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| P0-13-C1 | Zwölf der sechzehn Schalterstellungen. Die Karte zeigt nur 0 bis 3.                  | Wer nur die Karte hat, kennt weder die Intervall-Betriebsarten noch die Stellungen zum Löschen der Zielrufnummern und zur GPS-Diagnose. | Bestätigen, ob die Karte bewusst unvollständig ist und wie auf die fehlenden Stellungen hingewiesen wird. |
| P0-13-C2 | Der Weg zur Aktivierung ohne App.                                                    | Ohne Smartphone oder ohne App ist das Gerät nach der Karte nicht in Betrieb zu nehmen.                                                  | Bestätigen, ob ein appfreier Weg vorgesehen ist.                                                          |
| P0-13-C3 | Jede Angabe zu Ausgängen, Geofencing-Radius, Spannungsgrenzen und technischen Daten. | Die Karte allein genügt für keine sicherheitsrelevante Entscheidung.                                                                    | Bestätigen, dass die Karte ausdrücklich als Ergänzung und nicht als Ersatz gilt.                          |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-13-A1 bis A5 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-13-B1 bis B4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-13-C1 bis C3 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
