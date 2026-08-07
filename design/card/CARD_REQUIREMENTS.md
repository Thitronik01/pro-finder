# Anforderungen: Barrierefreie Setup-Karte „THITRONIK Pro-finder"

Status: Entwurf (v0.1-draft) · Stand: 2026-08-06 · Alle mit **[zu bestätigen durch THITRONIK]** markierten Punkte sind offen.

## 1. Zweck

Die Karte ist **kein Handbuch**. Sie ist der dauerhafte, physische Einstieg in die digitale
Anleitung des THITRONIK Pro-finder. Sie liegt dem Produkt bei, verbleibt beim Nutzer
(z. B. im Fahrzeug oder in der Geldbörse) und führt mit genau **einem** klaren Weg zur
gepflegten Online-Anleitung. Inhaltliche Erklärungen, Bedienschritte oder technische Daten
gehören **nicht** auf die Karte, sondern auf die Zielseite. Die Zielseite unterscheidet dort,
wo nötig, zwischen den Gerätegenerationen „bis SN-044" und „ab SN-045" – die Karte selbst
ist generationsneutral.

## 2. Primärer permanenter Pfad

- Einziges Ziel aller Zugangswege (QR, NFC, gedruckte Kurzadresse) ist der Pfad
  **`/pro-finder/start`** auf einer von THITRONIK kontrollierten Domain,
  z. B. `https://www.thitronik.de/pro-finder/start` **[zu bestätigen durch THITRONIK]**.
- Der Pfad ist als **permanente Adresse** zu behandeln: Er darf nach Produktionsstart der
  Karte nicht mehr geändert werden; inhaltliche Änderungen finden nur auf der Zielseite statt.
- Keine URL-Shortener, keine Drittanbieter-Domains, keine Tracking-Parameter in der
  gedruckten/kodierten Adresse.

## 3. Ein einziger klarer Einstieg

Die Karte bietet **einen** Einstieg in drei redundanten Modalitäten, die alle auf dasselbe
Ziel zeigen:

| Element               | Anforderung                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| QR-Code               | Groß, zentraler Blickfang; Ziel `/pro-finder/start`; finaler Code wird erst nach Bestätigung der URL generiert.                |
| NFC-Tag               | In der Karte integriert; identisches Ziel wie der QR-Code; taktil auffindbarer Bereich.                                        |
| Gedruckte Kurzadresse | `thitronik.de/pro-finder/start` als lesbare, eintippbare Alternative **[URL-Form zu bestätigen durch THITRONIK]**.             |
| Produktname           | „THITRONIK Pro-finder" sichtbar auf der Vorderseite.                                                                           |
| Braillekennzeichnung  | Braille-Bereich auf Vorder- und Rückseite; Inhalt und Maße durch qualifizierten Dienstleister festzulegen (siehe Abschnitt 7). |
| Taktile Leserichtung  | Asymmetrische Ecke/fühlbare Kerbe legt Ausrichtung und Leserichtung eindeutig fest.                                            |
| Supporthinweis        | Barrierefreier Kontaktweg (Telefon und E-Mail) auf der Rückseite; konkrete Kontaktdaten **[zu bestätigen durch THITRONIK]**.   |

## 4. App-Download

- Die Karte enthält **keinen** App-Store-Link und **keinen** zweiten QR-Code.
- Der App-Download wird ausschließlich auf der Startseite `/pro-finder/start` angeboten.
- Ein zweiter QR-Code (z. B. direkt zur App) darf erst nach einem **positiven Nutzertest**
  (siehe `card-accessibility-test-plan.md`) ergänzt werden. Bis dahin gilt: ein Einstieg,
  ein Code.

## 5. Physische Anforderungen

- **Format:** ca. Kreditkartenformat nach ISO/IEC 7810 ID-1, **85,60 × 53,98 mm**.
- **Oberfläche:** matt, reflexionsarm; keine Glanzlaminierung (Blendung/Spiegelung
  beeinträchtigt sehbehinderte Nutzer und die QR-Lesbarkeit).
- **Kontrast:** hoher Hell-Dunkel-Kontrast (Ziel mindestens 7:1, siehe `card-print-spec.md`).
- **Schriftgröße:** größte sinnvoll nutzbare Schrift; keine dekorativen Schriften,
  serifenlose Schrift.
