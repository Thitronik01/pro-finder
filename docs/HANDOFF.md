# Handoff

Stand: 2026-08-09 (achte Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 293 → 314 von 323

- **DOC-IBA-SN045, Seiten 200–220:** einundzwanzig neue polnische Records. Zusammen mit
  dem bereits geprüften Deckblatt 199 und den Schlussseiten 221–224 ist der polnische
  Sprachblock vollständig.
- DOC-IBA-SN045 steht damit bei **238 von 247 Seiten**. Alle neuen Records wurden mit
  `scripts/merge-page-records.mjs` gegen Seitenmaße und lesbare Zeichenzahlen der
  Original-PDF geprüft. Jeder Record bleibt auf `inspected`, nicht `validated`.
- Der Gesamtstand ist **314 von 323 Seiten**. Offen sind ausschließlich die schwedischen
  Seiten 233–240 und 247.

### Polnischer Sprachblock abgeschlossen

1. Der Teil umfasst tatsächlich **25 statt 24 interne Seiten**. PDF-Seite 216 enthält
   nur das isolierte Fragment „Programowanie numerów miejsc docelowych.". Diese Zusatzseite
   verschiebt Kapitel 3 bis 6; die Schlussseite 224 trägt „Strona 25 z 24" (DSC-021).
2. Die deutsche Bildbeschriftung „GPS-Antenne (Optional)", das unerklärte rote X, beide
   falschen Querverweise, die implizite Minus-Regel und `ALARM`/`AAlarm` stehen auch
   polnisch. Die Vorlagenbefunde sind damit in allen neun vollständig geprüften
   SN-045-Fassungen belegt (DSC-016/017/022/040/044).
3. Polen bildet das neunte Befehlsprofil: Die Diagnose nennt
   `ogrodzenie wyłączone`, Kapitel 5 `fence off`; Status, Position, Ausgänge und
   Anlernmodus verwenden englische Kapitelbefehle. Die englische Hilfe-SMS listet dagegen
   nur `ARM`/`DISARM`/`STATUS`/`POS`. Alle Angaben bleiben reine Quellenzitate unter
   BLK-005.
4. Die LED-Tabelle dupliziert für Zustand 9 die Beschreibung von Zustand 8: Der Text nennt
   erneut gelb-grünes Blinken und fehlende Zielnummern, obwohl die Grafik nur grün blinkt
   und der Schluss-Hinweis Grün als Normalbetrieb bezeichnet. Zusammen mit `stuku 3`
   gegen `styku 3` und `wuczeniu`/`wuczania` gegen `uczenia` ist das als DSC-084 erfasst.
5. Die polnischen Meldungsseiten 218/219 besitzen trotz acht blau unterstrichener
   Kartenadressen **null** Linkannotationen. Damit sind neunzehn nichtdeutsche
   Meldungsseiten in EN/FR/CS/DA/ES/IT/NL/PL inert; die bekannte deutsche Seite mit
   doppelten Annotationen bleibt die einzige Ausnahme (DSC-082).
6. Ein früherer niederländischer Seitenrecord wurde berichtigt: Die feste
   Zwei-Meter-Antennenleitung ist keine Abweichung vom deutschen SN-045-Master; auch der
   deutsche Text schreibt wörtlich, dass die Kabellänge zwei Meter beträgt.

### Synthese und Register erweitert

- Die erste Synthese-Auswertung in `DISCREPANCIES.md` vergleicht jetzt neun vollständig
  geprüfte Sprachfassungen ab SN-045 (DE, EN, FR, CS, DA, ES, IT, NL, PL) mit den vier
  älteren Fassungen und der älteren Geräte-Hilfe-SMS. Neun Fassungen ergeben neun
  unterschiedliche, teils intern widersprüchliche Profile.
- DSC-016, DSC-017, DSC-021, DSC-022, DSC-033, DSC-040, DSC-041, DSC-044, DSC-046,
  DSC-047 und DSC-082 sind um die polnischen Belege erweitert.
- **DSC-084 neu:** polnische Widersprüche am LED-Normalbetrieb, Anschlusswort und
  Anlernmodus. Der Fund steht unter „Laufend ergänzt" in den Rückfragen; es wurde keine
  achtzehnte Frage eröffnet.

Registerstand: DSC-084 neu; weiterhin siebzehn Fragen und sieben Blocker; nichts still
gelöst.

## Was in dieser Sitzung nicht erledigt wurde

- **9 Seiten von DOC-IBA-SN045** sind noch `not_started`: 233–240 und 247.
- Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind weiterhin nicht
  geschrieben; die deutsche Quellenlage ist vollständig.
- Die zweite und dritte Synthese-Auswertung fehlen weiterhin.
- Die 21 neuen Seitenrecords haben keine unabhängige Gegenprüfung; die polnischen Records
  tragen eine `language_note`.
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

- **Bearbeitete PDF-Seiten:** DOC-IBA-SN045 200–220.
- **Gesamtstand:** 314 von 323 Seiten `inspected`; DOC-BMA-SN044 72/72,
  DOC-IBA-SN045 238/247.
- **Segmente:** keine neuen; alle neuen Seiten bleiben `inspected`.
- **Aufgaben:** keine geändert; alle vierzehn deutschen SN-045-Aufgaben auf `entwurf`.
- **Geänderte Bereiche:** Seitenrecords, Diskrepanzregister, Rückfragen, Fortschritts- und
  Übergabedokumentation. Kein Anwendungscode und kein Content-Layer geändert.
- **Abschlussläufe:** in der vorgeschriebenen Reihenfolge `npm run progress` →
  `npm run format` → `npm run check` vollständig grün.
- **Referenz-Repository:** sauber; Push-URL `DISABLED`.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seite 233, Segment –, Sprache sv.

First action:
DOC-IBA-SN045 Seiten 233–240 als letzten schwedischen Hauptbatch prüfen. Das Deckblatt
225, Inhaltsverzeichnis 226/227, Haftung 228, Lieferumfang 229, Montage 230, Anschlüsse
231, Betriebsarten 232 sowie die Schlusskapitel 241–246 sind bereits geprüft. Rendern mit:

python scripts/render-pdf-pages.py sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf 233 240 tmp/pdfs/iba-sn045-233-240 150

Jede Seite visuell prüfen; Schwedisch nicht muttersprachlich freigeben, sondern Struktur,
Werte, Terminologie und auffällige Einzelbefunde dokumentieren. Inhaltlich gegen die neun
vollständig geprüften Parallelfassungen halten:
1. Seite 233: Betriebsartentabelle – Stellung D, Intervalle, Spannungsgrenzen, Verweis
   1.5.2/1.5.3 und Tabellenlesbarkeit gegen DSC-040 halten.
2. Seiten 234–235: Modulanschluss, GPS-Antenne und Diagnose – 12 V/500 mA, 15 °C,
   13,5 V/fünf Minuten, LED-Farben, Reflexionswarnung und schwedisches
   Geofencing-Ausschaltwort gegen DSC-033/047 halten.
3. Seiten 236–238: SIM-Konfiguration, Einsetzen, App/Aktivierung, Adressbuch und Rollen –
   Nano-SIM, 2G/3G/4G, M2M/Prepaid, PIN/Mailbox/Roaming/iMessage, QR-/ESD-Zugang,
   ALARM/AAlarm und zehn Zielnummern prüfen.
4. Seiten 239–240: Programmier-SMS-Syntax und Löschen – Landesvorwahl gegen die
   Beispielnummern, unerklärtes Minuszeichen (BLK-006), Schalterstellung E,
   Hauptkabelbaum, LED-Abbruchbedingung und Seitenumbruch prüfen.

Danach ohne Warten PDF-Seite 247 prüfen. Sie ist die letzte Seite des schwedischen Teils
und des gesamten Dokuments: interne Seitenzählung, technische Daten, 2014/53/EU,
Entsorgung, Supportpfade, Telefonnummer/E-Mail, Linkannotationen und Impressums-/
Schlusslayout gegen die neun Parallelfassungen halten. Anschließend Seitenprüfung auf
323/323, Synthese auf zehn SN-045-Profile und Register/Rückfragen abschließen.

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
