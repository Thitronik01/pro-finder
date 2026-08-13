-- ============================================================================
-- Security hardening for the multi-project review workflow.
--
-- This migration intentionally follows the initial schema instead of rewriting
-- history. It replaces global `authenticated` access with project membership,
-- removes client-controlled approvals/audit events, and opts in explicitly to
-- the Data API privileges the browser application actually needs.
-- ============================================================================

create extension if not exists pgcrypto with schema extensions;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

-- ----------------------------------------------------------------------------
-- 1. Project membership and project ownership on every project-scoped row
-- ----------------------------------------------------------------------------

create table public.project_memberships (
  project_id uuid not null references public.projects (id) on delete cascade,
  user_id    uuid not null references auth.users (id) on delete cascade,
  role       public.app_role not null,
  created_by uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (project_id, user_id)
);

create trigger trg_project_memberships_set_updated_at
  before update on public.project_memberships
  for each row execute function public.set_updated_at();

create index idx_project_memberships_user_id
  on public.project_memberships (user_id);
create index idx_project_memberships_project_role
  on public.project_memberships (project_id, role);

alter table public.source_pages
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.translations
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.glossary_terms
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.assets
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.asset_requests
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.discrepancies
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.review_events
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.card_prototypes
  add column project_id uuid not null references public.projects (id) on delete restrict;
alter table public.progress_snapshots
  add column project_id uuid not null references public.projects (id) on delete restrict;

create index idx_source_pages_project_id on public.source_pages (project_id);
create index idx_translations_project_id on public.translations (project_id);
create index idx_glossary_terms_project_id on public.glossary_terms (project_id);
create index idx_assets_project_id on public.assets (project_id);
create index idx_asset_requests_project_id on public.asset_requests (project_id);
create index idx_discrepancies_project_id on public.discrepancies (project_id);
create index idx_review_events_project_id on public.review_events (project_id);
create index idx_card_prototypes_project_id on public.card_prototypes (project_id);
create index idx_progress_snapshots_project_id on public.progress_snapshots (project_id);

-- Composite candidate keys let foreign keys prove that a child and its parent
-- belong to the same project. The original single-column FKs remain in place.
alter table public.source_documents
  add constraint uq_source_documents_project_id_id unique (project_id, id);
alter table public.content_segments
  add constraint uq_content_segments_project_id_id unique (project_id, id);
alter table public.translations
  add constraint uq_translations_project_id_id unique (project_id, id);

alter table public.source_pages
  add constraint fk_source_pages_project_document
  foreign key (project_id, document_id)
  references public.source_documents (project_id, id) on delete cascade;
alter table public.content_segments
  add constraint fk_content_segments_project_document
  foreign key (project_id, source_document_id)
  references public.source_documents (project_id, id)
  on delete set null (source_document_id);
alter table public.translations
  add constraint fk_translations_project_segment
  foreign key (project_id, segment_id)
  references public.content_segments (project_id, id) on delete cascade;
alter table public.assets
  add constraint fk_assets_project_document
  foreign key (project_id, document_id)
  references public.source_documents (project_id, id)
  on delete set null (document_id);
alter table public.asset_requests
  add constraint fk_asset_requests_project_document
  foreign key (project_id, document_id)
  references public.source_documents (project_id, id)
  on delete set null (document_id);
alter table public.discrepancies
  add constraint fk_discrepancies_project_document
  foreign key (project_id, document_id)
  references public.source_documents (project_id, id)
  on delete set null (document_id);
alter table public.discrepancies
  add constraint fk_discrepancies_project_segment
  foreign key (project_id, segment_id)
  references public.content_segments (project_id, id)
  on delete set null (segment_id);

-- Actor/reviewer identifiers are real Auth users, not arbitrary UUID labels.
alter table public.content_segments
  add constraint fk_content_segments_author
  foreign key (author_id) references auth.users (id) on delete set null,
  add constraint fk_content_segments_reviewer
  foreign key (reviewer_id) references auth.users (id) on delete set null;
alter table public.translations
  add constraint fk_translations_translator
  foreign key (translator_id) references auth.users (id) on delete set null,
  add constraint fk_translations_language_reviewer
  foreign key (language_reviewer_id) references auth.users (id) on delete set null,
  add constraint fk_translations_technical_reviewer
  foreign key (technical_reviewer_id) references auth.users (id) on delete set null;
