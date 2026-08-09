# Handoff

Stand: 2026-08-09 (neunte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### PDF-Seitenprüfung: 314 → 323 von 323

- **DOC-IBA-SN045, Seiten 233–240 und 247:** neun neue schwedische Records. Damit steht
  das Dokument bei **247 von 247**, DOC-BMA-SN044 bei **72 von 72** und der gesamte
  Seitenbestand bei **323 von 323** visuell geprüften Seiten (`inspected`).
- Alle neun Records wurden mit `scripts/merge-page-records.mjs` gegen Seitenmaße und
  lesbare Zeichenzahlen der Original-PDF geprüft. Schwedisch wurde nicht
  muttersprachlich freigegeben; jeder Record trägt eine entsprechende `language_note`.
- Der schwedische Teil umfasst regulär 22 interne Seiten und endet auf PDF-Seite 247 mit
  „Sida 22 av 22“. Anders als FR, ES, NL und PL besitzt er keinen Fehler der internen
  Seitenzählung (DSC-021).

### Schwedischer Sprachblock abgeschlossen

1. Die gemeinsame deutsche Bildbeschriftung „GPS-Antenne (Optional)“, das unerklärte
   rote X, `ALARM` gegen `AAlarm`, die implizite Minus-Regel sowie beide falschen
   Querverweise stehen auch schwedisch. DSC-016/017/022/040/041/043/044/046/047 sind um
   die Belege ergänzt; die Vorlagenfehler sind damit in allen zehn SN-045-Fassungen
   geprüft.
2. **DSC-085 neu:** Seite 235 fordert zum Deaktivieren des Geofencings `fence pa`.
   Abschnitt 5.2 auf Seite 243 definiert dieselbe Zeichenfolge als Einschaltbefehl und
   `fence av` als Ausschaltbefehl. Der entscheidende Wortlaut wurde zusätzlich bei
   600 dpi geprüft. Keine Zeichenfolge wird wegen BLK-005 in den Content-Layer
   übernommen.
3. Schwedisch bildet das zehnte Befehlsprofil: `status`, `position`, `a pa`, `a av`,
   `a impuls`, `a %min%`, `inlarningslage pa`; die Hilfe-SMS nennt dagegen
   `SKARP`/`OSKARP`/`STATUS`/`POS`. Diese Texte stehen ausschließlich als Quellenzitate
   in Register und Synthese.
4. Die Meldungsseiten 241/242 besitzen trotz acht blau unterstrichener Kartenadressen
   **null** Linkannotationen. Damit sind alle 21 nichtdeutschen Meldungsseiten in
   EN/FR/CS/DA/ES/IT/NL/PL/SV inert; nur die deutsche Seite 20 besitzt Annotationen,
   dort doppelt (DSC-082).
5. Die Schlussseite bestätigt 9–30 V, ca. 37 mA Netzsuche, ca. 16–21 mA Normalbetrieb,
   Nano-SIM, zwei Ausgänge mit je 12 V/500 mA und 2014/53/EU. Supportpfade zeigen auch im
   schwedischen Teil auf `/en/`; sichtbare URLs besitzen keine Linkannotation.

### Synthese und Register abgeschlossen

- Die erste Synthese-Auswertung in `DISCREPANCIES.md` vergleicht jetzt alle zehn
  vollständig geprüften SN-045-Sprachfassungen mit den vier älteren Fassungen und der
  älteren Geräte-Hilfe-SMS. Ergebnis: **zehn Sprachen ergeben zehn unterschiedliche,
  teils intern widersprüchliche Profile**; `a %min%` ist die einzige in allen zehn
  SN-045-Fassungen gleiche Kapitelzeichenfolge.
- DSC-085 ist die höchste Registernummer. Er wurde in Rückfrage 1 und unter „Laufend
  ergänzt“ aufgenommen; es wurde keine achtzehnte Frage eröffnet.
- Registerstand: weiterhin **siebzehn Fragen und sieben Blocker**; nichts still gelöst.

## Was weiterhin offen ist

- Die Generation bis SN-044 besitzt nur den Platzhalter
  `content/tasks/sn-001-044/de/07-status-led.json`; die übrigen dreizehn Aufgabendateien
  fehlen. Die deutschen Quellseiten sind vollständig geprüft und können jetzt ohne
  THITRONIK-Antworten extrahiert werden.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die neuen Seitenrecords besitzen keine unabhängige Gegenprüfung; tragende Einzelwerte
  wurden hochauflösend gesichert, der Status bleibt trotzdem `inspected`.
- Keine manuelle AT-, Zoom-, Reflow-, Forced-Colors- oder Reduced-Motion-Prüfung.

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

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045 233–240 und 247.
- **Gesamtstand:** 323 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 247/247 und beide Kurzanleitungen je 2/2.
- **Segmente:** keine neuen; alle neuen Seiten bleiben `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Geänderte Bereiche:** Seitenrecords, Diskrepanzregister, Rückfragen, Synthese,
  Fortschritts- und Übergabedokumentation. Kein Anwendungscode geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json, deutsche Quellenlage
DOC-BMA-SN044 Seiten 1–19 und beide Kurzanleitungen vollständig geprüft.

First action:
Die erste vollständige Aufgabe der Generation bis SN-044 erstellen:
content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json. Als strukturelles
Vorbild content/tasks/sn-045-plus/de/01-geraetegeneration-bestimmen.json verwenden, aber
keine technischen Aussagen der neueren Generation übernehmen.

Vor dem Schreiben die einschlägigen Seiten selbst rendern und lesen: mindestens
DOC-BMA-SN044 Seiten 1–3 und 18–19 sowie DOC-KA-SN044 Seiten 1–2; für die dokumentierte
Grenze und die ungeklärte Leseregel zusätzlich die bereits geprüften Fundstellen
DOC-IBA-SN045 Seiten 2, 6 und 25 heranziehen. Transparent festhalten: Die älteren
Dokumente tragen selbst keinen Seriennummernbereich; die Grenze „ab -045“ stammt aus der
neueren Fassung, und die Quelle erklärt weder Fundort am Gerät noch zu vergleichenden
Nummernteil. Nicht raten, sondern auf Fachhändler/Support verweisen und DSC-023 beachten.

Jede Aussage braucht Dokument, PDF-Seite und Seitenregion. Die Datei bleibt auf
review_status „entwurf“, placeholder false. Anschließend gegen die Quellen gegenprüfen
und content:check laufen lassen.

Danach ohne Warten die Aufgaben 02-montageort bis 06-zielrufnummern und 08-meldungen bis
14-support erstellen sowie den vorhandenen Platzhalter 07-status-led füllen. Die
deutschen DOC-BMA-SN044-Seiten 3–18 bilden dafür den Hauptkorpus; jede zugewiesene Seite
vor der Extraktion selbst rendern. Vorbild für das vollständige Schema ist
content/tasks/sn-045-plus/de/03-anschluesse.json.

BLK-005 strikt einhalten: keine SMS-Befehlszeichenfolge in goal, prerequisites,
warnings, steps, expected_result, error_cases oder tables_md. Befehle dürfen nur in
change_reason beziehungsweise figures[].source.note die Auslassung belegen. Ebenfalls
kein Betriebsart-D-Intervall (Rückfrage 16), kein Geofencing-Radius (Rückfrage 14) und
keine lokalisierten Meldungs-Stichwörter (Rückfrage 17) als belastbare Anleitung
ausgeben. BLK-006 bei Zielrufnummern beachten. SN-044 und SN-045 außerhalb der
Generationsentscheidung nicht vermischen.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
