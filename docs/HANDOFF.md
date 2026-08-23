# Handoff

Stand: 2026-08-13 (vierundzwanzigste Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## Sitzung 2026-08-23 – deutscher SN-045-Teil vollständig gegen Englisch gegengelesen

### Vorbemerkung zum Ausgangsstand

Der Sitzungsauftrag beschrieb einen Stand, den das Repository nicht enthält: 136 Segmente,
den deutschen Teil ab SN-045 vollständig extrahiert, zehn Prüfpakete P0-01 bis P0-10 und
einen Registerstand über DSC-085 hinaus. Tatsächlich vorgefunden wurden 56 Segmente
(ausschließlich DOC-BMA-SN044), fünf Prüfpakete, DSC-085 als höchster Eintrag und alle 247
Seiten von DOC-IBA-SN045 auf `inspected`. Die beauftragte erste Aktion – die Gegenprüfung
auf 18 bereits extrahierte Seiten ausweiten – war damit nicht ausführbar, weil es keine
SN-045-Segmente gab.

Statt zu warten wurde die **Methode** des Auftrags auf den tatsächlichen Stand angewandt:
Die deutschen Seiten wurden im Gegenlesen gegen die englische Fassung überhaupt erst
extrahiert. Das ist derselbe Arbeitsschritt, nur eine Stufe früher.

### Was geprüft wurde

- **Alle 21 deutschen Inhaltsseiten vollständig gegengelesen:** DOC-IBA-SN045, deutsche
  Seiten 5–25 gegen die englischen Seiten 29–49. Beide Seiten jedes Paars wurden bei 200 dpi
  gerendert und Satz für Satz, Tabellenzeile für Tabellenzeile verglichen; strittige
  Einzelwerte zusätzlich bei 400 bis 500 dpi nachgerendert. Damit ist der deutsche
  Sprachteil ab SN-045 abgeschlossen.
- **83 Segmente** in `content/segments/v1/sn-045-plus/de/` erzeugt, alle `entwurf`, alle mit
  Dokument, Seite, Region, Kontext und Prüfsumme. Jedes `change_reason` nennt, wogegen
  gegengelesen wurde und was dabei herauskam. Segmentbestand gesamt: 139.
- **21 Seiten auf `validated`** hochgestuft, je mit `crosscheck_note`. Die englischen
  Seiten 29–49 bleiben auf `inspected` – sie sind Gegenquelle, nicht Extraktionsgrundlage –
  und tragen ebenfalls eine `crosscheck_note`.
- **Fußzeilen der englischen Seiten 33–40** hoch aufgelöst gerendert und abgelesen.

### Befunde

- **DSC-021 für Deutsch/Englisch geklärt, Hypothese widerlegt.** Die englische Fassung
  überspringt keine interne Seitenzahl; die Fußzeilen 33–40 laufen lückenlos „Page 7 of 23"
  bis „Page 14 of 23", beide Teile haben 21 Inhaltsseiten und zählen 3 bis 23. Der Versatz
  entsteht bei Abschnitt 2.8 (Deutsch setzt die Syntaxgrafik allein auf eine eigene interne
  Seite, Englisch zusammen mit der Einleitung) und wird in Kapitel 4 wieder ausgeglichen
  (englisch drei statt zwei interne Seiten). Es fehlt kein Inhalt.
- **DSC-086 neu:** Der englische Abschnitt 2.1 verbietet die Multi-Operator-SIM-Karte und
  nennt technische Mindestanforderungen; der deutsche Master schweigt dazu. Nicht von
  DSC-027 abgedeckt, das nur die abweichende Anbieterempfehlung führt. Gehört zu Rückfrage 5.
- **DSC-087 neu – ein Fehler im deutschen Master.** Betriebsart D nennt deutsch den
  Produktnamen doppelt und lässt einen Bindesatz aus; die englische Fassung ist korrekt.
  Nebenbefund ohne Wertübernahme: Beide Fassungen dieser Generation nennen 8 Minuten, der
  Faktor-60-Widerspruch aus DSC-066 wiederholt sich hier nicht.
- **DSC-088 neu – ein technischer Auslegungswert.** Stromaufnahme im Normalbetrieb deutsch
  als Bereich, englisch als Einzelwert in Höhe der Obergrenze, innerhalb derselben Auflage.
  Gehört zu Rückfrage 2; kein Wert wird veröffentlicht.
- **DSC-089 neu:** Die englische Statusbericht-Beispielblase führt zwei Messeingänge in einer
  Zeile zusammen (vier statt fünf Spannungszeilen), und ein Querverweis steht doppelt.
- **DSC-090 neu:** Die Gerätemeldung bei fehlender Position lautet deutsch und englisch
  verschieden. Mindestens eine der beiden Zeichenfolgen ist im Feld nicht auffindbar; keine
  wird als Erkennungsmerkmal veröffentlicht.
- **DSC-091 neu:** Die englische Fassung benennt den Anlernmodus auf einer Seite zweifach –
  Überschrift und Befehl passen nicht zusammen.
- **Nachtrag zu DSC-015:** Der Titelfehler wirkt sich auch auf einen Querverweis auf der
  englischen Seite 35 aus.
- **Bestätigt, nicht neu:** DSC-016 (Adressbuchname widersprüchlich, in beiden Fassungen),
  DSC-017 (Berechtigungszeichen nur aus dem Beispiel ableitbar, in beiden Fassungen),
  DSC-019 (abweichendes Länderbeispiel), DSC-027 (Anbieterempfehlung).
- **Kein eigener Lesefehler in den Segmenten.** Keine Abweichung ging auf eine Fehllesung
  der Extraktion zurück; keine wurde stillschweigend angeglichen.
- **Eine eigene Fehllesung der Prüfung wurde widerlegt und ist dokumentiert.** Zwischenzeitlich
  war eine Kopfzeile mit Seitenzahl in der englischen Fassung vermutet worden. Bei 400 dpi ist
  der Bereich in **beiden** Fassungen leer – die Vermutung war falsch und wird in
  `docs/CROSSCHECK_SN045_DE_EN.md` festgehalten statt stillschweigend verworfen.
- **Was übereinstimmt, ist ebenso protokolliert:** die vollständige Betriebsartentabelle
  (16 Zeilen × 11 Spalten), alle neun LED-Zustände, die Anschlusslegende, der Lieferumfang,
  12 V/500 mA, 0–30 V, 13,5 V über fünf Minuten, zwei Meter Antennenkabel, 11,2 V/12,5 V,
  zehn Minuten Wartezeit, 1–120 Minuten und die Richtlinie 2014/53/EU.

### Sperren eingehalten

Keine SMS-Befehlszeichenfolge in `title` oder `body_md` (BLK-005, durch
`npm run segments:check` bestätigt). Keine aus einem Beispiel abgeleitete
Berechtigungsregel und keine Beispielrufnummer (BLK-006) – die Beispieltabelle und die
Beispielwerte der Syntaxgrafik sind als `omission_note` benannt statt wiedergegeben. Keine
Store- oder Downloadadresse und kein QR-Code (BLK-004). Keine Geofencing-Aussage, keine
Koordinate, keine Kartenadresse. Kein Wert aus DOC-BMA-SN044 wurde in einen
SN-045-Bestand übernommen.

### Prüfpakete

Die 63 sicherheitskritischen Segmente des deutschen SN-045-Teils sind sieben neuen Dossiers
zugeordnet: **P0-06** (SIM und Aktivierung, 3), **P0-07** (Zielrufnummern und
Programmiernachricht, 7), **P0-08** (Montage, Anschluss, elektrische Grenzwerte, 14),
**P0-09** (Betriebsarten, GPS-Diagnose, Status-LED, 10), **P0-10** (Meldungen, Alarme,
Spannungswarnung, 11), **P0-11** (Geofencing, Statusbericht, Positionsbewertung, 11) und
**P0-12** (Ausgangssteuerung, technische Daten, 7). Alle stehen auf „bereit für Fachreview",
weil ihre Seiten vollständig gegengelesen und auf `validated` gestuft sind.

Die Review-UI zeigt damit **104/104** und filtert 6/11/11/8/5/3/7/14/10/11/11/7 Treffer;
Unit- und Browsertest sind entsprechend nachgezogen.

### Neu angelegt

`docs/CROSSCHECK_SN045_DE_EN.md` – belegte Seitenpaarung aller 21 deutschen Inhaltsseiten
gegen die englischen, mit einer Spalte, die je Zeile sagt, ob das Paar vollständig
gegengelesen, nur über die Fußzeile bestätigt oder bislang nur aus den Seitenrecords
abgeleitet ist.

## In dieser Fortsetzung abgeschlossen

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

- Alle 139 deutschen Segmente sind quellenvalidiert, bleiben aber `entwurf`. Keines besitzt
  eine technische oder rechtliche Freigabe. Die 83 Segmente ab SN-045 besitzen zusätzlich
  eine unabhängige Gegenprüfung gegen die englische Fassung – das ersetzt keinen
  technischen Review.
- P0-01 bis P0-12 sind intern reviewbereit und decken alle 104 P0-Segmente ab, warten aber
  auf den realen THITRONIK-Fachreview. Keine der vorbereiteten Einzelentscheidungen ist
  beantwortet und kein Segmentstatus wurde geändert.
- Der deutsche Teil ab SN-045 ist mit 21 von 21 Inhaltsseiten abgeschlossen. Nicht
  extrahiert sind weiterhin DOC-BMA-SN044 außerhalb der Seiten 3–18, der englische Teil ab
  SN-045 und die acht übrigen Sprachteile.
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

- **Bearbeitete PDF-Seiten:** keine neuen Renderings oder Statusänderungen. Die drei
  Synthesen verwenden ausschließlich bereits dokumentierte Seitenbelege. Seiten 3–18 von
  DOC-BMA-SN044 samt allen 56 deutschen Segmenten bleiben quellenvalidiert; Seite 19
  enthält nur ein leeres Notizfeld.
- **Gesamtstand Quellen:** 307 von 323 Seiten `inspected`, 16 von 323 `validated`, keine
  Seite `extracted`; DOC-BMA-SN044 56 `inspected`/16 `validated`, DOC-IBA-SN045 247
  `inspected` und beide Kurzanleitungen je 2 `inspected`. Keine Seite wurde ohne
  Segmentdatei hochgestuft.
- **Segmente:** Schema v1 und 56 deutsche SN-044-Segmente; alle `entwurf`, alle mit
  aktueller Prüfsumme und durch Dokument, Seite, Region und Kontext belegt. Alle fünf
  Batches besitzen eine unabhängige Gegenprüfung; Korrekturen stehen im jeweiligen
  `change_reason`.
- **Aufgaben:** SN-001-044 Deutsch 14/14 und SN-045-plus Deutsch 14/14, insgesamt 28/28
  gefüllt, alle `entwurf`, kein Platzhalter. Englisch ab SN-045 besitzt zusätzlich alle
  vierzehn belegten Aufgabenentwürfe, ebenfalls ohne Platzhalter.
- **Prüfpakete:** P0-01 bis P0-05 enthalten 6/11/11/8/5 P0-Segmente und zusammen 121
  einzeln referenzierbare Entscheidungen. Damit sind 41 von 41 P0-Segmenten genau einem
  entscheidungsreifen, aber vollständig offenen Dossier zugeordnet. Die Review-UI zeigt
  41/41 und macht alle fünf Paket-IDs über einen eigenen Select und Direktlinks filterbar.
- **Register:** Nach der vorhandenen SMS-Befehlssynthese bündeln zwei neue Auswertungen
  technische Werte sowie die Zugänglichkeitsgrenzen zwischen PDF, HTML und Gerät. Keine
  neue DSC-Nummer und keine neue Rückfrage waren erforderlich. Höchster Eintrag bleibt
  DSC-085; siebzehn Fragen und sechs aktive Blocker.
- **Geänderte Bereiche:** `DISCREPANCIES.md`, `RUECKFRAGEN_THITRONIK.md`,
  `PROJECT_STATUS.md`, `HANDOFF.md`, `HANDOVER_PROMPT.md`, `progress-input.json` und die
  daraus generierte `progress.json`. Aufgaben, Segmente, Seitenstatus, Anwendung,
  Setup-Karte, Content-Schema und Supabase-Migrationen blieben unverändert.
- **Karten-Nachtrag:** sieben unveränderte Nutzerentwürfe samt Integritätsmanifest, zwei
  deutsche SVG-Beispiele, zwei gerenderte Vorschauen, erweiterter Karten-Preflight sowie
  aktualisierte Anforderungen, Druckspezifikation und Inhalts-Quellen-Zuordnung. Keine
  technische Kartenfunktion und kein Produktionswert wurde freigegeben.
- **Genutzte Skills:** keine. Die Synthesen wurden aus den versionierten
  Seitenbefunden, DSC-Einträgen und Reviewfragen erstellt; es wurde kein Skill-Inhalt in
  Produktcode oder Dokumentation übernommen.
- **Abschlussläufe:** der neue Reduced-Motion-Test bestand gezielt 2 von 2 Läufen und im
  vollständigen E2E-Lauf 64 von 64 Playwright-/axe-Tests. Die abschließende Reihenfolge
  `npm run progress` → `npm run format` → `npm run check` ist ebenfalls grün; darin 38
  Unit-Tests sowie Segment-, Content-, Referenz-, Secret-, Token-, Lockfile- und
  Fortschrittsprüfung.
- **Referenz-Repository:** nicht lokal vorhanden; `reference:check` hat deshalb
  erwartungsgemäß nichts zu prüfen.
- **GitHub-Abschluss:** Arbeit erfolgt auf `bootstrap/accessibility-pilot`; kein direkter
  Commit auf `main`. Draft-PR #1 bleibt der menschlich abzunehmende Integrationsweg.

```text
Resume from:
Der deutsche Sprachteil von DOC-IBA-SN045 ist abgeschlossen. Alle 21 Inhaltsseiten (deutsch
5-25) wurden vollstaendig gegen die englischen Seiten 29-49 gegengelesen, in 83 Segmente
extrahiert und auf validated gestuft; Segmentbestand gesamt 139, alle entwurf. Alle 63
sicherheitskritischen SN-045-Segmente sind den sieben neuen Dossiers P0-06 bis P0-12
zugeordnet, die Review-UI zeigt 104/104. Sechs neue Registereintraege: DSC-086 (englisches
Verbot der Multi-Operator-SIM-Karte), DSC-087 (Fehler im deutschen Master, Betriebsart D),
DSC-088 (Stromaufnahme Bereich gegen Einzelwert), DSC-089 (zwei englische Satzfehler),
DSC-090 (Geraetemeldung je Fassung anders), DSC-091 (Anlernmodus zweifach benannt). Kein
Segment musste wegen eines eigenen Lesefehlers korrigiert werden; eine eigene Fehlvermutung
(Kopfzeile mit Seitenzahl) wurde widerlegt und dokumentiert. Keine Freigabe erteilt.

First action:
Naechster Extraktionsbereich nach docs/CROSSCHECK_SN045_DE_EN.md: entweder DOC-BMA-SN044
ausserhalb der Seiten 3-18 mit dem englischen Teil (Seiten 20-36) als Gegenquelle, oder der
englische Teil ab SN-045, der dann gegen den jetzt validierten deutschen Master gelesen wird.
Dieselbe Methode: Seitenpaar ueber die Kapitelueberschrift bilden, nie ueber einen festen
Versatz; beide Seiten rendern; jede Zahl, Tabellenzeile und Aufzaehlung vergleichen;
Abweichungen nicht angleichen, sondern als eigenen Lesefehler korrigieren oder als
Sprachunterschied ins Register nehmen; eine Seite steigt erst nach vollstaendigem
Gegenlesen auf validated, mit crosscheck_note.
Unveraendert offen und ohne THITRONIK nicht loesbar: die unabhaengigen englischen
Sprachreviews EN-01 bis EN-03, der erste dokumentierte manuelle QA-Batch fuer Tastatur,
Zoom, Reflow, Forced Colors und Reduced Motion sowie alle Produktionsentscheidungen der
Setup-Karte.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
