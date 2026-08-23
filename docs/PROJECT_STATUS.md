# Projektstatus

Stand: 2026-08-23. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 64.2 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 90 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 30.7 %      |
| Content-Modell und deutscher Master      | 20 %    | 93 %        |
| Setup-Karte                              | 10 %    | 42 %        |
| Webanleitung und Review-UI               | 20 %    | 68 %        |
| Übersetzungspilot                        | 10 %    | 75 %        |
| Accessibility-, Security- und Content-QA | 10 %    | 56 %        |
| Staging und Übergabe                     | 5 %     | 82 %        |

**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):

| Dokument      | Seiten | Fortschritt |
| ------------- | ------ | ----------- |
| DOC-BMA-SN044 | 72     | 36.1 %      |
| DOC-IBA-SN045 | 247    | 29.3 %      |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 6 · Nächste Aktion: Der deutsche Sprachteil ab SN-045 ist abgeschlossen. Naechster Extraktionsbereich nach docs/CROSSCHECK_SN045_DE_EN.md: entweder DOC-BMA-SN044 ausserhalb der Seiten 3-18 mit dem englischen Teil (Seiten 20-36) als Gegenquelle, oder der englische Teil ab SN-045 gegen den jetzt validierten deutschen Master. Dieselbe Methode beibehalten: Seitenpaar ueber die Kapitelueberschrift bilden, nie ueber einen festen Versatz; beide Seiten rendern; jede Zahl, Tabellenzeile und Aufzaehlung vergleichen; Abweichungen nicht angleichen, sondern als eigenen Lesefehler korrigieren oder als Sprachunterschied ins Register nehmen; eine Seite steigt erst nach vollstaendigem Gegenlesen auf validated, mit crosscheck_note. Unveraendert offen und ohne THITRONIK nicht loesbar: die unabhaengigen englischen Sprachreviews EN-01 bis EN-03, der erste dokumentierte manuelle QA-Batch und alle Produktionsentscheidungen der Setup-Karte.

<!-- PROGRESS:END -->

## Neu in dieser Sitzung (2026-08-23)

**Der deutsche Sprachteil ab SN-045 ist abgeschlossen.** Alle 21 Inhaltsseiten sind gegen
die englische Fassung gegengelesen, in 83 Segmente extrahiert und auf `validated` gestuft.
Dabei entstanden sechs neue Registereinträge (DSC-086 bis DSC-091), von denen fünf in einer
Selbstdurchsicht nicht sichtbar geworden wären.

- **Der deutsche Master ab SN-045 hat eine unabhängige Gegenquelle.** Alle 21 deutschen
  Inhaltsseiten von DOC-IBA-SN045 wurden Satz für Satz, Zeile für Zeile gegen die englischen
  Seiten 29–49 derselben Auflage gelesen und dabei in 83 Segmente extrahiert. Die Prüfung hängt damit nicht davon ab, dass derselbe Bearbeiter seine eigene
  Arbeit nachliest. Methode, belegte Seitenpaarung und Prüfstand je Seite stehen in
  [CROSSCHECK_SN045_DE_EN.md](CROSSCHECK_SN045_DE_EN.md).
- **DSC-021 ist für das Paar Deutsch/Englisch geklärt – und die bisherige Vermutung war
  falsch.** Die englische Fassung überspringt **keine** interne Seitenzahl: Die Fußzeilen
  der englischen Seiten 33–40 laufen lückenlos „Page 7 of 23" bis „Page 14 of 23", und
  beide Teile umfassen 21 Inhaltsseiten. Verschoben ist der Inhalt. Der Versatz entsteht
  bei Abschnitt 2.8 – Deutsch setzt die Syntaxgrafik allein auf eine eigene interne Seite,
  Englisch setzt sie zusammen mit der Einleitung – und wird in Kapitel 4 wieder
  ausgeglichen, das englisch drei statt zwei interne Seiten belegt. Es fehlt kein Inhalt.
