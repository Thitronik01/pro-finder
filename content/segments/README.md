# Versionierte Content-Segmente

`content/segments/v1/` ist das kanonische, versionierte Repo-Format für die spätere Tabelle
`public.content_segments`. Eine JSON-Datei entspricht genau einer Datenbankzeile. Die
Dateien bleiben quellennahe deutsche Entwürfe; sie sind weder technische Freigaben noch
fertige Übersetzungen.

## Abbildung auf die Datenbank

Die JSON-Felder entsprechen den gleichnamigen Spalten der Tabelle. Drei Ausnahmen sind
bewusst:

- `schema_version` versioniert das Dateiformat und wird nicht importiert.
- `source_doc_key` wird beim Import über `source_documents.doc_key` in
  `source_document_id` aufgelöst.
- `discrepancy_refs` hält die Beweiskette zum Markdown-Register und wird vor einem Import
  als Prüfmetadatum ausgewertet.

`id`, `project_id`, `author_id`, `reviewer_id`, `reviewed_at`, `created_at` und `updated_at`
werden ausschließlich durch Datenbank und Review-Workflow gesetzt. `checksum` ist der
SHA-256-Wert des normalisierten, getrimmten `body_md` mit dem Präfix `sha256:`.

## Pfad und Schlüssel

Der Pfad lautet:

```text
content/segments/v1/<serial_range>/<language>/<segment_key-kleingeschrieben>.json
```

`segment_key` bleibt dauerhaft stabil und besteht aus Dokumentkürzel, Sprache, PDF-Seite,
laufender Nummer und kurzer Inhaltskennung. Änderungen am Text erzeugen eine neue
Prüfsumme, aber keinen neuen Schlüssel. `glossary_version: glossary-core-v1` bezeichnet
die im Supabase-Seed angelegte Kernterminologie.

## Prüfstatus

- `entwurf`: quellennahe Erstextraktion; noch nicht unabhängig geprüft.
- `in_review`: unabhängige Gegenprüfung läuft.
- `freigegeben`: erst nach dokumentierter technischer und redaktioneller Freigabe.
- `abgelehnt`: Segment darf nicht weiterverwendet werden.

Eine PDF-Seite darf erst auf `extracted` gesetzt werden, wenn alle für den Batch
vorgesehenen Segmente angelegt, visuell gegen die Seite geprüft und mit
`npm run segments:check` validiert wurden. `extracted` bedeutet ausdrücklich nicht
`validated`. Die Referenzprüfung erzwingt umgekehrt, dass jede Seite ab `extracted` durch
mindestens ein versioniertes Segment belegt ist.

SMS-Befehlszeichenfolgen bleiben wegen BLK-005 aus `title` und `body_md` ausgeschlossen.
Wenn ihre Auslassung für die Vollständigkeit der Extraktion wichtig ist, wird ein
`omission_note`-Segment ohne die Zeichenfolge selbst angelegt und mit dem einschlägigen
DSC-Eintrag verknüpft.
