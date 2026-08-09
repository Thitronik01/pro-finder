# Projektstatus

Stand: 2026-08-09. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 32.6 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 85 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 24.3 %      |
| Content-Modell und deutscher Master      | 20 %    | 52 %        |
| Setup-Karte                              | 10 %    | 30 %        |
| Webanleitung und Review-UI               | 20 %    | 30 %        |
| Übersetzungspilot                        | 10 %    | 5 %         |
| Accessibility-, Security- und Content-QA | 10 %    | 18 %        |
| Staging und Übergabe                     | 5 %     | 35 %        |

**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):

| Dokument      | Seiten | Fortschritt |
| ------------- | ------ | ----------- |
| DOC-BMA-SN044 | 72     | 25 %        |
| DOC-IBA-SN045 | 247    | 24.1 %      |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 7 · Nächste Aktion: Die letzten 9 ungeprueften Seiten von DOC-IBA-SN045 abschliessen: zuerst die schwedischen Seiten 233-240, danach die Schlussseite 247 mit technischen Daten, Konformitaet und Support. Inhaltsverzeichnisziele, Betriebsarten, Zielrufnummern-Syntax, LED-Normalbetrieb, englische Geraetetexte, Kartenlink-Annotationen, Geofencing-Befehle und Querverweise gegen die neun vollstaendig geprueften Sprachteile halten; DSC-021/022/033/040/047/082/084, BLK-005 und BLK-006 beachten und Schwedisch nicht muttersprachlich freigeben. Danach ist die Seitenpruefung mit 323 von 323 Seiten komplett; Synthese-Auswertung und Register auf zehn SN-045-Sprachprofile abschliessen. Parallel koennen die 13 fehlenden Aufgaben der Generation bis SN-044 geschrieben werden - die deutsche Quellenlage ist komplett. Vorgehen und Kontext stehen in docs/HANDOVER_PROMPT.md.

<!-- PROGRESS:END -->

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt; davon **314 visuell geprüft** (`inspected`): DOC-IBA-SN045
  Seiten 1–232 und 241–246 mit nur neun schwedischen Lücken, das vollständige
  **DOC-BMA-SN044 mit 72 Seiten** und beide Kurzanleitungen. **Neun vollständige
  Sprachteile** (Deutsch, Englisch, Französisch, Tschechisch, Dänisch, Spanisch,
  Italienisch, Niederländisch und Polnisch) von DOC-IBA-SN045 sind geprüft.
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
  bildlich belegt. Damit liegt die **komplette
  inhaltliche Grundlage für die dreizehn fehlenden Aufgaben der Generation bis SN-044**
  vor. Weil dieses Dokument als einziges eine echte Textebene hat, wurde jede Seite
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
- **erste Synthese-Auswertung abgeschlossen und erweitert:** In `DISCREPANCIES.md` stehen
  die vier Befehlssätze bis SN-044, die geräteseitige Hilfe-SMS und die neun vollständig
  geprüften Sprachen ab SN-045 nebeneinander. Ergebnis: Sprache und Generation sind
  unabhängige Parameter; die Hilfe-Liste ist kein verlässlicher Master. Acht Sprachen
  ergeben neun unterschiedliche Profile. Spanisch mischt `valla apagada` mit englischen
  Kapitelbefehlen und einer englischen Hilfe-SMS; Italienisch und Niederländisch wechseln
  innerhalb ihrer Fassung den Geofencing-Ausschaltbefehl; Polnisch mischt
  `ogrodzenie wyłączone` mit `fence off`. Selbst im schwedischen Teil
  konkurrieren `oskarp` und `urkopplad`. BLK-005 bleibt;
- **DOC-IBA-SN045, dänischer, spanischer, italienischer, niederländischer und polnischer Teil
  vollständig geprüft:** Die dänischen
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
  ausgerechnet die Beschreibung des grün blinkenden Normalbetriebs falsch (DSC-084);
- **Linkzugänglichkeit objektbezogen geprüft:** Blau unterstrichene Kartenadressen besitzen
  in EN/FR/CS/DA/ES/IT/NL/PL auf neunzehn Meldungsseiten keine Linkannotation. Deutsche Seite
  19 ist ebenfalls inert, Seite 20 besitzt dagegen zehn Annotationen für fünf sichtbare
  Adressen; ein Ziel ist zusätzlich gegenüber dem sichtbaren Text gekürzt (DSC-082);
- die belegten Befunde sind in [RUECKFRAGEN_THITRONIK.md](RUECKFRAGEN_THITRONIK.md) zu
  siebzehn entscheidungsreifen Fragen gebündelt; das Dokument ist zugleich die laufende
  Sammelstelle für weitere Funde, damit sie die Arbeit nicht mehr aufhalten;
