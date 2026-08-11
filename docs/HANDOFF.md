# Handoff

Stand: 2026-08-11 (zwanzigste Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Geschützter englischer Vertical Slice für Aufgaben 01 bis 05

- Die englischen Aufgaben `determine-device-generation`, `choose-installation-location`,
  `wire-connections`, `prepare-and-insert-sim-card` und `install-app-and-activate` sind
  vollständig aus dem deutschen Master ab SN-045 übertragen. Alle fünf bleiben
  `review_status: entwurf`, sind keine Platzhalter und besitzen Dokument-/Seitenquellen.
- `npm run tokens:check` vergleicht jetzt fünf Aufgabenpaare. Produktnamen,
  Seriennummerngrenzen, URLs und technische Werte zeigen keine fehlenden oder zusätzlichen
  geschützten Token. Keine SMS-Befehlszeichenfolge, Beispielnummer, Koordinate,
  Berechtigungszeichenregel oder unbestätigte Supportangabe wurde ergänzt.
- EN-01 dokumentiert Scope, Reviewgrenzen, Terminologie, geschützte Token, Reviewerprofil,
  Checkliste, Entscheidungsprotokoll und Exit-Kriterien für den unabhängigen englischen
  Sprachreview. Das Paket enthält noch keine Reviewentscheidung.
- Beim Feldvergleich wurde ein sicherheitskritischer Extraktionsfehler im deutschen Master
  korrigiert: Die Sicherungswarnung hatte die Plus-Leitung unbelegt Pin 1 zugeordnet. Die
  Quelle fordert nur die Absicherung der Plus-Leitung; Pin 1 bleibt Masse (GND), Pin 8
  Dauerplus 12 V. `change_reason` und ein Regressionstest sichern die Korrektur.

### P0-Reviewabdeckung auf 41 von 41 geschlossen

- P0-03 bündelt elf Segmente aus DOC-BMA-SN044, Seiten 12–15, zu Meldungsfeldern,
  Statusbericht, Diebstahl- und Spannungswarnung, Notruf, WiPro-Alarm, Anrufberechtigung
  und Geofencing. 29 Einzelentscheidungen nennen Quelle, Gegenquelle oder Lücke,
  DSC-/Rückfrage und benötigte THITRONIK-Entscheidung.
- P0-04 bündelt acht Segmente aus Seiten 3–7 zu Montage, Betriebsarten 0 bis F,
  Betriebsart-D-Auslassung, GPS-Diagnose und Reflexionen in 20 Einzelentscheidungen.
  P0-05 bündelt die letzten fünf P0-Segmente aus Seiten 16–17 zu Ausgangssteuerung,
  letzter GPS-Position und UTC-Zeit in 13 Einzelentscheidungen.
- Die Quellseiten 3–7 und 12–17 wurden am 2026-08-11 erneut bei 300 beziehungsweise
  400 dpi gerendert und vollständig gelesen. Die Segmentinhalte blieben unverändert;
  keine erneute Prüfung wurde als technische Freigabe ausgegeben.
- BLK-005/006 bleiben intakt. Kein Dossier reproduziert eine SMS-Zeichenfolge,
  Zielrufnummer, Koordinate, Kartenadresse, Berechtigungszeichenregel oder einen
  ungeklärten Geofencing-Radius.
- P0-01 bis P0-05 decken jetzt exakt 6/11/11/8/5 Segmente ab. Zusammen sind alle 41
  sicherheitskritischen Segmente genau einem entscheidungsreifen, aber vollständig offenen
  Fachreviewdossier zugeordnet.

### Review-UI mit eigenem Paketfilter und Abdeckungsnachweis

- `/review` zeigt die Kennzahl `41 / 41` für P0-Segmente in Prüfpaketen. Ein eigener
  Select filtert P0-01 bis P0-05 unabhängig von der Freitextsuche; alle fünf Dossiers sind
  direkt verlinkt.
- Die fünf Filterwege liefern deterministisch 6, 11, 11, 8 und 5 Treffer. Ein Unit-Test
  lädt den kanonischen Segmentbestand und bricht ab, sobald ein P0-Segment kein Paket
  besitzt. Der E2E-Test prüft Kennzahl, Direktlinks und Paket-Select.
- Kein Reviewstatus wurde geändert. Die Oberfläche bleibt im Fixture-Modus read-only;
  echte Supabase-Arbeitsdaten und Statuswechsel bleiben offen.

### Zweites technisches Prüfpaket P0-02 reviewbereit

- `docs/review-packets/P0-02-SIM-ZIELRUFNUMMERN-SN044.md` bündelt elf P0-Segmente aus
  DOC-BMA-SN044, PDF-Seiten 8–11. Die 34 Einzelentscheidungen decken Micro-SIM,
  Tarifmerkmale, PIN-Vorgabe, Mailbox/Rufumleitung/Komfortfunktionen, Roaming,
  spannungsfreies Einsetzen, Rollen und Rechte, Programmiererfolg, App-Gegenweg,
  Fernüberschreiben, physischen Löschweg und alle neun Status-LED-Werte ab.
- DOC-BMA-SN044, Seiten 8–11, wurden vollständig anhand der vorhandenen 400-dpi-Renderings
  gegengeprüft. DOC-KA-SN044, Seiten 1–2, wurde neu bei 300 dpi gerendert und vollständig
  gelesen. Die Kurzanleitung bestätigt unter anderem Micro-SIM, PIN-Vorgaben,
  Tarifmerkmale, SIM-Vorbereitung, App-Programmierweg und LED-Tabelle; ihre abweichende
  Aussage zu dauerhaft grünem Licht bleibt unter DSC-059 offen.
- BLK-005 und BLK-006 bleiben intakt: Das Dossier reproduziert keine Programmier-SMS,
  Beispielrufnummer, Guthabencode, Smartphone-Kennzeichnung oder aus Beispielen
  abgeleitete Berechtigungsregel. Der konkrete PIN-Wert erscheint ausschließlich als
  interne Reviewfrage und bleibt außerhalb nutzerseitiger Segmente.
- `/review` ordnet die Paket-ID `P0-02` deterministisch elf Segmenten zu. Der direkte
  Filter liefert elf Treffer; P0-01 bleibt mit sechs Treffern unverändert. Damit liegen
  für 17 von 41 P0-Segmenten entscheidungsreife Dossiers vor.

### Erstes technisches Prüfpaket P0-01 reviewbereit

- `docs/review-packets/P0-01-ELEKTRIK-SN044.md` bündelt sechs sicherheitskritische
  Segmente aus DOC-BMA-SN044, PDF-Seiten 4, 6 und 18. Pinbelegung, Aderfarben,
  3-A-Sicherung, 12-V-Anschlusskontext, 9–30-V-Bereich, Messeingänge, gemeinsame Batterie,
  Ausgänge, GPS-Anschluss und alle neun Werte der technischen Tabelle besitzen jeweils
  eine genaue Quelle, Gegenquelle beziehungsweise offen benannte Quellenlücke,
  DSC-/Rückfragenbezug und eine konkrete THITRONIK-Entscheidung.
- Das Paket trennt Quellen derselben Generation von ausdrücklich markierten
  Vergleichsbelegen ab SN-045. Es enthält ein leeres Reviewprotokoll und Exit-Kriterien,
  ändert aber keinen Segmentstatus und simuliert keine technische oder rechtliche
  Freigabe.
- `/review` ordnet die Paket-ID `P0-01` den sechs Segmenten deterministisch zu, zeigt sie
  in einer eigenen Spalte und bietet einen direkten Filterlink. Die Suche nach `P0-01`
  liefert genau sechs P0-Treffer. Ein Unit-Test sichert die Zuordnung; der E2E-Test prüft
  den sichtbaren Filterweg.

### Eigene GPS-Kabellängen-Fehlklassifikation korrigiert

- DOC-BMA-SN044, PDF-Seiten 3, 21 und 38, wurden für das Paket erneut bei 400 dpi
  verglichen; Seite 55 war bereits hochauflösend geprüft. Deutsch, Französisch und
  Schwedisch nennen eine feste Kabellänge von 2 m, nur Englisch formuliert „must not
  exceed 2 m“.
- DSC-073 und DSC-079 hatten Deutsch zuvor fälschlich ebenfalls als Obergrenze gelesen und
  daraus französische beziehungsweise schwedische Übersetzungsfehler abgeleitet. Die
  Registereinträge, Seitenrecords, Rückfragenübersicht, Risikoliste und der
  `change_reason` des deutschen Segments dokumentieren jetzt transparent die Korrektur.
  Offen bleibt die echte technische Frage, ob 2 m die feste Lieferlänge oder eine maximal
  zulässige Gesamtlänge bezeichnet.

### Fünften Segmentbatch unabhängig validiert

- DOC-BMA-SN044, PDF-Seiten 17–18, wurde bei 400 dpi neu gerendert. Alle sieben Segmente
  wurden einzeln gegen Seitenbild, Region sowie `prev_context` und `next_context`
  gehalten. Beide Seiten stehen jetzt auf `validated` (75 Prozent); im deutschen
  Inhaltsbereich 3–18 steht keine Seite mehr auf `extracted`.
- Zehn-Minuten-Wartezeit, letzte empfangene Position, Alarm plus aktive Lichtmaschine,
  UTC-Zeitbezug, alle neun technischen Werte, Entsorgungswege, Fachhändler und
  Seriennummernfeld wurden im Bild bestätigt. Im Kartensegment wurde die Quellenregion
  um den tatsächlich verwendeten Absatz unterhalb der Desktop-Abbildung ergänzt.
- Die technische Tabelle verwendet nach der Gegenprüfung wieder die quellengetreuen
  Bezeichnungen `Sendefrequenz`, `Schnittstellen` und `NMEA (Eingang GPS)`. Kein Zahlenwert
  wurde verändert. Historische Richtlinie, Downloadadresse, Website, Rufnummer und
  Öffnungszeiten bleiben unbestätigte Quellenstände und werden nicht als aktuelle Wege
  veröffentlicht.

### Review-Warteschlange auf kanonische Segmente und P0–P2 umgestellt

- Der lokale Fixture-Modus von `/review` zeigt jetzt die 56 versionierten Segmente statt
  der 28 Aufgaben. Das behebt zugleich die falsche Kennzahl „Content-Segmente“.
- Prioritäten werden aus der Sicherheitsklasse abgeleitet und als Text angezeigt: 41 P0
  (sicherheitskritisch), 14 P1 (sicherheitsrelevant), ein P2 (normal). Die Liste sortiert
  P0 zuerst und besitzt einen Prioritätsfilter. Der Generationsfilterwert `both` wurde auf
  den tatsächlichen Schemawert `beide` korrigiert.
- Drei Unit-Tests sichern Zuordnung, Sortierung und verständliche Beschriftung. Die
  lokale Browserprüfung bestätigte 56 Gesamttreffer und 41 ausschließliche P0-Treffer.
  Bei 375 Pixeln entsteht kein Seitenüberlauf; nur die breite Tabelle scrollt innerhalb
  ihrer gekennzeichneten Region.

### Vierten Segmentbatch unabhängig validiert

- DOC-BMA-SN044, PDF-Seiten 15–16, wurde bei 400 dpi neu gerendert. Alle acht Segmente
  wurden einzeln gegen Seitenbild, angegebene Region sowie `prev_context` und
  `next_context` gehalten. Beide Seiten stehen jetzt auf `validated` (75 Prozent).
- Die Gegenprüfung bestätigte Schalterstellungen 8/B und Pin 3, die automatische
  Geofencing-Aktivierung bei geschärfter WiPro, die Betriebsartenausnahme 2/3 für den
  Anrufweg, letzte gültige GPS-Position, Ein-Sekunden-Impuls und 1–120 Minuten. Eine
  Formulierung wurde präzisiert: Bei gültigem GPS-Empfang zeigt der Statusbericht laut
  Quelle **nur** die Position. Prüfsumme und `change_reason` wurden aktualisiert.
- Radius, Koordinaten, Kartenadresse, SMS-Zeichenfolgen, Ausgangskennungsersetzung und
  Platzhalterregel bleiben geschützt ausgelassen. Die Validierung ändert keine technische
  Freigabe.

### Fünften Extraktionsbatch aus Seiten 17–18 angelegt

- Die letzten beiden inhaltlichen deutschen Seiten wurden bei 300 dpi neu gerendert und
  vollständig visuell gelesen. Sieben neue Segmente behandeln Kartennutzung,
  Zehn-Minuten-Wartezeit und letzte empfangene GPS-Position, Alarmbedingung mit aktiver
  Lichtmaschine und UTC-Zeit, technische Daten, Konformität, Entsorgung und Support.
- Alle neun technischen Werte sind eindeutig auf die Generation bis Seriennummer 044
  begrenzt. Der Konflikt bei Normalstrom, SIM-Format, Versorgungskontext und Richtlinie
  bleibt über DSC-069 sichtbar. Historische Richtlinie und Downloadweg werden nicht als
  aktuelle Konformitätsauskunft ausgegeben.
- Koordinaten, Beispieladresse und Bildschirmtexte der Kartenabbildungen sowie historische
  Rufnummer, Öffnungszeiten und Website wurden nicht übernommen. Der Fachhändler bleibt
  der belegte erste Supportweg; die Seriennummer soll nur verwendet werden, wenn sie am
  eigenen Gerät sicher erkannt wurde.
- Alle 56 Segmente bestehen Schema-, Pfad-, Quellen-, Aufgaben-, DSC-, Prüfsummen- und
  BLK-005-Prüfung. Beim Anlegen standen Seiten 17–18 korrekt auf `extracted` (50 Prozent);
  die oben dokumentierte unabhängige Gegenprüfung hat sie anschließend auf `validated`
  gesetzt. PDF-Seite 19 ist eine leere Notizseite ohne Bedieninhalt.

### Dritten Segmentbatch unabhängig validiert

- DOC-BMA-SN044, PDF-Seiten 12–14, wurde bei 400 dpi neu gerendert. Alle elf Segmente
  wurden einzeln gegen Seitenbild, angegebene Region sowie `prev_context` und
  `next_context` gehalten. Die drei Seiten stehen jetzt auf `validated` (75 Prozent).
- Drei belegte Präzisierungen wurden im jeweiligen `change_reason` dokumentiert: Die
  Smartphone-Positionsmeldung enthält laut Quelle immer das Restguthaben, der manuelle
  Alarm aktiviert die WiPro durch das Auslösen eines Panikalarms, und der Nummernzugriff
  ist als technische Möglichkeit („können“) statt als Erlaubnis („dürfen“) formuliert.
  Alle geänderten `body_md`-Felder erhielten neue SHA-256-Prüfsummen.
- 160-Zeichen-Grenze, Spannungsschwellen 11,2 V/12,5 V, zusätzlicher Anruf der
  Masternummer, Anrufsteuerung in den Betriebsarten 2 und 3 sowie alle Meldungsarten
  wurden im Bild bestätigt. Sie sind quellenvalidiert, aber nicht technisch freigegeben.
- Koordinaten, Kartenadressen, Beispielbeträge, Radiusangaben sowie Hilfe- und
  Alarmbefehle bleiben vollständig ausgelassen. BLK-005/006 und Rückfragen 14/17 wurden
  durch die Validierung nicht aufgeweicht.

### Vierten Extraktionsbatch aus Seiten 15–16 angelegt

- DOC-BMA-SN044, PDF-Seiten 15–16, wurde bei 300 dpi neu gerendert und vollständig visuell
  gelesen. Acht neue Segmente behandeln Geofencing-Definition und -Steuerwege,
  Statusbericht per Anruf, GPS-Ersatzposition, Smartphone-Kartenlink, zwei Ausgänge sowie
  dauerhafte, gepulste und zeitlich begrenzte Ausgangssteuerung.
- Die generationsspezifischen Schalterstellungen 8/B, Pin 3 und die automatische
  Geofencing-Aktivierung bei geschärfter WiPro bleiben erhalten. Der Radius wird nicht
  genannt. Statusberichte per Anruf sind ausdrücklich auf Betriebsarten außerhalb 2/3
  begrenzt; Ein-Sekunden-Impuls und Zeitbereich 1–120 Minuten sind quellennah erfasst.
- Keine SMS-Zeichenfolge, Koordinate, Kartenadresse, Ausgangskennungsersetzung oder
  Minutenplatzhalter-Regel steht in `title` oder `body_md`. Sämtliche Befehle sind wegen
  BLK-005/DSC-054 als Auslassungen dokumentiert.
- Nach der unabhängigen Gegenprüfung stehen Seiten 15–16 auf `validated` (75 Prozent).
  Alle acht Segmente bleiben bis zum technischen Review `entwurf`.

### Grundlage: Segmentformat v1 und erster Extraktionsbatch

- `content/segments/v1/` ist jetzt das kanonische Repo-Format für
  `public.content_segments`. `content/segments/README.md` beschreibt die Abbildung auf die
  Datenbank; IDs, Projektbezug, Autor-/Reviewer-IDs und Zeitstempel bleiben
  Datenbankverantwortung.
- `lib/content/segment-schema.mjs` definiert Schema v1 und die normalisierte
  SHA-256-Prüfsumme. `scripts/check-segments.mjs` prüft Pfade, eindeutige Schlüssel,
  Dokumentinventar, Seitenstatus, Aufgabenzuordnung, DSC-Verweise, Prüfsummen, BLK-005
  und die Segmentabdeckung jeder Seite ab Status `extracted`. Die Prüfung ist Teil von
  `npm run check`; drei neue Unit-Tests decken Schema, Schlüssel/Prüfsummen und die
  Freigabesperre sicherheitsrelevanter Segmente ab.
- DOC-BMA-SN044, deutsche PDF-Seiten 3–7, wurde dafür bei 300 dpi neu gerendert und
  vollständig visuell gelesen. 17 quellennahe deutsche Segmente bilden Lieferumfang,
  Montageort, Anschlüsse, Betriebsarten, GPS-Antennenmontage und GPS-Diagnose ab.
- Alle 17 Segmente nennen stabilen `segment_key`, Generation, Sprache, Aufgabenzuordnung,
  Dokument, PDF-Seite, Seitenregion, vorherigen/nächsten Kontext, Sicherheitsklasse,
  Prüfsumme, Änderungsgrund und gegebenenfalls DSC-Verweise. Sie bleiben auf
  `review_status: entwurf`.
- Betriebsart D besitzt ein eigenes `omission_note`-Segment ohne das gesperrte Intervall
  (DSC-066/Rückfrage 16). Die SMS-Anweisung auf Seite 7 besitzt ebenfalls nur einen
  Auslassungsvermerk ohne Befehlszeichenfolge (DSC-054/BLK-005).
- Nach der Erstextraktion standen die Seiten 3–7 zunächst korrekt auf `extracted`. Die in
  dieser Fortsetzung dokumentierte Gegenprüfung hat sie auf `validated` angehoben; der
  ursprüngliche Status wurde nicht rückwirkend als Validierung ausgegeben.

### Vorausgesetzter deutscher Aufgabensatz bis SN-044: 1 → 14 von 14

- `content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json` bis
  `14-support.json` sind vollständig gefüllt. Der vorhandene Platzhalter
  `07-status-led.json` wurde ersetzt; alle Dateien tragen `review_status: entwurf` und
  `placeholder: false`.
- Als strukturelle Vorbilder dienten
  `content/tasks/sn-045-plus/de/01-geraetegeneration-bestimmen.json` und
  `03-anschluesse.json`. Technische Aussagen der neueren Generation wurden nicht in den
  SN-044-Zweig übernommen.
- Vor der Extraktion wurden DOC-BMA-SN044, PDF-Seiten 1–19, bei 200 dpi sowie
  DOC-KA-SN044, Seiten 1–2, bei 250 dpi neu gerendert und vollständig visuell gelesen.
  Für die Generationsgrenze wurden zusätzlich DOC-IBA-SN045, Seiten 2, 6 und 25, bei
  250 dpi gerendert und visuell geprüft. Jede fertige Aufgabe wurde erneut gegen diese
  Renderings gehalten.
- Jede Handlungs-, Warn- und Fehleraussage nennt Dokument, PDF-Seite und Seitenregion.
  Alle vierzehn Dateien besitzen einen detaillierten `change_reason`; Unsicherheiten sind
  sichtbar statt still korrigiert.

### Generationsentscheidung transparent

- DOC-BMA-SN044 und DOC-KA-SN044 nennen selbst keinen Seriennummernbereich.
- Die Grenze „ab -045“ stammt ausschließlich von DOC-IBA-SN045, PDF-Seite 2. Die
  Produktabbildung auf Seite 6 zeigt zwar ein Beispiel im Format `SN 0699 - 045 +`, doch
  keine der gelesenen Quellen erklärt, welcher Nummernteil verglichen werden muss.
- Die Quellen nennen keinen genauen Fundort der Seriennummer am älteren Gerät. Die
  Schlussseiten zeigen nur leere Felder `SN` beziehungsweise `Serial number`.
- Aufgabe 01 enthält deshalb keine erfundene Leseregel und verweist bei Unsicherheit
  belegt auf Fachhändler beziehungsweise Support. DSC-023 bleibt offen.

### Sperren eingehalten

- **BLK-005:** In `goal`, `prerequisites`, `warnings`, `steps`, `expected_result`,
  `error_cases` und `tables_md` steht im gesamten SN-044-Satz keine
  SMS-Befehlszeichenfolge. Quellenzitate zu ausgelassenen Befehlen stehen nur in
  `change_reason` oder `figures[].source.note`.
- **BLK-006:** Aufgabe 06 beschreibt Rollen und den sicheren physischen Löschweg, aber
  keine aus Beispielen hergeleitete Autorisierungszeichenregel.
- Der Geofencing-Radius bleibt wegen Rückfrage 14 vollständig unveröffentlicht. Das
  automatische Intervall der Betriebsart D bleibt wegen Rückfrage 16 ungenannt.
  Lokalisierte Meldungs-Stichwörter werden wegen Rückfrage 17 nicht als sichere
  Geräteausgabe behandelt.
- Keine Koordinate, Kartenadresse, Beispielrufnummer oder Rufnummer aus einer Beispiel-SMS
  wurde übernommen. Der feste SIM-Code bleibt wegen Rückfrage 15 außerhalb sichtbarer
  Bedienfelder.

### Register und Rückfragen ergänzt

- **DSC-059 / Rückfrage 12:** DOC-BMA-SN044, Seite 11, ordnet grünes Dauerlicht nur dem
  SMS-Versand zu; DOC-KA-SN044, Seite 2, nennt Empfang oder Versand. Der Widerspruch
  bleibt in Aufgabe 07 sichtbar.
- **DSC-069 / Rückfrage 2:** Innerhalb derselben Generation nennt DOC-BMA-SN044 ca.
  21 mA Normalstrom und 1999/5/EG, DOC-KA-SN044 dagegen ca. 16–21 mA und 2014/53/EU.
  Zusätzlich steht im BMA-Anschlusskapitel eine geeignete 12-V-DC-Quelle, in der
  technischen Tabelle desselben Dokuments aber 9–30 V. Aufgabe 13 wählt keinen Wert
  still aus.
- Es wurde keine achtzehnte Rückfrage und keine neue DSC-Nummer eröffnet. Registerstand:
  höchster Eintrag DSC-085, siebzehn Rückfragen und sechs Blocker. BLK-002 ist durch den
  verbundenen GitHub-PR-/CI-Weg erledigt und aus der aktiven Blockerliste entfernt.

## Was weiterhin offen ist

- Alle 56 deutschen Segmente sind quellenvalidiert, bleiben aber `entwurf`. Keines besitzt
  eine technische oder rechtliche Freigabe.
- P0-01 bis P0-05 sind intern reviewbereit und decken alle 41 P0-Segmente ab, warten aber
  auf den realen THITRONIK-Fachreview. Keine der 121 vorbereiteten Einzelentscheidungen
  ist beantwortet und kein Segmentstatus wurde geändert.
- Der unabhängige englische Sprachreview von EN-01 ist organisatorisch offen. Keine der
  fünf Aufgaben darf vorher höhergestuft werden. Parallel kann der zweite geschützte
  Vertical Slice aus den deutschen Aufgaben 06 bis 10 ab SN-045 vorbereitet werden.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Von den 67 neu erfassten DOC-BMA-SN044-Seitenrecords besitzen sechzehn jetzt eine
  unabhängige Gegenprüfung; 51 bleiben auf
  `inspected`. Die SN-045-Seitenrecords besitzen weiterhin keine zweite Meinung.
- Alle technischen und sicherheitskritischen Inhalte stehen auf `entwurf`; es gibt keine
  technische Freigabe und keinen muttersprachlichen Review der nichtdeutschen Fassungen.
- Keine manuelle AT-, Zoom-, Reflow-, Forced-Colors- oder Reduced-Motion-Prüfung.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI;
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere SMS-Befehle,
  Radius, Betriebsart-D-Intervall, Gerätemeldungssprache, Spannungen und SIM-PIN-Vorgabe;
- kein muttersprachlicher Review für Französisch, Tschechisch, Schwedisch, Dänisch,
  Spanisch, Italienisch, Niederländisch und Polnisch.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 3–7 und 16–17 bei 300 dpi sowie 12–15 bei
  400 dpi neu gerendert und vollständig für P0-03 bis P0-05 gelesen. Seiten 8–11 und
  DOC-KA-SN044 1–2 bleiben durch P0-02 hochauflösend gegengeprüft. Seiten 3–18 samt allen
  56 deutschen Segmenten bleiben quellenvalidiert; Seite 19 enthält nur ein leeres
  Notizfeld.
- **Gesamtstand Quellen:** 307 von 323 Seiten `inspected`, 16 von 323 `validated`, keine
  Seite `extracted`; DOC-BMA-SN044 56 `inspected`/16 `validated`, DOC-IBA-SN045 247
  `inspected` und beide Kurzanleitungen je 2 `inspected`. Keine Seite wurde ohne
  Segmentdatei hochgestuft.
- **Segmente:** Schema v1 und 56 deutsche SN-044-Segmente; alle `entwurf`, alle mit
  aktueller Prüfsumme und durch Dokument, Seite, Region und Kontext belegt. Alle fünf
  Batches besitzen eine unabhängige Gegenprüfung; Korrekturen stehen im jeweiligen
  `change_reason`.
- **Aufgaben:** SN-001-044 Deutsch 14/14 und SN-045-plus Deutsch 14/14, insgesamt 28/28
  gefüllt, alle `entwurf`, kein Platzhalter. Englisch ab SN-045 besitzt zusätzlich fünf
  belegte Aufgabenentwürfe (01 bis 05), ebenfalls ohne Platzhalter.
- **Prüfpakete:** P0-01 bis P0-05 enthalten 6/11/11/8/5 P0-Segmente und zusammen 121
  einzeln referenzierbare Entscheidungen. Damit sind 41 von 41 P0-Segmenten genau einem
  entscheidungsreifen, aber vollständig offenen Dossier zugeordnet. Die Review-UI zeigt
  41/41 und macht alle fünf Paket-IDs über einen eigenen Select und Direktlinks filterbar.
- **Register:** Die Fehlklassifikation der 2-m-Aussage wurde in DSC-073 und DSC-079
  transparent korrigiert; Rückfragenübersicht und Seitenrecords sind synchron. Höchster
  Eintrag bleibt DSC-085; siebzehn Fragen und sechs aktive Blocker.
- **Geänderte Bereiche:** fünf englische Aufgabenentwürfe, EN-01, die korrigierte deutsche
  Sicherungswarnung, Token-/Unit-/E2E-Abdeckung sowie Fortschritts- und
  Übergabedokumentation. Segmentdateien, Seitenstatus, Setup-Karte, Content-Schema und
  Supabase-Migrationen blieben unverändert.
- **Genutzte Skills:** PDF aus `openai-primary-runtime` 26.805.11740 für Render- und
  Sichtprüfung der Seiten 3–7 und 12–17 sowie das GitHub-Plugin 0.1.8-2841cf9749ae zum
  Anlegen des Draft-PR und Überwachen der CI. Nutzung und verfügbare beziehungsweise
  fehlende Herkunftsmetadaten stehen transparent in `.agent/SKILLS_USAGE.md` und
  `.agent/SKILLS_LOCK.json`; kein Skill-Inhalt wurde in Produktcode kopiert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün; darin 37 Unit-Tests sowie Segment-,
  Content-, Referenz-, Secret-, Token-, Lockfile- und Fortschrittsprüfung. `npm run build`
  ist mit 42 generierten Seiten grün. 44 von 44 Playwright-/axe-Tests einschließlich aller
  fünf englischen Taskrouten, Entwurfs-/Quellennachweis, Pin-Tabelle, der
  Abdeckungskennzahl 41/41 und aller P0-01-bis-P0-05-Filter bei Desktop- und Mobilbreite
  bestanden.
- **Referenz-Repository:** nicht lokal vorhanden; `reference:check` hat deshalb
  erwartungsgemäß nichts zu prüfen.
- **GitHub-Abschluss:** Der dafür vorgesehene Bootstrap-Platzhalter `079f05e` liegt als
  `main` vor, ohne einen neuen Commit direkt auf `main` zu erzeugen. Draft-PR #1 enthält
  den Feature-Branch-Stand; seine CI wird nach jedem finalen Push bis zum Endstatus
  überwacht. Merge und fachliche Abnahme bleiben ausdrücklich menschlich.

```text
Resume from:
Englischer Pilot ab SN-045 mit Aufgaben 01 bis 05 als belegte KI-Uebersetzungsentwuerfe;
tokens:check vergleicht alle fuenf DE/EN-Paare. EN-01 ist fuer den unabhaengigen
Sprachreview vorbereitet, aber unbeantwortet. Der deutsche Anschluss-Master nennt nach
Korrektur Pin 1 nur als Masse und Pin 8 als Dauerplus 12 V. Kein technischer oder
sprachlicher Inhalt ist freigegeben; BLK-005/006 und sechs aktive Blocker bleiben offen.

First action:
Den unabhaengigen englischen Sprachreview fuer EN-01 organisatorisch einholen; Aufgaben 01
bis 05 bis dahin nicht hoeherstufen. Parallel den zweiten geschuetzten Vertical Slice fuer
Aufgaben 06 bis 10 aus dem deutschen Master ab SN-045 vorbereiten. BLK-005/006 strikt
erhalten und keine SMS-Befehle, Beispielnummern oder unbestaetigten Supportwege uebernehmen.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
