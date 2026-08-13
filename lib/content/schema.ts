import { z } from 'zod';

/**
 * Kanonischer Content-Layer des Piloten.
 *
 * Grundsätze:
 * - Jede technische Aussage braucht eine Quelle bis auf Dokument- und Seitenebene.
 * - OCR/Extraktion/KI-Umschreibung erzeugen nur Entwürfe (`review_status: "entwurf"`).
 * - Inhalte ohne abgeschlossene Seitenprüfung sind `placeholder: true` und werden in der
 *   Oberfläche eindeutig als „in Vorbereitung" gekennzeichnet – niemals als geprüft angezeigt.
 */

export const DOC_KEYS = [
  'DOC-KA-SN044',
  'DOC-BMA-SN044',
  'DOC-KA-SN045',
  'DOC-IBA-SN045',
  'PRODUKTSEITE',
  'PROJEKTAUFTRAG',
] as const;

export const GENERATIONS = ['sn-001-044', 'sn-045-plus'] as const;

export const SourceRefSchema = z.object({
  doc: z.enum(DOC_KEYS),
  /** Seitenangabe als String, z. B. "2" oder "14-16"; null solange die Seitenprüfung offen ist. */
  pages: z.string().nullable(),
  region: z.string().optional(),
  note: z.string().optional(),
});

export const FigureSchema = z.object({
  asset_key: z.string(),
  alt: z.string().min(1, 'Alternativtext ist Pflicht'),
  long_description: z.string().min(1, 'Sichtbare Langbeschreibung ist Pflicht'),
  steps_text: z.array(z.string()).optional(),
  data_table_md: z.string().optional(),
  asset_version: z.string(),
  generation: z.enum(GENERATIONS),
  source: SourceRefSchema,
});

export const WarningSchema = z.object({
  text: z.string(),
  safety_class: z.enum(['normal', 'sicherheitsrelevant', 'sicherheitskritisch']),
  sources: z.array(SourceRefSchema),
});

export const StepSchema = z.object({
  text: z.string(),
  expected: z.string().optional(),
  sources: z.array(SourceRefSchema).optional(),
});

export const ErrorCaseSchema = z.object({
  problem: z.string(),
  correction: z.string(),
  sources: z.array(SourceRefSchema).optional(),
});

export const TaskSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string(),
    generation: z.enum(GENERATIONS),
    language: z.enum(['de', 'en']),
    goal: z.string(),
    prerequisites: z.array(z.string()),
    warnings: z.array(WarningSchema),
    steps: z.array(StepSchema),
    expected_result: z.string().nullable(),
    error_cases: z.array(ErrorCaseSchema),
    figures: z.array(FigureSchema).default([]),
    tables_md: z.array(z.string()).default([]),
    sources: z.array(SourceRefSchema),
    safety_class: z.enum(['normal', 'sicherheitsrelevant', 'sicherheitskritisch']),
    review_status: z.enum(['entwurf', 'in_review', 'freigegeben']),
    /** true = Inhalt wartet auf die seitenweise PDF-Prüfung; Seite zeigt „in Vorbereitung". */
    placeholder: z.boolean(),
    change_reason: z.string().optional(),
  })
  .superRefine((task, ctx) => {
    // Nicht-Platzhalter benötigen mindestens eine Quelle mit konkreter Seitenangabe.
    if (!task.placeholder) {
      const withPages = task.sources.filter((s) => s.pages !== null);
      if (withPages.length === 0) {
        ctx.addIssue({
          code: 'custom',
          message: `Aufgabe "${task.slug}": Nicht-Platzhalter-Inhalte brauchen mindestens eine Quelle mit Seitenangabe.`,
        });
      }
    }
    // Sicherheitskritische Inhalte dürfen nie ohne Review-Prozess als freigegeben markiert sein,
    // solange der Pilot keinen dokumentierten technischen Review hat.
    if (task.safety_class !== 'normal' && task.review_status === 'freigegeben') {
      ctx.addIssue({
        code: 'custom',
        message: `Aufgabe "${task.slug}": Sicherheitsrelevante Inhalte können in diesem Pilotstand nicht "freigegeben" sein (technischer Review offen).`,
      });
    }
  });

export type Task = z.infer<typeof TaskSchema>;
export type SourceRef = z.infer<typeof SourceRefSchema>;

export const DOC_LABELS: Record<(typeof DOC_KEYS)[number], string> = {
  'DOC-KA-SN044': 'Kurzanleitung international (bis SN-044)',
  'DOC-BMA-SN044': 'Bedienungs- und Montageanleitung 2.6 (bis SN-044)',
  'DOC-KA-SN045': 'Kurzanleitung international (ab SN-045)',
  'DOC-IBA-SN045': 'Bedienungs- und Installationsanleitung, zehn Sprachen (ab SN-045)',
  PRODUKTSEITE: 'THITRONIK Produktseite Pro-finder',
  PROJEKTAUFTRAG: 'Projektauftrag Barrierefreiheits-Pilot',
};

export const GENERATION_LABELS: Record<(typeof GENERATIONS)[number], string> = {
  'sn-001-044': 'bis SN-044',
  'sn-045-plus': 'ab SN-045',
};
