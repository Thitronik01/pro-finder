# IST-Audit der Ausgangsquellen

Stand: 2026-08-07. Dieser Audit ist fortlaufend; der exakte Seitenzähler steht im
generierten `PROJECT_STATUS.md`. Nur Seiten mit einem Record-Status ungleich
`not_started` wurden tatsächlich bearbeitet.

## Prüfbasis

| ID            | Variante                                                    | Seiten | SHA-256         | Tags                                         | Lesezeichen |
| ------------- | ----------------------------------------------------------- | -----: | --------------- | -------------------------------------------- | ----------: |
| DOC-KA-SN044  | Kurzanleitung bis SN-044                                    |      2 | `f737c39a…ceb`  | vorhanden, Qualität seitenweise zu prüfen    |           0 |
| DOC-BMA-SN044 | Bedienungs-/Montageanleitung 2.6 bis SN-044                 |     72 | `981e5a86…1e8`  | vorhanden, Qualität offen                    |           0 |
| DOC-KA-SN045  | Kurzanleitung ab SN-045                                     |      2 | `a73a4dc7…c23`  | keine                                        |           0 |
| DOC-IBA-SN045 | Installations-/Bedienungsanleitung ab SN-045, zehn Sprachen |    247 | `a1e1ae9b…4bb2` | vorhanden, sichtbarer Text vielfach nur Bild |           0 |

Vollständige Hashes, URLs, Dateigrößen, PDF-Versionen, Revisionen und Datumsfelder:
`sources/inventory/documents.json`. Originale bleiben unverändert.

## Methodik

Jede Seite wird als Bild gerendert und visuell geprüft; pypdf/pdfplumber dienen nur
ergänzend für Metadaten und Text. Batch 1 und 2 wurden mit gebündeltem Poppler bei 180 dpi
gerendert, Batch 3 und 4 mit PyMuPDF 1.27.2 bei 150 dpi, weil in der Arbeitsumgebung kein
`pdftoppm` verfügbar war. Das verwendete Werkzeug steht je Seite im `inspected_note` des
Records. Erfasst werden Seitentyp, Sprache/Sprachwechsel,
Textzugänglichkeit, Tags/Lesereihenfolge, Überschriften, Tabellen, Abbildungen,
Warnungen, technische Werte, Widersprüche, Terminologie und nächste Aktion. Ein
Extraktionsergebnis allein gilt nicht als visuelle Prüfung.

## Dokumentübergreifende Befunde

- vier Dokumentvarianten ohne geführte, sichere Versionsauswahl;
- PDF-first statt gleichwertiger HTML-Anleitung;
- keine PDF-Lesezeichen; komplexe Falt-/Mehrsprachenlayouts ohne robuste Lesereihenfolge;
- kleine Schrift, geringe Reflow-Fähigkeit und Sprachwechsel ohne maschinenlesbare Tags;
- funktionale Information über Farbe, Flaggen, Verbindungslinien, Position, Symbole und
  nummerierte Bildmarken ohne vollständige Textalternative;
- uneinheitliche Produktschreibweisen und kein kanonischer Content-Layer;
- DOC-IBA-SN045 enthält auf einem großen Teil der Seiten keine brauchbare Textebene;
  der Seitenrecord ist maßgeblich, nicht eine pauschale OCR-Annahme.

### Textebene von DOC-IBA-SN045, vollständig ausgewertet

Am 2026-08-07 wurden alle 247 Seiten mit PyMuPDF auf extrahierbaren Text geprüft:

| Befund                                           | Seiten |    Anteil |
| ------------------------------------------------ | -----: | --------: |
| überhaupt keine Textebene                        |    202 |    81,8 % |
| Textebene nur aus Steuerzeichen U+0003           |     34 |    13,8 % |
| Textebene nur aus vier Aufzählungszeichen `••••` |     10 |     4,0 % |
| lesbarer Fließtext                               |  **1** | **0,4 %** |

Die einzige Seite mit echtem Text ist das mehrsprachige Gesamt-Deckblatt (PDF-Seite 1,
484 lesbare Zeichen). Die zehn Seiten mit `••••` sind je einmal pro Sprachteil die Seite
mit der Löschprozedur für Zielrufnummern; extrahiert werden nur die Listenpunkte, nicht
deren Text.

Die 34 Seiten mit U+0003 sind der schwerwiegendere Fall: Werkzeuge melden dort „Text
vorhanden", liefern aber ausschließlich Steuerzeichen. Eine automatische Prüfung, die nur
die Zeichenzahl auswertet, hält diese Seiten fälschlich für zugänglich. Das Feld
`extractable_chars` in den Seitenrecords nennt deshalb die Rohzahl, der zugehörige
Eintrag unter `accessibility_issues` die tatsächliche Lesbarkeit.

Damit sind 246 von 247 Seiten ohne jede nutzbare Textalternative. Das ist der zentrale
Beleg dafür, dass die HTML-Fassung nicht eine Komfortergänzung, sondern der einzige
barrierefreie Zugang ist.

## Bestätigte kritische/hohe Befunde

