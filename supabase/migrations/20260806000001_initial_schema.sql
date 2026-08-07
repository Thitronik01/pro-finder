-- ============================================================================
-- THITRONIK Pro-finder Barrierefreiheits-Pilot – Erst-Migration
-- Postgres 17 / Supabase. Läuft genau einmal auf einer frischen Datenbank
-- (bewusst ohne "if not exists"-Absicherungen).
--
-- Inhalt:
--   1. Enums
--   2. Trigger-Funktion für updated_at
--   3. Tabellen inkl. Trigger und Indexe
--   4. Helper-Funktionen (Rollenmodell, security definer)
--   5. Privilegien-Härtung (anon erhält NICHTS)
--   6. Row Level Security + Policies
--   7. Storage-Buckets + Storage-Policies
--   8. Kommentare
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Enums
-- ----------------------------------------------------------------------------

-- Seriennummernbereich der Pro-finder-Geräte: bis SN-044 bzw. ab SN-045.
create type public.serial_range as enum ('sn-001-044', 'sn-045-plus', 'beide');

-- Bearbeitungsstand einer einzelnen PDF-Seite.
create type public.page_status as enum
  ('not_started', 'inspected', 'extracted', 'validated', 'approved', 'blocked');

-- Bearbeitungsstand einer Übersetzung.
create type public.translation_status as enum
  ('not_started', 'source_aligned', 'drafted', 'terminology_checked',
   'context_checked', 'technically_validated', 'language_reviewed', 'approved');

-- Sicherheitseinstufung eines Inhalts-Segments.
create type public.safety_class as enum
  ('normal', 'sicherheitsrelevant', 'sicherheitskritisch');

-- Anwendungsrollen des Pilotprojekts.
create type public.app_role as enum
  ('admin', 'content_editor', 'translator', 'language_reviewer',
   'technical_reviewer', 'accessibility_reviewer', 'viewer');

-- Redaktioneller Freigabestatus.
create type public.review_status as enum
  ('entwurf', 'in_review', 'freigegeben', 'abgelehnt');

-- Bearbeitungsstatus einer Diskrepanz.
create type public.discrepancy_status as enum
  ('offen', 'in_klaerung', 'geloest', 'akzeptiert');

-- Schweregrad einer Diskrepanz.
create type public.discrepancy_severity as enum
  ('kritisch', 'hoch', 'mittel', 'niedrig');

-- ----------------------------------------------------------------------------
-- 2. Trigger-Funktion für updated_at
-- ----------------------------------------------------------------------------

-- Setzt updated_at bei jedem Update automatisch auf now().
create function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ----------------------------------------------------------------------------
-- 3. Tabellen
-- ----------------------------------------------------------------------------

