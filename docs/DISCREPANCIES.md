# Widerspruchs- und Fehlerregister

Grundsatz: Widersprüche und Fehler in den Quellen werden dokumentiert, nicht geraten und
nicht stillschweigend korrigiert. Jede Position nennt Dokument, Seite, Beleg (wörtliches
Zitat) und Status. Sicherheitsrelevante Positionen benötigen technischen Review.

Status: `offen` · `in_klaerung` · `geloest` · `akzeptiert`

## Kritisch / hoch

### DSC-001 – Status-LED-Übersicht: Sprachlabels IT↔DA und NL↔SV vertauscht (ab SN-045)

- **Dokument:** DOC-KA-SN045, Seite 1, Abschnitt 5, Zustände 1, 2 und 6
- **Befund:** In den Zeilen der Zustände 1, 2 und 6 sind die Texte der Sprachlabels
  paarweise vertauscht: unter „IT:" steht Dänisch, unter „DA:" Italienisch, unter „NL:"
  Schwedisch, unter „SV:" Niederländisch.
- **Beleg (Zustand 1):** „IT: Blinker rødt/gult" (tatsächlich Dänisch) · „NL: Blinkar
  rött/gult" (tatsächlich Schwedisch) · „DA: Lampeggia in rosso/giallo" (tatsächlich
  Italienisch) · „SV: Knippert rood/geel" (tatsächlich Niederländisch). Zustände 3, 4, 5,
  7, 8, 9 sowie DE/EN/FR/CZ sind korrekt zugeordnet.
- **Prüfweg:** Erst-Audit + unabhängige adversariale Gegenprüfung (Textextraktion und
  visuelle Prüfung des Renderings), 2026-08-06. Hypothese aus dem Projektauftrag damit
  **bestätigt**, präzisiert auf Seite 1 (nicht Seite 2).
- **Schwere:** hoch (Nutzer der vier betroffenen Sprachen erhalten falsch beschriftete
  Statusinformationen) · **Status:** offen – an THITRONIK zu melden

### DSC-002 – Sachfehler „GPS" statt „GSM" in der schwedischen LED-Zeile (ab SN-045)

- **Dokument:** DOC-KA-SN045, Seite 1, Abschnitt 5, Zustand 2
- **Beleg:** „SV: Nätsökning/Ingen GPS-mottagning" – alle übrigen Sprachen meinen
  GSM-Empfang („DE: Netzsuche/kein GSM Empfang", „EN: Network search/no GSM reception").
  Hinweis: Der Text unter dem Label „SV" ist zudem gemäß DSC-001 tatsächlich
  Schwedisch-beschriftetes Niederländisch bzw. vertauscht – der Sachfehler betrifft die
  als Schwedisch gesetzte Zeile.
- **Schwere:** hoch (falsche technische Aussage) · **Status:** offen

### DSC-003 – SIM-Abschnitt: Sprachmischung im SV- und EN-Block (ab SN-045)

- **Dokument:** DOC-KA-SN045, Seite 2, Abschnitt 2
- **Beleg:** Unter der schwedischen Flagge sind nur Intro, iPhone-Warnsatz und Schritt 1
  schwedisch; die Überschriften „ATTENTION !", „Configurer la carte SIM :", „Activer
  Pro-Finder :" sowie die Schritte 2–9 sind Französisch („2. Désactivez la boîte de
  réception et toutes les lignes d'appel."). Im englischen Block steht die französische
  Zwischenüberschrift „Configurer la carte SIM :" über englischen Schritten.
- **Schwere:** hoch (Anleitung in falscher Sprache, sicherheitsrelevanter Abschnitt
  SIM/PIN) · **Status:** offen

### DSC-013 – SMS-Befehle sind sprachabhängig; Gültigkeitsbereich ungeklärt (ab SN-045)

