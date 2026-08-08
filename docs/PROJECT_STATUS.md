# Projektstatus

Stand: 2026-08-08. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 30.7 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 85 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 14.8 %      |
| Content-Modell und deutscher Master      | 20 %    | 52 %        |
| Setup-Karte                              | 10 %    | 30 %        |
| Webanleitung und Review-UI               | 20 %    | 30 %        |
| Übersetzungspilot                        | 10 %    | 5 %         |
| Accessibility-, Security- und Content-QA | 10 %    | 18 %        |
| Staging und Übergabe                     | 5 %     | 35 %        |

**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):

| Dokument      | Seiten | Fortschritt |
| ------------- | ------ | ----------- |
| DOC-BMA-SN044 | 72     | 5.6 %       |
| DOC-IBA-SN045 | 247    | 17.3 %      |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 7 · Nächste Aktion: Die verbliebenen 132 ungeprueften Seiten in Batches abarbeiten: DOC-BMA-SN044 Seiten 17-72 sowie DOC-IBA-SN045 Seiten 101-120, 145-150, 173-190, 198-220, 233-240 und 247. Die Seitenpruefung bleibt der groesste Hebel (20 Prozent Gewicht). Vorrangig bleibt DOC-BMA-SN044: es ist die einzige Quelle fuer die Generation bis SN-044, jetzt mit 16 von 72 Seiten geprueft, und als einziges Dokument mit echter Textebene erlaubt es die Gegenueberstellung von extrahiertem Text und Seitenbild. Genau daraus stammt der staerkste Fund vom 2026-08-08: die Hilfe-SMS des Geraets nennt andere Befehle als sein eigenes Handbuch (DSC-054). Vorgehen und Kontext stehen in docs/HANDOVER_PROMPT.md.

<!-- PROGRESS:END -->

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt; davon **191 visuell geprüft** (`inspected`): DOC-IBA-SN045
  Seiten 1–100 und 76 weitere Seiten aus den Batches 121–246, dazu **16 Seiten
  DOC-BMA-SN044** und beide Kurzanleitungen. **Vier vollständige Sprachteile** (Deutsch,
  Englisch, Französisch, Tschechisch) sind geprüft; die übrigen Sprachteile sind
  angefangen. Alle neuen Records sind maschinell gegen die Original-PDF abgeglichen
  (Seitenmaße und Zeichenzahlen je Seite) – siehe `scripts/merge-page-records.mjs`. Die
  Prüfung hat dabei einen realen Fehler abgefangen: eine aus der Nachbarseite übernommene
  Zeichenzahl;
- **DOC-BMA-SN044 Seiten 6–16 sind geprüft und decken die Abschnitte 1.5 bis 2.7 ab** –
  Anschluss des Moduls, GPS-Antenne und GPS-Diagnose, SIM-Karte, Programmieren und Löschen
  der Zielrufnummern, Status-LED, empfangene Meldungen, Steuerung per SMS und per Anruf,
  Geofencing, Statusbericht, Positionsabfrage und Ausgänge. Damit liegt erstmals die
  **inhaltliche Grundlage für die dreizehn fehlenden Aufgaben der Generation bis SN-044**
  vor. Weil dieses Dokument als einziges eine echte Textebene hat, wurde jede Seite
  zusätzlich Zeile für Zeile gegen das Seitenbild gehalten – genau daraus stammen die
  stärksten Funde dieser Sitzung;
- die belegten Befunde sind in [RUECKFRAGEN_THITRONIK.md](RUECKFRAGEN_THITRONIK.md) zu
  dreizehn entscheidungsreifen Fragen gebündelt; das Dokument ist zugleich die laufende
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
- die Prüfung von DOC-BMA-SN044 hat **zwölf weitere Registerpositionen** erzeugt (DSC-054
  bis DSC-065), fünf davon mit hoher Schwere. Der Ertrag liegt hier nicht in der Menge,
  sondern darin, dass sich drei bisher offene Punkte damit anders darstellen:
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
- **die 76 Seitenrecords aus dem SN-045-Batch und die 11 neuen aus DOC-BMA-SN044 haben
  keine unabhängige Gegenprüfung durchlaufen.** Sie sind maschinell gegen die Original-PDF
  abgeglichen (Seitenmaße, Zeichenzahlen, keine Dopplungen), aber kein zweiter Prüfer hat
  die inhaltlichen Behauptungen gegen das Seitenbild gehalten. Der Status `inspected`
  bedeutet ohnehin nur „visuell angesehen"; hier fehlt zusätzlich die eingebaute zweite
  Meinung. Nachzuholen spätestens bei der Segment-Extraktion. Für die elf neuen Records
  gilt einschränkend: die tragenden Einzelbefunde – die Befehlsliste der Hilfe-SMS, das
  fehlende Sternzeichen, das fette Smartphone-Kennzeichen, die Aussagen zu den
  Aderfarben – sind jeweils bei 400 bis 700 dpi nachgerendert und dadurch einzeln
  abgesichert; die Verweisziele auf Seite 15 sind im Seitenbild bestätigt statt aus der
  Textebene übernommen. Das ersetzt keinen zweiten Prüfer, engt den ungeprüften Rest aber
  auf die beschreibenden Teile ein;
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
   DSC-014, DSC-026, DSC-033). Vier geprüfte Sprachfassungen dokumentieren **vier
   vollständig eigene Befehlssätze**; nur `a %min%` lautet überall gleich. Die
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
2. Die Sprachfassungen sind inhaltlich nicht gleichwertig: die SIM-Anbieterempfehlung
   lautet deutsch t-mobile/Vodafone, englisch nur allgemein „M2M-Karte" und französisch
   namentlich DOMOTEC (DSC-027). Zusätzlich weicht ein technischer Wert ab (DSC-020).
   Solange unklar ist, welche Fassung gilt, kann kein sprachübergreifender Master
   entstehen.
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

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. Es ist weder extrahiert noch
fachlich validiert. `entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf
ist keine WCAG-Konformitätserklärung.