-- --- profiles ---------------------------------------------------------------
create table public.profiles (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null unique references auth.users (id) on delete cascade,
  display_name text,
  role         public.app_role not null default 'viewer',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create trigger trg_profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create index idx_profiles_role on public.profiles (role);

-- --- projects ---------------------------------------------------------------
create table public.projects (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique,
  name        text not null,
  description text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger trg_projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- --- source_documents -------------------------------------------------------
create table public.source_documents (
  id               uuid primary key default gen_random_uuid(),
  project_id       uuid not null references public.projects (id) on delete restrict,
  doc_key          text not null unique,
  title            text,
  original_url     text not null,
  retrieved_at     date,
  filename         text not null,
  file_size_bytes  bigint,
  sha256           char(64) not null,
  page_count       int,
  pdf_version      text,
  revision         text,
  languages        text[],
  serial_range     public.serial_range not null,
  authority_status text not null default 'offizielle_quelle',
  storage_path     text,
  notes            text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  constraint chk_source_documents_sha256 check (sha256 ~ '^[0-9a-f]{64}$'),
  constraint chk_source_documents_page_count check (page_count is null or page_count > 0),
  constraint chk_source_documents_file_size check (file_size_bytes is null or file_size_bytes > 0)
);

create trigger trg_source_documents_set_updated_at
  before update on public.source_documents
  for each row execute function public.set_updated_at();

create index idx_source_documents_project_id on public.source_documents (project_id);
create index idx_source_documents_serial_range on public.source_documents (serial_range);

-- --- source_pages -----------------------------------------------------------
create table public.source_pages (
  id                   uuid primary key default gen_random_uuid(),
  document_id          uuid not null references public.source_documents (id) on delete cascade,
  page_number          int not null,
  status               public.page_status not null default 'not_started',
  -- Fortschritt wird deterministisch aus dem Status abgeleitet (generierte
  -- Spalte); 'blocked' zählt als 0, bis die Blockade aufgelöst ist.
  progress_percent     int generated always as (
    case status
      when 'not_started' then 0
      when 'inspected'   then 25
      when 'extracted'   then 50
      when 'validated'   then 75
      when 'approved'    then 100
      when 'blocked'     then 0
    end
  ) stored,
  content_type         text,
  languages            text[],
  summary              text,
  accessibility_issues jsonb not null default '[]',
  extractable_chars    int,
  blocked_reason       text,
  next_action          text,
  inspected_by         uuid references auth.users (id) on delete set null,
  inspected_at         timestamptz,
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now(),
  constraint uq_source_pages_document_page unique (document_id, page_number),
  constraint chk_source_pages_page_number check (page_number >= 1)
);

create trigger trg_source_pages_set_updated_at
  before update on public.source_pages
  for each row execute function public.set_updated_at();

create index idx_source_pages_status on public.source_pages (status);
create index idx_source_pages_inspected_by on public.source_pages (inspected_by);

-- --- content_segments -------------------------------------------------------
create table public.content_segments (
  id                 uuid primary key default gen_random_uuid(),
  segment_key        text not null unique,
  project_id         uuid not null references public.projects (id) on delete restrict,
  serial_range       public.serial_range not null,
  language           text not null default 'de',
  segment_type       text not null,
  task_slug          text,
  title              text,
  body_md            text,
  safety_class       public.safety_class not null default 'normal',
  review_status      public.review_status not null default 'entwurf',
  source_document_id uuid references public.source_documents (id) on delete set null,
  source_page_start  int,
  source_page_end    int,
  source_region      text,
  prev_context       text,
  next_context       text,
  glossary_version   text,
  checksum           text,
  change_reason      text,
  author_id          uuid,
  reviewer_id        uuid,
  reviewed_at        timestamptz,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  constraint chk_content_segments_page_range check (
    (source_page_start is null or source_page_start >= 1)
    and (source_page_end is null or source_page_start is null
         or source_page_end >= source_page_start)
  )
);

create trigger trg_content_segments_set_updated_at
  before update on public.content_segments
  for each row execute function public.set_updated_at();

create index idx_content_segments_project_id on public.content_segments (project_id);
create index idx_content_segments_source_document_id on public.content_segments (source_document_id);
create index idx_content_segments_serial_range on public.content_segments (serial_range);
create index idx_content_segments_language on public.content_segments (language);
create index idx_content_segments_review_status on public.content_segments (review_status);
create index idx_content_segments_safety_class on public.content_segments (safety_class);
create index idx_content_segments_segment_type on public.content_segments (segment_type);
create index idx_content_segments_author_id on public.content_segments (author_id);
create index idx_content_segments_reviewer_id on public.content_segments (reviewer_id);

-- --- translations -----------------------------------------------------------
create table public.translations (
  id                    uuid primary key default gen_random_uuid(),
  segment_id            uuid not null references public.content_segments (id) on delete cascade,
  target_language       text not null,
  status                public.translation_status not null default 'not_started',
  progress_percent      int not null default 0,
  text_md               text,
  translator_id         uuid,
  language_reviewer_id  uuid,
  technical_reviewer_id uuid,
  glossary_version      text,
  token_check_passed    boolean,
  change_reason         text,
  checksum              text,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now(),
  constraint uq_translations_segment_language unique (segment_id, target_language),
  constraint chk_translations_progress check (progress_percent between 0 and 100)
);

create trigger trg_translations_set_updated_at
  before update on public.translations
  for each row execute function public.set_updated_at();

create index idx_translations_target_language on public.translations (target_language);
create index idx_translations_status on public.translations (status);
create index idx_translations_translator_id on public.translations (translator_id);
create index idx_translations_language_reviewer_id on public.translations (language_reviewer_id);
create index idx_translations_technical_reviewer_id on public.translations (technical_reviewer_id);

-- --- glossary_terms ---------------------------------------------------------
create table public.glossary_terms (
  id               uuid primary key default gen_random_uuid(),
  term             text not null,
  language         text not null default 'de',
  definition       text,
  do_not_translate boolean not null default false,
  source_path      text,
  conflict_note    text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  constraint uq_glossary_terms_term_language unique (term, language)
);

create trigger trg_glossary_terms_set_updated_at
  before update on public.glossary_terms
  for each row execute function public.set_updated_at();

create index idx_glossary_terms_language on public.glossary_terms (language);

-- --- assets -----------------------------------------------------------------
create table public.assets (
  id                   uuid primary key default gen_random_uuid(),
  asset_key            text not null unique,
  document_id          uuid references public.source_documents (id) on delete set null,
  page_number          int,
  description          text not null,
  alt_text             text,
  long_description     text,
  storage_bucket       text,
  storage_path         text,
  serial_range         public.serial_range,
  asset_version        text,
  rights_status        text not null default 'ungeklaert',
  accessibility_status text not null default 'ungeprueft',
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create trigger trg_assets_set_updated_at
  before update on public.assets
  for each row execute function public.set_updated_at();

create index idx_assets_document_id on public.assets (document_id);
create index idx_assets_serial_range on public.assets (serial_range);
create index idx_assets_rights_status on public.assets (rights_status);
create index idx_assets_accessibility_status on public.assets (accessibility_status);

-- --- asset_requests ---------------------------------------------------------
create table public.asset_requests (
  id           uuid primary key default gen_random_uuid(),
  document_id  uuid references public.source_documents (id) on delete set null,
  page_number  int,
  description  text not null,
  status       text not null default 'offen',
  requested_by uuid,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create trigger trg_asset_requests_set_updated_at
  before update on public.asset_requests
  for each row execute function public.set_updated_at();

create index idx_asset_requests_document_id on public.asset_requests (document_id);
create index idx_asset_requests_status on public.asset_requests (status);
create index idx_asset_requests_requested_by on public.asset_requests (requested_by);

-- --- discrepancies ----------------------------------------------------------
create table public.discrepancies (
  id          uuid primary key default gen_random_uuid(),
  document_id uuid references public.source_documents (id) on delete set null,
  page_number int,
  segment_id  uuid references public.content_segments (id) on delete set null,
  title       text not null,
  description text not null,
  severity    public.discrepancy_severity not null default 'mittel',
  status      public.discrepancy_status not null default 'offen',
  evidence    text,
  resolution  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger trg_discrepancies_set_updated_at
  before update on public.discrepancies
  for each row execute function public.set_updated_at();

create index idx_discrepancies_document_id on public.discrepancies (document_id);
create index idx_discrepancies_segment_id on public.discrepancies (segment_id);
create index idx_discrepancies_status on public.discrepancies (status);
create index idx_discrepancies_severity on public.discrepancies (severity);

-- --- review_events (Append-only-Audit-Log) ----------------------------------
create table public.review_events (
  id              uuid primary key default gen_random_uuid(),
  entity_type     text not null,
  entity_id       uuid not null,
  event_type      text not null,
  actor_id        uuid,
  from_status     text,
  to_status       text,
  comment         text,
  safety_relevant boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger trg_review_events_set_updated_at
  before update on public.review_events
  for each row execute function public.set_updated_at();

create index idx_review_events_entity on public.review_events (entity_type, entity_id);
create index idx_review_events_actor_id on public.review_events (actor_id);
create index idx_review_events_created_at on public.review_events (created_at desc);

-- --- card_prototypes --------------------------------------------------------
create table public.card_prototypes (
  id           uuid primary key default gen_random_uuid(),
  version      text not null unique,
  description  text,
  status       public.review_status not null default 'entwurf',
  test_results jsonb not null default '[]',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create trigger trg_card_prototypes_set_updated_at
  before update on public.card_prototypes
  for each row execute function public.set_updated_at();

create index idx_card_prototypes_status on public.card_prototypes (status);

-- --- progress_snapshots -----------------------------------------------------
create table public.progress_snapshots (
  id            uuid primary key default gen_random_uuid(),
  snapshot_date date not null,
  workstream    text not null,
  percent       numeric(5,2) not null,
  detail        jsonb not null default '{}',
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  constraint chk_progress_snapshots_percent check (percent between 0 and 100)
);

create trigger trg_progress_snapshots_set_updated_at
  before update on public.progress_snapshots
  for each row execute function public.set_updated_at();

create index idx_progress_snapshots_date_workstream
  on public.progress_snapshots (snapshot_date, workstream);

-- ----------------------------------------------------------------------------
-- 4. Helper-Funktionen (Rollenmodell)
-- security definer + set search_path = '' verhindert Rekursion über die
-- RLS-Policies von profiles und Search-Path-Hijacking.
-- ----------------------------------------------------------------------------

-- Liefert die app_role des angemeldeten Nutzers (null ohne Profil).
create function public.current_app_role()
returns public.app_role
language sql
stable
security definer
set search_path = ''
as $$
  select p.role
  from public.profiles p
  where p.user_id = (select auth.uid());
$$;

-- Prüft, ob der angemeldete Nutzer eine der übergebenen Rollen hat.
create function public.has_any_role(roles public.app_role[])
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(
    (select p.role = any (roles)
     from public.profiles p
     where p.user_id = (select auth.uid())),
    false
  );
$$;

-- Liefert die aktuell gespeicherte Rolle eines Nutzers (fuer die
-- "Rolle darf nicht selbst geaendert werden"-Pruefung in profiles).
create function public.profile_role_of(p_user_id uuid)
returns public.app_role
language sql
stable
security definer
set search_path = ''
as $$
  select p.role
  from public.profiles p
  where p.user_id = p_user_id;
$$;

-- Liefert die Sicherheitseinstufung eines Segments (fuer translations-Policies).
create function public.segment_safety_class(p_segment_id uuid)
returns public.safety_class
language sql
stable
security definer
set search_path = ''
as $$
  select s.safety_class
  from public.content_segments s
  where s.id = p_segment_id;
$$;

-- ----------------------------------------------------------------------------
-- 5. Privilegien-Härtung
-- anon erhält keinerlei Zugriff auf Anwendungsdaten oder Helper-Funktionen.
-- ----------------------------------------------------------------------------

revoke all on all tables in schema public from anon;
revoke all on all sequences in schema public from anon;
alter default privileges in schema public revoke all on tables from anon;
alter default privileges in schema public revoke all on sequences from anon;

revoke all on function public.current_app_role() from public, anon;
revoke all on function public.has_any_role(public.app_role[]) from public, anon;
revoke all on function public.profile_role_of(uuid) from public, anon;
revoke all on function public.segment_safety_class(uuid) from public, anon;
grant execute on function public.current_app_role() to authenticated, service_role;
grant execute on function public.has_any_role(public.app_role[]) to authenticated, service_role;
grant execute on function public.profile_role_of(uuid) to authenticated, service_role;
grant execute on function public.segment_safety_class(uuid) to authenticated, service_role;

-- Audit-Log zusätzlich auf Privilegien-Ebene absichern (Append-only):
revoke update, delete, truncate on public.review_events from authenticated;

-- ----------------------------------------------------------------------------
-- 6. Row Level Security + Policies
-- Grundsatz: anon hat keine Policies (und keine Privilegien) -> kein Zugriff.
-- Alle authentifizierten Rollen dürfen lesen; Schreibrechte je Rollenmodell.
-- auth.uid()/Helper werden in (select ...) gekapselt (RLS-Performance).
-- ----------------------------------------------------------------------------

alter table public.profiles           enable row level security;
alter table public.projects           enable row level security;
alter table public.source_documents   enable row level security;
alter table public.source_pages       enable row level security;
alter table public.content_segments   enable row level security;
alter table public.translations       enable row level security;
alter table public.glossary_terms     enable row level security;
alter table public.assets             enable row level security;
alter table public.asset_requests     enable row level security;
alter table public.discrepancies      enable row level security;
alter table public.review_events      enable row level security;
alter table public.card_prototypes    enable row level security;
alter table public.progress_snapshots enable row level security;

-- --- profiles ---------------------------------------------------------------
-- Lesen: alle authentifizierten Nutzer (Anzeigenamen im Team sichtbar).
create policy profiles_select_authenticated on public.profiles
  for select to authenticated
  using (true);

-- Eigenes Profil anlegen – nur mit der Default-Rolle 'viewer'.
create policy profiles_insert_self on public.profiles
  for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and role = 'viewer'
  );

-- Admin darf Profile beliebig anlegen (Rollenvergabe).
create policy profiles_insert_admin on public.profiles
  for insert to authenticated
  with check ((select public.has_any_role(array['admin']::public.app_role[])));

-- Eigenes Profil ändern – die Rolle muss dabei unverändert bleiben
-- (Vergleich der neuen role mit dem gespeicherten Wert via security definer).
create policy profiles_update_self on public.profiles
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (
    user_id = (select auth.uid())
    and role = public.profile_role_of(user_id)
  );

-- Admin darf alle Profile ändern (inkl. Rollenwechsel).
create policy profiles_update_admin on public.profiles
  for update to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])))
  with check ((select public.has_any_role(array['admin']::public.app_role[])));

-- Löschen nur Admin.
create policy profiles_delete_admin on public.profiles
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- projects ---------------------------------------------------------------
create policy projects_select_authenticated on public.projects
  for select to authenticated
  using (true);

create policy projects_insert_editor on public.projects
  for insert to authenticated
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy projects_update_editor on public.projects
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy projects_delete_admin on public.projects
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- source_documents -------------------------------------------------------
create policy source_documents_select_authenticated on public.source_documents
  for select to authenticated
  using (true);

create policy source_documents_insert_editor on public.source_documents
  for insert to authenticated
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy source_documents_update_editor on public.source_documents
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy source_documents_delete_admin on public.source_documents
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- source_pages -----------------------------------------------------------
create policy source_pages_select_authenticated on public.source_pages
  for select to authenticated
  using (true);

-- Anlegen durch Redaktion – niemals direkt als 'approved'.
create policy source_pages_insert_editor on public.source_pages
  for insert to authenticated
  with check (
    (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
    and status <> 'approved'
  );

-- Bearbeiten durch Redaktion – Statuswechsel auf 'approved' ausgeschlossen.
create policy source_pages_update_editor on public.source_pages
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check (
    (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
    and status <> 'approved'
  );

-- Freigabe (status = 'approved') nur durch Reviewer-Rollen oder Admin.
create policy source_pages_approve on public.source_pages
  for update to authenticated
  using ((select public.has_any_role(
    array['technical_reviewer','accessibility_reviewer','admin']::public.app_role[])))
  with check (
    (select public.has_any_role(
      array['technical_reviewer','accessibility_reviewer','admin']::public.app_role[]))
    and status = 'approved'
  );

create policy source_pages_delete_admin on public.source_pages
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- content_segments -------------------------------------------------------
create policy content_segments_select_authenticated on public.content_segments
  for select to authenticated
  using (true);

-- Anlegen durch Redaktion – niemals direkt als 'freigegeben'.
create policy content_segments_insert_editor on public.content_segments
  for insert to authenticated
  with check (
    (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
    and review_status <> 'freigegeben'
  );

-- Bearbeiten durch Redaktion – Freigabe ist über diese Policy nicht möglich.
-- Nebeneffekt (gewollt): Wird ein freigegebenes Segment redaktionell geändert,
-- muss der review_status zwingend zurückgesetzt werden (erneuter Review).
create policy content_segments_update_editor on public.content_segments
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check (
    (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
    and review_status <> 'freigegeben'
  );

-- Review-Statuswechsel durch Reviewer-Rollen/Admin. Freigabe ('freigegeben')
-- nur, wenn der Handelnde selbst als reviewer_id eingetragen ist und bei
-- safety_class <> 'normal' das Vier-Augen-Prinzip gilt (Reviewer <> Autor,
-- Autor muss dokumentiert sein).
create policy content_segments_approve on public.content_segments
  for update to authenticated
  using ((select public.has_any_role(
    array['technical_reviewer','accessibility_reviewer','admin']::public.app_role[])))
  with check (
    (select public.has_any_role(
      array['technical_reviewer','accessibility_reviewer','admin']::public.app_role[]))
    and review_status in ('in_review','freigegeben','abgelehnt')
    and (
      review_status <> 'freigegeben'
      or (
        reviewer_id = (select auth.uid())
        and (
          safety_class = 'normal'
          or (author_id is not null and reviewer_id <> author_id)
        )
      )
    )
  );

create policy content_segments_delete_admin on public.content_segments
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- translations -----------------------------------------------------------
create policy translations_select_authenticated on public.translations
  for select to authenticated
  using (true);

-- Anlegen durch Übersetzung/Redaktion – niemals direkt als 'approved'.
create policy translations_insert on public.translations
  for insert to authenticated
  with check (
    (select public.has_any_role(
      array['translator','content_editor','admin']::public.app_role[]))
    and status <> 'approved'
  );

-- Bearbeiten durch Übersetzungs-, Redaktions- und Reviewer-Rollen.
-- Statuswechsel auf 'approved' nur wenn:
--   * translator_id dokumentiert ist,
--   * language_reviewer_id gesetzt und ungleich translator_id ist,
--   * der Handelnde NICHT der Übersetzer ist (niemand gibt die eigene
--     Übersetzung frei),
--   * bei sicherheitskritischen Segmenten zusätzlich technical_reviewer_id
--     gesetzt und ungleich translator_id ist.
create policy translations_update on public.translations
  for update to authenticated
  using ((select public.has_any_role(
    array['translator','content_editor','language_reviewer',
          'technical_reviewer','admin']::public.app_role[])))
  with check (
    (select public.has_any_role(
      array['translator','content_editor','language_reviewer',
            'technical_reviewer','admin']::public.app_role[]))
    and (
      status <> 'approved'
      or (
        translator_id is not null
        and language_reviewer_id is not null
        and language_reviewer_id <> translator_id
        and (select auth.uid()) <> translator_id
        and (
          public.segment_safety_class(segment_id) <> 'sicherheitskritisch'
          or (technical_reviewer_id is not null
              and technical_reviewer_id <> translator_id)
        )
      )
    )
  );

create policy translations_delete_admin on public.translations
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- glossary_terms ---------------------------------------------------------
create policy glossary_terms_select_authenticated on public.glossary_terms
  for select to authenticated
  using (true);

create policy glossary_terms_insert_editor on public.glossary_terms
  for insert to authenticated
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy glossary_terms_update_editor on public.glossary_terms
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy glossary_terms_delete_admin on public.glossary_terms
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- assets -----------------------------------------------------------------
create policy assets_select_authenticated on public.assets
  for select to authenticated
  using (true);

create policy assets_insert_contributor on public.assets
  for insert to authenticated
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy assets_update_contributor on public.assets
  for update to authenticated
  using ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])))
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy assets_delete_admin on public.assets
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- asset_requests ---------------------------------------------------------
create policy asset_requests_select_authenticated on public.asset_requests
  for select to authenticated
  using (true);

create policy asset_requests_insert_contributor on public.asset_requests
  for insert to authenticated
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy asset_requests_update_contributor on public.asset_requests
  for update to authenticated
  using ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])))
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy asset_requests_delete_admin on public.asset_requests
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- discrepancies ----------------------------------------------------------
create policy discrepancies_select_authenticated on public.discrepancies
  for select to authenticated
  using (true);

