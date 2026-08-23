# Handoff

Stand: 2026-08-13 (vierundzwanzigste Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## Sitzung 2026-08-23 – deutscher und englischer SN-045-Teil wechselseitig gegengelesen

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

### Erstes abgabefertiges Ergebnis: der Mängelbericht

`docs/MAENGELBERICHT_THITRONIK.md` fasst die 41 Befunde der Schwere „hoch" für THITRONIK
zusammen. Er ist bewusst nach **Handlungsfähigkeit** geordnet, nicht nach DSC-Nummer:

- **Teil A** – acht Befunde, bei denen eine Nutzerin, die der Anleitung folgt, etwas anderes
  tut als beabsichtigt.
- **Teil B** – acht Stellen, an denen Dokumente einander widersprechen, oft in derselben
  Sprache und Generation.
- **Teil C** – sechs Befunde, die Barrierefreiheit schon an der Quelle verhindern.
- **Teil D** – was THITRONIK sofort ohne uns tun kann, und die vier dringlichsten Fragen.

**Warum das das erste fertige Ergebnis ist:** Alles andere im Projekt wartet auf eine
Freigabe. Dieser Bericht nicht. Er behauptet nichts über das Gerät, sondern nur, was in den
Dokumenten steht und wo sie sich widersprechen – belegte eigene Beobachtungen, sofort
prüfbar und korrigierbar.

Er nennt ausdrücklich auch seine Grenzen: 65 von 323 Seiten vollständig extrahiert, acht
Sprachfassungen ohne muttersprachlichen Review nicht abschließend beurteilbar, kein
Konformitätsgutachten.

### Vier Matrixzeilen sind jetzt automatisiert

Von der Zugänglichkeitsmatrix ließen sich vier bisher offene Zeilen automatisieren:

- **Windows Forced Colors** – `forced-colors: active` über zehn Kernrouten, geprüft auf
  axe-Verstöße, unsichtbar gewordenen Text und eine erhaltene Fokusanzeige.
- **200 % Zoom** und **400 % Zoom / Reflow** – 640 und 320 CSS-Pixel. Zusätzlich zur
  Überlaufprüfung wird zugesichert, dass **keine** Überschrift per `display: none`
  weggeblendet wird, um Platz zu schaffen; damit ist auch Informationsverlust abgedeckt.
- **Bilder deaktiviert** – siehe unten.

Beide neuen Pfade beginnen mit einer Zusicherung, dass die Emulation im verwendeten Browser
greift. Ohne sie wäre ein grüner Lauf ohne Aussage.

**Der Bilder-Test hat etwas anderes ergeben als erwartet.** Der erste Anlauf blockierte
Bildanfragen und prüfte danach die Textalternativen. Die Absicherung schlug an: Es wurde
**kein einziges Bild** blockiert. Die Anwendung bindet überhaupt keine Bilder ein, weder als
`img` noch als Hintergrundbild. Abbildungen der Quelle sind durchgängig als Text
ausgedrückt – dafür gibt es die Segmentart `figure_description`. Der Test schreibt jetzt
genau diese stärkere Eigenschaft fest; bindet jemand später ein Bild ein, schlägt er an und
erzwingt eine bewusste Entscheidung über die Textalternative.

**Was diese Zeilen nicht belegen:** Ein emulierter Forced-Colors-Modus ist nicht das
Windows-Kontrastdesign, und eine geänderte Viewportbreite ist nicht Browserzoom mit
skalierten Schriften. Die drei zoom- und farbbezogenen Zeilen stehen deshalb auf
`automatisiert, manuell offen` – nicht auf `bestanden`. Alle Tests mit assistiven
Technologien bleiben unverändert offen.

### Alle deutschsprachigen Quellseiten sind extrahiert

Zum Abschluss kamen die letzten offenen deutschen Seiten hinzu: DOC-BMA-SN044 Seiten 1, 2
und 19 sowie beide Kurzanleitungen vollständig. Damit gilt ein überprüfbarer Stand: **jede
deutschsprachige Quellseite des Projekts ist extrahiert und validiert** – 19/19, 21/21, 2/2
und 2/2. Segmentbestand 245.

### Die Kurzanleitung widerspricht dem Handbuch an fünf Stellen

Die dritte Prüfachse – Handbuch gegen Kurzanleitung derselben Generation und Sprache – hat
allein fünf neue Registereinträge geliefert:

- **DSC-093** – fünf verschiedene SIM-Empfehlungen über vier Dokumente. Die Kurzanleitung ab
  SN-045 nennt eine vorkonfigurierte Vertragskarte eines namentlich genannten Netzbetreibers,
  die in keinem Handbuch vorkommt.
- **DSC-094** – drei Sprachen in einem Textblock: In der schwedischen Spalte der
  Kurzanleitung ab SN-045 ist die Überschrift französisch, Schritt 1 schwedisch und die
  Schritte 2 bis 4 sind französisch. Die englische Spalte trägt ebenfalls eine französische
  Überschrift.
- **DSC-095** – **stellt DSC-086 richtig.** Das Multi-SIM-Verbot und die technischen
  Kartenanforderungen fehlen nicht dem Deutschen, sondern dem deutschen _Handbuch_. In der
  deutschen Kurzanleitung derselben Auflage stehen sie wörtlich.
- **DSC-096** – Kurzanleitung und Handbuch beschreiben verschiedene Statusberichte. Die Karte
  nennt zwei Felder, die das Handbuch nicht führt, und lässt die Spannungen der Messeingänge
  weg, die das Handbuch ausdrücklich nennt.
- **DSC-097** – die Kurzanleitung bis SN-044 verbietet das iPhone für die Kartenvorbereitung
  in allen acht Sprachblöcken; das Handbuch derselben Generation erwähnt weder iPhone noch
  iMessage an irgendeiner Stelle (durch Volltextsuche über alle 72 Seiten belegt).

Dazu **DSC-092**: Die beiden Generationen beschreiben verschiedene Verwendungszwecke – bis
SN-044 ein „Telemetriemodul zur Flottenüberwachung", ab SN-045 ein Ortungssystem für
Freizeitfahrzeuge, das Live-Tracking ausdrücklich ausschließt. Das ist datenschutzrechtlich
erheblich.

Alles gebündelt in **P0-13**, das bewusst nicht nach Thema, sondern nach Befund geschnitten
ist und neben den fünf Abweichungen auch die vier doppelt belegten Übereinstimmungen und drei
Angaben nennt, die der Kurzanleitung ganz fehlen.

### Die Review-UI zeigt die Belege jetzt selbst

Die Gegenprüfungsbelege lagen bisher nur in den JSON-Dateien. Zwei neue Ansichten holen sie
in die Oberfläche:

- **`/review/segment/<key>`** – Änderungsgrund mit dem Ergebnis der Gegenprüfung,
  `crosscheck_note` der Quellseite, Region, Vor- und Nachkontext, Prüfsumme, verlinkte
  Registerbezüge und das Gegenstück der anderen Sprachfassung im direkten Textvergleich. Die
  Seitenpaarung stammt aus der belegten Tabelle, nicht aus einem festen Versatz.
- **`/review/packet/<id>`** – alle Segmente eines Dossiers in beiden Fassungen, ihre
  Quellseiten, wie viele davon unabhängig gegengeprüft sind und welche Registereinträge
  berührt werden. Ein unbekannter Paketschlüssel liefert 404 statt einer erfundenen Seite.

Dazu vier neue Filter in der Warteschlange: Sprache, Registerbezug, Prüfstand der Quellseite
und die erweiterte Freitextsuche. Der Testbestand liegt bei 51 Unit- und 78 Browsertests;
der Dark-Mode-axe-Lauf hat dabei einen realen Kontrastfehler der neuen Fläche gefunden, weil
sie zunächst eigene Hexwerte statt der Design-Tokens verwendete.

**Bewusst nicht gebaut:** eine Statuswechsel-UI gegen Fixtures. Sie wäre eine Attrappe und
würde Freigaben vortäuschen, die es nicht gibt.

### Der englische SN-044-Teil wurde gelesen, aber nicht extrahiert

Für den Generationenvergleich wurde der englische Teil von DOC-BMA-SN044 (Seiten 20–36)
vollständig gelesen. Ergebnis: Er bestätigt die deutschen Segmente durchgehend und liefert
einen wichtigen Nachtrag zu DSC-027 – die englische Fassung **bis SN-044** empfiehlt
dieselben zwei Anbieter wie die deutsche. Die in DSC-086 erfasste Abweichung ist damit neu
ab SN-045 und keine seit jeher andere englische Redaktionslinie.

Eigene englische Segmente dieser Generation wurden **nicht** angelegt: Dafür fehlt der
englische Aufgabenzweig unter `content/tasks/sn-001-044/en/`. Ihn halbfertig anzulegen wäre
schlechter als ihn wegzulassen – entweder vollständig mit allen 14 Aufgaben oder gar nicht.

### Der englische Sprachteil ist ebenfalls extrahiert

Nach Abschluss des deutschen Teils wurde derselbe Bestand für die englische Fassung erzeugt:
**83 englische Segmente** aus den Seiten 29–49, alle 21 Seiten auf `validated`. Entscheidend
für den Übersetzungspilot: Diese Segmente sind **Extraktionen der englischen Quelle**, nicht
Übersetzungen des deutschen Masters. Jede englische Seite nennt in ihrem `crosscheck_note`
die deutsche Parallelseite, gegen die sie gelesen wurde.

Der Gewinn ist inhaltlich, nicht nur zählbar: Eine Übersetzung des deutschen Masters hätte
DSC-086 (englisches Verbot der Multi-Operator-Karte), DSC-088 (abweichende Stromaufnahme),
DSC-090 (abweichende Gerätemeldung) und DSC-091 (zweifach benannter Anlernmodus) nie sichtbar
gemacht. Die englischen Aufgabenentwürfe der bisherigen Vertical Slices bleiben davon
unberührt und weiterhin `entwurf`; sie werden nicht höhergestuft, solange EN-01 bis EN-03
offen sind.

**Grenze der Methode.** Für die acht übrigen Sprachfassungen endet dieses Verfahren: Ohne
muttersprachlichen Review darf keine ihrer Seiten über `inspected` hinaus (Leitplanken 6
und 7). Die Quellenprüfung hat damit ohne Zuarbeit von THITRONIK eine harte Obergrenze.
Von 247 Seiten des Dokuments sind 42 validiert; die restlichen 205 sind ohne Zuarbeit nicht
höherstufbar.

### Prüfpakete

Die 63 sicherheitskritischen Segmente des deutschen SN-045-Teils sind sieben neuen Dossiers
zugeordnet: **P0-06** (SIM und Aktivierung, 3), **P0-07** (Zielrufnummern und
Programmiernachricht, 7), **P0-08** (Montage, Anschluss, elektrische Grenzwerte, 14),
**P0-09** (Betriebsarten, GPS-Diagnose, Status-LED, 10), **P0-10** (Meldungen, Alarme,
Spannungswarnung, 11), **P0-11** (Geofencing, Statusbericht, Positionsbewertung, 11) und
**P0-12** (Ausgangssteuerung, technische Daten, 7). Alle stehen auf „bereit für Fachreview",
weil ihre Seiten vollständig gegengelesen und auf `validated` gestuft sind.

Seit der Extraktion des englischen Teils liegen die englischen Segmente im selben Paket wie
ihre deutsche Entsprechung – eine Entscheidung des Pakets gilt damit für beide Fassungen.
Die Review-UI zeigt **181/181**; Unit- und Browsertest sind entsprechend nachgezogen.

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

- Alle 245 Segmente sind quellenvalidiert, bleiben aber `entwurf`. Keines besitzt
  eine technische oder rechtliche Freigabe. Die 83 Segmente ab SN-045 besitzen zusätzlich
  eine unabhängige Gegenprüfung gegen die englische Fassung – das ersetzt keinen
  technischen Review.
- P0-01 bis P0-13 sind intern reviewbereit und decken alle 181 P0-Segmente ab, warten aber
  auf den realen THITRONIK-Fachreview. Keine der vorbereiteten Einzelentscheidungen ist
  beantwortet und kein Segmentstatus wurde geändert.
- **Jede deutschsprachige Quellseite des Projekts ist extrahiert und validiert**, dazu der
  englische Teil ab SN-045. Nicht extrahiert sind der englische Teil bis SN-044 (dafür fehlt
  der englische Aufgabenzweig), die französischen und schwedischen Teile von DOC-BMA-SN044 und
  die acht übrigen Sprachteile von DOC-IBA-SN045 – letztere dürfen ohne muttersprachlichen
  Review auch nicht höhergestuft werden.
- Die unabhängigen englischen Sprachreviews von EN-01 bis EN-03 sind organisatorisch
  offen. Keine der vierzehn Aufgaben darf vorher höhergestuft werden.
- Von den 67 neu erfassten DOC-BMA-SN044-Seitenrecords besitzen sechzehn jetzt eine
  unabhängige Gegenprüfung; 51 bleiben auf
  `inspected`. Die SN-045-Seitenrecords besitzen weiterhin keine zweite Meinung.
- Alle technischen und sicherheitskritischen Inhalte stehen auf `entwurf`; es gibt keine
  technische Freigabe und keinen muttersprachlichen Review der nichtdeutschen Fassungen.
- Keine manuelle AT-Prüfung. Zoom, Reflow, Forced Colors, Reduced Motion und der Ausfall
  von Bildern sind seit dem 2026-08-23 automatisiert abgesichert; die manuelle
  Betriebssystem- und Browserprüfung bleibt offen.
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

## Abschlussprotokoll (Stand 2026-08-23)

Dieser Abschnitt beschrieb bis zum 2026-08-23 noch den Stand der Vorsitzung und
widersprach dem Repository. Er ist jetzt nachgezogen.

- **Bearbeitete PDF-Seiten:** 49 Seiten neu gerendert und gelesen – DOC-IBA-SN045 deutsch
  5–25 und englisch 29–49, DOC-BMA-SN044 deutsch 1, 2, 19 und englisch 20–36 sowie beide
  Kurzanleitungen. Strittige Einzelwerte zusätzlich bei 400 bis 500 dpi nachgerendert. Die
  Original-PDFs wurden ausschließlich gelesen.
- **Gesamtstand Quellen:** 258 von 323 Seiten `inspected`, **65 von 323 `validated`**, keine
  Seite `extracted`. Je Dokument: DOC-BMA-SN044 53/19, DOC-IBA-SN045 205/42, DOC-KA-SN044
  0/2, DOC-KA-SN045 0/2. Damit ist **jede deutschsprachige Quellseite des Projekts**
  validiert, dazu der englische Teil ab SN-045.
- **Segmente:** **245** versionierte Segmente, alle `entwurf`, alle mit Prüfsumme und durch
  Dokument, Seite, Region und Kontext belegt. Verteilung: DOC-BMA-SN044 deutsch 61,
  DOC-IBA-SN045 deutsch 83 und englisch 83, DOC-KA-SN044 deutsch 8, DOC-KA-SN045 deutsch 10.
  Sicherheitsklassen: 181 sicherheitskritisch, 48 sicherheitsrelevant, 16 normal.
- **Aufgaben:** unverändert 42 Dateien in drei Zweigen – SN-001-044 Deutsch 14, SN-045-plus
  Deutsch 14, SN-045-plus Englisch 14. Ein englischer SN-044-Zweig wurde bewusst **nicht**
  halbfertig angelegt.
- **Prüfpakete:** **P0-01 bis P0-13** decken alle 181 sicherheitskritischen Segmente ab
  (6/11/11/8/5/6/14/28/20/22/22/14/14). P0-06 bis P0-12 führen deutsche und englische
  Segmente derselben Fundstelle im selben Paket; P0-13 bündelt die Widersprüche zwischen
  Kurzanleitung und Handbuch.
- **Register:** **97 DSC-Einträge** (zwölf neu: DSC-086 bis DSC-097), 17 Rückfragen
  unverändert, davon Rückfrage 2, 5, 11, 12, 15 und 17 durch neue Belege erweitert.
- **Geänderte Bereiche:** Segmentbestand, Seitenrecords, `DISCREPANCIES.md`,
  `RUECKFRAGEN_THITRONIK.md`, `ACCESSIBILITY_TEST_MATRIX.md`, `PROJECT_STATUS.md`,
  `HANDOFF.md`, neu `CROSSCHECK_SN045_DE_EN.md` und acht Dossiers, dazu `lib/review-*`,
  `app/review/**` mit zwei neuen Routen, Unit- und Browsertests. Karte, Content-Schema und
  Supabase-Migrationen blieben unverändert.
- **Karte:** unverändert. Kein Produktionswert und keine Freigabe hinzugekommen.
- **Genutzte Skills:** keine.
- **Abschlussläufe:** `npm run progress` → `npm run format` → `npm run check` grün, darin
  **51 Unit-Tests** sowie Segment-, Content-, Referenz-, Secret-, Token-, Lockfile- und
  Fortschrittsprüfung. Produktions-Build mit 51 Seiten. **86 von 86 Playwright-/axe-Tests**
  über Desktop- und Mobilprofil. `segments:check` hat währenddessen einen realen
  BLK-005-Verstoß abgefangen, der daraufhin umformuliert wurde; der Dark-Mode-axe-Lauf einen
  realen Kontrastfehler einer neuen Fläche.
- **Referenz-Repository:** nicht lokal vorhanden; `reference:check` hat erwartungsgemäß
  nichts zu prüfen.
- **GitHub-Abschluss:** Arbeit auf `claude/sn045-english-verification-n78ghl`, sieben
  Commits, kein direkter Commit auf `main`.

```text
Resume from:
Gesamtfortschritt 71,5 Prozent, PDF-Audit 35,1 Prozent ueber 323 Seiten.
ALLE deutschsprachigen Quellseiten sind extrahiert und validiert (19/19, 21/21, 2/2, 2/2),
dazu DOC-IBA-SN045 englisch 21/21. Bestand 245 Segmente, alle entwurf. Alle 181
sicherheitskritischen Segmente liegen in den dreizehn Dossiers P0-01 bis P0-13.
Drei Quellen-Pruefachsen liefern die Befunde: deutsch gegen englisch innerhalb einer
Auflage, Generation gegen Generation, Handbuch gegen Kurzanleitung. Zwoelf neue
Registereintraege DSC-086 bis DSC-097.
Die Review-UI zeigt die Belege selbst: /review/segment/<key> und /review/packet/<id>.
Von der Zugaenglichkeitsmatrix sind vier weitere Zeilen automatisiert: Forced Colors,
200- und 400-Prozent-Zoom sowie Bilder deaktiviert. 51 Unit-Tests, 86 Browser-/axe-Tests.

First action:
Alles, was ohne Zuarbeit von THITRONIK geht, ist weitgehend ausgeschoepft. Es bleiben zwei
echte Optionen:
1. Den englischen Teil bis SN-044 (Seiten 20-36) extrahieren. Er ist als Gegenquelle bereits
   gelesen. Voraussetzung: der Aufgabenzweig content/tasks/sn-001-044/en/ - entweder
   vollstaendig mit allen 14 Aufgaben oder gar nicht.
2. Die Review-UI weiter ausbauen, etwa eine Ansicht je Registereintrag, die alle Segmente
   und Quellseiten zu einer DSC-Nummer zusammenfuehrt.
HARTE GRENZEN, nicht uebergehen:
- Franzoesische und schwedische Teile von DOC-BMA-SN044 sowie die acht uebrigen Sprachteile
  von DOC-IBA-SN045 duerfen ohne muttersprachlichen Review NICHT ueber inspected hinaus
  (Leitplanken 6 und 7). Das sind 258 der 323 Seiten.
- Keine Statuswechsel-UI gegen Fixtures. Sie waere eine Attrappe.
- Kein Test ohne Absicherung gegen einen leeren Durchlauf. Beim Bilder-Test hat genau diese
  Absicherung gezeigt, dass gar nichts geprueft wurde.
- Kein Fortschritt, der nur aus einer geaenderten Messung stammt.
Was Menschen und Geraete braucht und deshalb offen bleibt: NVDA, VoiceOver, TalkBack,
echter Browserzoom, das Windows-Kontrastdesign, EN-01 bis EN-03, der reale Fachreview der
dreizehn Pruefpakete und alle physischen Kartentests.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
