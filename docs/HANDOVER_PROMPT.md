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

Die Gewichtung steht in `docs/MASTERPLAN.md` Abschnitt 19. Die PDF-Seitenprüfung ist seit
dem 2026-08-09 mit **323 von 323 Seiten vollständig**. Der nächste große, vollständig
lokal lösbare Hebel ist deshalb der **deutsche Content-Layer der Generation bis SN-044**:
dreizehn Aufgabendateien fehlen, `07-status-led.json` ist noch ein Platzhalter.

Die exakte erste Datei, ihre Quellenroute und die Sperren stehen unter „First action" in
`HANDOFF.md`. Kurzfassung des Vorgehens je Aufgabe:

1. Die zugewiesenen deutschen PDF-Seiten selbst rendern und visuell lesen; der deutsche
   Hauptkorpus von DOC-BMA-SN044 liegt auf den PDF-Seiten 1–19.
2. Das vollständige Schema von
   `content/tasks/sn-045-plus/de/03-anschluesse.json` übernehmen, aber keine Aussagen der
   neueren Generation in den älteren Zweig übertragen.
3. Jede Aussage in Schritt, Warnung und Fehlerfall direkt mit Dokument, PDF-Seite und
   Seitenregion belegen; Figuren und Tabellen als echte Textentsprechungen ausarbeiten.
4. Widersprüche offenlassen und in `change_reason` begründen. BLK-005, BLK-006 sowie die
   gesperrten Werte aus Rückfrage 14, 16 und 17 beachten.
5. Die Datei gegen die gerenderten Quellseiten gegenprüfen; `review_status` bleibt
   `entwurf`, `placeholder` wird `false`.
6. Am Sitzungsende `npm run progress`, dann `npm run format`, dann `npm run check` –
   **in dieser Reihenfolge** –, committen, pushen und CI abwarten.

Die PDF-Werkzeuge bleiben für Aufgabenextraktion und Gegenprüfung verfügbar:
`scripts/render-pdf-pages.py`, `scripts/crop-pdf-region.py` und
`scripts/merge-page-records.mjs`. Details und Beispiele stehen im bisherigen Handoff und
in den Skriptaufrufen der Seitenrecords.

### Was du über die Quellen schon weißt

Geprüft sind alle **323 von 323 Seiten**. DOC-BMA-SN044 ist mit 72 von 72 Seiten,
DOC-IBA-SN045 mit 247 von 247 Seiten vollständig; beide Kurzanleitungen stehen bei 2/2.
Alle zehn Sprachteile der neueren und alle vier Sprachteile der älteren Anleitung sind
vollständig erfasst. Das Muster ist stabil:

- **Zehn geprüfte Sprachen ergeben zehn unterschiedliche SMS-Befehlsprofile.** Spanisch
  mischt `valla apagada` mit englischen Kapitelbefehlen und einer englischen Hilfe-SMS;
  Italienisch, Niederländisch, Polnisch und Schwedisch wechseln innerhalb ihrer Fassung
  den Geofencing-Ausschaltbefehl. Schwedisch nennt `fence pa` sogar sowohl für Ein- als
  auch Ausschalten (DSC-085). Tabelle in `DISCREPANCIES.md` DSC-033.
- **Niederländisch hat 24 statt der behaupteten 23 Seiten.** Die fast leere Seite 190
  verschiebt Kapitel 3 bis 6; die Schlussseite 198 trägt „Pagina 24 van 23". Dazu kommen
  `Pro-Zoeker`, das unvollständige `positi` und mehrere widersprüchliche Kernbegriffe
  (DSC-021, DSC-083).
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

**Für DOC-BMA-SN044 gilt ein eigenes Muster** (alle 72 Seiten geprüft; das Dokument ist
**viersprachig**: Deutsch 1–19, Englisch 20–36, Französisch 37–53, Schwedisch 54–71,
Impressum 72):

