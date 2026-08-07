# Handoff

Stand: 2026-08-07. Der Pilot ist nicht freigabefähig; Details und Prozentwerte stehen in
`PROJECT_STATUS.md`.

## In dieser Fortsetzung abgeschlossen

- `npm run check` läuft erstmals vollständig grün. Dabei zwei stille Fehler behoben:
  - der Secret-Scanner meldete die korrekte, leere `.env.example` als belegten Secret-Wert,
    weil `\s*` im Muster über den Zeilenumbruch hinweg auf den Namen der Folgezeile traf;
  - der generierte Fortschrittsblock in `PROJECT_STATUS.md` wurde nie ersetzt, weil die
    Klammern im Marker-Text unmaskiert in ein `RegExp` gingen und der Ausdruck seinen
    eigenen Quelltext nicht traf. Der `includes`-Guard schlug an, der `replace` lief ins
    Leere, die Datei wurde unverändert zurückgeschrieben – ohne Fehlermeldung. Der Fall
    bricht jetzt hart ab.
- `next-env.d.ts` von Prettier ausgenommen: die Datei wird von `next typegen` mit CRLF und
  doppelten Anführungszeichen regeneriert, sodass `format:check` nach jedem `typecheck`
  im selben `npm run check` erneut fehlgeschlagen wäre.
- `tmp/` in `.gitignore` aufgenommen (gerenderte PDF-Seiten der Seitenprüfung).
- PDF-Batch 3: DOC-IBA-SN045 Seiten 37–46 (englischer Teil, intern Page 11–20 von 23)
  vollständig visuell geprüft und als `inspected` erfasst.
- PDF-Batch 4: Seiten 47–56 – Ende des englischen Teils (intern Page 21–23 von 23,
  einschließlich der vollständigen technischen Daten) und Beginn des französischen Teils
  (Deckblatt, Inhaltsverzeichnis, intern Page 3–6 de 25).
- PDF-Batch 5: Seiten 57–66 – französischer Teil, intern Page 7–16 de 25, einschließlich
  der vollständigen Betriebsartentabelle und der GPS-Diagnose.
- PDF-Batch 6: Seiten 67–76 – Rest des französischen Teils. Damit sind Deutsch, Englisch
  und Französisch vollständig geprüft.
- PDF-Batch 7: Seiten 77–86 – Beginn des tschechischen Teils bis interne Strana 9 z 23.
- PDF-Batch 8: Seiten 87–96 – tschechischer Teil bis interne Strana 19 z 23, einschließlich
  LED-Tabelle, Kapitel 4 und dem Beginn der Funktionen.
- PDF-Batch 9: Seiten 97–100 – Abschluss des tschechischen Teils. Damit sind vier
  vollständige Sprachteile geprüft.
- `docs/RUECKFRAGEN_THITRONIK.md` angelegt: acht entscheidungsreife Fragen mit wörtlichen
  Belegen, sortiert nach Dringlichkeit. Das ist der Punkt, an dem der Pilot ohne Antworten
  nicht sinnvoll weiterläuft.
- Vier deutsche Aufgaben aus geprüften Quellseiten extrahiert: Montageort (S. 7),
  SIM-Karte (S. 13), Technische Daten und Support (beide S. 25). Zusammen mit der
  Status-LED sind 5 von 14 Aufgaben inhaltlich gefüllt. Ausgewählt wurden gezielt die
  Aufgaben, die an **keiner** offenen Rückfrage hängen.
- CI ist erstmals vollständig grün: `npm ci`, Prüfkette, Produktions-Build, der
  Supabase-Job mit `db reset`, `db lint` und pgTAP sowie Playwright/axe mit 32 Tests.
- Textebene von DOC-IBA-SN045 vollständig ausgewertet: **1 von 247 Seiten** enthält
  lesbaren Text; 34 Seiten liefern ausschließlich Steuerzeichen U+0003 und werden von
  zeichenzählenden Prüfungen fälschlich für zugänglich gehalten. Tabelle in `IST_AUDIT.md`.
