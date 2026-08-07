import { describe, expect, it } from 'vitest';
import { loadAllTasks, loadTasks } from '@/lib/content/content';

describe('Content-Layer', () => {
  it('alle Aufgaben-Dateien validieren gegen das Schema', () => {
    const all = loadAllTasks();
    expect(all.length).toBeGreaterThan(0);
  });

  it('Gerätegenerationen sind strikt getrennt (Pfad = Deklaration)', () => {
    for (const { file, task } of loadAllTasks()) {
      const [generation, language] = file.split(/[\\/]/);
      expect(task.generation, file).toBe(generation);
      expect(task.language, file).toBe(language);
    }
  });

  it('der SN-045-Slice enthält die Pflichtaufgaben', () => {
    const slugs = loadTasks('sn-045-plus', 'de').map((t) => t.slug);
    for (const required of [
      'geraetegeneration-bestimmen',
      'montageort',
      'anschluesse',
      'sim-karte',
      'app-und-aktivierung',
      'zielrufnummern',
      'status-led',
      'meldungen',
      'geofencing',
      'statusbericht',
      'ausgaenge',
      'fehlerbehebung',
      'technische-daten',
      'support',
    ]) {
      expect(slugs, `Aufgabe ${required} fehlt`).toContain(required);
    }
  });

  it('SN-044 hat eine repräsentative Aufgabe (Versionstest)', () => {
    const tasks = loadTasks('sn-001-044', 'de');
    expect(tasks.length).toBeGreaterThanOrEqual(1);
    for (const t of tasks) {
      expect(t.generation).toBe('sn-001-044');
    }
  });

  it('sicherheitskritische Aufgaben sind niemals ohne Review freigegeben', () => {
    for (const { file, task } of loadAllTasks()) {
      if (task.safety_class !== 'normal') {
        expect(task.review_status, file).not.toBe('freigegeben');
      }
    }
  });
});