alter table public.asset_requests
  add constraint fk_asset_requests_requested_by
  foreign key (requested_by) references auth.users (id) on delete set null;
alter table public.review_events
  add constraint fk_review_events_actor
  foreign key (actor_id) references auth.users (id) on delete restrict;

alter table public.content_segments alter column author_id set not null;
alter table public.translations alter column translator_id set not null;
alter table public.review_events alter column actor_id set not null;

-- ----------------------------------------------------------------------------
-- 2. Database-derived checksums and append-only review evidence
-- ----------------------------------------------------------------------------

create function private.set_content_checksum()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.checksum := pg_catalog.encode(
    extensions.digest(
      pg_catalog.convert_to(
        concat_ws(
          E'\n',
          new.serial_range::text,
          new.language,
          new.segment_type,
          coalesce(new.task_slug, ''),
          coalesce(new.title, ''),
          coalesce(new.body_md, ''),
          new.safety_class::text,
          coalesce(new.source_document_id::text, ''),
          coalesce(new.source_page_start::text, ''),
          coalesce(new.source_page_end::text, ''),
          coalesce(new.source_region, '')
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  );
  return new;
end;
$$;

create function private.set_translation_checksum()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.checksum := pg_catalog.encode(
    extensions.digest(
      pg_catalog.convert_to(
        concat_ws(
          E'\n',
          new.target_language,
          coalesce(new.text_md, ''),
          coalesce(new.glossary_version, '')
        ),
        'UTF8'
      ),
      'sha256'
    ),
    'hex'
  );
  return new;
end;
$$;

update public.content_segments set checksum = '';
update public.translations set checksum = '', token_check_passed = false;

create trigger trg_content_segments_checksum
  before insert or update of serial_range, language, segment_type, task_slug,
    title, body_md, safety_class, source_document_id, source_page_start,
    source_page_end, source_region
  on public.content_segments
  for each row execute function private.set_content_checksum();

create trigger trg_translations_checksum
  before insert or update of target_language, text_md, glossary_version
  on public.translations
  for each row execute function private.set_translation_checksum();

-- Recalculate existing rows through the triggers before enforcing shape.
update public.content_segments set body_md = body_md;
update public.translations set text_md = text_md;

alter table public.content_segments
  alter column checksum set not null,
  add constraint chk_content_segments_checksum
    check (checksum ~ '^[0-9a-f]{64}$'),
  add constraint chk_content_segments_independent_approval
    check (
      review_status <> 'freigegeben'
      or (author_id is not null and reviewer_id is not null and author_id <> reviewer_id)
    );

alter table public.translations
  alter column checksum set not null,
  alter column token_check_passed set default false,
  alter column token_check_passed set not null,
  add constraint chk_translations_checksum
    check (checksum ~ '^[0-9a-f]{64}$'),
  add constraint chk_translations_independent_approval
    check (
      status <> 'approved'
      or (
        translator_id is not null
        and language_reviewer_id is not null
        and translator_id <> language_reviewer_id
        and token_check_passed
      )
    );

create table public.content_reviews (
  id                    uuid primary key default gen_random_uuid(),
  project_id            uuid not null references public.projects (id) on delete restrict,
  segment_id            uuid not null,
  actor_id              uuid not null references auth.users (id) on delete restrict,
  actor_role            public.app_role not null,
  from_status           public.review_status not null,
  to_status             public.review_status not null,
  checksum_snapshot     char(64) not null,
  safety_class_snapshot public.safety_class not null,
  comment               text,
  created_at            timestamptz not null default now(),
  constraint fk_content_reviews_project_segment
    foreign key (project_id, segment_id)
    references public.content_segments (project_id, id) on delete restrict,
  constraint chk_content_reviews_transition
    check (from_status <> to_status),
  constraint chk_content_reviews_checksum
    check (checksum_snapshot ~ '^[0-9a-f]{64}$')
);

create index idx_content_reviews_project_segment_created
  on public.content_reviews (project_id, segment_id, created_at desc);
create index idx_content_reviews_actor on public.content_reviews (actor_id);

create table public.translation_reviews (
  id                    uuid primary key default gen_random_uuid(),
  project_id            uuid not null references public.projects (id) on delete restrict,
  translation_id        uuid not null,
  actor_id              uuid not null references auth.users (id) on delete restrict,
  actor_role            public.app_role not null,
  from_status           public.translation_status not null,
  to_status             public.translation_status not null,
  checksum_snapshot     char(64) not null,
  token_check_snapshot  boolean not null,
  comment               text,
  created_at            timestamptz not null default now(),
  constraint fk_translation_reviews_project_translation
    foreign key (project_id, translation_id)
    references public.translations (project_id, id) on delete restrict,
  constraint chk_translation_reviews_transition
    check (from_status <> to_status),
  constraint chk_translation_reviews_checksum
    check (checksum_snapshot ~ '^[0-9a-f]{64}$')
);

create index idx_translation_reviews_project_translation_created
  on public.translation_reviews (project_id, translation_id, created_at desc);
create index idx_translation_reviews_actor on public.translation_reviews (actor_id);

-- ----------------------------------------------------------------------------
-- 3. Private authorization and transition API
-- ----------------------------------------------------------------------------

create function private.is_project_member(p_project_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.project_memberships pm
    where pm.project_id = p_project_id
      and pm.user_id = (select auth.uid())
  );
$$;

create function private.has_project_role(
  p_project_id uuid,
  p_roles public.app_role[]
)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.project_memberships pm
    where pm.project_id = p_project_id
      and pm.user_id = (select auth.uid())
      and pm.role = any (p_roles)
  );
$$;

create function private.shares_project_with(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.project_memberships mine
    join public.project_memberships theirs
      on theirs.project_id = mine.project_id
    where mine.user_id = (select auth.uid())
      and theirs.user_id = p_user_id
  );
$$;

create function private.storage_path_project_id(p_name text)
returns uuid
language plpgsql
stable
set search_path = ''
as $$
declare
  v_folder text;
begin
  v_folder := (storage.foldername(p_name))[1];
  if v_folder is null then
    return null;
  end if;
  return v_folder::uuid;
exception
  when invalid_text_representation then
    return null;
end;
$$;

create function private.set_project_membership(
  p_project_id uuid,
  p_user_id uuid,
  p_role public.app_role
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
begin
  if v_actor is null then
    raise exception using errcode = '42501', message = 'Authentication required';
  end if;
  if not private.has_project_role(p_project_id, array['admin']::public.app_role[]) then
    raise exception using errcode = '42501', message = 'Project admin role required';
  end if;

  insert into public.profiles (user_id, role)
  values (p_user_id, 'viewer')
  on conflict (user_id) do nothing;

  insert into public.project_memberships (project_id, user_id, role, created_by)
  values (p_project_id, p_user_id, p_role, v_actor)
  on conflict (project_id, user_id)
  do update set role = excluded.role, updated_at = now();

  insert into public.review_events (
    project_id, entity_type, entity_id, event_type, actor_id, comment
  ) values (
    p_project_id, 'project_membership', p_user_id, 'membership_set', v_actor,
    format('role=%s', p_role::text)
  );
end;
$$;

create function private.transition_content_segment(
  p_segment_id uuid,
  p_to_status public.review_status,
  p_comment text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_segment public.content_segments%rowtype;
  v_role public.app_role;
begin
  if v_actor is null then
    raise exception using errcode = '42501', message = 'Authentication required';
  end if;

  select * into v_segment
  from public.content_segments
  where id = p_segment_id
  for update;
  if not found then
    raise exception using errcode = 'P0002', message = 'Content segment not found';
  end if;

  select pm.role into v_role
  from public.project_memberships pm
  where pm.project_id = v_segment.project_id and pm.user_id = v_actor;
  if v_role is null then
    raise exception using errcode = '42501', message = 'Project membership required';
  end if;

  if (v_segment.review_status, p_to_status) not in (
    ('entwurf'::public.review_status, 'in_review'::public.review_status),
    ('in_review'::public.review_status, 'freigegeben'::public.review_status),
    ('in_review'::public.review_status, 'abgelehnt'::public.review_status),
    ('abgelehnt'::public.review_status, 'entwurf'::public.review_status),
    ('freigegeben'::public.review_status, 'entwurf'::public.review_status)
  ) then
    raise exception using errcode = '22023', message = 'Invalid content review status transition';
  end if;

  if p_to_status = 'in_review' then
    if v_role not in ('content_editor', 'admin') then
      raise exception using errcode = '42501', message = 'Editor role required';
    end if;
    if nullif(btrim(coalesce(v_segment.body_md, '')), '') is null then
      raise exception using errcode = '23514', message = 'Content body is required for review';
    end if;
  elsif p_to_status in ('freigegeben', 'abgelehnt') then
    if v_actor = v_segment.author_id then
      raise exception using errcode = '42501', message = 'Independent reviewer required';
    end if;
    if v_segment.safety_class = 'sicherheitskritisch' then
      if v_role <> 'technical_reviewer' then
        raise exception using errcode = '42501', message = 'Critical content requires a technical reviewer';
      end if;
    elsif v_role not in ('technical_reviewer', 'accessibility_reviewer', 'admin') then
      raise exception using errcode = '42501', message = 'Reviewer role required';
    end if;
  else
    if v_role not in ('content_editor', 'admin') then
      raise exception using errcode = '42501', message = 'Editor role required to reopen content';
    end if;
  end if;

  update public.content_segments
  set review_status = p_to_status,
      reviewer_id = case
        when p_to_status in ('freigegeben', 'abgelehnt') then v_actor
        else null
      end,
      reviewed_at = case
        when p_to_status in ('freigegeben', 'abgelehnt') then now()
        else null
      end,
      author_id = case
        when p_to_status = 'entwurf' then v_actor
        else author_id
      end
  where id = p_segment_id;

  insert into public.content_reviews (
    project_id, segment_id, actor_id, actor_role, from_status, to_status,
    checksum_snapshot, safety_class_snapshot, comment
  ) values (
    v_segment.project_id, v_segment.id, v_actor, v_role,
    v_segment.review_status, p_to_status, v_segment.checksum,
    v_segment.safety_class, p_comment
  );

  insert into public.review_events (
    project_id, entity_type, entity_id, event_type, actor_id,
    from_status, to_status, comment, safety_relevant
  ) values (
    v_segment.project_id, 'content_segment', v_segment.id, 'status_transition',
    v_actor, v_segment.review_status::text, p_to_status::text, p_comment,
    v_segment.safety_class <> 'normal'
  );
end;
$$;

create function private.transition_translation(
  p_translation_id uuid,
  p_to_status public.translation_status,
  p_token_check_passed boolean default null,
  p_comment text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor uuid := auth.uid();
  v_translation public.translations%rowtype;
  v_role public.app_role;
  v_safety public.safety_class;
  v_token_check boolean;
begin
  if v_actor is null then
    raise exception using errcode = '42501', message = 'Authentication required';
  end if;

  select t.* into v_translation
  from public.translations t
  where t.id = p_translation_id
  for update;
  if not found then
    raise exception using errcode = 'P0002', message = 'Translation not found';
  end if;

  select s.safety_class into strict v_safety
  from public.content_segments s
  where s.project_id = v_translation.project_id
    and s.id = v_translation.segment_id;

  select pm.role into v_role
  from public.project_memberships pm
  where pm.project_id = v_translation.project_id and pm.user_id = v_actor;
  if v_role is null then
    raise exception using errcode = '42501', message = 'Project membership required';
  end if;

  if (v_translation.status, p_to_status) not in (
    ('not_started'::public.translation_status, 'source_aligned'::public.translation_status),
    ('source_aligned'::public.translation_status, 'drafted'::public.translation_status),
    ('drafted'::public.translation_status, 'terminology_checked'::public.translation_status),
    ('terminology_checked'::public.translation_status, 'context_checked'::public.translation_status),
    ('context_checked'::public.translation_status, 'technically_validated'::public.translation_status),
    ('technically_validated'::public.translation_status, 'language_reviewed'::public.translation_status),
    ('language_reviewed'::public.translation_status, 'approved'::public.translation_status)
  ) then
    raise exception using errcode = '22023', message = 'Invalid translation status transition';
  end if;

  if p_to_status in ('source_aligned', 'drafted', 'terminology_checked', 'context_checked') then
    if v_role not in ('translator', 'admin') or v_translation.translator_id <> v_actor then
      raise exception using errcode = '42501', message = 'Assigned translator required';
    end if;
    if p_to_status <> 'source_aligned'
       and nullif(btrim(coalesce(v_translation.text_md, '')), '') is null then
      raise exception using errcode = '23514', message = 'Translation text is required';
    end if;
  elsif p_to_status = 'technically_validated' then
    if v_role <> 'technical_reviewer' or v_actor = v_translation.translator_id then
      raise exception using errcode = '42501', message = 'Independent technical reviewer required';
    end if;
  else
    if v_role <> 'language_reviewer' or v_actor = v_translation.translator_id then
      raise exception using errcode = '42501', message = 'Independent language reviewer required';
    end if;
  end if;

  v_token_check := case
    when p_to_status = 'terminology_checked' then coalesce(p_token_check_passed, false)
    else v_translation.token_check_passed
  end;
  if p_to_status = 'terminology_checked' and not v_token_check then
    raise exception using errcode = '23514', message = 'Token check must pass';
  end if;

  if p_to_status = 'approved' then
    if not v_token_check then
      raise exception using errcode = '23514', message = 'Token check must pass before approval';
    end if;
    if v_translation.language_reviewer_id is null
       or v_translation.language_reviewer_id <> v_actor
       or v_translation.language_reviewer_id = v_translation.translator_id then
      raise exception using errcode = '42501', message = 'Matching independent language review required';
    end if;
    if v_safety = 'sicherheitskritisch'
       and (
         v_translation.technical_reviewer_id is null
         or v_translation.technical_reviewer_id = v_translation.translator_id
       ) then
      raise exception using errcode = '42501', message = 'Critical translation requires technical review';
    end if;
    if not exists (
      select 1 from public.translation_reviews tr
      where tr.project_id = v_translation.project_id
        and tr.translation_id = v_translation.id
        and tr.to_status = 'technically_validated'
        and tr.checksum_snapshot = v_translation.checksum
    ) or not exists (
      select 1 from public.translation_reviews tr
      where tr.project_id = v_translation.project_id
        and tr.translation_id = v_translation.id
        and tr.to_status = 'language_reviewed'
        and tr.checksum_snapshot = v_translation.checksum
    ) then
      raise exception using errcode = '23514', message = 'Reviews must cover the current checksum';
    end if;
  end if;

  update public.translations
  set status = p_to_status,
      progress_percent = case p_to_status
        when 'not_started' then 0
        when 'source_aligned' then 15
        when 'drafted' then 30
        when 'terminology_checked' then 45
        when 'context_checked' then 60
        when 'technically_validated' then 75
        when 'language_reviewed' then 90
        when 'approved' then 100
      end,
      token_check_passed = v_token_check,
      technical_reviewer_id = case
        when p_to_status = 'technically_validated' then v_actor
        else technical_reviewer_id
      end,
      language_reviewer_id = case
        when p_to_status = 'language_reviewed' then v_actor
        else language_reviewer_id
      end
  where id = p_translation_id;

  insert into public.translation_reviews (
    project_id, translation_id, actor_id, actor_role, from_status, to_status,
    checksum_snapshot, token_check_snapshot, comment
  ) values (
    v_translation.project_id, v_translation.id, v_actor, v_role,
    v_translation.status, p_to_status, v_translation.checksum, v_token_check,
    p_comment
  );

  insert into public.review_events (
    project_id, entity_type, entity_id, event_type, actor_id,
    from_status, to_status, comment, safety_relevant
  ) values (
    v_translation.project_id, 'translation', v_translation.id,
    'status_transition', v_actor, v_translation.status::text,
    p_to_status::text, p_comment, v_safety <> 'normal'
  );
end;
$$;

-- ----------------------------------------------------------------------------
-- 4. Replace global policies with project-scoped policies
-- ----------------------------------------------------------------------------

do $$
declare
  v_policy record;
begin
  for v_policy in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename in (
        'profiles', 'projects', 'source_documents', 'source_pages',
        'content_segments', 'translations', 'glossary_terms', 'assets',
        'asset_requests', 'discrepancies', 'review_events', 'card_prototypes',
        'progress_snapshots'
      )
  loop
    execute format(
      'drop policy %I on %I.%I',
      v_policy.policyname, v_policy.schemaname, v_policy.tablename
    );
  end loop;
end;
$$;

drop policy storage_objects_select_authenticated on storage.objects;
drop policy storage_objects_insert_editor on storage.objects;
drop policy storage_objects_update_editor on storage.objects;
drop policy storage_objects_delete_admin on storage.objects;

-- The original global-role helpers lived in the exposed public schema. Their
-- dependent policies are gone; all authorization now resolves a project role
-- through the private helpers below.
drop function public.current_app_role();
drop function public.has_any_role(public.app_role[]);
drop function public.profile_role_of(uuid);
drop function public.segment_safety_class(uuid);

alter table public.project_memberships enable row level security;
alter table public.content_reviews enable row level security;
alter table public.translation_reviews enable row level security;

create policy profiles_select_shared_project on public.profiles
  for select to authenticated
  using (
    user_id = (select auth.uid())
    or (select private.shares_project_with(user_id))
  );
create policy profiles_update_self on public.profiles
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create policy project_memberships_select_member on public.project_memberships
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy projects_select_member on public.projects
  for select to authenticated
  using ((select private.is_project_member(id)));

create policy source_documents_select_member on public.source_documents
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy source_documents_insert_editor on public.source_documents
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));
create policy source_documents_update_editor on public.source_documents
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy source_pages_select_member on public.source_pages
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy source_pages_insert_editor on public.source_pages
  for insert to authenticated
  with check (
    status <> 'approved'
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  );
create policy source_pages_update_editor on public.source_pages
  for update to authenticated
  using (
    status <> 'approved'
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  )
  with check (
    status <> 'approved'
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  );

create policy content_segments_select_member on public.content_segments
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy content_segments_insert_editor on public.content_segments
  for insert to authenticated
  with check (
    review_status = 'entwurf'
    and author_id = (select auth.uid())
    and reviewer_id is null
    and reviewed_at is null
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  );
create policy content_segments_update_draft_author on public.content_segments
  for update to authenticated
  using (
    review_status in ('entwurf', 'abgelehnt')
    and author_id = (select auth.uid())
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  )
  with check (
    review_status in ('entwurf', 'abgelehnt')
    and author_id = (select auth.uid())
    and (select private.has_project_role(
      project_id, array['content_editor', 'admin']::public.app_role[]
    ))
  );

create policy translations_select_member on public.translations
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy translations_insert_assigned on public.translations
  for insert to authenticated
  with check (
    status = 'not_started'
    and translator_id = (select auth.uid())
    and language_reviewer_id is null
    and technical_reviewer_id is null
    and (select private.has_project_role(
      project_id, array['translator', 'admin']::public.app_role[]
    ))
  );
create policy translations_update_early_draft on public.translations
  for update to authenticated
  using (
    status in ('not_started', 'source_aligned', 'drafted')
    and translator_id = (select auth.uid())
    and (select private.has_project_role(
      project_id, array['translator', 'admin']::public.app_role[]
    ))
  )
  with check (
    status in ('not_started', 'source_aligned', 'drafted')
    and translator_id = (select auth.uid())
    and (select private.has_project_role(
      project_id, array['translator', 'admin']::public.app_role[]
    ))
  );

create policy glossary_terms_select_member on public.glossary_terms
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy glossary_terms_insert_editor on public.glossary_terms
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));
create policy glossary_terms_update_editor on public.glossary_terms
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy assets_select_member on public.assets
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy assets_insert_editor on public.assets
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));
create policy assets_update_editor on public.assets
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy asset_requests_select_member on public.asset_requests
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy asset_requests_insert_member on public.asset_requests
  for insert to authenticated
  with check (
    requested_by = (select auth.uid())
    and (select private.is_project_member(project_id))
  );
