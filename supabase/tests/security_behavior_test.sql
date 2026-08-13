-- End-to-end database behavior tests for the previously exploitable paths.
-- Every assertion runs through the authenticated role and an auth.uid() claim.

begin;

create extension if not exists pgtap with schema extensions;
select * from no_plan();

insert into auth.users (
  id, aud, role, email, email_confirmed_at, raw_app_meta_data,
  raw_user_meta_data, created_at, updated_at
)
values
  ('10000000-0000-0000-0000-000000000001', 'authenticated', 'authenticated',
   'editor@example.invalid', now(), '{}', '{}', now(), now()),
  ('10000000-0000-0000-0000-000000000002', 'authenticated', 'authenticated',
   'accessibility@example.invalid', now(), '{}', '{}', now(), now()),
  ('10000000-0000-0000-0000-000000000003', 'authenticated', 'authenticated',
   'technical@example.invalid', now(), '{}', '{}', now(), now()),
  ('10000000-0000-0000-0000-000000000004', 'authenticated', 'authenticated',
   'translator@example.invalid', now(), '{}', '{}', now(), now()),
  ('10000000-0000-0000-0000-000000000005', 'authenticated', 'authenticated',
   'language@example.invalid', now(), '{}', '{}', now(), now()),
  ('10000000-0000-0000-0000-000000000006', 'authenticated', 'authenticated',
   'outsider@example.invalid', now(), '{}', '{}', now(), now());

insert into public.profiles (user_id, display_name, role)
values
  ('10000000-0000-0000-0000-000000000001', 'Editor', 'content_editor'),
  ('10000000-0000-0000-0000-000000000002', 'Accessibility', 'accessibility_reviewer'),
  ('10000000-0000-0000-0000-000000000003', 'Technical', 'technical_reviewer'),
  ('10000000-0000-0000-0000-000000000004', 'Translator', 'translator'),
  ('10000000-0000-0000-0000-000000000005', 'Language', 'language_reviewer');

insert into public.projects (id, slug, name)
values (
  'b0000000-0000-0000-0000-000000000001',
  'unrelated-project',
  'Unrelated project'
);

insert into public.project_memberships (project_id, user_id, role)
select p.id, v.user_id, v.role
from public.projects p
cross join (
  values
    ('10000000-0000-0000-0000-000000000001'::uuid, 'content_editor'::public.app_role),
    ('10000000-0000-0000-0000-000000000002'::uuid, 'accessibility_reviewer'::public.app_role),
    ('10000000-0000-0000-0000-000000000003'::uuid, 'technical_reviewer'::public.app_role),
    ('10000000-0000-0000-0000-000000000004'::uuid, 'translator'::public.app_role),
    ('10000000-0000-0000-0000-000000000005'::uuid, 'language_reviewer'::public.app_role)
) as v(user_id, role)
where p.slug = 'pro-finder-pilot';

insert into public.project_memberships (project_id, user_id, role)
values (
  'b0000000-0000-0000-0000-000000000001',
  '10000000-0000-0000-0000-000000000006',
  'viewer'
);

insert into public.source_documents (
  id, project_id, doc_key, original_url, filename, sha256, page_count,
  serial_range
)
values (
  'b1000000-0000-0000-0000-000000000001',
  'b0000000-0000-0000-0000-000000000001',
  'UNRELATED-DOC',
  'https://example.invalid/unrelated.pdf',
  'unrelated.pdf',
  repeat('b', 64),
  1,
  'beide'
);

insert into public.content_segments (
  id, segment_key, project_id, serial_range, language, segment_type, title,
  body_md, safety_class, author_id
)
select
  '20000000-0000-0000-0000-000000000001',
  'TEST-CRITICAL',
  p.id,
  'beide',
  'de',
  'instruction',
  'Critical instruction',
  'Keep this safety-critical instruction unchanged.',
  'sicherheitskritisch',
  '10000000-0000-0000-0000-000000000001'
from public.projects p
where p.slug = 'pro-finder-pilot';

insert into public.translations (
  id, project_id, segment_id, target_language, text_md, translator_id
)
select
  '30000000-0000-0000-0000-000000000001',
  s.project_id,
  s.id,
  'en',
  'Keep this safety-critical instruction unchanged.',
  '10000000-0000-0000-0000-000000000004'
from public.content_segments s
where s.id = '20000000-0000-0000-0000-000000000001';

-- Project-A editor: a project-B document is invisible (BOLA regression).
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000001';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000001","role":"authenticated"}';

select is(
  (select count(*)::bigint from public.source_documents where doc_key = 'UNRELATED-DOC'),
  0::bigint,
  'a member cannot read another project document'
);

select throws_ok(
  $$
    insert into public.content_segments (
      segment_key, project_id, serial_range, language, segment_type,
      body_md, safety_class, author_id
    ) values (
      'CROSS-PROJECT-ATTEMPT',
      'b0000000-0000-0000-0000-000000000001',
      'beide', 'de', 'instruction', 'forbidden', 'normal',
      '10000000-0000-0000-0000-000000000001'
    )
  $$,
  '42501',
  null,
  'a member cannot insert content into another project'
);

-- P0 exploit 1: a reviewer cannot rewrite content/safety/identity and approve
-- in one broad UPDATE.
reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000002';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000002","role":"authenticated"}';