- **Keine Information nur über Farbe:** Alle Informationen müssen ohne Farbwahrnehmung
  vollständig erfassbar sein (Text, Form, Taktilität).
- **Taktile Orientierung:** asymmetrische Ecke oder fühlbare Kerbe (eine Ecke abgeschrägt),
  damit Ausrichtung und Vorder-/Rückseite ohne Sehen erkennbar sind.
- **Taktil unterscheidbarer QR-/NFC-Bereich:** QR-Zone (vorn) und NFC-Zone (hinten) sind
  durch Prägung/Relief fühlbar abgegrenzt und voneinander unterscheidbar.
- **Braille plus sichtbarer Text:** Braille ersetzt keinen Schwarzschrifttext; jede
  Braille-Information existiert auch als gedruckter Text.
- **Kurzadresse als Alternative:** Für Nutzer ohne Smartphone bzw. bei QR-/NFC-Ausfall
  muss die gedruckte Kurzadresse allein ausreichen.
- **Langlebigkeit:** feuchtigkeitsbeständig, abriebfest, UV-stabil genug für Ablage im
  Fahrzeug (Materialoptionen in `card-print-spec.md`).

## 6. Sicherheit

- Die Karte enthält **keine PIN, keinen Alarmcode, keine Seriennummer und keine
  Kundendaten** – weder gedruckt noch im NFC-Tag noch im QR-Code.
- QR-Code und NFC-Tag verweisen **ausschließlich** auf die kontrollierte
  THITRONIK-Adresse (Abschnitt 2); keine Deep-Links mit Parametern, keine Weiterleitungen
  über Fremddomains.
- Der NFC-Tag wird nach erfolgreicher Prüfung (korrektes Ziel, Lesbarkeit iOS/Android)
  **dauerhaft schreibgeschützt** (Write-Lock), damit er nachträglich nicht mit einer
  fremden URL überschrieben werden kann.
- Verlust der Karte darf kein Sicherheitsrisiko darstellen: Die Karte trägt keinerlei
  gerätespezifische oder personenbezogene Information.

## 7. Braille – verbindliche Anforderung mit offenem Prüfpunkt

**Verbindlich:** In diesem Projekt werden **keine produktionsfertigen Braillemaße
festgelegt oder erfunden.** Alle Braille-Angaben in den Entwurfsdateien sind ausdrücklich
Platzhalter (schraffierte Zonen, keine Punktgeometrie).

- Brailletext (Wortlaut und ggf. Kurzschrift/Vollschrift), Punktabstände (z. B. nach
  **Marburg Medium**), Punkthöhe, Zeilenlage und Prägeverfahren **müssen** durch einen
  **qualifizierten Braille-Dienstleister** festgelegt werden.
- Die Umsetzung **muss** vor Produktionsfreigabe durch **Braille lesende Testpersonen**
  geprüft werden (siehe `card-accessibility-test-plan.md`, Test B1 – Pflicht).
- **Offener Prüfpunkt (blockierend für Produktion):** Auswahl des Dienstleisters,
  Festlegung des Brailletexts, Prüfprotokoll der Testpersonen. Ohne abgeschlossenen
  Prüfpunkt keine Druckfreigabe.

## 8. Offene Punkte (Sammelliste)

| Nr. | Punkt                                                                                                       | Verantwortlich            | Status                |
| --- | ----------------------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| O-1 | Finale URL/Domain für `/pro-finder/start`                                                                   | THITRONIK                 | offen – zu bestätigen |
| O-2 | Support-Telefon und Support-E-Mail für die Rückseite                                                        | THITRONIK                 | offen – zu bestätigen |
| O-3 | Braille-Dienstleister, Brailletext, Maße (z. B. Marburg Medium), Prüfung durch Braille lesende Testpersonen | THITRONIK + Dienstleister | offen – blockierend   |
| O-4 | Generierung des finalen QR-Codes (erst nach O-1)                                                            | Projekt                   | offen                 |
| O-5 | NFC-Tag-Typ, Beschreibung und Schreibschutz (erst nach O-1)                                                 | Projekt                   | offen                 |
| O-6 | Nutzertest als Voraussetzung für einen etwaigen zweiten QR-Code                                             | Projekt                   | offen                 |
| O-7 | Materialentscheidung (Kunststoff vs. Karton mit Schutzlaminat)                                              | THITRONIK                 | offen                 |
