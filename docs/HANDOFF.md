# Handoff

Stand: 2026-08-09 (dritte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 221 → 228 von 323; der französische Teil von DOC-BMA-SN044 ist fertig

Sieben neue Seitenrecords, DOC-BMA-SN044 Seiten 47–53. Das Dokument steht bei 53 von 72
Seiten – **drei der vier Sprachteile sind vollständig geprüft** (Deutsch, Englisch,
Französisch); es fehlen Schwedisch (54–71) und das Impressum (72).

### Der Hauptfund: der französische Radius weicht um 50 Prozent ab (neu: DSC-078)

Die französische Fassung nennt als Auslöseradius der Diebstahlmeldung „à plus de
**1500 m**" (Seite 47) und „environ **1,5 km**" (Seite 50) – Deutsch und Englisch sagen
ca. 1000 m/1 km, die Generation ab SN-045 rund 900 m. Für denselben sicherheitsrelevanten
Wert kursieren damit **drei Zahlen**; die Differenz innerhalb eines einzigen Handbuchs
beträgt 50 Prozent. Beide französischen Stellen sind bei 400 dpi gesichert und
untereinander konsistent. Rückfrage 14 ist um die Dimension „je Sprachfassung" erweitert.

### Weitere Funde des Batches

- **Der französische SN-044-Befehlssatz ist vollständig belegt (Nachtrag zu DSC-067):**
  `arme`, `desarme`, `alarm` (unübersetzt), `gardiennage active/desactive`, `Statut`,
  `Pos`, `A active`, `A desactivee`, `A impulsion`, `A XXX`. Bemerkenswert: **`Statut`
  weicht um einen Buchstaben von `Status`/`STATUS` ab** – der erste Fall, in dem sich der
  Statusbefehl zwischen Sprachfassungen unterscheidet; und das Ausgangspaar ist
  asymmetrisch geschrieben (`A active`/`A desactivee`). Kein französischer Befehl steht
  in der Geräteliste – der spiegelbildliche Handbuch-gegen-Gerät-Widerspruch (DSC-054)
  besteht im dritten Sprachteil.
- **Der französische Konformitätsabschnitt ist unübersetzt englisch (Nachtrag zu
  DSC-071):** Seite 53 übernimmt wortgleich den englischen Text samt der nicht
  existierenden „directive 1995/5/EG". Zwei von drei Sprachteilen tragen damit die
  falsche Jahreszahl; nur der deutsche nennt die richtige.
- **Alle vier falschen Querverweise sind jetzt in allen drei Sprachteilen nachgewiesen
  (Nachtrag zu DSC-055, abgeschlossen):** französisch „(voir 2.5)" S. 45, „sous 2.3"
  S. 47, „sous 2.4" S. 48, „chapitre 2.6" S. 50.
- **Zwei französische Auslassungen und eine Sinnumkehr (Nachträge zu DSC-073):** Der rote
  160-Zeichen-Hinweis samt POS-Anweisung fehlt ersatzlos (S. 47); der Guthaben-Hinweis
  zur Positions-SMS fehlt (S. 48); die SMS-d'aide-Beschreibung vertauscht Subjekt und
  Richtung – laut Text empfängt die Zielrufnummer den ungültigen Inhalt und antwortet
  selbst (S. 48).
- **DSC-075 gilt für den kompletten Sprachteil:** Auch auf den Seiten 47–53 sind die
  Kopfzeilen vom Balken verdeckt – alle 17 französischen Seiten ohne sichtbare
  Seitenzahlen.
- **DSC-072 gilt für den dritten Sprachteil:** Die Seiten 47, 48 und 52 verwenden die
  unveränderten deutschen Bilder. Kurios auf Seite 52: **Beide** Richtungsdreiecke der
  Bildunterschrift zeigen nach oben – das zweite müsste abwärts auf das Smartphone-Foto
  zeigen (DSC-077).

Registerstand: DSC-078 neu (hoch); Nachträge an DSC-055 (abgeschlossen über drei
Sprachteile), DSC-067, DSC-071, DSC-072, DSC-073, DSC-075, DSC-077; Rückfrage 14
erweitert. Weiterhin siebzehn Fragen, kein neuer Blocker.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 95 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 54–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **Die schwedischen Befehlsbelege** (Seiten 59, 67) stammen weiter nur aus der
  Textebene; die schwedische Kopfzeilen-Sichtbarkeit (DSC-075) ist ungeprüft.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben.**
- **Die drei Synthese-Auswertungen fehlen weiterhin**; für den sprachübergreifenden
  Befehlsvergleich fehlt nur noch Schwedisch.
- **Die adversariale Gegenprüfung der Seitenrecords fehlt**; die französischen Records
  tragen eine `language_note`, ein muttersprachlicher Review steht aus.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix (kein Anwendungscode geändert;
  CI deckt beides ab).

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist
  grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte (SMS-Befehle beider
  Generationen einschließlich `Statut`, Diebstahlmeldungs-Radius 900/1000/1500 m,
  Betriebsart-D-Intervall, Sprache der Gerätemeldungen, Spannungsschwellen,
  SIM-PIN-Vorgabe);
- kein muttersprachlicher Review für Französisch und Schwedisch; keine unabhängige
  englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 47–53 (sieben Records). Gesamtstand
  `inspected`: **228 von 323**; DOC-BMA-SN044 **53 von 72** (Deutsch, Englisch und
  Französisch komplett).
- **Segmente:** keine neuen; alle neuen Seiten auf `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Neue Widersprüche:** DSC-078 (hoch). Nachträge an DSC-055, DSC-067, DSC-071,
  DSC-072, DSC-073, DSC-075, DSC-077; Rückfrage 14 erweitert. Keiner still gelöst.
- **Geänderte Dateien:** `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`,
  `docs/progress-input.json`, `docs/progress.json`, `docs/PROJECT_STATUS.md`,
  `docs/HANDOFF.md`. Kein Anwendungscode geändert.
- **Tests:** `npm run check` lokal grün (23 Unit-Tests und alle Content-, Sicherheits-
  und Fortschrittsprüfungen). CI-Ergebnis zum Commit dieser Sitzung nach dem Push
  prüfen; CI der Vorsitzung (`df3edc3`) war vollständig grün.
- **Fortschritt:** siehe generierter Block in `PROJECT_STATUS.md` (PDF-Audit über 228
  geprüfte Seiten).

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 54, Segment –, Sprache sv.

First action:
DOC-BMA-SN044 Seiten 54–63 prüfen (schwedischer Teil: Innehåll und Sidan 1 bis etwa 9).
Dabei mitzuerledigen, weil Register-Einträge an diesen Seiten hängen:
1. Zuerst die Kopfzeilen-Sichtbarkeit klären (DSC-075): Sind die schwedischen
   Kopfzeilen sichtbar wie in DE/EN oder verdeckt wie im Französischen? Bei Verdacht die
   Sequenzprüfung wiederholen (get_texttrace/get_drawings, dokumentiert im Record der
   Seite 37 und in DSC-075).
2. Seite 59: den Befehl „fence av" im Seitenbild zeichengenau sichern (DSC-067 –
   bisher nur Textebene; er trägt die Vorlagenkontaminations-These mit).
3. Das schwedische Innehåll (Seite 54) gegen die Abschnittsüberschriften halten –
   der englische TOC-Fehler bei 2.4 (DSC-068) könnte auch hier stehen; die Textebene
   sagt für Schwedisch „Geofencing".
4. Durchgehend: Radius (900/1000/1500 m, DSC-078), Betriebsart-D-Intervall (DSC-066),
   Beispiel-SMS-Bilder (erwartbar deutsch, DSC-072) und die vier Querverweise (DSC-055)
   gegen die Register halten. language_note setzen (Schwedisch nicht muttersprachlich
   beurteilbar).
Der Text liegt vollständig in tmp/bma-sn044-text.txt (je Seite „===== PAGE n =====");
Versatz Schwedisch erwartbar: aufgedruckt = PDF − 54.

Danach Seiten 64–72 (Rest Schwedisch: Befehl „fence pa"/„fence av" auf Seite 67,
technische Daten, Konformität; Impressum 72 mit Herstelleradresse). Damit ist
DOC-BMA-SN044 komplett; als Nächstes den sprachübergreifenden Befehlsvergleich (erste
der drei Synthese-Auswertungen) schreiben – das Material aus vier Sprachteilen bis
SN-044, der Geräteliste und vier Sprachteilen ab SN-045 liegt dann vollständig vor.

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre aus BLK-005, kein D-Intervall (Frage 16), kein Radius (Frage 14), keine
Meldungs-Stichwörter (Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet nicht darauf.
```