- **Dokument:** DOC-IBA-SN045, deutsche Seite 21 und englische Seite 45 (beide tragen die
  interne Nummer „Seite/Page 19 von/of 23"), Abschnitt 5.2; zusätzlich deutsche Seite 20
  und englische Seite 43, Hilfe-SMS.
- **Befund:** Dieselben Funktionen werden je Sprachfassung mit unterschiedlichen
  SMS-Befehlen dokumentiert.
- **Beleg (Geofencing):** DE „Senden Sie eine SMS mit folgendem Text an die Nummer des
  Pro-finder: _fence an_ … bis der Pro-finder eine SMS mit dem Text _fence aus_ erhält."
  gegenüber EN „Send an SMS with the following text to the Pro-finder number: _fence on_
  … until Pro-finder receives an SMS with the text _fence off_".
- **Beleg (Hilfe-SMS):** DE „SCHARF / UNSCHARF / STATUS / POS" gegenüber EN „Invalid
  command! Possible: ARM, DISARM, STATUS, POS."
- **Beleg (Ausgänge, Seiten 23 und 47):** DE `a an` / `a aus` / `a impuls` gegenüber EN
  `a on` / `a off` / `a pulse`. Der Zeitbefehl `a %min%` ist in beiden Fassungen gleich.
- **Beleg (Anlernmodus, Seiten 24 und 48):** DE `anlernmodus an` / `anlernmodus aus`
  gegenüber EN `teach mode on` / `teach mode off`. Hier ist nicht nur die Schaltpartikel,
  sondern das gesamte Befehlswort übersetzt.
- **Muster:** Betroffen sind alle Befehle mit Wortbestandteilen; rein alphanumerische
  Befehle (`status`, `position`, `a %min%`) sind identisch. Das spricht dafür, dass die
  Lokalisierung bewusst erfolgte – bestätigt ist das nicht.
- **Offen:** Akzeptiert das Gerät beide Befehlssätze, richtet es sich nach einer
  Konfiguration, oder ist eine der beiden Fassungen falsch? Aus den PDFs nicht ableitbar.
- **Prüfweg:** Beide Seiten unabhängig gerendert und visuell verglichen, 2026-08-07.
- **Schwere:** hoch (ein nicht akzeptierter Befehl lässt Geofencing unbemerkt aktiv oder
  inaktiv; der Nutzer erhält keine Fehlermeldung, sondern nur die Hilfe-SMS) ·
  **Status:** offen – technischer Review durch THITRONIK zwingend erforderlich
- **Folge für das Projekt:** Die Regel „SMS-Befehle sind vor Übersetzung geschützte Token"
  (AGENTS.md) ist so nicht haltbar. Bis zur Klärung darf kein Befehl automatisch in eine
  Zielsprache übernommen **oder** übersetzt werden; siehe
  [TERMINOLOGY_CONFLICTS.md](TERMINOLOGY_CONFLICTS.md).

### DSC-014 – Widersprüchliche Schreibweise der Statusbefehle innerhalb einer Sprachfassung (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seiten 43 und 46
- **Beleg:** Die Hilfe-SMS auf Seite 43 nennt „STATUS" und „POS" in Großschreibung, die
  Abschnitte 5.3 und 5.4 auf Seite 46 dagegen „_status_" und „_position_" in
  Kleinschreibung. „POS" und „position" sind zudem unterschiedliche Wörter.
- **Offen:** Unterscheidet der Pro-finder Groß- und Kleinschreibung? Sind „POS" und
  „position" beide gültig? Die deutsche Fassung zeigt dasselbe Muster
  („POS" gegenüber „_position_", Seiten 20 und 22).
- **Schwere:** hoch (sicherheitskritischer Befehl, betrifft beide geprüften Sprachen) ·
  **Status:** offen – technischer Review

### DSC-020 – Technischer Wert weicht zwischen den Sprachfassungen ab (ab SN-045)

- **Dokument:** DOC-IBA-SN045, deutsche Seite 25 und englische Seite 49 (beide „Seite/Page
  23 von/of 23"), Abschnitt 6.1
- **Beleg:** Stromaufnahme im Normalbetrieb – DE „ca. 16–21 mA" gegenüber EN „approx.
  21mA". Die englische Fassung nennt nur den oberen Wert und unterschlägt die Untergrenze.
  Alle übrigen Werte der Tabelle (9–30 V, ca. 37 mA Netzsuche, 2 × 12 V/500 mA, −10 bis
  +80 °C, Bänder, GPS/QZSS, zehn Zielrufnummern, Nano-SIM) stimmen überein.
- **Prüfweg:** Beide Seiten unabhängig gerendert und Wert für Wert verglichen, 2026-08-07.
- **Nachtrag:** Die französische Fassung (Seite 76) nennt ebenfalls „env. 16–21 mA".
  Zwei von drei Fassungen stimmen überein – **die englische ist der Ausreißer**, nicht die
  deutsche.
- **Schwere:** hoch (technische Spezifikation; relevant für Strombudget und Auslegung der
  Absicherung) · **Status:** offen – technischer Review

### DSC-026 – Französischer Geofencing-Befehl weicht von allen anderen ab (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seite 61, Abschnitt 1.5.3; dieselbe Passage
  deutsch auf Seite 12 und englisch auf Seite 36
- **Beleg:** FR „Pour ce faire, envoyez un SMS via l'application THITRONIK® contenant le
  message « desactiver le gardiennage » au Pro-finder." gegenüber DE „fence aus" und
  EN „fence off".
- **Befund:** Drei Auffälligkeiten auf einmal. Erstens ist die französische Angabe kein
  kurzer Befehl, sondern eine beschreibende Wortgruppe – sie sieht aus, als sei der Befehl
  wie Fließtext übersetzt worden. Zweitens fehlt der Akzent („desactiver" statt
  „désactiver"); bei einem literal zu tippenden Befehl entscheidet das über Erfolg oder
  Misserfolg. Drittens nennt nur die französische Fassung die THITRONIK App als Sendeweg,
  die beiden anderen eine SMS an die Modulnummer.
- **Warum das gefährlich ist:** Der Abschnitt existiert gerade deshalb, weil GPS-Reflexionen
  in Hallen Fehlalarme auslösen. Wird der Befehl nicht angenommen, bleibt Geofencing aktiv,
  der Nutzer erhält keine Fehlermeldung und genau die Fehlalarme treten weiter auf, die er
  abstellen wollte.
- **Prüfweg:** Alle drei Seiten unabhängig gerendert und verglichen, 2026-08-07.
- **Schwere:** hoch · **Status:** offen – technischer Review; gehört zu BLK-005

### DSC-027 – Drei Sprachfassungen, drei verschiedene SIM-Anbieterempfehlungen (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Abschnitt 2.1 – deutsche Seite 13, englische Seite 37,
  französische Seite 62
- **Beleg:** DE empfiehlt t-mobile und Vodafone; EN nennt nur allgemein eine „so-called M2M
  card" mit Verweis auf die Produkt-FAQ; FR empfiehlt namentlich „une carte « machine to
  machine » de la société **DOMOTEC**".
- **Befund:** Die Sprachfassungen sind inhaltlich nicht gleichwertig. Nur die französische
  Fassung nennt einen konkreten Drittanbieter, der in keiner anderen Fassung vorkommt. Die
  tschechische Fassung (Seite 88) bleibt wie die englische allgemein; über vier geprüfte
  Fassungen ergeben sich damit drei Varianten.
  Zusätzlich weicht die Liste der abzuschaltenden Zusatzfunktionen ab (FR nennt zusätzlich
  „la mise en attente" und „le double appel par SMS") und die Prepaid-Empfehlung nennt
  französisch zusätzlich das Aufladen „via internet".
- **Schwere:** hoch (kommerziell und rechtlich relevant; zudem Beleg dafür, dass die
  Sprachfassungen nicht denselben Inhalt transportieren) · **Status:** offen – Klärung
  durch THITRONIK, ob eine der Empfehlungen verbindlich ist

### DSC-028 – Falscher Kapitelverweis bereits im deutschen Master (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Abschnitt 1.3 – deutsche Seite 9, englische Seite 33,
  französische Seite 57
- **Beleg:** DE „In allen Betriebsarten können die Ausgänge, wie unter _5.4 Position mit dem
  Smartphone abfragen_ beschrieben, gesteuert werden." Abschnitt 5.4 behandelt die
  Positionsabfrage; die Ausgangssteuerung steht in 5.5. Englisch und Französisch übernehmen
  den Verweis wortgetreu.
- **Befund:** Anders als DSC-015 ist das **kein Übersetzungsfehler**: der deutsche Master
  selbst ist falsch, die Übersetzungen sind korrekte Übertragungen eines fehlerhaften
  Originals. Auf derselben französischen Seite 59 wird für dieselbe Sache korrekt auf 5.5
  verwiesen – der Fehler ist also auch dokumentintern inkonsistent.
- **Nachtrag 2026-08-07:** Auch die tschechische Fassung (Seite 84) nennt 5.4, und auch
  dort verweist Abschnitt 1.4 auf der Folgeseite korrekt auf 5.5. Damit ist der Fehler in
  **vier von vier** geprüften Sprachfassungen belegt, samt derselben dokumentinternen
  Inkonsistenz.
- **Folge für das Projekt:** Der deutsche Master darf nicht als geprüfte Wahrheit behandelt
  werden. Auch er braucht einen eigenen technischen Review, nicht nur die Übersetzungen.
- **Schwere:** hoch (Projektannahme betroffen; inhaltlich mittel) · **Status:** offen

### DSC-032 – Fehlerhafte Supporttelefonnummer in der französischen Fassung (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seite 76, Abschnitt 6.4
- **Beleg:** „contacter notre support technique gratuitement par téléphone au
  **+49 4351800 902 104 76744-112**". Die deutsche Seite 25 und die englische Seite 49
  nennen übereinstimmend „+49 4351 76744-112".
- **Befund:** In die Rufnummer ist offenbar eine zweite Nummer hineingeraten
  („800 902 104" – der Form nach eine Servicenummer). Die Nummer ist in dieser Gestalt
  nicht wählbar.
- **Warum das zählt:** Es ist genau der Kontakt, den Nutzer im Störungsfall wählen. Für
  einen Barrierefreiheitspiloten, dessen Setup-Karte einen Supporthinweis tragen soll, ist
  ein unbrauchbarer Supportkanal ein harter Mangel.
- **Zusatz:** Nur die französische Fassung bezeichnet den Support als kostenfrei
  („gratuitement"); deutsch und englisch treffen diese Aussage nicht.
- **Schwere:** hoch · **Status:** offen – an THITRONIK zu melden

### DSC-033 – Französischer Befehlssatz ist vollständig eigenständig – mit einer Lücke (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 61, 71, 72, 73, 74 und 75
- **Befund:** Die französische Fassung dokumentiert durchgängig eigene Befehle, nicht nur
  an einer Stelle. Damit ist DSC-026 präzisiert: es ist kein einmaliger Ausrutscher im
  Fließtext.

| Funktion        | Deutsch          | Englisch        | Französisch                   | Tschechisch     |
| --------------- | ---------------- | --------------- | ----------------------------- | --------------- |
| Geofencing ein  | `fence an`       | `fence on`      | `activer le gardiennage`      | `plot zap`      |
| Geofencing aus  | `fence aus`      | `fence off`     | `desactiver le gardiennage`   | `plot vyp`      |
| Statusbericht   | `status`         | `status`        | `rapport d etat`              | `stav`          |
| Position        | `position`       | `position`      | `position`                    | `poloha`        |
| Ausgang A ein   | `a an`           | `a on`          | `activer la sortie A`         | `a zap`         |
| Ausgang A aus   | `a aus`          | `a off`         | `desactiver la sortie A`      | `a vyp`         |
| Ausgang gepulst | `a impuls`       | `a pulse`       | `sortie A impulsion`          | `a impuls`      |
| Ausgang Zeit    | `a %min%`        | `a %min%`       | `a %min%`                     | `a %min%`       |
| Anlernmodus ein | `anlernmodus an` | `teach mode on` | `activer le mode d appairage` | `uceni zap`     |
| Hilfe-SMS       | SCHARF/UNSCHARF  | ARM/DISARM      | ACTIVER/DESACTIVER            | ZAPNOUT/VYPNOUT |

Vier geprüfte Sprachfassungen, vier eigene Befehlssätze. Nur `a %min%` lautet in allen
vier gleich; `a impuls` ist in Deutsch und Tschechisch identisch, im Englischen aber
übersetzt. Die Lokalisierung ist damit **nicht einmal in sich konsistent** – weder
sprachübergreifend noch innerhalb einer Fassung.

Die tschechischen Ausgangs- und Anlernbefehle stehen auf den internen Seiten 20–22
(PDF-Seiten 97–99) und werden in Batch 9 ergänzt. `POS` ist bislang der einzige Befehl,
der in allen vier geprüften Fassungen identisch lautet.

- **Der Widerspruch:** Auf Seite 74 sind drei der vier Ausgangsbefehle lokalisiert, der
  zeitgesteuerte bleibt `a %min%`. Entweder akzeptiert das Gerät gemischte Befehlssätze,
  oder eine der beiden Formen ist falsch. Dasselbe gilt für `position`, das als einziger
  Befehl in allen drei Fassungen gleich lautet.
- **Beobachtung:** Alle französischen Befehle sind konsequent **ohne Akzent** gesetzt
  („desactiver", „rapport d etat", „mode d appairage"), im Fließtext daneben aber mit
  Akzent. Der tschechische Teil zeigt dasselbe Muster von der anderen Seite: sämtliche
  **Geräte-SMS** sind dort ohne Diakritika gesetzt („Neplatny povel! Mozne povely",
  „Vloupani dvere/okno", „Napajeni mene nez 11.2 V"), während der umgebende Fließtext
  diakritische Zeichen verwendet. Auch die Beispielwerte nutzen den Dezimalpunkt („11.2 V")
  statt des im Fließtext üblichen Kommas.
- **Was daraus folgt:** Das Gerät scheint sowohl Eingaben als auch Ausgaben zu lokalisieren,
  dabei aber durchgängig ASCII zu verwenden. Das macht die vier unterschiedlichen
  Befehlssätze plausibler – und die Projektregel „SMS-Befehle sind sprachneutrale geschützte
  Token" entsprechend unhaltbarer. Bestätigt ist beides nicht; genau deshalb braucht es den
  technischen Review.
- **Zusatzbeleg:** Die tschechische Seite 87 setzt als einzige eine englische Glosse hinter
  den Befehl – „plot vyp" (plot off). Ob damit zwei gültige Formen gemeint sind oder nur
  eine Lesehilfe, ist nicht ableitbar.
- **Schwere:** hoch · **Status:** offen – technischer Review; gehört zu BLK-005

### DSC-034 – Doppelte Verneinung kehrt eine sicherheitsrelevante Aussage um (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seite 70, Abschnitt 4
- **Beleg:** „Avertissement de tension (**pas non applicable** en mode de fonctionnement B"
  gegenüber DE „Spannungswarnung (nicht in Betriebsart B" und EN „Voltage warning (not in
  operating mode B".
- **Befund:** „pas non applicable" ist eine doppelte Verneinung. Ob die Spannungswarnung
  in Betriebsart B gilt oder nicht, ist aus der französischen Fassung nicht ableitbar –
  bei einer Warnung, die vor Tiefentladung schützt.
- **Schwere:** hoch · **Status:** offen

### DSC-038 – Tschechischer Geofencing-Hinweis widerspricht sich selbst (ab SN-045)

- **Dokument:** DOC-IBA-SN045, tschechische Seite 96, Abschnitt 5.2
- **Beleg:** „Když je WiPro III **odjištěn**, je geofencing automaticky aktivován …
  Geofencing se proto automaticky deaktivuje, když je zařízení WiPro III **odjištěno**."
- **Befund:** Beide Sätze nennen dieselbe Bedingung – „odjištěn" (entschärft) –, der eine
  für die Aktivierung, der andere für die Deaktivierung des Geofencings. Die deutsche,
  englische und französische Fassung nennen an diesen Stellen **gegensätzliche** Zustände:
  scharfgeschaltet aktiviert, unscharf deaktiviert.
- **Prüfweg:** Der Widerspruch ergibt sich aus der Wortwiederholung innerhalb desselben
  Absatzes und dem Vergleich mit drei anderen Sprachfassungen – dafür sind keine
  vertieften Tschechischkenntnisse nötig. Welche Formulierung korrekt ist, muss ein
  muttersprachlicher Review entscheiden.
- **Schwere:** hoch (der Hinweis regelt, wann Geofencing ohne SMS aktiv ist; er ist in
  dieser Form nicht befolgbar) · **Status:** offen

### DSC-039 – Fehlübersetzung des Normalbetriebs in der tschechischen LED-Tabelle (ab SN-045)

- **Dokument:** DOC-IBA-SN045, tschechische Seite 92, Kapitel 3, Zustände 6, 8 und 9
- **Beleg:** Zustand 8 lautet „Bliká žlutozeleně: **Přihlášen (příjem)** + nejsou k
  dispozici žádná cílová čísla", Zustand 9 dagegen „Bliká zeleně: **rezervováno (recepce)**
  - dostupná cílová čísla".
- **Befund:** Beide meinen dieselbe Lage „im Netz eingebucht, Signal vorhanden". In
  Zustand 8 ist sie mit „Přihlášen (příjem)" zutreffend wiedergegeben, in Zustand 9 mit
  „rezervováno (recepce)" – wörtlich „reserviert (Rezeption)". Zustand 6 verwendet
  ebenfalls „Rezervováno". Die Übersetzungskette dürfte über „eingebucht" → „booked" →
  „reserviert" und „signal/reception" → „Rezeption" gelaufen sein.
- **Warum das zählt:** Betroffen ist ausgerechnet **Zustand 9 – der Normalbetrieb**. Wer
  prüfen will, ob das Gerät ordnungsgemäß arbeitet, findet dort eine sinnentstellte
  Beschreibung. Die Status-LED ist zudem der einzige Rückkanal des Geräts ohne SMS.
- **Schwere:** hoch · **Status:** offen – tschechischer Sprachreview

## Mittel

### DSC-021 – Französischer Sprachteil hat 25 statt 23 interne Seiten (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 51 ff. („Page 1 de 25") gegenüber
  deutscher Seite 3 und englischer Seite 27 („Seite/Page 1 von/of 23")
- **Befund:** Die interne Paginierung ist kein sprachübergreifender Anker. Kapitel liegen ab
  Kapitel 3 auf abweichenden internen Seiten (FR: Kapitel 3 auf 18, Kapitel 4 auf 19,
  Kapitel 5 auf 21; DE/EN: 16/15, 17/16, 19/19).
- **Geklärt am 2026-08-07** nach Prüfung des vollständigen französischen Teils: Es gibt
  **keine** zusätzlichen Inhalte. Der Text läuft an drei Stellen auf Folgeseiten über –
  1.5.3 bekommt eine eigene interne Seite 11, die Abschnitte 2.4 und 2.9 enden jeweils
  mitten im Satz und werden auf einer fast leeren Folgeseite fortgesetzt (interne Seiten
  14 und 18). Die Differenz ist rein typografisch.
- **Zusätzlich:** Der Teil umfasst tatsächlich **26** interne Seiten, nicht 25. Die letzte
  Seite trägt die Fußzeile „Page 26 de 25" – die Zählung im Dokument ist selbst falsch.
- **Folge:** Segment-Mapping darf nicht über die interne Seitenzahl erfolgen, sondern nur
  über Kapitelnummer und PDF-Seite. **Status:** offen

### DSC-022 – Eingebettete Bildbeschriftung in keiner Sprachfassung lokalisiert (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Abschnitt 1.2 – deutsche Seite 8, englische Seite 32,
  französische Seite 56
- **Beleg:** Die Beschriftung am Antennenfoto lautet in allen drei Fassungen deutsch
  „GPS-Antenne (Optional)", während die Legende danebensteht als „External GPS antenna
  (optional)" (EN) beziehungsweise „Antenne GPS externe (en option)" (FR).
- **Bewertung:** Die Grafik wurde offenbar als fertiges Bild in alle Sprachteile übernommen.
  Bestätigt sind DE, EN, FR und CS (tschechische Seite 83) – vier von vier geprüften
  Fassungen. Dass alle zehn betroffen sind, ist damit sehr wahrscheinlich.
- **Schwere:** mittel (Terminologie und Verständlichkeit; verschärft, weil die Legende
  ohnehin nur Bildinhalt ist) · **Status:** offen

### DSC-023 – Fundort der Seriennummer wird nirgends präzisiert (ab SN-045)

- **Dokument:** DOC-IBA-SN045, deutsche Seite 25 und englische Seite 49, Abschnitt 6.4
- **Beleg:** „Diese finden Sie entweder auf dem Gerät selbst oder in der THITRONIK® App."
  beziehungsweise „You can find these either on the device itself or in the THITRONIK® app."
  Weder eine Position am Gerät noch eine Leseregel wird genannt.
- **Bewertung:** Bestätigt, dass Release-Blocker 3 eine echte Quellenlücke ist und nicht
  durch genaueres Lesen aufzulösen. Die Startseite darf keine Ziffernregel behaupten.
  Auf dem Produktfoto der französischen Seite 54 ist auf der Kurzanleitung „SN 0699-045+"
  erkennbar – das belegt das Präfix, nicht den Fundort am Gerät.
- **Schwere:** mittel (blockiert die geführte Versionsauswahl) · **Status:** offen –
  Angabe durch THITRONIK erforderlich

### DSC-024 – Französische Überschrift 2.4 ohne Verb (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 51 (Inhaltsverzeichnis) und 63
  (Überschrift auf der Seite selbst)
- **Beleg:** Beide lauten nur „2.4 Pro-finder", während DE „Pro-finder aktivieren" und
  EN „Activating Pro-finder" nennt. Der Fehler steht also nicht nur im Verzeichnis, sondern
  auch in der Abschnittsüberschrift. Zusätzlich ist 6.2 „Consignes de tri recyclage"
  unvollständig formuliert.
- **Schwere:** mittel (Navigation) · **Status:** offen

### DSC-029 – Französisches Inhaltsverzeichnis nennt falsche Seitenzahlen (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 51 und 52
- **Beleg:** 1.5.3 ist als interne Seite 10 verzeichnet, steht aber auf 11; 2.5 ist als 14
  verzeichnet, beginnt aber auf 15; 2.8 ist als 15 verzeichnet, beginnt aber auf 16. Die
  Einträge 2 bis 2.4 stimmen dagegen.
- **Befund:** Kein gleichmäßiger Versatz, sondern punktuelle Fehler. Das passt dazu, dass
  der französische Text auf zwei zusätzliche interne Seiten umbricht (DSC-021), das
  Verzeichnis danach aber nicht neu erzeugt wurde.
- **Schwere:** mittel (Navigation; das Verzeichnis ist zudem nicht verlinkt, sodass die
  Seitenzahl der einzige Weg ist) · **Status:** offen

### DSC-030 – Zwei französische Benennungen für die Masternummer (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 65 und 66
- **Beleg:** Seite 65 und die Tabelle auf Seite 66 nennen sie „Numéro de l'utilisateur
  principal", die Syntaxgrafik auf derselben Seite 66 dagegen „numéro de maître". Letzteres
  ist eine wörtliche Übertragung von „Masternummer" und im Französischen unüblich.
- **Schwere:** mittel (Terminologie; der Begriff steuert Berechtigungen) · **Status:** offen

### DSC-015 – Englische Überschrift 5.5 ist wortgleich mit 5.1 (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seite 46
- **Beleg:** Abschnitt 5.5 trägt den Titel „Controlling the alarm system via SMS" – identisch
  mit 5.1 –, behandelt inhaltlich aber die beiden Ausgänge („Pro-finder has two separately
  controllable outputs"). Die deutsche Fassung nennt denselben Abschnitt korrekt
  „5.5 Ausgänge per SMS steuern" (Seite 22).
- **Schwere:** mittel (Navigation und Querverweise; der Fehler darf nicht in den englischen
  Master übernommen werden) · **Status:** offen

### DSC-016 – „ALARM" gegen „AAlarm" auf derselben Seite (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seite 38, Abschnitt 2.5
- **Beleg:** Der Fließtext empfiehlt „you should ideally save it under the name ALARM",
  der unmittelbar folgende rote Tipp dagegen „If you save the Pro-finder number under the
  designation _AAlarm_, the entry will always be in the first position." Beide Schreibweisen
  stehen unkommentiert nebeneinander; nur „AAlarm" erfüllt den genannten Zweck der
  alphabetischen Erstposition.
- **Nachtrag 2026-08-07:** Der Widerspruch ist nicht englischspezifisch. Die französische
  Seite 65 zeigt dasselbe Muster in lokalisierter Form – Fließtext „sous la désignation
  « ALARME »", Conseil dagegen „sous le nom du contact _AAlarme_". Die tschechische Seite 89
  ebenso: Fließtext „pod štítek ALARM", Tip dagegen „pod označením _AAlarm_". Damit steht der
  Fehler in drei von vier geprüften Sprachfassungen – er wurde konsequent mitübersetzt statt
  bemerkt.
- **Schwere:** mittel · **Status:** offen

### DSC-017 – Syntaxbedeutung des Minuszeichens nur implizit (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seiten 39 und 40, Abschnitte 2.8 und 2.9
- **Beleg:** Die Syntaxgrafik in 2.8 erklärt „+" (Landesvorwahl) und „S" (Smartphone),
  nicht aber das „-". Erst das dritte Tabellenbeispiel auf Seite 40
  („+S491511142338-491736660456", Zeile „Master number as smartphone number + an
  unauthorised number") lässt erschließen, dass „-" eine unberechtigte Nummer kennzeichnet.
- **Schwere:** mittel (Berechtigungssteuerung, sicherheitsrelevant) · **Status:** offen

### DSC-004 – Fehlübersetzung IT-Schritt 8 (ab SN-045)

- DOC-KA-SN045, Seite 2, Abschnitt 2: „Aspetta che arrivi Pro-finder." („Warte, bis
  Pro-finder ankommt") statt „Warten Sie bis der Pro-finder eingebucht hat." (vgl. EN
  „Wait until Pro-finder has logged in."). **Status:** offen

### DSC-005 – Dubletten und Sprachfehler in den SIM-Intros (ab SN-045)

- DOC-KA-SN045, Seite 2: DA- und IT-Intro mit Doppelung „(4G/LTE). (4G/LTE)."; NL-Intro
  mit doppeltem Verb („…moet ondersteuning bieden voor SMS, telefonie en mobiele data
  (4G/LTE) ONDERSTEUNEN."); NL-Schritt 3 mit Tippfehler „Teugbellen" und französischem
  „rappels"; CZ-Intro mit Punkt vor der Klammer; DA „Konfigurer SIM -kort:" mit
  Leerzeichen vor „-kort"; FR-Abschnittstitel „Préparer carte la SIM" (Wortstellung).
  **Status:** offen

### DSC-006 – Nur das deutsche SIM-Intro nennt die Telekom-Vertragskarte (ab SN-045)

- DOC-KA-SN045, Seite 2: Das DE-Intro empfiehlt „die vorkonfigurierte THITRONIK®
  Vertragskarte der Telekom" und nennt weder (4G/LTE) noch die Paketempfehlung
  („100 SMS, 100 Minuten, 500 MB"); alle anderen Sprachen umgekehrt. Inhaltlicher
  Gleichstand der Sprachfassungen ist nicht gegeben. **Status:** offen

### DSC-007 – Foto-Nummerierung kollidiert mit Schritt-Nummerierung (ab SN-045)

- DOC-KA-SN045, Seite 2, Abschnitt 2: Die SIM-Einlege-Fotos sind 1.–6. nummeriert, die
  Textschritte 1.–9. – Verwechslungsgefahr, textliche Zuordnung fehlt. **Status:** offen

### DSC-008 – Tipp-/Grammatikfehler im englischen Disclaimer (ab SN-045)

- DOC-KA-SN045, Seite 1: „…do not leave any valuables on viewor where they are easily
  accessible…" („on viewor" statt „in view or"). **Status:** offen

## Niedrig / redaktionell (Auswahl Batch 1)

### DSC-009 – Orthographie-Normalisierungen im HTML-Master (ab SN-045)

- Für den deutschen HTML-Master wurden gegenüber DOC-KA-SN045 Seite 1 normalisiert:
  „GSM Empfang" → „GSM-Empfang"; „Blinkt Grün" (Zustand 9) → „blinkt grün" (vgl.
  Kleinschreibung in Zuständen 1, 2, 6). Originalwortlaut bleibt hier dokumentiert.
  **Status:** akzeptiert (Normalisierung), fachlicher Review ausstehend

### DSC-010 – Uneinheitliche Schreibweisen in der Alarm-SMS-Tabelle (ab SN-045)

- DOC-KA-SN045, Seite 1: „(CAN-Bus)" (DE/SV/CZ) vs. „(CAN bus)" (EN/IT) vs. „(CAN-bus)"
  (DA/NL); deutscher Beispiel-Alarmgrund ohne Umlaut („Einbruch Tuer"); Beispiel-Link
  „http://maps.google.com maps?q=…" durch Umbruch getrennt und ohne https. **Status:** offen

### DSC-011 – Inkonsistente Sprachreihenfolge der Abschnittstitel (ab SN-045)

- DOC-KA-SN045: Abschnitt 2 führt NL am Ende, Abschnitt 3 an dritter Stelle, Abschnitt 7
  CZ an dritter Stelle – erschwert das Auffinden der eigenen Sprache. **Status:** offen

### DSC-012 – Seitenreihenfolge des Faltblatts (ab SN-045)

- DOC-KA-SN045: PDF-Seite 1 enthält die Abschnitte 5–7, die Abschnitte 1–4 stehen auf
  PDF-Seite 2 – die logische Lesereihenfolge entspricht nicht der PDF-Seitenfolge
  (Faltblatt-Layout). **Status:** akzeptiert (dokumentiert), im HTML-Master korrigiert
  durch aufgabenbasierte Struktur

### DSC-018 – Satz- und Layoutfehler im englischen Teil, Kapitel 3 bis 5 (ab SN-045)

- DOC-IBA-SN045, Seite 41 (LED-Zustand 8): nicht geschlossene Klammer „Signed in (signal
  available + no destination numbers available"; Zustand 9 setzt dagegen korrekt
  „Signed in (signal) + …".
- Seite 42 (Statusbericht): „U2: 0 VU3: 0 V" – zwischen dem Wert von U2 und der Bezeichnung
  U3 fehlt der Zeilenumbruch, während U4 und U5 je eine eigene Zeile haben.
- Seite 42 (Diebstahlmeldung): Wortdopplung „…as described under _5.1 Controlling the alarm
  system_ **via SMS** _via SMS_." – einmal stark vergrößert, einmal klein kursiv.
- Seite 43 (Einbruchmeldung): nicht geschlossene Klammer „Break-in door/window (radio
  magnetic contact".
- Seite 45 (Geofencing): der Satzpunkt steht durch den Umbruch allein am Zeilenanfang
  („…with the text _fence off_" / „. Before you can use geofencing…").
- **Status:** offen (redaktionell); die Klammerfehler betreffen technische Aussagen und
  gehören mit in den fachlichen Review.

### DSC-019 – Deutsche Lokalisierungsreste in der englischen Fassung (ab SN-045)

- DOC-IBA-SN045, Seite 42: Dezimalkomma im Beispielwert „U1:13,53 V" im ansonsten
  englischen Dokument.
- Seite 39: Die Erläuterung nennt „Country code starting with + (+44 for England)", das
  Beispiel verwendet durchgängig deutsche Vorwahlen („+49 …"). Erläuterung und Beispiel
  passen nicht zusammen. Dasselbe auf der französischen Seite 66 („+33 pour la France")
  und der tschechischen Seite 90 („+420 pro Českou republiku") – jeweils neben deutschen
  Beispielnummern. Die Erläuterung wird lokalisiert, die Beispielgrafik nicht; belegt in
  drei von vier geprüften Fassungen.
- Seite 42: Spannungen uneinheitlich gesetzt – „11.2V"/„12.5V" ohne Leerzeichen im
  Fließtext, „11.2 V" mit Leerzeichen in der Beispiel-SMS.
- **Status:** offen (redaktionell)

### DSC-025 – Redaktionelle Befunde aus dem Kapitel 6 und dem französischen Teil (ab SN-045)

- DOC-IBA-SN045 Seiten 25 und 49: Die Links zur Konformitätserklärung und zum Support
  verwenden `http://` statt `https://`.
- Seite 49: Einheiten uneinheitlich gesetzt – „9-30V" und „21mA" ohne Leerzeichen, „37 mA"
  und „500 mA" mit Leerzeichen; die Überschrift „6.1 Technical data:" trägt als einzige
  Abschnittsüberschrift einen Doppelpunkt.
- Seiten 23 und 47: In allen drei Unterüberschriften von 5.5 fehlt das Leerzeichen zwischen
  Nummer und Titel („5.5.1Ausgänge" / „5.5.1Switching"). Der Fehler steht in beiden
  Sprachfassungen und ist damit ein Vorlagen-, kein Übersetzungsfehler.
- Seite 56: Französische Typografie uneinheitlich – „Broche 2: Entrée" ohne geschütztes
  Leerzeichen vor dem Doppelpunkt, „Broche 1 : Masse" und „Broche 3 : Entrée" mit.
  Ebenso wechseln typografischer und gerader Apostroph sowie französische und gerade
  Anführungszeichen (Seite 55).
- **Status:** offen (redaktionell)

### DSC-031 – Redaktionelle Befunde aus dem französischen Teil (ab SN-045)

- DOC-IBA-SN045 Seite 57: Grammatikfehler „les sorties peuvent être contrôlée" ohne
  Plural-Angleichung; uneinheitlich „la WiPro" gegenüber „la WiPro III (safe.lock)".
- Seite 58: Wortumbrüche ohne Trennstrich in den Kopfzellen der Betriebsartentabelle
  („Modes de fonctionn ement", „Géolocalisa tion commutabl e via la broche 3"); lineares
  Lesen ergibt zerrissene Wörter.
- Seite 59: doppeltes Leerzeichen in „est également montée, connectez".
- Seite 61: „gardiennage" für Geofencing, während das Inhaltsverzeichnis für Abschnitt 5.2
  „Géolocalisation" führt – zwei Begriffe für dieselbe Funktion.
- Seite 66: Der einleitende Satz spricht von einem „SMS de pilotage de la centrale";
  gemeint ist die Programmier-SMS an den Pro-finder, nicht an die Alarmzentrale.
- **Status:** offen (redaktionell)

### DSC-036 – Verstümmelter Produktname und abweichende Kabelbezeichnung im tschechischen Teil (ab SN-045)

- **Dokument:** DOC-IBA-SN045, tschechische Seite 86, Abschnitt 1.4
- **Beleg:** „propojte WiPro III (safe.lock) a **hledáček Pro** pomocí přiloženého
  _připojovacího kabelu WiPro III_". Statt „Pro-finder" steht dort „hledáček Pro" – der
  Produktname ist abgeschnitten.
- **Zusatz:** Dasselbe Kabel heißt hier „připojovací kabel WiPro III", in der französischen
  Fassung (Seite 59) dagegen „câble de connexion **RJ10**". Zwei verschiedene Benennungen
  für denselben Lieferbestandteil.
- **Schwere:** mittel (Produktname und Ersatzteilbezeichnung) · **Status:** offen

### DSC-037 – Uneinheitliche tschechische Gerätebenennung (ab SN-045)

- **Dokument:** DOC-IBA-SN045, tschechische Seiten 80, 82, 84 und 86
- **Beleg:** Für dasselbe Gerät stehen nebeneinander „vyhledávač Pro-finder", „přístroj
  Pro-finder", „zařízení Pro-finder" und „hledáček Pro-finder" – auf Seite 84 sogar drei
  davon auf einer einzigen Seite. Zusätzlich „volný výhled" gegenüber „čistý výhled" für
  dieselbe Anforderung in aufeinanderfolgenden Sätzen (Seite 82).
- **Hinweis zur Prüftiefe:** Diese Positionen betreffen Terminologie und sind ohne
  Tschechischkenntnisse belegbar. Grammatik und Stil des tschechischen Teils sind
  **nicht** geprüft und brauchen einen muttersprachlichen Review.
- **Schwere:** mittel · **Status:** offen

### DSC-035 – Redaktionelle Befunde aus dem Rest des französischen Teils (ab SN-045)

- Seite 67: „tel que comme décrit **sous dans** les sections 2.8" – zwei fehlerhafte
  Fügungen in einem Satz. Seite 68: Komma zwischen Subjekt und Prädikat.
- Seite 69: Terminologiebruch – die Zielrufnummern heißen hier „numéros **favoris**", in
  Kapitel 2.7 dagegen „numéros de destination". Fehlender Akzent in „pas desactivé".
- Seite 71: „Accessoires **anti-vol** (boucle de cable radio)" kehrt die Bedeutung um –
  gemeint ist der Diebstahl von Zubehör, die Überschrift „Vol d'accessoires" ist korrekt.
  Fehlende Akzente in „fenetre", „detecteur", „cable".
- Seite 72: Tippfehler „la e géolocalisation"; mehrfach verunglückte Fügungen („sur le
  site sur le précédent", „Ce n'est qu'alors qu'à ce moment-là que").
- Seite 73: „détaillées **dans décrite dans** le chapitre 1.4".
- Seite 75: Absatz mit doppelten Wortgruppen und Großschreibung mitten im Satz („…, Pour
  obtenir … après avoir reçu … à tout moment demander à tout moment …").
- Seite 76: Abschnittstitel 6.2 „Consignes de tri recyclage" unvollständig formuliert.
- **Bewertung:** Die Dichte dieser Fehler im französischen Teil ist deutlich höher als im
  deutschen und englischen. Ein unabhängiger französischer Sprachreview ist vor jeder
  Übernahme erforderlich – auch für Textbausteine, die nur als Referenz dienen.
- **Status:** offen

> Die Befunde der Seiten 1–96 von DOC-IBA-SN045 und der Seiten 1–2 von DOC-KA-SN044 sind
> in den Seitenrecords unter [sources/pages/](../sources/pages/) erfasst und werden bei
> der Segment-Extraktion in dieses Register übernommen, sobald sie inhaltlich bewertet sind.

---

## Batch 2026-08-08 – deutsche Master-Extraktion (DOC-IBA-SN045, Seiten 1–25)

Diese Positionen sind bei der Extraktion der vierzehn deutschen Aufgaben entstanden. Sie
betreffen **den deutschen Text selbst**, nicht seine Übersetzungen, und setzen damit die
mit DSC-016 und DSC-028 begonnene Linie fort: „geprüfter deutscher Master" darf nicht
„übernommener deutscher Text" heißen. Jede Position ist aus dem gerenderten Seitenbild
belegt, nicht aus einer Zusammenfassung.

### DSC-040 – Zwei weitere falsche Querverweise im deutschen Original (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 9 und 10 (aufgedruckt „Seite 7 von 23" und „Seite 8
  von 23")
- **Befund:** Neben dem bereits als DSC-028 geführten Fehler stehen zwei weitere
  Fehlverweise im deutschen Text.
  1. Seite 9, Abschnitt 1.3: „In allen Betriebsarten können die Ausgänge, wie unter
     **5.4** … beschrieben, gesteuert werden." Richtig ist 5.5 „Ausgänge per SMS steuern";
     5.4 ist „Position mit dem Smartphone abfragen".
  2. Seite 10, Betriebsartentabelle, Zeile F: Verweis auf „**1.5.2** GPS-Antenne
     anschließen". Die GPS-Diagnose in Schalterstellung F steht in 1.5.3.
- **Präzisierung zu DSC-028:** Der Fehlverweis auf 5.4 sitzt im Fließtext von Abschnitt
  1.3 auf **Seite 9**. Der rote Hinweiskasten auf Seite 11 verweist dagegen **korrekt**
  auf 5.5. Die frühere Ortsangabe ist damit berichtigt.
- **Schwere:** mittel (Nutzende landen im falschen Kapitel) · **Status:** offen

### DSC-041 – Querverweis auf 5.1 führt inhaltlich ins Leere (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 19 und 21
- **Befund:** Seite 19 verweist für die Ansteuerung von Blinker und Sirene auf Abschnitt
  5.1. Abschnitt 5.1 „Alarmanlage per SMS steuern" (Seite 21) beschreibt ausschließlich
  das Scharf- und Unscharfschalten der WiPro III (safe.lock) **per Anruf** und nennt
  weder Blinker noch Sirene. Auch die Überschrift trifft den Inhalt nicht: sie kündigt
  eine SMS-Steuerung an, der Abschnitt beschreibt einen Anruf.
- **Schwere:** mittel · **Status:** offen

### DSC-042 – Geofencing: Abhängigkeit von der WiPro III ist widersprüchlich (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 19 und 21
- **Befund:** Seite 19 knüpft die Diebstahlmeldung an eine „aktivierte WiPro III
  (safe.lock)". Seite 21 beschreibt Geofencing dagegen unabhängig davon, geschaltet über
  Pin 3 oder per SMS. Ob ein Pro-finder **ohne** WiPro III überhaupt eine Diebstahlmeldung
  sendet, ist aus keiner der beiden Stellen ableitbar.
- **Zusätzlich ungeregelt:** der Vorrang zwischen der Schaltung über Pin 3 (Stellungen 8
  und B) und der automatischen Kopplung an den Scharf-/Unscharfzustand der WiPro III.
- **Weiterer Widerspruch:** Abschnitt 5.2 sagt pauschal „in allen anderen
  Schalterstellungen"; die Betriebsartentabelle auf Seite 10 trifft für die Zeilen C bis F
  wegen verbundener Zellen gar keine Geofencing-Aussage.
- **Randbefund:** Die Radiusangabe lautet auf Seite 21 „einen Bereich von 900 Metern"
  ohne Einschränkung, auf Seite 19 „weiter als ca. 900 m". Beide Formulierungen sind
  unverändert übernommen.
- **Schwere:** hoch (betrifft, ob eine Diebstahlmeldung überhaupt erfolgt) ·
  **Status:** offen – gehört in den technischen Review

### DSC-043 – Die App ersetzt laut Quelle Schritte, die sie nicht ersetzen kann (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 14 und 15
- **Befund:** Abschnitt 2.4 erklärt bei Nutzung der THITRONIK App die Schritte der
  Kapitel „2.5 bis 2.8" für entbehrlich. Kapitel 2.5 ist jedoch der Eintrag der
  Modulnummer im Adressbuch des Mobiltelefons, und seine Fortsetzung auf Seite 15 verlangt
  dafür ausdrücklich die Ländervorwahl, damit das Gerät aus dem Ausland erreichbar bleibt.
  Das ist eine Handlung am Telefon, die eine App nicht übernimmt.
- **Schwere:** hoch (die Erreichbarkeit des Geräts hängt daran) · **Status:** offen

### DSC-044 – Die Steuerberechtigung hängt an einem nirgends erklärten Zeichen (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seite 17, Tabelle „Beispiele für verschiedene
  Programmier-SMS"
- **Befund:** Autorisierte und nicht autorisierte Zielrufnummern unterscheiden sich in den
  Beispielen erkennbar nur durch das Zeichen vor der Nummer. Der Fließtext benennt diese
  Regel an keiner Stelle des deutschen Teils; sie ist ausschließlich aus dem Vergleich der
  Beispielzeilen erschließbar. Ein falsches Zeichen kippt die Steuerberechtigung einer
  Rufnummer.
- **Schwere:** hoch (sicherheitskritisch: eine nicht autorisierte Nummer könnte
  Steuerrechte erhalten) · **Status:** offen – gehört in den technischen Review

### DSC-045 – Der Statusbericht enthält Felder, die das Kapitel nicht erklärt (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 19 und 20, Kapitel 4
- **Befund:** Einleitung und Beispiele decken sich nicht.
  - Die Einleitung definiert die Felder „GPS:" und „Pos:". In **keiner** der neun
    Beispiel-SMS erscheint eine GPS-Zeile; die Position steht überall ohne den
    Bezeichner „Pos".
  - Der Fließtext nennt für den Statusbericht die Temperatur nahe dem Gerät sowie U2 bis
    U5. Die Beispiel-SMS enthält keine Temperaturzeile, dafür die im Text nirgends
    erwähnte Zeile „U1:13,53 V".
  - Die Zeilen „WiPro ON" und „Fence ON" erscheinen im Beispiel, werden aber in Kapitel 4
    nicht erklärt. „Fence ON" ist zugleich die einzige belegte textliche Rückmeldung zum
    Geofencing-Zustand; wie der ausgeschaltete Zustand geschrieben wird, zeigt keine
    geprüfte Seite.
- **Schwere:** hoch (Nutzende können den Bericht nicht vollständig deuten) ·
  **Status:** offen

### DSC-046 – Dezimaltrennzeichen im Gerätetext uneinheitlich (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 19 und 20
- **Befund:** Die Gerätemeldungen schreiben „Spannung unter 11.2 V" mit Punkt und
  „U1:13,53 V" mit Komma. Der deutsche Fließtext daneben schreibt durchgehend 11,2 V und
  12,5 V.
- **Bezug:** Dieselbe Beobachtung ist im tschechischen Teil unter DSC-033 vermerkt. Es
  ist damit kein Übersetzungsartefakt, sondern betrifft schon das deutsche Original.
- **Schwere:** niedrig, für den Token-Vergleich der Übersetzungen aber relevant ·
  **Status:** offen

### DSC-047 – Status-LED: dieselbe Farbe bedeutet in Stellung F etwas anderes (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 12 und 18
- **Befund:** Die GPS-Diagnose in Schalterstellung F (Abschnitt 1.5.3, Seite 12) belegt
  die Farben der Status-LED anders als der Normalbetrieb (Kapitel 3, Seite 18):
  Rot heißt dort „GPS-Antenne nicht angeschlossen" statt „SIM-Karte fehlt oder ist
  defekt", Grün „Einbauposition in Ordnung" statt „SMS-Verkehr", Gelb „keine gültige
  Position" statt „letzte SMS nicht versendet".
- **Barrierefreiheit:** In der Diagnosetabelle leuchten Rot und Grün beide dauerhaft, nur
  Gelb blinkt. Damit sind zwei der drei Zustände **ausschließlich** über die Farbe
  unterscheidbar; ein farbunabhängiges Merkmal ist nicht dokumentiert. Für die
  HTML-Anleitung heißt das: die Diagnose ist am Gerät selbst nicht barrierefrei
  durchführbar. Das ist eine Grenze der Lösung, keine Lücke der Umsetzung, und wird in
  der Aufgabe „Fehlerbehebung" ausdrücklich benannt.
- **Randbefund:** Die Tabelle auf Seite 12 ist entgegen der Arbeitsannahme **nicht**
  farbig gesetzt – sie nennt die Farben in schwarzer Schrift. Die Barriere sitzt am
  Gerät, nicht im Dokument.
- **Schwere:** hoch · **Status:** offen – an THITRONIK zu melden

### DSC-048 – Seriennummer: drei Schreibweisen, kein belegter Fundort (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 1, 2, 6 und 26; DOC-KA-SN045, Seite 1
- **Befund:** Ergänzung zu DSC-023.
  - Derselbe Seriennummernbereich erscheint in drei Schreibweisen: „(ab Seriennr. -045)"
    (Seite 2), „(as of serial no. -045)" (Seite 26) und „SN 0699 - 045 +" auf dem
    Umschlag der Kurzanleitung, der auf Seite 6 abgebildet ist.
  - Das mehrsprachige Gesamtdeckblatt (Seite 1) nennt **keinen** Seriennummernbereich.
    Wer die Anleitung von vorn öffnet, findet die Bereichsangabe erst auf dem Deckblatt
    des jeweiligen Sprachteils.
  - Die Dokumente der alten Generation (DOC-BMA-SN044, DOC-KA-SN044) tragen **gar keine**
    Seriennummernkennzeichnung. Das Fehlen einer Bereichsangabe beweist also nichts.
  - Die Kurzanleitung ab SN-045 enthält ein leeres Feld „Serial number:" mit der
    Aufforderung, die Nummer dort einzutragen. Diese Aufforderung steht **nur auf
    Englisch**, auch im deutschen Lieferumfang. Der einzige belegte Notizort für die
    Seriennummer ist damit sprachlich nicht für alle zugänglich.
- **Präzisierung zu DSC-023:** Das Präfix „SN 0699-045+" war bisher über ein Foto auf der
  französischen Seite 54 belegt. Dieselbe Aufschrift ist auf der **deutschen Seite 6**
  lesbar (bei 900 dpi geprüft) und ist damit die bessere Fundstelle für den deutschen
  Master.
- **Schwere:** hoch (die Versionsauswahl der Webanleitung hängt daran) · **Status:** offen

### DSC-049 – Revisionsstände der Kurzanleitung widersprechen sich (ab SN-045)

- **Dokument:** DOC-KA-SN045 (Titel) gegenüber DOC-IBA-SN045, Seite 6 (Abbildung)
- **Befund:** DOC-KA-SN045 trägt den Revisionsvermerk „Rev. 1.3.2". Der auf Seite 6 der
  Installationsanleitung abgebildete Umschlag derselben Kurzanleitung zeigt „Rev. 1.0".
- **Schwere:** mittel (unklar, welche Kurzanleitung dem Gerät beiliegt) · **Status:** offen

### DSC-050 – Unerklärte und uneinheitliche Benennungen im deutschen Teil (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 12, 15, 16, 18, 21, 22, 23
- **Befund:** Sammelposition für Benennungen, die denselben Gegenstand unterschiedlich
  bezeichnen oder gar nicht erklärt werden.
  - „Ländervorwahl" (Seite 15) gegenüber „Landesvorwahl" (Seite 16, Diagramm).
  - „Nummer des Pro-finder" (Abschnitt 5.2) gegenüber „Nummer des GSM-Moduls"
    (Abschnitt 1.5.3) für dasselbe SMS-Ziel.
  - „Hauptkabelbaum" kommt im gesamten geprüften deutschen Teil nur in Abschnitt 2.9 vor,
    wird nirgends erklärt und keiner Marke der Anschlussabbildung zugeordnet – obwohl der
    gesamte Löschvorgang der Zielrufnummern daran hängt.
  - Drei Schreibweisen für denselben LED-Zustand: „gelb-grün" (Abschnitt 2.4), „Blinkt
    gelb/grün" (Kapitel 3, Seite 18), „Blinkt grün/gelb" (DOC-KA-SN045). Ebenso „fehlt
    oder ist defekt" gegenüber „fehlt bzw. ist defekt".
  - Seite 11 „bis der Befehl aufgehoben wird" gegenüber Seite 23 „bis auf Widerruf" für
    dieselbe Dauereinschaltung.
- **Schwere:** mittel (Terminologie; betrifft Glossar und Übersetzungsbasis) ·
  **Status:** offen · siehe auch [TERMINOLOGY_CONFLICTS.md](TERMINOLOGY_CONFLICTS.md)

### DSC-051 – Redaktionelle Befunde im deutschen Teil (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 14, 16, 17, 19, 20, 22, 23
- Seite 22, Abschnitt 5.5: überzähliges Komma – „Sie können die Ausgänge, dauerhaft,
  gepulst …".
- Seite 17: Spaltenüberschrift „Inhalt der Programmier-SMS **in** Pro-finder" statt „an".
- Seite 23: Die Überschriften 5.5.1 bis 5.5.3 stehen im Plural („Ausgänge"), jeder
  Fließtext behandelt aber nur Ausgang A; erst der rote Kasten holt Ausgang B nach.
  Überschrift 5.5.1 „Ausgänge dauerhaft einschalten" deckt den Abschnitt nur halb ab –
  er beschreibt auch das Ausschalten.
- Seite 20: Zwei Beispiel-SMS öffnen eine Klammer ohne Schließung – „Einbruch
  Tuer/Fenster (Funk-Magnetkontakt" und „Diebstahl Zubehoer (Funk-Kabelschleife".
  „Diebstahl Zubehoer" ist zugleich die einzige der neun Beispiel-SMS ohne
  Geschwindigkeitszeile.
- Seite 19: Die Einbruchmeldung ist im Fließtext weiter gefasst als ihre Überschrift –
  „immer, wenn die WiPro III (safe.lock) einen Alarm meldet", während das Beispiel nur den
  Funk-Magnetkontakt zeigt.
- Seite 16: Die Landesvorwahl der ersten Zielrufnummer ist unterstrichen, hat als einziger
  Bestandteil des Diagramms aber weder Verbindungslinie noch Beschriftung. Zusätzlich
  umfasst die Unterstreichung bei der 1. Zielrufnummer nur den Teil hinter der
  Landesvorwahl, bei der 2. und 3. dagegen die Landesvorwahl mit – derselbe Sachverhalt,
  zwei Markierungen.
- Seite 14: „wie oben dargestellt" in Abschnitt 2.4 verweist auf eine Abbildung der
  **vorherigen** Seite. Das Google-Play-Abzeichen ist so grob gerastert, dass seine
  Kopfzeile auch bei 900 dpi unlesbar bleibt, während das App-Store-Abzeichen daneben
  scharf ist.
- **Status:** offen

### DSC-052 – Lücken der Quelle, die keine Widersprüche sind (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 12, 19, 20, 23
- **Befund:** Fragen, die sich beim Schreiben der Aufgaben gestellt haben und die die
  Quelle **gar nicht** beantwortet. Sie sind keine Fehler, aber sie begrenzen, was die
  HTML-Anleitung sagen darf.
  - Ausgänge (Seite 23): Wer erhält den Statusbericht nach einem Schaltbefehl, und darf
    jede berechtigte Nummer schalten? Was geschieht bei einer Minutenzahl außerhalb
    1 bis 120? Lässt sich eine laufende Zeitschaltung vorzeitig abbrechen? In welchem
    Zustand sind die Ausgänge nach Spannungsausfall oder Neustart?
  - Spannungswarnung (Seite 19): Der Text nimmt Betriebsart B von der Warnung aus, sagt
    aber nicht, ob dort auch der Wechsel in den Standby entfällt.
  - Eingabehilfe (Seite 20): beschrieben ist nur die Antwort auf eine SMS **von einer
    Zielrufnummer**; was bei anderen Absendern geschieht, sagt die Quelle nicht.
  - GPS (Seite 12): Die Mindest-Betriebsspannung von 13,5 V für mindestens fünf Minuten
    zum Speichern der Satellitendaten fehlte bisher in der Liste der wiederkehrenden
    Werte dieser Generation. Sie ist unverändert übernommen.
- **Status:** offen – für den technischen Review gesammelt

### DSC-053 – Die Sprachmarke des dänischen Teils ist eine zusammengesetzte Flagge (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 1 und 101
- **Befund:** Die Flaggenmarke vor dem dänischen Titel ist keine dänische Flagge. Bei
  hoher Auflösung ist sie diagonal geteilt: links die **norwegische** Flagge (blaues Kreuz
  mit weißem Rand), rechts ein rot-weiß-rotes Feld entsprechend der rechten Hälfte der
  **dänischen** Flagge, dazu ein durchgehender weißer Diagonalstrich. Auf Seite 101, dem
  Deckblatt des dänischen Sprachteils, steht dieselbe verunglückte Marke.
- **Prüfweg:** Mit `scripts/crop-pdf-region.py` bei 500 dpi (Seite 101) und 1400 dpi
  (Seite 1) nachgerendert. Bei den 150 dpi der regulären Seitenprüfung ist die
  Zusammensetzung nicht erkennbar – der Seitenrecord zu Seite 1 nannte sie deshalb bisher
  schlicht „die norwegische Flagge", was nur die halbe Marke trifft.
- **Warum das zählt:** Die zehn Sprachen des Dokuments sind **ausschließlich** über
  Flaggen markiert; kein Sprachname ist ausgeschrieben. Wer die Marke nicht sieht oder
  nicht zuordnen kann, findet seinen Sprachteil nicht. Eine falsche Marke führt zusätzlich
  aktiv in die Irre. Für die HTML-Anleitung folgt daraus, dass die Sprachauswahl den
  Sprachnamen als Text führen muss und eine Flagge allenfalls schmückt.
- **Schwere:** mittel (Auffindbarkeit des richtigen Sprachteils) · **Status:** offen – an
  THITRONIK zu melden

### DSC-054 – Handbuch und Gerät nennen verschiedene Befehle (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 7, 13, 14, 15, 16
- **Befund:** Die automatische Hilfe-SMS des Geräts ist auf Seite 13 als Abbildung
  wiedergegeben und nennt die Befehle, die das Gerät selbst für gültig hält:
  `STATUS, SCHARF, UNSCHARF, ALARM AUS, A ON, A OFF, B ON, B OFF, A PULSE, B PULSE, FENCE ON, FENCE OFF, GPS OFF, GPS ON`
  (bei 700 dpi zeichengenau gesichert). Der Fließtext desselben Handbuchs weicht davon an
  vier Stellen ab:
  - **Ausgänge:** Seite 16 schreibt `A an`, `A aus`, `A impuls` und `A XXX`; das Gerät nennt
    `A ON`, `A OFF`, `A PULSE`. Deutsch gegen Englisch, für dieselbe Funktion.
  - **Geofencing:** Seite 7 schreibt `fence aus`, Seite 15 zweimal `Fence aus` und einmal
    `Fence an`; das Gerät nennt `FENCE ON` und `FENCE OFF`. **Drei Schreibweisen desselben
    Befehls in einem einsprachigen Dokument**, dazu eine vierte vom Gerät selbst.
  - **Alarm:** Seite 14 nennt `alarm`, um Sirene und Blinker zuzuschalten. Die Geräteliste
    kennt diesen Befehl nicht, sondern nur `ALARM AUS`.
  - **Position:** Seite 15 nennt `Pos`, Seite 12 erwähnt `(POS)`. In der Geräteliste kommt
    **kein** Positionsbefehl vor.
  - Umgekehrt führt das Gerät mit `GPS OFF` und `GPS ON` zwei Befehle, die im geprüften
    Bereich des Handbuchs an keiner Stelle vorkommen.
- **Warum das zählt:** Bisher stützte sich BLK-005 auf den Vergleich **zwischen** vier
  Sprachfassungen der neueren Generation (DSC-033). Hier widersprechen sich Handbuch und
  Gerät **innerhalb einer Sprache und eines Dokuments**. Damit ist ausgeschlossen, dass die
  Unterschiede allein Übersetzungsfehler sind. Ein nicht akzeptierter Befehl erzeugt keine
  Fehlermeldung, sondern nur die Hilfe-SMS – wer Geofencing vor der Einfahrt in eine Halle
  abschalten will und den falschen Befehl verwendet, bekommt genau die Fehlalarme, die er
  vermeiden wollte.
- **Nebenbefund:** Die Gerätetexte ersetzen Umlaute durch Vokal plus e („Ungueltiger",
  „Moeglich", „Tuer"). Das Gerät unterliegt einer Zeichensatzbeschränkung, die das Handbuch
  nirgends erwähnt und die vor jeder Übersetzung zu schützen ist. Das deckt sich mit der
  Beobachtung zu DSC-033, dass alle Geräte-SMS der neueren Generation ohne Diakritika
  gesetzt sind.
- **Schwere:** hoch · **Status:** offen – verstärkt BLK-005, an THITRONIK zu melden
  (Rückfrage 1)

### DSC-055 – Drei falsche Querverweise im Handbuch bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 10, 12, 13; Verweisziele auf Seite 15 selbst geprüft
- **Befund:** Drei Verweise nennen eine Abschnittsnummer, unter der etwas anderes steht.
  Die tatsächlichen Überschriften auf Seite 15 lauten „2.4 Geofencing", „2.5 Statusbericht
  anfordern" und „2.6 Positionsabfrage mit Smartphone" – im Seitenbild bestätigt, nicht nur
  in der Textebene.
  - Seite 10 verweist für die Umwandlung der Position in einen anklickbaren Link auf
    „2.5"; das ist „Statusbericht anfordern". Gemeint ist 2.6.
  - Seite 12 verweist für das Anfordern des Statusberichts auf „2.3"; das ist „Alarmanlage
    per Anruf steuern". Gemeint ist 2.5. Der Verweis ist nicht gänzlich unpassend – 2.3
    beschreibt einen per Anruf ausgelösten Statusbericht in den Betriebsarten 2 und 3 –,
    zielt aber am gleichnamigen Abschnitt vorbei.
  - Seite 13 verweist für die Positionsabfrage auf „2.4"; das ist „Geofencing". Gemeint
    ist 2.6.
  - Zusätzlich kündigt Seite 15 unter 2.5 an, das Wiederfinden des Fahrzeugs werde „in
    Kapitel 2.6 erklärt"; 2.6 ist die Positionsabfrage, ein Abschnitt „Fahrzeug
    wiederfinden" trägt laut Textebene die Nummer 2.8. Abschließend zu prüfen, sobald
    Seite 17 gerendert ist.
- **Muster:** Alle drei falschen Verweise nennen eine **zu niedrige** Nummer (2.5 statt
  2.6, 2.3 statt 2.5, 2.4 statt 2.6). Das spricht dafür, dass die Abschnittsnummerierung
  nachträglich verschoben wurde und die Verweise nicht mitgezogen sind.
- **Gegenprobe:** Die übrigen geprüften Verweise stimmen: „siehe 1.3" (Seite 6), „Kapitel
  2.7" (Seite 6), „unter 2.2" (Seite 12), „siehe Seite 8, Kapitel 1.8" (Seite 13, mit
  aufgedruckter Seitenzahl) und „unter 1.5" (Seite 16). Der Fehler ist also nicht flächig,
  sondern auf Kapitel 2 begrenzt.
- **Bemerkenswert im Generationenvergleich:** Der Verweis auf Blinker und Sirene ist hier
  **richtig** (Seite 12 auf 2.2). In der Fassung ab SN-045 führt genau dieser Verweis ins
  Leere (DSC-041). Der Fehler ist dort erst entstanden.
- **Schwere:** mittel · **Status:** offen

### DSC-056 – Die Steuerberechtigung hängt auch bis SN-044 an einem nirgends erklärten Zeichen (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 9 und 10
- **Befund:** Seite 9 unterscheidet Masternummer, autorisierte Nummern, nicht autorisierte
  Nummern und Smartphone-Nummern und beschreibt genau, was jede Stufe darf – **nicht aber,
  wie eine Nummer in eine Stufe gelangt**. Die Kennzeichnung ist ausschließlich aus den
  Beispielen der Tabelle auf Seite 10 zu erschließen: die Zeile „Masternummer + einer
  autorisierten Nummer" verbindet beide Nummern mit einem **Pluszeichen**, die Zeile
  „Masternummer als Smartphone Nummer + einer nicht autorisierten Nummer" mit einem
  **Minuszeichen**. Kein Satz der Quelle spricht das aus.
- **Warum das zählt:** Das ist derselbe Befund, der für die Generation ab SN-045 als
  DSC-044 und BLK-006 geführt wird. Er ist damit **nicht auf die neuere Generation
  beschränkt**, sondern seit mindestens zwei Gerätegenerationen unverändert. Ein falsches
  Zeichen kippt die Steuerberechtigung einer Rufnummer.
- **Zusatzbefund zur Smartphone-Kennzeichnung:** Seite 9 schreibt „die bei der
  Programmierung mit einem **s** versehen wurden" – kleingeschrieben, und die Eigenschaft
  als Befehlszeichen wird allein durch Fettschrift getragen, die in der Textebene fehlt.
  Seite 10 schreibt denselben Marker in der Strukturabbildung und im Erläuterungstext
  durchgehend als großes **S**. Ob das Gerät die Schreibung unterscheidet, sagt die Quelle
  nicht.
- **Schwere:** hoch · **Status:** offen – verstärkt BLK-006, an THITRONIK zu melden
  (Rückfrage 10)

### DSC-057 – Die verwiesene „Tabelle Abfragecodes" existiert nicht (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 9 und 10
- **Befund:** Seite 10 verweist zweimal auf eine „Tabelle Abfragecodes", einmal
  ausdrücklich „auf der vorherigen Seite". Seite 9 enthält keine solche Tabelle, sondern
  nur den Hinweis, die Codes den Unterlagen der Prepaidkarte zu entnehmen, sowie eine
  Internetadresse.
- **Prüfweg:** Seite 9 wurde zusätzlich maschinell untersucht. Sie enthält **kein
  eingebettetes Bild und genau ein Zeichenobjekt** (die Kopfzeile). Die große Leerfläche in
  ihrer Mitte – rund ein Neuntel der Seitenhöhe – ist tatsächlich leer und liegt genau
  dort, wo die Tabelle stehen müsste. Das spricht dafür, dass sie entfernt und die Verweise
  nicht nachgezogen wurden.
- **Warum das zählt:** Der Abfragecode ist Bestandteil der Programmier-SMS bei
  Prepaid-Karten. Ohne ihn wird das Guthaben nicht übertragen; mit einem falschen Code bei
  einer Vertragskarte führt die Quelle ausdrücklich Fehlfunktionen an. Die Anleitung
  verweist für diesen Wert auf eine Tabelle, die es nicht gibt.
- **Schwere:** mittel · **Status:** offen

### DSC-058 – Ein funktionsrelevantes Zeichen fehlt in der Textebene (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seite 10
- **Befund:** Die Strukturabbildung der Programmier-SMS beginnt im Seitenbild mit einem
  sechsstrahligen Sternzeichen vor der Ziffernfolge des Abfragecodes; der erläuternde rote
  Text nennt dasselbe Zeichen ein zweites Mal in einer alternativen Ziffernfolge. Die
  Textebene gibt an der ersten Stelle stattdessen eine Reihe von Leerzeichen aus und an der
  zweiten Stelle **gar nichts**.
- **Prüfweg:** Bei 700 dpi nachgerendert. Das Zeichen ist im Bild eindeutig vorhanden und
  in der Textebene eindeutig abwesend.
- **Warum das zählt:** Dies ist das Dokument mit **echter Textebene**, und genau daraus
  entsteht hier der Erkenntnisgewinn: Wer die Seite vorgelesen bekommt, den Text kopiert
  oder maschinell weiterverarbeitet, erhält einen Abfragecode **ohne sein erstes Zeichen** –
  also einen Code, der nicht funktioniert. Eine zeichenzählende Zugänglichkeitsprüfung
  würde die Seite für unauffällig halten. Für die HTML-Anleitung folgt daraus, dass Befehls-
  und Codebestandteile nicht aus der Textebene übernommen werden dürfen, sondern gegen das
  Seitenbild zu prüfen sind.
- **Schwere:** hoch · **Status:** offen

### DSC-059 – Neun Gerätezustände, unterschieden allein über die LED-Farbe (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 7 und 11
- **Befund:** Abschnitt 1.10 auf Seite 11 führt neun Betriebszustände der Status-LED. Sie
  zerfallen in zwei Gruppen gleicher Blinkart, innerhalb derer **die Farbe das einzige
  unterscheidende Merkmal** ist:
  - sechs Blinkzustände: rot/gelb, rot, grün, rot/grün, gelb, gelb/grün
  - drei Dauerlichtzustände: rot, grün, gelb

  Wer Rot, Gelb und Grün nicht sicher unterscheidet, kann neun Zustände auf zwei reduzieren
  und weder „kein GSM-Empfang" von „alles in Ordnung" noch „SIM-Karte defekt" von „Gerät
  versendet eine SMS" trennen. Drei der neun Zustände sind zudem Zweifarbwechsel; weder die
  Reihenfolge der Farben noch die Blinkfrequenz ist dokumentiert.

- **Verschärfung:** Dieselbe Anzeige bedeutet je nach Schalterstellung Verschiedenes.
  Dauerlicht Rot heißt in der Ausgangsstellung „SIM-Karte fehlt bzw. ist defekt", in
  Schalterstellung F dagegen „GPS nicht angeschlossen" (Seite 7). Die maßgebliche
  Schalterstellung wird nicht zurückgemeldet. Auch der Löschvorgang der Zielrufnummern auf
  Seite 11 enthält mit „warten Sie bis die Status LED gelb/grün blinkt" eine farbcodierte
  Abbruchbedingung und ist damit ohne Farbwahrnehmung nicht sicher durchführbar.
- **Warum das zählt:** Für die Generation ab SN-045 ist der Sachverhalt als DSC-047 auf die
  dreistufige GPS-Diagnose beschränkt. Hier betrifft er die **vollständige
  Zustandsanzeige** des Geräts im Normalbetrieb. Das ist die bisher umfangreichste
  gefundene Barriere, die **am Gerät** sitzt und nicht am Dokument – die HTML-Anleitung kann
  sie beschreiben, aber nicht auflösen.
- **Schwere:** hoch · **Status:** offen – an THITRONIK zu melden (Rückfrage 12)

### DSC-060 – Die Beispiel-SMS liegen ausschließlich als Bild vor, und ihre Felder erklärt kein Kapitel (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 12 und 13
- **Befund:** Neun Beispiel-SMS sind als Abbildungen von Mobiltelefon-Sprechblasen
  wiedergegeben – drei auf Seite 12, sechs auf Seite 13. **Keine einzige kommt in der
  Textebene vor**: kein Feldname, kein Wert, kein Hinweis auf ihre Existenz. Sie sind die
  einzige Stelle des Dokuments, an der zu sehen ist, wie eine Meldung tatsächlich aussieht.
- **Zusätzlich decken sich Erklärung und Beispiel nicht.** Abschnitt 2.1 erklärt fünf
  Angaben – „GPS: Stand by", „UTC:", „Pos:", „Geschwindigkeit:" und „Kontostand:".

  | Laut Abschnitt 2.1 | In den neun Beispiel-SMS                                       |
  | ------------------ | -------------------------------------------------------------- |
  | „Kontostand:"      | auf Seite 12 „Aktuelles Guthaben:", auf Seite 13 „Kontostand:" |
  | „Geschwindigkeit:" | Wert steht überall ohne diesen Bezeichner                      |
  | –                  | „GPS Fencing aktiv", nirgends erklärt                          |
  | –                  | „U1:" bis „U5:", im Kapitel nur „U2-U5" erwähnt                |
  | –                  | „A off" und „B on", nirgends erklärt                           |
  | –                  | „Empfang: -99dBm", nirgends erklärt                            |
  | Temperatur         | in keiner Beispiel-SMS vorhanden                               |

- **Warum das zählt:** Das ist derselbe Befund wie DSC-045 der Generation ab SN-045 – dort
  fehlen ebenfalls Felder in der Erklärung und tauchen ungeklärte in den Beispielen auf.
  Beide Generationen sind betroffen. Die Angabe „GPS Fencing aktiv" ist zudem der einzige
  Beleg dafür, dass der Geofencing-Zustand überhaupt zurückgemeldet wird; weder Abschnitt
  2.1 noch Abschnitt 2.4 erwähnen dieses Feld.
- **Nebenbefund:** Drei Abbildungen auf Seite 13 beginnen die Guthabenzeile mit einem
  alleinstehenden Anführungszeichen ohne schließendes Gegenstück. Die Positionsangaben sind
  blau und unterstrichen gesetzt und wirken wie Verknüpfungen; die Seiten enthalten
  maschinell geprüft **keine einzige Verknüpfung**.
- **Schwere:** hoch · **Status:** offen – ergänzt Rückfrage 11

### DSC-061 – Der Geofencing-Radius unterscheidet sich zwischen den Generationen (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 12 und 15
- **Befund:** Seite 12 nennt für die Diebstahlmeldung eine Entfernung von „ca.1000m" vom
  ursprünglichen Standort, Seite 15 für denselben Sachverhalt „ca. 1 km" – derselbe Wert in
  zwei Schreibweisen, einmal ohne jedes Leerzeichen. Die Fassung ab SN-045 nennt an
  entsprechender Stelle rund **900 m**.
- **Warum das zählt:** Der Radius entscheidet darüber, wann eine Diebstahlmeldung ausgelöst
  wird. Ob die Abweichung eine bewusste Änderung zwischen den Gerätegenerationen oder ein
  Fehler in einer der beiden Fassungen ist, lässt sich aus den Quellen nicht entscheiden.
  Beide Werte sind technisch unbestätigt. Der Projektauftrag verbietet, die Generationen zu
  vermischen; ein falsch übernommener Radius wäre genau das.
- **Schwere:** mittel · **Status:** offen – an THITRONIK zu melden (Rückfrage 14)

### DSC-062 – Was bis SN-044 geregelt ist und ab SN-045 offen bleibt (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seite 15
- **Befund:** Abschnitt 2.4 regelt zwei Punkte ausdrücklich, die für die Generation ab
  SN-045 als DSC-042 und BLK-007 offen sind:
  1. **Vorrang von Pin 3:** „Geofencing kann in Schalterstellung 8 und B über Pin 3 ein-
     und ausgeschaltet werden. In allen anderen Schalterstellungen kann Geofencing per SMS
     ein- und ausgeschaltet werden." Damit ist die Zuständigkeit nach Schalterstellung
     eindeutig aufgeteilt.
  2. **Kopplung an den Schärfzustand:** „Ist WiPro geschärft, ist Geofencing automatisch
     aktiviert und muss nicht per SMS eingeschaltet werden."
- **Warum das hier steht:** Das ist ausnahmsweise kein Widerspruch, sondern eine **Antwort
  der älteren Quelle auf eine Frage, die die neuere offen lässt**. Sie darf nicht
  stillschweigend auf die Generation ab SN-045 übertragen werden – der Projektauftrag
  verbietet die Vermischung, und die Schalterstellungen 8 und B sind zwar in beiden
  Fassungen genannt, die Geräte aber verschieden. Die Regel ist deshalb als **Vorlage für
  die Rückfrage** festgehalten: gilt sie ab SN-045 unverändert fort?
- **Offen bleibt auch bis SN-044:** Seite 7 empfiehlt, Geofencing beim Abstellen in
  Gebäuden zu deaktivieren, ohne zu erwähnen, dass damit die Diebstahlmeldung entfällt und
  dass sie wieder einzuschalten ist. Steht das Fahrzeug dabei geschärft, widerspricht die
  Empfehlung der automatischen Aktivierung nach Abschnitt 2.4. Welcher Zustand sich
  durchsetzt, sagt die Quelle nicht.
- **Schwere:** mittel · **Status:** offen – Vorlage für Rückfrage 9

### DSC-063 – Warnungen und Gliederung werden bis SN-044 allein über Farbe und Piktogramme getragen (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 6, 7, 8, 10, 11, 12, 13, 14, 15, 16
- **Befund:** In keiner der elf geprüften Seiten trägt eine Warnung ein Signalwort. Die
  Sicherheitsstufe wird ausschließlich grafisch codiert, und keines dieser Mittel hat eine
  Entsprechung in der Textebene:
  - **Rote Schrift** kennzeichnet Warnungen auf den Seiten 6, 10, 11, 12, 13, 14, 15 und
    16 – darunter „!!! WiPro „all in one" und Pro-finder müssen an die gleiche Batterie
    angeschlossen sein !!!" (Seite 6), „Bei Vertragskarten darf keinesfalls ein
    Abfragecode eingegeben werden" (Seite 10) und viermal „! Nach versenden der SMS wird
    die Masternummer zusätzlich angerufen !" (Seite 13). Rote Schrift kennzeichnet auf
    denselben Seiten aber auch bloße Querverweise – dieselbe Auszeichnung für Warnung und
    Hinweis.
  - **Warndreiecke und ein rosa Kasten** tragen auf Seite 8 die sechs zwingenden
    Anforderungen an die SIM-Karte. In der Textebene stehen sie als sechs gewöhnliche
    Absätze.
  - **Ein gelbes ESD-Warnsymbol** auf Seite 8 ist die einzige Warnung vor elektrostatischer
    Entladung im gesamten geprüften Bereich. Auf der ganzen Seite steht dazu **kein
    einziges Wort**; das Symbol ist alleinige Trägerin der Warnung.
  - **Ausrufezeichenpaare** ersetzen das Signalwort („!! SIM Karte muss im Gerät sein !!",
    Seite 11).
  - **Zeigehand-, Pfeil- und Uhr-Piktogramme** gliedern auf sieben Seiten Handlung,
    Ergebnis und Zeitbedingung. Keines kommt in der Textebene vor; die Schrittfolgen sind
    weder nummeriert noch als Liste ausgezeichnet.
  - **Unterstreichung** dient auf den Seiten 4 und 16 als Zwischentitel – eine Auszeichnung,
    die keine Strukturebene ergibt und von einer Verknüpfung nicht zu unterscheiden ist.
- **Warum das zählt:** Für Screenreader, Schwarzweißdruck und erzwungene Farben ist keine
  einzige Warnung dieses Handbuchs als Warnung erkennbar. Das bestätigt die im Pilot
  bereits umgesetzte Entscheidung, die Sicherheitsklasse in der Oberfläche als **Wort**
  auszugeben, und begründet sie für diese Generation zusätzlich.
- **Schwere:** hoch (Sicherheitshinweise) · **Status:** offen

### DSC-064 – Redaktionelle Befunde im Handbuch bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 6 bis 16
- **Befund:** Sammelposition für Fehler ohne eigene sachliche Tragweite. Alle unverändert in
  den Seitenrecords übernommen, keiner still korrigiert.
  - Seite 6: „(0-30V)kontrolliert" ohne Leerzeichen (bei 400 dpi bestätigt); „WiPro III"
    mit zwei Leerzeichen; die Aufzählung der Schaltarten mit vorangestelltem Bindestrich
    ohne Leerzeichen.
  - Seite 7: „GPS Daten werden **Empfangen**" – Verb großgeschrieben; „Reflektionen" statt
    „Reflexionen".
  - Seite 8: „(Micro -SIM Format)" mit Leerzeichen vor dem Bindestrich; der Einleitungssatz
    endet ohne Satzzeichen; „Der PIN" maskulin neben „Die Pinabfrage".
  - Seite 9: „denUnterlagen" ohne Leerzeichen.
  - Seite 10: „Link (siehe 2.5)" mit zwei Leerzeichen; im Tabellenkopf „Programmier- SMS"
    mit Bindestrich und Leerzeichen; in der Prepaid-Spalte wird eine Beispielnummer mitten
    in der Ziffernfolge und ohne Trennzeichen umbrochen – während derselbe Text Leerzeichen
    in der SMS ausdrücklich verbietet.
  - Seite 11: „Programmier SMS neu programmiert" mit zwei Leerzeichen.
  - Seite 12: „Bei einem Ereignis wird **Sie** automatisch reaktiviert" – Pronomen
    großgeschrieben, liest sich als Anrede, gemeint ist die GPS-Antenne;
    „Positionabfrage" statt „Positionsabfrage"; „ca.1000m" ohne Leerzeichen; „zurück
    geschaltet" getrennt.
  - Seiten 12 und 13: „Nach **versenden** der SMS" – fünfmal im Dokument mit
    kleingeschriebenem Verb.
  - Seite 14: „bei der es sich um einen stillen Alarm"" – zwei Leerzeichen und ein
    schließendes Anführungszeichen ohne öffnendes Gegenstück; „Zustand geschaltet werden.
    Rufen Sie" mit zwei Leerzeichen nach dem Punkt.
  - Seite 15: „zuvor " Fence aus" senden" mit überzähligem Leerzeichen innerhalb der
    Anführungszeichen; „in eine Kartenprogramm" falscher Artikel; „eine ... SMS ..., die
    einen Link öffnet" Numerusfehler; „ausser" statt „außer", obwohl das Dokument sonst
    durchgehend vorreformiert mit ß schreibt („muß", „Anschluß").
  - Seite 16: „1 Sek." abgekürzt gegen „1 Sekunde" ausgeschrieben auf derselben Seite; alle
    drei Zwischentitel im Plural, obwohl die Befehle jeweils einen einzelnen Ausgang
    betreffen.
- **Schwere:** gering · **Status:** offen – gesammelt für den redaktionellen Review

### DSC-065 – Uneinheitliche Benennungen im Handbuch bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 6 bis 16
- **Befund:** Dieselbe Sache trägt im deutschen Handbuch mehrere Namen. Das ist für die
  spätere Segmentextraktion und für jede Übersetzung erheblich, weil sich nicht entscheiden
  lässt, welche Form die maßgebliche ist.

  | Sache                      | Schreibweisen in der Quelle                                                                       |
  | -------------------------- | ------------------------------------------------------------------------------------------------- |
  | SIM-Karte                  | „SIM-Karte" (S. 8), „SIM Karte" (S. 11), „Simkarte" (S. 12)                                       |
  | Bedienelement am Gerät     | „Betriebsartenschalter" (S. 4, 7, 11), „Programmwahlschalter" (S. 12)                             |
  | Guthaben                   | „Restguthaben" (S. 10), „Guthaben" (S. 8), „Kontostand" (S. 12, 13), „Aktuelles Guthaben" (S. 12) |
  | Prepaid                    | „pre-paid Karte" (S. 8), „Pre-paid Karte" (S. 10), „Prepaidkarte" (S. 9)                          |
  | Smartphone-Zusammensetzung | „Smartphone Nummern" (S. 9), „Smartphonenutzer" (S. 13), „Smartphone Nutzer" (S. 15)              |
  | gekoppelte Alarmanlage     | „WiPro III" (S. 6), „WiPro „all in one"" (S. 6, 14), „WiPro" ohne Zusatz (S. 12, 13, 15)          |
  | Zugriffsberechtigung       | „autorisierte" / „nicht autorisierte Nummern" (S. 9), „berechtigte Nummern" (S. 14)               |
  | GPS-Antenne                | „GPS Antenne" (S. 6), „GPS-Antenne" (S. 6, 7)                                                     |
  | Status-LED                 | durchgehend „Status LED" ohne Bindestrich; projektkonform wäre „Status-LED"                       |

- **Erheblich davon:** Die Fassung ab SN-045 führt die gekoppelte Alarmanlage als „WiPro III
  safe.lock", diese Generation als „WiPro „all in one"" – **die Generationen benennen das
  gekoppelte Gerät verschieden**. Das ist für die Generationentrennung und für die
  Terminologieliste zu berücksichtigen und nicht mit den übrigen Zeilen der Tabelle
  gleichzusetzen.
- **Schwere:** gering bis mittel · **Status:** offen – für Terminologieliste und
  Segmentextraktion vorgemerkt
