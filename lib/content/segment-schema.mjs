import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

export const SEGMENT_SCHEMA_VERSION = 1;

export const SEGMENT_TYPES = [
  'instruction',
  'warning',
  'technical_data',
  'table',
  'figure_description',
  'omission_note',
];

const SERIAL_RANGES = ['sn-001-044', 'sn-045-plus', 'beide'];
const SAFETY_CLASSES = ['normal', 'sicherheitsrelevant', 'sicherheitskritisch'];
const REVIEW_STATUSES = ['entwurf', 'in_review', 'freigegeben', 'abgelehnt'];

export const ContentSegmentSchema = z
  .object({
    schema_version: z.literal(SEGMENT_SCHEMA_VERSION),
    segment_key: z.string().regex(/^[A-Z0-9]+(?:-[A-Z0-9]+)*$/),
    serial_range: z.enum(SERIAL_RANGES),
    language: z.string().regex(/^[a-z]{2}$/),
    segment_type: z.enum(SEGMENT_TYPES),
    task_slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().trim().min(1),
    body_md: z.string().trim().min(1),
    safety_class: z.enum(SAFETY_CLASSES),
    review_status: z.enum(REVIEW_STATUSES),
    source_doc_key: z.string().regex(/^DOC-[A-Z0-9]+(?:-[A-Z0-9]+)*$/),
    source_page_start: z.number().int().positive(),
    source_page_end: z.number().int().positive(),
    source_region: z.string().trim().min(1),
    prev_context: z.string().trim().min(1).nullable(),
    next_context: z.string().trim().min(1).nullable(),
    glossary_version: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    checksum: z.string().regex(/^sha256:[a-f0-9]{64}$/),
    change_reason: z.string().trim().min(1),
    discrepancy_refs: z.array(z.string().regex(/^DSC-\d{3}$/)),
  })
  .strict()
  .superRefine((segment, ctx) => {
    if (segment.source_page_end < segment.source_page_start) {
      ctx.addIssue({
        code: 'custom',
        path: ['source_page_end'],
        message: 'source_page_end darf nicht vor source_page_start liegen.',
      });
    }
    if (segment.safety_class !== 'normal' && segment.review_status === 'freigegeben') {
      ctx.addIssue({
        code: 'custom',
        path: ['review_status'],
        message:
          'Sicherheitsrelevante Segmente dürfen ohne technischen Review nicht freigegeben sein.',
      });
    }
  });

export function segmentChecksum(bodyMd) {
  const normalized = bodyMd.replace(/\r\n/g, '\n').trim();
  return `sha256:${crypto.createHash('sha256').update(normalized, 'utf8').digest('hex')}`;
}

function* walkJson(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkJson(full);
    else if (entry.isFile() && entry.name.endsWith('.json')) yield full;
  }
}

export function loadAllContentSegments(root = process.cwd()) {
  const segmentsRoot = path.join(root, 'content', 'segments', `v${SEGMENT_SCHEMA_VERSION}`);
  if (!fs.existsSync(segmentsRoot)) return [];

  return [...walkJson(segmentsRoot)].sort().map((file) => {
    const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
    return {
      file: path.relative(root, file),
      segment: ContentSegmentSchema.parse(raw),
    };
  });
}