- **Neuer sicherheitsrelevanter Befund DSC-086.** Der englische Abschnitt 2.1 verbietet die
  Multi-Operator-SIM-Karte („not allowed") und nennt technische Mindestanforderungen an die
  Karte; der deutsche Master schweigt an derselben Stelle dazu. Das ist kein Widerspruch
  zweier Werte, sondern eine Aussage, die nur eine Fassung führt – wer nur den deutschen
  Teil liest, kann eine Karte wählen, die dieselbe Auflage englisch ausschließt. Gehört zu
  Rückfrage 5.
- **Kein eigener Lesefehler.** Bei den fünf gegengelesenen Seiten musste kein Segment wegen
  einer eigenen Fehllesung korrigiert werden. Alle gefundenen Abweichungen sind belegte
  Sprachunterschiede der Quelle (DSC-016, DSC-017, DSC-019, DSC-027, DSC-086) und wurden
  nicht angeglichen.
- **Ein Fehler steht im deutschen Master, nicht in der Übersetzung (DSC-087).** In der
  Betriebsartentabelle nennt die deutsche Zeile D den Produktnamen doppelt und lässt einen
  Bindesatz aus; die englische Fassung ist an dieser Stelle korrekt und damit die bessere
  Quelle. Nebenbefund ohne Wertübernahme: In dieser Generation nennen **beide** Fassungen
  8 Minuten – der Faktor-60-Widerspruch der Generation bis SN-044 (DSC-066) wiederholt sich
  hier nicht.
- **Ein technischer Auslegungswert weicht innerhalb einer Auflage ab (DSC-088).** Für die
  Stromaufnahme im Normalbetrieb nennt der deutsche Teil einen Bereich, der englische Teil
  nur die Obergrenze. Es widersprechen sich also nicht zwei Dokumente, sondern zwei
  Sprachfassungen desselben Dokuments. Gehört zu Rückfrage 2; kein Wert wird veröffentlicht.
- **Eine Gerätemeldung heißt je Fassung anders (DSC-090).** Bei fehlender Position nennt der
  deutsche Teil einen Hinweis auf fehlenden GPS-Empfang, der englische einen auf eine
  fehlende Position. Gibt das Gerät nur eine feste Zeichenfolge aus, ist mindestens eine der
  beiden im Feld nicht auffindbar. Keine wird als Erkennungsmerkmal veröffentlicht.
- **Zwei englische Satzfehler und eine uneinheitliche Benennung (DSC-089, DSC-091).** Das
  englische Statusbericht-Beispiel führt zwei Messeingänge in einer Zeile zusammen und zeigt
  dadurch vier statt fünf Spannungszeilen; ein Querverweis steht doppelt. Der Anlernmodus
  heißt in Überschrift und Befehl verschieden.
- **Eine eigene Fehllesung wurde widerlegt und ist dokumentiert.** Eine zunächst vermutete
  Kopfzeile mit Seitenzahl in der englischen Fassung existiert nicht; bei 400 dpi ist der
  Bereich in beiden Fassungen leer. Der Befund steht in
  [CROSSCHECK_SN045_DE_EN.md](CROSSCHECK_SN045_DE_EN.md), statt stillschweigend zu
  verschwinden.
- **Was das nicht bedeutet:** Die 83 Segmente stehen wie alle übrigen auf `entwurf`. Die
  21 Seiten stehen auf `validated`, nicht auf `approved` – das setzt einen realen
  THITRONIK-Fachreview voraus, den es weiterhin nicht gibt. Eine Gegenprüfung gegen eine
  zweite Sprachfassung ersetzt keine technische Freigabe.

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt und **alle 323 mindestens visuell geprüft**: 286 stehen auf
  `inspected` und 37 auf `validated` – die sechzehn deutschen Inhaltsseiten 3–18 von
  DOC-BMA-SN044 nach fünf unabhängigen Segment-Gegenprüfungen sowie **alle 21 deutschen
  Inhaltsseiten 5–25 von DOC-IBA-SN045** nach vollständigem Gegenlesen gegen die englische
  Fassung derselben Auflage; keine Seite steht auf `extracted`. DOC-IBA-SN045 ist 247/247, DOC-BMA-SN044 72/72 und beide
  Kurzanleitungen sind je 2/2 geprüft.
  **Alle zehn Sprachteile** (Deutsch, Englisch, Französisch, Tschechisch, Dänisch,
  Spanisch, Italienisch, Niederländisch, Polnisch und Schwedisch) von DOC-IBA-SN045 sind
  vollständig geprüft.
  Alle neuen Records sind maschinell gegen die Original-PDF
  abgeglichen (Seitenmaße und Zeichenzahlen je Seite) – siehe
  `scripts/merge-page-records.mjs`. Die Prüfung hat dabei einen realen Fehler abgefangen:
  eine aus der Nachbarseite übernommene Zeichenzahl;
- **DOC-BMA-SN044 ist mit 72 von 72 Seiten vollständig geprüft** – Deutsch (1–19),
  Englisch (20–36), Französisch (37–53), Schwedisch (54–71) und Impressum (72). Die
  schwedischen Kopfzeilen sind sichtbar (Gegenprobe zu
  DSC-075), die Betriebsart D sagt schwedisch „8 minuter" (Endstand drei zu eins gegen
  Englisch, DSC-066), und der schwedische Befehl `fence av` ist im Seitenbild gesichert –
  die Vorlagenkontamination der englischen Seite 25 (DSC-067) ist damit auf beiden Seiten
  bildlich belegt. Diese vollständige Quellenlage ist seit dem 2026-08-09 in den
  **kompletten Aufgabensatz der Generation bis SN-044** überführt. Weil dieses Dokument
  als einziges eine echte Textebene hat, wurde jede Seite
  zusätzlich Zeile für Zeile gegen das Seitenbild gehalten – daraus stammen die stärksten
  Funde: der englische Teil druckt den **schwedischen** Geofencing-Befehl (DSC-067), die
  Betriebsartentabelle nennt für die Stellung D deutsch und französisch **8 Minuten**,
  englisch **8 seconds** (DSC-066), der englische Teil lehrt `arm`/`disarm`, während die
  abgebildete Geräte-Hilfe-SMS `SCHARF`/`UNSCHARF` führt (DSC-054), alle neun
  Beispiel-SMS-Bilder des englischen Teils zeigen **deutsche** Gerätetexte (DSC-072),
  alle vier falschen Querverweise sind wörtlich mitübersetzt (DSC-055; französisch für
  alle Stellen und alle vier Sprachfassungen bestätigt), die Konformitätsangabe ist in
  drei nichtdeutschen Fassungen unübersetzt und nennt eine nicht existierende „directive
  1995/5/EG" (DSC-071), der französische Teil enthält
  sinnverändernde Übersetzungsfehler samt fehlendem FAQ-Link (DSC-073, DSC-074), und die
  **Kopfzeilen des gesamten geprüften französischen Teils werden vom grauen Balken
  verdeckt** – keine sichtbaren Seitenzahlen, maschinell über die Zeichenreihenfolge des
  PDF nachgewiesen (DSC-075). Der schwedische Radius von 1000 m/1 km stellt Deutsch,
  Englisch und Schwedisch gegen die französischen 1500 m/1,5 km (DSC-078); alle vier
  Sprachfassungen zeigen deutsche SMS- und Kartenbilder (DSC-072). Auf den Schlussseiten
  liegt außerdem vollständig außerhalb des sichtbaren Seitenrahmens extrahierbarer Inhalt
  benachbarter Layoutteile – ein Screenreader kann nach der schwedischen Notizseite ein
  deutsches Inhaltsverzeichnis und nach dem Impressum ein viersprachiges Deckblatt lesen
  (DSC-081);
- **erste Synthese-Auswertung abgeschlossen:** In `DISCREPANCIES.md` stehen die vier
  Befehlssätze bis SN-044, die geräteseitige Hilfe-SMS und alle zehn vollständig geprüften
  Sprachen ab SN-045 nebeneinander. Ergebnis: Sprache und Generation sind unabhängige
  Parameter; die Hilfe-Liste ist kein verlässlicher Master. Zehn Sprachen ergeben zehn
  unterschiedliche Profile. Spanisch mischt `valla apagada` mit englischen
  Kapitelbefehlen und einer englischen Hilfe-SMS; Italienisch und Niederländisch wechseln
  innerhalb ihrer Fassung den Geofencing-Ausschaltbefehl; Polnisch mischt
  `ogrodzenie wyłączone` mit `fence off`. Schwedisch weist `fence pa` sowohl dem Ein- als
  auch dem Ausschalten zu, während das Kapitel zum Ausschalten `fence av` nennt
  (DSC-085). BLK-005 bleibt;
- **zweite Synthese-Auswertung abgeschlossen:** Die technischen Werte sind jetzt nach
  Gerätegeneration, Dokumentstand und Sprachfassung gegenübergestellt. Die Matrix bündelt
  Generationsauswahl, SIM-Format, Stromaufnahme, Versorgung, Konformitätsbezug,
  GPS-Kabellänge, Geofencing-Radius und Betriebsart D mit Dokument- und Seitenbelegen.
  Ergebnis: Selbst innerhalb einer Generation widersprechen sich Unterlagen oder
  Sprachfassungen; Mehrheiten und gleiche Zahlen sind keine technische Freigabe. Kein
  Reviewstatus wurde angehoben, und Rückfragen 2, 4, 14, 15 und 16 bleiben offen;
