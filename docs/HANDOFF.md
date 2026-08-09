# Handoff

Stand: 2026-08-09 (fünfte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 238 → 258 von 323

- **DOC-BMA-SN044, Seiten 64–72:** neun neue Records; das Dokument ist mit 72 von 72
  Seiten vollständig geprüft.
- **DOC-IBA-SN045, Seiten 101–110 und 120:** elf neue Records; das Dokument steht bei
  182 von 247 Seiten. Vom dänischen Teil sind 14 von 23 PDF-Seiten geprüft.
- Alle 20 Records wurden mit `scripts/merge-page-records.mjs` gegen die Original-PDFs
  geprüft; bereits geprüfte Seiten wurden nicht überschrieben. Jeder Record bleibt auf
  `inspected`, nicht `validated`.

### Pflichtaktion vollständig erledigt

Die im vorigen Handoff genannte Aktion ist komplett:

1. Der schwedische Diebstahlmeldungs-Radius lautet auf Seite 64 **ca. 1000 m** und auf
   Seite 67 **ca. 1 km**. Deutsch, Englisch und Schwedisch stehen damit drei zu eins gegen
   Französisch mit 1500 m/1,5 km (DSC-078, Rückfrage 14).
2. `fence pa` ist auf Seite 67 bei 500 dpi im Seitenbild gesichert; `fence av` war bereits
   auf Seite 59 gesichert. Die schwedischen Schalt- und Ausgangsbefehle sind als
   Quellenzitate erfasst (DSC-067, BLK-005).
3. Alle vier falschen Querverweise stehen nun nachweislich in allen vier Sprachteilen
   (DSC-055). Alle SMS- und Kartenabbildungen bleiben in allen vier Fassungen deutsch
   (DSC-072, Rückfrage 17).
4. Die schwedische Konformitätsangabe auf Seite 70 bleibt englisch und nennt wie Englisch
   und Französisch die nicht existente „directive 1995/5/EG"; nur Deutsch nennt
   1999/5/EG (DSC-071).
5. Das Impressum auf Seite 72 nennt die Herstelleradresse in Eckernförde. Die Kieler
   Adresse bleibt historischer Bildinhalt der Karten-Screenshots und ist nicht die
   Herstelleranschrift.

### Erste Synthese-Auswertung abgeschlossen

`DISCREPANCIES.md` enthält jetzt einen eigenen Abschnitt zum sprach- und
generationenübergreifenden SMS-Befehlsvergleich:

- vier Sprachfassungen bis SN-044 (DE, EN, FR, SV),
- die geräteseitige Hilfe-SMS dieser Generation,
- vier vollständig geprüfte Sprachfassungen ab SN-045 (DE, EN, FR, CS).

Ergebnis: Sprache und Gerätegeneration sind unabhängige Parameter. Die Geräte-Hilfe-SMS
ist kein verlässlicher Master; Schreibweise, Großschreibung und ASCII-Form erlauben keine
Freigabe. Selbst im schwedischen Teil konkurrieren `oskarp` und `urkopplad`. BLK-005 bleibt
vollständig bestehen; kein Befehl wurde in den Content-Layer übernommen. Rückfrage 1 ist
mit der Synthese verlinkt.

### Wichtigste neue Befunde

- **DSC-081 neu:** DOC-BMA-SN044 Seiten 71/72 enthalten außerhalb des sichtbaren
  Seitenrahmens extrahierbaren Inhalt benachbarter Layoutteile. Nach der schwedischen
  Notizseite kann ein Extraktionswerkzeug ein vollständiges deutsches Inhaltsverzeichnis
  lesen, nach dem Impressum ein viersprachiges Deckblatt. Reine Zeichenzählung bewertet
  diese fast leeren Seiten dadurch irreführend als textreich.
- **DSC-015 erweitert:** Im dänischen Teil heißt 5.5 wie 5.1 „Styre alarmsystemet via
  SMS", obwohl der Abschnitt die beiden Ausgänge behandelt. Belegt im Inhaltsverzeichnis
  (102), roten Querverweis (110) und am Zielabschnitt selbst (120); derselbe Fehler wie im
  Englischen.
- **DSC-022 erweitert:** Die deutsche Bildbeschriftung „GPS-Antenne (Optional)" steht nun
  in fünf von fünf geprüften Sprachfassungen; auch das rote X bleibt im Dänischen
  unerklärt (Seite 107).
- **DSC-040 erweitert:** Beide falschen Installationsverweise des deutschen Masters stehen
  auch im Dänischen: 5.4 statt 5.5 auf Seite 108 und 1.5.2 statt 1.5.3 auf Seite 109.
- Die schwedische Hilfe-SMS-Erklärung auf Seite 65 kehrt wie die französische Fassung die
  Kommunikationsrichtung um und lässt den Prepaid-Guthaben-Hinweis aus. Der schwedische
  Text verwendet außerdem `oskarp` zum Unscharfschalten, aber `urkopplad` zum Beenden eines
  Alarms (DSC-067/079).

Registerstand: DSC-081 neu; DSC-015, DSC-022, DSC-040, DSC-055, DSC-067, DSC-071,
DSC-072, DSC-078, DSC-079 und DSC-080 erweitert. Weiterhin siebzehn Fragen und sieben
Blocker; nichts still gelöst.

## Was in dieser Sitzung nicht erledigt wurde

- **65 Seiten von DOC-IBA-SN045** sind noch `not_started`: 111–119, 145–150, 173–190,
  198–220, 233–240 und 247.
- Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben; die deutsche Quellenlage ist vollständig.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die 20 neuen Seitenrecords haben keine unabhängige Gegenprüfung; dänische und
  schwedische Records tragen eine `language_note`.
- Keine manuelle AT-, Zoom-, Reflow-, Forced-Colors- oder Reduced-Motion-Prüfung.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI;
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere SMS-Befehle,
  Radius, Betriebsart-D-Intervall, Gerätemeldungssprache, Spannungen und SIM-PIN-Vorgabe;
- kein muttersprachlicher Review für Französisch, Schwedisch und Dänisch.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 64–72; DOC-IBA-SN045 101–110 und 120.
- **Gesamtstand:** 258 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 182/247.
- **Segmente:** keine neuen; alle neuen Seiten bleiben `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Geänderte Bereiche:** Seitenrecords, Diskrepanzregister, Rückfragen, Fortschritts- und
  Übergabedokumentation. Kein Anwendungscode und kein Content-Layer geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün; 23 Unit-Tests bestanden sowie alle
  Content-, Token-, Karten-, Referenz-, Secret-, Lockfile- und Fortschrittschecks.
- **Referenz-Repository:** vor der Analyse sauber, Push-URL `DISABLED`; nach der Analyse
  erneut prüfen.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seite 111, Segment –, Sprache da.

First action:
DOC-IBA-SN045 Seiten 111–119 prüfen – die neun noch fehlenden Seiten des dänischen Teils
zwischen den bereits geprüften Seiten 101–110 und 120–123. Rendern mit:

python scripts/render-pdf-pages.py sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf 111 119 tmp/pdfs/iba-sn045-111-119 150

Jede Seite visuell prüfen; Dänisch nicht muttersprachlich freigeben, sondern Struktur,
Werte, Terminologie und auffällige Einzelbefunde dokumentieren. Inhaltlich gegen die
deutschen Parallelseiten 12–20 halten:
1. Seite 111: GPS-Anschluss und -Diagnose – 13,5 V für fünf Minuten, LED-Farben,
   Geofencing-Hinweis; Farbalternative gegen DSC-047 prüfen.
2. Seiten 112–113: SIM-Konfiguration, ESD, App-QR-Codes, Aktivierung und ALARM/AAlarm;
   prüfen, ob DSC-016 übersetzt wurde.
3. Seiten 114–116: Zielrufnummernarten, Programmier-SMS-Diagramm und Löschvorgang;
   Berechtigungszeichen gegen BLK-006/DSC-044 prüfen. Keine Rufnummer und keinen Befehl in
   den Content-Layer übernehmen.
4. Seite 117: neun LED-Zustände auf farbunabhängige Kennzeichnung prüfen.
5. Seiten 118–119: Meldungen, Radius, Schwellen 11,2/12,5 V, Hilfe-SMS und Kartenlinks;
   Bildsprache und Befehlsliste gegen DSC-033/BLK-005 halten.

Nach dem Batch den nun vollständigen dänischen Befehlssatz in die vorhandene
Synthese-Auswertung einordnen. Danach DOC-IBA-SN045 Seiten 145–150, 173–190, 198–220,
233–240 und 247.

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre BLK-005, kein D-Intervall (Frage 16), kein Radius (Frage 14), keine
Meldungs-Stichwörter (Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
