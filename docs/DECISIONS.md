# Architektur- und Projektentscheidungen

## ADR-001 – HTML-first, PDF als Quelle

Semantisches HTML ist der Primärzugang. Original-PDFs bleiben unveränderte Quellen und
Sekundärdownloads. Begründung: Reflow, Sprachwechsel, Tastaturzugang, Quellenanzeige und
Textalternativen sind im bestehenden Falt-/Mehrsprachen-PDF nicht robust erreichbar.

## ADR-002 – Strikte Generationstrennung in URL und Contentpfad

`sn-001-044` und `sn-045-plus` sind getrennte Verzeichnisse und Routen. Wechsel erfordern
Bestätigung. Es gibt keinen automatischen Redirect aufgrund einer ungeprüften
Seriennummern-Heuristik.

## ADR-003 – Serverkomponenten und minimales Client-JavaScript

Content wird serverseitig aus validierten JSON-Dateien geladen. Auswahl, Navigation und
Wechsel funktionieren als Links ohne Client-State. Das reduziert Fehlerfläche und
unterstützt progressive Zugänglichkeit.

## ADR-004 – Korrektes `<html lang>` und nonce-basierte CSP

Next.js Proxy übergibt Seitensprache und einen frischen CSP-Nonce an das Root-Layout.
Damit stimmt die Seitensprache bereits im serverseitigen HTML; gleichzeitig kann die
Produktions-CSP Inline-Skripte ohne pauschales `unsafe-inline` zulassen. Der Preis ist
dynamisches Rendering, das für diesen internen Pilot akzeptiert wird.

## ADR-005 – Aktuelle, kompatible Toolchain

Next.js 16.3.0, React 19.2.8 und Supabase-Pakete entsprechen am 2026-08-06 den stabilen
npm-Versionen. TypeScript bleibt auf 6.0.x statt des 7.0-Tags, bis Next.js/ESLint-
Kompatibilität nachgewiesen ist. Lockfile und Supabase-Versionen sind exakt gepinnt.

## ADR-006 – Fixtures für Preview, Supabase nur für geschütztes Staging

Deploy Previews nutzen `DATA_MODE=fixtures` und schreiben nicht in gemeinsame Daten.
`DATA_MODE=supabase` ist nur für geschütztes internes Staging vorgesehen. Fehlende
Umgebungsvariablen dürfen den Fixture-Build nicht brechen.

## ADR-007 – Kein erfundener Produktions-QR/Brailletext

Die Karten-SVGs enthalten Platzhalter, bis URL, Supportkontakt, Dienstleister und Tests
bestätigt sind. Ein scanbarer Fake-QR oder vorgetäuschte Braillegeometrie wären riskanter
als ein klar markierter Entwurf.

## ADR-008 – Review-Freigaben nicht allein durch permissive RLS

RLS ist notwendig, aber kein vollständiger Workflowautomat. Kritische Statusübergänge
werden als schmale, atomare Datenbankoperationen mit unveränderlichen Akteuren,
Prüfsummen und append-only Events modelliert. Die initiale Migration erfüllt dies noch
nicht und bleibt blockiert, bis Migration und behavioral Tests nachgezogen sind.

## ADR-009 – Reviewoberfläche zunächst read-only

Die Route `/review` bündelt Content-Warteschlange, PDF-Seitenstatus und Widersprüche,
führt aber noch keine Statuswechsel aus. Im Fixture-Modus liest sie ausschließlich
versionierte Arbeitsdaten. Im Supabase-Modus verlangt sie eine serverseitig validierte
Session und liest mit dem Publishable Key durch RLS. Schreibende UI-Aktionen werden erst
ergänzt, wenn die Transition-Funktionen nach einem echten `db reset` und behavioral
pgTAP-Lauf nachweislich nicht umgehbar sind.

## ADR-010 – Getrennter Netlify-Perimeter und Supabase-Login

Das gesamte interne Staging wird nach dem Verbinden der Site auf Netlify geschützt;
innerhalb des Stagings identifiziert Supabase Auth die Personen und Rollen unter
`/review`. Beide Sessions werden nicht miteinander geteilt. Reviewer melden sich daher
zweimal an. Diese Reibung wird im Pilot akzeptiert, weil die spätere öffentliche
HTML-Anleitung keinen App-Login verlangen darf und Reviewdaten dennoch projektgebunden
bleiben müssen.