create policy asset_requests_update_editor on public.asset_requests
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy discrepancies_select_member on public.discrepancies
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy discrepancies_insert_contributor on public.discrepancies
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id,
    array[
      'content_editor', 'translator', 'language_reviewer',
      'technical_reviewer', 'accessibility_reviewer', 'admin'
    ]::public.app_role[]
  )));
create policy discrepancies_update_editor on public.discrepancies
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy review_events_select_member on public.review_events
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy content_reviews_select_member on public.content_reviews
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy translation_reviews_select_member on public.translation_reviews
  for select to authenticated
  using ((select private.is_project_member(project_id)));

create policy card_prototypes_select_member on public.card_prototypes
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy card_prototypes_insert_editor on public.card_prototypes
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));
create policy card_prototypes_update_editor on public.card_prototypes
  for update to authenticated
  using ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )))
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

create policy progress_snapshots_select_member on public.progress_snapshots
  for select to authenticated
  using ((select private.is_project_member(project_id)));
create policy progress_snapshots_insert_editor on public.progress_snapshots
  for insert to authenticated
  with check ((select private.has_project_role(
    project_id, array['content_editor', 'admin']::public.app_role[]
  )));

-- ----------------------------------------------------------------------------
-- 5. Explicit, least-privilege Data API grants
-- ----------------------------------------------------------------------------

