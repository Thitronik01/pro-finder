# Handoff

Stand: 2026-08-08 (zweite Fortsetzung). Der Pilot ist nicht freigabefähig; Details und
Prozentwerte stehen in `PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

### Seitenprüfung: 180 → 191 von 323 Seiten, erstmals mit Schwerpunkt auf der alten Generation

Elf neue Seitenrecords, alle aus **DOC-BMA-SN044, Seiten 6–16**. Das Dokument steht damit
bei 16 von 72 Seiten. Die geprüften Seiten decken die Abschnitte **1.5 bis 2.7** ab:
Anschluss des Moduls, Montage und Diagnose der GPS-Antenne, SIM-Karte, Programmieren und
Löschen der Zielrufnummern, Status-LED, empfangene Meldungen, Steuerung per SMS und per
Anruf, Geofencing, Statusbericht, Positionsabfrage und Ausgänge.

Damit liegt erstmals die **inhaltliche Grundlage für die dreizehn fehlenden Aufgaben der
Generation bis SN-044** vor. Bisher existierte dort nur eine von vierzehn.

Geplant waren die Seiten 6–14. Die Seiten 15 und 16 kamen dazu, weil drei Querverweise aus
dem Batch dorthin zeigen und ihre Ziele nicht aus der Textebene übernommen, sondern im
Seitenbild geprüft werden mussten. Beide Seiten sind danach vollständig gelesen und regulär
erfasst worden, statt sie nur als Beleg zu verwenden.

### Der eigentliche Ertrag: der Vergleich von Textebene und Seitenbild

DOC-BMA-SN044 ist das einzige Dokument mit echter Textebene. Der Erkenntnisgewinn entsteht
nicht daraus, dass sie vorhanden ist, sondern daraus, wo sie vom Seitenbild abweicht:

- **Ein funktionsrelevantes Zeichen fehlt in der Textebene.** Der Abfragecode der
  Programmier-SMS beginnt im Bild mit einem sechsstrahligen Sternzeichen; die Textebene gibt
  an dieser Stelle Leerzeichen aus und an der zweiten Fundstelle gar nichts. Wer den Text
  vorgelesen bekommt oder kopiert, erhält einen Code **ohne sein erstes Zeichen** – also
  einen Code, der nicht funktioniert. Bei 700 dpi belegt (DSC-058).
- **Neun Beispiel-SMS existieren nur als Bild.** Auf den Seiten 12 und 13 sind neun
  Meldungen als Abbildungen wiedergegeben. Keine einzige kommt in der Textebene vor – kein
  Feldname, kein Wert, kein Hinweis auf ihre Existenz. Sie sind die einzige Stelle des
  Dokuments, an der zu sehen ist, wie eine Meldung tatsächlich aussieht (DSC-060).
- **Warnungen tragen kein Signalwort.** Auf keiner der elf Seiten ist eine Warnung anders
  gekennzeichnet als durch rote Schrift, Warndreiecke, einen rosa Kasten, Ausrufezeichen
  oder ein Piktogramm. Keines dieser Mittel hat eine Entsprechung in der Textebene. Das
  gelbe ESD-Symbol auf Seite 8 ist die einzige Warnung vor elektrostatischer Entladung im
  gesamten Dokument – und auf der ganzen Seite steht dazu kein einziges Wort (DSC-063).
- **Die Lesereihenfolge ist auf zwei Seiten grob gestört.** Auf den Seiten 10 und 12 gibt
  die Textebene zuerst den Inhalt der unteren Seitenhälfte aus und danach die Überschrift
  und den einleitenden Text der oberen. Die Beispiele kommen vor dem, wovon sie Beispiele
  sind.

### Drei offene Blocker stellen sich jetzt anders dar

- **BLK-005 ist kein Übersetzungsproblem.** Die Hilfe-SMS des Geräts ist auf Seite 13 als
  Abbildung wiedergegeben und nennt wörtlich, welche Befehle das Gerät für gültig hält:
  `STATUS, SCHARF, UNSCHARF, ALARM AUS, A ON, A OFF, B ON, B OFF, A PULSE, B PULSE, FENCE ON, FENCE OFF, GPS OFF, GPS ON`.
  Der Fließtext desselben Handbuchs schreibt dagegen `A an`, `A aus`, `A impuls`, `A XXX`,
  `Fence an`, `fence aus`, `alarm` und `Pos`. Die Ausgangs- und Geofencing-Befehle sind beim
  Gerät englisch, im Handbuch deutsch; `alarm` und `Pos` fehlen der Geräteliste ganz,
  `GPS ON` und `GPS OFF` fehlen dem Handbuch. Der Geofencing-Ausschaltbefehl erscheint
  allein im deutschen Text in **drei** Schreibweisen. Bisher stützte sich der Blocker auf
  den Vergleich zwischen vier Sprachfassungen – jetzt widersprechen sich Handbuch und Gerät
  innerhalb **einer Sprache und eines Dokuments**. Damit ist ausgeschlossen, dass die
  Unterschiede allein Übersetzungsfehler sind (DSC-054).
- **BLK-006 besteht seit zwei Gerätegenerationen unverändert.** Auch das Handbuch bis
  SN-044 beschreibt, was autorisierte und nicht autorisierte Nummern dürfen, aber nicht, wie
  eine Nummer in eine Stufe gelangt. Die Regel ist nur aus den Tabellenbeispielen zu
  erschließen: autorisierte Nummern werden mit einem **Pluszeichen** angereiht, die nicht
  autorisierte mit einem **Minuszeichen**. Kein Satz spricht das aus (DSC-056).
- **BLK-007 ist in der älteren Quelle geregelt.** Seite 15 schreibt fest, dass Geofencing in
  den Schalterstellungen 8 und B über Pin 3 und in allen anderen per SMS geschaltet wird und
  dass es bei geschärfter WiPro automatisch aktiv ist – genau die beiden Punkte, die ab
  SN-045 offen sind. Die Regel wurde **nicht übertragen**; der Projektauftrag verbietet die
  Vermischung der Generationen. Sie liegt als Rückfrage 9 vor, und eine Bestätigung durch
  THITRONIK würde den Blocker auflösen (DSC-062).

### Zwölf neue Registerpositionen und zwei neue Fragen

DSC-054 bis DSC-065, fünf davon mit hoher Schwere, alle erstmals mit der Kennzeichnung
„(bis SN-044)". Neben den drei oben genannten:

- **drei falsche Querverweise** in Kapitel 2, alle drei mit einer zu niedrigen Nummer
  (2.5 statt 2.6, 2.3 statt 2.5, 2.4 statt 2.6). Die Verweisziele sind auf Seite 15 im
  Seitenbild bestätigt. Die übrigen fünf geprüften Verweise stimmen – der Fehler ist auf
  Kapitel 2 begrenzt (DSC-055). Bemerkenswert: der Verweis auf Blinker und Sirene ist hier
  **richtig**, ab SN-045 führt genau er ins Leere (DSC-041). Der Fehler ist dort erst
  entstanden;
- **eine Tabelle, auf die zweimal verwiesen wird und die es nicht gibt.** Seite 10 nennt
  eine „Tabelle Abfragecodes … auf der vorherigen Seite". Seite 9 enthält keine. Sie hat an
  der passenden Stelle eine große Leerfläche, und die maschinelle Prüfung weist für die
  Seite kein Bild und genau ein Zeichenobjekt aus – die Fläche ist tatsächlich leer
  (DSC-057);
- **neun Gerätezustände, unterschieden allein über die Farbe.** Die Zustandsliste auf
  Seite 11 zerfällt in sechs blinkende und drei dauerleuchtende Zustände; innerhalb jeder
  Gruppe ist die Farbe das einzige Merkmal. Wer Rot, Gelb und Grün nicht sicher trennt, kann
  neun Zustände auf zwei reduzieren. Der bisher als DSC-047 geführte Mangel betraf nur die
  dreistufige GPS-Diagnose – er ist erheblich größer (DSC-059);
- **ein Wert, der sich zwischen den Generationen unterscheidet:** Geofencing-Radius ca.
  1000 m bis SN-044 gegen rund 900 m ab SN-045 (DSC-061). Kein Wert wurde in den jeweils
  anderen Zweig übernommen.

Neu in `RUECKFRAGEN_THITRONIK.md`: **Frage 14** (welcher Geofencing-Radius je Generation
gilt) und **Frage 15** (ob die Vorgabe, die SIM-PIN auf 0000 zu ändern und die PIN-Abfrage
zugleich aktiviert zu lassen, unverändert gilt – sicherheitskritisch). Die Fragen 1, 9, 10,
11 und 12 haben je einen **Nachtrag bis SN-044** bekommen; die Belegtabelle in Frage 1
stellt Handbuch, Gerät und die Fassung ab SN-045 nebeneinander.

### Ein Fehler in `scripts/progress.mjs`, der die Abschlussreihenfolge brach

Beim zweiten Aufruf von `npm run progress` brach das Skript mit „FEHLER: Der
Fortschrittsblock in PROJECT_STATUS.md wurde nicht ersetzt." ab, obwohl der Block korrekt
geschrieben war. Ursache war die Erfolgsprüfung:

```js
if (md === before && before !== block) {
  /* Fehler */
}
```

`before` ist die **gesamte Datei**, `block` nur der erzeugte Abschnitt. Bei einem
wiederholten Lauf mit unveränderten Daten ist die Ersetzung richtig und die Datei deshalb
unverändert – die Bedingung hielt genau diesen Normalfall für einen Fehlschlag. Da die
vorgeschriebene Abschlussreihenfolge `progress` → `format` → `check` lautet und `progress`
nach einer Korrektur an `PROJECT_STATUS.md` regelmäßig ein zweites Mal läuft, war der
Fehler nicht theoretisch.

Geprüft wird jetzt, ob der Block danach tatsächlich in der Datei steht (`!md.includes(block)`),
statt ob sich die Datei geändert hat. Zusätzlich ersetzt das Skript über eine Funktion statt
über einen String, weil `$&` und `$1` in einem String-Replacement Sonderzeichen wären und
`next_action` freier Text aus `progress-input.json` ist. Drei aufeinanderfolgende Läufe sind
grün.

**Offen:** Für diesen Fix gibt es **keinen Regressionstest**. Ein sinnvoller Test verlangt,
die reine Ersetzungslogik aus `scripts/progress.mjs` nach `lib/progress.mjs` zu ziehen –
also gemeinsam genutzten Code umzubauen. Das ist in dieser Sitzung bewusst unterblieben,
weil es nicht beauftragt war; das Projekt hat denselben Schritt bei
`lib/content/markdown-table.ts` allerdings schon einmal aus gutem Grund gemacht. Der Punkt
ist als eigene Aufgabe vorgemerkt.

## Was in dieser Sitzung NICHT gelungen ist

- **Die Seitenprüfung ist nicht abgeschlossen.** 132 Seiten bleiben offen: DOC-BMA-SN044
  Seiten 17–72 und DOC-IBA-SN045 Seiten 101–120, 145–150, 173–190, 198–220, 233–240, 247.
- **Die drei Synthese-Auswertungen fehlen weiterhin**: der sprachübergreifende
  Befehlsvergleich der neuen Sprachteile, die vollständige Gegenüberstellung SN-044 gegen
  SN-045 und die Accessibility-Gesamtzählung über beide Dokumente. Für die
  Gegenüberstellung liegt jetzt allerdings deutlich mehr Material vor als zuvor.
- **Die adversariale Gegenprüfung der Seitenrecords ist erneut nicht gelaufen.** Für die elf
  neuen Records hat kein zweiter Agent jede Behauptung gegen das Seitenbild gehalten.
  Abgesichert sind die tragenden Einzelbefunde – Befehlsliste, Sternzeichen, fettes
  Smartphone-Kennzeichen, Verweisziele –, weil sie einzeln bei 400 bis 700 dpi nachgerendert
  wurden. Der beschreibende Rest ist es nicht.
- **Die dreizehn fehlenden Aufgaben der Generation bis SN-044 sind noch nicht geschrieben.**
  Die Quellenlage dafür steht jetzt, die Arbeit selbst nicht.
- Kein Playwright-/axe-Lauf und keine manuelle AT-Matrix in dieser Sitzung.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar; Supabase läuft ausschließlich in CI (Job ist grün);
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere der SMS-Befehle
  beider Generationen, der Spannungsschwellen 11,2 V / 12,5 V, der 13,5 V für fünf Minuten
  zum Speichern der Satellitendaten, der Geofencing-Radien 900 m / 1000 m und der Vorgabe
  zur SIM-PIN 0000;
- keine unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- **Bearbeitete PDF-Seiten:** DOC-BMA-SN044 Seiten 6–16 (elf Records). Gesamtstand
  `inspected`: **191 von 323**; DOC-BMA-SN044 **16 von 72**.
- **Segmente:** keine neuen Segmente extrahiert; alle neuen Seiten bleiben auf `inspected`.
- **Aufgaben:** keine geändert. Alle vierzehn deutschen Aufgaben stehen unverändert auf
  `entwurf`.
- **Neue Widersprüche:** DSC-054 bis DSC-065, davon DSC-054, DSC-056, DSC-058, DSC-059 und
  DSC-060 mit hoher Schwere. **Kein neuer Blocker** – die Funde verstärken BLK-005 und
  BLK-006 und liefern eine Teilantwort zu BLK-007. Keiner still gelöst.
- **Geänderte Dateien:** `sources/pages/DOC-BMA-SN044.json`, `docs/DISCREPANCIES.md`,
  `docs/RUECKFRAGEN_THITRONIK.md`, `docs/HANDOVER_PROMPT.md`, `docs/progress-input.json`,
  `docs/progress.json`, `docs/PROJECT_STATUS.md`, `docs/HANDOFF.md` sowie
  `scripts/progress.mjs` (ein Fehler, siehe unten). Kein Anwendungscode geändert.
- **Tests:** `npm run check` grün (Format, Lint, Types, 17 Unit-Tests, Content, Tokens,
  Karte, Referenz, Secrets, Lockfile, Fortschritt). Kein Playwright/axe-Lauf, keine
  manuelle AT-Matrix, kein Produktions-Build.
- **Fortschritt:** gesamt 30,7 %; PDF-Audit 14,8 % über 323 Seiten.

```text
Resume from:
Dokument DOC-BMA-SN044, PDF-Seite 17, Segment –, Sprache de.

