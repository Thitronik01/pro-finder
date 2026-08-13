# THITRONIK Pro-finder – Barrierefreiheits-Pilot

Intern testbarer Pilot für eine durchgängig barrierefreie Produktkommunikation des
**THITRONIK Pro-finder**. Der Pilot umfasst:

- eine **barrierefreie Setup-Karte** als physischen Einstieg ([design/card/](design/card/)),
- eine öffentlich zugängliche **HTML-first-Anleitung** mit sicherer Auswahl zwischen
  **bis SN-044** und **ab SN-045**,
- die **seitenweise Prüfung** aller relevanten Original-PDFs ([sources/](sources/)),
- ein versioniertes **Content-, Glossar-, Übersetzungs- und Freigabesystem**,
- eine interne **Reviewoberfläche**,
- **Supabase** für Auth, Daten, Reviews, Fortschritt und private Assets ([supabase/](supabase/)),
- **Netlify** für geschütztes Staging und Deploy Previews ([netlify.toml](netlify.toml)),
- ein jederzeit sichtbares **Fortschrittsdashboard** ([docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)).

## Leitsatz

Die barrierefreie Karte ist der physische Einstieg. Die HTML-Anleitung ist der primäre
Informationszugang. PDFs bleiben überprüfbare Quellen. Supabase verwaltet Arbeit, Reviews
und private Assets. GitHub bewahrt freigegebene Inhalte und Code nachvollziehbar auf.
Netlify macht jeden Stand intern prüfbar. Nichts wird veröffentlicht, bevor Quelle,
Gerätegeneration, Terminologie, Barrierefreiheit und bei Übersetzungen die Sprachqualität
nachweisbar geprüft wurden.

## Schnellstart (lokal)

```bash
npm ci                 # reproduzierbare Installation
cp .env.example .env.local
npm run dev            # Next.js-Dev-Server, Fixture-Modus (DATA_MODE=fixtures)
npm run check          # Lint + TypeScript + Unit-Tests + Content-Checks
npm run progress       # Fortschrittsbericht neu berechnen
```

Für den lokalen Supabase-Stack wird Docker benötigt: `npx supabase start`,
danach `npx supabase db reset` (spielt Migrationen und Seed-Fixtures ein).

## Struktur

| Pfad           | Inhalt                                                                       |
| -------------- | ---------------------------------------------------------------------------- |
| `app/`         | Next.js App Router: Startseite, versionierte Anleitungsrouten, Dashboard     |
| `content/`     | Kanonischer Content-Layer: Segmente, Aufgaben, Glossar (maschinenlesbar)     |
| `sources/`     | Original-PDFs, Dokumentinventar, Seitenrecords des PDF-Audits                |
| `supabase/`    | Migrationen, RLS-Policies, Seed-Fixtures, RLS-Tests                          |
| `design/card/` | Setup-Karte: Anforderungen, SVG-Entwürfe, Print-Spec, Testplan               |
| `docs/`        | MASTERPLAN, PROJECT_STATUS, IST_AUDIT, HANDOFF, Terminologiekonfliktregister |
| `scripts/`     | Fortschrittsberechnung, Terminologie-, Quellen- und Token-Checks             |
| `.agent/`      | Skill-/Referenzdokumentation (Klone selbst sind nicht versioniert)           |

## Verbindliche Grundsätze (Kurzfassung)

1. Barrierefreiheit betrifft die gesamte Nutzungskette (Ziel: WCAG 2.2 AA, BFSG/BFSGV, EN 301 549).
2. Strukturiertes HTML ist der primäre Zugang; PDF bleibt Quelle und Sekundärdownload.
3. OCR/Extraktion/KI-Übersetzung erzeugen nur Entwürfe; jede technische Aussage braucht
   eine Quelle bis auf Dokument- und Seitenebene.
4. Widersprüche werden dokumentiert, nicht geraten ([docs/DISCREPANCIES.md](docs/DISCREPANCIES.md)).
5. Sicherheitskritische Inhalte benötigen separaten technischen Review; niemand gibt die
   eigene sicherheitskritische Übersetzung allein frei.
6. SN-044- und SN-045-Inhalte werden niemals vermischt; die Gerätegeneration ist in URL,
   Titel, sichtbarem Kopf und Screenreader-Ausgabe eindeutig.

Details: [docs/MASTERPLAN.md](docs/MASTERPLAN.md) · Arbeitsregeln für Agenten: [AGENTS.md](AGENTS.md)
