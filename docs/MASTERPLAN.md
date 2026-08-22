# Masterplan: THITRONIK Pro-finder Barrierefreiheits-Pilot

Stand: 2026-08-22. Dieser Plan ist die operative Kurzfassung des finalen Projektauftrags.
Er ersetzt weder Quellenprüfung noch technische, sprachliche oder rechtliche Freigaben.

## 1. Ziel und Nicht-Ziele

Der Pilot verbindet eine physische Setup-Karte mit einer öffentlichen, HTML-first
aufgebauten Anleitung. Er trennt die Gerätegenerationen **bis SN-044** und **ab SN-045**,
bewahrt jede technische Aussage mit Dokument- und Seitenquelle auf und stellt Entwurf,
Review und Freigabe nachvollziehbar dar.

Zum Umfang gehören Setup-Karte, Webanleitung, vier PDF-Quellen, deutscher Master,
englischer Pilot, interne Reviewoberfläche, Supabase-Datenmodell, Netlify-Preview,
Fortschrittsdashboard und QA. Verpackungsdesign, Produktionsfreigabe der Karte und eine
rechtliche Konformitätserklärung gehören nicht zum Pilotstand.

## 2. Verbindliche Leitplanken

1. Semantisches HTML ist der Primärzugang; PDF bleibt Quelle und Sekundärdownload.
2. OCR, Extraktion, Umschreibung und Übersetzung erzeugen nur Entwürfe.
3. Technische Aussagen brauchen Dokument, PDF-Seite und soweit möglich Seitenregion.
4. SN-044- und SN-045-Inhalte werden nie vermischt. Ein Wechsel wird bestätigt.
5. Widersprüche werden in `DISCREPANCIES.md` dokumentiert, nicht geraten.
6. PIN-Regeln, SMS-Befehle, Anschlüsse, Spannungen, Ströme und SN-Grenzen brauchen
   unabhängigen technischen Review.
7. Niemand darf die eigene sicherheitskritische Übersetzung allein freigeben.
8. Keine Kunden-, Fahrzeug-, PIN- oder Zielrufnummerndaten in Code, Fixtures oder Logs.
9. Das Referenz-Repository ist read-only; `internal`/`internal_only` bleibt intern.
10. Ungeprüfte Inhalte werden verborgen oder deutlich als Entwurf/Platzhalter angezeigt.

## 3. Zielarchitektur

| Ebene          | Verantwortung                                                                                |
| -------------- | -------------------------------------------------------------------------------------------- |
| GitHub         | Code, Migrationen, Schemas, Quelleninventar, freigegebene Inhalte, Tests, Auditdokumentation |
| Supabase       | Auth, Rollen, Arbeitsdaten, Reviews, Fortschritt, private Originale und Review-Assets        |
| Netlify        | geschützte Deploy Previews und internes Staging; nie fachliche Produktion                    |
| HTML-Anleitung | öffentlicher Basiszugang ohne Login oder App-Pflicht                                         |
| Setup-Karte    | dauerhafter redundanter Einstieg per QR, NFC und Kurzadresse                                 |

Veröffentlichungskette:

`Quelle → Seitenprüfung → Entwurf → technischer/fachlicher Review → Sprachreview → Supabase-Freigabe → Git-Branch → PR → CI → Preview → menschliche Abnahme → Merge → internes Staging`

Ein Datenbankstatus allein veröffentlicht nichts.

## 4. Routen und Nutzerfluss

- `/pro-finder/start`: Einführung, sichere Generationenwahl, Sprache, häufige Aufgaben,
  Support und PDF-Sekundärweg.
- `/pro-finder/sn-001-044/de/`: deutsche Anleitung bis SN-044.
- `/pro-finder/sn-045-plus/de/`: deutscher Master ab SN-045.
- `/pro-finder/sn-045-plus/en/`: englischer Pilot ab SN-045.
- `/pro-finder/wechsel`: ausdrückliche Wechselbestätigung.
- `/review`: interne, im Fixture-Modus read-only arbeitende Reviewübersicht; in Staging
  nur nach Supabase-Authentifizierung.
- `/dashboard`: zentral berechneter Projektfortschritt.

Gerätegeneration und Sprache müssen in URL, Seitentitel, `<html lang>`, sichtbarem Kopf,
Screenreader-Region und Quellenanzeige eindeutig sein.

## 5. Quellen- und PDF-Workflow

