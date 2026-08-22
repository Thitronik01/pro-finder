# Handoff

Stand: 2026-08-22 (fünfundzwanzigste Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Erster Segmentbatch der Generation ab SN-045 (DOC-IBA-SN045, Seiten 5–9)

- Der Segmentbestand ab SN-045 war leer: 247 geprüfte Seiten, aber keine einzige
  Extraktion. Damit war „Quelleninventar und PDF-Prüfung" mit 20 Prozent Gewicht und
  27,5 Prozent Fortschritt der schwächste Workstream. Dieser Batch eröffnet den Bestand
  mit **17 Segmenten** in `content/segments/v1/sn-045-plus/de/`; der Gesamtbestand steigt
  von 56 auf 73 Segmente.
- Abgedeckt sind die deutschen Inhaltsseiten 5 bis 9: Haftungsausschluss (drei Segmente),
  Lieferumfang (eins), Abschnitt 1.1 Montageort (vier), Abschnitt 1.2 Anschlüsse (zwei)
  und Abschnitt 1.3 Betriebsart auswählen (sieben). Jedes Segment nennt Dokument,
  PDF-Seite, Seitenregion, Kontext, Sicherheitsklasse, SHA-256-Prüfsumme und
  Änderungsgrund; alle stehen auf `entwurf`.
- **Methodik:** DOC-IBA-SN045 hat keine Textebene – PyMuPDF liefert für diese Seiten null
  lesbare Zeichen. Jede Seite wurde deshalb bei 300 dpi gerendert und gelesen. Danach
  wurden Lieferumfangsliste, Pinlegende A–D/1–8, der Absatz zur Kabellänge und die
  Absätze zu Geofencing und Panikalarm bei 500 dpi als Ausschnitt gegengelesen. Die
  Gegenprüfung bestätigte alle Werte ohne Abweichung.
- **Status bewusst `extracted`, nicht `validated`:** Die fünf Seiten steigen von 25 auf
  50 Prozent. Der Sprung auf `validated` bleibt der unabhängigen zweiten Durchsicht
  vorbehalten, wie sie für die SN-044-Batches in jeweils eigenen Durchgängen erfolgt ist.
  Die 500-dpi-Gegenprobe deckt die sicherheitskritischen Werte ab, ersetzt aber keine
  unabhängige Neuableitung aller 17 Segmente.
- **Register ergänzt, ohne neue DSC-Nummer:** Drei Befunde sind in die vorhandenen
  Sammelpositionen eingeflossen. Der Haftungsausschluss auf Seite 5 nennt „die
  Alarmanlage" als das an die Starterbatterie angeschlossene Gerät, obwohl derselbe
  Abschnitt den Pro-finder als Ortungssystem und die WiPro III als Alarmanlage einführt –
  welches Gerät die Tiefentladung verursacht, ist damit nicht bestimmbar (DSC-050). Die
  zwei Meter Antennenkabel auf Seite 7 sind bei 500 dpi als feste Angabe bestätigt; ob
  Lieferlänge oder zulässige Obergrenze gemeint ist, sagt die Quelle nicht (DSC-052).
  Pin 3 trägt in Abschnitt 1.3 zwei Funktionen – Geofencing schalten und in Betriebsart A
  einen Panikalarm auslösen –, deren Verhältnis die Quelle nicht erklärt (DSC-050 mit
  DSC-042). Alle drei stehen zusätzlich unter „Laufend ergänzt" in
  `RUECKFRAGEN_THITRONIK.md`. Höchster Registereintrag bleibt DSC-085, es bleiben
  siebzehn Rückfragen und sechs aktive Blocker.
- **Sperren eingehalten:** In `title` und `body_md` steht keine SMS-Befehlszeichenfolge
  (BLK-005). Der `segments:check` hat das einmal aktiv verhindert: Die Quellwortstellung
  „Liegt in Betriebsart A an Pin 3 eine Spannung an" enthält die Zeichenfolge einer
  gesperrten Ausgangssteuerung; das Segment formuliert deshalb „Liegt in der Betriebsart A
  eine Spannung an Pin 3 an" und dokumentiert die Umstellung im `change_reason`. Die
  Berechtigungsregel für Zielrufnummern bleibt unter BLK-006 unveröffentlicht und wird nur
  als Bedingung der Quelle zitiert. Die offene Geofencing-Abhängigkeit von der WiPro III
  bleibt unter BLK-007 sichtbar. Herstelleradresse und Revisionsstand vom abgebildeten
  Kurzanleitungs-Umschlag wurden wegen BLK-004 nicht übernommen.
- **Falscher Querverweis nicht mitgeführt:** Die Quelle verweist für die Ausgangssteuerung
  auf „5.4 Position mit dem Smartphone abfragen"; zuständig ist 5.5 (DSC-028, DSC-040).
  Das Segment übernimmt weder den falschen Verweis noch korrigiert es ihn stillschweigend,
  sondern nennt nur die belegte Aussage und begründet die Auslassung.
- **Erstes technisches Prüfpaket ab SN-045:** Die zehn sicherheitskritischen Segmente
  sind in `docs/review-packets/P0-06-MONTAGE-ANSCHLUSS-BETRIEBSARTEN-SN045.md` gebündelt –
  18 Einzelentscheidungen zu Montage und Ausrichtung, Pinbelegung, der Doppelbelegung von
  Pin 3 und den Haftungsaussagen. Das Paket steht auf **„in Vorbereitung"**: Es existiert,
  damit kein sicherheitskritisches Segment ohne Entscheidungszuordnung bleibt, bündelt
  aber Erstextraktionen und wird erst nach der unabhängigen Gegenprüfung auf „bereit für
  Fachreview" gesetzt. `/review` zeigt es als eigene Paket-ID mit zehn Treffern.
- **Generationstrennung:** Kein Wert aus DOC-BMA-SN044 ist in den Bestand ab SN-045
  gelangt. Pin 8 heißt hier „Dauerplus 12 V", bis SN-044 dagegen „Betriebsspannung U1,
  +12 V"; beide Formulierungen bleiben in ihrer jeweiligen Generation stehen. Die
  Quelle schreibt auf Seite 9 einmal „Nano SIM-Karte" und wenige Zeilen später nur
  „SIM-Karte"; das Segment nennt neutral die eingelegte SIM-Karte, das Kartenformat bleibt
  bei DSC-069.

### Zweiter Segmentbatch ab SN-045 (DOC-IBA-SN045, Seiten 10–14)

- **21 weitere Segmente**; der Bestand ab SN-045 steht damit bei 38 Segmenten aus den
  deutschen Seiten 5–14, der Gesamtbestand bei 94. Abgedeckt sind die ganzseitige
  Betriebsartentabelle 0 bis F (3), Abschnitt 1.4 Modul anschließen samt 1.5.1 (5), die
  Abschnitte 1.5.2 und 1.5.3 zu Anschluss und Diagnose der GPS-Antenne (6), Kapitel 2.1
  und 2.2 zur SIM-Karte (4) sowie 2.3 bis 2.5 zu App, Aktivierung und Adressbucheintrag
  (3). Alle stehen auf `entwurf`, ihre Seiten auf `extracted`.
- **Die englische Fassung war erstmals unabhängige Gegenquelle.** Für die
  Betriebsartentabelle wurde die englische PDF-Seite 34 bei 400 dpi gegengelesen.
  Intervalle, Spannungsschwellen und Sonderfunktionen stimmen zeichengenau überein.

### Entlastung einer offenen Rückfrage: Betriebsart D ab SN-045

- Rückfrage 16 fragt, ob Betriebsart D alle 8 Minuten oder alle 8 Sekunden meldet – bis
  SN-044 steht deutsch „8 Minuten" gegen englisch „8 seconds", Faktor 60.
- Ab SN-045 nennen **beide** verglichenen Fassungen 8 Minuten: die deutsche Seite 10 bei
  600 dpi, die englische Seite 34 bei 400 dpi gesichert; Zeile C stimmt mit 90 Sekunden
  ebenfalls überein.
- **Der Widerspruch ist damit auf die Generation bis SN-044 begrenzt.** Das ist die erste
  Entlastung einer offenen Rückfrage, die aus der Quellenarbeit selbst kommt. Die Frage
  bleibt trotzdem offen: Zwei übereinstimmende Sprachfassungen sind laut
  Synthese-Auswertung 2 keine technische Freigabe, und die acht übrigen Sprachfassungen ab
  SN-045 sind an dieser Stelle nicht verglichen. DSC-066 und Rückfrage 16 tragen die
  Abgrenzung jetzt ausdrücklich.
- **Folge für den Bestand:** Die Intervalle sind in den Segmenten enthalten. Sie zu
  unterdrücken hätte bedeutet, eine Sperre der Generation bis SN-044 auf die neuere
  Generation zu übertragen – genau das verbietet Leitplanke 4 des Masterplans.

### Der schwerwiegendste neue Befund: gegenläufige Schaltschwellen an Pin 3

- Die Betriebsartentabelle ordnet Pin 3 in **Stellung 8** „über 6 V: ein / unter 5 V: aus"
  zu und in **Stellung B** genau umgekehrt „über 6 V: aus / unter 5 V: ein". Beide Zeilen
  sind bei 600 dpi gesichert und englisch identisch.
- Die Quelle sagt an keiner Stelle, für welchen Anwendungsfall welche Stellung gedacht
  ist, und nicht, was zwischen 5 V und 6 V geschieht. Eine falsch gewählte Stellung kehrt
  die Geofencing-Wirkung um – **ohne Rückmeldung**. Das ist dasselbe Muster wie bei den
  SMS-Befehlen unter BLK-005: Der Fehler meldet sich nicht, er zeigt sich erst am
  ausbleibenden Alarm.
- Der Befund steht in DSC-052, in der Liste der offenen sicherheitskritischen Punkte und
  als eigene Entscheidungsgruppe A1 bis A3 in P0-07.

### Zwei Korrekturen an eigenen Registerangaben

- **„Hauptkabelbaum":** DSC-050 behauptete, der unerklärte Begriff komme im gesamten
  geprüften deutschen Teil nur in Abschnitt 2.9 vor. Die Extraktion der Seite 12 hat ihn
  auch in Abschnitt 1.5.2 gefunden. Der Befund wiegt dadurch schwerer als notiert: Der
  Begriff hängt an zwei verschiedenen Vorgängen – am Löschen der Zielrufnummern und am
  spannungsfreien Anschluss der GPS-Antenne.
- **Pin 3 trägt drei Rollen, nicht zwei:** Zur Doppelbelegung Geofencing/Panikalarm kommt
  die Legende auf Seite 8, die denselben Pin als „Messeingang (U3)" führt.

### Drei Prüfpakete statt eines für die Generation ab SN-045

- Mit 26 sicherheitskritischen Segmenten wäre ein einzelnes Paket unbrauchbar geworden.
  P0-06 ist auf Montage, Pinbelegung, Versorgung und Ausgänge zugeschnitten (11 Segmente,
  19 Entscheidungen); **P0-07** bündelt Betriebsarten, Pin-3-Schaltschwellen, Geofencing
  und GPS-Diagnose (9 Segmente, 17 Entscheidungen); **P0-08** SIM-Karte, Inbetriebnahme
  und die anrufgesteuerten Funktionen (6 Segmente, 13 Entscheidungen).
- Alle drei stehen auf **„in Vorbereitung"**. Die Review-UI zeigt 67 von 67 P0-Segmenten
  in Prüfpaketen, filtert 11, 9 und 6 Treffer und kennzeichnet die drei Pakete sichtbar
  als noch nicht reviewbereit.

### Weitere Befunde dieses Batches

- **PIN-Abfrage (Seite 13):** Ab SN-045 ist sie zu **deaktivieren** – das Gegenteil der
  Vorgabe bis SN-044, die eine feste PIN bei aktivierter Abfrage verlangt. Nachgetragen in
  Rückfrage 15, ohne die Angaben zwischen den Generationen zu vermischen.
- **Versorgung (Seite 11):** Das Anschlusskapitel nennt 12 V DC, die technische Tabelle
  einen Bereich – derselbe Widerspruch wie bis SN-044. DSC-069 trägt ihn jetzt für beide
  Generationen.
- **Adressbuchname (Seite 14):** Fließtext und Tipp-Kasten empfehlen auf derselben Seite
  zwei verschiedene Namen; nur der zweite erreicht den angekündigten ersten Platz. Der
  empfohlene Name wurde deshalb nicht übernommen (DSC-050).
- **Zeile D der Betriebsartentabelle** wiederholt den Produktnamen doppelt, und beide
  Klammerzusätze der Zeilen C und D stehen ohne Konjunktion – während die englische
  Fassung an dieser Stelle **fehlerfrei** ist. Ein seltener Fall, in dem die Übersetzung
  sauberer als das deutsche Original ist (DSC-051).
- **Sperren eingehalten:** Die Zeichenfolge zum Abschalten des Geofencings auf Seite 12
  steht nur als `omission_note` ohne den Befehlstext (BLK-005). Aufbau und Inhalt der
  Programmier-SMS bleiben ausgelassen (BLK-005/006). Die beiden QR-Codes auf Seite 14
  wurden nicht ausgelesen und ihre Ziele nicht übernommen (BLK-004); ebenso wenig die
  namentlich genannten Mobilfunkanbieter, weil drei Sprachfassungen drei verschiedene
  Empfehlungen nennen (DSC-027).

### Kleiner QA-Schritt: Reduced Motion technisch abgesichert

- Ein neuer Playwright-Pfad emuliert `prefers-reduced-motion: reduce` und prüft sieben
  Kernrouten: Start, beide Generationsübersichten, deutsche und englische Taskroute,
  Wechsel, Review und Dashboard.
- Der Test schlägt bei laufenden Animationen, Autoplay-Medien oder berechneten
  Animations-/Übergangsdauern über 1 ms fehl. Er läuft im Desktop- und 375-px-Mobilprofil;
  der vollständige E2E-Lauf steht jetzt bei 64 von 64 bestandenen Tests.
- Die manuelle Betriebssystem-/Browserprüfung bleibt ausdrücklich offen. Der QA-Fortschritt
  steigt für den zusätzlichen technischen Nachweis vorsichtig von 50 auf 51 Prozent.

### Dritte Synthese-Auswertung: Grenze zwischen Quelle, HTML und Gerät

- `DISCREPANCIES.md` ordnet die Zugänglichkeitsbefunde jetzt sechs Ebenen zu:
  PDF-Struktur, Textebene, visuelle Semantik, nicht lokalisierter Bildinhalt,
  Status-LED am Gerät und ungeklärte Produktlogik.
- Die Auswertung benennt für jede Ebene, was der HTML-Pilot kompensieren kann und was eine
  separate PDF-Sanierung, THITRONIK-Entscheidung oder physische Prüfung benötigt. Sie
  hält ausdrücklich fest, dass axe-/Browserläufe weder PDF/UA noch die Geräte- oder
  Kartenbarrieren abnehmen.
- Kein Status wurde angehoben. Rückfrage 12 zur farbunabhängigen Statusrückmeldung,
  Rückfrage 17 zur Gerätemeldungssprache sowie BLK-005 bis BLK-007 bleiben offen.

### Zweite Synthese-Auswertung: technische Werte und Generation

- `DISCREPANCIES.md` stellt jetzt Generationsauswahl, SIM-Format, Stromaufnahme,
  Spannungsversorgung, Konformitätsbezug, GPS-Kabellänge, Geofencing-Radius und
  Betriebsart D in einer gemeinsamen Matrix gegenüber. Jede Zeile nennt Dokument und
  PDF-Seiten; es wurde kein neuer Sollwert abgeleitet.
- Die Auswertung trennt drei unabhängige Fehlerachsen: Gerätegeneration, Dokumentstand
  innerhalb einer Generation und Sprachfassung. Sie dokumentiert insbesondere, dass sich
  bis SN-044 Bedienungs- und Kurzanleitung bei Stromaufnahme und Konformitätsbezug
  widersprechen und dass Mehrheitsverhältnisse bei Radius und Betriebsart D keine
  Freigabe ersetzen.
- `RUECKFRAGEN_THITRONIK.md` verknüpft die Matrix mit den offenen Fragen 2, 4, 14, 15 und 16. Kein Aufgaben-, Segment- oder Reviewstatus wurde verändert; die P0-Pakete bleiben
  das Entscheidungsinstrument für den realen Fachreview.

### Geschützter englischer Vertical Slice für Aufgaben 11 bis 14

- `control-outputs`, `troubleshoot-problems`, `technical-data` und
  `get-help-and-support` sind aus dem deutschen Master ab SN-045 übertragen. Damit sind
  alle vierzehn englischen Aufgaben belegt, `placeholder: false` und
  `review_status: entwurf`.
- Ausgangsbefehle und die Syntaxregel für Ausgang B bleiben wegen BLK-005 ausgelassen.
  Pins, Belastungsgrenze, Betriebsarten, Zeitbereiche und Rückmeldung bleiben sichtbar,
  aber technisch ungeprüft. Die Fehlerbehebung bewahrt die offenen Widersprüche zu
  Status-LED, Betriebsart B, stillem Alarm, GPS-Feldern und WiPro-III-Abhängigkeit.
- Aufgabe 14 veröffentlicht weder historische Rufnummer noch E-Mail oder Website. Der
  Tokencheck erlaubt für Position 14 ausschließlich das Entfernen einer Telefonnummer
  unter BLK-004 und protokolliert dies; hinzugefügte oder veränderte Kontakte bleiben
  Fehler. Alle vierzehn DE/EN-Paare bestehen den Token- und Quellenparitätsvergleich.
- EN-03 dokumentiert Scope, Reviewgrenzen, geschützte Werte, Checkliste,
  Entscheidungsprotokoll und Exit-Kriterien. Browser- und axe-Abdeckung umfasst jetzt
  alle vierzehn englischen Taskrouten sowie das Fehlen von `tel:`- und `mailto:`-Links in
  der Supportaufgabe.

### Nutzerentwürfe eingeordnet und deutsche Kartenvariante erstellt

- Sieben vom Projektauftraggeber bereitgestellte Kartenvisualisierungen liegen unverändert
  unter `design/card/concepts/user-drafts-2026-08-11/`. Das README ordnet sie als
  Vorderseite, Rückseite, Präsentationsbild, Kerbenstudie sowie QR-/NFC-Details ein und
  dokumentiert Maße, SHA-256 und die byteidentische Dublette 05/07.
- `card-front-de-example.svg` und `card-back-de-example.svg` übertragen die stärkste
  Richtung aus Vorderseite 06, Rückseite 02 sowie den Details 01, 04 und 05 in das
  maßhaltige ID-1-System. Die Basiskarten blieben unverändert. Gerenderte PNG-Vorschauen
  liegen unter `design/card/previews/`.
- Die verbindliche Schreibweise wurde normalisiert: Die Nutzerbilder zeigen
  `PRO-FINDER`, der Projektentwurf verwendet `Pro-finder`. Illustrative QR-Muster und
  Braillepunkte wurden nicht übernommen. URL, NFC-Ziel, Supportdaten, offizielles
  Logo-/Produktbild und Produktionsparameter bleiben als offene Gates sichtbar.
- Der erste Rendercheck fand zwei Überläufe bei Kurzadresse und NFC-Handlungszeile; beide
  wurden im SVG korrigiert. Der Karten-Preflight prüft nun vier SVGs sowie Integrität und
  Maße aller sieben Rasterreferenzen.

### Geschützter englischer Vertical Slice für Aufgaben 06 bis 10

- Die englischen Aufgaben `manage-destination-numbers`, `understand-status-led`,
  `understand-messages`, `use-geofencing` und `request-status-report` sind aus dem
  geprüften deutschen Master ab SN-045 übertragen. Alle fünf bleiben
  `review_status: entwurf`, sind keine Platzhalter und besitzen Dokument-/Seitenquellen.
- Der Slice übernimmt die sicherheitsrelevanten Grenzen ausdrücklich: keine SMS-Befehle,
  Berechtigungszeichen, Smartphone-Kennzeichen, Beispielrufnummern, Koordinaten oder
  vollständigen Kartenadressen. Widersprüche zu Geofencing, Pin-3-Priorität, UTC,
  veralteten GPS-Positionen, Statusberichtsfeldern und Betriebsarten C bis F bleiben
  sichtbar, statt sprachlich aufgelöst zu werden.
- `npm run tokens:check` vergleicht jetzt zehn DE/EN-Paare. Ein zusätzlicher Unit-Test
  sichert für Aufgaben 01 bis 10 die task-level Dokument-/Seitenparität mit dem deutschen
  Master. EN-02 dokumentiert Reviewgrenzen, geschützte Werte, Checkliste,
  Entscheidungsprotokoll und Exit-Kriterien für den unabhängigen Sprachreview.
- Der Produktions-Build erzeugt 47 Seiten. 54 Playwright-/axe-Tests prüfen alle zehn
  englischen Taskrouten im Desktop- und Mobilprofil; alle Läufe sind grün.

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

- Alle 56 deutschen SN-044-Segmente sind quellenvalidiert, bleiben aber `entwurf`. Keines
  besitzt eine technische oder rechtliche Freigabe.
- Der Segmentbestand ab SN-045 deckt 10 der 21 deutschen Inhaltsseiten ab. Die
  38 Segmente stehen auf `entwurf`, ihre zehn Seiten auf `extracted`; die unabhängige
  Gegenprüfung steht für **alle** aus. Die Seiten 15 bis 25 sind unverändert `inspected`,
  ohne Extraktion. Für die neun nichtdeutschen Sprachteile ab SN-045 existiert kein
  Segment; die englische Seite 34 wurde einmalig als Gegenquelle gelesen, aber nicht
  extrahiert.
- P0-06 bis P0-08 stehen auf „in Vorbereitung". Sie wechseln erst nach der unabhängigen
  Gegenprüfung der Seiten 5–14 auf „bereit für Fachreview"; keine ihrer 49
  Einzelentscheidungen ist beantwortet.
- P0-01 bis P0-05 sind intern reviewbereit und decken alle 41 P0-Segmente ab, warten aber
  auf den realen THITRONIK-Fachreview. Keine der 121 vorbereiteten Einzelentscheidungen
  ist beantwortet und kein Segmentstatus wurde geändert.
- Die unabhängigen englischen Sprachreviews von EN-01 bis EN-03 sind organisatorisch
  offen. Keine der vierzehn Aufgaben darf vorher höhergestuft werden.
- Von den 67 neu erfassten DOC-BMA-SN044-Seitenrecords besitzen sechzehn jetzt eine
  unabhängige Gegenprüfung; 51 bleiben auf
  `inspected`. Die SN-045-Seitenrecords besitzen weiterhin keine zweite Meinung.
- Alle technischen und sicherheitskritischen Inhalte stehen auf `entwurf`; es gibt keine
  technische Freigabe und keinen muttersprachlichen Review der nichtdeutschen Fassungen.
- Keine manuelle AT-, Zoom-, Reflow-, Forced-Colors- oder Reduced-Motion-Prüfung.
- Die deutsche Kartenvariante ist nur ein visuell und automatisch geprüfter Entwurf. Es
  fehlen weiterhin ein freigegebenes druckfähiges THITRONIK-Logo und Produktbild, die
  finale URL, Supportdaten, QR-Code, NFC-Inlayentscheidung, Kerbengeometrie,
  Braille-Dienstleister, Andruck und Tests mit betroffenen Personen.

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

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045, deutsche Seiten 5 bis 14, in zwei Batches
  bei 300 dpi gerendert und gelesen; Lieferumfangsliste, Pinlegende, Kabellängenabsatz,
  Geofencing- und Panikalarm-Absätze, Betriebsartentabelle, Pin-3-Schaltschwellen,
  Versorgungsangaben und Adressbuchempfehlung zusätzlich bei 500 bis 600 dpi als
  Ausschnitt gegengelesen. Zusätzlich die **englische Seite 34** bei 400 dpi als
  unabhängige Gegenquelle zur Betriebsartentabelle. Alle zehn deutschen Seiten von
  `inspected` auf `extracted` gehoben. Seiten 3–18 von DOC-BMA-SN044 bleiben unverändert
  quellenvalidiert.
- **Gesamtstand Quellen:** 297 von 323 Seiten `inspected`, 10 von 323 `extracted`, 16 von
  323 `validated`; DOC-BMA-SN044 56 `inspected`/16 `validated`, DOC-IBA-SN045 237
  `inspected`/10 `extracted` und beide Kurzanleitungen je 2 `inspected`. Keine Seite wurde
  ohne Segmentdatei hochgestuft; der PDF-Audit steigt von 27,5 auf 28,3 Prozent, der
  Gesamtfortschritt von 62,4 auf 62,5 Prozent.
- **Segmente:** Schema v1 und jetzt 94 deutsche Segmente – 56 aus DOC-BMA-SN044 (Seiten
  3–18, unabhängig gegengeprüft) und 38 aus DOC-IBA-SN045 (Seiten 5–14, in zwei Batches).
  Alle `entwurf`, alle mit aktueller Prüfsumme und durch Dokument, Seite, Region und
  Kontext belegt. Für beide neuen Batches steht die unabhängige Gegenprüfung aus; deshalb
  `extracted` statt `validated`.
- **Aufgaben:** SN-001-044 Deutsch 14/14 und SN-045-plus Deutsch 14/14, insgesamt 28/28
  gefüllt, alle `entwurf`, kein Platzhalter. Englisch ab SN-045 besitzt zusätzlich alle
  vierzehn belegten Aufgabenentwürfe, ebenfalls ohne Platzhalter. Kein Aufgabenstatus
  wurde in dieser Fortsetzung verändert.
- **Prüfpakete:** P0-01 bis P0-05 enthalten unverändert 6/11/11/8/5 P0-Segmente und
  zusammen 121 einzeln referenzierbare Entscheidungen für die Generation bis SN-044. Neu
  sind **P0-06 bis P0-08** für die Generation ab SN-045 mit 11/9/6 P0-Segmenten und
  zusammen 49 Einzelentscheidungen: Montage und elektrischer Anschluss, Betriebsarten mit
  Geofencing und GPS-Diagnose sowie SIM-Karte mit Inbetriebnahme. Alle drei stehen
  ausdrücklich auf **„in Vorbereitung"** und nicht auf „bereit für Fachreview", weil ihre
  Segmente Erstextraktionen sind und ihre Seiten auf `extracted` stehen. Die Review-UI
  zeigt 67/67 P0-Segmente in Prüfpaketen, filtert 11, 9 und 6 Treffer und kennzeichnet die
  drei Pakete sichtbar als noch nicht reviewbereit.
- **Warum diese Pakete überhaupt entstanden sind:** Der Unit-Test
  `deckt alle sicherheitskritischen Segmente mit genau einem Prüfpaket ab` ist in **beiden**
  Batches fehlgeschlagen – erst 51 statt 41 P0-Segmente, dann 67 statt 51. Das ist genau
  der Fall, den dieser Test verhindern soll: ein sicherheitskritisches Segment ohne
  Entscheidungsdossier. Statt die Zusicherung aufzuweichen, wurden die Pakete angelegt und
  der Test um die Generationsaufteilung 41 + 26 erweitert.
- **Register:** Zwölf neue Befunde sind in die vorhandenen Sammelpositionen DSC-050,
  DSC-051, DSC-052, DSC-066 und DSC-069 sowie in die Rückfragen 15 und 16 eingeflossen und
  stehen zusätzlich unter „Laufend ergänzt" in `RUECKFRAGEN_THITRONIK.md`. Zwei davon sind
  **Korrekturen eigener Angaben** (Fundstellen von „Hauptkabelbaum"; dritte Rolle des
  Pin 3), einer ist eine **Entlastung** (Betriebsart D ab SN-045 widerspruchsfrei). Keine
  neue DSC-Nummer und keine achtzehnte Rückfrage waren erforderlich. Höchster Eintrag
  bleibt DSC-085; siebzehn Fragen und sechs aktive Blocker. Die Liste der offenen
  sicherheitskritischen Punkte ist um die Doppelbelegung von Pin 3, die gegenläufigen
  Schaltschwellen und die umgekehrte PIN-Vorgabe ergänzt.
- **Geänderte Bereiche:** `content/segments/v1/sn-045-plus/de/` (38 neue Dateien),
  `sources/pages/DOC-IBA-SN045.json`, `docs/review-packets/` (P0-06 neu zugeschnitten,
  P0-07 und P0-08 neu, README),
  `lib/review-priority.ts`, `app/review/page.tsx`, `tests/unit/review-priority.test.ts`,
  `tests/e2e/accessibility.spec.ts`, `DISCREPANCIES.md`, `RUECKFRAGEN_THITRONIK.md`,
  `PROJECT_STATUS.md`, `HANDOFF.md`, `progress-input.json` und die daraus generierte
  `progress.json`. Aufgaben, Setup-Karte, Content-Schema, Anleitungsrouten und
  Supabase-Migrationen blieben unverändert.
- **Genutzte Skills:** keine. Die Extraktion beruht ausschließlich auf den gerenderten
  Seitenbildern der Original-PDFs, den vorhandenen Seitenrecords und dem Registerstand;
  es wurde kein Skill-Inhalt in Produktcode oder Dokumentation übernommen.
- **Werkzeuge:** `scripts/render-pdf-pages.py` (300 dpi, Seiten 5–9) und
  `scripts/crop-pdf-region.py` (500 dpi, vier Ausschnitte). PyMuPDF musste in dieser
  Umgebung erst nachinstalliert werden; die Original-PDFs wurden ausschließlich gelesen.
- **Abschlussläufe:** `npm run progress` → `npm run format` → `npm run check` in dieser
  Reihenfolge grün; darin 39 Unit-Tests sowie Segment-, Content-, Referenz-, Secret-,
  Token-, Lockfile- und Fortschrittsprüfung. Zusätzlich `npm run build` (51 Seiten) und
  der vollständige E2E-Lauf mit 64 von 64 Playwright-/axe-Tests, weil die neuen Pakete die
  Review-Oberfläche verändern. Drei automatische Prüfungen haben echte Funde produziert:
  `segments:check` hat die Quellwortstellung des Panikalarm-Absatzes als gesperrte
  Ausgangssteuerungs-Zeichenfolge erkannt (umgestellt, im `change_reason` dokumentiert),
  der Prüfpaket-Unit-Test hat in beiden Batches nicht zugeordnete P0-Segmente aufgedeckt
  (P0-06 bis P0-08 angelegt), und der Typecheck hat eine nicht mitgezogene Erweiterung von
  `REVIEW_PACKET_IDS` abgefangen.
- **Umgebungsnotiz:** In dieser Sandbox fehlt der von `@playwright/test` erwartete
  Chromium-Build; vorhanden ist 1194 statt 1234. Der E2E-Lauf erfolgte deshalb über eine
  temporäre, nicht versionierte Konfiguration unter `tmp/` mit gesetztem
  `executablePath`. `playwright.config.ts` blieb unverändert, CI nutzt weiterhin sie.
- **Referenz-Repository:** nicht lokal vorhanden; `reference:check` hat deshalb
  erwartungsgemäß nichts zu prüfen.
- **GitHub-Abschluss:** Arbeit erfolgt auf `claude/projekt-uebersicht-fortschritt-wkejbi`,
  abgezweigt vom Stand von `bootstrap/accessibility-pilot`; kein direkter Commit auf
  `main`. Draft-PR #1 bleibt der menschlich abzunehmende Integrationsweg.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seiten 5 bis 14 (deutsch), 38 Segmente in
content/segments/v1/sn-045-plus/de/, Sprache Deutsch. Die zehn Seiten stehen auf
extracted, alle Segmente auf entwurf. Der Segmentbestand ab SN-045 deckt damit 10 von 21
deutschen Inhaltsseiten ab; die Seiten 15 bis 25 sind unveraendert inspected. P0-06 bis
P0-08 buendeln die 26 sicherheitskritischen Segmente in 49 Einzelentscheidungen und stehen
auf in Vorbereitung. Kein technischer, sprachlicher oder physischer Inhalt ist freigegeben;
BLK-004/005/006/007 und sechs aktive Blocker bleiben offen.

First action:
Die Seiten 5 bis 14 unabhaengig gegen das Seitenbild neu ableiten - nicht die vorhandenen
Segmente gegenlesen, sondern aus dem Bild neu extrahieren und danach vergleichen. Erst
wenn das ohne Abweichung gelingt, steigen die Seiten von extracted auf validated und
P0-06 bis P0-08 von in Vorbereitung auf bereit fuer Fachreview. Besonders genau zu pruefen
sind die Betriebsartentabelle auf Seite 10 (Intervalle, U-Spalten, Schaltschwellen), die
Pinlegende auf Seite 8 und die Werte 13,5 V, 500 mA und 0 bis 30 V.

Danach den naechsten Extraktionsbatch aus den deutschen Seiten 15 bis 19 anlegen:
Fortsetzung von 2.5 mit der Laendervorwahl, Zielrufnummern programmieren, Meldungen und
Statusbericht. Dort liegen die Beispiel-Programmier-SMS und das ungeklaerte
Berechtigungszeichen - beides bleibt unter BLK-005 und BLK-006 vollstaendig ausgelassen,
ebenso Beispielrufnummern, Koordinaten und Kartenadressen.

Parallel unveraendert offen: die unabhaengigen englischen Sprachreviews fuer EN-01 bis
EN-03 organisatorisch einholen und keine Aufgabe vorher hoeherstufen; den ersten
dokumentierten manuellen QA-Batch fuer Tastatur, 200/400-Prozent-Zoom, Reflow, Forced
Colors und Reduced Motion vorbereiten und nur tatsaechlich ausgefuehrte Pruefungen als
bestanden markieren; fuer die Karte freigegebene Assets und Entscheidungen zu URL,
Supportdaten und Kerbengeometrie anfordern, bis dahin keinen echten QR-Code, keine
Braillepunkte und keine Supportkontakte einsetzen.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
