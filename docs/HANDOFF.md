# Handoff

Stand: 2026-08-09 (vierte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 228 → 238 von 323; der schwedische Teil zur Hälfte

Zehn neue Seitenrecords, DOC-BMA-SN044 Seiten 54–63 (Innehåll bis LED-Zustandsliste).
Das Dokument steht bei 63 von 72 Seiten; es fehlen die Seiten 64–71 (Rest Schwedisch)
und das Impressum (72).

### Die drei wichtigsten Ergebnisse

- **`fence av` ist im Seitenbild gesichert (Nachtrag zu DSC-067).** Der schwedische
  Geofencing-Ausschaltbefehl steht auf Seite 59 bei 500 dpi zeichengenau belegt – exakt
  der Befehl, den die englische Seite 25 fälschlich druckt. Die Vorlagenkontamination
  zwischen den Sprachteilen ist damit auf beiden Seiten bildlich nachgewiesen.
- **Betriebsart D: Endstand drei zu eins (Nachtrag zu DSC-066).** Die schwedische
  Tabelle (Seite 57) nennt „8 minuter" – Deutsch, Französisch und Schwedisch gegen die
  englischen „8 seconds". Rückfrage 16 aktualisiert.
- **Die schwedischen Kopfzeilen sind sichtbar (Gegenprobe zu DSC-075).** Die
  Sequenzprüfung zeigt die korrekte Zeichenreihenfolge (Balken vor Text); das
  Kopfzeilenproblem bleibt auf den französischen Sprachteil beschränkt.

### Weitere Funde des Batches

- **Schwedisch ist die zweitbeste Fassung (neu: DSC-079).** Anruf-Formulierung,
  LED-Gelb-Beschreibung, Wechselblinken, FAQ-Link und „AAlarm" sind korrekt – aber:
  die Kabellänge wird wie im Französischen als feste Länge ausgegeben („är 2 m"), die
  Batteriewarnung verliert wie dort den Zusatz „all in one", der Info-Absatz der
  Betriebsartenseite ist gebrochenes Schwedisch mit **englischer** Syntax („Lägena 7
  **genom** D" = „7 through D"), und die späte Abfragecode-Ergänzung ist gebrochen –
  **diese Passage ist in drei von vier Sprachteilen defekt, nur die deutsche ist
  sauber.**
- **Sammelposition DSC-080 (neu):** Im schwedischen Verzeichnis fehlt die
  **Kapitelnummer 3** vor „Diverse"; „**PGS**-position är OK" als Tippfehler im
  Erfolgszustand der GPS-Diagnose (400 dpi); zwei fehlende schließende Klammern;
  „massa GND)" ohne öffnende Klammer; drei Schreibvarianten der Status-LED.
- **Vorlagenbefunde im vierten Sprachteil bestätigt:** falscher Querverweis „(se 2.5)"
  (Nachtrag DSC-055), s/S-Widerspruch (DSC-056), Doppelglyphen des Abfragecode-Sterns
  (DSC-058), „Wipro" klein im Info-Absatz, PIN-0000-Paar (Rückfrage 15) und „AAlarm"
  erhalten (Nachtrag DSC-076 – der Verlust bleibt rein englisch).

Registerstand: DSC-079 und DSC-080 neu; Nachträge an DSC-055, DSC-056, DSC-058,
DSC-066, DSC-067, DSC-075 (Gegenprobe), DSC-076; Rückfrage 16 aktualisiert. Weiterhin
siebzehn Fragen, kein neuer Blocker.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 85 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 64–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **`fence pa`** (Seite 67) und der schwedische Diebstahlmeldungs-Radius (Seiten 64/67,
  DSC-078) sind noch ungeprüft.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben.**
- **Die drei Synthese-Auswertungen fehlen weiterhin**; für den Befehlsvergleich fehlen
  nur noch die schwedischen Seiten 64–71.
- **Die adversariale Gegenprüfung der Seitenrecords fehlt**; die schwedischen Records
  tragen eine `language_note`.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix (kein Anwendungscode geändert;
  CI deckt beides ab).

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist
  grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte (SMS-Befehle beider
  Generationen, Diebstahlmeldungs-Radius 900/1000/1500 m, Betriebsart-D-Intervall,
  Sprache der Gerätemeldungen, Spannungsschwellen, SIM-PIN-Vorgabe);
- kein muttersprachlicher Review für Französisch und Schwedisch; keine unabhängige
  englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 54–63 (zehn Records). Gesamtstand
  `inspected`: **238 von 323**; DOC-BMA-SN044 **63 von 72**.
- **Segmente:** keine neuen; alle neuen Seiten auf `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Neue Widersprüche:** DSC-079 (mittel), DSC-080 (gering). Nachträge an DSC-055,
  DSC-056, DSC-058, DSC-066, DSC-067, DSC-075, DSC-076; Rückfrage 16 aktualisiert.
  Keiner still gelöst.
- **Geänderte Dateien:** `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`,
  `docs/progress-input.json`, `docs/progress.json`, `docs/PROJECT_STATUS.md`,
  `docs/HANDOFF.md`. Kein Anwendungscode geändert.
- **Tests:** `npm run check` lokal grün (23 Unit-Tests und alle Content-, Sicherheits-
  und Fortschrittsprüfungen). CI-Ergebnis zum Commit dieser Sitzung nach dem Push
  prüfen; CI der Vorsitzung (`3d03bda`) war vollständig grün.
- **Fortschritt:** siehe generierter Block in `PROJECT_STATUS.md` (PDF-Audit über 238
  geprüfte Seiten).

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 64, Segment –, Sprache sv.

First action:
DOC-BMA-SN044 Seiten 64–72 prüfen (Rest Schwedisch, Sidan 10 bis 17, plus Impressum) –
der Abschlussbatch des Dokuments. Dabei mitzuerledigen:
1. Seiten 64 und 67: den schwedischen Diebstahlmeldungs-Radius sichern (DSC-078:
   DE/EN 1000 m, FR 1500 m – der schwedische Wert entscheidet, ob Französisch allein
   steht) und das Betriebsverhalten gegen die deutschen Parallelseiten halten.
2. Seite 67: den Befehl „fence pa" zeichengenau sichern (DSC-067; „fence av" ist seit
   Seite 59 gesichert); Seiten 66/68: die schwedischen Schalt- und Ausgangsbefehle für
   den Befehlsvergleich erfassen.
3. Seiten 64/65: Meldungsbilder erwartbar deutsch (DSC-072); die drei restlichen
   Querverweise (DSC-055: 2.3, 2.4, 2.6 – erwartbar falsch).
4. Seite 70: technische Daten und Konformitätsabschnitt gegen DSC-069/DSC-071
   (unübersetzt englisch wie im Französischen?).
5. Seite 72: Impressum erfassen; Herstelleradresse gegen die Kieler Beispieladresse der
   Screenshots halten.
Der Text liegt vollständig in tmp/bma-sn044-text.txt; Versatz Schwedisch: aufgedruckt =
PDF − 54 (bestätigt); language_note setzen.

Danach ist DOC-BMA-SN044 komplett. Als Nächstes den sprachübergreifenden
Befehlsvergleich (erste der drei Synthese-Auswertungen) schreiben: vier Sprachteile bis
SN-044 (DE/EN/FR/SV), die Geräteliste der Hilfe-SMS und die vier geprüften Sprachteile
ab SN-045 (DSC-033) nebeneinander – als eigener Abschnitt oder Anhang in
DISCREPANCIES.md, verlinkt aus Rückfrage 1. Danach DOC-IBA-SN045 (101–120, 145–150,
173–190, 198–220, 233–240, 247).

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre aus BLK-005, kein D-Intervall (Frage 16), kein Radius (Frage 14), keine
Meldungs-Stichwörter (Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet nicht darauf.
```