revoke all privileges on all tables in schema public from anon, authenticated;
revoke all privileges on all sequences in schema public from anon, authenticated;
revoke execute on all functions in schema public from public, anon, authenticated;
revoke execute on all functions in schema private from public, anon, authenticated;

alter default privileges for role postgres in schema public
  revoke all on tables from anon, authenticated;
alter default privileges for role postgres in schema public
  revoke all on sequences from anon, authenticated;
alter default privileges for role postgres in schema public
  revoke execute on functions from public, anon, authenticated;
alter default privileges for role postgres in schema private
  revoke execute on functions from public, anon, authenticated;

grant usage on schema public, private to authenticated, service_role;

grant select on table
  public.profiles,
  public.projects,
  public.project_memberships,
  public.source_documents,
  public.source_pages,
  public.content_segments,
  public.translations,
  public.glossary_terms,
  public.assets,
  public.asset_requests,
  public.discrepancies,
  public.review_events,
  public.content_reviews,
  public.translation_reviews,
  public.card_prototypes,
  public.progress_snapshots
to authenticated;

grant update (display_name) on public.profiles to authenticated;

grant insert (
  project_id, doc_key, title, original_url, retrieved_at, filename,
  file_size_bytes, sha256, page_count, pdf_version, revision, languages,
  serial_range, authority_status, storage_path, notes
) on public.source_documents to authenticated;
grant update (
  title, original_url, retrieved_at, filename, file_size_bytes, sha256,
  page_count, pdf_version, revision, languages, serial_range,
  authority_status, storage_path, notes
) on public.source_documents to authenticated;