- Die aufgedruckte Seitenzahl liegt im deutschen Teil **zwei unter** der PDF-Seite, im
  englischen **zwanzig**, im französischen **siebenunddreißig**, im schwedischen
  **vierundfünfzig** (bestätigt; je Sprachteil beginnt die Zählung neu bei 1). Achtung:
  **Im französischen Teil sind die Kopfzeilen samt Seitenzahlen unsichtbar** – der graue
  Balken wird über den weißen Kopfzeilentext gezeichnet (DSC-075, maschinell über die
  Zeichenreihenfolge belegt). Die Versätze stammen dort aus der Textebene. Die
  schwedischen Kopfzeilen sind dagegen sichtbar (Sequenz-Gegenprobe erledigt).
- **Die Sprachteile sind keine verlässlichen Übersetzungen.** Belegt sind: der schwedische
  Befehl `fence av` auf der englischen Seite 25 (DSC-067), „8 seconds" gegen deutsch und
  französisch „8 Minuten" in der Betriebsartentabelle (DSC-066), englisch gelehrte
  Befehle `arm`/`disarm` gegen die abgebildete Geräteliste `SCHARF`/`UNSCHARF` (DSC-054),
  die nicht existierende „directive 1995/5/EG" (DSC-071), der englische
  Verzeichniseintrag 2.4 „Installation instructions" (DSC-068; das französische
  Verzeichnis ist korrekt), die wörtlich mitübersetzten falschen Querverweise (DSC-055),
  sinnverändernde französische Übersetzungsfehler samt fehlendem FAQ-Link (DSC-073,
  DSC-074) und das im Englischen verlorene doppelte A der Adressbuch-Empfehlung
  (DSC-076), der französische Radius 1500 m/1,5 km gegen 1000 m/1 km in DE/EN/SV
  (DSC-078) und drei unübersetzte, falsche Konformitätsangaben „1995/5/EG" (DSC-071).
  Jeden Wert jedes Sprachteils gegen den deutschen halten; Abweichungen sind Funde, keine
  Flüchtigkeit.
- **Alle Abbildungen bleiben in jedem Sprachteil die deutschen** (DSC-072): Beispiel-SMS
  mit deutschen Gerätetexten, deutsche Kartenprogramm-Screenshots. In den Records der
  Bildseiten gehört deshalb `de` mit in `languages`; ob die Gerätemeldungen dieser
  Generation überhaupt lokalisiert sind, ist Rückfrage 17.
- Für Sprachteile ohne muttersprachliche Beurteilbarkeit (Französisch, Schwedisch,
  Dänisch, Italienisch, Niederländisch, Polnisch) gilt:
  Struktur, Werte und Terminologie prüfen, auffällige Einzelbefunde dokumentieren und im
  Record eine `language_note` setzen – wie beim Tschechischen in DOC-IBA-SN045.
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

### Der aktuelle Haupthebel

**Content-Modell und deutscher Master** (20 % Gewicht, aktuell 52 %). Alle vierzehn
deutschen Aufgaben sind gefüllt, keine ist mehr Platzhalter. Was jetzt fehlt:

1. **Die Generation bis SN-044**: nur 1 von 14 Aufgaben existiert. Die deutsche
   Quellenlage dafür ist seit dem 2026-08-08 **komplett** (deutscher Teil von
   DOC-BMA-SN044 vollständig geprüft) – die dreizehn fehlenden Dateien können jetzt
   geschrieben und der vorhandene Platzhalter kann gefüllt werden. Die Befehlssperre aus
   BLK-005 gilt unverändert; Vorbild ist
   `content/tasks/sn-045-plus/de/03-anschluesse.json`.
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

`docs/PROJECT_STATUS.md` und `docs/HANDOFF.md` aktualisieren, dann exakt in dieser
Reihenfolge `npm run progress` → `npm run format` → `npm run check`, committen, pushen
und CI abwarten. Im Handoff die exakte nächste Aktion nennen.