- **dritte Synthese-Auswertung abgeschlossen:** Die Zugänglichkeitsbefunde sind nach
  PDF-Struktur, Textebene, visueller Semantik, nicht lokalisiertem Bildinhalt,
  Status-LED am Gerät und ungeklärter Produktlogik getrennt. Ergebnis: Semantisches HTML
  kann die Quellstruktur neu ausdrücken, aber weder die farbabhängige Geräteanzeige noch
  widersprüchliche technische Funktionen reparieren. Automatische Browser- und axe-Tests
  bleiben klar von PDF/UA, manueller AT-Prüfung und physischer Kartenabnahme abgegrenzt;
- **DOC-IBA-SN045 vollständig geprüft:** Die dänischen
  Seiten 101–123 bestätigen die deutsche Bildbeschriftung „GPS-Antenne (Optional)", das
  unerklärte rote X, beide falschen Installationsverweise und den irreführenden
  Abschnittstitel 5.1. Der dänische Befehlssatz ist vollständig erfasst. Der spanische
  Teil auf den Seiten 124–149 mischt dagegen einen lokalisierten Geofencing-Befehl mit
  englischen Kapitelbefehlen und einer englischen Hilfe-SMS; seine letzte Seite trägt die
  falsche Fußzeile „Página 25 de 24". Der italienische Teil endet auf Seite 173 und bildet
  ein eigenes, intern gemischtes Befehlsprofil. Der niederländische Teil endet entgegen
  Inhaltsverzeichnis und Fußzeilen erst auf Seite 198 mit „Pagina 24 van 23". Er enthält
  unter anderem den übersetzten Produktnamen `Pro-Zoeker`, das unvollständige `positi`
  und drei Wörter für dieselbe Hauptnummer (DSC-083). Alle Befehle bleiben reine
  Quellenzitate unter BLK-005. Der polnische Teil umfasst 25 statt der angegebenen 24
  internen Seiten; eine fast leere Zusatzseite verschiebt Kapitel 3 bis 6. Er bestätigt
  die gemeinsamen Bild-, Querverweis-, Berechtigungs- und LED-Probleme und dupliziert
  ausgerechnet die Beschreibung des grün blinkenden Normalbetriebs falsch (DSC-084). Der
  schwedische Teil schließt auf PDF-Seite 247 regulär mit „Sida 22 av 22“ ab, bestätigt
  die gemeinsamen Vorlagenfehler und enthält den unmittelbaren Geofencing-Widerspruch
  `fence pa` gegen `fence av` (DSC-085);
- **Linkzugänglichkeit objektbezogen geprüft:** Blau unterstrichene Kartenadressen besitzen
  in EN/FR/CS/DA/ES/IT/NL/PL/SV auf einundzwanzig Meldungsseiten keine Linkannotation.
  Deutsche Seite 19 ist ebenfalls inert, Seite 20 besitzt dagegen zehn Annotationen für
  fünf sichtbare Adressen; ein Ziel ist zusätzlich gegenüber dem sichtbaren Text gekürzt
  (DSC-082);
- die belegten Befunde sind in [RUECKFRAGEN_THITRONIK.md](RUECKFRAGEN_THITRONIK.md) zu
  siebzehn entscheidungsreifen Fragen gebündelt; das Dokument ist zugleich die laufende
  Sammelstelle für weitere Funde, damit sie die Arbeit nicht mehr aufhalten;
- **beide deutschen Generationszweige sind mit je vierzehn Aufgaben vollständig:** 28 von
  28 Dateien sind aus geprüften Quellseiten gefüllt, keine ist mehr Platzhalter. Jede
  Aussage nennt Dokument, PDF-Seite und Seitenregion, jede Datei einen Änderungsgrund,
  alle stehen auf `entwurf`. Der komplette neue Satz
  `content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json` bis
  `14-support.json` wurde am 2026-08-09 aus den neu gerenderten deutschen Seiten 1–19 von
  DOC-BMA-SN044 und beiden Seiten von DOC-KA-SN044 erstellt. Nur die
  Generationsentscheidung verwendet zusätzlich DOC-IBA-SN045, Seiten 2, 6 und 25, und
  kennzeichnet offen, dass die Grenze „ab -045“ allein aus der neueren Fassung stammt;
- **der englische Pilot ab SN-045 umfasst alle vierzehn Aufgaben als belegte
  KI-Übersetzungsentwürfe:** Drei getrennte Slices 01–05, 06–10 und 11–14 besitzen
  task-level Quellenparität zum deutschen Master und bleiben `review_status: entwurf`.
  EN-01 bis EN-03 bereiten den unabhängigen Sprachreview vor, enthalten aber keine
  Entscheidung. Aufgabe 14 veröffentlicht die historischen Supportkontakte nicht; der
  Tokencheck protokolliert ausschließlich die erlaubte Entfernung der Rufnummer unter
  BLK-004 und verbietet weiterhin neue oder veränderte Kontakte;
- **das versionierte Segmentformat v1 ist implementiert und mit fünf Batches belegt:**
  `content/segments/v1/sn-001-044/de/` enthält 56 quellennahe Segmente aus
  DOC-BMA-SN044, PDF-Seiten 3–18. Die 17 Segmente der Seiten 3–7 decken Lieferumfang,
  Montageort, Anschlüsse, Betriebsarten, optionale GPS-Antenne und GPS-Diagnose ab. Sie
  wurden am 2026-08-10 bei 300 dpi unabhängig gegen Seitenbild, Region und Kontext
  validiert; dabei wurden eine ungenaue Überschrift, eine ausgelassene Folge fehlender
  Satellitendatenspeicherung und die zu enge Formulierung des roten GPS-Zustands
  korrigiert. Die 13 Segmente der Seiten 8–11 behandeln SIM-Voraussetzungen,
  Zielrufnummernrollen, Programmierstruktur, Löschweg und alle neun LED-Normalzustände;
  sie wurden bei 400 dpi unabhängig validiert. Dabei wurden die belegte Einsatzbereitschaft
  nach der Programmierung und die dritte formale Smartphone-Warnung ergänzt. Elf
  Segmente der Seiten 12–14 behandeln Meldungsfelder, Statusbericht, Diebstahl- und
  Spannungswarnung, die gesperrte Hilfe-SMS sowie Alarmsteuerung per SMS und Anruf. Sie
  wurden bei 400 dpi unabhängig validiert; dabei wurden die Immer-Aussage zum
  Restguthaben, der Auslöser des manuellen Alarms und die technische Möglichkeitsaussage
  zum Nummernzugriff präzisiert. Acht Segmente der Seiten 15–16 behandeln Geofencing,
  Status-/Positionsabfrage und drei Ausgangssteuerungsarten; sie wurden bei 400 dpi
  unabhängig validiert. Dabei wurde die einschränkende Nur-Aussage zur gültigen
  GPS-Position ergänzt. Sieben neue Segmente der Seiten 17–18 behandeln Kartennutzung,
  GPS-Ersatzposition und UTC-Zeit, technische Daten, Konformität, Entsorgung und Support.
  Sie wurden bei 400 dpi unabhängig validiert. Dabei wurde die Quellenregion des
  Kartensegments vervollständigt und die Bezeichnungen `Sendefrequenz`, `Schnittstellen`
  sowie `NMEA (Eingang GPS)` quellengetreu wiederhergestellt; kein technischer Wert wurde
  verändert. Die deutsche Inhalts-Extraktion reicht damit validiert bis zur letzten
  Inhaltsseite; PDF-Seite 19 ist nur eine leere Notizseite. Alle Segmente bleiben
  `entwurf` und
  besitzen Dokument, PDF-Seite, Seitenregion, Kontext, Sicherheitsklasse, aktuelle
  SHA-256-Prüfsumme, Änderungsgrund und gegebenenfalls DSC-Verweise. Das Intervall der
  Betriebsart D, die SMS-Anweisung der Seite 7, die Programmier-SMS, Beispielrufnummern,
  die ungeklärte Berechtigungsregel, der feste PIN-Wert, der widersprüchliche Radius sowie
  Koordinaten, Kartenlinks und Beispielbeträge erscheinen nur als begründete Auslassungen
  ohne gesperrten Bedienwert oder Befehlszeichenfolge;
