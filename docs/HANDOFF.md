# Handoff

Stand: 2026-08-09 (siebte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 273 → 293 von 323

- **DOC-IBA-SN045, Seiten 173–190:** achtzehn neue Records. Seite 173 schließt den
  italienischen Teil ab; Seiten 174–190 ergänzen den zuvor bereits geprüften
  niederländischen Block 191–197.
- **DOC-IBA-SN045, Seiten 198–199:** zwei zusätzliche Records. Seite 198 ist die
  unerwartete niederländische Schlussseite; Seite 199 eröffnet den polnischen Teil.
- DOC-IBA-SN045 steht damit bei **217 von 247 Seiten**. Alle 20 neuen Records wurden mit
  `scripts/merge-page-records.mjs` gegen die Original-PDF geprüft. Jeder Record bleibt
  auf `inspected`, nicht `validated`.

### Pflichtaktion und direkter Folgebatch erledigt

1. Der italienische Teil ist auf den PDF-Seiten 150–173 vollständig. Technische Daten,
   Entsorgung, Konformität und Support sind erfasst; sichtbare Supportadressen besitzen
   keine Linkannotation.
2. Der niederländische Teil umfasst entgegen Inhaltsverzeichnis und Fußzeilen **24 statt
   23 interne Seiten**. Die zusätzliche fast leere Seite 190 verschiebt Kapitel 3 bis 6;
   die echte Schlussseite 198 trägt „Pagina 24 van 23" (DSC-021).
3. Beide bekannten falschen Querverweise, die deutsche Bildbeschriftung
   „GPS-Antenne (Optional)", das unerklärte rote X, die implizite Minus-Regel und die
   ALARM/AAlarm-Abweichung stehen auch italienisch und niederländisch. Die
   Vorlagenbefunde sind damit in allen acht vollständig geprüften Fassungen belegt.
4. Italienisch und Niederländisch bilden zwei weitere, intern gemischte Befehlsprofile:
   Diagnose und Kapitel verwenden jeweils verschiedene Geofencing-Ausschaltbefehle. Der
   niederländische Positionsbefehl ist sichtbar nur als `positi` gesetzt. Alle Angaben
   sind reine Quellenzitate; BLK-005 bleibt unangetastet.
5. Die niederländische Schlussseite übersetzt „Netzsuche" als
   `Op het lichtnet zoeken`, während die LED-Tabelle `Netwerk zoeken` verwendet. Dazu
   kommen `Pro-Zoeker`, drei Begriffe für die Hauptnummer und zwei für denselben
   Hauptkabelbaum (DSC-083).

### Synthese und PDF-Zugänglichkeit erweitert

- Die erste Synthese-Auswertung in `DISCREPANCIES.md` vergleicht jetzt alle acht
  vollständig geprüften Sprachfassungen ab SN-045 (DE, EN, FR, CS, DA, ES, IT, NL) mit
  den vier älteren Fassungen und der älteren Geräte-Hilfe-SMS. Acht Fassungen ergeben
  acht unterschiedliche, teils intern widersprüchliche Profile. Sämtliche Befehle bleiben
  reine Quellenzitate unter BLK-005.
- DSC-016, DSC-017, DSC-021, DSC-022, DSC-033, DSC-040, DSC-041, DSC-044, DSC-046 und
  DSC-082 sind um die italienischen und niederländischen Belege erweitert.
- **DSC-083 neu:** bündelt die niederländischen Kernterminologie- und
  Produktnamensabweichungen. Sie stehen unter „Laufend ergänzt" in den Rückfragen; es
  wurde keine achtzehnte Frage eröffnet.
- Blau unterstrichene Kartenadressen besitzen nun auf siebzehn nichtdeutschen
  Meldungsseiten in EN/FR/CS/DA/ES/IT/NL keine Linkannotation. Die bekannte deutsche
  Ausnahme mit doppelten Annotationen bleibt unverändert (DSC-082).

Registerstand: DSC-083 neu; weiterhin siebzehn Fragen und sieben Blocker; nichts still
gelöst.

## Was in dieser Sitzung nicht erledigt wurde

- **30 Seiten von DOC-IBA-SN045** sind noch `not_started`: 200–220, 233–240 und 247.
- Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben; die deutsche Quellenlage ist vollständig.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die 20 neuen Seitenrecords haben keine unabhängige Gegenprüfung; italienische,
  niederländische und polnische Records tragen eine `language_note`.
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

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045 173–190 und 198–199.
- **Gesamtstand:** 293 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 217/247.
- **Segmente:** keine neuen; alle neuen Seiten bleiben `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Geänderte Bereiche:** Seitenrecords, Diskrepanzregister, Rückfragen, Fortschritts- und
  Übergabedokumentation. Kein Anwendungscode und kein Content-Layer geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün; Unit-, Content-, Token-,
  Karten-, Referenz-, Secret-, Lockfile- und Fortschrittschecks bestanden.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seite 200, Segment –, Sprache pl.

First action:
DOC-IBA-SN045 Seiten 200–210 als ersten polnischen Batch prüfen. Das Deckblatt auf Seite
199 und die Schlussseiten 221–224 sind bereits geprüft. Rendern mit:

python scripts/render-pdf-pages.py sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf 200 210 tmp/pdfs/iba-sn045-200-210 150

Jede Seite visuell prüfen; Polnisch nicht muttersprachlich freigeben, sondern Struktur,
Werte, Terminologie und auffällige Einzelbefunde dokumentieren. Inhaltlich gegen die acht
vollständig geprüften Parallelfassungen halten:
1. Seiten 200–201: Inhaltsverzeichnis – tatsächliche Zielseiten, Gesamtseitenzahl und
   bekannte falsche Querverweise gegen die polnischen Seiten 202–224 prüfen.
2. Seiten 202–205: Haftung, bestimmungsgemäße Verwendung, Lieferumfang, Montage und
   Anschlüsse. Deutsche Bildbeschriftung, unerklärtes rotes X, exakte/maximale
   Antennenkabellänge, Spannungen und Pinbelegung gegen DSC-022/040 halten.
3. Seiten 206–207: Betriebsarten und Tabelle – falsche Verweise 5.4/5.5 und 1.5.2/1.5.3,
   Stellung D, Intervalle, Geofencing-Schwellen und Tabellenlesbarkeit prüfen.
4. Seiten 208–209: Modulanschluss, GPS-Antenne und Diagnose – 13,5 V/fünf Minuten,
   LED-Farben, Reflexionswarnung und Geofencing-Ausschaltwort gegen DSC-033/047 halten.
5. Seite 210: SIM-Konfiguration – Nano-SIM, 2G/3G/4G, M2M/Prepaid, PIN, Mailbox,
   Roaming, iMessages und Warnkennzeichnung prüfen.

Danach ohne Warten Seiten 211–220 prüfen. Zusammen mit 199 und 221–224 ist der polnische
Teil dann vollständig; anschließend fehlen nur noch die schwedischen Seiten 233–240 und
247.

Keine Rufnummer, Kartenadresse oder SMS-Befehlszeichenfolge in den Content-Layer
übernehmen. BLK-005 und BLK-006 gelten unverändert.

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre BLK-005, kein D-Intervall (Frage 16), kein Radius (Frage 14), keine
Meldungs-Stichwörter (Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen; nicht auf Antworten
warten.
```
