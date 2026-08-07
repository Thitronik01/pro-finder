# Referenz-Snapshot: THITRONIK Händlerplattform

Stand: 2026-08-06. Dieser Snapshot dokumentiert ausschließlich die read-only
ausgewertete Referenzplattform. Er ist weder eine technische Freigabe noch eine
Veröffentlichungsfreigabe für den Barrierefreiheits-Piloten.

Die Regeln des Schreib-Repositories bleiben vorrangig: Aussagen aus der Referenz müssen
gegen die vier Original-PDFs auf Dokument- und Seitenebene geprüft, Widersprüche in
`docs/DISCREPANCIES.md` geführt und sicherheitskritische Werte separat technisch
freigegeben werden. Insbesondere entscheidet dieser Snapshot nicht den offenen
Schreibweisenkonflikt `Pro-finder`/`Pro-Finder`; dafür gilt
`docs/TERMINOLOGY_CONFLICTS.md`.

## 1. Repository-Snapshot und Integrität

| Merkmal | Geprüfter Wert |
| --- | --- |
| Lokaler Referenzpfad | `.agent/reference/thitronik-haendlerplattform` |
| Upstream | `https://github.com/Thitronik01/Thitronik-H-ndlerplattform-.git` |
| Branch | `produktion` |
| Commit | `77802f08d23bd28117f5db92cc81df0195011076` |
| Commitdatum | `2026-08-06T14:54:46+02:00` |
| Commitbetreff | `feat(platform): finalize UI polish and backup tooling` |
| Push-URL | `DISABLED` |
| `git status --porcelain` vor Analyse | leer |
| `git status --porcelain` nach Analyse | leer |

Der Referenzklon ist shallow/grafted. Der Snapshot belegt deshalb den genannten Stand,
nicht die Vollständigkeit seiner Git-Historie. Im Referenzklon wurde nichts geändert,
kein Generator ausgeführt und kein Build gestartet.

## 2. Ausgewertete Referenzquellen

Mindestens vollständig oder in den für diesen Snapshot relevanten Abschnitten geprüft:

- `.agent/reference/thitronik-haendlerplattform/AGENTS.md`
- `.agent/reference/thitronik-haendlerplattform/docs/MASTERPLAN.md`
- `.agent/reference/thitronik-haendlerplattform/docs/CONTENT_MODEL.md`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/pro-finder.md`
- `.agent/reference/thitronik-haendlerplattform/wiki/en/pro-finder.md` sowie die
  entsprechenden Fassungen in `fr`, `es`, `it`, `nl`, `da`, `sv`, `no`, `pl`, `cs`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/glossar.md` sowie alle zehn
  Übersetzungen
- `.agent/reference/thitronik-haendlerplattform/wiki/de/terminologie-und-schreibweisen.md`
  sowie alle vorhandenen Übersetzungen