Die vier unveränderten Originale liegen in `sources/pdf/`; Metadaten und SHA-256 stehen
in `sources/inventory/documents.json`. Jede der 323 PDF-Seiten besitzt einen Record unter
`sources/pages/`, einschließlich Leer-, Bild-, Wiederholungs- und Trennseiten.

Pro Seite werden Rendering, sichtbarer Inhalt, Textebene, Tags, Lesereihenfolge,
Sprachen, Tabellen, Abbildungen, Warnungen, technische Werte, Accessibility-Probleme,
Widersprüche und nächste Aktion festgehalten. Statuswerte: `not_started` 0 %, `inspected`
25 %, `extracted` 50 %, `validated` 75 %, `approved` 100 %. `blocked` behält den letzten
erreichten Wert. Arbeit erfolgt in Batches von 10–20 Seiten; danach werden Status und
Wiedereinstieg aktualisiert.

**Bezugsmenge des Fortschritts (Präzisierung 2026-08-22).** Alle 323 Seiten werden
gesichtet, inventarisiert und auf Widersprüche geprüft – daran ändert sich nichts. Der
Workstream „Quelleninventar und PDF-Prüfung" rechnet seinen Prozentwert aber über die
Seiten, die der Pilot tatsächlich veröffentlicht: die deutschen Masterquellen beider
Generationen, den englischen Teil ab SN-045 als Gegenquelle des Übersetzungspiloten und
beide Kurzanleitungen. Grund: Die frühere Rechnung über alle 323 Seiten verlangte, dass
auch die acht Sprachfassungen den Status `approved` erreichen, die der Pilot laut Abschnitt 1
gar nicht zum Umfang zählt – nach dieser Metrik wäre der Pilot nie fertig, obwohl er sein
Ziel erreicht hätte. Die Bezugsmenge steht mitsamt Begründung als `source_audit_scope` in
`progress-input.json`; der Wert über alle 323 Seiten wird weiterhin ausgewiesen, damit die
Umstellung nachprüfbar bleibt.

## 6. Content- und Übersetzungsworkflow

Der kanonische Task-Layer liegt in `content/tasks/<generation>/<language>/` und wird mit
Zod validiert. Jede Aufgabe enthält Ziel, Voraussetzungen, Warnungen, Schritte, erwartetes
Ergebnis, Fehlerfälle/Korrekturen, Generation, Quellen, Sicherheitsklasse, Reviewstatus,
Tabellen sowie Abbildungs-Textalternativen.

Zuerst entsteht ein geprüfter deutscher Master. Geschützte Token wie Produktnamen,
Serien-/Artikelnummern, PINs, SMS-Befehle, URLs, Telefonnummern, Einheiten, Anschlüsse und
Kabelfarben werden vor jeder Übersetzung verglichen. Ohne unabhängigen Sprachreview kann
eine Übersetzung höchstens `technically_validated` (85 %) erreichen.

## 7. Setup-Karte

Alle drei Zugangswege zeigen auf dieselbe bestätigte THITRONIK-URL:
QR-Code, NFC-URI und gedruckte Kurzadresse. Die Karte ist generationsneutral und enthält
keine PINs, Alarmcodes, Seriennummern oder Kundendaten. Brailletext und -geometrie werden
nicht erfunden; Dienstleister und Braille lesende Testpersonen müssen freigeben.

Die SVGs sind Entwürfe. URL, Supportkontakt, Mindestschrift, Material, QR-Scan,
NFC-Schreibschutz, Reflexion, Taktilität und Braille sind Produktions-Gates.

## 8. Sicherheit und Datenbank

Im Browser ist nur der Publishable Key zulässig. Der Secret Key bleibt serverseitig und
außerhalb von Git, Logs und Deploy Previews. Jede exponierte Tabelle braucht RLS,
explizite Data-API-Privilegien, projektgebundene Mitgliedschaft und positive wie negative
Operationstests. Reviewentscheidungen sind append-only; Autor-, Reviewer- und
Prüfsummenfelder dürfen nicht durch freie Client-Updates umgangen werden.

