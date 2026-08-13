-- ============================================================================
-- Seed-Daten für den THITRONIK Pro-finder Barrierefreiheits-Piloten.
--
-- Enthält ausschließlich öffentlich verifizierbare Dokument-Metadaten und
-- Terminologie. KEINE Kundendaten, PINs, Zielrufnummern oder Fahrzeugdaten.
-- KEINE auth.users-Inserts – Nutzer entstehen ausschließlich über Supabase Auth.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Projekt
-- ----------------------------------------------------------------------------

insert into public.projects (slug, name, description)
values (
  'pro-finder-pilot',
  'THITRONIK Pro-finder Barrierefreiheits-Pilot',
  'Pilotprojekt zur barrierefreien Aufbereitung der offiziellen Pro-finder-Anleitungen (bis SN-044 und ab SN-045) inkl. mehrsprachiger, qualitätsgesicherter Übersetzungen.'
);

-- ----------------------------------------------------------------------------
-- 2. Offizielle Quelldokumente (Metadaten Stand 2026-08-06)
-- languages bleibt bewusst null und wird erst bei der Seiteninspektion erhoben.
-- ----------------------------------------------------------------------------

insert into public.source_documents
  (project_id, doc_key, title, original_url, retrieved_at, filename,
   file_size_bytes, sha256, page_count, pdf_version, revision, serial_range,
   storage_path, notes)
values
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    'DOC-KA-SN044',
    'Pro-finder Kurzanleitung (international) – bis SN-044',
    'https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro_finder-kurzanleitung-international.pdf',
    date '2026-08-06',
    'pro_finder-kurzanleitung-international.pdf',
    1210133,
    'f737c39a10dab22ed0eec9332d653eeeac70703fe58a6e8712e4e70eb3d09ceb',
    2,
    '1.7',
    null,
    'sn-001-044',
    (select id::text from public.projects where slug = 'pro-finder-pilot')
      || '/DOC-KA-SN044/pro_finder-kurzanleitung-international.pdf',
    'Kurzanleitung für Geräte bis SN-044; Revisionsstand im Dokument-Metadatensatz nicht ausgewiesen.'
  ),
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    'DOC-BMA-SN044',
    'Pro-finder Bedienungs- und Montageanleitung 2.6 – bis SN-044',
    'https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro-finder_-_bedienungs-_und_montageanleitung_2.6_01.pdf',
    date '2026-08-06',
    'pro-finder_-_bedienungs-_und_montageanleitung_2.6_01.pdf',
    1449781,
    '981e5a86ee1c9fa46734cb2ea4fa4cd06eb65c5be62d2a6e4114165c8243a1e8',
    72,
    '1.7',
    '2.6',
    'sn-001-044',
    (select id::text from public.projects where slug = 'pro-finder-pilot')
      || '/DOC-BMA-SN044/pro-finder_-_bedienungs-_und_montageanleitung_2.6_01.pdf',
    'Vollständige Bedienungs- und Montageanleitung für Geräte bis SN-044.'
  ),
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    'DOC-KA-SN045',
    'Pro-finder Kurzanleitung (international) – ab SN-045',
    'https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro_finder-kurzanleitung-international_sn-045.pdf',
    date '2026-08-06',
    'pro_finder-kurzanleitung-international_sn-045.pdf',
    4445759,
    'a73a4dc7ee1d8843c8f3beef423da4be8d2b81347adf89560d8e1f4deaf2dc23',
    2,
    '1.6',
    '1.3.2',
    'sn-045-plus',
    (select id::text from public.projects where slug = 'pro-finder-pilot')
      || '/DOC-KA-SN045/pro_finder-kurzanleitung-international_sn-045.pdf',
    'Kurzanleitung für Geräte ab SN-045.'
  ),
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    'DOC-IBA-SN045',
    'Pro-finder Bedienungs- und Installationsanleitung (zehn Sprachen) – ab SN-045',
    'https://www.thitronik.de/fileadmin/user_upload/downloads/gaswarner/anleitungen/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf',
    date '2026-08-06',
    'pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf',
    10044621,
    'a1e1ae9b1a6e0e1c5a21a82f3639a0facff60073f702ff9443428addd5d94bb2',
    247,
    '1.7',
    null,
    'sn-045-plus',
    (select id::text from public.projects where slug = 'pro-finder-pilot')
      || '/DOC-IBA-SN045/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf',
    'Zehnsprachige Bedienungs- und Installationsanleitung für Geräte ab SN-045.'
  );

