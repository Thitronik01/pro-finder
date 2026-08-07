-- Catalog-level security assertions. Behavioral exploit tests live in
-- security_behavior_test.sql.

begin;

create extension if not exists pgtap with schema extensions;
select * from no_plan();

select ok(
  not exists (
    select 1
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relkind = 'r'
      and c.relname in (
        'profiles', 'projects', 'project_memberships', 'source_documents',
        'source_pages', 'content_segments', 'translations', 'glossary_terms',
        'assets', 'asset_requests', 'discrepancies', 'review_events',
        'content_reviews', 'translation_reviews', 'card_prototypes',
        'progress_snapshots'
      )
      and not c.relrowsecurity
  ),
  'RLS is enabled on every exposed application table'
);

select ok(
  not has_table_privilege('anon', 'public.projects', 'select')
  and not has_table_privilege('anon', 'public.content_segments', 'select')
  and not has_table_privilege('anon', 'public.review_events', 'select'),
  'anon has no application-table privileges'
);

select ok(
  has_table_privilege('authenticated', 'public.content_segments', 'select')
  and not has_column_privilege(
    'authenticated', 'public.content_segments', 'review_status', 'update'
  )
  and not has_column_privilege(
    'authenticated', 'public.content_segments', 'reviewer_id', 'update'
  ),
  'content approval columns are not directly writable through the Data API'
);

select ok(
  has_table_privilege('authenticated', 'public.translations', 'select')
  and not has_column_privilege(
    'authenticated', 'public.translations', 'status', 'update'
  )
  and not has_column_privilege(
    'authenticated', 'public.translations', 'token_check_passed', 'update'
  )
  and not has_column_privilege(
    'authenticated', 'public.translations', 'technical_reviewer_id', 'update'
  ),
  'translation workflow evidence is not directly writable through the Data API'
);

select ok(
  not has_table_privilege('authenticated', 'public.review_events', 'insert')
  and not has_table_privilege('authenticated', 'public.review_events', 'update')
  and not has_table_privilege('authenticated', 'public.review_events', 'delete')
  and not has_table_privilege('authenticated', 'public.content_reviews', 'insert')
  and not has_table_privilege('authenticated', 'public.translation_reviews', 'insert'),
  'audit and review evidence is append-only for authenticated clients'
);

select ok(
  to_regprocedure('private.transition_content_segment(uuid,public.review_status,text)')
    is not null
  and to_regprocedure(
    'private.transition_translation(uuid,public.translation_status,boolean,text)'
  ) is not null
  and not exists (
    select 1
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.prosecdef
  ),
  'narrow SECURITY DEFINER transitions are outside the exposed public schema'
);

select ok(
  exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'projects'
      and policyname = 'projects_select_member'
      and coalesce(qual, '') like '%is_project_member%'
  )
  and exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'content_segments'
      and policyname = 'content_segments_select_member'
      and coalesce(qual, '') like '%is_project_member%'
  )
  and exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'translations'
      and policyname = 'translations_select_member'
      and coalesce(qual, '') like '%is_project_member%'
  ),
  'project-bound SELECT policies cover projects, content and translations'
);

select ok(
  exists (
    select 1
    from pg_constraint
    where conrelid = 'public.source_pages'::regclass
      and conname = 'fk_source_pages_project_document'
  )
  and exists (
    select 1
    from pg_constraint
    where conrelid = 'public.translations'::regclass
      and conname = 'fk_translations_project_segment'
  )
  and exists (
    select 1
    from pg_constraint
    where conrelid = 'public.discrepancies'::regclass
      and conname = 'fk_discrepancies_project_segment'
  ),
  'composite foreign keys enforce cross-project consistency'
);

select is(
  (
    select count(*)::integer
    from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and cmd in ('UPDATE', 'DELETE', 'ALL')
      and (
        coalesce(qual, '') like '%source-pdfs%'
        or coalesce(with_check, '') like '%source-pdfs%'
        or coalesce(qual, '') like '%approved-assets%'
        or coalesce(with_check, '') like '%approved-assets%'
      )
  ),
  0,
  'source PDFs and approved assets have no update/delete policy'
);

select ok(
  exists (
    select 1
    from pg_policies
    where schemaname = 'storage' and tablename = 'objects'
      and policyname = 'storage_objects_select_project_member'
      and coalesce(qual, '') like '%storage_path_project_id%'
      and coalesce(qual, '') like '%is_project_member%'
  ),
  'Storage reads are tied to the project UUID path prefix and membership'
);

select * from finish();
rollback;
