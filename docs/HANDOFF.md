# Handoff

Stand: 2026-08-09 (zehnte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Deutscher Aufgabensatz bis SN-044: 1 → 14 von 14

- `content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json` bis
  `14-support.json` sind vollständig gefüllt. Der vorhandene Platzhalter
  `07-status-led.json` wurde ersetzt; alle Dateien tragen `review_status: entwurf` und
  `placeholder: false`.
- Als strukturelle Vorbilder dienten
  `content/tasks/sn-045-plus/de/01-geraetegeneration-bestimmen.json` und
  `03-anschluesse.json`. Technische Aussagen der neueren Generation wurden nicht in den
  SN-044-Zweig übernommen.
- Vor der Extraktion wurden DOC-BMA-SN044, PDF-Seiten 1–19, bei 200 dpi sowie
  DOC-KA-SN044, Seiten 1–2, bei 250 dpi neu gerendert und vollständig visuell gelesen.
  Für die Generationsgrenze wurden zusätzlich DOC-IBA-SN045, Seiten 2, 6 und 25, bei
  250 dpi gerendert und visuell geprüft. Jede fertige Aufgabe wurde erneut gegen diese
  Renderings gehalten.
- Jede Handlungs-, Warn- und Fehleraussage nennt Dokument, PDF-Seite und Seitenregion.
  Alle vierzehn Dateien besitzen einen detaillierten `change_reason`; Unsicherheiten sind
  sichtbar statt still korrigiert.

### Generationsentscheidung transparent

- DOC-BMA-SN044 und DOC-KA-SN044 nennen selbst keinen Seriennummernbereich.
- Die Grenze „ab -045“ stammt ausschließlich von DOC-IBA-SN045, PDF-Seite 2. Die
  Produktabbildung auf Seite 6 zeigt zwar ein Beispiel im Format `SN 0699 - 045 +`, doch
  keine der gelesenen Quellen erklärt, welcher Nummernteil verglichen werden muss.
- Die Quellen nennen keinen genauen Fundort der Seriennummer am älteren Gerät. Die
  Schlussseiten zeigen nur leere Felder `SN` beziehungsweise `Serial number`.
- Aufgabe 01 enthält deshalb keine erfundene Leseregel und verweist bei Unsicherheit
  belegt auf Fachhändler beziehungsweise Support. DSC-023 bleibt offen.

### Sperren eingehalten

- **BLK-005:** In `goal`, `prerequisites`, `warnings`, `steps`, `expected_result`,
  `error_cases` und `tables_md` steht im gesamten SN-044-Satz keine
  SMS-Befehlszeichenfolge. Quellenzitate zu ausgelassenen Befehlen stehen nur in
  `change_reason` oder `figures[].source.note`.
- **BLK-006:** Aufgabe 06 beschreibt Rollen und den sicheren physischen Löschweg, aber
  keine aus Beispielen hergeleitete Autorisierungszeichenregel.
- Der Geofencing-Radius bleibt wegen Rückfrage 14 vollständig unveröffentlicht. Das
  automatische Intervall der Betriebsart D bleibt wegen Rückfrage 16 ungenannt.
  Lokalisierte Meldungs-Stichwörter werden wegen Rückfrage 17 nicht als sichere
  Geräteausgabe behandelt.
- Keine Koordinate, Kartenadresse, Beispielrufnummer oder Rufnummer aus einer Beispiel-SMS
  wurde übernommen. Der feste SIM-Code bleibt wegen Rückfrage 15 außerhalb sichtbarer
  Bedienfelder.

### Register und Rückfragen ergänzt

- **DSC-059 / Rückfrage 12:** DOC-BMA-SN044, Seite 11, ordnet grünes Dauerlicht nur dem
  SMS-Versand zu; DOC-KA-SN044, Seite 2, nennt Empfang oder Versand. Der Widerspruch
  bleibt in Aufgabe 07 sichtbar.
- **DSC-069 / Rückfrage 2:** Innerhalb derselben Generation nennt DOC-BMA-SN044 ca.
  21 mA Normalstrom und 1999/5/EG, DOC-KA-SN044 dagegen ca. 16–21 mA und 2014/53/EU.
  Zusätzlich steht im BMA-Anschlusskapitel eine geeignete 12-V-DC-Quelle, in der
  technischen Tabelle desselben Dokuments aber 9–30 V. Aufgabe 13 wählt keinen Wert
  still aus.
- Es wurde keine achtzehnte Rückfrage und keine neue DSC-Nummer eröffnet. Registerstand:
  höchster Eintrag DSC-085, siebzehn Rückfragen und sieben Blocker.

## Was weiterhin offen ist

- Die Segment-Extraktion als Grundlage für die Übersetzung fehlt vollständig. Alle 323
  Seiten stehen weiterhin nur auf `inspected` und damit konservativ bei 25 Prozent
  Quellenreife.
- Für versionierte `content_segments` existiert im Dateisystem noch kein kanonisches
  Repo-Format. Das Datenbankschema in
  `supabase/migrations/20260806000001_initial_schema.sql` definiert bereits die benötigten
  Felder. Das Format und seine Prüfung müssen vor dem ersten Extraktionsbatch festgelegt
  werden.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die Seitenrecords besitzen keine unabhängige Gegenprüfung; tragende Einzelwerte und
  alle für die Aufgaben verwendeten deutschen Seiten wurden visuell gesichert, der
  Seitenstatus bleibt trotzdem `inspected`.
- Alle technischen und sicherheitskritischen Inhalte stehen auf `entwurf`; es gibt keine
  technische Freigabe und keinen muttersprachlichen Review der nichtdeutschen Fassungen.
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

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 1–19, DOC-KA-SN044 1–2 und
  DOC-IBA-SN045 2, 6, 25 neu gerendert und visuell gelesen.
- **Gesamtstand Quellen:** 323 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 247/247 und beide Kurzanleitungen je 2/2. Keine Seite wurde ohne
  Segmentdatei auf `extracted` hochgestuft.
- **Aufgaben:** SN-001-044 Deutsch 14/14 und SN-045-plus Deutsch 14/14, insgesamt 28/28
  gefüllt, alle `entwurf`, kein Platzhalter.
- **Register:** DSC-059 und DSC-069 ergänzt; Rückfragen 2 und 12 präzisiert. Höchster
  Eintrag bleibt DSC-085; siebzehn Fragen und sieben Blocker.
- **Geänderte Bereiche:** deutscher SN-044-Content-Layer, Diskrepanzregister,
  Rückfragen, Fortschritts- und Übergabedokumentation. Kein Anwendungscode geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json bis
content/tasks/sn-001-044/de/14-support.json vollstaendig; beide deutschen
Generationszweige mit 28 von 28 Aufgaben auf entwurf. Alle 323 PDF-Seiten weiterhin
inspected, noch keine versionierten content_segments im Repo.

First action:
Die Segment-Extraktion als Uebersetzungsgrundlage beginnen. Zuerst aus der Tabelle
public.content_segments in
supabase/migrations/20260806000001_initial_schema.sql ein versioniertes kanonisches
Repo-Format samt Schema- und Referenzpruefung ableiten. Keine Produktinhalte in die
Migration selbst schreiben.

Danach als ersten abgeschlossenen Batch DOC-BMA-SN044, deutsche PDF-Seiten 3 bis 7,
erneut aus tmp/pdfs/sn044-bma-de-001-019 visuell lesen und in quellennahe deutsche
Segmente ueberfuehren: Lieferumfang/Montageort, Betriebsarten, Anschluesse und
GPS-Diagnose. Jedes Segment braucht mindestens stabilen segment_key, serial_range
sn-001-044, language de, segment_type, task_slug, title/body_md, safety_class,
source_document_id beziehungsweise doc_key, source_page_start/-end, source_region,
prev_context, next_context, checksum und change_reason. BLK-005 gilt auch hier: keine
SMS-Befehlszeichenfolge in ein uebersetzbares Segment aufnehmen; eine notwendige
Auslassungsbegruendung bleibt nicht-uebersetzbarer Metadatenkontext.

Erst wenn die Segmente angelegt, gegen die sichtbaren Seiten geprueft und alle neuen
Pruefungen gruen sind, ausschliesslich die Seiten 3 bis 7 in
sources/pages/DOC-BMA-SN044.json von inspected auf extracted (50 Prozent) setzen und
next_action auf die unabhaengige Validierung dieses Batches umstellen. Seiten 1 bis 2 und
8 bis 72 unveraendert lassen. Widersprueche nicht glatten; DSC-Verweise erhalten.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