-- ----------------------------------------------------------------------------
-- 3. Seiten-Datensätze: eine Zeile je PDF-Seite (2 + 72 + 2 + 247 = 323)
-- ----------------------------------------------------------------------------

insert into public.source_pages (project_id, document_id, page_number)
select d.project_id, d.id, gs.page_number
from public.source_documents d
cross join lateral generate_series(1, d.page_count) as gs(page_number);

-- ----------------------------------------------------------------------------
-- 4. Glossar (Kern-Terminologie; Produktnamen werden nie übersetzt)
-- ----------------------------------------------------------------------------

insert into public.glossary_terms
  (project_id, term, language, definition, do_not_translate, conflict_note)
values
  ((select id from public.projects where slug = 'pro-finder-pilot'),
   'THITRONIK', 'de',
   'Herstellername (THITRONIK GmbH). Eigenname, wird in allen Sprachen unverändert und in dieser Schreibweise übernommen.',
   true, null),
  ((select id from public.projects where slug = 'pro-finder-pilot'),
   'Pro-finder', 'de',
   'Produktname des GPS-Ortungssystems. Eigenname, wird in allen Sprachen unverändert übernommen; Schreibweise „Pro-finder".',
   true, null),
  ((select id from public.projects where slug = 'pro-finder-pilot'),
   'safe.lock', 'de',
   'Produkt-/Funktionsname aus dem THITRONIK Produktumfeld. Eigenname, wird nicht übersetzt.',
   true, null),
  ((select id from public.projects where slug = 'pro-finder-pilot'),
   'Status-LED', 'de',
   'Leuchtdiode am Gerät, die den Betriebszustand signalisiert. Übersetzbar; der Bestandteil „LED" bleibt unverändert.',
   false, null),
  ((select id from public.projects where slug = 'pro-finder-pilot'),
   'Geofencing', 'de',
   'Virtuelle geografische Zone; das Verlassen oder Betreten löst eine Benachrichtigung aus. Etablierter Fachbegriff, je Zielsprache auf gebräuchliche Entsprechung prüfen.',
   false, null);

-- ----------------------------------------------------------------------------
-- 5. Diskrepanzen (nur inhaltlich aus den vorliegenden Metadaten begründete
--    Platzhalter; Klärung im Piloten)
-- ----------------------------------------------------------------------------

insert into public.discrepancies
  (project_id, document_id, title, description, severity, status, evidence)
values
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    (select id from public.source_documents where doc_key = 'DOC-IBA-SN045'),
    'Ablagepfad der Anleitung ab SN-045 unter „gaswarner"',
    'Die zehnsprachige Bedienungs- und Installationsanleitung für den Pro-finder (Fahrzeugortung) liegt auf thitronik.de im Download-Pfad „downloads/gaswarner/anleitungen/". Zu klären, ob es sich um einen Ablagefehler handelt und ob eine kanonische URL unter „fahrzeugortung" existiert.',
    'niedrig',
    'offen',
    'original_url: https://www.thitronik.de/fileadmin/user_upload/downloads/gaswarner/anleitungen/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf'
  ),
  (
    (select id from public.projects where slug = 'pro-finder-pilot'),
    (select id from public.source_documents where doc_key = 'DOC-KA-SN044'),
    'Revisionsstand der Kurzanleitung bis SN-044 nicht ermittelbar',
    'Für DOC-KA-SN044 ist aus den Datei-Metadaten kein Revisionsstand ableitbar (im Gegensatz zu DOC-BMA-SN044 mit Revision 2.6 und DOC-KA-SN045 mit Revision 1.3.2). Der Revisionsstand muss bei der Seiteninspektion aus dem Dokumentinhalt erhoben oder beim Hersteller erfragt werden.',
    'niedrig',
    'offen',
    'Metadatenabgleich vom 2026-08-06: revision = null für DOC-KA-SN044.'
  );
