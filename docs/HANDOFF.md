# Handoff

Stand: 2026-08-09. Der Pilot ist nicht freigabefähig; Details und Prozentwerte stehen in
`PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 201 → 211 von 323; der englische Teil von DOC-BMA-SN044 ist fertig

Zehn neue Seitenrecords, DOC-BMA-SN044 Seiten 27–36. Das Dokument steht bei 36 von 72
Seiten – **deutscher und englischer Teil sind vollständig geprüft**, es fehlen
Französisch (37–53), Schwedisch (54–71) und das Impressum (72).

### Der Hauptertrag: der englische Teil ist systematisch unzuverlässig

Der Batch hat die beiden Vortagsfunde nicht nur bestätigt, sondern das Muster dahinter
freigelegt – die englische Fassung ist an den entscheidenden Stellen keine verlässliche
Übersetzung:

- **Handbuch und Gerät widersprechen sich spiegelbildlich (Nachtrag zu DSC-054).** Die
  englische Seite 32 lehrt `arm`/`disarm`; die auf der gegenüberliegenden Seite 31
  abgebildete Hilfe-SMS des Geräts – unverändert das deutsche Bild – führt `SCHARF`/
  `UNSCHARF`. Umgekehrt decken sich die englischen Ausgangsbefehle (`A on`/`off`/`pulse`)
  mit der Geräteliste, die deutschen nicht. **Jede Sprachfassung stimmt mit einem anderen
  Teil der Geräteliste überein und widerspricht dem anderen.**
- **Alle Abbildungen sind die deutschen (neu: DSC-072, Rückfrage 17).** Sämtliche neun
  Beispiel-SMS des englischen Abschnitts 2.1 zeigen deutsche Gerätetexte („Diebstahl",
  „Hilfe erbeten", „Einbruch Tuer/Fenster"), die Kartenprogramm-Screenshots deutsche
  Oberflächen. Ein englischsprachiger Nutzer erfährt nirgends, an welchem Stichwort er
  eine eingehende Meldung erkennt. Ob Geräte bis SN-044 überhaupt lokalisiert melden, ist
  jetzt eine eigene Frage an THITRONIK.
- **Alle vier falschen Querverweise sind wörtlich mitübersetzt (Nachtrag zu DSC-055):**
  „(see 2.5)" auf Seite 28, „chapter 2.3" auf Seite 30, „under 2.4" auf Seite 31,
  „Chapter 2.6" auf Seite 33. Die Fehler liegen in der Vorlage; auch der Verweis auf die
  nicht existierende Abfragecode-Tabelle steht englisch doppelt (Nachtrag zu DSC-057),
  und der s/S-Widerspruch des Smartphone-Kennzeichens ist mitübersetzt (Nachtrag zu
  DSC-056).
- **Die englische Konformitätsangabe nennt eine nicht existierende Richtlinie (neu:
  DSC-071).** „directive 1995/5/EG" statt 1999/5/EG – falsche Jahreszahl plus deutsches
  Kürzel „EG" im englischen Text, bei 400 dpi gesichert. Konformitätsangaben dieser
  Generation sind nur aus der deutschen Fassung zu übernehmen.
- **Das Sternzeichen-Problem hat eine dritte Spielart (Nachtrag zu DSC-058):** Die
  englische Seite 28 verwendet zwei verschiedene Glyphen für dasselbe erste Codezeichen –
  sechsstrahliger Stern im Strukturdiagramm, ASCII-Sternchen in der Beispieltabelle
  (beide bei 400 dpi gesichert); in der Textebene steht ein unbrauchbares
  Private-Use-Zeichen (U+F0DA).

### Die beiden offenen Prüfpunkte des Vortags sind geschlossen

- Seite 33 bestätigt im Seitenbild die Abschnittsüberschrift **„2.4 Geofencing"** – der
  Verzeichniseintrag „Installation instructions" ist endgültig falsch (DSC-068) – und die
  Befehle **`Fence on`/`Fence off`**; der `fence av`-Widerspruch (DSC-067) liegt damit
  belegt innerhalb des englischen Teils. Nur die schwedischen Belege (Seiten 59, 67)
  stammen noch aus der Textebene.
- Der Verweis „(see 2.1, Fig. 1)" von Seite 22 läuft ins Leere: keine der neun
  Beispiel-SMS-Abbildungen trägt eine Nummer (DSC-068).

### Eine Korrektur an eigenen Beständen

Die vergleichende Aussage im Record der englischen Seite 25, die farbunabhängige
LED-Balkendarstellung sei „die einzige Stelle beider Sprachteile", war **falsch**: Die
deutschen Seiten 7 und 11 verwenden dieselben Balken und hatten sie dokumentiert. Record
und DSC-063-Nachtrag sind mit gekennzeichneter Korrektur berichtigt. Der Fall belegt
konkret, warum die ausstehende adversariale Gegenprüfung der Records nötig ist –
Einzelbefunde sind hochauflösend gesichert, vergleichende Aussagen über den Bestand sind
es nicht.

### Register- und Fragenstand

DSC-071 und DSC-072 neu (DSC-072 hoch); Nachträge an DSC-054, DSC-055, DSC-056, DSC-057,
DSC-058, DSC-063 (Korrektur), DSC-067, DSC-068, DSC-070 (jetzt Seiten 20–36).
`RUECKFRAGEN_THITRONIK.md`: neue **Frage 17** (Sprache der Gerätemeldungen bis SN-044),
dritter Nachtrag zu Frage 1, Kopfstand 211 Seiten / siebzehn Fragen. Kein neuer Blocker –
die Funde verstärken BLK-005 und BLK-006.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 112 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 37–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **Die schwedischen Befehlsbelege** (`fence pa`/`av`, Seiten 59 und 67) stammen weiter
  nur aus der Textebene.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben** – die Quellenlage ist seit dem Vortag komplett.
- **Die drei Synthese-Auswertungen fehlen weiterhin** (sprachübergreifender
  Befehlsvergleich, Gegenüberstellung SN-044/SN-045, Accessibility-Gesamtzählung). Für
  den Befehlsvergleich liegt mit den vier Sprachteilen bis SN-044 jetzt fast das gesamte
  Material vor.
- **Die adversariale Gegenprüfung der Seitenrecords fehlt** – und hat mit der korrigierten
  Falschaussage (siehe oben) ihren ersten konkreten Beleg, dass sie gebraucht wird.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix (kein Anwendungscode geändert;
  CI deckt beides ab).

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere der SMS-Befehle
  beider Generationen, des Betriebsart-D-Intervalls, der Sprache der Gerätemeldungen bis
  SN-044, der Spannungsschwellen, der Geofencing-Radien und der SIM-PIN-Vorgabe;
- keine unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 27–36 (zehn Records). Gesamtstand
  `inspected`: **211 von 323**; DOC-BMA-SN044 **36 von 72** (deutscher und englischer
  Teil komplett).
- **Segmente:** keine neuen; alle neuen Seiten auf `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Neue Widersprüche:** DSC-071, DSC-072 (hoch). Nachträge an DSC-054, DSC-055, DSC-056,
  DSC-057, DSC-058, DSC-067, DSC-068, DSC-070; dokumentierte Korrektur an DSC-063 und am
  Record der Seite 25. Frage 17 neu, dritter Nachtrag zu Frage 1. Keiner still gelöst.