First action:
DOC-BMA-SN044 Seiten 17–26 prüfen. Das Dokument bleibt vorrangig: es ist die einzige Quelle
für die Generation bis SN-044, steht bei 16 von 72 Seiten, und als einziges Dokument mit
echter Textebene erlaubt es die Gegenüberstellung von extrahiertem Text und Seitenbild –
daraus stammen die stärksten Funde beider bisherigen Batches. Der Text liegt vollständig in
`tmp/bma-sn044-text.txt` (je Seite eingeleitet durch „===== PAGE n ====="), neu erzeugbar
mit PyMuPDF.

Zwei Dinge sind dabei gleich mitzuerledigen, weil sie an Seiten dieses Bereichs hängen:
1. DSC-055 offen gebliebener Punkt: Seite 15 kündigt unter 2.5 an, das Wiederfinden des
   Fahrzeugs werde „in Kapitel 2.6 erklärt"; 2.6 ist die Positionsabfrage, ein Abschnitt
   „Fahrzeug wiederfinden" trägt laut Textebene die Nummer 2.8 auf Seite 17. Beim Rendern
   von Seite 17 im Seitenbild bestätigen und den Eintrag abschließen.
2. Ab Seite 18 beginnen die technischen Daten (3.1 bis 3.4). Dort sind die Werte der
   Generation bis SN-044 gegen die bereits erfassten der Generation ab SN-045 zu halten –
   insbesondere Stromaufnahme, Versorgungsspannung und Sicherungswert, weil DSC-020 und
   DSC-061 zeigen, dass technische Werte zwischen den Fassungen abweichen.

Vorgehen, Werkzeuge und verbindliche Regeln stehen in `docs/HANDOVER_PROMPT.md`.

Danach: die restlichen Seiten von DOC-BMA-SN044 (27–72), dann DOC-IBA-SN045 (101–120,
145–150, 173–190, 198–220, 233–240, 247) und die drei ausgefallenen Synthese-Auswertungen.

Sobald DOC-BMA-SN044 durchgeprüft ist, sind die dreizehn fehlenden Aufgaben der Generation
bis SN-044 zu schreiben – Vorbild ist `content/tasks/sn-045-plus/de/03-anschluesse.json`,
und die Befehlssperre aus BLK-005 gilt dort unverändert.

RUECKFRAGEN_THITRONIK.md enthält jetzt fünfzehn entscheidungsreife Fragen und sollte an
THITRONIK gehen; die Arbeit wartet aber nicht darauf.
```
