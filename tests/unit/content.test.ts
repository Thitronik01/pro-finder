import { describe, expect, it } from 'vitest';
import { loadAllTasks, loadTasks } from '@/lib/content/content';
import { describeTableProblem } from '@/lib/content/markdown-table';

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

  it('der englische Pilot enthält die Aufgaben 01 bis 05 als ungeprüfte Entwürfe', () => {
    const tasks = loadTasks('sn-045-plus', 'en');
    expect(tasks.map((task) => task.slug)).toEqual([
      'determine-device-generation',
      'choose-installation-location',
      'wire-connections',
      'prepare-and-insert-sim-card',
      'install-app-and-activate',
    ]);
    for (const task of tasks) {
      expect(task.placeholder, task.slug).toBe(false);
      expect(task.review_status, task.slug).toBe('entwurf');
      expect(
        task.sources.some((source) => source.pages !== null),
        task.slug,
      ).toBe(true);
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

  it('Pin 1 wird im SN-045-Master nie als Plus-Leitung bezeichnet', () => {
    const task = loadTasks('sn-045-plus', 'de').find((entry) => entry.slug === 'anschluesse');
    expect(task).toBeDefined();
    expect(JSON.stringify(task)).not.toContain('Plus-Leitung an Pin 1');
    expect(task?.tables_md.join('\n')).toContain('| 1 | Masse (GND) |');
    expect(task?.tables_md.join('\n')).toContain('| 8 | Dauerplus 12 V |');
  });

  // Eine unparsbare Tabelle rendert `TaskView` als nichts: kein Fehler, keine Lücke,
  // der Inhalt ist einfach weg. Tabellen tragen hier aber gerade die Information, die
  // in der Quelle nur als Bild vorliegt (Pinbelegung, Betriebsarten, LED-Zustände) –
  // ihr stiller Verlust wäre der teuerste Fehler dieses Content-Layers.
  it('jede Tabelle im Content-Layer ist darstellbar', () => {
    for (const { file, task } of loadAllTasks()) {
      task.tables_md.forEach((markdown, index) => {
        const problem = describeTableProblem(markdown);
        expect(problem, `${file} tables_md[${index}] ${problem}`).toBeNull();
      });
      task.figures.forEach((figure, index) => {
        if (!figure.data_table_md) return;
        const problem = describeTableProblem(figure.data_table_md);
        expect(problem, `${file} figures[${index}].data_table_md ${problem}`).toBeNull();
      });
    }
  });

  // Der Projektauftrag verlangt eine Quelle bis auf Dokument- und Seitenebene. Das
  // Schema erzwingt nur, dass die Aufgabe insgesamt eine Quelle hat – ein einzelner
  // Schritt oder Warnhinweis könnte trotzdem unbelegt sein. Genau dort entstehen
  // technische Aussagen ohne Deckung.
  it('Schritte, Warnungen und Fehlerfälle nicht-platzhaltender Aufgaben sind belegt', () => {
    for (const { file, task } of loadAllTasks()) {
      if (task.placeholder) continue;
      task.warnings.forEach((w, i) => {
        expect(w.sources.length, `${file} warnings[${i}] ohne Quelle: „${w.text}"`).toBeGreaterThan(
          0,
        );
      });
      task.steps.forEach((s, i) => {
        expect(
          s.sources?.length ?? 0,
          `${file} steps[${i}] ohne Quelle: „${s.text}"`,
        ).toBeGreaterThan(0);
      });
      task.error_cases.forEach((e, i) => {
        expect(
          e.sources?.length ?? 0,
          `${file} error_cases[${i}] ohne Quelle: „${e.problem}"`,
        ).toBeGreaterThan(0);
      });
    }
  });
});
