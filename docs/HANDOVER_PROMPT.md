# Handover-Prompt

Diesen Text einer neuen Agentensitzung **wörtlich als erste Nachricht** geben. Er ist
selbsttragend: alles Weitere steht im Repository.

---

## Prompt

Du arbeitest am THITRONIK Pro-finder Barrierefreiheits-Pilot.

Arbeitsverzeichnis: `C:\Users\Rüpprich\OneDrive\Desktop\Pro Finder (neu)\pro-finder`
Schreib-Repository: `https://github.com/Thitronik01/pro-finder`, Branch
`bootstrap/accessibility-pilot`. Kein Commit auf `main`.

Lies zuerst `AGENTS.md`, `docs/MASTERPLAN.md`, `docs/PROJECT_STATUS.md` und
`docs/HANDOFF.md`. Danach arbeite die exakte nächste Aktion aus `HANDOFF.md` ab.

### Was der Auftraggeber will

Fortschritt. Nicht auf Antworten warten, nicht blockieren. Alles, was ohne Rückmeldung von
THITRONIK möglich ist, wird gemacht; alles Übrige wird in `docs/RUECKFRAGEN_THITRONIK.md`
eingetragen und die betroffenen Inhalte bleiben als Entwurf markiert.

`docs/RUECKFRAGEN_THITRONIK.md` ist die **einzige** Sammelstelle für offene Fragen. Neue
Funde kommen unter „Laufend ergänzt"; die Herleitung gehört in `docs/DISCREPANCIES.md`, der
Beleg in den Seitenrecord.

### Der schnellste Weg, den Fortschritt zu heben

Die Gewichtung steht in `docs/MASTERPLAN.md` Abschnitt 19. Der größte Hebel bleibt die
**PDF-Seitenprüfung** (20 % Gewicht, aktuell 16,3 %): 112 der 323 Seiten sind noch
`not_started`. Jede geprüfte Seite zählt unmittelbar.

Offen sind:

- **DOC-BMA-SN044, Seiten 37–72** – vorrangig. Einzige Quelle für die Generation bis
  SN-044, geprüft sind 36 von 72 Seiten. Struktur: Deutsch 1–19 und Englisch 20–36
  (**beide vollständig geprüft**), Französisch 37–53, Schwedisch 54–71, Impressum 72.
  Als **einziges** Dokument mit echter Textebene erlaubt es die Gegenüberstellung von
  extrahiertem Text und Seitenbild; genau daraus entsteht hier der Erkenntnisgewinn,
  nicht aus „Textebene vorhanden". Alle vier bisherigen Batches haben ihre stärksten
  Funde aus genau diesem Vergleich gezogen. Mitzuerledigen: im schwedischen Teil die
  Befehle `fence pa`/`fence av` (Seiten 59 und 67, Textebenen-Beleg zu DSC-067) im
  Seitenbild sichern und das Impressum (Seite 72, Herstelleradresse) erfassen; im
  französischen Teil die Befehle `gardiennage active`/`desactive` (Seiten 42 und 50)
  bestätigen und gegen die abweichenden SN-045-Befehle halten (DSC-067).
- **DOC-IBA-SN045**, Seiten 101–120, 145–150, 173–190, 198–220, 233–240 und 247.

Vorgehen je Batch von 9–10 Seiten:

1. Rendern (poppler fehlt in dieser Umgebung, PyMuPDF ist vorhanden):
   ```
   python scripts/render-pdf-pages.py <pdf-pfad> 101 110 tmp/pdfs/batch-101-110 150
   ```
   `tmp/` ist ignoriert; die Renderings sind jederzeit reproduzierbar.
2. Jede Seite mit dem Read-Tool als Bild ansehen. Nicht überspringen, auch nicht bei
   Leer- oder Wiederholungsseiten.
3. Reicht 150 dpi für ein Detail nicht (Flaggen, LED-Farben, Kabelfarben, Fußnoten,
   aufgedruckte Seitenzahlen, Tabellenköpfe), **nicht raten**, sondern nachrendern:
   ```
   python scripts/crop-pdf-region.py <pdf-pfad> 101 0.28 0.31 0.60 0.37 tmp/zoom/x.png 400
   ```
   Koordinaten relativ (0.0–1.0), 0,0 oben links. Das Werkzeug hat beim ersten Einsatz
   belegt, dass die Flagge auf Seite 101 eine verunglückte Überlagerung der norwegischen
   und der dänischen Flagge ist – bei 150 dpi war das nicht zu sehen.
4. Records als JSON-Array nach `tmp/records/<doc-id>-<von>-<bis>.json` schreiben, dann:
   ```
   node scripts/merge-page-records.mjs --dry-run   # prüft
   node scripts/merge-page-records.mjs             # trägt ein
   ```
   Das Werkzeug gleicht Seitenmaße und Zeichenzahlen gegen die echte PDF ab, meldet
   doppelte Seiten und überschreibt keine bereits geprüfte Seite. Es verträgt auch
   abgebrochene Batches mit abweichenden Dateinamen.
