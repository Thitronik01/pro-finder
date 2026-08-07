# Netlify-Preview und internes Staging

Stand: 2026-08-06. Die Site ist noch nicht mit einem Netlify-Konto verbunden; dieser
Leitfaden dokumentiert deshalb Konfiguration und offene menschliche Schritte, keine
erfundene Deployment-Abnahme.

## Kontexte

| Netlify-Kontext    | `APP_ENV` | `DATA_MODE` | Datenzugriff                     |
| ------------------ | --------- | ----------- | -------------------------------- |
| Deploy Preview     | `preview` | `fixtures`  | keine gemeinsamen Staging-Daten  |
| Branch Deploy      | `preview` | `fixtures`  | keine gemeinsamen Staging-Daten  |
| Hauptbranch-Deploy | `staging` | `supabase`  | internes Staging, nie Produktion |
| Branch `staging`   | `staging` | `supabase`  | internes Staging                 |

Die nicht geheimen Moduswerte stehen in `netlify.toml`. Supabase-URL und Publishable
Key werden je Kontext in Netlify gesetzt. Der aktuelle Anwendungscode verwendet keinen
`SUPABASE_SECRET_KEY`; er darf nicht vorsorglich in den Deploy aufgenommen werden.

## Zwei Zugangsebenen

Das interne Staging braucht bewusst zwei getrennte Ebenen:

1. **Netlify-Projekt-/Site-Schutz** verhindert, dass der noch ungeprüfte Pilot überhaupt
   frei geladen wird.
2. **Supabase Auth + RLS** identifiziert Reviewer innerhalb von `/review` und begrenzt
   ihre Projektdaten und Rollen.

Wer die Reviewoberfläche nutzt, meldet sich dadurch im internen Staging zweimal an.
Netlify gibt seine Perimeter-Session nicht an Supabase weiter. Dieser Nachteil ist für
den Pilotstand akzeptiert; die HTML-Anleitung selbst verlangt weiterhin keinen
Supabase-Login.

## Vor dem ersten Deploy zwingend

1. Repository als neue Netlify-Site verbinden; automatische Next.js-/OpenNext-Erkennung
   beibehalten (`npm run build`, Publish-Verzeichnis `.next`).
2. In **Project configuration → General → Visitor access → Project visibility** die
   Site, wenn der Netlify-Tarif es zulässt, auf `Private` stellen und nur benötigte
   Reviewer einladen. Alternativ unter **Project configuration → Access & security →
   Visitor access → Password Protection** `All deploys` schützen. Ein gemeinsames
   Passwort ist schwächer; Team-Login setzt Netlify-Teamzugänge voraus. Diese Einstellungen
   sind nur im Dashboard sichtbar und können nicht aus dem Repository verifiziert werden.
3. Kontextbezogene Umgebungsvariablen in Netlify anlegen. Die Variablen aus
   `netlify.toml` sind Build-Konfiguration; URL und Publishable Key für die serverseitige
   Reviewroute müssen über Netlify UI oder CLI auch der Laufzeit zur Verfügung stehen.
4. Im Supabase-Dashboard Self-Signup und anonyme Anmeldung deaktivieren, Reviewer nur
   einladen und danach ihre `project_memberships`-Rolle setzen.
5. Hauptbranch-Deploy in Name, Banner und Freigabeprotokoll ausdrücklich als
   **internes Staging** führen.
6. Nach dem Deploy `/pro-finder/start`, beide Generationen, die englische Route,
   `/review` und `/dashboard` prüfen. Headerkontrolle: CSP, `noindex`, `nosniff`,
   `DENY`, Referrer- und Permissions-Policy.
7. Zugriff ohne Netlify-Anmeldung in einem privaten Browserfenster muss scheitern. Nach
   dem Perimeter-Login muss `/review` zusätzlich auf `/review/login` umleiten. Erst dann
   darf der Link intern geteilt werden.

Beispiel für kontextbezogene, nicht geheime Laufzeitwerte nach dem Verknüpfen der Site:

```powershell
netlify env:set NEXT_PUBLIC_SUPABASE_URL "https://PROJECT.supabase.co" --context production
netlify env:set NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY "sb_publishable_..." --context production
```

Keine echten Werte in Shell-History, Screenshots oder Git übernehmen. Deploy Previews
bleiben `DATA_MODE=fixtures` und erhalten diese Staging-Werte nicht.

Die nonce-basierte Content Security Policy wird für SSR-Antworten in `proxy.ts`
erzeugt. Die statischen Netlify-Header ergänzen sie; sie ersetzen die Laufzeit-CSP nicht.
