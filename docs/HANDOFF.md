# Handoff

Stand: 2026-08-09 (elfte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Segmentformat v1 und erster Extraktionsbatch

- `content/segments/v1/` ist jetzt das kanonische Repo-Format für
  `public.content_segments`. `content/segments/README.md` beschreibt die Abbildung auf die
  Datenbank; IDs, Projektbezug, Autor-/Reviewer-IDs und Zeitstempel bleiben
  Datenbankverantwortung.
- `lib/content/segment-schema.mjs` definiert Schema v1 und die normalisierte
  SHA-256-Prüfsumme. `scripts/check-segments.mjs` prüft Pfade, eindeutige Schlüssel,
  Dokumentinventar, Seitenstatus, Aufgabenzuordnung, DSC-Verweise, Prüfsummen, BLK-005
  und die Segmentabdeckung jeder Seite ab Status `extracted`. Die Prüfung ist Teil von
  `npm run check`; drei neue Unit-Tests decken Schema, Schlüssel/Prüfsummen und die
  Freigabesperre sicherheitsrelevanter Segmente ab.
- DOC-BMA-SN044, deutsche PDF-Seiten 3–7, wurde dafür bei 300 dpi neu gerendert und
  vollständig visuell gelesen. 17 quellennahe deutsche Segmente bilden Lieferumfang,
  Montageort, Anschlüsse, Betriebsarten, GPS-Antennenmontage und GPS-Diagnose ab.
- Alle 17 Segmente nennen stabilen `segment_key`, Generation, Sprache, Aufgabenzuordnung,
  Dokument, PDF-Seite, Seitenregion, vorherigen/nächsten Kontext, Sicherheitsklasse,
  Prüfsumme, Änderungsgrund und gegebenenfalls DSC-Verweise. Sie bleiben auf
  `review_status: entwurf`.
- Betriebsart D besitzt ein eigenes `omission_note`-Segment ohne das gesperrte Intervall
  (DSC-066/Rückfrage 16). Die SMS-Anweisung auf Seite 7 besitzt ebenfalls nur einen
  Auslassungsvermerk ohne Befehlszeichenfolge (DSC-054/BLK-005).
- Erst nach erfolgreicher Schema-, Referenz-, Prüfsummen- und BLK-005-Prüfung wurden
  ausschließlich die Seiten 3–7 auf `extracted` (50 Prozent) gesetzt. Seiten 1–2 und 8–72
  blieben unverändert `inspected`. `extracted` wird nicht als unabhängig validiert
  ausgegeben.

### Vorausgesetzter deutscher Aufgabensatz bis SN-044: 1 → 14 von 14

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

- Der erste Segmentbatch ist noch nicht unabhängig validiert. Die 17 Segmente bleiben
  deshalb `entwurf`; die fünf Quellseiten stehen nur auf `extracted`, nicht `validated`.
- Die Segment-Extraktion ist erst für DOC-BMA-SN044 Seiten 3–7 begonnen. Als nächster
  Extraktionsbatch folgen nach der unabhängigen Validierung die deutschen Seiten 8–11
  (SIM-Karte, Zielrufnummern, Löschen und Status-LED).
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die Seitenrecords besitzen keine unabhängige Gegenprüfung; tragende Einzelwerte und
  alle für die Aufgaben verwendeten deutschen Seiten wurden visuell gesichert. Fünf
  Seiten sind quellennahe extrahiert, aber weiterhin nicht validiert.
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

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 3–7 bei 300 dpi neu gerendert, visuell gelesen
  und in 17 Segmente überführt. Der vorausgesetzte Aufgabenlauf hatte zusätzlich
  DOC-BMA-SN044 1–19, DOC-KA-SN044 1–2 und DOC-IBA-SN045 2, 6, 25 gelesen.
- **Gesamtstand Quellen:** 318 von 323 Seiten `inspected`, 5 von 323 `extracted`;
  DOC-BMA-SN044 67 `inspected`/5 `extracted`, DOC-IBA-SN045 247 `inspected` und beide
  Kurzanleitungen je 2 `inspected`. Keine Seite wurde ohne Segmentdatei hochgestuft.
- **Segmente:** Schema v1 und 17 deutsche SN-044-Segmente; alle `entwurf`, alle mit
  aktueller Prüfsumme, alle durch Dokument, Seite und Region belegt.
- **Aufgaben:** SN-001-044 Deutsch 14/14 und SN-045-plus Deutsch 14/14, insgesamt 28/28
  gefüllt, alle `entwurf`, kein Platzhalter.
- **Register:** DSC-059 und DSC-069 ergänzt; Rückfragen 2 und 12 präzisiert. Höchster
  Eintrag bleibt DSC-085; siebzehn Fragen und sieben Blocker.
- **Geänderte Bereiche:** versionierter Segment-Content, Segment-Schema und -Prüfung,
  Unit-Tests, Seitenstatus sowie Fortschritts- und Übergabedokumentation. Keine
  Produktoberfläche und keine Supabase-Migration geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün; darin 26 Unit-Tests sowie die
  neue Segment-, Content-, Referenz-, Secret- und Lockfile-Prüfung.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
content/tasks/sn-001-044/de/01-geraetegeneration-bestimmen.json bis
content/tasks/sn-001-044/de/14-support.json vollstaendig; beide deutschen
Generationszweige mit 28 von 28 Aufgaben auf entwurf. content/segments/v1 ist als
kanonisches Repo-Format samt Schema-/Referenzpruefung vorhanden. Der erste Batch aus
DOC-BMA-SN044 PDF-Seiten 3-7 umfasst 17 deutsche Segmente; diese fuenf Seiten stehen auf
extracted, alle uebrigen 318 Seiten auf inspected. Noch kein Segment ist unabhaengig
validiert oder technisch freigegeben.

First action:
Den ersten Segmentbatch unabhaengig validieren. DOC-BMA-SN044 PDF-Seiten 3 bis 7 erneut
rendern und jedes der 17 Segmente unter content/segments/v1/sn-001-044/de einzeln gegen
das Seitenbild, die angegebene Region sowie prev_context/next_context halten. Besonders
pruefen: Pinbelegung und 12 V/500 mA, 0-30 V, 13,5 V/fuenf Minuten, Betriebsartentabelle,
die WiPro-Ausnahme ab SN 0686-010 und alle drei GPS-Diagnosezustaende. Die Validierung muss
eine echte zweite Gegenpruefung sein; nicht allein aufgrund gruenen Schemas hochstufen.

BLK-005 strikt beibehalten: keine SMS-Befehlszeichenfolge in title oder body_md. Das
Betriebsart-D-Intervall bleibt wegen DSC-066/Rueckfrage 16 ausgelassen. Widersprueche
nicht glatten. Inhaltliche Korrekturen im change_reason dokumentieren und danach die
checksum aktualisieren. Erst nach vollstaendiger zweiter Gegenpruefung ausschliesslich
die Seiten 3 bis 7 von extracted auf validated (75 Prozent) setzen.

Danach ohne Warten den naechsten Extraktionsbatch aus DOC-BMA-SN044 PDF-Seiten 8 bis 11
anlegen: SIM-Karte, Zielrufnummern, Loeschvorgang und Status-LED. Vor jeder Extraktion
selbst rendern und visuell lesen; BLK-005/006 und Rueckfragen 12, 15 und 17 beachten.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthaelt siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
