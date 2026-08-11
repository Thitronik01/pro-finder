# Druckspezifikation: Setup-Karte „THITRONIK Pro-finder"

Status: **Entwurf (v0.3-draft)** · Stand: 2026-08-11

> **Verbindlicher Hinweis:** Alle Angaben in diesem Dokument haben Entwurfsstatus.
> Vor Produktionsfreigabe müssen sämtliche Werte mit der Druckerei, dem
> Braille-Dienstleister und anhand physischer Andrucke/Muster validiert werden
> (siehe `card-accessibility-test-plan.md`). Braillemaße werden hier bewusst
> **nicht** festgelegt (siehe Abschnitt 5).

Die deutschsprachigen Dateien `card-front-de-example.svg` und
`card-back-de-example.svg` sind eine getrennte Layoutstudie auf Basis der am 2026-08-11
eingereichten Konzeptbilder. Für sie gelten dieselben offenen Produktions-Gates wie für
die Basisdateien.

## 1. Format und Beschnitt

| Parameter                               | Wert (Entwurf)                                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Endformat                               | ISO/IEC 7810 ID-1: 85,60 × 53,98 mm                                                                                          |
| Eckenradius                             | ca. 3,18 mm (ID-1-üblich), außer an der gekappten Ecke                                                                       |
| Beschnittzugabe                         | 3 mm umlaufend (mit Druckerei abstimmen; bei Kunststoffkarten im Stanzwerkzeug ggf. abweichend)                              |
| Sicherheitsabstand Text/Grafik zum Rand | mind. 3 mm                                                                                                                   |
| Fühlbare Kerbe                          | abgeschrägte Ecke oben rechts (Vorderseite); Geometrie im Stanz-/Fräswerkzeug der Druckerei umzusetzen, Muster taktil prüfen |

## 2. Material – Optionen mit Vor- und Nachteilen

| Option                                                                                                           | Vorteile                                                                                                                                     | Nachteile                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **A: Langlebiger Kunststoff** (z. B. PVC- oder umweltfreundlichere PETG-/rPVC-Karte, ca. 0,76 mm, wie Bankkarte) | Sehr langlebig, feuchtigkeits- und abriebfest; NFC-Inlay industriell etabliert; Prägung (taktile Zonen, Braille) gut möglich; stabile Haptik | Höhere Kosten; Umweltaspekt (Materialwahl abwägen); Braille-Prägung auf harten Karten nur mit geeignetem Verfahren                 |
| **B: Stabiler Karton mit Schutzlaminat (matt)**                                                                  | Günstiger; einfacher Druckprozess; gute Bedruckbarkeit                                                                                       | Weniger langlebig; Kanten können aufquellen; NFC-Inlay und dauerhafte Braille-Prägung schwieriger; Laminat muss zwingend matt sein |

Empfehlung (Entwurf): **Option A**, da NFC-Integration, Feuchtigkeitsbeständigkeit und
dauerhafte taktile Elemente Kernanforderungen sind. Entscheidung: offen (O-7 in
`CARD_REQUIREMENTS.md`), **[zu bestätigen durch THITRONIK]**.

## 3. Oberfläche

- **Matt, reflexionsarm.** Keine Glanzlaminierung, kein UV-Hochglanzlack:
  Spiegelungen blenden sehbehinderte Nutzer und verschlechtern die QR-Erkennung
  bei ungünstigem Licht.
- Mattes Schutzlaminat bzw. matte Kartenoberfläche; Reflexionsverhalten am
  physischen Muster prüfen (Testplan, Test K2).

## 4. Prägung / Stanzung (taktile Elemente)

- **Kerbe/abgeschrägte Ecke:** per Stanzung/Konturschnitt; Kante entgraten, damit
  sie fühlbar, aber nicht scharf ist.
- **QR-Zone (vorn) und NFC-Zone (hinten):** taktil erhabener Rahmen (Prägung/Relief
  oder erhabener Lack), so ausgeführt, dass beide Zonen **fühlbar unterscheidbar**
  sind (z. B. durchgezogener Rahmen vorn, anders strukturierter Rahmen hinten –
  finale Ausführung mit Dienstleister und im Nutzertest festlegen).
- Prägetiefe/-höhe: nicht hier festgelegt; nach Musterprüfung mit Testpersonen.

## 5. Braille-Prägung (separater Produktionsschritt – Pflicht)

- Die Braille-Prägung erfolgt als **separater Produktionsschritt durch einen
  qualifizierten Braille-Dienstleister**.
- **In diesem Dokument werden keine Braillemaße festgelegt.** Punktabstände
  (z. B. nach Marburg Medium), Punkthöhe, Zeilenführung und der Brailletext selbst
  werden vom Dienstleister bestimmt und **müssen** durch Braille lesende
  Testpersonen geprüft werden (Testplan, Test B1 – Pflicht, blockierend).
- Die in den SVG-Entwürfen schraffierten Braille-Zonen sind reine Flächenreservierungen;
  ob die Fläche ausreicht, entscheidet der Dienstleister.

## 6. Farben und Kontrast

| Element                          | Wert (Entwurf)                                      |
| -------------------------------- | --------------------------------------------------- |
| Text/Grafik                      | #1a1a1a (nahezu Schwarz)                            |
| Hintergrund                      | #ffffff (Weiß)                                      |
| Rechnerisches Kontrastverhältnis | ca. 17:1 (deutlich über dem Ziel von mind. **7:1**) |