select throws_ok(
  $$
    update public.content_segments
    set body_md = 'attacker rewrite',
        safety_class = 'normal',
        reviewer_id = '10000000-0000-0000-0000-000000000002',
        review_status = 'freigegeben'
    where id = '20000000-0000-0000-0000-000000000001'
  $$,
  '42501',
  null,
  'reviewers cannot combine content mutation with approval'
);

-- P0 exploit 2: translation text, actor fields and approval status cannot be
-- forged in one broad UPDATE.
reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000005';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000005","role":"authenticated"}';

select throws_ok(
  $$
    update public.translations
    set text_md = 'attacker rewrite',
        translator_id = '10000000-0000-0000-0000-000000000004',
        language_reviewer_id = '10000000-0000-0000-0000-000000000005',
        technical_reviewer_id = '10000000-0000-0000-0000-000000000005',
        token_check_passed = true,
        status = 'approved'
    where id = '30000000-0000-0000-0000-000000000001'
  $$,
  '42501',
  null,
  'translation approval evidence cannot be forged by broad UPDATE'
);

select throws_ok(
  $$
    insert into public.review_events (
      project_id, entity_type, entity_id, event_type, actor_id
    )
    select project_id, 'translation', id, 'forged',
      '10000000-0000-0000-0000-000000000005'
    from public.translations
    where id = '30000000-0000-0000-0000-000000000001'
  $$,
  '42501',
  null,
  'authenticated clients cannot forge audit events'
);

-- No self-provisioning: an unrelated authenticated user cannot create a
-- profile or membership for itself.
reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000006';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000006","role":"authenticated"}';

select throws_ok(
  $$
    insert into public.profiles (user_id, role)
    values ('10000000-0000-0000-0000-000000000006', 'admin')
  $$,
  '42501',
  null,
  'an authenticated user cannot self-provision a profile or role'
);

select throws_ok(
  $$
    insert into public.project_memberships (project_id, user_id, role)
    select id, '10000000-0000-0000-0000-000000000006', 'admin'
    from public.projects where slug = 'unrelated-project'
  $$,
  '42501',
  null,
  'an authenticated user cannot self-promote its project membership'
);

-- Content workflow: editor submits, accessibility review cannot approve
-- critical content, independent technical review can.
reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000001';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000001","role":"authenticated"}';
select lives_ok(
  $$select private.transition_content_segment(
    '20000000-0000-0000-0000-000000000001', 'in_review', 'ready'
  )$$,
  'the authoring editor can submit a draft'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000002';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000002","role":"authenticated"}';
select throws_ok(
  $$select private.transition_content_segment(
    '20000000-0000-0000-0000-000000000001', 'freigegeben', 'looks accessible'
  )$$,
  '42501',
  'Critical content requires a technical reviewer',
  'critical content cannot be approved by accessibility review alone'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000003';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000003","role":"authenticated"}';
select lives_ok(
  $$select private.transition_content_segment(
    '20000000-0000-0000-0000-000000000001', 'freigegeben', 'technically safe'
  )$$,
  'an independent technical reviewer can approve critical content'
);
select is(
  (select review_status from public.content_segments
   where id = '20000000-0000-0000-0000-000000000001'),
  'freigegeben'::public.review_status,
  'content status was changed only by the transition function'
);

-- Translation workflow: no skipping; all checks/reviews refer to the current
-- database-derived checksum.
reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000005';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000005","role":"authenticated"}';
select throws_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'approved', true, 'skip'
  )$$,
  '22023',
  'Invalid translation status transition',
  'a reviewer cannot skip the translation status sequence'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000004';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000004","role":"authenticated"}';
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'source_aligned', null, null
  )$$,
  'translator aligns the source'
);
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'drafted', null, null
  )$$,
  'translator completes the draft'
);
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'terminology_checked', true, null
  )$$,
  'translator records a passing token check'
);
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'context_checked', null, null
  )$$,
  'translator completes context review'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000005';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000005","role":"authenticated"}';
select throws_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'technically_validated', null, null
  )$$,
  '42501',
  'Independent technical reviewer required',
  'a language reviewer cannot forge the technical review stage'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000003';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000003","role":"authenticated"}';
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'technically_validated', null, null
  )$$,
  'independent technical review succeeds'
);

reset role;
set local role authenticated;
set local request.jwt.claim.sub = '10000000-0000-0000-0000-000000000005';
set local request.jwt.claims =
  '{"sub":"10000000-0000-0000-0000-000000000005","role":"authenticated"}';
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'language_reviewed', null, null
  )$$,
  'independent language review succeeds'
);
select lives_ok(
  $$select private.transition_translation(
    '30000000-0000-0000-0000-000000000001', 'approved', null, 'approved'
  )$$,
  'critical translation approval succeeds after both reviews'
);
select is(
  (select status from public.translations
   where id = '30000000-0000-0000-0000-000000000001'),
  'approved'::public.translation_status,
  'translation reaches approved through the state machine'
);
select ok(
  exists (
    select 1 from public.translation_reviews tr
    join public.translations t on t.id = tr.translation_id
    where tr.translation_id = '30000000-0000-0000-0000-000000000001'
      and tr.to_status = 'approved'
      and tr.checksum_snapshot = t.checksum
      and tr.token_check_snapshot
  ),
  'approval evidence stores the current checksum and passing token check'
);

select * from finish();
rollback;