- Neunzehn neue Registereinträge DSC-013 bis DSC-031, darunter sechs mit hoher Schwere.
- Härtungsmigration und pgTAP-Negativtests statisch durchgesehen (siehe unten).

## Kritischer technischer Wiedereinstieg

Die Härtungsmigration `20260806204417_security_hardening.sql` und
`supabase/tests/security_behavior_test.sql` sind vorhanden und statisch geprüft. Die
Migration ersetzt die umgehbaren Freigaben durch schmale `private.transition_*`-Funktionen
(`security definer`, `search_path = ''`), entzieht `authenticated` die Direktrechte,
vergibt nur spaltenweise `grant`s, bindet Autorisierung an `project_memberships`, berechnet
Prüfsummen per Trigger und erzwingt das Vier-Augen-Prinzip zusätzlich über
`CHECK`-Constraints.

**Das ist bisher eine Konstruktionsaussage, keine Verhaltensaussage.** Docker Desktop ist
installiert, startet in dieser Umgebung aber keinen Daemon; `supabase db reset --local` und
`supabase test db --local` konnten erneut nicht ausgeführt werden. Erst ein grüner CI-Job
`Supabase reset and RLS tests` gilt als Nachweis. Bis dahin bleibt Staging gesperrt.

Erste Aktion für die nächste Sitzung mit funktionierendem Docker:

```bash
npx supabase start --exclude studio,imgproxy,mailpit,edge-runtime,logflare,vector,supavisor,realtime --yes
npx supabase db reset --local
npx supabase db lint --local --level warning --fail-on error
npx supabase test db --local
```

Statisch aufgefallen und beim ersten echten Lauf zu prüfen: `security_behavior_test.sql`
setzt voraus, dass `seed.sql` ein Projekt mit dem Slug `pro-finder-pilot` anlegt und dass
auf `auth.users` kein Trigger existiert, der `profiles` automatisch befüllt. Beides trifft
im aktuellen Stand zu, ist aber nicht durch einen Testlauf bestätigt.

Ein Restrisiko bleibt bewusst offen: eine Person, deren Projektrolle zwischen
`technically_validated` und `language_reviewed` von `technical_reviewer` auf
`language_reviewer` geändert wird, könnte beide Reviews derselben Übersetzung abgeben. Das
erfordert Adminrechte und ist im Auditlog sichtbar, ist aber nicht technisch verhindert.

## Inhaltlicher Wiedereinstieg

Der Seiten-Audit hat einen Befund erzeugt, der eine Projektregel widerlegt: SMS-Befehle
sind **nicht** sprachneutral. Dieselbe interne Seite 19 von 23 nennt auf Deutsch
`fence an`/`fence aus` und auf Englisch `fence on`/`fence off`; die Hilfe-SMS nennt
`SCHARF`/`UNSCHARF` gegenüber `ARM`/`DISARM`. Batch 4 hat das Muster erhärtet:
`a an`/`a aus`/`a impuls` gegenüber `a on`/`a off`/`a pulse` und `anlernmodus an`/`aus`
gegenüber `teach mode on`/`off`. Umgekehrt sind alle rein alphanumerischen Befehle
(`status`, `position`, `a %min%`) identisch – betroffen ist also genau das, was Wörter
enthält. Das spricht für bewusste Lokalisierung, bestätigt ist es nicht.

Konsequenz: `scripts/check-tokens.mjs` darf für Befehle keine Gleichheit über Sprachen
erzwingen – der Kommentar behauptete das, das Muster fehlte ohnehin; beides ist jetzt
klargestellt. Bis THITRONIK die Befehlssprache klärt (BLK-005), wird kein Befehl
übersetzt und keiner unverändert übernommen.

Batch 5 hat den Befund noch einmal verschärft: Die französische Fassung nennt an derselben
Stelle, an der Deutsch `fence aus` und Englisch `fence off` steht, die Wortgruppe
« desactiver le gardiennage » – ohne Akzent und laut Text über die THITRONIK App statt per
SMS an die Modulnummer (DSC-026). Das sieht aus, als sei ein Befehl wie Fließtext
übersetzt worden.

Zwei weitere Befunde treffen Projektannahmen:

