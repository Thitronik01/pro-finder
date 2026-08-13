# Nutzerentwürfe Setup-Karte · 2026-08-11

Status: **Konzeptreferenzen, nicht für Produktion**

Diese sieben PNG-Dateien wurden am 2026-08-11 vom Projektauftraggeber als visuelle
Entwürfe bereitgestellt. Sie dienen ausschließlich als Gestaltungsreferenz. Abgebildete
QR-Muster, Braillepunkte, Reliefs, NFC-Lage, Supportfelder, Produktabbildungen und
Stanzgeometrien sind weder technische Spezifikation noch Freigabe.

## Einordnung

| Datei                            | Rolle im Projekt                   | Verwendbarer Gestaltungsimpuls                                      |
| -------------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| `01-orientation-notch.png`       | Detailstudie                       | gut erkennbare Orientierungskerbe und Materialwirkung               |
| `02-back-nfc-support.png`        | Rückseitenkonzept                  | klare NFC-Hauptaktion, reservierte Braillezone und Supportbereich   |
| `03-front-back-presentation.png` | Präsentationsbild                  | Zusammenspiel von Vorder- und Rückseite; nicht maßhaltig            |
| `04-qr-detail.png`               | Vorderseitendetail                 | QR-Zone, Scanaufforderung und gedruckte Kurzadresse                 |
| `05-nfc-detail-a.png`            | Rückseitendetail                   | taktil gerahmte NFC-Zone und textliche Redundanz zum Symbol         |
| `06-front-layout.png`            | Vorderseitenkonzept                | stärkste Grundlage für Hierarchie und Flächenaufteilung             |
| `07-nfc-detail-b.png`            | Dublette von `05-nfc-detail-a.png` | identischer SHA-256; zur vollständigen Übergabe trotzdem archiviert |

Alle Rasterbilder sind 1448 × 1086 Pixel groß. Die beiden NFC-Detaildateien 05 und 07
sind byteidentisch.

## Übernahme in das Kartenkonzept

Aus den Referenzen wurden die getrennten, deutschsprachigen Dateien
`card-front-de-example.svg` und `card-back-de-example.svg` abgeleitet. Sie bleiben
maßhaltige SVG-Entwürfe im ID-1-Format und überschreiben die bisherigen Basiskarten nicht.
Gerenderte Ansichten für die schnelle Sichtprüfung liegen unter `../../previews/`.

Bewusst übernommen:

- eindeutige Vorder-/Rückseitenhierarchie;
- gekappte Ecke als vorgesehene taktile Orientierung;
- große QR- beziehungsweise NFC-Aktionszone;
- Beschriftung zusätzlich zum Symbol, damit Farbe und Piktogramm nie allein tragen;
- reservierte Braillefläche ohne Punktgeometrie;
- sichtbare Platzhalter für ungeklärte URL- und Supportdaten.

Bewusst nicht übernommen:

- Schreibweise `PRO-FINDER`; im Projekt gilt `Pro-finder`;
- das dekorative QR-Muster: Es könnte fälschlich als prüfbarer Code verstanden werden;
- dargestellte Braillepunkte: Wortlaut, Raster und Prägeparameter legt ausschließlich ein
  qualifizierter Braille-Dienstleister mit Braille lesenden Testpersonen fest;
- Logo- und Produktbild als Produktionsasset: Im Repository liegt noch keine freigegebene,
  druckfähige Originaldatei vor;
- konkrete Reliefhöhen, Materialstruktur, NFC-Inlayposition und Kerbenmaße;
- Supporttelefon, Support-E-Mail oder endgültiges URL-Ziel.

## Dateiintegrität

| Datei                            |   Bytes | SHA-256                                                            |
| -------------------------------- | ------: | ------------------------------------------------------------------ |
| `01-orientation-notch.png`       | 1722834 | `56e74d2380e705a974ad335831d6e80596eb03d8702878ee844fe19b8a79dff9` |
| `02-back-nfc-support.png`        | 1874999 | `77c40f155180c500a37f400d7ab55025f4a6a2ee2d8e2db7a7d40d37b96d9ab7` |
| `03-front-back-presentation.png` | 1933148 | `a38e6a50c650f002bce33a948fef4965cbff4467046b419ca09bc51abed66a33` |
| `04-qr-detail.png`               | 2149438 | `2e2e1e7242add9cb7649a9e0228983ab9f6e3903f3f7a0614608279fd4cdb705` |
| `05-nfc-detail-a.png`            | 2144174 | `83363b6c321be52bb166b6c365fc98f697b35ea03aa8306aa60f1692c7b533c0` |
| `06-front-layout.png`            | 1940050 | `10ad5bd8d1e2df61bf5a6fbe85e3568da1b9abdd1290073258fc6723ce9562b0` |
| `07-nfc-detail-b.png`            | 2144174 | `83363b6c321be52bb166b6c365fc98f697b35ea03aa8306aa60f1692c7b533c0` |