5. `npm run progress`, dann `npm run format`, dann `npm run check` – **in dieser
   Reihenfolge**, sonst schlägt `format:check` fehl.
6. Committen und pushen. CI abwarten.

### Was du über die Quellen schon weißt

Geprüft sind 211 von 323 Seiten. Bei DOC-IBA-SN045 sind die Sprachteile Deutsch,
Englisch, Französisch und Tschechisch vollständig und weitere Teile in Stücken erfasst.
Das Muster ist stabil und wiederholt sich erwartbar:

- **Jede Sprache hat einen eigenen SMS-Befehlssatz.** Tabelle in `DISCREPANCIES.md`
  DSC-033. Neue Sätze dort eintragen.
- **Vorlagenfehler** treten in allen Fassungen auf: unübersetzte Bildbeschriftung
  „GPS-Antenne (Optional)", unerklärtes rotes X in der Anschlussabbildung, zerrissene
  Wörter in Tabellenköpfen, Wortdopplung „via SMS via SMS", falscher Verweis auf 5.4
  statt 5.5. Diese einmal zentral vermerken, nicht je Sprache neu aufmachen.
- **Je Sprache** kommen ein bis zwei eigene Übersetzungsfehler hinzu.
- Von 247 Seiten hat **genau eine** lesbaren Text. 34 Seiten liefern nur Steuerzeichen
  U+0003 – zeichenzählende Prüfungen halten sie fälschlich für zugänglich.
- **Der deutsche Master ist nicht fehlerfrei.** Die Extraktion der Aufgaben hat allein im
  deutschen Teil drei falsche Querverweise, mehrere Selbstwidersprüche und eine
  unerklärte Berechtigungsregel gefunden (DSC-040 bis DSC-053). „Geprüfter deutscher
  Master" heißt nicht „übernommener deutscher Text".

Wenn du eine Sprache nicht beurteilen kannst: sag es. Struktur, Terminologie, technische
Werte und Layout lassen sich sprachunabhängig prüfen, Grammatik und Stil nicht. Das gehört
in den `inspected_note` des Seitenrecords, so wie es beim Tschechischen gemacht wurde.

**Für DOC-BMA-SN044 gilt ein eigenes Muster** (Seiten 1–36 geprüft; das Dokument ist
**viersprachig**: Deutsch 1–19, Englisch 20–36, Französisch 37–53, Schwedisch 54–71,
Impressum 72):

