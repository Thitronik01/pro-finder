# Projektstatus

Stand: 2026-08-07. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 18.2 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 85 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 6.2 %       |
| Content-Modell und deutscher Master      | 20 %    | 10 %        |
| Setup-Karte                              | 10 %    | 30 %        |
| Webanleitung und Review-UI               | 20 %    | 25 %        |
| Übersetzungspilot                        | 10 %    | 5 %         |
| Accessibility-, Security- und Content-QA | 10 %    | 12 %        |
| Staging und Übergabe                     | 5 %     | 20 %        |

**PDF-Seitenprüfung** (Summe der Seitenstatuswerte / Anzahl aller Seiten):

| Dokument      | Seiten | Fortschritt |
| ------------- | ------ | ----------- |
| DOC-BMA-SN044 | 72     | 0 %         |
| DOC-IBA-SN045 | 247    | 7.7 %       |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 5 · Nächste Aktion: PDF-Batch 7: DOC-IBA-SN045 Seiten 77–86 seitenweise prüfen (Beginn des tschechischen Sprachteils; der französische Teil ist mit Seite 76 abgeschlossen).

<!-- PROGRESS:END -->

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt; davon 80 visuell geprüft (`inspected`): DOC-IBA-SN045
  Seiten 1–76 sowie beide Kurzanleitungen. Der deutsche, der englische und der
  französische Sprachteil sind damit vollständig geprüft;
- Textebene von DOC-IBA-SN045 vollständig ausgewertet: nur 1 von 247 Seiten enthält
  lesbaren Text, 34 Seiten liefern ausschließlich Steuerzeichen (Details in
  `IST_AUDIT.md`);
- `npm run check` läuft erstmals vollständig grün; dabei zwei stille Fehler behoben:
  der Secret-Scanner schlug wegen eines zeilenübergreifenden Musters auf der korrekten,
  leeren `.env.example` an, und der Fortschrittsblock in diesem Dokument wurde wegen
  unmaskierter Klammern im Marker-Regex nie ersetzt (beides ohne Fehlermeldung);
- Versionsrouten, bestätigter Wechsel, korrekte serverseitige Seitensprache, Skip-Link,
  sichtbarer Fokus und semantische Status-LED-Tabelle implementiert;
- Content-Schema, Unit-Tests, Terminologie-, Token-, Secret- und Referenzchecks vorhanden;
- Produktions-Build lokal erfolgreich;
- Referenzklon sauber und Push-URL `DISABLED`;
- Setup-Karten-Lieferdateien als klar markierte Entwürfe vorhanden;
- Supabase CLI und Client-Bibliotheken exakt gepinnt;
- **Supabase-Härtung in CI gegen eine echte Datenbank bewiesen.** Der Job
  `Supabase reset and RLS tests` ist grün: `supabase start`, `db reset` (Schema, Migrationen
  und Fixtures), `db lint --fail-on error` und der pgTAP-Lauf mit den Negativtests aus
  `security_behavior_test.sql`. Damit sind die beiden früher ausnutzbaren Umgehungen des
  Vier-Augen-Prinzips nicht mehr nur konstruktiv adressiert, sondern im Verhalten geprüft;
- CI-Jobs `Code, content, security and build` (Prüfkette und Produktions-Build) grün;
- **Playwright und axe laufen: 32 von 32 Tests bestanden**, davon axe-Prüfungen auf
  WCAG-A/AA-Regeln über Chromium und ein 375-px-Mobilprofil. Der erste echte Browserlauf
  hat drei reale Mängel aufgedeckt und behoben (siehe unten).

## Nicht als bestanden behaupten

- automatische Tests ersetzen keine Konformitätsaussage: axe deckt erfahrungsgemäß nur
  einen Teil der WCAG-Kriterien maschinell ab. Ein grüner Lauf heißt „keine der geprüften
  Regeln verletzt", nicht „WCAG 2.2 AA erfüllt";
- manuelle AT-, Zoom-, Reflow-, Forced-Colors- und Reduced-Motion-Matrix: offen;
- Netlify Preview, Zugriffsschutz und internes Staging: nicht verbunden/nicht abgenommen;
- Karten-Andruck, QR, NFC, Braille, Reflexion und Tests mit betroffenen Personen: offen;
- englischer Pilot: nur Struktur/Platzhalter, kein unabhängiger Sprachreview;
- technische und sicherheitskritische Inhalte: nicht fachlich freigegeben.

## Release-Blocker

1. Die Befehlssprache der SMS-Kommandos ist widersprüchlich dokumentiert (DSC-013,
   DSC-014, DSC-026, DSC-033). Drei Sprachfassungen dokumentieren **drei vollständig
   eigene Befehlssätze** — die Vergleichstabelle steht in DSC-033. Innerhalb einer Fassung
   stehen zudem `POS` und `position` nebeneinander, und im Französischen sind drei von vier
   Ausgangsbefehlen lokalisiert, der vierte nicht. Kein Befehl darf ohne technische Klärung
   veröffentlicht werden.
2. Die Sprachfassungen sind inhaltlich nicht gleichwertig: die SIM-Anbieterempfehlung
   lautet deutsch t-mobile/Vodafone, englisch nur allgemein „M2M-Karte" und französisch
   namentlich DOMOTEC (DSC-027). Zusätzlich weicht ein technischer Wert ab (DSC-020).
   Solange unklar ist, welche Fassung gilt, kann kein sprachübergreifender Master
   entstehen.
3. Der genaue Fundort und die Leseregel der Seriennummer am Gerät sind nicht technisch
   bestätigt; die Startseite darf deshalb keine Ziffernregel behaupten (DSC-023).
4. Karte: finale URL, Supportdaten, Mindestschrift, Braille-Dienstleister und physische
   Tests fehlen. Die Supportnummer ist zusätzlich unklar: die französische Fassung nennt
   eine offensichtlich beschädigte Rufnummer (DSC-032).
5. Kein geschützter Netlify-Deploy und keine menschliche Preview-Abnahme.

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. Es ist weder extrahiert noch
fachlich validiert. `entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf
ist keine WCAG-Konformitätserklärung.