- `.agent/reference/thitronik-haendlerplattform/wiki/de/uebersetzungs-glossar.md`
- `.agent/reference/thitronik-haendlerplattform/wiki/Glossar/README.md`
- `.agent/reference/thitronik-haendlerplattform/wiki/Glossar/01_final/thitronik-wortglossar-v2.csv`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/intern/rag-pro-finder-app.md`
  sowie alle zehn Übersetzungen
- `.agent/reference/thitronik-haendlerplattform/project-data/link-dictionary.json`
- `.agent/reference/thitronik-haendlerplattform/lib/wiki-i18n.js`
- `.agent/reference/thitronik-haendlerplattform/lib/wiki-runtime.js`
- `.agent/reference/thitronik-haendlerplattform/lib/wiki-dealer-view.mjs`
- `.agent/reference/thitronik-haendlerplattform/scripts/wiki-ingest.mjs`

## 3. Übertragbare Content- und Übersetzungsmuster

Diese Muster sind als Arbeitsprinzipien übertragbar, nicht als ungeprüfter Inhalt:

1. **Seriennummer zuerst:** Vor Aussagen zu SIM, Mobilfunk, App, Status-LED oder
   Anschlüssen wird die vollständige Gerätegeneration bestimmt. Artikelnummer und
   Seriennummer werden strikt getrennt.
2. **Generationen sichtbar trennen:** Hardware-, SIM-, PIN-, Software-, App- und
   LED-Schwellen stehen in getrennten Tabellen. Genau dieses Prinzip ist für die
   Pilot-Routen `bis SN-044` und `ab SN-045` geeignet.
3. **Gefahr unmittelbar am Schritt:** Sicherheitswarnungen stehen direkt bei einem
   Befehl oder Anschluss und nicht nur in einem allgemeinen Vorspann.
4. **Quellenhierarchie:** Produktspezifische Primärquelle mit erkennbarem Revisionsstand
   vor freigegebenem Basisartikel; Wiki-, FAQ-, Snippet- und RAG-Derivate nur als
   Auffindehilfe. Sie dürfen keine neue Befehlssyntax, Berechtigung, SIM-Freigabe,
   Fahrzeugfunktion oder Abschaltlogik begründen
   (`wiki/de/intern/rag-pro-finder-app.md:168-175`).
5. **Technische Tokens schützen:** Produktnamen, vollständige Seriennummern,
   Artikelnummern, PINs, SMS-Befehle, Spannungen, Ströme, Einheiten, Anschlüsse und
   Kabelfarben bleiben bei Übersetzungen zeichengetreu.
6. **Befehle nicht frei übersetzen:** Befehl, programmierte Gerätesprache, Parameter,
   Absenderberechtigung, Voraussetzung, Warnung und erwartete Antwort gehören in
   denselben Inhaltsblock (`wiki/de/intern/rag-pro-finder-app.md:220-229`).
7. **Unsicherheit sichtbar machen:** Fehlen Seriennummer, Softwarestand, Gerätesprache,
   SIM-Typ oder Primärbeleg, darf keine konkrete Programmier- oder
   Abschaltanweisung erzeugt werden.

### Mehrsprachigkeit der Referenz

- Geführte Sprachen: `de`, `en`, `fr`, `es`, `it`, `nl`, `da`, `sv`, `no`, `pl`, `cs`
  (`lib/wiki-i18n.js:19`).
- Artikelübersetzungen verwenden denselben sprachrelativen Slug. Alle zehn
  Pro-Finder-Fassungen verweisen auf `de/pro-finder.md` und bewahren die geprüften
  kritischen Zahlen und Befehlstokens.
- Fehlende UI-Übersetzungen fallen in der Referenz still auf Deutsch zurück
  (`lib/wiki-i18n.js:672-674`). Das ist für den Pilot kein Freigabemodell: Jede
  veröffentlichte Sprache muss vollständig geprüft sein.
- Die Glossarübersetzungen enthalten `translation_of: sources/glossar.md`; eine solche
  Datei existiert im Referenzklon nicht. Diese Provenienzangabe nicht übernehmen.

## 4. Terminologiekonflikte

### 4.1 `Pro-finder` gegen `Pro-Finder`

- Die aktive Referenz-CSV behandelt `Pro-Finder` unter `THT-0015` als geschützten
  Produktnamen mit Regel `keep` und unveränderten Zielsprachen
  (`wiki/Glossar/01_final/thitronik-wortglossar-v2.csv:628`).
- Das Referenz-Link-Dictionary kennt `Pro-Finder` und `Profinder` und verweist auf
  `/{lang}/pro-finder` (`project-data/link-dictionary.json:20-27`). Die Aliasliste ist
  weder vollständig noch für die Pilot-Routen übertragbar.
- Der Projektauftrag und mehrere Pilotquellen verwenden `Pro-finder`. Bis zur
  THITRONIK-Entscheidung bleibt im Pilottext `Pro-finder`; originale Referenztitel und
  Zitate bleiben unverändert als `Pro-Finder` gekennzeichnet. Siehe `TERM-001` in
  `docs/TERMINOLOGY_CONFLICTS.md`.

### 4.2 `anlernen`/`Anlernmodus`

Innerhalb der Referenz besteht ein ungelöster Konflikt:

- Die sichtbaren Terminologieartikel verlangen für WiPro, Funk und NFC sinngemäß
  `teach in`/Lernbegriffe und reservieren `pairing` für Bluetooth
  (`wiki/de/terminologie-und-schreibweisen.md:32,90` und
  `wiki/de/uebersetzungs-glossar.md:68-70`).
- Die laut `wiki/Glossar/README.md:8-36` verbindliche aktive CSV verlangt dagegen für
  `anlernen` ausdrücklich `pair` (`THT-0266`, CSV-Zeile 10) und für `Anlernmodus`
  `pairing mode` (`THT-0205`, CSV-Zeile 15); `teach-in mode` bleibt dort nur für
  ausdrücklich zitierte Legacy-UI-Texte.

Der Pilot darf diese Quellen nicht still zusammenführen. Falls der Begriff in den
Pilotumfang gelangt, muss er als Discrepancy dokumentiert und sprachlich freigegeben
werden.

### 4.3 Weitere stabile Referenzregeln

Als Referenzmuster plausibel, aber weiterhin gegen die Pilotquellen zu prüfen:

- `safe.lock` mit Punkt,
- `CAN-Bus` mit Bindestrich,
- `Status-LED`,
- Scharf-/Unscharfschalten nicht mit Ver-/Entriegeln gleichsetzen,
- Sirene und Fahrzeughupe nicht synonym verwenden,
- `Geofencing` sowie SMS-Befehle nicht frei lokalisieren.

## 5. Kritischer Befund: `internal` und `internal_only`

Dieser Befund ist sicherheitsrelevant und darf nicht als Muster in den Pilot übernommen
werden.

1. Das Referenz-Content-Modell beschreibt `dealerStatus: internal_only` als bewusst
   nicht im Händlerportal sichtbar, selbst bei `visibility: standard`
   (`docs/CONTENT_MODEL.md:54-72`).
2. Die geprüften Runtime-Gates filtern jedoch ausschließlich
   `visibility === 'internal'`. Index, Suche und direkter Artikelabruf werten
   `dealerStatus` nicht als Zugriffssperre aus (`lib/wiki-runtime.js:55-85,140-150`).
3. `internal_only` ist damit in den geprüften Gates Redaktions-/Auditmetadatum, keine
   belastbare Zugriffskontrolle. Ein Standardartikel kann trotz dieses Status technisch
   ausgeliefert werden.
4. Der Ingest überspringt bei `internal_only` sogar die Warnung
   `dealer-internal-source` (`scripts/wiki-ingest.mjs:349-365`). Eine Warnung kann also
   verschwinden, ohne dass der Artikel technisch gesperrt ist.
5. Echte interne Sichtbarkeit entsteht durch das Pfadsegment `intern` oder durch eine
   hart codierte Slugliste. Darin stehen unter anderem
   `terminologie-und-schreibweisen` und `uebersetzungs-glossar`
   (`scripts/wiki-ingest.mjs:56-69,619`). Diese Code-Ausnahme ist im Content-Modell
   nicht hinreichend sichtbar.
6. `wiki/de/pro-finder.md` und `wiki/de/glossar.md` sind `approved`; alle zehn
   Übersetzungen beider Artikel sind explizit `internal_only`. Weil diese Dateien nicht
   unter `/intern/` liegen, ist ihr Status allein kein Schutz.
7. Der deutsche Pro-Finder-Artikel ist `approved`, führt aber
   `NUR_INTERNER_GEBRAUCH_Pro-finder_Befehle_abV9.1_(V1.1).pdf` als Quelle
   (`wiki/de/pro-finder.md:15,26`). Das erzeugt den Auditkonflikt
   `dealer-approved-internal-source`.
8. `wiki/<lang>/intern/rag-pro-finder-app.md` ist durch echte
   `visibility: internal` korrekt vom nichtinternen Artikelabruf ausgeschlossen.

Positiv ist die serverseitige Dealer-Projektion: Sie entfernt interne Quellen und
markierte interne Abschnitte und liefert bei fehlendem `dealerHtml` keinen ungefilterten
Body (`lib/wiki-dealer-view.mjs:92-109`). Die Umsetzung ist jedoch an eine hart codierte
Liste lokalisierter Heading-Anker gekoppelt (`lib/wiki-dealer-view.mjs:18-54`) und damit
ohne Tests fehleranfällig.

**Arbeitsregel für den Pilot:** Interne Inhalte werden nicht allein über Metadaten oder
Navigation verborgen. Öffentliche Builds dürfen interne Quellen und Inhalte gar nicht
enthalten; serverseitige Autorisierung, RLS und negative Zugriffstests bleiben Pflicht.

## 6. Pro-Finder-/SN-Belege aus der Referenz

Die folgenden Werte sind belastbare Aussagen des kuratierten Referenzartikels, aber
noch keine technische Freigabe des Piloten. Vor Verwendung müssen sie gegen die
zugehörige Original-PDF-Seite geprüft und im Pilot-Quellenmodell verknüpft werden.

Grundregel der Referenz: `100699` ist die Artikelnummer der Produktfamilie, nicht die
Seriennummer. Technische Entscheidungen benötigen die vollständige Seriennummer mit
Präfix `0699` und erhaltenen führenden Nullen
(`wiki/de/pro-finder.md:31-35`). Der genaue Fundort und die Leseregel am Gerät bleiben
laut `docs/PROJECT_STATUS.md` im Pilot ein Release-Blocker.

### 6.1 Generationen, SIM und Software

| Vollständiger Referenzbereich | Aussage im Referenzartikel | Referenzstelle |
| --- | --- | --- |
| `0699-001` bis `0699-007` | frühe Hardware; Mini-SIM; PIN `0000`, PIN-Abfrage aktiv | `wiki/de/pro-finder.md:60,150` |
| `0699-008` bis `0699-017` | Micro-SIM; PIN `0000`, PIN-Abfrage aktiv | `wiki/de/pro-finder.md:61,151` |
| `0699-018` bis `0699-044` | dokumentierte 2G/3G-Generation; Micro-SIM; PIN `0000`, PIN-Abfrage aktiv | `wiki/de/pro-finder.md:62,151` |
| ab `0699-045` | 4G LTE, Nano-SIM, PIN-Abfrage vollständig deaktiviert; GPS/QZSS dokumentiert | `wiki/de/pro-finder.md:63,77,106,152` |

Weitere Meilensteine des Referenzartikels:

| Serienmeilenstein | Software | Referenzaussage |
| --- | --- | --- |
| `0699-003` | `5.0` | 24-V-Unterstützung |
| `0699-009` | `8.7` | Prepaid-Anbieterfunktionen |
| `0699-013` | `9.1` | dokumentierter Beginn der App-Kompatibilität, Alarmanruf und weitere Melderarten |
| `0699-015` | nicht separat genannt | Schwelle für Verriegeln plus Scharfschalten |
| `0699-018` | `9.1` | neuer 2G/3G-Modemstand |
| `0699-029` | `10.0.0` | korrigierte französische Befehle und verbesserter Modemstand |
| `0699-045` | `11.0.4` | LTE-Hardwarewechsel, Nano-SIM, PIN-Abfrage aus |
| `0699-056` | `11.0.6` | Verbesserung für O2-SIM |
| `0699-065` | `11.1.0` | Platinen-/Lötänderung |

Quelle für diese Meilensteine:
`.agent/reference/thitronik-haendlerplattform/wiki/de/pro-finder.md:68-80`.

### 6.2 Sicherheitskritische Funktionsaussagen

- **Ausgänge:** A und B mit 12 V und maximal 500 mA je dokumentierter Anleitung
  (`wiki/de/pro-finder.md:104,138`). Größere oder induktive Lasten benötigen eine
  fachgerecht dimensionierte Relaisschaltung und Schutzbeschaltung.
- **Fahrzeugstilllegung:** Ausschließlich `kill` verwenden. Der Befehl wartet laut
  Referenz mindestens fünf Sekunden durchgehend auf `0 km/h`. `a an` und `a N` schalten
  Ausgang A ohne Geschwindigkeitsprüfung; bei deutscher Gerätesprache hebt `a aus` auf
  (`wiki/de/pro-finder.md:261` und `wiki/de/intern/rag-pro-finder-app.md:241-243`).
- **Unterspannung:** Warnung bei 11,2 V; Rückkehr in den Normalbetrieb bei einer
  Versorgung über 12,5 V (`wiki/de/pro-finder.md:269-271`).
- **Status-LED:** Die Bedeutung gelben Blinkens ändert sich an `0699-045`. Ohne
  vollständige Seriennummer ist keine eindeutige Diagnose möglich
  (`wiki/de/pro-finder.md:280-292`).
- **App:** Die Referenz setzt den Beginn dokumentierter App-Kompatibilität bei
  `0699-013`, nicht erst beim LTE-Wechsel `0699-045`. Eine Ersatzseriennummer in der App
  schaltet keine Hardwarefunktion frei und rüstet kein LTE-Modem nach
  (`wiki/de/pro-finder.md:317-319`).
- **Ortung:** Kein Live-Tracking und keine Routenspeicherung. Geofencing ist nur
  ungefähr `500 m bis 1 km`; `GPS: Standby` kann die letzte gültige statt der aktuellen
  Position liefern (`wiki/de/intern/rag-pro-finder-app.md:243`).
- **Netz/Provider:** Historische Provider-, Länder- oder Roamingangaben sind keine
  dauerhafte Freigabe. Tarif, Hostnetz, klassische SMS, Telefonie und Roaming müssen
  aktuell geprüft werden (`wiki/de/intern/rag-pro-finder-app.md:246`).

### 6.3 Quellenverfügbarkeit

Der Frontmatter von `wiki/de/pro-finder.md:3-22` nennt zwölf PDF-/DOCX-/CSV-Quellen
und vier Wiki-Querverweise. Acht Binärquellen sind im Referenzklon per Basename lokal
vorhanden:

- `.agent/reference/thitronik-haendlerplattform/wiki/Anleitungen/pro-finder_-_bedienungs-_und_montageanleitung_2.6_01.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/Anleitungen/pro_finder-kurzanleitung-international.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/Anleitungen/pro_finder-kurzanleitung-international_sn-045.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/Anleitungen/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/pro-finder_ocr_abschrift.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/Anleitungen/wipro_iii-installationsanleitung_1.8.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/Fragen zu Pro-finder.pdf`
- `.agent/reference/thitronik-haendlerplattform/wiki/de/NUR_INTERNER_GEBRAUCH_Pro-finder_Befehle_abV9.1_(V1.1).pdf`

Im Referenzklon fehlen die im Frontmatter genannten Dateien:

- `Pro Finder.docx`
- `Anbieter.docx`
- `Handy.docx`
- `SMS-Konfiguration für Pro-Finder - SMS-Konfiguration für Pro-Finder.csv`

Der vorhandene Text-Extrakt der zehnsprachigen Anleitung ab SN-045 enthält außer dem
Deckblatt praktisch keinen lesbaren Inhalt. Die SN-045-Details konnten aus diesem
Extrakt daher nicht unabhängig bestätigt werden. Eine Übernahme muss direkt anhand der
Original-PDF-Seiten im Pilot erfolgen.

## 7. RAG-Beleggrenze

Das interne RAG-Audit listet 79 Quellpfade: 31 Root-Einträge und 48 Einträge in vier
RAG-Packs. Es gibt nur 48 verschiedene Basisdateinamen; 31 Namen sind potenzielle
Dubletten. Das Derivatarchiv ist nicht vorhanden, weshalb Inhalt, Revisionsstand und
Bytegleichheit nicht reproduzierbar sind
(`wiki/de/intern/rag-pro-finder-app.md:151-165`).

Die Zahl 79 bezeichnet Referenzen, nicht 79 unabhängige Belege. `Readme`, `Index`,
`Figure` und `Snippet` sind ohne eindeutig verknüpfte Primärstelle keine Belege. Die
zehn Übersetzungen enthalten dieselben 79 deutschen Pfade und stellen ebenfalls keine
zusätzlichen unabhängigen Quellen dar.

## 8. Nicht blind übernehmen

1. **Keine `internal`- oder `internal_only`-Inhalte veröffentlichen.** Dazu gehören
   insbesondere das interne Befehls-PDF, das RAG-Audit, interne Quellenmetadaten und
   daraus nicht öffentlich freigegebene Details.
2. **`internal_only` nicht als Zugriffsschutz nachbauen.** Die Referenz belegt, dass
   redaktionelles Metadatum ohne serverseitige Sperre keinen Schutz bietet.
3. **Keine Referenzbehauptung ohne Pilot-Seitenbeleg.** Auch der kuratierte Artikel mit
   `confidence: high` ersetzt nicht Dokument, PDF-Seite, Seitenregion und technischen
   Review.
4. **Schreibweise nicht still entscheiden.** `Pro-Finder` aus der Referenz bleibt ein
   Beleg im offenen `TERM-001`; Pilottexte verwenden bis zur Entscheidung
   `Pro-finder`.
5. **Glossar nicht als alleinige technische Quelle verwenden.** Es verkürzt
   `vor SN045` auf Micro-SIM und lässt die Mini-SIM-Generation `0699-001` bis
   `0699-007` aus (`wiki/de/glossar.md:184-185`).
6. **App-Schwelle nicht aus dem Glossar kopieren.** Das Glossar nennt App-Nutzung erst
   beziehungsweise primär ab SN-045 (`wiki/de/glossar.md:230-231`), der ausführliche
   Basisartikel nennt Kompatibilität ab `0699-013`.
7. **Guthabencodes nicht verkürzen.** Das Glossar zeigt `100#`/`101#`; der Basisartikel
   behandelt USSD-Codes providerabhängig, beispielsweise `*100#`. Ohne aktuellen
   Providerbeleg keinen Code veröffentlichen.
