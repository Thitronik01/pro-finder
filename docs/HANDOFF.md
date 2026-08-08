# Handoff

Stand: 2026-08-08. Der Pilot ist nicht freigabefähig; Details und Prozentwerte stehen in
`PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 104 → 180 von 323 Seiten

- 76 neue Seitenrecords: DOC-IBA-SN045 Seiten 121–144, 151–172, 191–197, 221–232 und
  241–246 sowie DOC-BMA-SN044 Seiten 1–5.
- Die Records sind **maschinell gegen die Original-PDF abgeglichen**: Seitenmaße und
  Zeichenzahl je Seite müssen mit `tmp/pagestats.json` übereinstimmen, Seiten dürfen sich
  nicht doppeln, und eine bereits geprüfte Seite wird nie überschrieben. Das erledigt das
  neue `scripts/merge-page-records.mjs`.
- **DOC-BMA-SN044 ist erstmals angefasst** und unterscheidet sich grundlegend: es hat eine
  echte Textebene mit über 1000 lesbaren Zeichen je Seite, während DOC-IBA-SN045 auf 247
  Seiten genau eine Seite mit lesbarem Text hat. Bei diesem Dokument ist deshalb nicht die
  Frage „gibt es Text", sondern ob die Textebene Lesereihenfolge, Tabellenstruktur und
  Bildbeschriftungen korrekt wiedergibt.
- Der Seitenrecord zu DOC-BMA-SN044 Seite 4 zeigt, worauf es dabei ankommt: die
  Klemmenbelegung ist dort über **Aderfarben** codiert (Pin 2 rot mit rosa Streifen, Pin 3
  schwarz mit weißem Streifen …). Diese Information trägt allein die Abbildung; sie ist
  jetzt als Text erfasst. Auch der Tippfehler der Quelle – „Pin 5 Messeingang (U5 )" mit
  überzähligem Leerzeichen – ist unverändert übernommen.

### Alle vierzehn deutschen Aufgaben sind gefüllt

Die acht verbliebenen Platzhalter sind aus geprüften Quellseiten geschrieben:
Gerätegeneration bestimmen, App und Aktivierung, Zielrufnummern, Meldungen, Geofencing,
Statusbericht, Ausgänge, Fehlerbehebung. Jede Aussage nennt Dokument, PDF-Seite und
Seitenregion; jede Datei begründet im `change_reason`, was bewusst fehlt.

Konsequent durchgehalten wurde die **Befehlssperre**: kein SMS-Befehl steht in `steps`,
`warnings`, `error_cases`, `goal`, `expected_result` oder `tables_md`. Wo eine Aufgabe
dadurch unvollständig bleibt, steht das ausdrücklich in der Datei statt die Lücke zu
verdecken – bei „Ausgänge" etwa: ohne Befehl lässt sich kein Ausgang schalten.

Was dabei trotzdem entstand, ist der eigentliche Ertrag: die **Betriebsartentabelle**, die
**Rollentabelle der Zielrufnummern**, die **LED-Diagnosetabelle** und die **Pinbelegung**
liegen in der Quelle nur als Bild vor und sind jetzt als Text und als Markdown-Tabelle
erfasst. Das Diagramm der Programmier-SMS, das seine Information über Verbindungslinien
transportiert, ist als Abbildung mit Alternativtext, Langbeschreibung und
Bestandteilliste aufgelöst – ohne die Beispielrufnummern zu übernehmen.

### Vierzehn neue Registerpositionen, dreizehn davon im deutschen Original

DSC-040 bis DSC-053. Dreizehn davon betreffen **den deutschen Text selbst**, nicht seine
Übersetzungen:

- **drei falsche Querverweise** (5.4 statt 5.5 auf Seite 9; 1.5.2 statt 1.5.3 in der
  Betriebsartentabelle; dazu der schon bekannte Fall). Die Ortsangabe zu DSC-028 war
  falsch und ist berichtigt: der Fehler steht im Fließtext von Abschnitt 1.3 auf Seite 9,
  nicht im roten Kasten auf Seite 11 – der verweist korrekt;
- **ein Verweis, der ins Leere führt**: Seite 19 verweist für Blinker und Sirene auf
  Abschnitt 5.1, der beides nicht erwähnt und außerdem einen Anruf beschreibt, obwohl
  seine Überschrift SMS ankündigt;
- **ein Statusbericht, der nicht zu seiner eigenen Beschreibung passt**: die Einleitung
  definiert Felder, die in keiner der neun Beispiel-SMS vorkommen, und die Beispiele
  enthalten Felder, die das Kapitel nicht erklärt;
- **eine Berechtigungsregel, die nirgends ausgeschrieben ist** – siehe Blocker;
- **eine Barriere am Gerät statt am Dokument**: die GPS-Diagnose unterscheidet zwei ihrer
  drei Zustände ausschließlich über die LED-Farbe.

Fünf davon sind als Fragen 9 bis 13 in `RUECKFRAGEN_THITRONIK.md` entscheidungsreif
formuliert, die übrigen unter „Laufend ergänzt".

DSC-053 betrifft als einzige nicht den Text, sondern die Sprachmarken: die Marke vor dem
dänischen Titel ist eine zusammengesetzte Flagge – links die norwegische, rechts die rechte
Hälfte der dänischen, dazu ein Diagonalstrich. Da die zehn Sprachen des Dokuments
ausschließlich über Flaggen markiert sind und kein Sprachname ausgeschrieben ist, führt das
aktiv in die Irre.

### Vier neue Prüfungen – jede hat sofort einen realen Fehler gefunden

1. **Jede Markdown-Tabelle muss darstellbar sein.** `TaskView` rendert eine unparsbare
   Tabelle als `null`: kein Fehler, keine Lücke, der Inhalt ist einfach weg. Gefunden
   wurde eine LED-Tabelle in `05-app-und-aktivierung.json`, an die ein Fließtext-Absatz
   angehängt war – sie wäre in der Oberfläche spurlos verschwunden. Genau die Tabellen
   tragen hier die Information, die in der Quelle nur als Bild vorliegt.
2. **Keine Koordinaten, Kartenlinks oder Rufnummern** aus den Beispiel-SMS im
   Content-Layer. Gefunden wurden zwei Kartenlinks in `09-geofencing.json`.
3. **Jeder Schritt, Warnhinweis und Fehlerfall** einer Nicht-Platzhalter-Aufgabe braucht
   eine eigene Quelle. Das Schema erzwingt bisher nur eine Quelle je Aufgabe.
4. **Jeder DSC-Verweis muss zeigen, wohin er sagt.** Ein toter Verweis ist schlimmer als
   ein fehlender: sobald das Register bis zu dieser Nummer wächst, zeigt er stillschweigend
   auf einen fremden Sachverhalt. Die Prüfung hat beim ersten Lauf zwei doppelt vergebene
   Nummern gefunden (DSC-038 und DSC-039) – beim Anlegen der neuen Positionen war an die
   _letzte_ Überschrift der Datei angeknüpft worden statt an die _höchste_ Nummer. Die
   Datei ist nicht durchgehend aufsteigend sortiert; DSC-035 steht am Ende, DSC-038 und
   DSC-039 weiter oben. Die neuen Positionen tragen jetzt DSC-040 bis DSC-053, das
   Register ist lückenlos.

Der Tabellenparser liegt jetzt einmal in `lib/content/markdown-table.ts` statt in zwei
Kopien in Renderer und Prüfung, damit beide nicht auseinanderlaufen können.

### Barrierefreiheit der Anwendung

Die Sicherheitsklasse eines Warnhinweises steht jetzt als **Wort** in der Ausgabe
(„Hinweis", „Achtung", „Warnung, sicherheitskritisch"). Vorher unterschieden sich ein
normaler und ein sicherheitskritischer Hinweis nur durch Rahmenbreite und
Hintergrundfarbe – für Screenreader, Forced-Colors-Modi und Schwarzweißdruck also gar
nicht. Mit den jetzt gefüllten Aufgaben stehen erstmals echte sicherheitskritische
Warnungen auf den Seiten, an denen das sichtbar wird.

### Neues Werkzeug für die Seitenprüfung

`scripts/crop-pdf-region.py` rendert einen Seitenausschnitt in relativen Koordinaten hoch
aufgelöst. Ohne das wurde bei Flaggen, LED-Farben, Kabelfarben und Fußnoten geraten – und
genau das verbietet der Projektauftrag. Beim ersten Einsatz hat es belegt, dass die Flagge
auf Seite 101 keine dänische ist, sondern eine **verunglückte Überlagerung der
norwegischen und der dänischen Flagge mit einem zusätzlichen diagonalen Strich**. Bei
150 dpi war das nicht zu erkennen.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht durchgelaufen.** Geplant waren alle 219 offenen Seiten in
  23 Batches; das Nutzungslimit der Sitzung hat 21 Batches abgebrochen. Übernommen wurden
  nur die Seiten, deren Records vollständig und maschinell geprüft vorlagen. Offen bleiben
  143 Seiten.
- **Die adversariale Gegenprüfung der Seitenrecords ist ausgefallen.** Für die 76 neuen
  Records lief **kein** zweiter Agent, der jede Behauptung gegen das Seitenbild geprüft
  hätte. Der Status `inspected` bedeutet ohnehin nur „visuell angesehen", aber die
  eingebaute zweite Meinung fehlt hier. Bei der nächsten Berührung dieser Seiten – also
  spätestens bei der Segment-Extraktion – ist sie nachzuholen. Bei den Aufgaben, wo sie
  gelaufen ist, hat sie in jeder einzelnen Datei etwas gefunden; der Schritt ist also
  nicht verzichtbar.
- **Die drei Synthese-Auswertungen fehlen**: der sprachübergreifende Befehlsvergleich für
  die neuen Sprachteile, die Gegenüberstellung SN-044 gegen SN-045 und die
  Accessibility-Gesamtzählung über beide Dokumente. Sie waren als Abschluss der
  Seitenprüfung vorgesehen und sind mit ihr ausgefallen.
- Ein parallel arbeitender Agent hat **gemeinsam genutzten Code umgebaut**, obwohl sein
  Auftrag auf eine einzige Datei begrenzt war (Auslagerung des Tabellenparsers, zwei neue
  Unit-Tests, eine CSS-Klasse). Das Ergebnis ist geprüft und besser als der vorherige
  Stand – es wurde nachvollzogen und behalten, nicht blind übernommen. Für künftige
  Parallelläufe steht die Konsequenz in `HANDOVER_PROMPT.md`: nach jedem Lauf `git status`
  auf Dateien prüfen, die niemand anfassen sollte.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere der SMS-Befehle,
  der Spannungsschwellen 11,2 V / 12,5 V, der 13,5 V für fünf Minuten zum Speichern der
  Satellitendaten und des Geofencing-Radius von ca. 900 m;
- keine unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045 Seiten 121–144, 151–172, 191–197, 221–232,
  241–246; DOC-BMA-SN044 Seiten 1–5. Gesamtstand `inspected`: **180 von 323**.
- **Segmente:** keine neuen Segmente extrahiert; alle neuen Seiten bleiben auf
  `inspected`.
- **Aufgaben:** acht deutsche Aufgaben von Platzhalter auf Entwurf gefüllt; damit alle 14.
- **Neue Widersprüche:** DSC-040 bis DSC-053, davon DSC-042, DSC-043, DSC-044, DSC-045,
  DSC-047 und DSC-048 mit hoher Schwere. Zwei neue Blocker: BLK-006 und BLK-007. Keiner
  still gelöst.
- **Geänderte Dateien:** `content/tasks/sn-045-plus/de/*.json` (acht Aufgaben),
  `sources/pages/DOC-IBA-SN045.json`, `sources/pages/DOC-BMA-SN044.json`,
  `scripts/check-content.mjs`, `scripts/crop-pdf-region.py` (neu),
  `scripts/merge-page-records.mjs` (neu), `lib/content/markdown-table.ts` (neu),
  `components/TaskView.tsx`, `components/TaskView.module.css`,
  `tests/unit/content.test.ts`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`, `docs/progress-input.json`,
  `docs/progress.json`, `docs/PROJECT_STATUS.md`, `docs/HANDOFF.md`.
- **Tests:** `npm run check` grün (Format, Lint, Types, 17 Unit-Tests, Content, Tokens,
  Karte, Referenz, Secrets, Lockfile, Fortschritt), Produktions-Build grün. Kein
  Playwright/axe-Lauf in dieser Sitzung, keine manuelle AT-Matrix.
- **Fortschritt:** gesamt 30,5 %; PDF-Audit 13,9 % über 323 Seiten.

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 6, Segment –, Sprache de.

First action:
Zuerst die fehlende Gegenprüfung von `content/tasks/sn-045-plus/de/10-statusbericht.json`
nachholen: Quellseiten 9, 10, 19 und 22 selbst rendern, jede Aussage gegen das Seitenbild
halten, Nicht-Belegbares entfernen statt abschwächen, dann den Vermerk „Gegengeprüft gegen
die Quellseiten am <Datum>." an den change_reason hängen. Das ist eine überschaubare Datei
und der einzige Punkt, an dem gerade unbelegter Inhalt im Content-Layer stehen könnte.

Danach: DOC-BMA-SN044 Seiten 6–14 prüfen. Dieses Dokument hat Vorrang vor den restlichen
Sprachteilen von DOC-IBA-SN045: es ist die einzige Quelle für die Generation bis SN-044
(von der bisher nur 1 der 14 Aufgaben existiert), es ist erst mit 5 von 72 Seiten geprüft,
und als einziges Dokument mit echter Textebene erlaubt es die Gegenüberstellung von
extrahiertem Text und Seitenbild. Der Text liegt vollständig in `tmp/bma-sn044-text.txt`
(je Seite eingeleitet durch „===== PAGE n ====="), neu erzeugbar mit PyMuPDF.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in `docs/HANDOVER_PROMPT.md`.

Danach: die restlichen 76 Seiten von DOC-IBA-SN045 (101–120, 145–150, 173–190, 198–220,
233–240, 247) und die drei ausgefallenen Synthese-Auswertungen.

RUECKFRAGEN_THITRONIK.md enthält jetzt dreizehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet aber nicht darauf.
```
