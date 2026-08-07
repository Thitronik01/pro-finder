# Barrierefreiheits-Testplan: Setup-Karte „THITRONIK Pro-finder"

Status: **Entwurf (v0.2-draft)** · Stand: 2026-08-06

> **Alle Tests in diesem Plan sind offen. Es liegen keine Ergebnisse vor, und es
> werden hier keine Ergebnisse vorweggenommen oder erfunden.** Getestet wird an
> physischen Kartenmustern, nicht an Bildschirmentwürfen.

## 1. Testziele

1. Jeder der drei Zugangswege (QR, NFC, gedruckte Kurzadresse) führt zuverlässig
   und für alle Zielgruppen nutzbar zur Startseite `/pro-finder/start`.
2. Die Karte ist ohne Sehvermögen orientierbar (Kerbe, taktile Zonen, Braille).
3. Kontrast, Schriftgröße und Reflexionsverhalten genügen sehbehinderten Nutzern.
4. Die Karte enthält keine sicherheitsrelevanten oder personenbezogenen Daten
   (Sichtprüfung gegen `CARD_REQUIREMENTS.md`, Abschnitt 6).

## 2. Testteilnehmende

Tests mit betroffenen Personen sind Pflichtbestandteil, nicht optional:

- **Blinde Nutzer** (darunter zwingend Braille lesende Personen)
- **Sehbehinderte Nutzer** (verschiedene Ausprägungen, inkl. Kontrast- und Blendempfindlichkeit)
- **Motorisch eingeschränkte Nutzer** (Karte halten, Telefon ausrichten, Adresse eintippen)
- **Ältere Nutzer** (geringe Smartphone-Routine, Lesebrille, Tremor)

Rekrutierung, Anzahl und Aufwandsentschädigung: offen, mit THITRONIK zu planen.

## 3. Einzeltests

### Q1 – QR-Code: Geräte, Abstände, Licht — Status: offen

- **Methode:** Scan des gedruckten Musters mit mehreren iOS- und Android-Geräten
  (aktuelle und ältere Modelle, Standard-Kamera-App und gängige Scanner-Apps);
  Abstände ca. 5–40 cm; Lichtsituationen: Tageslicht, Innenraum, Dämmerung,
  direkte Lichtquelle (Reflexionswinkel), Fahrzeuginnenraum.
- **Erfolgskriterium:** Scan gelingt auf allen Testgeräten in allen definierten
  Situationen im ersten oder zweiten Versuch; Ziel-URL exakt `/pro-finder/start`.

### Q2 – QR-Code: Abnutzung — Status: offen

- **Methode:** Muster nach Kratz-/Abriebsimulation und mit Teilverschmutzung scannen
  (Fehlerkorrektur-Level H, siehe `card-print-spec.md`).
- **Erfolgskriterium:** Scan gelingt trotz definierter Teilbeschädigung.

### N1 – NFC: iOS und Android — Status: offen

- **Methode:** Karte an mehrere iOS- und Android-Geräte halten (verschiedene
  Modelle, verschiedene Antennenpositionen der Telefone); mit und ohne Hülle;
  Auffinden der NFC-Zone allein über die taktile Markierung.
- **Erfolgskriterium:** Tag wird zuverlässig gelesen, öffnet exakt die Ziel-URL;
  die taktile Markierung genügt, um die Zone ohne Sehen zu finden.

### N2 – NFC: Schreibschutz — Status: offen

- **Methode:** Nach Freigabe: Versuch, den Tag mit Standard-Tools zu überschreiben.
- **Erfolgskriterium:** Überschreiben nicht möglich (Lock aktiv), Lesen weiterhin möglich.

### U1 – Kurzadresse: Verständlichkeit und Eintippbarkeit — Status: offen

- **Methode:** Teilnehmende (insbesondere ältere und motorisch eingeschränkte
  Nutzer) tippen die gedruckte Adresse `thitronik.de/pro-finder/start` ohne Hilfe
  in ein Smartphone und einen PC-Browser ein; laut Vorlesen der Adresse durch
  Teilnehmende als Verständlichkeitsprobe; Fehlversuche protokollieren.
- **Erfolgskriterium:** Adresse wird ohne Hilfestellung korrekt eingegeben und
  führt zur Startseite; keine systematischen Tippfehler (sonst URL-Form überdenken).

### K1 – Kontrast (Messung) — Status: offen

- **Methode:** Messung am gedruckten Muster (Kontrastmessgerät bzw. kalibrierte
  Foto-Auswertung), Vorder- und Rückseite, mehrere Messpunkte.
- **Erfolgskriterium:** Kontrastverhältnis Text/Hintergrund mindestens 7:1.

### K2 – Reflexion — Status: offen

- **Methode:** Sichtprüfung des Musters unter direkter Beleuchtung in flachen
  Winkeln (Sonnenlicht, Innenraumleuchte, Fahrzeug); Bewertung durch sehbehinderte
  Teilnehmende; Vergleich matt vs. Referenz glänzend.