create policy discrepancies_insert_contributor on public.discrepancies
  for insert to authenticated
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy discrepancies_update_contributor on public.discrepancies
  for update to authenticated
  using ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])))
  with check ((select public.has_any_role(
    array['content_editor','translator','language_reviewer',
          'technical_reviewer','accessibility_reviewer','admin']::public.app_role[])));

create policy discrepancies_delete_admin on public.discrepancies
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- review_events (Append-only) --------------------------------------------
create policy review_events_select_authenticated on public.review_events
  for select to authenticated
  using (true);

-- Einfügen dürfen alle authentifizierten Nutzer, aber nur mit sich selbst
-- als actor_id (keine gefälschten Audit-Einträge). update/delete: KEINE
-- Policy – auch Admin kann das Log über die API nicht verändern.
create policy review_events_insert on public.review_events
  for insert to authenticated
  with check (actor_id = (select auth.uid()));

-- --- card_prototypes --------------------------------------------------------
create policy card_prototypes_select_authenticated on public.card_prototypes
  for select to authenticated
  using (true);

create policy card_prototypes_insert_editor on public.card_prototypes
  for insert to authenticated
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy card_prototypes_update_editor on public.card_prototypes
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy card_prototypes_delete_admin on public.card_prototypes
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- --- progress_snapshots -----------------------------------------------------
create policy progress_snapshots_select_authenticated on public.progress_snapshots
  for select to authenticated
  using (true);