- **Schema- und Referenzprüfung sichern die Segmente in CI ab:**
  `scripts/check-segments.mjs` prüft Schema v1, Pfad/Schlüssel, Dokumentinventar,
  Seitenstatus, Aufgabenzuordnung, DSC-Verweise, Prüfsummen, BLK-005 und die
  Segmentabdeckung aller Seiten ab `extracted`. Drei Unit-Tests prüfen zusätzlich Schema,
  Schlüssel/Prüfsummen und die Freigabesperre sicherheitsrelevanter Segmente. Die
  Datenbankmigration bleibt unverändert; der Importvertrag steht in
  `content/segments/README.md`;
- **die interne Review-Warteschlange arbeitet im Fixture-Modus jetzt mit dem kanonischen
  Segmentbestand:** `/review` zeigt 56 statt fälschlich 28 Aufgaben. Die Prioritäten P0
  (sicherheitskritisch), P1 (sicherheitsrelevant) und P2 (normal) werden als Text
  ausgegeben, standardmäßig P0 zuerst sortiert und separat gefiltert. 41 Segmente stehen
  auf P0, 14 auf P1 und eines auf P2. Der Generationsfilter verwendet nun den realen
  Schemawert `beide` statt des wirkungslosen Werts `both`. Neun Unit-Tests sichern
  Zuordnung, Sortierung, Beschriftung und die vollständige P0-Paketabdeckung. Die
  Browserprüfung bestätigt 56 Gesamt-, 41 reine P0-Treffer und die Paketgrößen
  6/11/11/8/5; bei 375 Pixeln hat die Seite keinen horizontalen Überlauf, während die
  breite Datentabelle kontrolliert in ihrer eigenen Region scrollt;
- **das erste technische Prüfpaket P0-01 ist reviewbereit:** Sechs P0-Segmente zu
  Pinbelegung, Versorgung, Messeingängen, gemeinsamer Batterie, Ausgängen, optionaler
  GPS-Antenne und technischen Daten sind in
  `docs/review-packets/P0-01-ELEKTRIK-SN044.md` gebündelt. Jeder Wert nennt genaue Quelle,
  Gegenquelle oder Quellenlücke, DSC-/Rückfrage und die benötigte THITRONIK-Entscheidung.
  `/review` zeigt die Paket-ID in einer eigenen Spalte; der direkte Filter liefert genau
  sechs Treffer. Das Paket enthält keine Freigabe und ändert keinen Segmentstatus;
- **das zweite technische Prüfpaket P0-02 ist reviewbereit:** Elf P0-Segmente zu SIM,
  PIN, Zielrufnummernrollen, Programmierung, Fernüberschreiben, physischem Löschen und
  Status-LED sind in `docs/review-packets/P0-02-SIM-ZIELRUFNUMMERN-SN044.md` gebündelt.
  34 Einzelentscheidungen besitzen Quelle, Gegenquelle oder Quellenlücke,
  DSC-/Rückfragenbezug und benötigte THITRONIK-Rolle. DOC-BMA-SN044, Seiten 8–11, wurde
  vollständig gegen die vorhandenen 400-dpi-Renderings gehalten; DOC-KA-SN044, Seiten
  1–2, wurde für die Gegenprüfung bei 300 dpi neu gerendert und gelesen. BLK-005/006
  bleiben intakt: keine Programmier-SMS, Beispielrufnummer, Guthabencode,
  Smartphone-Kennzeichnung oder abgeleitete Berechtigungsregel wird reproduziert. Der
  `/review`-Filter liefert genau elf P0-02-Treffer;
- **die sicherheitskritische Reviewabdeckung ist mit P0-03 bis P0-05 vollständig:**
  P0-03 bündelt elf Segmente zu Meldungsfeldern, 11,2-/12,5-V-Schwellen, Diebstahl-,
  Notruf- und WiPro-Alarm, Berechtigung und Geofencing in 29 Einzelentscheidungen.
  P0-04 umfasst acht Segmente zu Montage, Betriebsarten 0 bis F, der gesperrten
  Betriebsart D sowie GPS-Diagnose und Reflexionen in 20 Einzelentscheidungen. P0-05
  umfasst die letzten fünf P0-Segmente zu Ausgangssteuerung, letzter GPS-Position und
  UTC-Zeit in 13 Einzelentscheidungen. DOC-BMA-SN044, Seiten 3–7 und 12–17, wurden dafür
  am 2026-08-11 erneut bei 300 beziehungsweise 400 dpi gerendert und vollständig gelesen.
  SMS-Befehle, Radius, Berechtigungszeichen, Koordinaten, Kartenadressen und
  Beispielkontakte bleiben ausgelassen. Am 2026-08-23 kamen mit P0-06 bis P0-12 sieben
  Pakete der Generation ab SN-045 hinzu, die alle 63 sicherheitskritischen Segmente des
  deutschen SN-045-Teils abdecken; jedes ihrer Segmente wurde gegen die englische Fassung
  derselben Auflage gegengelesen. Damit sind **104 von 104 P0-Segmenten** genau einem
  entscheidungsreifen, aber vollständig offenen Dossier zugeordnet;