- **Geänderte Dateien:** `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`, `docs/progress-input.json`,
  `docs/progress.json`, `docs/PROJECT_STATUS.md`, `docs/HANDOFF.md`. Kein Anwendungscode
  geändert.
- **Tests:** `npm run check` lokal grün (Format, Lint, Types, 23 Unit-Tests, Content,
  Tokens, Karte, Referenz, Secrets, Lockfile, Fortschritt). CI-Ergebnis zum Commit dieser
  Sitzung nach dem Push prüfen; CI der Vorsitzung (`c8e4e1c`) war vollständig grün.
- **Fortschritt:** siehe generierter Block in `PROJECT_STATUS.md` (PDF-Audit jetzt über
  211 geprüfte Seiten).

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 37, Segment –, Sprache fr.

First action:
DOC-BMA-SN044 Seiten 37–46 prüfen (französischer Teil, Sommaire bis etwa Page 10). Dabei
mitzuerledigen:
1. Den Seitenzahl-Versatz des französischen Teils im Seitenbild bestätigen (erwartet:
   aufgedruckt = PDF − 36).
2. Auf den Seiten 42 und 50 die Befehle „gardiennage active"/„gardiennage desactive"
   zeichengenau sichern (DSC-067; sie weichen von den SN-045-Befehlen ab).
3. Prüfen, ob der französische Teil dieselben deutschen Abbildungen verwendet (DSC-072)
   und ob die vier falschen Querverweise auch dort stehen (DSC-055) – erwartbar ja; jede
   Abweichung wäre ein eigener Fund.
4. Das französische Inhaltsverzeichnis (Seite 37) gegen die Abschnittsüberschriften
   halten – der englische TOC-Fehler bei 2.4 (DSC-068) könnte auch hier stehen; die
   Textebene sagt für Französisch „Geofencing", das ist im Bild zu bestätigen.
Der Text liegt vollständig in tmp/bma-sn044-text.txt (je Seite „===== PAGE n =====").

Danach Seiten 47–53 (Rest Französisch), dann Schwedisch 54–71 (dort auf den Seiten 59
und 67 die Befehle „fence pa"/„fence av" im Seitenbild sichern – sie sind bisher nur aus
der Textebene belegt und tragen DSC-067 mit), dann Seite 72 (Impressum,
Herstelleradresse gegen die Kieler Beispieladresse der Screenshots halten).

Parallel oder danach: die dreizehn fehlenden Aufgaben der Generation bis SN-044
schreiben – deutsche Quellenlage komplett (Seiten 1–19), Vorbild
content/tasks/sn-045-plus/de/03-anschluesse.json, Befehlssperre aus BLK-005 unverändert,
für Betriebsart D bis zur Antwort auf Frage 16 kein Intervall, keine
Erkennungsstichwörter für Meldungen bis zur Antwort auf Frage 17.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet nicht darauf.
```
