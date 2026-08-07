# Supabase – THITRONIK Pro-finder Barrierefreiheits-Pilot

Lokale Supabase-Umgebung (Postgres 17) für die barrierefreie Aufbereitung der
offiziellen Pro-finder-Anleitungen (bis SN-044 und ab SN-045).

## Lokaler Start

Voraussetzung: **Docker Desktop läuft** (die Supabase CLI startet alle Dienste
als Container – ohne laufenden Docker-Daemon schlägt `supabase start` fehl).

```bash
npx supabase start      # Stack starten (erste Ausführung lädt Images)
npx supabase db reset   # Migrationen + seed.sql auf frischer DB einspielen
npx supabase test db    # pgTAP-Tests (supabase/tests/) ausführen
npx supabase stop       # Stack stoppen
```

Studio: http://127.0.0.1:54323 · API: http://127.0.0.1:54321 · DB: Port 54322

## Key-Handling (wichtig)

| Schlüssel                                         | Verwendung       | Regeln                                                                                                                                                               |
| ------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Publishable Key** (`sb_publishable_...` / anon) | Browser/Client   | Darf im Frontend liegen; Zugriff wird ausschließlich durch RLS begrenzt (anon hat hier **keinerlei** Rechte).                                                        |
| **Secret Key** (`sb_secret_...` / service_role)   | Nur serverseitig | Umgeht RLS vollständig. **Niemals** in Git, Logs, Browser-Bundles, Previews oder Screenshots. Nur über Umgebungsvariablen (`.env`, nicht eingecheckt) bereitstellen. |

Die lokalen Demo-Keys aus `supabase start` sind nur für die lokale Entwicklung
gedacht und dürfen ebenfalls nicht in Produktions-Konfigurationen landen.

## Storage-Buckets (alle privat)

| Bucket            | Inhalt                                     | Besonderheit                                                                           |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| `source-pdfs`     | Original-PDFs der offiziellen Anleitungen  | Nur `application/pdf`; **keine Update-/Delete-Policy** – Originale sind unveränderlich |
| `source-assets`   | Aus den Quellen extrahierte Rohgrafiken    | Schreiben: content_editor/admin                                                        |
| `review-assets`   | Material im Review (z. B. Karten-Entwürfe) | Schreiben: content_editor/admin                                                        |
| `approved-assets` | Freigegebene, barrierefreie Assets         | Schreiben: content_editor/admin                                                        |

Jeder Objektpfad beginnt mit `<project UUID>/`. Lesen setzt eine Mitgliedschaft
im betreffenden Projekt voraus. Schreibrechte sind zusätzlich nach Bucket,
Projektrolle, Eigentümer und Workflow eingeschränkt; `anon` hat keinen Zugriff.

## Projektgebundenes Rollenmodell

Rollen liegen in `project_memberships`, nicht in frei editierbaren JWT-Metadaten
oder der historischen globalen `profiles.role`-Spalte. Eine Anmeldung allein
gewährt keinen Datenzugriff.

| Rolle                    | Lesen               | Schreiben                          | Besondere Rechte                                                                              |
| ------------------------ | ------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `admin`                  | nur eigene Projekte | redaktionelle Daten des Projekts   | Projektmitgliedschaften verwalten; keine direkte Manipulation von Audit- oder Freigabespalten |
| `content_editor`         | nur eigene Projekte | Quell-, Entwurfs- und Arbeitsdaten | keine direkte Freigabe (`freigegeben`/`approved`)                                             |
| `translator`             | nur eigene Projekte | zugewiesene Übersetzungsentwürfe   | darf die **eigene** Übersetzung nie auf `approved` setzen                                     |
| `language_reviewer`      | nur eigene Projekte | nur schmale Review-Transition      | sprachliche Prüfung (`language_reviewed`)                                                     |
| `technical_reviewer`     | nur eigene Projekte | nur schmale Review-Transition      | technische Pflichtprüfung bei `sicherheitskritisch`                                           |
| `accessibility_reviewer` | nur eigene Projekte | nur schmale Review-Transition      | Freigabe nichtkritischer Inhaltssegmente                                                      |
| `viewer`                 | nur eigene Projekte | –                                  | –                                                                                             |

Zusätzliche, in der Datenbank erzwungene Invarianten:

- `review_events`, `content_reviews` und `translation_reviews` sind
  **append-only**. Browser-Clients besitzen kein Insert-/Update-/Delete-Recht;
  Einträge entstehen atomar in den privaten Transitionsfunktionen.
- Browser-Clients können Freigabestatus, Reviewer-IDs, Token-Ergebnis und
  datenbankberechnete SHA-256-Prüfsummen nicht direkt schreiben.
- `private.transition_content_segment(...)` erzwingt Statusfolge,
  Vier-Augen-Prinzip und für `sicherheitskritisch` einen technischen Reviewer.
- `private.transition_translation(...)` erzwingt die vollständige Statusfolge,
  bestandenen Token-Check sowie unabhängige technische und sprachliche Reviews
  auf derselben Prüfsumme.

## Seed-Daten

`seed.sql` enthält nur öffentlich verifizierbare Metadaten der vier offiziellen
Quelldokumente (DOC-KA-SN044, DOC-BMA-SN044, DOC-KA-SN045, DOC-IBA-SN045),
323 generierte Seiten-Datensätze, Kern-Glossarbegriffe und zwei aus den
Metadaten begründete offene Diskrepanzen. Keine Kundendaten, PINs,
Zielrufnummern oder Fahrzeugdaten; keine `auth.users`-Einträge.

Hinweis: Es gibt bewusst **keine Selbst-Provisionierung**. Der erste Admin wird
einmalig über einen vertrauenswürdigen SQL-/Service-Role-Kanal angelegt:

```sql
insert into public.profiles (user_id, role)
values ('<auth-user-uuid>', 'viewer')
on conflict (user_id) do nothing;

insert into public.project_memberships (project_id, user_id, role)
select id, '<auth-user-uuid>', 'admin'
from public.projects
where slug = 'pro-finder-pilot';
```

Danach kann ein bestehender Projekt-Admin Mitgliedschaften ausschließlich über
`private.set_project_membership(...)` oder einen vertrauenswürdigen
serverseitigen Kanal verwalten. Das Schema `private` ist nicht in den
Data-API-Schemas exponiert.