- **die Review-UI weist diese Abdeckung prüfbar aus:** Eine eigene Kennzahl zeigt 104/104,
  ein Paket-Select filtert P0-01 bis P0-12 unabhängig von der Freitextsuche, und die zwölf
  Direktlinks liefern exakt 6/11/11/8/5/3/7/14/10/11/11/7 Treffer. Ein Unit-Test bricht ab, sobald ein
  sicherheitskritisches Segment kein Paket besitzt; der Browsertest prüft Kennzahl,
  Direktlinks und Select. Kein Segmentstatus wurde dadurch geändert;
- **eine eigene Fehlklassifikation zur GPS-Kabellänge ist transparent korrigiert:** Die
  erneute 400-dpi-Gegenprüfung von DOC-BMA-SN044, PDF-Seiten 3, 21 und 38, gegen die
  bereits hochauflösend geprüfte Seite 55 zeigt: Deutsch, Französisch und Schwedisch
  formulieren eine feste Kabellänge von 2 m, nur Englisch eine Obergrenze. DSC-073,
  DSC-079, betroffene Seitenrecords, Rückfragenübersicht, Risikoliste und Segmentgrund
  dokumentieren die Korrektur. Offen bleibt die technische Bedeutung von 2 m;
- **die Sperren sind im gesamten SN-044-Aufgabensatz technisch gegengeprüft:** In `goal`,
  `prerequisites`, `warnings`, `steps`, `expected_result`, `error_cases` und `tables_md`
  steht keine SMS-Befehlszeichenfolge (BLK-005). Der Geofencing-Radius, das Intervall der
  Betriebsart D, eine unbelegte Autorisierungsregel für Zielrufnummern und lokalisierte
  Meldungs-Stichwörter bleiben unveröffentlicht. Ebenso wurden keine Beispielkoordinaten,
  Kartenlinks oder Beispielrufnummern übernommen. Wo eine Aufgabe deshalb keinen
  vollständigen Bedienweg anbieten kann, steht das ausdrücklich im `change_reason`;
- **zwei Abweichungen innerhalb derselben Generation sind durch die Aufgabengegenprüfung
  zusätzlich sichtbar geworden:** Dauergrün bedeutet in DOC-BMA-SN044 nur SMS-Versand,
  in DOC-KA-SN044 Empfang oder Versand (DSC-059/Rückfrage 12). Außerdem nennt die
  Bedienungsanleitung ca. 21 mA Normalstrom und 1999/5/EG, die Kurzanleitung ca. 16–21 mA
  und 2014/53/EU; der Anschlussabschnitt derselben Bedienungsanleitung spricht von 12 V,
  ihre technische Tabelle von 9–30 V (DSC-069/Rückfrage 2). Nichts davon wurde still
  vereinheitlicht;
- die Extraktion hat **vierzehn neue Registerpositionen** erzeugt (DSC-040 bis DSC-053).
  Dreizehn davon betreffen **den deutschen Text selbst**: drei falsche Querverweise, ein
  Verweis, der inhaltlich ins Leere führt, ein Statusbericht mit Feldern, die das
  zugehörige Kapitel nicht erklärt, und eine Berechtigungsregel, die nirgends
  ausgeschrieben ist. Das bestätigt die mit DSC-016 begonnene Linie: „geprüfter deutscher
  Master" heißt nicht „übernommener deutscher Text". DSC-053 betrifft dagegen die
  Sprachmarken: die Marke des dänischen Teils ist eine zusammengesetzte Flagge aus
  norwegischer und dänischer Hälfte – bei 150 dpi nicht erkennbar, mit dem neuen
  Ausschnittswerkzeug auf den Seiten 1 und 101 belegt;
- die Prüfung von DOC-BMA-SN044 hat **achtundzwanzig Registerpositionen** erzeugt
  (DSC-054 bis DSC-081), zwölf davon mit hoher oder mittelhoher Schwere. Der Ertrag
  liegt hier nicht in der Menge, sondern darin, dass sich drei bisher offene Punkte damit
  anders darstellen:
  - **BLK-005 ist kein Übersetzungsproblem.** Die Hilfe-SMS des Geräts ist auf Seite 13 als
    Abbildung wiedergegeben und nennt die Befehle, die das Gerät selbst für gültig hält.
    Sie widerspricht dem Fließtext desselben Handbuchs an vier Stellen: die Ausgangs- und
    Geofencing-Befehle sind dort englisch, im Handbuch deutsch; zwei im Handbuch genannte
    Befehle fehlen der Geräteliste, zwei Gerätebefehle dem Handbuch. Bisher stützte sich
    der Blocker auf den Vergleich zwischen vier Sprachfassungen – jetzt widersprechen sich
    Handbuch und Gerät **innerhalb einer Sprache und eines Dokuments** (DSC-054);
  - **BLK-006 besteht seit zwei Gerätegenerationen unverändert.** Auch bis SN-044 wird
    nirgends ausgesprochen, wie eine Zielrufnummer autorisiert wird; die Regel ist nur aus
    den Tabellenbeispielen zu erschließen, wo autorisierte Nummern mit Pluszeichen und die
    nicht autorisierte mit Minuszeichen angereiht werden (DSC-056);
  - **BLK-007 ist in der älteren Quelle geregelt.** Sie schreibt den Vorrang von Pin 3 nach
    Schalterstellung fest und koppelt Geofencing ausdrücklich an den Schärfzustand. Die
    Regel wird nicht übertragen, sondern als Rückfrage 9 vorgelegt (DSC-062);
- **ein Befund, den nur dieses Dokument liefern konnte:** Der Abfragecode der
  Programmier-SMS beginnt im Seitenbild mit einem Sternzeichen, das in der Textebene fehlt
  (DSC-058, bei 700 dpi belegt). Wer den Text vorgelesen bekommt oder kopiert, erhält einen
  Code ohne sein erstes Zeichen. Eine zeichenzählende Zugänglichkeitsprüfung hielte die
  Seite für unauffällig. Daraus folgt für den Content-Layer, dass Befehls- und
  Codebestandteile nicht aus der Textebene übernommen werden dürfen, sondern gegen das
  Seitenbild zu prüfen sind. Ebenfalls nur im Bild vorhanden: **alle neun Beispiel-SMS**
  der Seiten 12 und 13 samt der einzigen geräteseitigen Befehlsliste des Dokuments
  (DSC-060);
- [HANDOVER_PROMPT.md](HANDOVER_PROMPT.md) enthält einen wörtlich übergebbaren Startprompt
  für die Folgesitzung;
- Textebene von DOC-IBA-SN045 vollständig ausgewertet: nur 1 von 247 Seiten enthält
  lesbaren Text, 34 Seiten liefern ausschließlich Steuerzeichen (Details in
  `IST_AUDIT.md`);
