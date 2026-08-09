# Handoff

Stand: 2026-08-09 (sechste Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 258 → 273 von 323

- **DOC-IBA-SN045, Seiten 111–119:** neun neue Records; der dänische Sprachteil ist mit
  PDF-Seiten 101–123 vollständig geprüft.
- **DOC-IBA-SN045, Seiten 145–150:** sechs neue Records; der spanische Sprachteil ist mit
  PDF-Seiten 124–149 vollständig geprüft, außerdem ist das italienische Deckblatt auf
  Seite 150 erfasst.
- DOC-IBA-SN045 steht damit bei **197 von 247 Seiten**. Alle 15 neuen Records wurden mit
  `scripts/merge-page-records.mjs` gegen die Original-PDF geprüft. Jeder Record bleibt auf
  `inspected`, nicht `validated`.

### Pflichtaktion und direkter Folgebatch erledigt

1. Die dänische GPS-Diagnose bestätigt 13,5 V für mindestens fünf Minuten, die
   kontextabhängigen LED-Farben und den Geofencing-Hinweis. Der dänische Ausschaltbefehl
   ist als Quellenzitat erfasst; BLK-005 bleibt unangetastet.
2. `ALARM` gegen `AAlarm`, die nur implizit erklärte Minus-Regel der Zielrufnummern und
   die neun farbabhängigen LED-Zustände stehen auch dänisch. Abschnitt 5.1 verspricht SMS,
   erklärt aber ausschließlich einen Anruf (DSC-016/017/041/047).
3. Dänische Beispiel-SMS kombinieren lokalisierten Text mit englischen Feldern und
   Dezimalpunkt gegen Dezimalkomma. Die Hilfe-SMS nennt einen fünften lokalisierten
   Befehlssatz; die Kapitel decken ihn nicht vollständig ab.
4. Der spanische Teil ist vollständig. Er mischt `valla apagada` auf Seite 134 mit den
   englischen Kapitelbefehlen und einer vollständig englischen Hilfe-SMS. Sechs geprüfte
   Sprachfassungen ergeben damit sechs unterschiedliche, teils intern widersprüchliche
   Befehlsprofile.
5. Die spanische Schlussseite trägt „Página 25 de 24". Wie im französischen Teil ist die
   interne Zählung um eins zu kurz; fast leere Seiten entstehen durch zerrissene
   Seitenumbrüche (DSC-021).

### Synthese und PDF-Zugänglichkeit erweitert

- Die erste Synthese-Auswertung in `DISCREPANCIES.md` vergleicht jetzt alle sechs
  vollständig geprüften Sprachfassungen ab SN-045 (DE, EN, FR, CS, DA, ES) mit den vier
  älteren Fassungen und der älteren Geräte-Hilfe-SMS. Spanisch ist als Mischprofil aus
  lokalisierter Einzelanweisung und englischem Kapitel-/Gerätesatz ausgewiesen. Sämtliche
  Befehle bleiben reine Quellenzitate unter BLK-005.
- **DSC-082 neu:** Blau unterstrichene Kartenadressen sehen in allen sechs geprüften
  Sprachen interaktiv aus. Deutsche Seite 19 hat keine Annotation, Seite 20 legt über
  fünf sichtbare Adressen zehn Annotationen; EN/FR/CS/DA/ES besitzen auf allen vierzehn
  geprüften Meldungsseiten keine einzige. Ein deutsches Ziel ist zusätzlich kürzer als
  sein sichtbarer Text.
- DSC-016, DSC-017, DSC-021, DSC-025, DSC-033, DSC-041, DSC-046 und DSC-082 sind um die
  dänischen beziehungsweise spanischen Belege erweitert. Rückfrage 1 weist nun sechs
  unterschiedliche Dokumentationsprofile aus.

Registerstand: DSC-082 neu; weiterhin siebzehn Fragen und sieben Blocker; nichts still
gelöst.

## Was in dieser Sitzung nicht erledigt wurde

- **50 Seiten von DOC-IBA-SN045** sind noch `not_started`: 173–190, 198–220, 233–240
  und 247.
- Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben; die deutsche Quellenlage ist vollständig.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die 15 neuen Seitenrecords haben keine unabhängige Gegenprüfung; dänische und spanische
  Records tragen eine `language_note`.
- Keine manuelle AT-, Zoom-, Reflow-, Forced-Colors- oder Reduced-Motion-Prüfung.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI;
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere SMS-Befehle,
  Radius, Betriebsart-D-Intervall, Gerätemeldungssprache, Spannungen und SIM-PIN-Vorgabe;
- kein muttersprachlicher Review für Französisch, Tschechisch, Schwedisch, Dänisch,
  Spanisch und Italienisch.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045 111–119 und 145–150.
- **Gesamtstand:** 273 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 197/247.
- **Segmente:** keine neuen; alle neuen Seiten bleiben `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Geänderte Bereiche:** Seitenrecords, Diskrepanzregister, Rückfragen, Fortschritts- und
  Übergabedokumentation. Kein Anwendungscode und kein Content-Layer geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün; Unit-, Content-, Token-, Karten-,
  Referenz-, Secret-, Lockfile- und Fortschrittschecks bestanden.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seite 173, Segment –, Sprache it.

First action:
DOC-IBA-SN045 Seiten 173–190 prüfen – zuerst die italienische Schlussseite, danach den
noch fehlenden Anfang des niederländischen Teils vor den bereits geprüften Seiten
191–197. Rendern mit:

python scripts/render-pdf-pages.py sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf 173 190 tmp/pdfs/iba-sn045-173-190 150

Jede Seite visuell prüfen; Italienisch und Niederländisch nicht muttersprachlich
freigeben, sondern Struktur, Werte, Terminologie und auffällige Einzelbefunde
dokumentieren. Inhaltlich gegen die deutschen Parallelseiten 3–25 halten:
1. Seite 173: italienische technische Daten, Entsorgung, Konformität und Support; interne
   Schlussseitenzählung, Richtlinie, Bandlisten, Links und Kontaktdaten prüfen. Damit ist
   Italien vollständig.
2. Seite 174: niederländisches Deckblatt – Geltungsbereich ab SN-045, Sprachmarke,
   Herstelleradresse und fehlende Textebene.
3. Seiten 175–176: Inhaltsverzeichnis – Kapitelnummern, Zielseiten und bekannte falsche
   Querverweise gegen den tatsächlichen niederländischen Teil halten.
4. Seiten 177–184: Haftung, bestimmungsgemäße Verwendung, Lieferumfang, Installation,
   Anschlüsse, Betriebsarten, GPS-Antenne und Diagnose. Technische Werte gegen DE/EN/FR/
   CS/DA/ES prüfen; deutsche Bildbeschriftung, rotes X, farbabhängige LED-Zustände und
   DSC-022/040/047 beachten.
5. Seiten 185–190: SIM-Konfiguration, App, Aktivierung, ALARM/AAlarm,
   Zielrufnummern-Syntax und Löschvorgang. Plus-/Minus-Berechtigung gegen BLK-006/DSC-044,
   Befehle gegen DSC-033/BLK-005 halten. Keine Rufnummer und keinen Befehl in den
   Content-Layer übernehmen.

Nach dem Batch sind Italienisch und – zusammen mit den bereits geprüften Seiten 191–197 –
Niederländisch vollständig. Danach DOC-IBA-SN045 Seiten 198–220, 233–240 und 247.

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre BLK-005, kein D-Intervall (Frage 16), kein Radius (Frage 14), keine
Meldungs-Stichwörter (Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