- Die aufgedruckte Seitenzahl liegt im deutschen Teil **zwei unter** der PDF-Seite, im
  englischen **zwanzig**, im französischen erwartbar **sechsunddreißig**, im schwedischen
  erwartbar **dreiundfünfzig** (die Zählung beginnt je Sprachteil neu bei 1; „Seite 15"
  und „Page 15" existieren im selben PDF). Die Quelle verweist intern auf die
  **aufgedruckten** Zahlen des jeweiligen Sprachteils – beim Prüfen eines Seitenverweises
  immer umrechnen und den Versatz je Sprachteil aus dem Seitenbild bestätigen.
- **Die Sprachteile sind keine verlässlichen Übersetzungen.** Belegt sind: der schwedische
  Befehl `fence av` auf der englischen Seite 25 (DSC-067), „8 seconds" gegen „8 Minuten"
  in der Betriebsartentabelle (DSC-066), englisch gelehrte Befehle `arm`/`disarm` gegen
  die abgebildete Geräteliste `SCHARF`/`UNSCHARF` (DSC-054), die nicht existierende
  „directive 1995/5/EG" (DSC-071), der Verzeichniseintrag 2.4 „Installation instructions"
  statt Geofencing (DSC-068) und alle vier wörtlich mitübersetzten falschen Querverweise
  (DSC-055). Jeden Wert jedes Sprachteils gegen den deutschen halten; Abweichungen sind
  Funde, keine Flüchtigkeit.
- **Alle Abbildungen bleiben in jedem Sprachteil die deutschen** (DSC-072): Beispiel-SMS
  mit deutschen Gerätetexten, deutsche Kartenprogramm-Screenshots. In den Records der
  Bildseiten gehört deshalb `de` mit in `languages`; ob die Gerätemeldungen dieser
  Generation überhaupt lokalisiert sind, ist Rückfrage 17.
- **Die Textebene ist nicht vollständig.** Sie enthält keine Piktogramme, keine
  Farbauszeichnung, keine Warndreiecke, kein einziges der neun Beispiel-SMS-Bilder und an
  einer Stelle ein fehlendes Sternzeichen mitten in einem Befehlscode (DSC-058). Nichts
  daraus darf ungeprüft übernommen werden.
- **Warnungen tragen nie ein Signalwort.** Sie sind rot, tragen Ausrufezeichen, ein
  Warndreieck oder einen rosa Kasten. Beim Erfassen als Warnung kenntlich machen und in
  `accessibility_issues` vermerken, dass die Auszeichnung rein visuell ist.
- **Befehle stehen als alleinstehende fette Wörter** in eigener Zeile, ohne Kennzeichnung
  als einzugebender Text. Sie gehören in den Seitenrecord als Quellenzitat für BLK-005 –
  und niemals in den Content-Layer.
- **Die Hilfe-SMS des Geräts auf Seite 13 ist die maßgebliche Vergleichsgröße.** Sie nennt
  die Befehle, die das Gerät selbst für gültig hält, und widerspricht dem Handbuch. Jeder
  weitere gefundene Befehl ist gegen diese Liste zu halten (DSC-054).
- Erwartbar sind je Seite mehrere redaktionelle Fehler (fehlende Leerzeichen, falsche
  Groß-/Kleinschreibung, vorreformierte Schreibung). Sie gehören gesammelt in DSC-064,
  nicht je Seite neu ins Register.

### Der zweite Hebel

**Content-Modell und deutscher Master** (20 % Gewicht, aktuell 52 %). Alle vierzehn
deutschen Aufgaben sind gefüllt, keine ist mehr Platzhalter. Was jetzt fehlt:

1. **Die Generation bis SN-044**: nur 1 von 14 Aufgaben existiert. Die deutsche
   Quellenlage dafür ist seit dem 2026-08-08 **komplett** (deutscher Teil von
   DOC-BMA-SN044 vollständig geprüft) – die dreizehn Aufgaben können jetzt geschrieben
   werden, parallel zur restlichen Seitenprüfung. Die Befehlssperre aus BLK-005 gilt
   unverändert; Vorbild ist `content/tasks/sn-045-plus/de/03-anschluesse.json`.
2. **Die Segment-Extraktion** als Grundlage für die Übersetzung (Status `extracted` statt
   `inspected`).
3. **Der technische Review** aller sicherheitskritischen Werte. Der kann nicht im Pilot
   erledigt werden.

Vorbild für neue Aufgaben ist `content/tasks/sn-045-plus/de/03-anschluesse.json`. Jede
Aussage braucht Dokument, Seite und Seitenregion. **Quellseite immer selbst rendern und
lesen** – niemals aus einer Zusammenfassung schreiben.

### Verbindliche Regeln

- `inspected` heißt nur: visuell angesehen. Nicht extrahiert, nicht validiert.
- Sicherheitsrelevante Inhalte können in diesem Pilotstand nicht `freigegeben` sein.
- Widersprüche werden dokumentiert, nie still korrigiert.
- SN-044 und SN-045 niemals vermischen.
- **Kein SMS-Befehl** in `steps`, `warnings`, `error_cases`, `goal`, `expected_result`
  oder `tables_md` – die Befehlssprache ist ungeklärt (BLK-005). Zitieren erlaubt nur in
  `change_reason` und `figures[].source.note`, und dort nur als Begründung der Auslassung.
- Keine Koordinaten, Kartenlinks oder Rufnummern aus den Beispiel-SMS im Content-Layer.
  `npm run content:check` erzwingt das; die Herstellernummer steht ausschließlich in
  `14-support.json`.
- Neue Einträge in `DISCREPANCIES.md` bekommen die **höchste bisher vergebene Nummer + 1**,
  nicht die der letzten Überschrift in der Datei. Die Datei ist nicht durchgehend
  aufsteigend sortiert; `npm run content:check` bricht bei doppelten Nummern und bei
  Verweisen auf nicht existierende Nummern ab.
- Keine Secrets, keine echten Kundendaten, auch nicht in Fixtures.
- Das Referenz-Repository unter `.agent/reference/` ist read-only; vor und nach jeder
  Analyse muss `git -C .agent/reference/thitronik-haendlerplattform status --porcelain`
  leer sein.

### Umgebung

- Docker startet hier nicht. Supabase läuft ausschließlich in CI – das genügt, der Job ist
  grün.
- `gh` ist nicht installiert. Git-Push funktioniert über den Credential Manager.
- CI-Logs sind ohne Anmeldung nicht lesbar. Bei rotem CI: den Fehler über den
  Diagnoseschritt in der Job-Zusammenfassung suchen oder den Auftraggeber um den Logauszug
  bitten.
- `npm run check` enthält `lockfile:check`. Meldet es eine Lücke, hilft der manuell
  auslösbare Workflow `.github/workflows/lockfile.yml` – ein vollständiges Lockfile lässt
  sich unter Windows nicht erzeugen.
- Wenn du mit Subagenten parallel arbeitest: gib jedem **genau eine** Ausgabedatei und
  sage ausdrücklich, dass er nichts anderes im Repository anfassen darf. In der Sitzung
  vom 2026-08-08 hat ein Agent trotzdem gemeinsam genutzten Code umgebaut. Das Ergebnis
  war brauchbar, aber es war nicht abgesprochen – prüfe nach einem Parallellauf immer
  `git status` auf Dateien, die niemand anfassen sollte.

### Am Sitzungsende

`docs/PROJECT_STATUS.md` und `docs/HANDOFF.md` aktualisieren, `npm run progress` laufen
lassen, committen, pushen, CI abwarten. Im Handoff die exakte nächste Aktion nennen.