- `npm run check` läuft erstmals vollständig grün; dabei zwei stille Fehler behoben:
  der Secret-Scanner schlug wegen eines zeilenübergreifenden Musters auf der korrekten,
  leeren `.env.example` an, und der Fortschrittsblock in diesem Dokument wurde wegen
  unmaskierter Klammern im Marker-Regex nie ersetzt (beides ohne Fehlermeldung);
- Versionsrouten, bestätigter Wechsel, korrekte serverseitige Seitensprache, Skip-Link,
  sichtbarer Fokus und semantische Status-LED-Tabelle implementiert;
- Content-Schema, Unit-Tests, Terminologie-, Token-, Secret- und Referenzchecks vorhanden;
- **vier neue Prüfungen, die jeweils sofort einen realen Fehler gefunden haben:**
  jede Markdown-Tabelle des Content-Layers muss darstellbar sein (fand eine LED-Tabelle,
  die in der Oberfläche spurlos verschwunden wäre, weil ein Fließtext-Absatz in der
  Tabelle stand); keine Koordinaten, Kartenlinks oder Rufnummern aus den Beispiel-SMS im
  Content-Layer (fand zwei Kartenlinks); jeder Schritt, Warnhinweis und Fehlerfall einer
  Nicht-Platzhalter-Aufgabe braucht eine eigene Quelle; jeder DSC-Verweis in `docs/` muss
  existieren und jede Nummer darf nur einmal vergeben sein (fand zwei doppelt
  vergebene Nummern). Der Tabellenparser liegt jetzt einmal in
  `lib/content/markdown-table.ts` statt in zwei Kopien, damit Renderer und Prüfung nicht
  auseinanderlaufen;