grant insert (
  project_id, document_id, page_number, status, content_type, languages,
  summary, accessibility_issues, extractable_chars, blocked_reason,
  next_action, inspected_by, inspected_at
) on public.source_pages to authenticated;
grant update (
  status, content_type, languages, summary, accessibility_issues,
  extractable_chars, blocked_reason, next_action, inspected_by, inspected_at
) on public.source_pages to authenticated;

grant insert (
  segment_key, project_id, serial_range, language, segment_type, task_slug,
  title, body_md, safety_class, source_document_id, source_page_start,
  source_page_end, source_region, prev_context, next_context,
  glossary_version, change_reason, author_id
) on public.content_segments to authenticated;
grant update (
  serial_range, language, segment_type, task_slug, title, body_md,
  safety_class, source_document_id, source_page_start, source_page_end,
  source_region, prev_context, next_context, glossary_version, change_reason
) on public.content_segments to authenticated;

grant insert (
  project_id, segment_id, target_language, text_md, translator_id,
  glossary_version, change_reason
) on public.translations to authenticated;
grant update (text_md, glossary_version, change_reason)
  on public.translations to authenticated;

grant insert (
  project_id, term, language, definition, do_not_translate,
  source_path, conflict_note
) on public.glossary_terms to authenticated;
grant update (
  term, language, definition, do_not_translate, source_path, conflict_note
) on public.glossary_terms to authenticated;