- **alle vierzehn deutschen Aufgaben sind aus geprüften Quellseiten gefüllt**; keine ist
  mehr Platzhalter. Jede Aussage nennt Dokument, PDF-Seite und Seitenregion, jede Datei
  einen Änderungsgrund, alle stehen auf `entwurf`. Die acht zuletzt gefüllten Aufgaben
  sind bewusst **ohne** die SMS-Befehle geschrieben (BLK-005); wo eine Aufgabe dadurch
  unvollständig bleibt – Ausgänge, Geofencing, Zielrufnummern, Fehlerbehebung – steht das
  ausdrücklich im `change_reason`, statt die Lücke zu verdecken;
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
- Setup-Karten-Lieferdateien als klar markierte Entwürfe vorhanden;
- Supabase CLI und Client-Bibliotheken exakt gepinnt;
- **Supabase-Härtung in CI gegen eine echte Datenbank bewiesen.** Der Job
  `Supabase reset and RLS tests` ist grün: `supabase start`, `db reset` (Schema, Migrationen
  und Fixtures), `db lint --fail-on error` und der pgTAP-Lauf mit den Negativtests aus
  `security_behavior_test.sql`. Damit sind die beiden früher ausnutzbaren Umgehungen des
  Vier-Augen-Prinzips nicht mehr nur konstruktiv adressiert, sondern im Verhalten geprüft;
- CI-Jobs `Code, content, security and build` (Prüfkette und Produktions-Build) grün;
- **Playwright und axe laufen: 32 von 32 Tests bestanden**, davon axe-Prüfungen auf
  WCAG-A/AA-Regeln über Chromium und ein 375-px-Mobilprofil. Der erste echte Browserlauf
  hat drei reale Mängel aufgedeckt und behoben (siehe unten).

## Nicht als bestanden behaupten

- automatische Tests ersetzen keine Konformitätsaussage: axe deckt erfahrungsgemäß nur
  einen Teil der WCAG-Kriterien maschinell ab. Ein grüner Lauf heißt „keine der geprüften
  Regeln verletzt", nicht „WCAG 2.2 AA erfüllt";
- manuelle AT-, Zoom-, Reflow-, Forced-Colors- und Reduced-Motion-Matrix: offen;
- **die 122 Seitenrecords aus den SN-045-Batches und die 67 neuen aus DOC-BMA-SN044 haben
  keine unabhängige Gegenprüfung durchlaufen.** Sie sind maschinell gegen die Original-PDF
  abgeglichen (Seitenmaße, Zeichenzahlen, keine Dopplungen), aber kein zweiter Prüfer hat
  die inhaltlichen Behauptungen gegen das Seitenbild gehalten. Der Status `inspected`
  bedeutet ohnehin nur „visuell angesehen"; hier fehlt zusätzlich die eingebaute zweite
  Meinung. Nachzuholen spätestens bei der Segment-Extraktion. Für die neuen Records gilt
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
- **alle acht** neu gefüllten deutschen Aufgaben sind einzeln gegen die Quellseiten
  gegengeprüft worden; der Vermerk steht je Datei im `change_reason`. Der Schritt ist
  nicht formal: entfernt wurden unter anderem ein frei erfundenes erwartetes Ergebnis,
  eine nicht belegbare Farbangabe, zwei Kartenlinks und – im Statusbericht – ein zugedeckter
  Widerspruch zwischen der Betriebsartentabelle und dem Fließtext. Das ersetzt trotzdem
  keinen fachlichen Review: sämtliche technischen Werte sind weiterhin unbestätigt;
- Netlify Preview, Zugriffsschutz und internes Staging: nicht verbunden/nicht abgenommen;
- Karten-Andruck, QR, NFC, Braille, Reflexion und Tests mit betroffenen Personen: offen;
- englischer Pilot: nur Struktur/Platzhalter, kein unabhängiger Sprachreview;
- technische und sicherheitskritische Inhalte: nicht fachlich freigegeben.

## Release-Blocker

1. Die Befehlssprache der SMS-Kommandos ist widersprüchlich dokumentiert (DSC-013,
   DSC-014, DSC-026, DSC-033). Neun geprüfte Sprachfassungen dokumentieren **neun
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
   HTML-Anleitung kann sie beschreiben, aber nicht auflösen.
9. **Der Geofencing-Radius unterscheidet sich zwischen den Generationen (DSC-061).** Bis
   SN-044 nennt die Quelle ca. 1000 m beziehungsweise ca. 1 km, ab SN-045 rund 900 m. Ob
   das eine bewusste Änderung oder ein Fehler ist, lässt sich aus den Quellen nicht
   entscheiden; beide Werte sind fachlich unbestätigt. Bis zur Klärung wird kein Wert in
   den jeweils anderen Generationszweig übernommen.
   **Erweitert am 2026-08-08 (DSC-069):** Auch die technischen Daten weichen ab –
   Micro-SIM gegen Nano-SIM, feste 21 mA gegen die Spanne 16–21 mA, Richtlinie 1999/5/EG
   gegen 2014/53/EU. Das SIM-Format ist unmittelbar nutzerrelevant: Wer nach der falschen
   Generationsanleitung eine SIM beschafft, hält die falsche Kartengröße in der Hand.
10. **Das Intervall der Betriebsart D ist widersprüchlich dokumentiert (DSC-066).** Die
    deutsche Tabelle nennt 8 Minuten, die englische 8 seconds – Faktor 60, beide Zellen
    hochauflösend gesichert (Rückfrage 16). C und D sind die Ortungsmodi mit dem
    dichtesten Meldeintervall; bis zur Klärung nennt der Pilot für die Betriebsart D kein
    Intervall.

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. Es ist weder extrahiert noch
fachlich validiert. `entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf
ist keine WCAG-Konformitätserklärung.