**Stand 2026-08-22:** Der frühere Befund des Security-Audits – zwei umgehbare
Freigabepolicies, die das Vier-Augen-Prinzip aushebelten – ist behoben und **in CI gegen
eine echte Datenbank bewiesen**. Der Job `Supabase reset and RLS tests` ist grün und
umfasst `supabase start`, `db reset` mit Schema, Migrationen und Fixtures,
`db lint --fail-on error` sowie den pgTAP-Lauf mit den Exploit-Negativtests aus
`security_behavior_test.sql`. Der Grundsatz bleibt: Ein erfolgreicher statischer SQL-Check
ersetzt weder `db reset` noch pgTAP-Lauf noch Negativtest. Offen ist nicht mehr die
Härtung, sondern das lokale Ausführen: Der Docker-Daemon läuft in der Arbeitsumgebung
nicht (BLK-001), weshalb der Stack ausschließlich in CI geprüft wird.

## 9. Umgebungen

| Umgebung         | `APP_ENV` | `DATA_MODE` | Regel                                              |
| ---------------- | --------- | ----------- | -------------------------------------------------- |
| lokal            | `local`   | `fixtures`  | lokale App; lokale Supabase-Instanz nur mit Docker |
| Deploy Preview   | `preview` | `fixtures`  | kein Schreiben in gemeinsamen Staging-Bestand      |
| internes Staging | `staging` | `supabase`  | Zugriffsschutz, noindex, Secrets nur in Netlify    |

Die verbindliche Netlify-Checkliste steht in `NETLIFY_STAGING.md`.

## 10. QA-Gates

Automatisch: reproduzierbares `npm ci`, Format, ESLint, TypeScript, Vitest, Content- und
Terminologieprüfung, Tokenvergleich, Quellen-/Referenzschutz, Fortschrittskonsistenz,
Secret-Muster, Produktions-Build, Playwright und axe sowie Supabase-Reset/pgTAP in CI.

Manuell: NVDA mit Firefox/Chrome, VoiceOver mit Safari und iOS, TalkBack Android,
Tastatur, 200/400 % Zoom, Forced Colors, Reduced Motion, mobile Reflow, deaktivierte
Bilder, langsame Verbindung und die vollständige Kartenmatrix. Nicht ausgeführte Tests
bleiben offen.

## 11. Meilensteine

1. Bootstrap, sichere Basiskonfiguration, CI, Netlify und Pflichtdokumente.
2. Vollständiges Quelleninventar und PDF-Seiten-Audit.
3. Deutscher SN-045-Vertical-Slice plus repräsentativer SN-044-Versionstest.
4. Physisch geprüfter Kartenprototyp.
5. Englischer Pilot mit unabhängigem Review.
6. Supabase-Reviewworkflow, geschütztes Staging, manuelle AT-Abnahme und Handoff.

100 % ist erst erreicht, wenn alle 323 Seiten geprüft, die Seiten der Bezugsmenge aus
Abschnitt 5 freigegeben, alle relevanten Assets verknüpft oder formal ausgenommen, alle
kritischen Widersprüche gelöst und keine kritischen Blocker offen sind.

**Was das praktisch bedeutet.** Ein großer Teil dieser Punkte liegt außerhalb des Piloten:
Ohne technische Freigaben durch THITRONIK bleiben Seiten höchstens `validated` statt
`approved`, Übersetzungen laut Abschnitt 6 höchstens `technically_validated`, und Karte,
Staging sowie die manuelle AT-Abnahme brauchen Assets, Konten und Testpersonen. Die
erreichbare Obergrenze ohne diese Zuarbeit liegt bei etwa 80 Prozent. Das ist kein Mangel
der Umsetzung, sondern Folge der Leitplanken 6 und 7: Niemand gibt die eigene
sicherheitskritische Aussage allein frei.

## Sitzungsstart

1. `AGENTS.md`, diesen Masterplan und `PROJECT_STATUS.md` einschließlich Blocker lesen.
2. `git status --short --branch` prüfen; fremde Änderungen nicht überschreiben.
3. Vor Referenzanalyse `git -C .agent/reference/thitronik-haendlerplattform status --porcelain`
   und deaktivierte Push-URL prüfen.
4. Exakte nächste Aktion aus `HANDOFF.md` fortsetzen.

## Sitzungsabschluss

Dokumentieren: bearbeitete PDF-Seiten/Segmente, geänderte Dateien, genutzte Skills,
Assets/Widersprüche, ausgeführte Tests, Fortschritt, Blocker und exakte Folgeaktion.
Danach `npm run progress`, `npm run check`, proportional `npm run build` und
`npm run test:e2e` ausführen; Referenzstatus erneut prüfen.

Abschlussformat:

```text
Resume from:
Dokument ________, PDF-Seite ________, Segment ________, Sprache ________.

First action:
____________________________________________________________.
```
