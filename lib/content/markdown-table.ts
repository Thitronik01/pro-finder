/**
 * Parser für die Markdown-Tabellen des Content-Layers (`tables_md`).
 *
 * Bewusst eine einzige Implementierung für Renderer und Prüfung: `TaskView` rendert
 * `null` einfach nicht, eine unparsbare Tabelle verschwände also spurlos aus der Seite –
 * ohne Fehlermeldung und ohne Lücke im Layout. Läge die Prüfung in einer zweiten Kopie
 * des Parsers, könnten beide auseinanderlaufen und genau diesen stillen Verlust wieder
 * durchlassen. Der Unit-Test in tests/unit/content.test.ts prüft jede vorhandene Tabelle
 * gegen diese Funktion.
 */
export type MarkdownTable = {
  headers: string[];
  rows: string[][];
};

function cells(line: string): string[] {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

export function parseMarkdownTable(markdown: string): MarkdownTable | null {
  const lines = markdown
    .trim()
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 3) return null;
  return { headers: cells(lines[0]), rows: lines.slice(2).map(cells) };
}

/**
 * Meldet, warum eine Tabelle nicht darstellbar ist – oder null, wenn alles stimmt.
 * Getrennt vom Parser, damit die Oberfläche tolerant bleiben kann und die Prüfkette
 * trotzdem hart abbricht.
 */
export function describeTableProblem(markdown: string): string | null {
  const table = parseMarkdownTable(markdown);
  if (!table) {
    return 'ergibt keine Tabelle (Kopfzeile, Trennzeile "| --- |" und mindestens eine Datenzeile nötig)';
  }
  if (table.headers.length < 2) {
    return `hat nur ${table.headers.length} Spalte(n); eine Tabelle braucht mindestens zwei`;
  }
  if (table.rows.length === 0) {
    return 'hat keine Datenzeile';
  }
  const schief = table.rows.findIndex((row) => row.length !== table.headers.length);
  if (schief !== -1) {
    return `Zeile ${schief + 1} hat ${table.rows[schief].length} Spalten, der Kopf hat ${table.headers.length}`;
  }
  return null;
}
