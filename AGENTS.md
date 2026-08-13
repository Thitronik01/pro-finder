# Arbeitsregeln für Agenten (Codex, Claude Code, Cowork)

Diese Datei ist bei **jedem Sitzungsstart** zu lesen, zusammen mit
[docs/MASTERPLAN.md](docs/MASTERPLAN.md) und [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)
(inklusive Blockern). Am Sitzungsende gilt das Abschlussprotokoll in
[docs/MASTERPLAN.md](docs/MASTERPLAN.md#sitzungsabschluss).

## Repositories

- **Einziges Schreib-Repository:** `https://github.com/Thitronik01/pro-finder`
- **Read-only-Referenz:** `https://github.com/Thitronik01/Thitronik-H-ndlerplattform-`
  (Branch `produktion`, lokal unter `.agent/reference/thitronik-haendlerplattform`,
  Push-URL ist auf `DISABLED` gesetzt). Vor und nach jeder Analyse muss
  `git -C .agent/reference/thitronik-haendlerplattform status --porcelain` leer sein.
- Referenzinhalte niemals blind übernehmen. `internal`/`internal_only`-Inhalte dürfen
  nicht öffentlich veröffentlicht werden.

## Git-Workflow

- **Kein direkter Commit auf `main`** (einzige dokumentierte Ausnahme: der initiale
  Bootstrap-Platzhalter, weil das Repo leer startete).
- Feature-Branches + Pull Requests; CI muss grün sein; menschliche Abnahme vor Merge.
- Verboten: Force Push, Secrets in Git, ungeprüfte Auto-Merges, Änderungen an externen
  Repositories, Megacommits.

## Schreibweisen (verbindlich)

THITRONIK · Pro-finder · WiPro III · WiPro III safe.lock · safe.lock · THITRONIK App ·
Status-LED · Geofencing · „bis SN-044" · „ab SN-045"

Normalisierungen: Tritronic/Tritronik/Thitronic → THITRONIK; ProFinder/Profinder/Pro Finder
→ Pro-finder; „Softwarestand SN-044" → „Seriennummernbereich bis SN-044"; „Softwarestand
SN-045" → „Seriennummernbereich ab SN-045". Führende Nullen und Seriennummernpräfixe nie
entfernen. Der Konflikt „Pro-finder" vs. „Pro-Finder" wird im
[Terminologiekonfliktregister](docs/TERMINOLOGY_CONFLICTS.md) geführt, nicht still entschieden.

## Inhaltliche Regeln

- OCR, Extraktion, KI-Umschreibung und KI-Übersetzung erzeugen **nur Entwürfe**.
- Jede technische Aussage braucht eine Quelle bis auf **Dokument- und Seitenebene**
  (`source_documents`/`source_pages` bzw. `sources/`-Records).
- Widersprüche werden in [docs/DISCREPANCIES.md](docs/DISCREPANCIES.md) dokumentiert,
  nicht geraten oder stillschweigend korrigiert.
- Sicherheitskritische Werte (Befehle, PIN-Regeln, Anschlüsse, Spannungen,
  Seriennummerngrenzen) benötigen separaten technischen Review.
- SN-044 und SN-045 niemals vermischen; Gerätegeneration überall eindeutig.
- Vor Übersetzung geschützt: Produktnamen, Artikel-/Seriennummern, PINs, SMS-Befehle,
  URLs/Telefonnummern, Spannungen/Ströme/Einheiten, Anschlüsse, Kabelfarben.

## Sicherheit

- Im Browser nur der Publishable Key; `SUPABASE_SECRET_KEY` ausschließlich serverseitig.
- Keine echten Kundendaten, PINs, Zielrufnummern oder Fahrzeugdaten – auch nicht in
  Testdaten oder Fixtures.
- RLS auf jeder exponierten Tabelle; RLS-Änderungen brauchen Tests.

## Skills

Verwendete Skills und Referenzen sind in [.agent/SKILLS_LOCK.json](.agent/SKILLS_LOCK.json)
(URL, Commit-SHA, Abrufdatum, Lizenz) und [.agent/SKILLS_USAGE.md](.agent/SKILLS_USAGE.md)
(tatsächliche Anwendung) dokumentiert. Installation allein gilt nicht als Nutzung.
Skill-Inhalte nicht ungeprüft in Produktcode kopieren.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