grant insert (
  project_id, asset_key, document_id, page_number, description, alt_text,
  long_description, storage_bucket, storage_path, serial_range, asset_version,
  rights_status, accessibility_status
) on public.assets to authenticated;
grant update (
  asset_key, document_id, page_number, description, alt_text,
  long_description, storage_bucket, storage_path, serial_range, asset_version,
  rights_status, accessibility_status
) on public.assets to authenticated;

grant insert (
  project_id, document_id, page_number, description, status, requested_by
) on public.asset_requests to authenticated;
grant update (document_id, page_number, description, status)
  on public.asset_requests to authenticated;

grant insert (
  project_id, document_id, page_number, segment_id, title, description,
  severity, status, evidence, resolution
) on public.discrepancies to authenticated;
grant update (
  document_id, page_number, segment_id, title, description, severity,
  status, evidence, resolution
) on public.discrepancies to authenticated;

grant insert (project_id, version, description, status, test_results)
  on public.card_prototypes to authenticated;
grant update (description, status, test_results)
  on public.card_prototypes to authenticated;

grant insert (project_id, snapshot_date, workstream, percent, detail)
  on public.progress_snapshots to authenticated;

grant execute on function private.is_project_member(uuid)
  to authenticated, service_role;
grant execute on function private.has_project_role(uuid, public.app_role[])
  to authenticated, service_role;
