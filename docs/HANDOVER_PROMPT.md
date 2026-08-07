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

Die Gewichtung steht in `docs/MASTERPLAN.md` Abschnitt 19. Der größte Hebel ist die
**PDF-Seitenprüfung** (20 % Gewicht, aktuell 8 %): 219 der 323 Seiten sind noch
`not_started`. Jede geprüfte Seite zählt unmittelbar.

Vorgehen je Batch von 10 Seiten:

1. Rendern (poppler fehlt in dieser Umgebung, PyMuPDF ist vorhanden):
   ```
   python scripts/render-pdf-pages.py <pdf-pfad> 101 110 tmp/pdfs/batch-101-110 150
   ```
   `tmp/` ist ignoriert; die Renderings sind jederzeit reproduzierbar.
2. Jede Seite mit dem Read-Tool als Bild ansehen. Nicht überspringen, auch nicht bei
   Leer- oder Wiederholungsseiten.
3. Seitenrecords in `sources/pages/DOC-*.json` setzen: `status: "inspected"`,
   `progress_percent: 25`, plus `summary`, `headings`, `figures`, `tables`,
   `warnings_found`, `technical_values`, `accessibility_issues`, `discrepancies`,
   `terminology_findings`, `inspected_note`.
4. `npm run progress`, dann `npm run format`, dann `npm run check` – **in dieser
   Reihenfolge**, sonst schlägt `format:check` fehl.
5. Committen und pushen. CI abwarten.

Als Nächstes ansteht: **DOC-IBA-SN045 Seiten 101–110** (dänischer Teil). Danach die
weiteren Sprachteile, anschließend **DOC-BMA-SN044** (72 Seiten, bislang unberührt).

### Was du über die Quellen schon weißt

Vier Sprachteile sind vollständig geprüft: Deutsch, Englisch, Französisch, Tschechisch
(Seiten 1–100). Das Muster ist stabil und wiederholt sich erwartbar:

- **Jede Sprache hat einen eigenen SMS-Befehlssatz.** Tabelle in `DISCREPANCIES.md`
  DSC-033. Neue Sätze dort eintragen.
- **Vorlagenfehler** treten in allen Fassungen auf: unübersetzte Bildbeschriftung
  „GPS-Antenne (Optional)", unerklärtes rotes X in der Anschlussabbildung, zerrissene
  Wörter in Tabellenköpfen, Wortdopplung „via SMS via SMS", falscher Verweis auf 5.4 statt
  5.5. Diese einmal zentral vermerken, nicht je Sprache neu aufmachen.
- **Je Sprache** kommen ein bis zwei eigene Übersetzungsfehler hinzu.
- Von 247 Seiten hat **genau eine** lesbaren Text. 34 Seiten liefern nur Steuerzeichen
  U+0003 – zeichenzählende Prüfungen halten sie fälschlich für zugänglich.

Wenn du eine Sprache nicht beurteilen kannst: sag es. Struktur, Terminologie, technische
Werte und Layout lassen sich sprachunabhängig prüfen, Grammatik und Stil nicht. Das gehört
in den `inspected_note` des Seitenrecords, so wie es beim Tschechischen gemacht wurde.

### Der zweite Hebel

**Content-Modell und deutscher Master** (20 % Gewicht, aktuell 26 %). Sechs von vierzehn
deutschen Aufgaben sind gefüllt. Die verbleibenden acht hängen an offenen Fragen:

- sieben an der ungeklärten Befehlssprache (BLK-005),
- eine am unbekannten Fundort der Seriennummer (DSC-023).

Sie lassen sich **teilweise** füllen: alles außer dem Befehl selbst. Vorbild ist
`content/tasks/sn-045-plus/de/03-anschluesse.json` – dort sind die drei Schaltarten der
Ausgänge beschrieben, die SMS-Befehle aber bewusst ausgelassen und im `change_reason`
begründet.

Jede Aussage braucht Dokument, Seite und Seitenregion. **Quellseite immer selbst rendern und
lesen** – niemals aus einer Zusammenfassung schreiben.

### Verbindliche Regeln

- `inspected` heißt nur: visuell angesehen. Nicht extrahiert, nicht validiert.
- Sicherheitsrelevante Inhalte können in diesem Pilotstand nicht `freigegeben` sein.
- Widersprüche werden dokumentiert, nie still korrigiert.
- SN-044 und SN-045 niemals vermischen.
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

### Am Sitzungsende

`docs/PROJECT_STATUS.md` und `docs/HANDOFF.md` aktualisieren, `npm run progress` laufen
lassen, committen, pushen, CI abwarten. Im Handoff die exakte nächste Aktion nennen.