8. **Geofencing nicht als exakte Geometrie versprechen.** Die Referenz variiert zwischen
   `> ~1 km` und ungefähr `500 m bis 1 km`.
9. **Keine statischen Provider- oder Länderfreigaben aus historischen FAQs ableiten.**
10. **Keine RAG-Derivate als unabhängige Primärquellen zählen.** Dubletten dürfen erst
    nach Inhalts- oder Hashvergleich zusammengeführt werden.
11. **Keine plattformspezifische Architektur kopieren.** Wiki-Routen, Rollenmodell,
    UI-Fallbacks, Link-Dictionary und harte Heading-Anker passen nicht automatisch zur
    öffentlichen HTML-first-Anleitung des Piloten.
12. **Historische Masterplanabschnitte nicht als aktuellen Auftrag lesen.** Die
    Referenzplattform ist standalone; frühere TYPO3-Planungen sind nur Historie.
13. **Keine automatische Freigabe aus konsistenten Übersetzungen ableiten.** Bewahrte
    Tokens und gleiche Struktur ersetzen weder unabhängigen Sprachreview noch
    technischen Review.

## 9. Zulässiger Transfer in den Pilot

Ein Referenzbefund darf erst in veröffentlichbaren Pilotinhalt übergehen, wenn:

1. der passende Original-PDF-Record und die konkrete PDF-Seite verknüpft sind,
2. die Generation `bis SN-044` oder `ab SN-045` eindeutig feststeht,
3. Abweichungen zu anderen Quellen in `docs/DISCREPANCIES.md` stehen,
4. Terminologiekonflikte in `docs/TERMINOLOGY_CONFLICTS.md` entschieden oder sichtbar
   offen sind,
5. sicherheitskritische Werte den separaten technischen Review bestanden haben,
6. interne Quelle und interner Ableitungsweg nicht im öffentlichen Artefakt landen,
7. die Übersetzung geschützte Tokens bewahrt und unabhängig sprachlich geprüft wurde,
8. die öffentliche Darstellung mit Tastatur, Screenreader, Zoom, Reflow und
   Forced Colors geprüft wurde.