grant execute on function private.shares_project_with(uuid)
  to authenticated, service_role;
grant execute on function private.storage_path_project_id(text)
  to authenticated, service_role;
grant execute on function private.set_project_membership(uuid, uuid, public.app_role)
  to authenticated, service_role;
grant execute on function private.transition_content_segment(
  uuid, public.review_status, text
) to authenticated, service_role;
grant execute on function private.transition_translation(
  uuid, public.translation_status, boolean, text
) to authenticated, service_role;

grant all privileges on all tables in schema public to service_role;
grant all privileges on all sequences in schema public to service_role;
grant execute on all functions in schema public, private to service_role;

-- ----------------------------------------------------------------------------
-- 6. Project- and workflow-scoped Storage policies
-- Object names must begin with `<project UUID>/`.
-- ----------------------------------------------------------------------------

create policy storage_objects_select_project_member on storage.objects
  for select to authenticated
  using (
    bucket_id in ('source-pdfs', 'source-assets', 'review-assets', 'approved-assets')
    and (select private.is_project_member(
      private.storage_path_project_id(name)
    ))
  );

create policy storage_objects_insert_source on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'source-pdfs'
    and owner_id = (select auth.uid())::text
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['content_editor', 'admin']::public.app_role[]
    ))
  );

create policy storage_objects_insert_working on storage.objects
  for insert to authenticated
  with check (
    bucket_id in ('source-assets', 'review-assets')
    and owner_id = (select auth.uid())::text
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['content_editor', 'admin']::public.app_role[]
    ))
  );