- Ziel: mindestens **7:1** (angelehnt an WCAG-Stufe AAA für Text), gemessen am
  **gedruckten Muster**, nicht nur am Bildschirm (Testplan, Test K1).
- **Keine Information nur über Farbe.** Der Entwurf verwendet ausschließlich
  Schwarz/Weiß plus Form und Taktilität; falls später Farbflächen (z. B. Markenrot)
  ergänzt werden, dürfen sie rein dekorativ sein.
- Druckfarbe: tiefes Schwarz mit Druckerei abstimmen (bei Offset ggf. reines K
  bzw. Skalenschwarz nach Empfehlung der Druckerei).

## 7. Typografie – Mindestschriftgrößen

- Schriftart: serifenlos; die SVG-Entwürfe verwenden die explizite Fallback-Kette
  `Arial, Helvetica, DejaVu Sans, sans-serif`, damit Renderer nicht auf eine Serifenschrift
  ausweichen. Vor Übergabe an die Druckerei muss die finale Schrift abgestimmt und
  eingebettet bzw. in Pfade umgewandelt werden.
- Mindestgrößen (Entwurf, am Muster zu validieren):
  - Produktname: 4,4 mm SVG-Schriftgröße (ca. 12,47 pt)
  - Kurzadresse: 2,85–3,0 mm SVG-Schriftgröße (ca. 8,08–8,50 pt), fett
  - kleinster sichtbarer Text: **2,25 mm SVG-Schriftgröße (ca. 6,38 pt)**
  - kein sichtbarer Text unter 6 pt; interne Produktionshinweise gehören in Metadaten,
    Kommentare oder diese Spezifikation und nicht klein gesetzt auf die Druckfläche
- Keine Kapitälchen-Spielereien, keine engen Laufweiten, ausreichender Zeilenabstand.

Da `viewBox` und physische SVG-Abmessungen im Verhältnis 1 Einheit = 1 mm angelegt sind,
entspricht der numerische SVG-Wert bei `font-size` direkt Millimetern. Der automatisierte
Preflight wird mit `node design/card/check-card-svg.mjs` ausgeführt; er ersetzt weder
einen PDF-Preflight der Druckerei noch die Prüfung eines physischen Musters.

## 8. QR-Code

- **Fehlerkorrektur-Level: H (ca. 30 % Redundanz) – empfohlen.** Begründung:
  Die Karte wird dauerhaft genutzt (Kratzer, Abrieb, Verschmutzung, Fingerabdrücke);
  Level H hält den Code auch bei Teilbeschädigung lesbar. Der Mehrbedarf an Modulen
  ist verkraftbar, weil die Ziel-URL kurz ist.
- **Mindestmodulgröße:** Ziel ≥ 0,5 mm pro Modul im Druck (Entwurfswert; mit
  Druckerei und Scans realer Andrucke validieren). Bei kurzer URL und Level H
  ist das in der ca. 24 × 24 mm großen QR-Zone realistisch; finale Versionsgröße
  des QR-Codes erst nach URL-Bestätigung bestimmbar.
- **Ruhezone:** mindestens 4 Module umlaufend, frei von Druck und Prägung.
- Inhalt: ausschließlich `https://www.thitronik.de/pro-finder/start`
  **[URL zu bestätigen durch THITRONIK]** – keine Tracking-Parameter, kein Shortener.
- Finaler Code wird erst nach URL-Bestätigung generiert; der Entwurf enthält
  bewusst nur einen Platzhalter (kein Fake-Muster).

## 9. NFC-Tag

- **Tag-Typ (Option): NTAG-Familie** (z. B. NTAG213 – für eine kurze URL
  ausreichend; NTAG215/216 nur bei absehbarem Mehrbedarf). Finale Auswahl mit
  Kartenhersteller abstimmen (Antennengröße, Lesereichweite im gewählten Material).
- NDEF-Inhalt: ein einziger URI-Record auf `https://www.thitronik.de/pro-finder/start`
  **[URL zu bestätigen durch THITRONIK]**. Keine weiteren Records, keine Kundendaten.
- **Schreibschutz:** Tag erst nach erfolgreicher Prüfung (korrektes Ziel, Lesetest
  iOS/Android laut Testplan) dauerhaft schreibschützen (Lock), damit die URL nicht
  nachträglich überschrieben werden kann.
- Position des Inlays so wählen, dass sie mit der taktil markierten NFC-Zone auf
  der Rückseite übereinstimmt.

## 10. Validierung vor Produktion (Pflicht)

Alle Werte dieses Dokuments sind Entwurfswerte. Vor Produktionsfreigabe:

1. Andruck/Kartenmuster von der Druckerei anfordern.
2. Alle Tests aus `card-accessibility-test-plan.md` durchführen (derzeit sämtlich offen).
3. Braille-Umsetzung durch Dienstleister und Braille lesende Testpersonen freigeben lassen.
4. URL, Supportdaten und Materialentscheidung durch THITRONIK bestätigen lassen.
5. Erst danach: finalen QR-Code generieren, NFC-Tags beschreiben, prüfen, schreibschützen.
