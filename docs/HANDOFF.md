# Handoff

Stand: 2026-08-09 (zweite Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 211 → 221 von 323; der französische Teil von DOC-BMA-SN044 zur Hälfte

Zehn neue Seitenrecords, DOC-BMA-SN044 Seiten 37–46 (Sommaire bis LED-Zustandsliste).
Das Dokument steht bei 46 von 72 Seiten; es fehlen der Rest des französischen Teils
(47–53), Schwedisch (54–71) und das Impressum (72).

### Der Hauptfund: die Kopfzeilen des französischen Teils sind unsichtbar (neu: DSC-075)

Auf allen zehn geprüften französischen Seiten ist der graue Kopfzeilenbalken leer. Die
Kopfzeilen („Manuel Pro-finder", „Page n") stehen als weißer Text an der richtigen
Position in der Textebene – aber der Balken wird **nach** ihnen gezeichnet und verdeckt
sie. Maschinell belegt über die Zeichenreihenfolge des PDF: auf Seite 40 Text-Sequenzen
406–408, Balken 409; auf den englischen Seiten umgekehrt (Balken 62, Text 63–65, dort
sichtbar). Folgen: Der geprüfte französische Teil hat **keine sichtbaren Seitenzahlen**,
das Sommaire verweist auf Zahlen, die kein Leser findet, und ein Screenreader liest
Kopfzeilen vor, die Sehende nicht sehen – die Umkehrung des sonst dokumentierten
Textebenen-Problems.

### Weitere Funde des Batches

- **Frankreich bestätigt Deutschland gegen England (Nachtrag zu DSC-066):** Die
  französische Betriebsartentabelle nennt für Stellung D „8 minutes" (400 dpi). Damit
  steht es 2:1 gegen die englischen „8 seconds" – dasselbe Ausreißermuster wie bei
  DSC-020. Rückfrage 16 hat einen entsprechenden Nachtrag.
- **Der vierte Befehlssatz ist gesichert (Nachtrag zu DSC-067):** « gardiennage
  desactive » bei 500 dpi (Seite 42). Gegenüber der SN-045-Fassung („desactiver le
  gardiennage") hat sich sogar die Wortstellung geändert.
- **Sinnverändernde französische Übersetzungsfehler (neu: DSC-073):** die maximale
  GPS-Kabellänge wird als feste Länge ausgegeben („est de 2m"); der gelbe
  LED-Diagnosezustand wird als Fehlposition statt als Empfangsaufbau beschrieben („la
  position n'est pas la bonne"); aus zwei Rechten der autorisierten Nummern wird eine
  Zweckverbindung; aus dem gelb/grünen Wechselblinken eine Abfolge; die Batteriewarnung
  verliert den Zusatz « all in one »; der Info-Absatz der Betriebsartenseite ist
  grammatisch zerbrochen („est pas possible avec ce") – erkennbar unlektorierte
  maschinelle Übersetzung.
- **Der angekündigte FAQ-Link fehlt französisch komplett (neu: DSC-074):** „se trouve
  sur le lien suivant" – danach endet die Seite. Zusammen mit der nicht existierenden
  Abfragecode-Tabelle (DSC-057) führt im französischen Teil kein Weg zu den
  Abfragecodes.
- **Die englische Fassung verliert das doppelte A (neu: DSC-076):** Deutsch und
  Französisch empfehlen den Adressbucheintrag „AAlarm" (doppeltes A für die
  Spitzenposition); die englische Seite 26 druckt nur „Alarm" – die Empfehlung ist dort
  funktionslos. Alle drei Stellen bei 400 dpi gesichert; gefunden durch den
  Dreisprachenvergleich.
- **Das französische Sommaire ist korrekt** („2.4 Geofencing") – der TOC-Fehler ist eine
  Eigenheit des englischen Teils (Nachtrag zu DSC-068). Der erste falsche Querverweis
  („(voir 2.5)", Seite 45), der s/S-Widerspruch und die Doppelglyphen des
  Abfragecode-Sterns bestehen dagegen auch französisch (Nachträge zu DSC-055, DSC-056,
  DSC-058); die Sammelposition DSC-077 nimmt die redaktionellen Einzelfunde auf.

Registerstand: DSC-073 bis DSC-077 neu; Nachträge an DSC-055, DSC-056, DSC-057, DSC-058,
DSC-066, DSC-067, DSC-068. Rückfrage 16 ergänzt; weiterhin siebzehn Fragen. Kein neuer
Blocker.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 102 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 47–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **Die schwedischen Befehlsbelege** (Seiten 59, 67) stammen weiter nur aus der
  Textebene; ob die schwedischen Kopfzeilen ebenfalls verdeckt sind (DSC-075), ist
  ungeprüft.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben.**
- **Die drei Synthese-Auswertungen fehlen weiterhin**; für den sprachübergreifenden
  Befehlsvergleich fehlt nur noch der schwedische Teil.
- **Die adversariale Gegenprüfung der Seitenrecords fehlt.** Die Records des
  französischen Teils tragen wegen der Sprachbarriere eine ausdrückliche
  `language_note`; sinnverändernde Stellen sind einzeln dokumentiert, eine
  muttersprachliche Bewertung steht aus.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix (kein Anwendungscode geändert;
  CI deckt beides ab).

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist
  grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte (SMS-Befehle beider
  Generationen, Betriebsart-D-Intervall, Sprache der Gerätemeldungen, Spannungsschwellen,
  Geofencing-Radien, SIM-PIN-Vorgabe);
- kein muttersprachlicher Review für Französisch (und später Schwedisch); keine
  unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 37–46 (zehn Records). Gesamtstand
  `inspected`: **221 von 323**; DOC-BMA-SN044 **46 von 72**.
- **Segmente:** keine neuen; alle neuen Seiten auf `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Neue Widersprüche:** DSC-073 bis DSC-077 (DSC-073 mittel-hoch, DSC-075 mittel-hoch).
  Nachträge an DSC-055, DSC-056, DSC-057, DSC-058, DSC-066, DSC-067, DSC-068; Nachtrag
  an Rückfrage 16. Keiner still gelöst.
- **Geänderte Dateien:** `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`,
  `docs/progress-input.json`, `docs/progress.json`, `docs/PROJECT_STATUS.md`,
  `docs/HANDOFF.md`. Kein Anwendungscode geändert.
- **Tests:** `npm run check` lokal grün (23 Unit-Tests, Content-, Token-, Karten-,
  Referenz-, Secret-, Lockfile- und Fortschrittsprüfung). CI-Ergebnis zum Commit dieser
  Sitzung nach dem Push prüfen; CI der Vorsitzung (`a90e180`) war vollständig grün.
- **Fortschritt:** siehe generierter Block in `PROJECT_STATUS.md` (PDF-Audit über 221
  geprüfte Seiten).

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 47, Segment –, Sprache fr.

First action:
DOC-BMA-SN044 Seiten 47–53 prüfen (Rest des französischen Teils, Page 10 bis Page 16).
Dabei mitzuerledigen, weil Register-Einträge an diesen Seiten hängen:
1. Seiten 48/49 (2.1): Sind die Beispiel-SMS-Bilder wieder die deutschen (DSC-072)?
   Die Erkennungsstichwörter mit den deutschen Bildern abgleichen.
2. Seiten 48, 49, 51: die drei restlichen Querverweise (chapitre 2.3, 2.4, 2.6 –
   erwartbar falsch wie in DE/EN, DSC-055).
3. Seite 50: den Befehl „gardiennage active" zeichengenau sichern (DSC-067) und die
   2.4-Abschnittsüberschrift gegen das korrekte Sommaire halten (DSC-068).
4. Seite 52/53: technische Daten und Konformität gegen DSC-069/DSC-071 (nennt die
   französische Fassung 1999/5, 1995/5 oder etwas Drittes?).
5. Durchgehend: Kopfzeilen bleiben erwartbar verdeckt (DSC-075) – im Record vermerken;
   Versatz Französisch: aufgedruckt = PDF − 37 (nur Textebene).
Der Text liegt vollständig in tmp/bma-sn044-text.txt (je Seite „===== PAGE n =====").

Danach Schwedisch 54–71 (Kopfzeilen-Sichtbarkeit prüfen; Befehle „fence pa"/„fence av"
auf den Seiten 59 und 67 im Seitenbild sichern; language_note setzen) und Seite 72
(Impressum; Herstelleradresse gegen die Kieler Beispieladresse der Screenshots halten).
Damit wäre DOC-BMA-SN044 komplett und der sprachübergreifende Befehlsvergleich (erste
der drei Synthese-Auswertungen) kann geschrieben werden.

Parallel möglich: die dreizehn fehlenden Aufgaben der Generation bis SN-044 – deutsche
Quellenlage komplett, Vorbild content/tasks/sn-045-plus/de/03-anschluesse.json,
Befehlssperre aus BLK-005, kein D-Intervall (Frage 16), keine Meldungs-Stichwörter
(Frage 17).

Vorgehen, Werkzeuge und verbindliche Regeln stehen in docs/HANDOVER_PROMPT.md.
RUECKFRAGEN_THITRONIK.md enthält siebzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet nicht darauf.
```
