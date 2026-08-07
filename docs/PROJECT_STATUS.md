# Projektstatus

Stand: 2026-08-07. Das Dashboard unter `/dashboard` liest dieselben generierten Daten aus
`docs/progress.json`. Manuelle Prozentwerte müssen in `progress-input.json` begründet werden.

<!-- PROGRESS:START (generiert durch scripts/progress.mjs – nicht von Hand editieren) -->

**Gesamtfortschritt: 18 %**

| Workstream                               | Gewicht | Fortschritt |
| ---------------------------------------- | ------- | ----------- |
| Bootstrap                                | 5 %     | 85 %        |
| Quelleninventar und PDF-Prüfung          | 20 %    | 5.4 %       |
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
| DOC-IBA-SN045 | 247    | 6.7 %       |
| DOC-KA-SN044  | 2      | 25 %        |
| DOC-KA-SN045  | 2      | 25 %        |

Offene Blocker: 5 · Nächste Aktion: PDF-Batch 6: DOC-IBA-SN045 Seiten 67–76 seitenweise prüfen (Rest des französischen Teils ab interner Page 17 de 25, danach Beginn des tschechischen Sprachteils).

<!-- PROGRESS:END -->

## Belastbar verifiziert

- vier Original-PDFs mit Dateigröße, SHA-256, Seitenzahl und PDF-Metadaten inventarisiert;
- 323 Seitenrecords angelegt; davon 70 visuell geprüft (`inspected`): DOC-IBA-SN045
  Seiten 1–66 sowie beide Kurzanleitungen;
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
- Supabase CLI und Client-Bibliotheken exakt gepinnt; CI-Reset und pgTAP konfiguriert.

## Nicht als bestanden behaupten

- lokaler Supabase-Reset und pgTAP: Docker-Daemon läuft nicht. Docker Desktop ist
  installiert, startet in dieser Umgebung aber keinen Daemon. Die Härtungsmigration
  `20260806204417_security_hardening.sql` und die Negativtests in
  `supabase/tests/security_behavior_test.sql` sind damit **ausschließlich statisch
  geprüft**. Erst ein grüner CI-Job `Supabase reset and RLS tests` zählt als Nachweis;
- Supabase-Security: die Härtung adressiert die beiden Umgehungen (schmale
  `private.transition_*`-Funktionen, entzogene Direktrechte, spaltenweise Grants,
  projektgebundene Mitgliedschaften, Prüfsummen-Trigger und `CHECK`-Constraints für das
  Vier-Augen-Prinzip). Ohne ausgeführten pgTAP-Lauf ist das eine Konstruktionsaussage,
  keine Verhaltensaussage;
- Playwright/axe: Browserlauf wird erst nach Installation des Chromium-Binaries gewertet;
- manuelle AT-, Zoom-, Reflow-, Forced-Colors- und Reduced-Motion-Matrix: offen;
- Netlify Preview, Zugriffsschutz und internes Staging: nicht verbunden/nicht abgenommen;
- Karten-Andruck, QR, NFC, Braille, Reflexion und Tests mit betroffenen Personen: offen;
- englischer Pilot: nur Struktur/Platzhalter, kein unabhängiger Sprachreview;
- technische und sicherheitskritische Inhalte: nicht fachlich freigegeben.

## Release-Blocker

1. Die Härtung der `translations`- und `content_segments`-Freigaben ist geschrieben, aber
   nie gegen eine laufende Datenbank ausgeführt. Bis CI `supabase db reset` und
   `supabase test db` grün meldet, bleibt Staging gesperrt.
2. Die Befehlssprache der SMS-Kommandos ist widersprüchlich dokumentiert (DSC-013,
   DSC-014, DSC-026). Dieselbe Funktion heißt je Sprachfassung anders; innerhalb einer
   Fassung stehen `POS` und `position` nebeneinander; und die französische Fassung nennt
   statt eines Befehls die Wortgruppe « desactiver le gardiennage ». Kein Befehl darf ohne
   technische Klärung veröffentlicht werden.
3. Die Sprachfassungen sind inhaltlich nicht gleichwertig: die SIM-Anbieterempfehlung
   lautet deutsch t-mobile/Vodafone, englisch nur allgemein „M2M-Karte" und französisch
   namentlich DOMOTEC (DSC-027). Zusätzlich weicht ein technischer Wert ab (DSC-020).
   Solange unklar ist, welche Fassung gilt, kann kein sprachübergreifender Master
   entstehen.
4. Der genaue Fundort und die Leseregel der Seriennummer am Gerät sind nicht technisch
   bestätigt; die Startseite darf deshalb keine Ziffernregel behaupten (DSC-023).
5. Karte: finale URL, Supportdaten, Mindestschrift, Braille-Dienstleister und physische
   Tests fehlen.
6. Kein geschützter Netlify-Deploy und keine menschliche Preview-Abnahme.

## Statusdisziplin

`inspected` bedeutet nur visuell/strukturell angesehen. Es ist weder extrahiert noch
fachlich validiert. `entwurf` bedeutet nie freigegeben. Ein grüner Build oder axe-Lauf
ist keine WCAG-Konformitätserklärung.
