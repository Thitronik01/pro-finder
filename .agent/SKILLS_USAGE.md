# Skill-Nutzung

Stand: 2026-08-06

Diese Datei dokumentiert die tatsächliche Anwendung in der laufenden Projektsitzung.
Eine bloße Installation oder Sichtung gilt nicht als Nutzung. Die zugehörigen,
unveränderlichen Quellenstände stehen in [`SKILLS_LOCK.json`](SKILLS_LOCK.json).

## Tatsächlich verwendet

| Quelle | Skill oder Methode | Anwendung im Projekt |
| --- | --- | --- |
| `anthropic-skills` | PDF | PDF-Seiten visuell geprüft sowie Text und Metadaten für die quellengenaue Inhaltsinventur ausgewertet. Die Ergebnisse bleiben Entwürfe bis zum fachlichen Review. |
| `supabase-agent-skills` | Supabase | Schema, Migrationen, Row Level Security (RLS), Storage-Policies und Datenzugriffsgrenzen auf Sicherheits- und Rollenrisiken geprüft. |
| `supabase-agent-skills` | Postgres Best Practices | Rollen-, Rechte-, Foreign-Key- und RLS-Regeln für die Sicherheitsprüfung der Datenbank angewendet. |
| `vercel-agent-skills` | Next.js | Next.js-16-Konventionen für asynchrone Request-APIs, `proxy.ts` und Content Security Policy (CSP) bei den App-Änderungen berücksichtigt. |
| `vercel-agent-skills` | React Best Practices | Server-/Client-Grenzen, semantisches Markup und Komponentenstruktur der geänderten React-Oberfläche geprüft. |
| `vercel-agent-skills` | Verification | Build-, Typ-, Inhalts-, Referenz- und Browserprüfungen zu einem nachvollziehbaren Verifikationsablauf gebündelt. |
| `ui-ux-pro-max-skill` | UI-UX Pro Max | Das bestehende Designsystem gezielt recherchiert und die Oberfläche auf Barrierefreiheit, Kontrast, Typografie und Interaktionszustände geprüft. |
| `taste-skill` | Redesign | Einen zielgerichteten Bestandsumbau auf Basis der vorhandenen Informationsarchitektur und visuellen Sprache durchgeführt; kein vollständiges Neudesign. |
| `netlify-context-and-tools` | Netlify Config | Build-Konfiguration, Umgebungsvariablen, Header und Preview-/Staging-Verhalten für Netlify geprüft und dokumentiert. |
| `netlify-context-and-tools` | Netlify Access Control | Zugriffsschutz und Nicht-Indexierung für interne Preview- und Staging-Deployments bewertet. |

## Nur konzeptionell verwendet

`karpathy-llm-wiki` wurde ausschließlich als konzeptionelle Orientierung für die
Trennung von Quellen, redaktionellen Inhalten und Schema verwendet. Es wurde kein Code
und kein Text daraus in das Produkt übernommen.

## Herkunfts- und Lizenzgrenzen

- Alle externen Vendor-Repositories bleiben gitignored und sind nicht Bestandteil des
  auslieferbaren Projekts.
- Es wurden keine proprietären Skill-Inhalte in Produktcode oder Projektdokumentation
  kopiert.
- Hinweise wurden auf den konkreten Projektkontext übertragen und unabhängig anhand
  des lokalen Codes, der Quelldokumente und der Projekttests geprüft.
