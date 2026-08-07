import fs from 'node:fs';
import path from 'node:path';
import { TaskSchema, type Task, GENERATIONS } from './schema';

export type Generation = (typeof GENERATIONS)[number];

function taskDir(generation: Generation, language: string): string {
  return path.join(process.cwd(), 'content', 'tasks', generation, language);
}

export function loadTasks(generation: Generation, language: 'de' | 'en'): Task[] {
  const dir = taskDir(generation, language);
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort();
  return files.map((file) => {
    const raw = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    const task = TaskSchema.parse(raw);
    if (task.generation !== generation || task.language !== language) {
      throw new Error(
        `Content-Fehler: ${file} liegt unter ${generation}/${language}, deklariert aber ${task.generation}/${task.language}. Gerätegenerationen dürfen nie vermischt werden.`,
      );
    }
    return task;
  });
}

export function loadTask(generation: Generation, language: 'de' | 'en', slug: string): Task | null {
  return loadTasks(generation, language).find((t) => t.slug === slug) ?? null;
}

/** Alle Content-Dateien projektweit laden (für Checks und Tests). */
export function loadAllTasks(): { file: string; task: Task }[] {
  const result: { file: string; task: Task }[] = [];
  for (const generation of GENERATIONS) {
    for (const language of ['de', 'en'] as const) {
      const dir = taskDir(generation, language);
      if (!fs.existsSync(dir)) continue;
      for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
        const raw = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
        result.push({ file: `${generation}/${language}/${file}`, task: TaskSchema.parse(raw) });
      }
    }
  }
  return result;
}