create policy storage_objects_insert_approved on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'approved-assets'
    and owner_id = (select auth.uid())::text
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['technical_reviewer', 'accessibility_reviewer', 'admin']::public.app_role[]
    ))
  );

create policy storage_objects_update_working_owner on storage.objects
  for update to authenticated
  using (
    bucket_id in ('source-assets', 'review-assets')
    and owner_id = (select auth.uid())::text
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['content_editor', 'admin']::public.app_role[]
    ))
  )
  with check (
    bucket_id in ('source-assets', 'review-assets')
    and owner_id = (select auth.uid())::text
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['content_editor', 'admin']::public.app_role[]
    ))
  );

create policy storage_objects_delete_working_admin on storage.objects
  for delete to authenticated
  using (
    bucket_id in ('source-assets', 'review-assets')
    and (select private.has_project_role(
      private.storage_path_project_id(name),
      array['admin']::public.app_role[]
    ))
  );

comment on table public.project_memberships is
  'Project-scoped authorization. Memberships are provisioned only by a project admin or trusted server/bootstrap SQL.';
comment on table public.content_reviews is
  'Append-only content review transitions with immutable checksum and safety snapshots.';
comment on table public.translation_reviews is
  'Append-only translation workflow transitions with checksum and token-check snapshots.';
comment on function private.transition_content_segment(uuid, public.review_status, text) is
  'Narrow, authenticated transition API; direct clients cannot update approval columns.';
comment on function private.transition_translation(uuid, public.translation_status, boolean, text) is
  'Narrow, authenticated translation state machine; validates actor, order, checksums and independent reviewers.';