create policy progress_snapshots_insert_editor on public.progress_snapshots
  for insert to authenticated
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy progress_snapshots_update_editor on public.progress_snapshots
  for update to authenticated
  using ((select public.has_any_role(array['content_editor','admin']::public.app_role[])))
  with check ((select public.has_any_role(array['content_editor','admin']::public.app_role[])));

create policy progress_snapshots_delete_admin on public.progress_snapshots
  for delete to authenticated
  using ((select public.has_any_role(array['admin']::public.app_role[])));

-- ----------------------------------------------------------------------------
-- 7. Storage: Buckets + Policies
-- Alle Buckets privat. Originale in 'source-pdfs' sind unveränderlich:
-- für diesen Bucket existiert bewusst KEINE update-Policy.
-- ----------------------------------------------------------------------------

insert into storage.buckets (id, name, public, allowed_mime_types)
values
  ('source-pdfs',     'source-pdfs',     false, array['application/pdf']),
  ('source-assets',   'source-assets',   false, null),
  ('review-assets',   'review-assets',   false, null),
  ('approved-assets', 'approved-assets', false, null);

-- Lesen: nur authentifizierte Nutzer.
create policy storage_objects_select_authenticated on storage.objects
  for select to authenticated
  using (
    bucket_id in ('source-pdfs','source-assets','review-assets','approved-assets')
  );

