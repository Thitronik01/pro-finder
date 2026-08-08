# Projektstatus

Stand: 2026-08-08. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 30.5 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 85 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 13.9 %      |
| Content-Modell und deutscher Master      | 20 %    | 52 %        |
| Setup-Karte                              | 10 %    | 30 %        |
| Webanleitung und Review-UI               | 20 %    | 30 %        |
| Übersetzungspilot                        | 10 %    | 5 %         |
| Accessibility-, Security- und Content-QA | 10 %    | 18 %        |
| Staging und Übergabe                     | 5 %     | 35 %        |

**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):

| Dokument      | Seiten | Fortschritt |
| ------------- | ------ | ----------- |
| DOC-BMA-SN044 | 72     | 1.7 %       |
| DOC-IBA-SN045 | 247    | 17.3 %      |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 7 · Nächste Aktion: Die verbliebenen 143 ungeprueften Seiten in Batches abarbeiten: DOC-IBA-SN045 Seiten 101-120, 145-150, 173-190, 198-220, 233-240 und 247 sowie DOC-BMA-SN044 Seiten 6-72. Die Seitenpruefung bleibt der groesste Hebel (20 Prozent Gewicht, aktuell 13,9 Prozent). Vorrangig ist DOC-BMA-SN044: es ist die einzige Quelle fuer die Generation bis SN-044, erst mit 5 von 72 Seiten geprueft, und als einziges Dokument mit echter Textebene erlaubt es die Gegenueberstellung von Text und Bild. Vorgehen und Kontext stehen in docs/HANDOVER_PROMPT.md.

<!-- PROGRESS:END -->

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt; davon **180 visuell geprüft** (`inspected`): DOC-IBA-SN045
  Seiten 1–100 und 76 weitere Seiten aus den Batches 121–246, dazu 5 Seiten
  DOC-BMA-SN044 und beide Kurzanleitungen. **Vier vollständige Sprachteile** (Deutsch,
  Englisch, Französisch, Tschechisch) sind geprüft; die übrigen Sprachteile sind
  angefangen. Die 76 neuen Records sind maschinell gegen die Original-PDF abgeglichen
  (Seitenmaße und Zeichenzahlen je Seite) – siehe `scripts/merge-page-records.mjs`;
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
- **die 76 neuen Seitenrecords haben keine unabhängige Gegenprüfung durchlaufen.** Sie
  sind maschinell gegen die Original-PDF abgeglichen (Seitenmaße, Zeichenzahlen, keine
  Dopplungen), aber kein zweiter Prüfer hat die inhaltlichen Behauptungen gegen das
  Seitenbild gehalten. Der Status `inspected` bedeutet ohnehin nur „visuell angesehen";
  hier fehlt zusätzlich die eingebaute zweite Meinung. Nachzuholen spätestens bei der
  Segment-Extraktion;
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
8. **Die GPS-Diagnose ist am Gerät nicht barrierefrei durchführbar (DSC-047).** Zwei ihrer
   drei Zustände sind ausschließlich über die LED-Farbe unterscheidbar; ein
   farbunabhängiges Merkmal ist nicht dokumentiert. Das ist die bisher einzige gefundene
   Barriere, die **am Gerät** sitzt und nicht am Dokument – die HTML-Anleitung kann sie
   beschreiben, aber nicht auflösen.

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. Es ist weder extrahiert noch
fachlich validiert. `entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf
ist keine WCAG-Konformitätserklärung.