1. **Der deutsche Master ist nicht fehlerfrei.** Der Verweis auf die Ausgangssteuerung
   nennt schon im Deutschen Kapitel 5.4 statt 5.5; Englisch und Französisch haben ihn
   korrekt übersetzt (DSC-028). Ebenso wurde der Widerspruch „ALARM"/„AAlarm" in beide
   Übersetzungen mitgeführt (DSC-016). Der deutsche Text braucht denselben technischen
   Review wie die Übersetzungen – „geprüfter deutscher Master" darf nicht heißen
   „übernommener deutscher Text".
2. **Die Sprachfassungen transportieren nicht denselben Inhalt.** Die SIM-Empfehlung
   lautet deutsch t-mobile/Vodafone, englisch nur allgemein „M2M-Karte", französisch
   namentlich die Firma DOMOTEC (DSC-027). Dazu kommen ein abweichender technischer Wert
   (DSC-020) und zwei zusätzliche interne Seiten im Französischen (DSC-021). Vor der
   Segment-Extraktion muss geklärt sein, welche Fassung gilt.

## Externe/menschliche Blocker

- Docker-Daemon lokal nicht startbar;
- Netlify-Site und Zugriffsschutz nicht verbunden;
- finale Karten-URL und Supportkontakt unbestätigt;
- Braille-Dienstleister und physische Testpersonen fehlen;
- keine technische Freigabe sicherheitskritischer Inhalte, insbesondere der SMS-Befehle,
  der Spannungsschwellen 11,2 V / 12,5 V und des Geofencing-Radius von ca. 900 m;
- keine unabhängige englische Sprachprüfung.

## Abschlussprotokoll

- Bearbeitete PDF-Seiten: DOC-IBA-SN045 Seiten 37–46 (Batch 3), 47–56 (Batch 4) und 57–66
  (Batch 5), zusätzlich die deutschen Seiten 9, 21, 24 und 25 zur Gegenprüfung.
  Gesamtstand `inspected`: 70 von 323 Seiten.
- Segmente: keine neuen Segmente extrahiert; alle drei Batches bleiben auf `inspected`.
- Neue Widersprüche: DSC-013 bis DSC-031, davon DSC-013, DSC-014, DSC-020, DSC-026,
  DSC-027 und DSC-028 mit hoher Schwere. Keiner still gelöst.
- Geänderte Dateien: `scripts/check-secrets.mjs`, `scripts/progress.mjs`,
  `scripts/check-tokens.mjs`, `.prettierignore`, `.gitignore`,
  `sources/pages/DOC-IBA-SN045.json`, `docs/DISCREPANCIES.md`,
  `docs/TERMINOLOGY_CONFLICTS.md`, `docs/progress-input.json`, `docs/progress.json`,
  `docs/PROJECT_STATUS.md`, `docs/HANDOFF.md` sowie eine projektweite Prettier-Formatierung.
- Tests: `npm run check` grün (Format, Lint, Types, 15 Unit-Tests, Content, Tokens, Karte,
  Referenz, Secrets, Fortschritt). Kein Supabase-Lauf, kein Playwright/axe-Browserlauf,
  keine manuelle AT-Matrix.
- Fortschritt: gesamt 18,0 %; PDF-Audit 5,4 % über 323 Seiten.

```text
Resume from:
Dokument DOC-IBA-SN045, PDF-Seite 101, Segment –, Sprache da.

First action:
RUECKFRAGEN_THITRONIK.md an THITRONIK geben. Ohne Antworten sind die restlichen neun
deutschen Aufgaben nicht extrahierbar – sieben hängen an der Befehlsfrage (BLK-005), eine
am unbekannten Seriennummern-Fundort (DSC-023).

Ohne Antworten weiterhin möglich, in dieser Reihenfolge:
1. Aufgabe 03 „Anschlüsse“ aus den deutschen Seiten 8 und 11 extrahieren – sie hängt an
   keiner offenen Frage. Beide Seiten sind bereits als `inspected` erfasst.
2. PDF-Batch 10 (Seiten 101–110, dänischer Teil) – erhöht die Belegdichte, schärft die
   acht Fragen aber nicht mehr wesentlich.
```