-- Hochladen: Redaktion/Admin.
create policy storage_objects_insert_editor on storage.objects
  for insert to authenticated
  with check (
    bucket_id in ('source-pdfs','source-assets','review-assets','approved-assets')
    and (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
  );

-- Überschreiben: Redaktion/Admin – NICHT für 'source-pdfs'
-- (Originaldokumente werden nie überschrieben).
create policy storage_objects_update_editor on storage.objects
  for update to authenticated
  using (
    bucket_id in ('source-assets','review-assets','approved-assets')
    and (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
  )
  with check (
    bucket_id in ('source-assets','review-assets','approved-assets')
    and (select public.has_any_role(array['content_editor','admin']::public.app_role[]))
  );

-- Löschen: nur Admin.
create policy storage_objects_delete_admin on storage.objects
  for delete to authenticated
  using (
    bucket_id in ('source-pdfs','source-assets','review-assets','approved-assets')
    and (select public.has_any_role(array['admin']::public.app_role[]))
  );

-- ----------------------------------------------------------------------------
-- 8. Kommentare
-- ----------------------------------------------------------------------------

comment on table public.profiles is
  'Nutzerprofile mit Anwendungsrolle für den THITRONIK Pro-finder Barrierefreiheits-Piloten. 1:1 zu auth.users.';
comment on column public.profiles.user_id is 'Referenz auf auth.users; Löschung des Auth-Nutzers entfernt das Profil.';
comment on column public.profiles.role is 'Anwendungsrolle; Änderung nur durch Admin (RLS).';

comment on table public.projects is
  'Projekte des Piloten (aktuell: pro-finder-pilot).';
comment on column public.projects.slug is 'Eindeutiger, URL-tauglicher Projektschlüssel.';

comment on table public.source_documents is
  'Offizielle THITRONIK Quelldokumente (PDF) für den Pro-finder, getrennt nach Geräten bis SN-044 und ab SN-045.';
comment on column public.source_documents.doc_key is 'Fachlicher Dokumentschlüssel, z. B. DOC-KA-SN045.';
comment on column public.source_documents.original_url is 'Offizielle Download-URL bei thitronik.de.';
comment on column public.source_documents.sha256 is 'SHA-256-Prüfsumme der abgerufenen Datei (Integritätsnachweis).';
comment on column public.source_documents.serial_range is 'Geltungsbereich: bis SN-044, ab SN-045 oder beide.';
comment on column public.source_documents.authority_status is 'Herkunftsbewertung, Default: offizielle_quelle.';
comment on column public.source_documents.storage_path is 'Pfad des abgelegten Originals im Bucket source-pdfs.';

comment on table public.source_pages is
  'Seitenweiser Inspektions- und Extraktionsstatus der Quelldokumente.';
comment on column public.source_pages.progress_percent is
  'Generierte Spalte: deterministisch aus status abgeleitet (not_started=0, inspected=25, extracted=50, validated=75, approved=100, blocked=0).';
comment on column public.source_pages.accessibility_issues is 'JSON-Liste festgestellter Barrierefreiheits-Probleme der Seite.';
comment on column public.source_pages.blocked_reason is 'Begründung, falls status = blocked.';

comment on table public.content_segments is
  'Redaktionell aufbereitete Inhalts-Segmente (deutsch als Quellsprache) mit Sicherheitseinstufung und Freigabe-Workflow.';
comment on column public.content_segments.segment_key is 'Fachlicher, eindeutiger Segmentschlüssel.';
comment on column public.content_segments.safety_class is 'normal | sicherheitsrelevant | sicherheitskritisch – steuert das Vier-Augen-Prinzip.';
comment on column public.content_segments.review_status is 'Freigabe nur durch Reviewer-Rollen; bei safety_class <> normal nie durch den Autor selbst.';
comment on column public.content_segments.prev_context is 'Vorhergehender Quelltext-Kontext zur übersetzungssicheren Abgrenzung.';

comment on table public.translations is
  'Übersetzungen je Segment und Zielsprache mit mehrstufigem Qualitäts-Workflow.';
comment on column public.translations.status is
  'approved erfordert: language_reviewer_id gesetzt und <> translator_id; bei sicherheitskritischen Segmenten zusätzlich technical_reviewer_id gesetzt und <> translator_id; Freigabe nie durch den Übersetzer selbst.';
comment on column public.translations.token_check_passed is 'Ergebnis der Platzhalter-/Token-Prüfung gegen den Quelltext.';

comment on table public.glossary_terms is
  'Terminologie-Glossar; Produktnamen (THITRONIK, Pro-finder, safe.lock) sind als do_not_translate markiert.';
comment on column public.glossary_terms.do_not_translate is 'true = Begriff wird in allen Zielsprachen unverändert übernommen.';

comment on table public.assets is
  'Abbildungen/Grafiken aus den Anleitungen inkl. Alternativtexten und Rechte-Status.';
comment on column public.assets.alt_text is 'Kurzer Alternativtext (Barrierefreiheit).';
comment on column public.assets.long_description is 'Ausführliche Beschreibung für komplexe Grafiken.';
comment on column public.assets.rights_status is 'Nutzungsrechte-Klärung, Default: ungeklaert.';

comment on table public.asset_requests is
  'Anforderungen für noch zu erstellende oder zu beschaffende Assets.';

comment on table public.discrepancies is
  'Festgestellte Diskrepanzen zwischen Quelldokumenten, Metadaten oder Übersetzungen.';
comment on column public.discrepancies.evidence is 'Belegstelle/Nachweis der Diskrepanz.';

comment on table public.review_events is
  'Append-only-Audit-Log aller Review- und Statusereignisse; update/delete sind per RLS und Privilegien ausgeschlossen.';
comment on column public.review_events.actor_id is 'Handelnder Nutzer; RLS erzwingt actor_id = auth.uid() beim Einfügen.';
comment on column public.review_events.safety_relevant is 'true, wenn das Ereignis sicherheitsrelevante Inhalte betrifft.';

comment on table public.card_prototypes is
  'Versionen des barrierefreien Karten-Prototyps inkl. Testergebnissen.';

comment on table public.progress_snapshots is
  'Tägliche/periodische Fortschritts-Snapshots je Workstream in Prozent.';