- die Sicherheitsklasse eines Warnhinweises steht in der Oberfläche als **Wort**
  („Hinweis", „Achtung", „Warnung, sicherheitskritisch") und nicht mehr nur als Rahmen und
  Hintergrundfarbe;
- Produktions-Build lokal erfolgreich;
- Referenzklon sauber und Push-URL `DISABLED`;
- Setup-Karten-Lieferdateien als klar markierte Entwürfe vorhanden. Sieben am 2026-08-11
  eingereichte Visualisierungen sind unverändert mit SHA-256 als Konzeptreferenzen
  archiviert und fachlich eingeordnet. Eine getrennte deutsche Vorder-/Rückseitenvariante
  liegt als maßhaltiges ID-1-SVG samt gerenderten PNG-Vorschauen vor; die Basiskarten
  blieben unverändert. Der Preflight prüft vier SVGs und die Integrität aller sieben
  Referenzbilder;
- Supabase CLI und Client-Bibliotheken exakt gepinnt;
- **Supabase-Härtung in CI gegen eine echte Datenbank bewiesen.** Der Job
  `Supabase reset and RLS tests` ist grün: `supabase start`, `db reset` (Schema, Migrationen
  und Fixtures), `db lint --fail-on error` und der pgTAP-Lauf mit den Negativtests aus
  `security_behavior_test.sql`. Damit sind die beiden früher ausnutzbaren Umgehungen des
  Vier-Augen-Prinzips nicht mehr nur konstruktiv adressiert, sondern im Verhalten geprüft;
- CI-Jobs `Code, content, security and build` (Prüfkette und Produktions-Build) grün;
- **Playwright und axe laufen: 64 von 64 Tests bestanden**, davon axe-Prüfungen auf
  WCAG-A/AA-Regeln über Chromium und ein 375-px-Mobilprofil. Alle vierzehn englischen
  Taskrouten sind einzeln enthalten; ein zusätzlicher Pfad prüft Entwurfsstatus, Sprache,
  Quellen, die zugängliche Pin-Tabelle und das Fehlen unbestätigter Supportlinks. Der
  neue Reduced-Motion-Pfad prüft sieben Kernrouten auf laufende Animationen, Autoplay und
  nicht reduzierte Bewegungsdauern. Der Produktions-Build erzeugt 51
  Seiten. Der erste echte Browserlauf hat drei reale Mängel aufgedeckt und behoben (siehe
  unten).

## Nicht als bestanden behaupten

- automatische Tests ersetzen keine Konformitätsaussage: axe deckt erfahrungsgemäß nur
  einen Teil der WCAG-Kriterien maschinell ab. Ein grüner Lauf heißt „keine der geprüften
  Regeln verletzt", nicht „WCAG 2.2 AA erfüllt";
- manuelle AT-, Zoom-, Reflow-, Forced-Colors- und Reduced-Motion-Matrix: offen;
- **die 131 Seitenrecords aus den SN-045-Batches und 51 der 67 neuen Records aus
  DOC-BMA-SN044 haben keine unabhängige Gegenprüfung durchlaufen.** Sie sind maschinell
  gegen die Original-PDF abgeglichen (Seitenmaße, Zeichenzahlen, keine Dopplungen), aber
  kein zweiter Prüfer hat die inhaltlichen Behauptungen gegen das Seitenbild gehalten.
  Von den 67 neuen DOC-BMA-SN044-Records stehen 51 auf `inspected` und sechzehn nach den
  Gegenprüfungen vom 2026-08-10 auf `validated`; keine Seite steht mehr auf `extracted`.
  Für die übrigen neuen Records gilt
  einschränkend: die tragenden Einzelbefunde – die Befehlsliste der Hilfe-SMS, das
  fehlende Sternzeichen, die Verweisziele, die Abschnittsnummern 2.8 und 2.4, die Befehle
  `fence av` und `Fence on`/`off`, die Tabellenzellen „8 Minuten"/„8 seconds", die
  Sternglyphen der englischen Seite 28 und die Richtlinienangabe „1995/5/EG" – sind
  jeweils hochauflösend nachgerendert oder im Seitenbild bestätigt und dadurch einzeln
  abgesichert. Das ersetzt keinen zweiten Prüfer, engt den ungeprüften Rest aber auf die
  beschreibenden Teile ein. Die schwedischen Geofencing-Befehle auf den Seiten 59 und 67
  sind inzwischen beide bei 500 dpi im Seitenbild gesichert. Dass die
  zweite Meinung real fehlt, hat sich am 2026-08-09 konkret gezeigt: Eine vergleichende
  Aussage im Record der englischen Seite 25 („einzige Stelle mit farbunabhängiger
  LED-Darstellung") war falsch – die deutschen Seiten 7 und 11 verwenden dieselben
  Balken – und wurde mit dokumentierter Korrektur berichtigt;
- **alle vierzehn neu gefüllten SN-044-Aufgaben** sind einzeln gegen die am 2026-08-09
  erzeugten Renderings gegengeprüft worden; der Vermerk steht je Datei im
  `change_reason`. Die Gegenprüfung korrigierte unter anderem eine unbelegte
  NMEA-Versionsangabe, hielt die zwei Bedeutungen von grünem Dauerlicht getrennt und
  bewahrte die abweichenden Strom- und Konformitätsangaben. Das ersetzt trotzdem keinen
  fachlichen Review: sämtliche technischen Werte sind weiterhin unbestätigt;
- Netlify Preview, Zugriffsschutz und internes Staging: nicht verbunden/nicht abgenommen;
- Karten-Andruck, finaler QR-Code, bestätigte URL, NFC-Inlay und -Ziel, Supportdaten,
  druckfähige Logo-/Produktassets, Kerbengeometrie, Braille, Reflexion und Tests mit
  betroffenen Personen: offen. Die deutsche Beispielvariante ist keine Produktionsfreigabe;
- englischer Pilot: Aufgaben 01 bis 14 ab SN-045 als belegte KI-Übersetzungsentwürfe,
  geschützte Token und task-level Dokument-/Seitenmengen maschinell abgeglichen; EN-01
  bis EN-03 sind vorbereitet, aber ohne unabhängigen Sprachreview;
- technische und sicherheitskritische Inhalte: nicht fachlich freigegeben.

## Release-Blocker

1. Die Befehlssprache der SMS-Kommandos ist widersprüchlich dokumentiert (DSC-013,
   DSC-014, DSC-026, DSC-033, DSC-085). Zehn geprüfte Sprachfassungen dokumentieren **zehn
   unterschiedliche Befehlsprofile**; Spanisch und Polnisch sind lokalisierte/englische Mischsätze,
   nur
   `a %min%` lautet überall gleich. Die
   Vergleichstabelle steht in DSC-033, die Frage an THITRONIK in
   [RUECKFRAGEN_THITRONIK.md](RUECKFRAGEN_THITRONIK.md) Punkt 1. Innerhalb einer Fassung
   stehen zudem `POS` und `position` nebeneinander, und im Französischen sind drei von vier
   Ausgangsbefehlen lokalisiert, der vierte nicht. Kein Befehl darf ohne technische Klärung
   veröffentlicht werden.
   **Verschärft am 2026-08-08 (DSC-054):** Im Handbuch bis SN-044 widersprechen sich
   Handbuch und **Gerät** – innerhalb einer Sprache und eines Dokuments. Die als Abbildung
   wiedergegebene Hilfe-SMS des Geräts führt die Ausgangs- und Geofencing-Befehle
   **englisch** (`A ON`, `A PULSE`, `FENCE ON`, `FENCE OFF`), der Fließtext derselben
   Anleitung **deutsch** (`A an`, `A impuls`, `Fence an`, `fence aus`). Zwei im Handbuch
   genannte Befehle fehlen in der Geräteliste ganz, zwei Gerätebefehle kommen im Handbuch
   nicht vor. Damit ist ausgeschlossen, dass die Unterschiede allein Übersetzungsfehler
   sind – die Unklarheit liegt im Produkt, nicht in der Übersetzung.
   **Erneut verschärft am 2026-08-08 (DSC-067):** Die englische Seite 25 desselben
   Handbuchs druckt als Geofencing-Ausschaltbefehl `fence av` – den Befehl des
   **schwedischen** Teils –, während der eigene englische Abschnitt 2.4 `Fence on`/`off`
   schreibt (am 2026-08-09 im Seitenbild bestätigt). Vorlagenkontamination zwischen
   Sprachfassungen ist damit innerhalb eines Dokuments belegt; gedruckte Befehle sind ohne
   technische Bestätigung grundsätzlich unzuverlässig.
   **Spiegelbildlich bestätigt am 2026-08-09 (DSC-054, DSC-072):** Der englische Teil
   lehrt `arm`/`disarm`, die auf der gegenüberliegenden Seite abgebildete Hilfe-SMS des
   Geräts führt `SCHARF`/`UNSCHARF`; umgekehrt decken sich die englischen Ausgangsbefehle
   mit der Geräteliste, die deutschen nicht. Jede Sprachfassung stimmt mit einem anderen
   Teil der Geräteliste überein.
   **Spanisch bestätigt am 2026-08-09:** Die Fassung nennt zunächst `valla apagada`,
   übernimmt in Kapitel 5 aber englische Befehle und sogar die vollständige englische
   Hilfe-SMS. Zusätzlich nennt das Kapitel `status`/`position`, die Hilfe-SMS
   `STATUS`/`POS`. Anleitung und Geräteliste widersprechen sich damit innerhalb eines
   einzigen Sprachteils mehrfach.
   **Italienisch und Niederländisch bestätigt am 2026-08-09:** Beide Fassungen wechseln
   zwischen GPS-Diagnose und Kapitel 5 den Geofencing-Ausschaltbefehl. Niederländisch
   druckt zusätzlich den Positionsbefehl nur als `positi`, während die Hilfe-SMS `POS`
   nennt (DSC-033, DSC-083). Damit sind auch Profil sieben und acht intern
   widersprüchlich.
   **Polnisch bestätigt am 2026-08-09:** Die Diagnose nennt `ogrodzenie wyłączone`,
   Kapitel 5 dagegen `fence off`; die übrigen Kapitelbefehle und die Hilfe-SMS bleiben
   englisch und stimmen trotzdem nicht vollständig überein. Damit ist auch Profil neun
   intern gemischt (DSC-033).
   **Schwedisch bestätigt am 2026-08-09:** Die Abschaltanweisung auf Seite 235 nennt
   `fence pa`, das Kapitel definiert dieselbe Zeichenfolge aber als Einschaltbefehl und
   nennt zum Ausschalten `fence av`. Damit ist Profil zehn nicht nur gemischt, sondern
   bei derselben Funktion unmittelbar widersprüchlich (DSC-033, DSC-085).
2. Die Sprachfassungen sind inhaltlich nicht gleichwertig: die SIM-Anbieterempfehlung
   lautet deutsch t-mobile/Vodafone, englisch nur allgemein „M2M-Karte" und französisch
   namentlich DOMOTEC (DSC-027). Zusätzlich weicht ein technischer Wert ab (DSC-020).
   Solange unklar ist, welche Fassung gilt, kann kein sprachübergreifender Master
   entstehen.
   **Bis SN-044 zusätzlich (DSC-072):** Der englische Teil verwendet unverändert die
   deutschen Beispiel-SMS-Bilder – in welcher Sprache ein Gerät dieser Generation
   tatsächlich meldet, ist unbelegt (Rückfrage 17); die englische Konformitätsangabe
   nennt eine nicht existierende Richtlinie (DSC-071); das Betriebsart-D-Intervall
   widerspricht sich zwischen den Fassungen um den Faktor 60 (DSC-066, englische Fassung
   als Ausreißer gegen Deutsch und Französisch); der französische Teil enthält
   sinnverändernde Übersetzungsfehler und lässt den angekündigten FAQ-Link weg (DSC-073,
   DSC-074); die englische Fassung verliert das funktionstragende doppelte A der
   Adressbuch-Empfehlung (DSC-076); der französische Teil nennt **1500 m** als
   Diebstahlmeldungs-Radius – dritter Wert neben 1000 m und 900 m (DSC-078); sein
   Statusbefehl lautet „Statut" statt „Status" (DSC-067); und sein Konformitätsabschnitt
   ist unübersetzt englisch samt falscher Richtlinie (DSC-071).
3. Der genaue Fundort und die Leseregel der Seriennummer am Gerät sind nicht technisch
   bestätigt; die Startseite darf deshalb keine Ziffernregel behaupten (DSC-023).
4. Karte: finale URL, Supportdaten, Mindestschrift, Braille-Dienstleister und physische
   Tests fehlen. Die Supportnummer ist zusätzlich unklar: die französische Fassung nennt
   eine offensichtlich beschädigte Rufnummer (DSC-032).
5. Kein geschützter Netlify-Deploy und keine menschliche Preview-Abnahme.
6. **Die Berechtigungsregel für Zielrufnummern ist nicht belegt (DSC-044, BLK-006).**
   Autorisierte und nicht autorisierte Nummern unterscheiden sich in der Quelle erkennbar
   nur durch ein Zeichen vor der Nummer, das der Fließtext nirgends erklärt. Ein falsches
   Zeichen kippt die Steuerberechtigung. Die Webanleitung darf die Regel nicht nennen,
   solange sie unbelegt ist – und lässt Nutzende damit in genau den Fehler laufen, den sie
   verhindern soll. Das ist keine redaktionelle Lücke, sondern ein Sicherheitsproblem.
7. **Unklar, ob Geofencing ohne WiPro III überhaupt meldet (DSC-042, BLK-007).** Die
   Quelle knüpft die Diebstahlmeldung an einer Stelle an eine aktivierte WiPro III
   (safe.lock) und beschreibt Geofencing an anderer Stelle unabhängig davon. Ebenso
   ungeregelt: der Vorrang zwischen Pin 3 und der automatischen Kopplung an den
   Scharf-/Unscharfzustand.
   **Teilantwort aus der älteren Quelle (DSC-062):** Das Handbuch bis SN-044 regelt beides
   ausdrücklich – Geofencing wird in den Schalterstellungen 8 und B über Pin 3 und sonst
   per SMS geschaltet, und bei geschärfter WiPro ist es automatisch aktiv. Diese Regel wird
   **nicht** auf die Generation ab SN-045 übertragen; sie liegt als Rückfrage 9 vor. Eine
   Bestätigung würde diesen Blocker auflösen.
8. **Die Zustandsanzeige ist am Gerät nicht barrierefrei ablesbar (DSC-047, DSC-059).**
   Ursprünglich nur für die dreistufige GPS-Diagnose ab SN-045 festgestellt, wo zwei der
   drei Zustände ausschließlich über die LED-Farbe unterscheidbar sind. Die Prüfung des
   Handbuchs bis SN-044 zeigt den Mangel in weit größerem Umfang: dort führt die
   Zustandsliste **neun** Betriebszustände, die in zwei Gruppen gleicher Blinkart zerfallen
   – sechs blinkende und drei dauerleuchtende. Innerhalb jeder Gruppe ist die Farbe das
   einzige unterscheidende Merkmal. Wer Rot, Gelb und Grün nicht sicher trennt, kann neun
   Gerätezustände auf zwei reduzieren und weder „kein GSM-Empfang" von „alles in Ordnung"
   noch „SIM-Karte defekt" von „Gerät versendet eine SMS" unterscheiden. Auch der
   Löschvorgang der Zielrufnummern hängt an einer farbcodierten Abbruchbedingung. Ein
   farbunabhängiges Merkmal ist in keiner der beiden Generationen dokumentiert. Das ist die
   umfangreichste gefundene Barriere, die **am Gerät** sitzt und nicht am Dokument – die
   HTML-Anleitung kann sie beschreiben, aber nicht auflösen. Zusätzlich widersprechen sich
   die zwei Unterlagen bis SN-044 bei grünem Dauerlicht: Die Bedienungsanleitung nennt nur
   den SMS-Versand, die Kurzanleitung Empfang oder Versand. Auch die fachliche Bedeutung
   des rein farbcodierten Zustands ist damit ungeklärt (Rückfrage 12).
9. **Der Geofencing-Radius unterscheidet sich zwischen den Generationen (DSC-061).** Bis
   SN-044 nennt die Quelle ca. 1000 m beziehungsweise ca. 1 km, ab SN-045 rund 900 m. Ob
   das eine bewusste Änderung oder ein Fehler ist, lässt sich aus den Quellen nicht
   entscheiden; beide Werte sind fachlich unbestätigt. Bis zur Klärung wird kein Wert in
   den jeweils anderen Generationszweig übernommen.
   **Erweitert am 2026-08-08 (DSC-069):** Auch die technischen Daten weichen ab –
   Micro-SIM gegen Nano-SIM, feste 21 mA gegen die Spanne 16–21 mA, Richtlinie 1999/5/EG
   gegen 2014/53/EU. Das SIM-Format ist unmittelbar nutzerrelevant: Wer nach der falschen
   Generationsanleitung eine SIM beschafft, hält die falsche Kartengröße in der Hand.
   **Erweitert am 2026-08-09:** Selbst die zwei Unterlagen bis SN-044 widersprechen sich:
   DOC-KA-SN044 nennt 16–21 mA und 2014/53/EU, DOC-BMA-SN044 21 mA und 1999/5/EG. Im
   Anschlusskapitel des BMA stehen zudem 12 V, in seiner technischen Tabelle 9–30 V. Der
   Pilot zeigt diese Werte getrennt und wartet mit einer Auswahl auf Rückfrage 2.
10. **Das Intervall der Betriebsart D ist widersprüchlich dokumentiert (DSC-066).** Die
    deutsche Tabelle nennt 8 Minuten, die englische 8 seconds – Faktor 60, beide Zellen
    hochauflösend gesichert (Rückfrage 16). C und D sind die Ortungsmodi mit dem
    dichtesten Meldeintervall; bis zur Klärung nennt der Pilot für die Betriebsart D kein
    Intervall.

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. `extracted` bedeutet, dass
versionierte, quellennahe Segmente vorliegen, aber noch keine unabhängige Validierung.
`entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf ist keine
WCAG-Konformitätserklärung.
