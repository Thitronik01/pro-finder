# Handoff

Stand: 2026-08-08 (dritte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Vorab: der Progress-Skript-Umbau aus der Vormerkung

Die in der letzten Sitzung vorgemerkte Aufgabe ist erledigt: Die Ersetzungslogik von
`scripts/progress.mjs` liegt jetzt als `replaceProgressBlock` samt der beiden Marker in
`lib/progress.mjs`, und sechs Regressionstests decken genau die Fälle ab, die den früheren
Fehler ausmachten – Zweitlauf mit unveränderten Daten, `$`-Zeichen im freien Text,
fehlende und verdrehte Marker sowie die wörtliche Übereinstimmung der Marker mit
`PROJECT_STATUS.md`. Eigener Commit (`1bf7ce8`), CI dazu grün.

### Seitenprüfung: 191 → 201 von 323; der deutsche Teil von DOC-BMA-SN044 ist fertig

Zehn neue Seitenrecords, DOC-BMA-SN044 Seiten 17–26. Das Dokument steht bei 26 von 72
Seiten, und zwei Dinge sind jetzt strukturell geklärt:

- **Der deutsche Teil ist vollständig geprüft** (Seiten 1–19): Seite 17 schließt mit
  „2.8 Fahrzeug wiederfinden" die Kapitel ab, Seite 18 trägt die technischen Daten und
  den Support, Seite 19 ist eine Notizseite. Damit ist die **Quellenlage für alle
  dreizehn fehlenden Aufgaben der Generation bis SN-044 komplett**.
- **Das Dokument ist viersprachig**, was bisher niemand festgehalten hatte: Deutsch 1–19,
  Englisch 20–36, Französisch 37–53, Schwedisch 54–71, Impressum 72. Die aufgedruckte
  Zählung beginnt je Sprachteil neu bei 1 – „Seite 15" und „Page 15" existieren im selben
  PDF (Versatz deutsch +2, englisch +20).

### Die zwei stärksten Funde – beide aus dem Sprachvergleich

- **Die englische Seite 25 druckt den schwedischen Geofencing-Befehl.** Zum Abschalten
  des Geofencings weist sie wörtlich `fence av` an (bei 500 dpi gesichert) – „av" ist
  Schwedisch für „aus", und der schwedische Teil verwendet an exakt gleicher Stelle laut
  Textebene denselben Befehl. Der **eigene englische** Abschnitt 2.4 schreibt dagegen
  `Fence on`/`Fence off`. Vorlagenkontamination zwischen Sprachfassungen ist damit
  erstmals innerhalb eines Dokuments belegt (DSC-067, Nachtrag zu Rückfrage 1). Nebenbei
  zeigt die Textebene: Auch bis SN-044 hat jede Sprache ihren eigenen Befehlssatz, und
  die französischen Befehle (`gardiennage active/desactive`) unterscheiden sich von denen
  der SN-045-Fassung – derselbe Befehl hat sich innerhalb einer Sprache zwischen den
  Generationen geändert.
- **Betriebsart D: „8 Minuten" gegen „8 seconds".** Die deutsche Betriebsartentabelle
  (Seite 5) und die englische (Seite 23) nennen für dieselbe Schalterstellung Intervalle,
  die um den Faktor 60 auseinanderliegen; die Nachbarzeile C stimmt überein (90
  Sekunden). Beide Zellen sind hochauflösend nachgerendert. C und D sind die Ortungsmodi
  mit dem dichtesten Meldeintervall – deshalb neue **Rückfrage 16** (DSC-066); bis zur
  Antwort nennt der Pilot für D kein Intervall.

### Weitere Erträge des Batches

- **DSC-055 ist abgeschlossen:** Seite 17 bestätigt im Seitenbild die Abschnittsnummer
  2.8 für „Fahrzeug wiederfinden" – der vierte falsche Querverweis ist belegt, wieder mit
  zu niedriger Nummer, passend zum Muster.
- **Generationsunterschiede in den technischen Daten (DSC-069):** Micro-SIM gegen
  Nano-SIM, feste ca. 21 mA gegen die Spanne 16–21 mA, Richtlinie 1999/5/EG gegen
  2014/53/EU. Dabei fiel auf: Der alte deutsche Wert „ca. 21mA" ist wörtlich der Wert,
  den die englische SN-045-Fassung als Ausreißer fortführt (Nachtrag zu DSC-020) – die
  englische SN-045-Tabelle schreibt offenbar die alte Generation fort.
- **Das englische Inhaltsverzeichnis nennt 2.4 „Installation instructions"** – der
  Abschnitt ist Geofencing (deutsches Verzeichnis und deutsche Abschnittsüberschrift im
  Seitenbild bestätigt; DSC-068, dort auch: target/destination phone numbers, doppelte
  Seitenzählung, unangekündigter Sprachwechsel).
- **Frage 15 hat einen Nachtrag:** Der englische Teil wiederholt das Vorgabenpaar
  „PIN auf 0000" plus „PIN-Abfrage aktiviert" wortgleich (Seite 26) – ein deutscher
  Einzelfehler ist ausgeschlossen, das Paar ist Vorlage.
- **Ein positiver Befund, der Erwähnung verdient:** Auf der englischen Seite 25 ist das
  Blinken der Status-LED zusätzlich zur Farbe über ein Strichmuster dargestellt
  (gestrichelter gegen durchgehenden Balken) – die bislang einzige Stelle beider
  geprüfter Sprachteile, an der ein LED-Verhalten nicht allein an der Farbe hängt
  (Nachtrag zu DSC-063).
- Redaktionelles gesammelt: deutsche Seiten 17–18 in DSC-064 (u. a. „Wertstoffrecyling",
  „Mhz", fehlender Doppelpunkt in der Datenzeile), englischer Teil neu in DSC-070
  (u. a. „Page1", „label name it ALARM", gemischtes unauthorised/unauthorized, „Wipro").

Registerstand: DSC-055 abgeschlossen, DSC-020/063/064/065 ergänzt, **DSC-066 bis DSC-070
neu**, davon DSC-066 und DSC-067 mit hoher Schwere. Kein neuer Blocker – die Funde
verstärken BLK-005 und begründen Rückfrage 16. `RUECKFRAGEN_THITRONIK.md` enthält jetzt
**sechzehn** entscheidungsreife Fragen.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 122 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 27–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **Drei Belege stützen sich noch auf die Textebene ungeprüfter Seiten:** die englischen
  Befehle `Fence on`/`off` (Seite 33), die schwedischen `fence pa`/`av` (Seiten 59, 67)
  und die englische Abschnittsüberschrift 2.4 (Seite 33). Sie sind in DSC-067/068 und den
  Records ausdrücklich so gekennzeichnet und im nächsten Batch im Seitenbild zu
  bestätigen.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben** – aber erstmals ohne Quellenlücke schreibbar.
- **Die drei Synthese-Auswertungen fehlen weiterhin** (sprachübergreifender
  Befehlsvergleich, Gegenüberstellung SN-044/SN-045, Accessibility-Gesamtzählung).
- **Die adversariale Gegenprüfung der Seitenrecords ist erneut nicht gelaufen.** Die
  tragenden Einzelbefunde sind hochauflösend abgesichert (fence av 500 dpi, 8
  Minuten/8 seconds 300/400 dpi, SN 0686-010 500 dpi, TOC-Zeilen 300/400 dpi), der
  beschreibende Rest nicht.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix in dieser Sitzung (kein
  Anwendungscode geändert; CI deckt beides ab).

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere der SMS-Befehle
  beider Generationen (jetzt einschließlich `fence av`), des Betriebsart-D-Intervalls
  (8 Minuten oder 8 Sekunden), der Spannungsschwellen 11,2 V / 12,5 V, der 13,5 V für
  fünf Minuten, der Geofencing-Radien 900 m / 1000 m und der SIM-PIN-Vorgabe 0000;
- keine unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 17–26 (zehn Records). Gesamtstand
  `inspected`: **201 von 323**; DOC-BMA-SN044 **26 von 72** (deutscher Teil komplett).
- **Segmente:** keine neuen Segmente extrahiert; alle neuen Seiten bleiben auf
  `inspected`.
- **Aufgaben:** keine geändert. Alle vierzehn deutschen SN-045-Aufgaben stehen
  unverändert auf `entwurf`.
- **Neue Widersprüche:** DSC-066 bis DSC-070 (DSC-066 und DSC-067 hoch). DSC-055
  abgeschlossen; Nachträge an DSC-020, DSC-063, DSC-064, DSC-065. Rückfrage 16 neu;
  Nachträge an Rückfrage 1 und 15. Keiner still gelöst.
- **Geänderte Dateien:** `lib/progress.mjs`, `scripts/progress.mjs`,
  `tests/unit/progress.test.ts` (eigener Commit `1bf7ce8`);
  `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`, `docs/progress-input.json`,
  `docs/progress.json`, `docs/PROJECT_STATUS.md`, `docs/HANDOFF.md`. Kein Anwendungscode
  geändert.
- **Tests:** `npm run check` lokal grün (Format, Lint, Types, 23 Unit-Tests, Content,
  Tokens, Karte, Referenz, Secrets, Lockfile, Fortschritt). CI zum Refactor-Commit
  `1bf7ce8` grün; CI zum Seitenprüfungs-Commit beim Schreiben dieses Handoffs noch
  ausstehend – Ergebnis nach dem Push prüfen. Kein Browserlauf in dieser Sitzung.
- **Fortschritt:** gesamt 30,8 %; PDF-Audit 15,6 % über 323 Seiten.

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 27, Segment –, Sprache en.

First action:
DOC-BMA-SN044 Seiten 27–36 prüfen (englischer Teil, Page 7 bis Page 16). Dabei
mitzuerledigen, weil an Seiten dieses Bereichs Register-Einträge hängen:
1. Seite 33: die englische Abschnittsüberschrift 2.4 im Seitenbild bestätigen (DSC-068
   sagt „Installation instructions" im Verzeichnis; die Textebene der Seite behandelt
   Geofencing) und die Befehle „Fence on"/„Fence off" zeichengenau sichern (DSC-067).
2. Seite 30/31: prüfen, ob der englische Abschnitt 2.1 eine „Fig. 1" ausweist – die
   englische Seite 22 verweist auf „(see 2.1, Fig. 1)", die Abbildungen des deutschen
   Teils sind unnummeriert.
3. Durchgehend jeden Wert gegen die deutsche Parallelseite halten – die Funde dieser
   Sitzung (fence av, 8 seconds) kamen genau aus diesem Vergleich, nicht aus der
   Textebene allein.
Der Text liegt vollständig in tmp/bma-sn044-text.txt (je Seite „===== PAGE n =====").

Parallel oder danach: die dreizehn fehlenden Aufgaben der Generation bis SN-044 schreiben
– die deutsche Quellenlage ist komplett (Seiten 1–19 geprüft), Vorbild ist
content/tasks/sn-045-plus/de/03-anschluesse.json, die Befehlssperre aus BLK-005 gilt
unverändert, und für Betriebsart D wird bis zur Antwort auf Rückfrage 16 kein Intervall
genannt.

Danach: DOC-BMA-SN044 Seiten 37–72 (Französisch, Schwedisch, Impressum), dann
DOC-IBA-SN045 (101–120, 145–150, 173–190, 198–220, 233–240, 247), dann die drei
Synthese-Auswertungen.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält sechzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet nicht darauf.
```