- **Erfolgskriterium:** Keine Blendung/Spiegelung, die Lesen oder QR-Scan verhindert.

### T1 – Taktile Orientierung: Kerbe — Status: offen

- **Methode:** Blinde und sehbehinderte Teilnehmende erhalten die Karte in
  zufälliger Ausrichtung und bestimmen allein durch Ertasten Ausrichtung sowie
  Vorder-/Rückseite.
- **Erfolgskriterium:** Ausrichtung wird von allen Teilnehmenden ohne Hilfe
  sicher und schnell bestimmt.

### T2 – Taktile Orientierung: QR-/NFC-Bereich ertasten — Status: offen

- **Methode:** Teilnehmende finden die geprägten Zonen ohne Sehen und benennen,
  ob es sich um die QR-Zone (vorn) oder die NFC-Zone (hinten) handelt.
- **Erfolgskriterium:** Beide Zonen werden gefunden und zuverlässig unterschieden.

### B1 – Braille (Pflicht, blockierend) — Status: offen

- **Methode:** Prüfung der vom qualifizierten Dienstleister ausgeführten
  Braille-Prägung ausschließlich durch **Braille lesende Testpersonen**:
  Lesbarkeit, Punktqualität, Inhalt, Position, Verwechslungsfreiheit.
- **Erfolgskriterium:** Brailletext wird von allen Braille lesenden Testpersonen
  korrekt und flüssig gelesen; Freigabe durch Dienstleister und Testpersonen
  dokumentiert. **Ohne bestandenen Test B1 keine Produktionsfreigabe.**

### G1 – Gesamtdurchlauf mit betroffenen Personen — Status: offen

- **Methode:** Realistisches Szenario: „Sie haben das Produkt erhalten und möchten
  die Anleitung öffnen." Beobachtung ohne Eingreifen; alle Zielgruppen aus
  Abschnitt 2; anschließend Kurzinterview.
- **Erfolgskriterium:** Alle Teilnehmenden erreichen die Startseite selbstständig
  über mindestens einen Zugangsweg; keine Abbrüche aus Verständnisgründen.
- **Hinweis:** Ein positiver G1-Test ist zugleich Voraussetzung für die Diskussion
  eines etwaigen zweiten QR-Codes (siehe `CARD_REQUIREMENTS.md`, Abschnitt 4).

## 4. Dokumentationsformat

Für jeden Test ein Protokoll mit:

| Feld                  | Inhalt                                                                           |
| --------------------- | -------------------------------------------------------------------------------- |
| Test-ID / Datum / Ort | z. B. Q1, 2026-MM-TT                                                             |
| Muster-Revision       | z. B. v0.1-draft-Andruck-1                                                       |
| Geräte/Hilfsmittel    | Modell, OS-Version, Apps, Messgeräte                                             |
| Teilnehmende          | anonymisiert (Rolle/Zielgruppe, keine Namen erforderlich)                        |
| Durchführung          | Schritte, Abweichungen vom Plan                                                  |
| Ergebnis              | bestanden / nicht bestanden / mit Auflagen (je Kriterium)                        |
| Befunde               | Beobachtungen, Zitate, Fotos des Musters (keine Personenfotos ohne Einwilligung) |
| Folgemaßnahmen        | Änderungen an Entwurf/Spezifikation, Re-Test nötig?                              |

Ablage der Protokolle: `design/card/test-results/` (anzulegen, sobald erste
Ergebnisse existieren – derzeit bewusst nicht vorhanden, da alle Tests offen sind).

## 5. Teststatus-Übersicht

| Test | Gegenstand                                   | Status |
| ---- | -------------------------------------------- | ------ |
| Q1   | QR: Geräte/Abstände/Licht                    | offen  |
| Q2   | QR: Abnutzung                                | offen  |
| N1   | NFC: iOS/Android, taktiles Auffinden         | offen  |
| N2   | NFC: Schreibschutz                           | offen  |
| U1   | Kurzadresse: Verständlichkeit/Eintippbarkeit | offen  |
| K1   | Kontrastmessung                              | offen  |
| K2   | Reflexion                                    | offen  |
| T1   | Kerbe finden / Ausrichtung                   | offen  |
| T2   | QR-/NFC-Bereich ertasten                     | offen  |
| B1   | Braille (Pflicht, blockierend)               | offen  |
| G1   | Gesamtdurchlauf mit betroffenen Personen     | offen  |

## 6. Automatisierter SVG-Preflight (ergänzend)

Vor jedem Rendering der Kartenentwürfe ausführen:

```bash
node design/card/check-card-svg.mjs
```

Der Check prüft Endformat und ViewBox, eine explizite Schriftgröße für jeden sichtbaren
Text, das Minimum von 6 pt, die sichtbaren Entwurfs-/Platzhalterkennzeichnungen sowie das
Fehlen erfundener Supportdaten und eines bereits eingebetteten QR-Musters. Er ersetzt
keinen der physischen Tests Q1 bis G1 und insbesondere nicht den blockierenden Braille-Test B1.