- DOC-KA-SN045 Seite 1: IT↔DA und NL↔SV in mehreren Status-LED-Zeilen vertauscht;
  schwedische Zeile nennt `GPS` statt `GSM`.
- DOC-KA-SN045 Seite 2: schwedischer SIM-Block ab Schritt 2 überwiegend französisch;
  englische Zwischenüberschrift französisch; weitere Fehlübersetzungen/Dubletten.
- DOC-KA-SN045 Seite 2: Bild-, Farb- und Pinzuordnungen sind ohne gleichwertige
  textliche Schrittfolge nicht robust; SIM-PIN und Anschlüsse sind sicherheitskritisch.
- DOC-IBA-SN045 Seite 1: `Pro-Finder`, fehlerhafter Ortsname und norwegische statt
  dänischer Flagge; Seite 2 fast ohne extrahierbaren Text.
- DOC-IBA-SN045 Inhaltsverzeichnisse sind vielfach Bildinhalt, nicht verlinkt und nutzen
  eine interne Seitenzählung mit Versatz zur PDF-Seite.
- DOC-IBA-SN045: SMS-Befehle sind sprachabhängig dokumentiert (`fence an`/`fence aus`
  gegenüber `fence on`/`fence off`, `SCHARF`/`UNSCHARF` gegenüber `ARM`/`DISARM`) und
  innerhalb einer Sprachfassung widersprüchlich geschrieben (`POS` gegenüber `position`).
  Damit ist die Projektannahme, SMS-Befehle seien sprachneutrale geschützte Token,
  widerlegt (DSC-013, DSC-014).
- DOC-IBA-SN045 Seite 46: Die englische Überschrift 5.5 ist wortgleich mit 5.1, obwohl der
  Abschnitt die Ausgangssteuerung behandelt; die deutsche Fassung ist korrekt (DSC-015).
- DOC-IBA-SN045: Der App-Bezug wird ausschließlich über QR-Codes angeboten (Seite 38, im
  deutschen Teil Seite 14, im französischen Seite 63) – ohne Klartext-URL, Kurzadresse oder
  Suchbegriff. Das ist der Einkanal-Zugang, den der Pilot mit Karte und HTML-Anleitung
  auflösen soll.
- DOC-IBA-SN045: Die Sprachfassungen sind **inhaltlich nicht gleichwertig**. Die
  SIM-Anbieterempfehlung lautet deutsch t-mobile/Vodafone, englisch nur allgemein
  „M2M-Karte", französisch namentlich DOMOTEC (DSC-027); ein technischer Wert weicht ab
  (DSC-020); der französische Teil umfasst 25 statt 23 interne Seiten (DSC-021).
- DOC-IBA-SN045: Auch der **deutsche Master enthält Fehler**. Der Verweis auf die
  Ausgangssteuerung nennt in allen drei geprüften Sprachen Kapitel 5.4 statt 5.5; der
  Fehler stammt aus dem deutschen Original und wurde korrekt mitübersetzt (DSC-028).
  Ebenso wurde der Widerspruch „ALARM" gegen „AAlarm" in die Übersetzungen übernommen
  statt bemerkt (DSC-016). Ein geprüfter deutscher Master ist damit nicht dasselbe wie ein
  übernommener deutscher Text.

Einzelbelege und Status stehen in `DISCREPANCIES.md` und in den Seitenrecords. Fehler aus
einer Sprachfassung werden nicht in den Master oder andere Sprachen übernommen.

## Barrierefreiheits-Baseline

Am 2026-08-06 wurden die offiziellen Ausgangspunkte erneut geprüft:

- WCAG 2.2 ist die aktuelle W3C Recommendation; Pilotziel ist A und AA für vollständige
  Seiten und Prozesse: https://www.w3.org/TR/WCAG22/
- BFSG und die am 10.07.2026 geänderte BFSGV verlangen unter anderem wahrnehmbare,
  verständliche Produktinformationen über mehr als einen sensorischen Kanal. Die konkrete
  rechtliche Einordnung des Pro-finder muss THITRONIK juristisch bestätigen:
  https://www.gesetze-im-internet.de/bfsg/ und
  https://www.gesetze-im-internet.de/bfsgv/BJNR092800022.html
- Die aktuell im EU-Amtsblatt harmonisierte Web-Referenz bleibt EN 301 549 V3.2.1.
  ETSI veröffentlicht bereits den Entwurfsstand V4.1.0 (06/2026); dieser ist zu beobachten,
  aber nicht still als harmonisierte Fassung zu behaupten.

Neu erzeugte Sekundär-PDFs müssen gesondert auf PDF/UA geprüft werden. Der Pilot erzeugt
derzeit keine neue freigegebene PDF-Fassung.

## Nächste Auditfolge

1. aktuellen 10–20-Seiten-Batch von DOC-IBA-SN045 abschließen;
2. Records auf `inspected` begrenzen, bis Extraktion und unabhängige Validierung vorliegen;
3. Widersprüche und Asset-Anfragen in die Register übertragen;
4. deutschen Vertical Slice aus validierten Seiten aufbauen;
5. danach DOC-BMA-SN044 für den repräsentativen Generationstest beginnen.
