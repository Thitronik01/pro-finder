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
- **Nachtrag 2026-08-08 (Generationenvergleich):** Das Handbuch bis SN-044 nennt in den
  technischen Daten (DOC-BMA-SN044, Seite 18) für den Normalbetrieb den festen Wert
  „ca. 21mA" – wörtlich der Wert, den die englische SN-045-Fassung als „approx. 21mA"
  fortführt. Das stützt die Lesart, dass die englische SN-045-Tabelle den Wert der älteren
  Generation unverändert übernommen hat und nie auf die Spanne 16–21 mA aktualisiert
  wurde. Siehe auch DSC-069.
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

### DSC-033 – Zehn Sprachen dokumentieren zehn unterschiedliche Befehlsprofile (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 61, 71–75; tschechische Seiten 84,
  94 und 97–99; dänische Seiten 111, 118–122; spanische Seiten 134 und 144–147;
  italienische Seiten 160, 168–172; niederländische Seiten 184 und 193–197; polnische
  Seiten 209 und 219–223; schwedische Seiten 235 und 243–246
- **Befund:** Die französische Fassung dokumentiert durchgängig eigene Befehle, nicht nur
  an einer Stelle. Damit ist DSC-026 präzisiert: es ist kein einmaliger Ausrutscher im
  Fließtext.

| Funktion        | Deutsch          | Englisch        | Französisch                   | Tschechisch     | Dänisch                   | Spanisch                      | Italienisch                            | Niederländisch            | Polnisch                             | Schwedisch              |
| --------------- | ---------------- | --------------- | ----------------------------- | --------------- | ------------------------- | ----------------------------- | -------------------------------------- | ------------------------- | ------------------------------------ | ----------------------- |
| Geofencing ein  | `fence an`       | `fence on`      | `activer le gardiennage`      | `plot zap`      | `fence til`               | `fence on`                    | `fence attivo`                         | `fence aan`               | `fence on`                           | `fence pa`              |
| Geofencing aus  | `fence aus`      | `fence off`     | `desactiver le gardiennage`   | `plot vyp`      | `fence fra`               | `valla apagada` / `fence off` | `recinto spento` / `fence disattivato` | `fence off` / `fence uit` | `ogrodzenie wyłączone` / `fence off` | `fence pa` / `fence av` |
| Statusbericht   | `status`         | `status`        | `rapport d etat`              | `stav`          | `status`                  | `status`                      | `stato`                                | `status`                  | `status`                             | `status`                |
| Position        | `position`       | `position`      | `position`                    | `poloha`        | `position`                | `position`                    | `posizione`                            | `positi`                  | `position`                           | `position`              |
| Ausgang A ein   | `a an`           | `a on`          | `activer la sortie A`         | `a zap`         | `a til`                   | `a on`                        | `a attivo`                             | `a aan`                   | `a on`                               | `a pa`                  |
| Ausgang A aus   | `a aus`          | `a off`         | `desactiver la sortie A`      | `a vyp`         | `a fra`                   | `a off`                       | `a disattivato`                        | `a uit`                   | `a off`                              | `a av`                  |
| Ausgang gepulst | `a impuls`       | `a pulse`       | `sortie A impulsion`          | `a impuls`      | `a impuls`                | `a pulse`                     | `impulso a`                            | `a impuls`                | `a pulse`                            | `a impuls`              |
| Ausgang Zeit    | `a %min%`        | `a %min%`       | `a %min%`                     | `a %min%`       | `a %min%`                 | `a %min%`                     | `a %min%`                              | `a %min%`                 | `a %min%`                            | `a %min%`               |
| Anlernmodus ein | `anlernmodus an` | `teach mode on` | `activer le mode d appairage` | `uceni zap`     | `Indlaeringsmodus taendt` | `teach mode on`               | `modalita di apprendimento attiva`     | `instelmodus aan`         | `teach mode on`                      | `inlarningslage pa`     |
| Hilfe-SMS       | SCHARF/UNSCHARF  | ARM/DISARM      | ACTIVER/DESACTIVER            | ZAPNOUT/VYPNOUT | AKTIVERET/DEAKTIVERET     | ARM/DISARM                    | ABILITATO/DISABILITATO                 | SCHERP/ONSCHERP           | ARM/DISARM                           | SKARP/OSKARP            |

Zehn vollständig geprüfte Sprachfassungen ergeben zehn unterschiedliche
Dokumentationsprofile. Das spanische Profil ist dabei kein konsistenter lokalisierter
Satz: Seite 134 nennt `valla apagada`, Kapitel 5 dagegen `fence on`/`fence off` und die
Hilfe-SMS bleibt vollständig englisch. Italienisch und Niederländisch sind ebenfalls
intern gemischt: Diagnose und Kapitel nennen jeweils verschiedene Ausschaltbefehle
(`recinto spento`/`fence disattivato` beziehungsweise `fence off`/`fence uit`). Nur
`a %min%` lautet in allen zehn gleich;
`a impuls` ist in Deutsch, Tschechisch und Dänisch identisch, im Englischen und Spanischen
aber `a pulse`, Italienisch dreht die Reihenfolge zu `impulso a`. Die Lokalisierung ist
damit **nicht einmal in sich konsistent** – weder
sprachübergreifend noch innerhalb einer Fassung.

Die dänische Geräte-Hilfe-SMS nennt `AKTIVERET`, `DEAKTIVERET`, `STATUS`, `POS`, während
Abschnitt 5.1 trotz der Überschrift „Styre alarmsystemet via SMS" nur einen Anruf erklärt.
`POS` steht zwar weiterhin in allen zehn Hilfe-SMS, die Kapitel verwenden jedoch
unterschiedliche Wörter; Niederländisch druckt sogar das unvollständige `positi`.

Die spanische Hilfe-SMS nennt `ARM`, `DISARM`, `STATUS`, `POS`; der spanische Fließtext
nennt dagegen `status` und `position`. Zusammen mit `valla apagada` gegen `fence off`
bestätigt gerade dieser Mischsatz, dass die Hilfe-SMS nicht als vollständige oder
zeichengetreue Befehlsliste taugt.

Die polnische Fassung bildet ein neuntes Mischprofil: Die GPS-Diagnose nennt
`ogrodzenie wyłączone`, Kapitel 5 dagegen `fence off`; Status, Position, Ausgänge und
Anlernmodus übernehmen englische Kapitelbefehle. Auch die englische Hilfe-SMS
`ARM`/`DISARM`/`STATUS`/`POS` erklärt nicht die im Kapitel sichtbaren Langformen.

Die schwedische Fassung bildet ein zehntes und besonders widersprüchliches Profil:
Seite 235 fordert zum Deaktivieren des Geofencings `fence pa`. Abschnitt 5.2 auf Seite
243 definiert genau `fence pa` jedoch als Einschaltbefehl und nennt für das Ausschalten
`fence av`. Die Geräte-Hilfe-SMS setzt dazu `SKARP`/`OSKARP`/`STATUS`/`POS`; die Kapitel
verwenden die Langformen `status` und `position`. Der konkrete Ein-/Aus-Widerspruch ist
zusätzlich als DSC-085 geführt.

- **Der Widerspruch:** Auf Seite 74 sind drei der vier Ausgangsbefehle lokalisiert, der
  zeitgesteuerte bleibt `a %min%`. Entweder akzeptiert das Gerät gemischte Befehlssätze,
  oder eine der beiden Formen ist falsch. `position` lautet in sieben der zehn Fassungen
  gleich; Tschechisch verwendet `poloha`, Italienisch `posizione` und Niederländisch das
  unvollständige `positi`.
- **Beobachtung:** Alle französischen Befehle sind konsequent **ohne Akzent** gesetzt
  („desactiver", „rapport d etat", „mode d appairage"), im Fließtext daneben aber mit
  Akzent. Der tschechische Teil zeigt dasselbe Muster von der anderen Seite: sämtliche
  **Geräte-SMS** sind dort ohne Diakritika gesetzt („Neplatny povel! Mozne povely",
  „Vloupani dvere/okno", „Napajeni mene nez 11.2 V"), während der umgebende Fließtext
  diakritische Zeichen verwendet. Auch die Beispielwerte nutzen den Dezimalpunkt („11.2 V")
  statt des im Fließtext üblichen Kommas. Dänische Geräte-SMS setzen ebenfalls `dor` und
  `tradlos` statt „dør" und „trådløs"; der ASCII-Befund steht damit in einer fünften
  Sprachfassung. Italienisch setzt `modalita` ohne Akzent; damit ist das ASCII-Muster in
  sechs Sprachfassungen belegt.
- **Was daraus folgt:** Neun Fassungen legen eine Lokalisierung von Eingaben und Ausgaben
  nahe; Spanisch und Polnisch mischen lokalisierte Einzelanweisungen mit englischen
  Kapitel- und Gerätetexten. Italienisch und Niederländisch mischen innerhalb der Diagnose
  und des Kapitels ebenfalls verschiedene Sprachen beziehungsweise Wörter. Durchgängig sichtbares
  ASCII macht eine Zeichensatzgrenze plausibel,
  erklärt aber weder die Sprachwahl noch die gültigen Zeichenfolgen. Die Projektannahme
  „SMS-Befehle sind sprachneutrale geschützte Token" ist damit unhaltbar; genau deshalb
  braucht es den technischen Review.
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

### DSC-021 – Vier Sprachfassungen zählen jeweils eine interne Seite zu wenig (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 51–76 („Page 1 de 25" bis „Page 26 de
  25"), spanische Seiten 125–149 („Página 1 de 24" bis „Página 25 de 24") und
  niederländische Seiten 174–198 („Pagina 1 van 23" bis „Pagina 24 van 23") und
  polnische Seiten 200–224 („Strona 1 z 24" bis „Strona 25 z 24") gegenüber
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
- **Spanische Bestätigung 2026-08-09:** Der spanische Teil umfasst tatsächlich **25**
  interne Seiten, nennt aber durchgehend 24. Auch hier erzeugen zerrissene Seitenumbrüche
  zusätzliche fast leere Seiten; PDF-Seite 141 enthält nur den Rest eines Satzes. Die
  letzte spanische Seite trägt folgerichtig die unmögliche Fußzeile „Página 25 de 24".
- **Niederländische Bestätigung 2026-08-09:** Der niederländische Teil umfasst tatsächlich
  **24** interne Seiten, nennt aber durchgehend 23. PDF-Seite 190 enthält nur den Rest eines
  Satzes aus 2.9. Dadurch beginnen Kapitel 3 bis 6 jeweils eine Seite später als im
  Inhaltsverzeichnis; die Schlussseite 198 trägt „Pagina 24 van 23".
- **Polnische Bestätigung 2026-08-09:** Der polnische Teil umfasst tatsächlich **25**
  interne Seiten, nennt aber durchgehend 24. PDF-Seite 216 enthält nur das isolierte
  Satzfragment „Programowanie numerów miejsc docelowych."; dadurch beginnen Kapitel 3 bis
  6 eine Seite später als im Inhaltsverzeichnis. Die Schlussseite 224 trägt folgerichtig
  „Strona 25 z 24".
- **Folge:** Segment-Mapping darf nicht über die interne Seitenzahl erfolgen, sondern nur
  über Kapitelnummer und PDF-Seite. **Status:** offen

### DSC-022 – Eingebettete Bildbeschriftung in keiner Sprachfassung lokalisiert (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Abschnitt 1.2 – deutsche Seite 8, englische Seite 32,
  französische Seite 56, tschechische Seite 83, dänische Seite 107, spanische Seite 130,
  italienische Seite 156, niederländische Seite 180, polnische Seite 205 und schwedische
  Seite 231
- **Beleg:** Die Beschriftung am Antennenfoto lautet in allen zehn Fassungen deutsch
  „GPS-Antenne (Optional)", während die Legende danebensteht als „External GPS antenna
  (optional)" (EN) beziehungsweise „Antenne GPS externe (en option)" (FR).
- **Bewertung:** Die Grafik wurde offenbar als fertiges Bild in alle Sprachteile übernommen.
  Bestätigt sind DE, EN, FR, CS, DA, ES, IT, NL, PL und SV – zehn von zehn vollständig
  geprüften Fassungen.
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

### DSC-015 – Überschrift 5.5 ist in Englisch und Dänisch wortgleich mit 5.1 (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seite 46 sowie dänische Seiten 102, 110 und 120
- **Beleg:** Abschnitt 5.5 trägt den Titel „Controlling the alarm system via SMS" – identisch
  mit 5.1 –, behandelt inhaltlich aber die beiden Ausgänge („Pro-finder has two separately
  controllable outputs"). Die deutsche Fassung nennt denselben Abschnitt korrekt
  „5.5 Ausgänge per SMS steuern" (Seite 22). **Dänische Bestätigung 2026-08-09:**
  „Styre alarmsystemet via SMS" steht ebenfalls wortgleich bei 5.1 und 5.5. Der Fehler ist
  dort dreifach belegt: im Inhaltsverzeichnis (Seite 102), im roten Querverweis (Seite 110)
  und an der Zielüberschrift selbst (Seite 120), deren erster Absatz ausdrücklich die zwei
  separat steuerbaren Ausgänge beschreibt.
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
  ebenso: Fließtext „pod štítek ALARM", Tip dagegen „pod označením _AAlarm_". Auf der
  dänischen Seite 113 stehen ebenfalls `ALARM` und `AAlarm` nebeneinander. Die spanische
  Seite 138 setzt `ALARMA` gegen `AAlarm`. Die italienische Seite 162 setzt `ALLARME`
  gegen `AAllarme`, die niederländische Seite 187 `ALARM` gegen `AAlarm`. Damit steht der
  Fehler in sieben von acht geprüften Sprachfassungen – er wurde konsequent mitübersetzt
  statt bemerkt.
- **Polnische Bestätigung:** Seite 213 setzt ebenfalls `ALARM` im Fließtext gegen
  `AAlarm` im unmittelbar folgenden Tipp. Der Fehler steht damit in acht von neun
  vollständig geprüften Sprachfassungen.
- **Schwedische Bestätigung:** Seite 237 setzt ebenfalls `ALARM` im Fließtext gegen
  `AAlarm` im unmittelbar folgenden Tipp. Der Fehler steht damit in neun von zehn
  vollständig geprüften Sprachfassungen; der deutsche Teil ist die Ausnahme.
- **Schwere:** mittel · **Status:** offen

### DSC-017 – Syntaxbedeutung des Minuszeichens nur implizit (ab SN-045)

- **Dokument:** DOC-IBA-SN045, englische Seiten 39 und 40, Abschnitte 2.8 und 2.9
- **Beleg:** Die Syntaxgrafik in 2.8 erklärt „+" (Landesvorwahl) und „S" (Smartphone),
  nicht aber das „-". Erst das dritte Tabellenbeispiel auf Seite 40
  („+S491511142338-491736660456", Zeile „Master number as smartphone number + an
  unauthorised number") lässt erschließen, dass „-" eine unberechtigte Nummer kennzeichnet.
- **Dänische Bestätigung:** Seiten 114/115 erklären ebenfalls nur Landesvorwahl und `S`;
  erst das dritte Tabellenbeispiel zeigt das Minuszeichen zusammen mit einer
  „uautoriseret nummer". Die berechtigungssteuernde Regel bleibt auch in der fünften
  geprüften Sprache implizit.
- **Spanische Bestätigung:** Seite 139 erklärt ebenfalls nur Landesvorwahl und `S`; das
  Minuszeichen steht erst in der dritten Beispielzeile vor einer „número no autorizado".
  Die sicherheitsrelevante Regel bleibt auch in der sechsten geprüften Sprache implizit.
- **Italienische und niederländische Bestätigung:** Die Seiten 164 beziehungsweise
  188/189 erklären ebenfalls nur Landesvorwahl und `S`; die Bedeutung des Minuszeichens
  bleibt ausschließlich aus dem dritten Tabellenbeispiel ableitbar. Damit ist die Regel
  in allen acht vollständig geprüften Sprachfassungen implizit.
- **Polnische Bestätigung:** Seite 214 erklärt ebenfalls Pluszeichen und `S`, nicht aber
  das Minuszeichen vor der nicht autorisierten Nummer. Nach dem polnischen Abschluss war
  die Regel damit in neun vollständig geprüften Sprachfassungen nur implizit.
- **Schwedische Bestätigung:** Seiten 238/239 erklären ebenfalls nur Pluszeichen und `S`;
  erst das dritte Beispiel zeigt das Minuszeichen vor einer nicht autorisierten Nummer.
  Die Regel bleibt damit in allen zehn vollständig geprüften Fassungen implizit.
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
- Seiten 23, 47 und 147: In allen drei Unterüberschriften von 5.5 fehlt das Leerzeichen
  zwischen Nummer und Titel („5.5.1Ausgänge" / „5.5.1Switching" /
  „5.5.1Conectar"). Der Fehler steht auch spanisch und ist damit ein Vorlagen-, kein
  Übersetzungsfehler.
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
- **Dänische Bestätigung 2026-08-09:** Seite 108 übernimmt im Abschnitt 1.3 ebenfalls 5.4
  statt 5.5. In der Betriebsartentabelle auf Seite 109 verweist Zeile F ebenfalls auf 1.5.2
  statt 1.5.3. Beide Vorlagenfehler stehen damit in der fünften geprüften Sprachfassung.
- **Spanische Bestätigung 2026-08-09:** Seite 131 verweist ebenfalls auf 5.4 statt 5.5;
  Seite 132 auf 1.5.2 statt 1.5.3. Beide Fehler stehen damit auch in der sechsten
  vollständig geprüften Fassung.
- **Italienische und niederländische Bestätigung 2026-08-09:** Italienisch übernimmt die
  Fehler auf den Seiten 157/158, Niederländisch auf 181/182. Beide Fehlverweise stehen
  damit in allen acht vollständig geprüften Fassungen.
- **Polnische Bestätigung 2026-08-09:** Seite 206 verweist auf 5.4 statt 5.5, Seite 207
  auf 1.5.2 statt 1.5.3. Nach dem polnischen Abschluss standen beide Vorlagenfehler damit
  in neun vollständig geprüften Fassungen.
- **Schwedische Bestätigung 2026-08-09:** Seite 232 verweist auf 5.4 statt 5.5, Seite 233
  auf 1.5.2 statt 1.5.3. Beide Vorlagenfehler stehen damit in allen zehn vollständig
  geprüften Fassungen.
- **Schwere:** mittel (Nutzende landen im falschen Kapitel) · **Status:** offen

### DSC-041 – Querverweis auf 5.1 führt inhaltlich ins Leere (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seiten 19 und 21
- **Befund:** Seite 19 verweist für die Ansteuerung von Blinker und Sirene auf Abschnitt
  5.1. Abschnitt 5.1 „Alarmanlage per SMS steuern" (Seite 21) beschreibt ausschließlich
  das Scharf- und Unscharfschalten der WiPro III (safe.lock) **per Anruf** und nennt
  weder Blinker noch Sirene. Auch die Überschrift trifft den Inhalt nicht: sie kündigt
  eine SMS-Steuerung an, der Abschnitt beschreibt einen Anruf.
- **Dänische Bestätigung:** Die Diebstahlmeldung auf Seite 117 verweist für Blinker und
  Sirene auf 5.1; der dänische Zielabschnitt auf Seite 119 trägt zwar „via SMS" im Titel,
  erklärt aber ebenfalls ausschließlich einen Anruf. Die Hilfe-SMS auf Seite 118 nennt
  zusätzlich `AKTIVERET`/`DEAKTIVERET`, ohne dass 5.1 deren Verwendung erklärt.
- **Spanische Bestätigung:** Abschnitt 5.1 auf Seite 145 heißt „Control del sistema de
  alarma por SMS", erklärt aber ebenfalls ausschließlich einen Anruf. Die Hilfe-SMS auf
  Seite 144 bleibt vollständig englisch (`ARM`/`DISARM`).
- **Italienische und niederländische Bestätigung:** Die Zielabschnitte auf den Seiten 169
  und 194 kündigen ebenfalls eine SMS-Steuerung an, erklären aber nur einen Anruf. Damit
  ist der Vorlagenfehler in allen acht vollständig geprüften Fassungen belegt.
- **Polnische Bestätigung:** Seite 218 verweist für Blinker und Sirene auf 5.1; der
  polnische Zielabschnitt auf Seite 220 kündigt SMS-Steuerung an, beschreibt aber nur
  einen Anruf. Nach dem polnischen Abschluss stand der Fehler damit in neun vollständig
  geprüften Fassungen.
- **Schwedische Bestätigung:** Seite 241 verweist für Blinker und Sirene auf 5.1; der
  schwedische Zielabschnitt auf Seite 243 kündigt SMS-Steuerung an, beschreibt aber nur
  einen Anruf. Der Fehler steht damit in allen zehn vollständig geprüften Fassungen.
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
- **Schwedische Bestätigung:** Seite 237 wiederholt die Auslassung der Abschnitte 2.5 bis
  2.8 und verlangt in 2.5 anschließend selbst den Adressbucheintrag mit Ländervorwahl.
- **Schwere:** hoch (die Erreichbarkeit des Geräts hängt daran) · **Status:** offen

### DSC-044 – Die Steuerberechtigung hängt an einem nirgends erklärten Zeichen (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Seite 17, Tabelle „Beispiele für verschiedene
  Programmier-SMS"
- **Befund:** Autorisierte und nicht autorisierte Zielrufnummern unterscheiden sich in den
  Beispielen erkennbar nur durch das Zeichen vor der Nummer. Der Fließtext benennt diese
  Regel an keiner Stelle des deutschen Teils; sie ist ausschließlich aus dem Vergleich der
  Beispielzeilen erschließbar. Ein falsches Zeichen kippt die Steuerberechtigung einer
  Rufnummer.
- **Sprachübergreifende Bestätigung:** Italienische Seite 164 und niederländische Seiten
  188/189 wiederholen dieselbe unerklärte Syntax. Die Regel ist damit in allen acht
  vollständig geprüften Fassungen nur implizit.
- **Polnische Bestätigung:** Seite 214 zeigt denselben Unterschied ausschließlich im
  dritten Beispiel. Nach dem polnischen Abschluss blieb die Berechtigungsregel damit in
  neun vollständig geprüften Fassungen implizit.
- **Schwedische Bestätigung:** Seiten 238/239 zeigen denselben Unterschied ausschließlich
  im dritten Beispiel. Die Berechtigungsregel bleibt damit in allen zehn vollständig
  geprüften Fassungen implizit.
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
  ist damit kein Übersetzungsartefakt, sondern betrifft schon das deutsche Original. Der
  dänische Teil wiederholt auf Seite 117 `11.2 V` im Gerätebild gegen `11,2 V` im
  Fließtext. Der spanische Teil zeigt auf Seite 143 ebenfalls `11.2 V` im englischen
  Gerätebild gegen `11,2 V` im spanischen Fließtext. Italienische Seite 167 und
  niederländische Seite 192 wiederholen Punkt im Gerätebild gegen Komma im Fließtext. Das
  Muster steht damit in allen acht vollständig geprüften Sprachen.
- **Polnische Bestätigung:** Seite 218 zeigt ebenfalls `Voltage below 11.2 V` im
  Gerätebild gegen 11,2 V und 12,5 V im polnischen Fließtext. Nach dem polnischen
  Abschluss stand das Muster damit in neun vollständig geprüften Sprachen.
- **Schwedische Bestätigung:** Seite 241 zeigt ebenfalls `Voltage below 11.2 V` im
  Gerätebild gegen 11,2 V und 12,5 V im schwedischen Fließtext. Das Muster steht damit
  in allen zehn vollständig geprüften Sprachen.
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
- **Polnische Bestätigung:** Seite 209 verwendet dieselben drei Diagnosefarben; die
  Normalbetriebstabelle auf Seite 217 belegt Rot, Gelb und Grün erneut mit anderen
  Bedeutungen. Der geräteseitige Farbkonflikt besteht auch in der neunten Fassung.
- **Schwedische Bestätigung:** Seite 235 verwendet dieselben drei Diagnosefarben; die
  Normalbetriebstabelle auf Seite 240 belegt Rot, Gelb und Grün erneut mit anderen
  Bedeutungen. Der geräteseitige Farbkonflikt besteht auch in der zehnten Fassung.
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

- **Dokument:** DOC-IBA-SN045, Seiten 5, 8, 9, 12, 15, 16, 18, 21, 22, 23
- **Befund:** Sammelposition für Benennungen, die denselben Gegenstand unterschiedlich
  bezeichnen oder gar nicht erklärt werden.
  - **Nachtrag 2026-08-22 (Seite 5):** Der Haftungsausschluss schreibt „Die Alarmanlage
    ist an die Starterbatterie angeschlossen", obwohl derselbe Abschnitt den Pro-finder
    eine Seite später als **Ortungssystem** einführt und die **WiPro III (safe.lock)** als
    „Alarmanlage" bezeichnet. Welches Gerät die Tiefentladung der Starterbatterie
    verursacht – der Pro-finder, die WiPro III oder beide zusammen –, ist damit nicht
    bestimmbar. Der Absatz liest sich insgesamt wie aus einer Alarmanlagen-Anleitung
    übernommen („keine Wertgegenstände offen im Fahrzeug lassen", „das Fahrzeug immer
    abschließen"). Das ist keine reine Terminologiefrage: Von der Zuordnung hängt ab,
    welches Gerät nach längerer Standzeit die Batterie leert.
  - **Nachtrag 2026-08-22 (Seite 8):** Dieselbe optionale Antenne trägt auf einer Seite
    drei Bezeichnungen – „GPS-pro" auf dem Etikett des abgebildeten Teils,
    „GPS-Antenne (Optional)" als eingebettete Bildbeschriftung und „Externe GPS-Antenne
    (Optional)" in der Legende (siehe auch DSC-022).
  - **Nachtrag 2026-08-22 (Seite 9):** Pin 3 trägt in Abschnitt 1.3 zwei verschiedene
    Funktionen – „Geofencing (schaltbar über Pin 3)" und „Manueller Alarm bei Spannung an
    Pin 3" in Betriebsart A. Das Verhältnis der beiden Belegungen zueinander erklärt die
    Quelle nicht; siehe auch DSC-042 und BLK-007.
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

- **Dokument:** DOC-IBA-SN045, Seiten 7, 9, 12, 19, 20, 23
- **Befund:** Fragen, die sich beim Schreiben der Aufgaben gestellt haben und die die
  Quelle **gar nicht** beantwortet. Sie sind keine Fehler, aber sie begrenzen, was die
  HTML-Anleitung sagen darf.
  - **Nachtrag 2026-08-22 – GPS-Antennenkabel (Seite 7):** „die Kabellänge zwischen
    GSM-Modul und GPS-Antenne zwei Meter beträgt" ist bei 500 dpi als feste Angabe
    bestätigt, nicht als Obergrenze. Ob damit die mitgelieferte Kabellänge oder eine
    maximal zulässige Gesamtlänge gemeint ist, sagt die Quelle nicht. Dieselbe offene
    Frage besteht seit der 400-dpi-Gegenprüfung vom 2026-08-10 in der Generation bis
    SN-044 (DSC-073); die Werte werden **nicht** zwischen den Generationen übertragen.
  - **Nachtrag 2026-08-22 – Betriebsarten (Seite 9):** Abschnitt 1.3 zählt sechs
    Funktionsgruppen auf, ohne einer einzigen eine Schalterstellung zuzuordnen. Welche
    Betriebsart welche Funktion aktiviert, geht erst aus der Tabelle auf Seite 10 hervor;
    die Ausnahme „in Betriebsart A" beim manuellen Alarm ist die einzige Stellungsangabe
    im Fließtext. Ebenfalls unbeantwortet: welche Spannung an Pin 3 den Panikalarm
    auslöst, an wen er geht, und welche Schalterstellung welche der Spannungen U1 bis U5
    im Statusbericht anzeigt.
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
- **Nachtrag 2026-08-09 (englischer Teil):** Der Widerspruch besteht spiegelbildlich auch
  im englischen Teil – und dort auf einer Doppelseite. Die englische Seite 32 lehrt die
  Schaltbefehle `arm` und `disarm`, die auf der gegenüberliegenden Seite 31 abgebildete
  Hilfe-SMS des Geräts (unverändert das deutsche Bild) führt stattdessen `SCHARF` und
  `UNSCHARF`. Umgekehrt decken sich die englischen **Ausgangsbefehle** (`A on`, `A off`,
  `A pulse`, Seite 34) mit der Geräteliste (`A ON`, `A OFF`, `A PULSE`), während die
  deutschen (`A an`, `A aus`, `A impuls`) abweichen. Jede Sprachfassung stimmt also mit
  einem anderen Teil der Geräteliste überein und widerspricht dem anderen; der Zeitbefehl
  `A XXX` fehlt der Geräteliste in beiden. Der zugeschaltete Alarm wird englisch mit
  `disarm`, deutsch mit `unscharf` beendet – die Geräteliste kennt dafür nur `ALARM AUS`.
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
    Kapitel 2.6 erklärt"; 2.6 ist die Positionsabfrage. **Abgeschlossen 2026-08-08:**
    Seite 17 ist im Seitenbild geprüft; der Abschnitt „Fahrzeug wiederfinden" trägt dort
    die Nummer **2.8** (aufgedruckte Seite 15), ebenso im deutschen Inhaltsverzeichnis auf
    Seite 2. Der vierte falsche Verweis ist damit belegt – auch er nennt eine zu niedrige
    Nummer und passt in das Muster.
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
- **Nachtrag 2026-08-09 (englischer Teil):** Alle vier falschen Querverweise sind wörtlich
  in den englischen Teil übernommen – „(see 2.5)" auf Seite 28, „as described in chapter
  2.3" auf Seite 30, „as described under 2.4" auf Seite 31 und „Chapter 2.6 explains how
  to find your vehicle" auf Seite 33. Die zutreffenden Verweise sind dort ebenfalls
  zutreffend übernommen. Die Fehler liegen also in der Vorlage, nicht in einer
  Sprachfassung; jede weitere Sprachfassung dieses Dokuments wird sie erwartbar ebenfalls
  enthalten.
- **Nachtrag 2026-08-09 (französischer Teil, abgeschlossen):** Alle vier falschen
  Querverweise stehen auch französisch – „(voir 2.5)" auf Seite 45, „comme décrit sous
  2.3" auf Seite 47, „comme décrit sous 2.4" auf Seite 48 und „Le chapitre 2.6 explique
  comment retrouver votre véhicule" auf Seite 50. Damit sind die vier Vorlagenfehler in
  **allen drei geprüften Sprachteilen** wortgleich nachgewiesen; die zutreffenden
  Verweise treffen ebenfalls überall zu.
- **Nachtrag 2026-08-09 (schwedischer Teil, abgeschlossen):** Alle vier falschen
  Querverweise stehen auch schwedisch: „(se 2.5)" für den Kartenlink (Seite 62, gemeint
  ist 2.6), „enligt beskrivning under 2.3" für den Statusbericht (Seite 64, gemeint ist
  2.5), „enligt beskrivning under 2.4" für die Positionsabfrage (Seite 65, gemeint ist
  2.6) und „finns beskrivet i kapitel 2.6" für das Wiederfinden (Seite 67, gemeint ist
  2.8). Damit sind die vier Vorlagenfehler in **allen vier Sprachteilen** belegt. Die
  zutreffenden Verweise treffen auch schwedisch zu.
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
- **Nachtrag 2026-08-09 (englischer Teil):** Beides ist wörtlich mitübersetzt. Die
  englische Seite 27 führt das Smartphone-Kennzeichen als kleines **„s"** ein, Seite 28
  schreibt in Strukturabbildung und Erläuterung ein großes **„S"** – derselbe Widerspruch
  in beiden Sprachteilen. Auch die Berechtigungsregel bleibt englisch unausgesprochen: die
  Beispieltabelle auf Seite 28 reiht autorisierte Nummern mit Plus- und die nicht
  autorisierte mit Minuszeichen an, ohne dass irgendein Satz die Zeichen erklärt.
- **Nachtrag 2026-08-09 (französischer Teil):** Dritter Sprachteil, derselbe Widerspruch –
  Seite 44 führt das Kennzeichen als kleines fettes „s" ein, Seite 45 schreibt « S » groß.
  Auch die Plus-/Minus-Regel bleibt französisch unausgesprochen.
- **Nachtrag 2026-08-09 (schwedischer Teil):** Vierter Sprachteil, derselbe Widerspruch –
  Seite 61 kleines „s", Seite 62 großes „S". Der s/S-Konflikt ist damit vollständige
  Vorlage; auch die Plus-/Minus-Regel bleibt schwedisch unausgesprochen.
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
- **Nachtrag 2026-08-09 (englischer Teil):** Der englische Teil verweist ebenfalls zweimal
  auf die nicht existierende Tabelle – „in the query codes table on the previous page" und
  „according to the query codes table" (Seite 28). Die Vorseite 27 enthält keine Tabelle,
  sondern nur den Verweis auf die Kartenunterlagen und einen FAQ-Link. Der Vorlagenfehler
  besteht in beiden Sprachteilen.
- **Nachtrag 2026-08-09 (französischer Teil):** Auch französisch wird zweimal auf die
  Tabelle verwiesen („dans le tableau des codes d'interrogation de la page précédente",
  Seite 45). Dort ist die Lücke am größten: Die Vorseite 44 enthält weder Tabelle noch den
  angekündigten FAQ-Link – der Link fehlt im französischen Teil vollständig (DSC-074).
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
- **Nachtrag 2026-08-09 (englischer Teil):** Die englische Parallelseite 28 zeigt eine
  dritte Spielart desselben Problems. In ihrer Textebene ist das Sternzeichen nicht leer,
  sondern ein Zeichen aus dem Unicode-Private-Use-Bereich (U+F0DA) – beim Kopieren oder
  Vorlesen entsteht daraus ebenfalls kein verwertbares Zeichen. Zusätzlich verwendet die
  Seite **zwei verschiedene Glyphen** für dasselbe erste Codezeichen: den sechsstrahligen
  Stern in Strukturabbildung und Erläuterung, ein gewöhnliches ASCII-Sternchen in den
  Zellen der Beispieltabelle (beide bei 400 dpi gesichert). Welches Zeichen tatsächlich zu
  tippen ist, lässt sich der Seite nicht entnehmen.
- **Nachtrag 2026-08-09 (französischer und schwedischer Teil):** Identisches Muster auf
  den Seiten 45 und 62 – sechsstrahliger Stern im Diagramm und in den roten Absätzen,
  ASCII-Sternchen in den Tabellenzellen, Private-Use-Zeichen in der Textebene. Der
  Doppelglyphen-Befund ist damit in allen vier Sprachteilen Vorlage.
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
- **Widerspruch innerhalb derselben Generation:** DOC-BMA-SN044, Seite 11, erklärt grünes
  Dauerlicht nur mit „Pro-finder versendet eine SMS". DOC-KA-SN044, Seite 2,
  formuliert in der deutschen Zeile dagegen „Pro-finder empfängt/versendet eine sms" und
  in der direkt darunterstehenden englischen Zeile nur „Pro-finder receives/sends a text
  message". Die Kurzanleitung bestätigt damit den wechselseitigen Sende-/Empfangsvorgang,
  während die Bedienungsanleitung nur den Versand nennt. Ob grünes Dauerlicht beim
  Empfang, beim Versand oder bei beiden Vorgängen gilt, bleibt offen; Aufgabe 07 gibt beide
  Quellenstände wieder.
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
- **Nachtrag 2026-08-08 (englischer Teil, Seiten 20–26):** Das Muster ist Vorlage, nicht
  Sprachfassung. Der englische Teil wiederholt es vollständig: das ESD-Symbol steht auch
  dort (Seite 26) ohne ein einziges Wort zur elektrostatischen Entladung, der rosa Kasten
  mit sechs Warndreiecken trägt die SIM-Vorgaben ohne Signalwort, rote Schrift kennzeichnet
  auf Seite 24 sowohl die Batteriewarnung als auch einen bloßen Querverweis, und die
  Zwischentitel sind weiterhin nur unterstrichen. Ein Auszeichnungsmittel trägt in beiden
  Sprachteilen tatsächlich Information farbunabhängig: die LED-Farbbalken (deutsch Seiten
  7 und 11, englisch Seiten 25 und 29) unterscheiden Blinken von Dauerleuchten über
  gestrichelte gegen durchgezogene Balken. **Innerhalb** der Blink- bzw. Dauerlichtgruppe
  bleibt die Farbe aber auch dort das einzige Merkmal (DSC-059). _(Korrektur 2026-08-09:
  Die frühere Fassung dieses Nachtrags nannte die Balken auf Seite 25 fälschlich die
  einzige derartige Stelle beider Sprachteile – die deutschen Seiten 7 und 11 verwenden
  dieselbe Darstellung und hatten sie auch dokumentiert.)_
- **Schwere:** hoch (Sicherheitshinweise) · **Status:** offen

### DSC-064 – Redaktionelle Befunde im Handbuch bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 6 bis 18
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
  - Seite 17: „der Zeit, der zuletzt empfangenen Position" – falsches Komma; „ohne GPS
    Empfang" gegen „des GPS-Empfanges" im selben Absatz; fehlendes Komma vor „um die
    Darstellung … zu vereinfachen".
  - Seite 18: „Wertstoffrecyling" statt „Wertstoffrecycling"; „Bei Ausserbetriebnahme" mit
    ss gegen die sonst vorreformierte ß-Schreibung; „Montags bis Freitags" großgeschrieben;
    „gezielt weiter helfen" getrennt; „Mhz" statt „MHz"; die Zeile „Stromaufnahme
    Netzsuche" als einzige der neun Datenzeilen ohne Doppelpunkt (bei 400 dpi bestätigt);
    „SN :" mit Leerzeichen vor dem Doppelpunkt.
- **Schwere:** gering · **Status:** offen – gesammelt für den redaktionellen Review

### DSC-065 – Uneinheitliche Benennungen im Handbuch bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 6 bis 18
- **Befund:** Dieselbe Sache trägt im deutschen Handbuch mehrere Namen. Das ist für die
  spätere Segmentextraktion und für jede Übersetzung erheblich, weil sich nicht entscheiden
  lässt, welche Form die maßgebliche ist.

  | Sache                      | Schreibweisen in der Quelle                                                                                       |
  | -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
  | SIM-Karte                  | „SIM-Karte" (S. 8), „SIM Karte" (S. 11), „Simkarte" (S. 12), „SIM Format" (S. 18)                                 |
  | Bedienelement am Gerät     | „Betriebsartenschalter" (S. 4, 7, 11), „Programmwahlschalter" (S. 12)                                             |
  | Guthaben                   | „Restguthaben" (S. 10), „Guthaben" (S. 8), „Kontostand" (S. 12, 13), „Aktuelles Guthaben" (S. 12)                 |
  | Prepaid                    | „pre-paid Karte" (S. 8), „Pre-paid Karte" (S. 10), „Prepaidkarte" (S. 9)                                          |
  | Smartphone-Zusammensetzung | „Smartphone Nummern" (S. 9), „Smartphonenutzer" (S. 13, 17), „Smartphone Nutzer" (S. 15), „(Smart Phone)" (S. 17) |
  | gekoppelte Alarmanlage     | „WiPro III" (S. 6), „WiPro „all in one"" (S. 6, 14), „WiPro" ohne Zusatz (S. 12, 13, 15)                          |
  | Zugriffsberechtigung       | „autorisierte" / „nicht autorisierte Nummern" (S. 9), „berechtigte Nummern" (S. 14)                               |
  | GPS-Antenne                | „GPS Antenne" (S. 6), „GPS-Antenne" (S. 6, 7)                                                                     |
  | GPS-Empfang                | „GPS Empfang" und „GPS-Empfanges" (beide S. 17)                                                                   |
  | Kartenanwendung            | „Kartenansicht" (S. 13), „Kartenprogramm" (S. 15, 17), „Kartenprogramme und Navigationsgeräte" (S. 17)            |
  | Status-LED                 | durchgehend „Status LED" ohne Bindestrich; projektkonform wäre „Status-LED"                                       |

- **Erheblich davon:** Die Fassung ab SN-045 führt die gekoppelte Alarmanlage als „WiPro III
  safe.lock", diese Generation als „WiPro „all in one"" – **die Generationen benennen das
  gekoppelte Gerät verschieden**. Das ist für die Generationentrennung und für die
  Terminologieliste zu berücksichtigen und nicht mit den übrigen Zeilen der Tabelle
  gleichzusetzen.
- **Schwere:** gering bis mittel · **Status:** offen – für Terminologieliste und
  Segmentextraktion vorgemerkt

### DSC-066 – Betriebsart D: „8 Minuten" gegen „8 seconds" – Faktor 60 zwischen den Sprachfassungen (bis SN-044)

- **Dokument:** DOC-BMA-SN044, deutsche Seite 5 (intern „Seite 3") und englische Seite 23
  (intern „Page 3"), Betriebsartentabelle, Zeile D
- **Beleg:** DE „8 Minuten (sobald Spannung anliegt und Pro-finder eingebucht ist)" gegen
  EN „8 seconds (as soon as voltage is applied and Pro-finder is logged in)". Beide Zellen
  hochauflösend nachgerendert (300 bzw. 400 dpi) und zeichengenau gesichert.
- **Befund:** Das Intervall der automatischen Statusberichte in Betriebsart D unterscheidet
  sich zwischen der deutschen und der englischen Fassung um den **Faktor 60**. Die
  Nachbarzeile C stimmt dagegen überein (90 Sekunden/90 seconds) – der Fehler ist auf die
  Zeile D begrenzt. Welche Angabe stimmt, ist aus der Quelle nicht zu entscheiden: 8
  Sekunden ergäben zusammen mit C (90 Sekunden) eine plausible Staffelung zweier
  Verfolgungsmodi, 8 Minuten eine plausible Fortsetzung der Reihe 15/60 Minuten, 6/24
  Stunden. Nichts davon ist belegt.
- **Warum das zählt:** C und D sind die Ortungsmodi mit dem dichtesten Meldeintervall –
  wer sie nach der falschen Sprachfassung wählt, erhält im Ernstfall sechzigmal seltener
  eine Position als erwartet, oder produziert sechzigmal mehr kostenpflichtige SMS als
  kalkuliert.
- **Nachtrag 2026-08-09 (französischer Teil):** Die französische Tabelle (Seite 40) nennt
  „8 minutes (dès qu'une tension est délivrée …)" – bei 400 dpi gesichert. Damit steht es
  **zwei zu eins gegen die englische Fassung**; dasselbe Ausreißermuster wie bei DSC-020,
  wo ebenfalls die englische Fassung allein abwich. Welcher Wert technisch gilt, bleibt
  trotzdem eine Frage an THITRONIK.
- **Nachtrag 2026-08-09 (schwedischer Teil):** Auch die schwedische Tabelle (Seite 57)
  nennt „8 minuter". Endstand **drei zu eins**: Deutsch, Französisch und Schwedisch gegen
  die englischen „8 seconds".
- **Schwere:** hoch (sicherheitsrelevanter technischer Wert) · **Status:** offen –
  Rückfrage 16 an THITRONIK

### DSC-067 – Der englische Teil nennt den schwedischen Geofencing-Befehl „fence av" (bis SN-044)

- **Dokument:** DOC-BMA-SN044, englische Seite 25 (intern „Page 5"), Abschnitt 1.7
- **Beleg:** „To do this, send an SMS with “fence av” to the number of the GSM module." –
  bei 500 dpi zeichengenau gesichert.
- **Befund:** Der Befehl „fence av" ist kein Englisch. Er ist an dieser Stelle mit keiner
  anderen Angabe des Dokuments vereinbar:
  - die deutsche Parallelstelle (Seite 7, geprüft) schreibt „fence aus";
  - der englische **eigene** Abschnitt 2.4 verwendet „Fence on" und „Fence off"
    (Seite 33; **am 2026-08-09 im Seitenbild bestätigt** – der Widerspruch liegt damit
    belegt innerhalb des englischen Teils);
  - die Hilfe-SMS des Geräts (Seite 13, geprüft) führt „FENCE ON"/„FENCE OFF";
  - die englische SN-045-Fassung schreibt „fence off" (DSC-033).
    „av" ist das schwedische Wort für „aus", und der schwedische Teil dieses Dokuments
    verwendet an exakt gleicher Stelle denselben Befehl: „Skicka då ett SMS med innehållet
    ”fence av” …" (Seite 59) sowie „fence pa"/„fence av" (Seite 67; beide im Seitenbild
    gesichert). Die wahrscheinlichste Erklärung ist eine
    **Vorlagenkontamination aus der schwedischen Fassung** – dieselbe Fehlerklasse wie die
    verunglückte norwegisch-dänische Flaggenüberlagerung in der Fassung ab SN-045 (DSC-025).
- **Folge für Nutzer:** Wer den Befehl wie gedruckt sendet, sendet mutmaßlich einen
  ungültigen Befehl. Im besten Fall antwortet das Gerät mit einer Hilfe-SMS; im schlechteren
  bleibt das Geofencing aktiv und liefert genau die Fehlalarme weiter, die der Abschnitt
  abstellen will.
- **Generationenvergleich der Befehlssätze:** Auch bis SN-044 hat jede Sprachfassung einen
  eigenen Befehlssatz – DE „Fence an"/„fence aus", EN „Fence on"/„Fence off", SV „fence
  pa"/„fence av" (**beide seit dem 2026-08-09 bei 500 dpi im Seitenbild gesichert**), FR
  „gardiennage active"/„gardiennage desactive". Der französische Ausschaltbefehl ist seit dem
  2026-08-09 **bei 500 dpi im Seitenbild gesichert** (Seite 42). Die französischen Befehle
  unterscheiden sich zudem von denen der SN-045-Fassung („activer/desactiver le
  gardiennage", DSC-033) – **derselbe Befehl hat sich innerhalb einer Sprache zwischen den
  Generationen geändert**, sogar in der Wortstellung (Substantiv+Partizip gegen
  Infinitiv+Artikel).
- **Nachtrag 2026-08-09 (französischer SN-044-Befehlssatz vollständig, Seiten 49–51):**
  `arme`, `desarme`, `alarm` (unübersetzt, ohne e), `gardiennage active`,
  `gardiennage desactive`, `Statut`, `Pos`, `A active`, `A desactivee`, `A impulsion`,
  `A XXX`. Bemerkenswert: **`Statut` weicht um einen Buchstaben von `Status`/`STATUS`
  ab** – der einzige bisher gefundene Fall, in dem sich der Statusbefehl zwischen
  Sprachfassungen unterscheidet; und das Ausgangspaar ist asymmetrisch geschrieben
  (`A active` ohne, `A desactivee` mit doppeltem e). Kein französischer Befehl steht in
  der Geräteliste; die Schaltbefehle `arme`/`desarme` widersprechen dem abgebildeten
  `SCHARF`/`UNSCHARF` – dritter Sprachteil mit dem spiegelbildlichen
  Handbuch-gegen-Gerät-Widerspruch (DSC-054).
- **Nachtrag 2026-08-09 (schwedischer SN-044-Befehlssatz vollständig, Seiten 66–68):**
  `skarp`, `oskarp`, `larm`, `urkopplad`, `fence pa`, `fence av`, `Status`, `Pos`,
  `A pa`, `A av`, `A impuls`, `A XXX`. Alle im Seitenbild geprüft; `fence pa` und die
  Ausgangsbefehle bei 500 dpi. Der Satz widerspricht der deutsch-englischen Geräteliste
  durchgehend. Zusätzlich widerspricht er sich **innerhalb einer Seite**: Abschnitt 2.2
  lehrt zum Ausschalten `oskarp`, nennt zum Beenden des stillen Alarms aber `urkopplad`.
  Ob beides Befehle sind oder die zweite Form eine fehlübersetzte Beschreibung ist, bleibt
  offen. Der vollständige Vergleich steht in
  [Synthese-Auswertung 1](#synthese-befehle).
- **Schwere:** hoch (sicherheitsrelevanter Befehl) · **Status:** offen – gehört zu
  BLK-005; Nachtrag zu Rückfrage 1

### DSC-068 – Englisches Inhaltsverzeichnis und Teilstruktur weichen vom Inhalt ab (bis SN-044)

- **Dokument:** DOC-BMA-SN044, englische Seiten 20 bis 26
- **Befund:**
  - Der Verzeichniseintrag **2.4 lautet „Installation instructions"**. Das deutsche
    Verzeichnis (Seite 2) führt 2.4 als „Geofencing" (im Seitenbild bestätigt), die
    deutsche Abschnittsüberschrift auf Seite 15 ebenso. **Am 2026-08-09 abgeschlossen:**
    Die englische Abschnittsüberschrift auf Seite 33 lautet im Seitenbild „2.4 Geofencing"
    – der Verzeichniseintrag benennt den Abschnitt schlicht falsch. Das **französische**
    Verzeichnis (Seite 37) führt 2.4 korrekt als „Geofencing" – der Fehler ist eine
    Eigenheit des englischen Teils, kein Vorlagenfehler.
  - Der Verweis „(see 2.1, Fig. 1)" auf Seite 22 nummeriert eine Abbildung, die es nicht
    gibt: Der englische Abschnitt 2.1 (Seiten 30–31, geprüft) trägt an keiner seiner neun
    Beispiel-SMS-Abbildungen eine Nummer oder Bildunterschrift. Der Verweis läuft ins
    Leere.
  - Das Verzeichnis nennt 1.8/1.9 „**target** phone numbers", Abschnittsüberschrift
    (Seite 26) und Tabellenzeile E (Seite 23) schreiben „**destination** phone numbers".
    Seite 28 verwendet beide Formen in einem Absatzpaar; die technischen Daten (Seite 36)
    schreiben als vierte Variante „Number of destination numbers" ohne „phone".
  - Verzeichnis 1.6 „Installation of the GPS receiver (optional)" gegen Überschrift
    „Installing the GPS receiver (optional)" (Seite 24); Verzeichnis 1.7 „Connecting the
    GPS receiver (optional)" gegen Überschrift „Connection of the GPS receiver" ohne
    Zusatz (Seiten 24, 25).
  - **Doppelte Seitenzählung im selben PDF:** Mit dem englischen Teil beginnt die
    aufgedruckte Zählung neu bei „Page1"; „Seite 15" (deutsch, PDF-Seite 17) und „Page 15"
    (englisch, PDF-Seite 35) existieren nebeneinander. Interne Verweise gelten jeweils nur
    innerhalb des eigenen Sprachteils (Versatz deutsch +2, englisch +20).
  - **Unangekündigter Sprachwechsel:** Zwischen der deutschen Notizseite (Seite 19) und dem
    englischen Verzeichnis (Seite 20) gibt es keinerlei Übergangshinweis; das Dokument
    trägt keine Sprachauszeichnung.
- **Schwere:** mittel (der 2.4-Eintrag führt Nutzer in die Irre; Zitierfähigkeit) ·
  **Status:** offen

### DSC-069 – Technische Daten unterscheiden sich zwischen den Generationen (bis SN-044 / ab SN-045)

- **Dokument:** DOC-BMA-SN044, Seite 18 (intern „Seite 16"), Abschnitt 3.1–3.2; Vergleich
  gegen DOC-IBA-SN045, deutsche Seite 25, englische Seite 49, französische Seite 76
- **Befund:** Drei Werte weichen zwischen den Generationen ab, die übrigen stimmen überein:

  | Wert                        | bis SN-044 (S. 18)   | ab SN-045 (S. 25/49/76)                       |
  | --------------------------- | -------------------- | --------------------------------------------- |
  | SIM-Format                  | **Micro-SIM**        | **Nano-SIM**                                  |
  | Stromaufnahme Normalbetrieb | ca. 21mA (fest)      | ca. 16–21 mA (Spanne; EN abweichend, DSC-020) |
  | Konformität                 | Richtlinie 1999/5/EG | Richtlinie 2014/53/EU                         |
  | Spannungsversorgung         | 9-30 V               | 9-30 V (gleich)                               |
  | Stromaufnahme Netzsuche     | ca. 37mA             | ca. 37 mA (gleich)                            |
  | Ausgänge                    | 2 x 12V/500mA        | 2 × 12 V/500 mA (gleich)                      |
  | Temperaturbereich           | -10°C bis +80°C      | −10 bis +80 °C (gleich)                       |
  | Zielrufnummern              | 10                   | 10 (gleich)                                   |

  **Zusätzliche Abweichungen innerhalb der Generation bis SN-044:** DOC-KA-SN044,
  Seite 2, nennt für den normalen GSM-Betrieb **ca. 16–21 mA**, während
  DOC-BMA-SN044, Seite 18, nur **ca. 21 mA** nennt. Außerdem verweist die Kurzanleitung
  auf die Richtlinie **2014/53/EU**, die Bedienungsanleitung auf **1999/5/EG**. Im
  Anschlusskapitel der Bedienungsanleitung auf Seite 6 steht eine „geeignete 12V DC
  Spannungsquelle", während die technische Tabelle desselben Dokuments auf Seite 18 den
  Bereich **9–30 V** nennt. Das kann ein nominaler Anschlusskontext gegenüber dem zulässigen
  Bereich sein; die Quelle erklärt die Beziehung aber nicht. Aufgabe 13 hält alle drei
  Unterschiede sichtbar, statt einen Wert auszuwählen.

  Zusätzlich nennt nur die ältere Fassung eine Sendefrequenz („900/1800/850/1900Mhz");
  die 1999/5/EG (R&TTE) ist seit 2017 durch die 2014/53/EU abgelöst – zeittypisch für das
  ältere Dokument, für den Pilot aber als Beleg, dass die Konformitätsangaben **nicht
  zwischen Generationen übertragbar** sind.

- **Warum das zählt:** Das SIM-Format ist die unmittelbar nutzerrelevante Abweichung –
  wer nach der falschen Generationsanleitung eine SIM beschafft, hält die falsche
  Kartengröße in der Hand. Zusammen mit dem Geofencing-Radius (DSC-061) und den
  Befehlssätzen (DSC-067) ist das der dritte Beleg, dass technische Werte zwischen den
  Generationen abweichen und keine Angabe ungeprüft übernommen werden darf.
- **Schwere:** mittel bis hoch · **Status:** offen – technischer Review; Generationswerte
  strikt getrennt halten

### DSC-070 – Redaktionelle Befunde im englischen Teil bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, englische Seiten 20 bis 36
- **Befund:** Sammelposition für Fehler ohne eigene sachliche Tragweite, analog DSC-064.
  - **Gemischte Rechtschreibvarianten:** „unauthorised" (S. 20) gegen „unauthorized"
    (S. 21); daneben durchgehend britisch „de-energised", „cancelled" (S. 24, 26).
  - Seite 21: Kopfzeile „Page1" ohne Leerzeichen – einzige Seite; alle übrigen schreiben
    „Page 2" bis „Page 16".
  - Seite 22: „(option)" gegen „(optional)" im Verzeichnis – wie im deutschen Teil.
  - Seite 23: „with Wipro" mit kleinem p zwischen zwei korrekten „WiPro" im selben Absatz
    (bei 500 dpi bestätigt).
  - Seite 26: „ideally you should label name it ALARM" – doppeltes Verb; „T-mobile" statt
    „T-Mobile"; der Einleitungssatz endet ohne Punkt (wie sein deutsches Gegenstück auf
    Seite 8 – der Vorlagenfehler ist mitübersetzt); weiches Trennzeichen in der Textebene
    („­Alarm", auch „­voltage" im Tabellenkopf auf Seite 23).
  - Seite 27: „or ask your **peovider**" statt „provider"; „Sim Card" in Gemischtschreibung.
  - Seite 29: „SIM card must be in the device!!" mit nur schließendem
    Ausrufezeichenpaar – das Original rahmt beidseitig ein.
  - Seite 30: „160 characters" mit doppeltem Leerzeichen.
  - Seite 31: „Positions SMS" mit deutschem Fugen-s; „Master number" mit großem M mitten
    im Satz gegen „master number" (S. 27).
  - Seite 32: „a pay connection" – Direktübersetzung von „kostenpflichtige Verbindung".
  - Seite 33: „an SMS with the text, "Fence off"" – Komma vor dem Anführungszeichen.
  - Seite 34: „XXX must replaced with" – fehlendes „be"; die Zwischentitel wechseln
    zwischen Gerundium („Switching outputs permanently:") und Imperativ („Switch outputs
    pulsed …:").
  - Seite 35: „an active generator" für die Lichtmaschine (üblich wäre „alternator");
    „mobile end device" – Direktübersetzung von „mobiles Endgerät".
  - Seite 36: „the serial number of your alarm" – das Gerät wird als „alarm" bezeichnet,
    obwohl der Disclaimer den Pro-finder ausdrücklich von einem Alarmsystem unterscheidet;
    „micro-SIM" klein gegen „Micro-SIM" (S. 26).
  - Terminologie innerhalb des Teils: „mobile phone provider" gegen „mobile phone
    supplier" (beide S. 26); „Cable assembly" (S. 21) gegen „main cable assembly" (S. 24);
    „recovery diode" für die Freilaufdiode (fachlich üblich wäre „flyback/freewheeling
    diode", S. 24); „program select switch" (S. 30) gegen „operating mode switch"
    (S. 22, 29) – die deutsche Doppelbenennung Betriebsartenschalter/Programmwahlschalter
    ist exakt in den englischen Teil übertragen; „geofence function" (S. 25) gegen
    „Geofencing" (S. 33).
- **Positivbefund:** Die technischen Daten (S. 36) sind typografisch sauberer als die
  deutschen: alle Zeilen mit Doppelpunkt, „MHz" korrekt, Leerzeichen vor Einheiten. Die
  Sprachfassungen wurden offenbar getrennt gesetzt.
- **Schwere:** gering · **Status:** offen – gesammelt für den redaktionellen Review

### DSC-071 – Der englische Teil nennt eine nicht existierende Richtlinie „1995/5/EG" (bis SN-044)

- **Dokument:** DOC-BMA-SN044, englische Seite 36 (intern „Page 16"), Abschnitt 3.2
- **Beleg:** „Thitronik GmbH hereby declares that this product complies with the
  requirements and regulations of the directive 1995/5/EG." – bei 400 dpi zeichengenau
  gesichert.
- **Befund:** Die deutsche Fassung (Seite 18) nennt die Richtlinie **1999/5/EG** (R&TTE).
  Eine Richtlinie „1995/5/EG" existiert nicht – die englische Jahreszahl ist falsch.
  Zusätzlich steht im englischen Text das deutsche Kürzel „EG" statt des englischen „EC".
  Die Generation ab SN-045 erklärt die Konformität nach 2014/53/EU (DSC-069); für die
  ältere Generation weichen damit sogar die beiden Sprachfassungen **derselben** Erklärung
  voneinander ab.
- **Warum das zählt:** Eine Konformitätserklärung ist eine rechtliche Aussage. Der Pilot
  übernimmt Konformitätsangaben grundsätzlich nur aus der jeweils zutreffenden
  Generationsquelle und für diese Generation nur aus der deutschen Fassung – die englische
  ist hier nachweislich fehlerhaft.
- **Nachtrag 2026-08-09 (französischer Teil):** Der Abschnitt 3.2 des französischen Teils
  (Seite 53) ist **gar nicht übersetzt** – er übernimmt wortgleich den englischen Text
  einschließlich der „directive 1995/5/EG" (bei 400 dpi gesichert). Damit tragen zwei von
  drei Sprachteilen die falsche Jahreszahl, und ein französischer Leser erhält die
  rechtliche Erklärung in einer Fremdsprache.
- **Nachtrag 2026-08-09 (schwedischer Teil):** Auch Abschnitt 3.2 der schwedischen Seite
  70 ist unübersetzt englisch und übernimmt wortgleich die „directive 1995/5/EG" (bei
  400 dpi gesichert). **Drei von vier** Sprachteilen tragen damit die falsche Jahreszahl;
  nur der deutsche nennt 1999/5/EG. Französisch und Schwedisch bieten die rechtliche
  Aussage zusätzlich in der falschen Sprache dar.
- **Schwere:** mittel · **Status:** offen – redaktioneller Befund mit rechtlichem Bezug

### DSC-072 – Der englische Teil verwendet unverändert die deutschen Abbildungen (bis SN-044)

- **Dokument:** DOC-BMA-SN044, englische Seiten 30, 31 und 35; Vergleich mit den deutschen
  Seiten 12, 13 und 17
- **Befund:** Alle neun Beispiel-SMS-Abbildungen des englischen Abschnitts 2.1 und beide
  Kartenprogramm-Bildschirmfotos in 2.8 sind die **unveränderten deutschen Bilder**:
  - Die Meldungsbilder zeigen deutsche Gerätetexte – „Diebstahl", „Spannung unter 11,2V",
    „Hilfe erbeten", „Einbruch Tuer/Fenster", „Gas", „manueller Alarm", „GPS Fencing
    aktiv", „Aktuelles Guthaben"/„Kontostand". Der englische Fließtext beschreibt die
    Meldungen als „Theft alert", „Voltage warning" usw., nennt aber an keiner Stelle die
    deutschen Stichwörter, an denen eine tatsächlich eingehende Meldung zu erkennen wäre.
  - Die abgebildete Hilfe-SMS enthält die deutschen Schaltbefehle `SCHARF`/`UNSCHARF`,
    während der englische Text `arm`/`disarm` lehrt (Nachtrag zu DSC-054).
  - Die Bildschirmfotos in 2.8 zeigen deutschsprachige Programmoberflächen.
- **Was daraus folgt:** Der englische Teil belegt nirgends, dass das Gerät englischsprachige
  Meldungen ausgibt – die Bildwahl legt das Gegenteil nahe. Für die Generation ab SN-045
  zeigt der tschechische Teil dagegen lokalisierte Geräte-SMS („Neplatny povel!", DSC-033).
  Ob die Gerätetexte bis SN-044 in allen Sprachen deutsch sind, ist eine eigene Frage an
  THITRONIK (Rückfrage 17) – sie entscheidet, welche Erkennungsstichwörter eine
  englischsprachige Anleitung dieser Generation nennen müsste.
- **Nachtrag 2026-08-09 (französischer Teil):** Dasselbe Muster – die Seiten 47, 48 und
  52 verwenden unverändert die deutschen Beispiel-SMS-Bilder und Bildschirmfotos. Alle
  drei geprüften Sprachteile teilen sich denselben deutschen Bildbestand.
- **Nachtrag 2026-08-09 (schwedischer Teil, Dokument abgeschlossen):** Auch die Seiten
  64, 65 und 69 verwenden dieselben deutschen Meldungs- und Kartenbilder. Damit ist der
  Befund für **alle vier Sprachteile und alle elf betroffenen Abbildungen** abgeschlossen:
  Nur die Erläuterungen wurden übersetzt, der geräteseitige und grafische Bildtext nie.
- **Schwere:** hoch (Meldungen sind ohne die abgebildeten Stichwörter nicht zuzuordnen) ·
  **Status:** offen – Rückfrage 17

### DSC-073 – Sinnverändernde Übersetzungsfehler im französischen Teil (bis SN-044)

- **Dokument:** DOC-BMA-SN044, französische Seiten 38 bis 52
- **Befund:** Anders als die redaktionellen Sammelpositionen verändern diese Stellen die
  **Aussage**:
  - **Korrektur 2026-08-10:** Seite 38 („la longueur du câble … **est de 2m**") wurde
    hier zunächst fälschlich als französischer Übersetzungsfehler geführt. Die erneute
    Bildprüfung bei 400 dpi zeigt: Auch das deutsche Original auf Seite 3 sagt, die
    Kabellänge „**beträgt** 2m"; Schwedisch auf Seite 55 formuliert ebenfalls eine feste
    Länge. Nur Englisch auf Seite 21 schreibt „**must not exceed 2 m**". Belegt ist damit
    ein sprachübergreifender Formulierungswiderspruch DE/FR/SV gegen EN, kein isolierter
    französischer Fehler. Ob 2 m die feste Länge des gelieferten Kabels oder eine zulässige
    Obergrenze bezeichnet, muss THITRONIK im technischen Review entscheiden.
  - Seiten 39/40: „Si vous appelez **les numéros de téléphone enregistrés sur la carte
    SIM** du Pro-finder" – angerufen wird laut den anderen Fassungen die **Rufnummer der
    eingelegten SIM-Karte**; die französische Formulierung spricht im Plural von auf der
    Karte gespeicherten Nummern. Ein Leser kann verstehen, er müsse eine Zielrufnummer
    anrufen.
  - Seite 42: LED gelb blinkend = „la position **n'est pas la bonne**" – aus „noch keine
    gültige Position" (normaler Empfangsaufbau) wird „die Position ist nicht die
    richtige" (klingt nach Fehlfunktion).
  - Seite 44: „peuvent commander les sorties du Pro-finder par SMS **pour** demander des
    comptes-rendus d'état" – aus zwei getrennten Rechten der autorisierten Nummern
    (Ausgänge steuern **und** Statusberichte anfordern) wird eine Zweckverbindung.
  - Seite 44: „Ils ne **contiennent** que des messages d'état" – „enthalten" statt
    „empfangen".
  - Seite 44: „La LED d'état rouge clignote d'abord brièvement, **puis la LED jaune puis
    verte clignote**" – aus dem gelb/grünen **Wechselblinken** (ein Zustand, so auch die
    LED-Liste auf Seite 46) wird eine **Abfolge** zweier Blinkfarben.
  - Seite 41: Die Batteriewarnung nennt nur „Le WiPro" – der Zusatz « all in one » der
    deutschen und englischen Warnung fehlt.
  - Seite 40: Der Info-Absatz ist grammatisch zerbrochen („Une connexion avec Wipro est
    pas possible avec ce. De Pro-finder SN 0686-010 …") – fehlende Verneinung, hängendes
    „ce", kalkierte Präposition; er liest sich wie eine unlektorierte maschinelle
    Übersetzung mitten in einem sonst idiomatischen Text.
  - Seite 47: Der rote 160-Zeichen-Hinweis samt POS-Anweisung **fehlt ersatzlos** – die
    einzige Erklärung dafür, dass das Guthabenfeld in langen Meldungen entfallen kann.
  - Seite 48: „SMS d'aide" ist sinnverkehrt – „Quand un numéro favori reçoit un SMS dont
    le contenu n'est pas valide, **il** renvoie ce message" macht die Zielrufnummer zum
    Empfänger des ungültigen Inhalts und zum Absender der Hilfe; tatsächlich empfängt das
    **Gerät** den ungültigen Inhalt und antwortet. Ebenfalls Seite 48: Der Hinweis, dass
    die Positions-SMS bei Programmierung nach 1.8 das Guthaben enthält, fehlt.
  - Seite 49: „Seuls, les numéros autorisés peuvent **appeler** le Pro-finder" – verengt
    die allgemeine Zugriffsbeschränkung der anderen Fassungen auf das Anrufen.
  - Seite 52: „**Comme** dans le cas d'une alarme, l'alternateur étant actif, la position
    est interrogée en permanence" – aus der Begründung („Da bei einem Alarm …") wird ein
    schiefer Vergleich („Wie im Fall eines Alarms …").
- **Warum das zählt:** Für den Übersetzungsworkflow des Piloten bestätigt das die Regel,
  dass der geprüfte deutsche Master die einzige Quelle ist. Die französische Fassung
  dieser Generation ist an mehreren funktionsrelevanten Stellen keine zuverlässige
  Wiedergabe – dieselbe Fehlerklasse, die ab SN-045 als DSC-026/DSC-032 dokumentiert ist.
- **Schwere:** mittel bis hoch · **Status:** offen – muttersprachlicher Review;
  betroffene Aussagen nie aus der französischen Fassung übernehmen

### DSC-074 – Der angekündigte FAQ-Link fehlt im französischen Teil (bis SN-044)

- **Dokument:** DOC-BMA-SN044, französische Seite 44 (intern „Page 7", verdeckt)
- **Beleg:** „Une liste des codes d'interrogation les plus courants se trouve sur le lien
  suivant" – danach endet die Seite; die untere Seitenhälfte ist leer. Im Seitenbild
  bestätigt.
- **Befund:** Die deutsche (Seite 9) und die englische Fassung (Seite 27) drucken an
  dieser Stelle die FAQ-URL. Die französische kündigt den Link an und lässt ihn weg. Wer
  den Abfragecode seiner Prepaid-Karte sucht, wird auf ein nicht vorhandenes Ziel
  verwiesen – zusätzlich verweist Seite 45 auf eine „Tabelle der vorherigen Seite", die
  ebenfalls nicht existiert (DSC-057). Im französischen Teil führt damit **kein einziger**
  der drei Wege zu den Abfragecodes (Kartenunterlagen ausgenommen).
- **Schwere:** mittel · **Status:** offen

### DSC-075 – Die Kopfzeilen des französischen Teils werden vom grauen Balken verdeckt (bis SN-044)

- **Dokument:** DOC-BMA-SN044, französische Seiten 37 bis 53 (**vollständiger
  Sprachteil**; am 2026-08-09 auch für die Seiten 47–53 bestätigt)
- **Beleg:** Auf allen siebzehn geprüften Seiten ist der graue Kopfzeilenbalken visuell
  leer (150 und 300 dpi). Die Kopfzeilentexte („Manuel Pro-finder", „Page n") stehen als
  weißer Text an der korrekten Position in der Textebene. Maschinell nachgewiesen: Auf
  PDF-Seite 40 haben die Kopfzeilen-Textspans die Zeichenreihenfolge 406–408 und das
  graue Balkenrechteck die 409 – **der Balken wird nach dem Text gezeichnet und verdeckt
  ihn**. Auf den englischen Seiten ist die Reihenfolge umgekehrt (Balken 62, Text 63–65),
  dort sind die Kopfzeilen sichtbar.
- **Befund und Folgen:**
  - Der gesamte geprüfte französische Teil hat **keine sichtbaren Seitenzahlen** und
    keine sichtbaren Kolumnentitel – in jedem konformen Viewer und im Druck.
  - Das Inhaltsverzeichnis (Seite 37) und interne Verweise nennen Seitenzahlen, die ein
    Leser nirgends wiederfinden kann.
  - Die Textebene enthält Text, der nicht sichtbar ist – die **umgekehrte** Richtung des
    sonst dokumentierten Problems (sichtbarer Inhalt fehlt in der Textebene, DSC-058
    u. a.): Ein Screenreader liest Kopfzeilen vor, die sehende Nutzer nicht sehen, und
    Sehende können die vorgelesene Seitenangabe nicht verifizieren.
- **Gegenprobe 2026-08-09 (schwedischer Teil):** Die schwedischen Kopfzeilen sind
  **sichtbar**; die Sequenzprüfung zeigt die korrekte Reihenfolge (Balken 17, Text 18–20
  auf PDF-Seite 55; ebenso 58 und 62). Der Befund bleibt auf den französischen Sprachteil
  beschränkt.
- **Schwere:** mittel bis hoch (Orientierung und Zitierfähigkeit eines ganzen
  Sprachteils) · **Status:** offen

### DSC-076 – Die englische Fassung verliert das doppelte A der Adressbuch-Empfehlung (bis SN-044)

- **Dokument:** DOC-BMA-SN044, deutsche Seite 8, englische Seite 26, französische
  Seite 43; alle drei Stellen bei 400 dpi gesichert
- **Beleg:** DE „Wenn Sie Alarm folgendermaßen schreiben, steht Sie immer an erster
  Stelle: **AAlarm**." · FR „nous vous conseillons de l'orthographier ainsi :
  **AAlarm**." · EN „If you write alarm as shown below, it will always be at the top of
  the list: **Alarm**."
- **Befund:** Die Empfehlung, den Adressbucheintrag mit doppeltem A zu schreiben, damit
  die Alarmnummer im Telefon ganz oben steht, ist im Deutschen und Französischen
  erhalten. Die englische Fassung druckt nur „Alarm" – das funktionstragende zweite A ist
  verloren, und der Satz „as shown below" verweist damit auf nichts Erkennbares: Der
  englische Leser sieht zweimal dieselbe Schreibung und kann die Empfehlung nicht
  befolgen.
- **Nachtrag 2026-08-09 (schwedischer Teil):** Auch Schwedisch bewahrt das doppelte A
  („står det allra först: AAlarm", Seite 60). Drei von vier Sprachteilen sind korrekt –
  der Verlust ist eine rein englische Eigenheit.
- **Schwere:** gering bis mittel (Komfortfunktion im Alarmfall) · **Status:** offen –
  gehört zur Liste der englischen Substanzfehler (DSC-066, DSC-067, DSC-071)

### DSC-077 – Redaktionelle Befunde im französischen Teil bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, französische Seiten 37 bis 46
- **Befund:** Sammelposition für Fehler ohne eigene sachliche Tragweite, analog DSC-064
  und DSC-070.
  - Seite 39: „quelque soit le mode de service" statt „quel que soit"; „Geofencing" im
    Zwischentitel gegen „géofencing" im Fließtext; „compte-rendu de l'état" gegen
    „compte-rendu d'état" auf derselben Seite.
  - Seite 40: „une WiPro peut également être connecté" – fehlende Angleichung
    („connectée"); „Wipro" mit kleinem p im Info-Absatz (an derselben Stelle wie in DE
    und EN – Vorlagenfehler).
  - Seite 41: „doit être de plus 13,5 V" – fehlendes „de"; „des relais automobile" ohne
    Pluralangleichung; „diode de marche à vide" für die Freilaufdiode (üblich: „diode de
    roue libre") – parallel zum fragwürdigen „recovery diode" der englischen Fassung.
  - Seite 42: „il est probable que l'antenne GPS est défectueuse" – Indikativ nach „il
    est probable que".
  - Seite 43: „t-mobile" klein (wie DE; EN schreibt „T-mobile" – keine Fassung trifft
    „T-Mobile"); Überschrift „Programmer des numéros …" gegen Verzeichniseintrag
    „Programmation des numéros …".
  - Seite 44: zerbrochene Abfragecode-Sätze („Les codes d'interrogation (utilisé pour les
    prépayés) pour le crédit, retirez des documents …" – Kongruenz und Syntax); „Comme
    vous aussi devez pouvoir trouver …" – Wortstellung.
  - Seite 45: „1er/2ème/3ème" – uneinheitliche Ordinalschreibung (üblich: 2e/3e).
  - Seite 47: „11,2V" ohne gegen „12,5 V" mit Leerzeichen im selben Absatz; „texto" in
    den roten Hinweisen gegen „SMS" im Fließtext; „le numéro central" (S. 47/48) gegen
    „Numéro master" (S. 44/45) – zwei Benennungen der Masternummer.
  - Seite 49: überflüssiges Komma („Seuls, les numéros …"); „message d'état" gegen
    „compte-rendu d'état".
  - Seite 50: Überschrift „Géofencing" mit Akzent gegen „Geofencing" im Sommaire;
    «gardiennage desactive» ohne gegen « gardiennage desactive » mit
    Guillemet-Leerzeichen (S. 42).
  - Seite 52: **beide** Richtungsdreiecke der Bildunterschrift zeigen nach oben – das
    zweite müsste wie in DE/EN abwärts auf das Smartphone-Foto zeigen; „Après que le vol
    ait été signalé" – Subjonctif nach „après que".
  - Seite 53: „de 9.00 à 16.00 **heure**" – Singular; „Carte SIM:" ohne Leerzeichen vor
    dem Doppelpunkt als einzige Datenzeile; „Mhz" aus der deutschen Fassung übernommen
    (die englische hatte korrekt „MHz").
  - Terminologie: „gardiennage" (Befehl), „géofencing" und „geofencing" (Fließtext) –
    drei Formen für dieselbe Funktion im selben Sprachteil; „programme de cartographie"
    gegen „logiciel de cartographie".
- **Schwere:** gering · **Status:** offen – gesammelt für den muttersprachlichen Review

### DSC-078 – Der französische Teil nennt 1500 m als Geofencing-Radius – dritter Wert für dieselbe Größe (bis SN-044)

- **Dokument:** DOC-BMA-SN044, französische Seiten 47 und 50; Vergleich mit den deutschen
  Seiten 12/15, den englischen Seiten 30/33, den schwedischen Seiten 64/67 und der Fassung
  ab SN-045
- **Beleg:** Seite 47: „Vous recevez ce message si votre véhicule se trouve **à plus de
  1500 m** de son lieu d'origine" · Seite 50: „dès que le véhicule s'écarte **d'environ
  1,5 km** de sa position d'origine" – beide bei 400 dpi gesichert, innerhalb des
  französischen Teils konsistent. Schwedisch nennt auf Seite 64 „ca 1000 m" und auf Seite
  67 „ca 1 km" – beide bei 500 dpi gesichert.
- **Befund:** Für denselben Auslöseradius der Diebstahlmeldung kursieren jetzt **drei
  Werte**:

  | Quelle                                  | Radius              |
  | --------------------------------------- | ------------------- |
  | bis SN-044, Deutsch/Englisch/Schwedisch | ca. 1000 m / 1 km   |
  | bis SN-044, **Französisch**             | **1500 m / 1,5 km** |
  | ab SN-045 (DE/EN/FR/CS)                 | rund 900 m          |

  Anders als bei den bisherigen Übersetzungsfehlern des französischen Teils (DSC-073) ist
  hier ein **technischer Zahlenwert** verändert – die Differenz beträgt 50 Prozent. Der
  inzwischen abgeschlossene schwedische Teil bestätigt Deutsch und Englisch zweimal;
  Französisch steht damit **eins zu drei** allein. Ob
  1500 eine Fehlübersetzung, ein Tippfehler (aus 1000) oder ein tatsächlich anderer
  Auslegungswert ist, lässt sich aus den Quellen nicht entscheiden.

- **Warum das zählt:** Der Radius bestimmt, ab welcher Entfernung ein gestohlenes
  Fahrzeug gemeldet wird. Ein französischsprachiger Nutzer rechnet mit 50 Prozent mehr
  Spielraum als ein deutscher – bei einem Sicherheitsprodukt ist das keine Stilfrage.
  Der Wert gehört zusätzlich zu Rückfrage 14 (Geofencing-Radius je Generation), die damit
  um die Dimension „je Sprachfassung" erweitert ist.
- **Schwere:** hoch (sicherheitsrelevanter technischer Wert) · **Status:** offen –
  Nachtrag zu Rückfrage 14

### DSC-079 – Inhaltliche Abweichungen im schwedischen Teil (bis SN-044)

- **Dokument:** DOC-BMA-SN044, schwedische Seiten 55 bis 66
- **Befund:** Der schwedische Teil ist insgesamt sorgfältiger übersetzt als der
  französische (korrekte Anruf-Formulierung, korrekte LED-Gelb-Beschreibung, korrektes
  Wechselblinken, FAQ-Link vorhanden, „AAlarm" erhalten) – trägt aber eigene inhaltliche
  Abweichungen:
  - **Korrektur 2026-08-10:** Seite 55 („kabellängden … **är 2 m**") stimmt in der
    Aussageform mit Deutsch und Französisch überein. Nur die englische Seite 21 nennt eine
    Obergrenze. Dieser Punkt ist daher kein eigener schwedischer Übersetzungsfehler, sondern
    derselbe unter DSC-073 transparent korrigierte Sprachwiderspruch.
  - Seite 58: Die Batteriewarnung nennt nur „WiPro" – der Zusatz „all in one" fehlt wie
    im Französischen; zwei von vier Sprachteilen verkürzen die Warnung.
  - Seite 57: Der Info-Absatz ist gebrochenes Schwedisch mit **englischer** Syntax
    („Lägena 7 **genom** D" als Lehnübersetzung von „7 through D", englische Wortstellung
    im Schlusssatz) – erkennbar maschinell aus der englischen Fassung übersetzt, mit dem
    Vorlagenfehler „Wipro" an derselben Stelle wie in allen Sprachteilen.
  - Seite 61: Die beiden Abfragecode-Sätze sind syntaktisch gebrochen („Mer information
    **pa** avfrågningskoder finns i dokumentationen **för deras kortet**", „För
    avfrågningskoder också ofta används på följande länk") – dieselbe Passage ist auch
    englisch („peovider") und französisch defekt: **nur die deutsche Fassung dieser
    späten Ergänzung ist sauber.**
  - Seite 60: Die SIM wird laut Text „**i mobilen**" (ins Mobiltelefon) statt ins Modul
    eingesetzt.
  - Seite 64: Der fünfmal im schwedischen Meldungskapitel wiederholte rote Satz
    „Efter skicka SMS är masternumret även kallad" ist grammatisch gebrochen; die
    beabsichtigte Anrufinformation bleibt nur über den Parallelvergleich verständlich.
  - Seite 65: Die Hilfe-SMS-Erklärung kehrt wie im Französischen die Kommunikationsrichtung
    um: Laut Satz erhält das `larmnummer` die ungültige SMS, tatsächlich empfängt sie der
    Pro-finder von der Zielrufnummer und antwortet. Außerdem fehlt wie im Französischen
    der Hinweis, dass die Positions-SMS bei Einrichtung nach 1.8 das Prepaid-Guthaben
    überträgt; Deutsch und Englisch führen ihn.
- **Schwere:** mittel · **Status:** offen – muttersprachlicher Review; betroffene
  Aussagen nie aus der schwedischen Fassung übernehmen

### DSC-080 – Redaktionelle Befunde im schwedischen Teil bis SN-044 (bis SN-044)

- **Dokument:** DOC-BMA-SN044, schwedische Seiten 54 bis 70
- **Befund:** Sammelposition für Fehler ohne eigene sachliche Tragweite, analog DSC-064,
  DSC-070 und DSC-077.
  - Seite 54: Vor der Rubrik „Diverse" fehlt die **Kapitelnummer 3**, die alle anderen
    Sprachteile führen; „status LED-lampor" (Verzeichnis) gegen „Status-LED-lampa"
    (S. 56) und „status-LED-lampan" (Fließtext) – drei Schreibvarianten.
  - Seite 56: „Pin 1 massa GND)" – fehlende öffnende Klammer.
  - Seite 57: „Hjälp SMS" im Zwischentitel ohne, „Hjälp-SMS" in Fließtext und
    Tabellenkopf mit Bindestrich; Schaltschwellen als „TILL"/„FRÅN" in Großbuchstaben –
    einzige Fassung mit dieser Auszeichnung.
  - Seite 59: „**PGS**-position är OK" – Tippfehler im Erfolgszustand der GPS-Diagnose
    (bei 400 dpi gesichert).
  - Seite 60: „kostnader ," – Leerzeichen vor dem Komma; „EC-automat" – der deutsche
    Begriff unübersetzt; „t-mobile" klein wie in DE/FR.
  - Seite 62: fehlende schließende Klammer im P-Absatz; „3:e inprogrammerat nummer"
    gegen „1:a/2:a larmnumret" – uneinheitliche Benennung in einer Abbildung.
  - Seite 63: fehlende schließende Klammer im 1.8-Verweis („(se beskrivning under 1.8.");
    „1.10" von der Überschrift durch Tabulator getrennt.
  - Seite 64: „koppkar Pro-finder in stand-by" statt „kopplar"; „Standby" in der
    Begriffsliste gegen „stand-by" im Fließtext.
  - Seite 65: „Nödrop SMS" ohne Bindestrich gegen „Positions-SMS" und „Hjälp-SMS" mit.
  - Seite 68: Kopfzeile „Sidan14" ohne Leerzeichen – einzige schwedische Inhaltsseite.
- **Schwere:** gering · **Status:** offen – gesammelt für den muttersprachlichen Review

### DSC-081 – Unsichtbare Nachbarseiten werden als zugänglicher Text extrahiert (bis SN-044)

- **Dokument:** DOC-BMA-SN044, Seiten 71 und 72
- **Beleg:** Seite 71 ist sichtbar eine fast leere schwedische Notizseite mit nur
  „Handbok för Pro-finder", „Sidan 17" und „Anteckningar". Innerhalb des Seitenrahmens
  findet PyMuPDF 39 lesbare Zeichen. Pypdf extrahiert dagegen 1382: Zusätzlich liegt das
  vollständige **deutsche Inhaltsverzeichnis samt Haftungsausschluss** bei negativen
  x-Koordinaten links außerhalb der Seite. Seite 72 zeigt sichtbar nur 112 Zeichen des
  Impressums; Pypdf extrahiert 524, weil rechts außerhalb des Seitenrahmens das
  **viersprachige Deckblatt** samt „Revision 2.6" liegt. Die Textobjekte wurden mit
  PyMuPDF samt Bounding Boxes objektbezogen geprüft; kein Off-page-Zeichen schneidet den
  sichtbaren Seitenrahmen.
- **Befund:** Ein Screenreader, Kopiervorgang oder Extraktionswerkzeug, das den MediaBox-
  Inhalt ohne sichtbaren Seitenclip ausliest, gibt nach der schwedischen Notizseite
  unvermittelt ein deutsches Inhaltsverzeichnis und nach dem Impressum vier Sprachen eines
  anderen Layoutteils aus. Umgekehrt hält eine reine Zeichenzählung die fast leere Seite
  71 für besonders textreich und damit vermeintlich zugänglich. Das ist dieselbe
  Fehlerklasse wie DSC-075 in einer dritten Richtung: Dort ist Text im Seitenrahmen
  verdeckt; hier ist Text vollständig **außerhalb** der sichtbaren Seite, aber
  extrahierbar.
- **Folge für den Pilot:** Sichtbaren Inhalt und Textebene weiterhin getrennt prüfen;
  Zeichenanzahl allein ist kein Zugänglichkeitsnachweis. Bei einer PDF-Sanierung müssen
  die Off-page-Objekte entfernt oder korrekt beschnitten werden. Der HTML-Content-Layer
  übernimmt sie nicht.
- **Schwere:** mittel bis hoch (Lesereihenfolge, Sprachwechsel, falsche maschinelle
  Zugänglichkeitsbewertung) · **Status:** offen – PDF-Sanierung

### DSC-082 – Blau unterstrichene Kartenadressen sind je Sprachfassung unterschiedlich interaktiv (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Meldungskapitel DE Seiten 19/20, EN 42–44, FR 70–72,
  CS 93–95, DA 117/118, ES 143/144, IT 167/168, NL 192/193, PL 218/219 und SV 241/242
- **Prüfweg:** Sämtliche Link-Annotationen der Meldungsseiten wurden mit PyMuPDF
  objektbezogen gezählt und ihre URI-Ziele mit dem sichtbaren Bildtext verglichen.
- **Befund:** Alle Sprachfassungen zeigen die Kartenadressen blau und unterstrichen – also
  wie interaktive Links. Tatsächlich gilt:
  - Deutsche Seite 19: drei sichtbare Adressen, **null** Link-Annotationen.
  - Deutsche Seite 20: fünf sichtbare Adressen, **zehn** Annotationen – jede Adresse liegt
    doppelt übereinander. Beim manuellen Alarm ist das hinterlegte Ziel zusätzlich kürzer
    als der sichtbare Text.
  - Englisch, Französisch, Tschechisch, Dänisch, Spanisch, Italienisch, Niederländisch,
    Polnisch und Schwedisch: auf allen einundzwanzig nichtdeutschen Meldungsseiten **null**
    Link-Annotationen, obwohl die Adressen gleich gestaltet sind.
- **Folge:** Das Erscheinungsbild verspricht Bedienbarkeit, die weder innerhalb des
  deutschen Teils noch zwischen den Sprachen besteht. Tastatur- und Screenreader-Nutzer
  finden keinen Link; sehende Nutzer müssen die lange Adresse manuell übertragen. Auf der
  einzigen interaktiven Seite entstehen durch die doppelten Annotationen redundante
  Fokusziele, und ein Ziel führt nicht exakt zum sichtbaren Ort.
- **Folge für den Pilot:** Kartenadressen aus Beispiel-SMS werden weiterhin nicht in den
  Content-Layer übernommen. Eine PDF-Sanierung muss pro sichtbarer Adresse genau eine
  korrekt benannte und zielgleiche Link-Annotation setzen oder die Linkoptik entfernen.
- **Schwere:** mittel bis hoch (Bedienbarkeit, Tastaturzugang, Linkzielgleichheit) ·
  **Status:** offen – PDF-Sanierung

### DSC-083 – Niederländische Kernbegriffe und Produktname widersprechen sich (ab SN-045)

- **Dokument:** DOC-IBA-SN045, niederländische Seiten 186, 187, 189, 191, 195 und 198
- **Befund:** Die vollständig geprüfte niederländische Fassung verwendet für zentrale
  Funktionen und Bauteile widersprüchliche oder erkennbar defekte Bezeichnungen:
  - Seite 186 übersetzt den geschützten Produktnamen einmal zu `Pro-Zoeker`; sonst steht
    `Pro-finder`.
  - Der Positionsbefehl auf Seite 195 lautet sichtbar und bei 400 dpi bestätigt `positi`,
    während die Hilfe-SMS auf Seite 193 `POS` nennt.
  - Dieselbe Hauptnummer heißt auf Seite 187 `Hoofdnummer`, in der Tabelle auf Seite 189
    `Stamnummer` und im folgenden Absatz `masternummer`.
  - Derselbe Hauptkabelbaum heißt innerhalb der vier Löschschritte auf Seite 189 zuerst
    `hoofdbedradingsbundel`, danach `hoofdkabelboom`.
  - Der Netzsuchverbrauch heißt auf Seite 198 `Op het lichtnet zoeken`; die LED-Tabelle
    auf Seite 191 verwendet für denselben Zustand `Netwerk zoeken`.
- **Warum das zählt:** Produktname, Positionsbefehl und Löschbauteil sind Such- und
  Bedienanker. Die Varianten können Nutzende zu einem mutmaßlich unvollständigen Befehl
  oder zum falschen Bauteil führen und verhindern eine belastbare Terminologiegrundlage.
- **Schwere:** hoch · **Status:** offen – niederländischer Sprachreview und technischer
  Review des Positionsbefehls; gehört bei Befehlen zu BLK-005

### DSC-084 – Polnischer Normalbetrieb und Anschlussbegriff sind widersprüchlich (ab SN-045)

- **Dokument:** DOC-IBA-SN045, polnische Seiten 206, 217 und 223
- **Befund:** Die vollständig geprüfte polnische Fassung enthält mehrere sichtbare
  Widersprüche an Bedienankern:
  - Seite 217 beschreibt LED-Zustand 8 und 9 wortgleich als gelb-grünes Blinken bei
    fehlenden Zielrufnummern. Die Grafik von Zustand 9 zeigt dagegen nur grüne Striche;
    der rote Schlusshinweis nennt grünes Blinken ausdrücklich als Normalbetrieb. Die
    textliche Beschreibung des betriebsbereiten Zustands ist damit falsch dupliziert.
  - Seite 206 druckt im letzten Satz `do stuku 3`, obwohl Titel, Kontext und Parallelstelle
    auf derselben Seite `styku 3` für Kontakt/Pin 3 verwenden. Das betroffene Wort benennt
    den Anschluss des manuellen Alarms.
  - Seite 223 verwendet in zwei aufeinanderfolgenden Formen `wuczeniu` und `wuczania`,
    während die Abschnittsüberschrift `trybu uczenia` schreibt. Derselbe Anlernmodus wird
    innerhalb eines kurzen Abschnitts unterschiedlich benannt.
- **Warum das zählt:** Status 9 ist die Bestätigung des Normalbetriebs; Pin 3 und
  Anlernmodus sind konkrete Bedienziele. Die Fehler dürfen nicht als polnische
  Terminologiebasis oder Fehlerhilfe übernommen werden.
- **Schwere:** hoch · **Status:** offen – polnischer Sprachreview und technischer Review
  der LED-Zeile

### DSC-085 – Schwedische Abschaltanweisung nennt den Einschaltbefehl (ab SN-045)

- **Dokument:** DOC-IBA-SN045, schwedische Seiten 235 und 243
- **Beleg:** Seite 235 empfiehlt wegen möglicher GPS-Reflexionen in Hallen, Geofencing zu
  deaktivieren, und nennt dafür wörtlich `fence pa`. Abschnitt 5.2 auf Seite 243 definiert
  `fence pa` dagegen als Einschaltbefehl und `fence av` als Ausschaltbefehl. Der Wortlaut
  von Seite 235 wurde zusätzlich in einem 600-dpi-Ausschnitt geprüft.
- **Befund:** Eine Person, die der Abschaltanweisung folgt, aktiviert oder belässt den
  virtuellen Zaun nach der eigenen Befehlsdefinition desselben Dokuments aktiv. Gerade in
  der beschriebenen Halle kann das die Diebstahlfehlalarme auslösen, die der Hinweis
  vermeiden soll.
- **Folge für den Pilot:** Keine der beiden Zeichenfolgen wird als Bedienanweisung in den
  Content-Layer übernommen. Der Befund bleibt unter BLK-005, bis THITRONIK den gültigen
  Befehl bestätigt.
- **Schwere:** hoch · **Status:** offen – technischer und schwedischer Sprachreview

<a id="synthese-befehle"></a>

## Synthese-Auswertung 1: SMS-Befehle im Sprach- und Generationenvergleich

Diese Auswertung verbindet den **vollständig geprüften** viersprachigen Befehlssatz bis
SN-044, die geräteseitige Hilfe-SMS dieser Generation und die zehn vollständig geprüften
Sprachfassungen ab SN-045. Alle Angaben sind Quellenzitate für BLK-005, **keine
zur Veröffentlichung freigegebenen Befehle**.

### Bis SN-044: Kein Handbuchsatz entspricht der Geräteliste

| Funktion           | Deutsch                   | Englisch                       | Französisch             | Schwedisch            | Hilfe-SMS des Geräts |
| ------------------ | ------------------------- | ------------------------------ | ----------------------- | --------------------- | -------------------- |
| Schärfen           | `scharf`                  | `arm`                          | `arme`                  | `skarp`               | `SCHARF`             |
| Entschärfen        | `unscharf`                | `disarm`                       | `desarme`               | `oskarp`              | `UNSCHARF`           |
| Sirene/Blinker ein | `alarm`                   | `alarm`                        | `alarm`                 | `larm`                | **fehlt**            |
| Sirene/Blinker aus | `unscharf`                | `disarm`                       | `desarme`               | `urkopplad`           | `ALARM AUS`          |
| Geofencing ein     | `Fence an`                | `Fence on`                     | `gardiennage active`    | `fence pa`            | `FENCE ON`           |
| Geofencing aus     | `fence aus` / `Fence aus` | `Fence off`; einmal `fence av` | `gardiennage desactive` | `fence av`            | `FENCE OFF`          |
| Statusbericht      | `Status`                  | `Status`                       | `Statut`                | `Status`              | `STATUS`             |
| Position           | `Pos` / `POS`             | `Pos` / `POS`                  | `Pos`                   | `Pos`                 | **fehlt**            |
| Ausgang A ein      | `A an`                    | `A on`                         | `A active`              | `A pa`                | `A ON`               |
| Ausgang A aus      | `A aus`                   | `A off`                        | `A desactivee`          | `A av`                | `A OFF`              |
| Ausgang A, Impuls  | `A impuls`                | `A pulse`                      | `A impulsion`           | `A impuls`            | `A PULSE`            |
| Ausgang A, Zeit    | `A XXX`                   | `A XXX`                        | `A XXX`                 | `A XXX`               | **fehlt**            |
| GPS ein/aus        | **nicht im Handbuch**     | **nicht im Handbuch**          | **nicht im Handbuch**   | **nicht im Handbuch** | `GPS ON` / `GPS OFF` |

Fundstellen: DOC-BMA-SN044, DE Seiten 7/13–16, EN 25/31–34, FR 42/48–51, SV
59/65–68. Die Hilfe-SMS steht als identisches deutsches Bild auf den Seiten 13, 31, 48
und 65; ihre Liste wurde auf Seite 13 bei 700 dpi und im schwedischen Abschlussbatch noch
einmal bei 500 dpi gelesen.

Die Geräteliste ist **kein fünfter konsistenter Sprachsatz**. Sie kombiniert deutsche
Schaltwörter (`SCHARF`, `UNSCHARF`, `ALARM AUS`) mit englischen Ausgangs-, Geofencing-
und GPS-Wörtern. Deutsch stimmt nur beim Schärfen, Englisch nur bei Ausgängen und
Geofencing mit ihr überein; Französisch und Schwedisch bei keiner Wortkomponente. Gleichzeitig
fehlen der Liste die im Handbuch gelehrten Positions- und Zeitbefehle, während ihre beiden
GPS-Befehle in keinem Sprachteil erklärt werden. Das englische `fence av` ist zusätzlich
bildlich als aus dem schwedischen Teil kontaminiert belegt (DSC-067).

### Ab SN-045: Zehn Sprachfassungen, zehn unterschiedliche Befehlsprofile

| Funktion        | Deutsch          | Englisch        | Französisch                   | Tschechisch     | Dänisch                   | Spanisch                      | Italienisch                            | Niederländisch            | Polnisch                             | Schwedisch              |
| --------------- | ---------------- | --------------- | ----------------------------- | --------------- | ------------------------- | ----------------------------- | -------------------------------------- | ------------------------- | ------------------------------------ | ----------------------- |
| Geofencing ein  | `fence an`       | `fence on`      | `activer le gardiennage`      | `plot zap`      | `fence til`               | `fence on`                    | `fence attivo`                         | `fence aan`               | `fence on`                           | `fence pa`              |
| Geofencing aus  | `fence aus`      | `fence off`     | `desactiver le gardiennage`   | `plot vyp`      | `fence fra`               | `valla apagada` / `fence off` | `recinto spento` / `fence disattivato` | `fence off` / `fence uit` | `ogrodzenie wyłączone` / `fence off` | `fence pa` / `fence av` |
| Statusbericht   | `status`         | `status`        | `rapport d etat`              | `stav`          | `status`                  | `status`                      | `stato`                                | `status`                  | `status`                             | `status`                |
| Position        | `position`       | `position`      | `position`                    | `poloha`        | `position`                | `position`                    | `posizione`                            | `positi`                  | `position`                           | `position`              |
| Ausgang A ein   | `a an`           | `a on`          | `activer la sortie A`         | `a zap`         | `a til`                   | `a on`                        | `a attivo`                             | `a aan`                   | `a on`                               | `a pa`                  |
| Ausgang A aus   | `a aus`          | `a off`         | `desactiver la sortie A`      | `a vyp`         | `a fra`                   | `a off`                       | `a disattivato`                        | `a uit`                   | `a off`                              | `a av`                  |
| Ausgang gepulst | `a impuls`       | `a pulse`       | `sortie A impulsion`          | `a impuls`      | `a impuls`                | `a pulse`                     | `impulso a`                            | `a impuls`                | `a pulse`                            | `a impuls`              |
| Ausgang Zeit    | `a %min%`        | `a %min%`       | `a %min%`                     | `a %min%`       | `a %min%`                 | `a %min%`                     | `a %min%`                              | `a %min%`                 | `a %min%`                            | `a %min%`               |
| Anlernmodus ein | `anlernmodus an` | `teach mode on` | `activer le mode d appairage` | `uceni zap`     | `Indlaeringsmodus taendt` | `teach mode on`               | `modalita di apprendimento attiva`     | `instelmodus aan`         | `teach mode on`                      | `inlarningslage pa`     |
| Hilfe-SMS       | SCHARF/UNSCHARF  | ARM/DISARM      | ACTIVER/DESACTIVER            | ZAPNOUT/VYPNOUT | AKTIVERET/DEAKTIVERET     | ARM/DISARM                    | ABILITATO/DISABILITATO                 | SCHERP/ONSCHERP           | ARM/DISARM                           | SKARP/OSKARP            |

Fundstellen und Einzelbelege stehen in DSC-013, DSC-014, DSC-026 und DSC-033. Auch hier
existiert kein sprachneutraler Satz; nur `a %min%` bleibt über alle zehn Fassungen gleich.
Spanisch mischt `valla apagada` mit englischen Kapitelbefehlen und einer englischen
Hilfe-SMS. Italienisch, Niederländisch, Polnisch und Schwedisch wechseln sogar innerhalb
des eigenen Teils beim Geofencing-Ausschaltbefehl; Schwedisch weist `fence pa` dabei
sowohl dem Ein- als auch dem Ausschalten zu, Niederländisch druckt zusätzlich `positi`.
Die Großschreibung der Hilfe-SMS und die abweichenden Kapitelwörter bleiben ungeklärt.

### Ergebnis des Generationenvergleichs

1. **Sprache und Generation sind beide Funktionsparameter.** Französisch wechselt etwa
   von `gardiennage active` zu `activer le gardiennage`, von `Statut` zu
   `rapport d etat` und von `A active` zu `activer la sortie A`. Deutsch/Englisch wechseln
   beim Zeitplatzhalter von `XXX` zu `%min%` und beim Positionswort von `Pos` zu
   `position`.
2. **Die Hilfe-SMS ist keine belastbare Masterliste.** Bis SN-044 fehlen ihr dokumentierte
   Befehle und sie enthält unerklärte; zugleich widerspricht jeder Handbuchsatz mindestens
   einem ihrer Blöcke. Ab SN-045 ist selbst die Hilfe-SMS lokalisiert.
3. **ASCII ist ein Muster, keine Freigabe.** `pa` statt schwedisch `på`, akzentlose
   französische und tschechische Wörter sowie deutsche Umlaute als `ue` deuten auf eine
   Zeichensatzgrenze. Daraus lässt sich nicht ableiten, welche Zeichenfolge ein Gerät
   akzeptiert.
4. **BLK-005 bleibt zwingend.** Kein Befehl darf in `goal`, `steps`, `warnings`,
   `error_cases`, `expected_result` oder `tables_md` erscheinen, bis THITRONIK je
   Generation die akzeptierten Zeichenfolgen, Spracheinstellung, Groß-/Kleinschreibung
   und die Rolle der Hilfe-SMS bestätigt hat.

<a id="synthese-technische-werte"></a>

## Synthese-Auswertung 2: Technische Werte, Dokumentstand und Generation

Diese Auswertung verbindet ausschließlich bereits dokumentierte und gegen die jeweiligen
PDF-Seiten geprüfte Befunde. Sie wählt keinen Sollwert aus und ersetzt keinen technischen
oder rechtlichen Review. Die Gegenüberstellung zeigt drei voneinander unabhängige
Fehlerachsen: **Gerätegeneration, Dokument innerhalb einer Generation und Sprachfassung**.

### Vergleichsmatrix

| Prüfpunkt                      | Bis SN-044                                                                                                                 | Ab SN-045                                                                                                              | Konflikt und Fundstellen                                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auswahl der Generation         | DOC-BMA-SN044 und DOC-KA-SN044 tragen keine Bereichsangabe.                                                                | `ab Seriennr. -045`, `as of serial no. -045` und `SN 0699 - 045 +`; kein genauer Fundort und keine Leseregel am Gerät. | Die Abwesenheit einer Kennzeichnung beweist nicht „bis SN-044“. DOC-IBA-SN045, S. 1/2/6/26; DOC-KA-SN045, S. 1 (DSC-023, DSC-048).                                                                                        |
| SIM-Format                     | Micro-SIM                                                                                                                  | Nano-SIM                                                                                                               | Echte generationsabhängige Abweichung. DOC-BMA-SN044, S. 18; DOC-IBA-SN045, S. 25/49/76 (DSC-069).                                                                                                                        |
| Stromaufnahme im Normalbetrieb | DOC-BMA-SN044: ca. 21 mA; DOC-KA-SN044: ca. 16–21 mA.                                                                      | DE/FR und weitere geprüfte Fassungen: ca. 16–21 mA; EN: ca. 21 mA.                                                     | Der Konflikt liegt sowohl zwischen zwei Unterlagen der älteren Generation als auch zwischen den Sprachfassungen der neueren vor. DOC-BMA-SN044, S. 18; DOC-KA-SN044, S. 2; DOC-IBA-SN045, S. 25/49/76 (DSC-020, DSC-069). |
| Spannungsversorgung            | Anschlusskapitel: geeignete 12-V-DC-Spannungsquelle; technische Tabelle: 9–30 V.                                           | Technische Tabellen: 9–30 V.                                                                                           | 12 V kann ein typischer Anschlusskontext innerhalb von 9–30 V sein; die ältere Quelle erklärt die Beziehung nicht. DOC-BMA-SN044, S. 6/18; DOC-IBA-SN045, S. 25/49/76 (DSC-069).                                          |
| Konformitätsbezug              | DOC-BMA-SN044: 1999/5/EG; DOC-KA-SN044: 2014/53/EU. EN/FR/SV im BMA drucken zusätzlich die nicht existierende `1995/5/EG`. | 2014/53/EU                                                                                                             | Weder Dokumentstand noch Übersetzung liefern für die ältere Generation einen widerspruchsfreien Wert. DOC-BMA-SN044, S. 18/36/53/70; DOC-KA-SN044, S. 2; DOC-IBA-SN045, S. 25/49/76 (DSC-069, DSC-071).                   |
| GPS-Kabellänge                 | DE/FR/SV nennen eine feste Länge von 2 m; EN formuliert eine Obergrenze von 2 m.                                           | Kein Wert aus dieser Gegenüberstellung übertragen.                                                                     | Der Zahlenwert ist gleich, seine technische Bedeutung nicht. DOC-BMA-SN044, S. 3/21/38/55 (DSC-073, DSC-079).                                                                                                             |
| Geofencing-Radius              | DE/EN/SV: ca. 1000 m beziehungsweise 1 km; FR: 1500 m beziehungsweise 1,5 km.                                              | Deutscher Master: rund 900 m.                                                                                          | Drei Werte für dieselbe Auslösebedingung; der französische Wert liegt 50 Prozent über den drei Parallelfassungen. DOC-BMA-SN044, S. 12/15/30/33/47/50/64/67; DOC-IBA-SN045, S. 19/21 (DSC-061, DSC-078).                  |
| Betriebsart D                  | DE/FR/SV: Statusbericht alle 8 Minuten; EN: alle 8 Sekunden.                                                               | Keine Übertragung aus der älteren Generation.                                                                          | Faktor 60 innerhalb desselben Handbuchs; drei Sprachfassungen stehen gegen eine. DOC-BMA-SN044, S. 5/23/40/57 (DSC-066).                                                                                                  |

### Was die Matrix belegt

1. **Die Generation muss vor jeder technischen Anweisung belastbar feststehen.** Das
   SIM-Format unterscheidet sich nachweislich. Gleichzeitig reicht die Dokumentkennzeichnung
   für die Auswahl nicht aus, weil die älteren Unterlagen keinen Bereich nennen und die
   neueren Unterlagen keine sichere Leseregel für die Seriennummer liefern.
2. **Ein deutsches Dokument ist nicht automatisch der technische Master.** Bis SN-044
   widersprechen sich Bedienungs- und Kurzanleitung bei Stromaufnahme und
   Konformitätsbezug; das Anschlusskapitel und die technische Tabelle erklären 12 V
   gegenüber 9–30 V nicht.
3. **Mehrheitsverhältnisse sind keine Freigabe.** Bei Betriebsart D stehen drei
   Sprachfassungen gegen eine, beim Geofencing-Radius ebenfalls. Das macht Ausreißer
   wahrscheinlich, entscheidet aber weder den gültigen Wert noch den betroffenen
   Hardwarestand.
4. **Gleiche Zahlen können unterschiedliche Regeln ausdrücken.** Die 2-m-Angabe zur
   GPS-Kabellänge ist je Sprachfassung feste Länge oder Obergrenze. Ein reiner
   Tokenvergleich würde diesen Bedeutungsunterschied nicht erkennen.
5. **Kein Wert darf durch Nähe zu einer anderen Generation plausibilisiert werden.** Die
   englische SN-045-Angabe von ca. 21 mA gleicht zwar dem älteren BMA-Wert; daraus folgt
   weder, dass sie korrekt ist, noch dass die Hardware technisch identisch ist.

### Konsequenz für den Pilot

- Die Routen `sn-001-044` und `sn-045-plus` bleiben strikt getrennt; die Startseite nennt
  bis zur Antwort auf Rückfrage 4 keine erfundene Seriennummern-Leseregel.
- Micro-SIM und Nano-SIM, Radius, Stromaufnahme, Versorgung und Konformitätsangaben werden
  nicht generationsübergreifend übernommen.
- Der Radius und das Intervall der Betriebsart D bleiben bis zu den Antworten auf
  Rückfragen 14 und 16 aus ausführbaren Bedienanweisungen heraus.
- Die PIN-Vorgabe aus DOC-BMA-SN044, S. 8/11/26 bleibt als eigener sicherheitskritischer
  Prüfpunkt unter Rückfrage 15 offen; das Fehlen eines widersprechenden Werts ist keine
  Bestätigung für die andere Generation.
- Maßgeblich für die Freigabe sind die einzeln vorbereiteten Entscheidungen in P0-01 bis
  P0-05, nicht diese Übersicht. Die Synthese verdichtet die Belege, hebt aber keinen
  `review_status` an.

<a id="synthese-zugaenglichkeitsgrenzen"></a>

## Synthese-Auswertung 3: Zugänglichkeit von PDF, Bildinhalt und Gerät

Die dritte Auswertung trennt die gefundenen Barrieren nach dem Ort, an dem sie entstehen.
Das ist für die Abnahme entscheidend: Eine semantische HTML-Anleitung kann viele Mängel
der Ausgangs-PDFs kompensieren, aber weder fehlende Produktfunktionen noch unklare
technische Regeln reparieren.

### Drei Ebenen mit unterschiedlichen Abhilfen

| Ebene                          | Belegter Befund                                                                                                                                                                                                                                                                             | Was der Pilot leisten kann                                                                                                                       | Was offen bleibt                                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PDF-Struktur ab SN-045         | 202 von 247 Seiten ohne Textebene, 34 nur mit U+0003, zehn nur mit `••••`; nur Seite 1 enthält lesbaren Fließtext. Keine Lesezeichen, keine robuste Lesereihenfolge und keine verlässlichen Sprachwechsel.                                                                                  | Inhalt als semantisches HTML mit Seitensprache, Überschriften, Listen, Tabellen und Quellenangaben neu strukturieren.                            | Eine barrierefreie PDF-Fassung oder PDF/UA-Sanierung ist nicht Bestandteil des Pilotstands. Sie müsste separat erstellt und geprüft werden.                     |
| Textebene bis SN-044           | Das Sternzeichen eines Abfragecodes fehlt oder wird als Private-Use-Zeichen extrahiert; neun Beispiel-SMS fehlen vollständig. Auf französischen Seiten ist Text extrahierbar, aber sichtbar verdeckt; auf den Schlussseiten ist unsichtbarer Text außerhalb des Seitenrahmens extrahierbar. | Sichtbaren Inhalt und Textebene getrennt prüfen; technische Zeichen gegen das Seitenbild halten; Off-page-Inhalt nicht in HTML übernehmen.       | Die Original-PDFs bleiben als Quellen unverändert und damit für Screenreader unzuverlässig (DSC-058, DSC-060, DSC-075, DSC-081).                                |
| Visuelle Semantik              | Warnungen besitzen bis SN-044 kein Signalwort; Rot, Piktogramme, Unterstreichung und Position tragen Struktur. Kartenadressen sehen in allen Sprachen wie Links aus, sind aber überwiegend inert oder doppelt annotiert.                                                                    | Sicherheitsklasse als Wort ausgeben, Handlungen als echte Listen strukturieren und nur bestätigte Ziele als genau einen benannten Link anbieten. | PDF-Sanierung und erneute Prüfung von Lesereihenfolge, Linkzielen und visueller Kennzeichnung (DSC-063, DSC-082).                                               |
| Nicht lokalisierter Bildinhalt | Ab SN-045 bleibt die Beschriftung `GPS-Antenne (Optional)` in allen zehn Sprachteilen deutsch. Bis SN-044 verwenden alle vier Sprachteile dieselben deutschen Meldungs- und Kartenbilder.                                                                                                   | Abbildungen nicht als alleinigen Informationsträger verwenden; Textalternativen und sprachlich passende Erläuterungen im HTML bereitstellen.     | Die tatsächliche Gerätemeldungssprache bis SN-044 ist unbestätigt; Erkennungsstichwörter bleiben unter Rückfrage 17 offen (DSC-022, DSC-072).                   |
| Status-LED am Gerät            | Ab SN-045 sind zwei GPS-Diagnosezustände nur durch Dauerlichtfarbe unterscheidbar. Bis SN-044 reduzieren sich neun Zustände ohne sichere Farbwahrnehmung auf zwei Blinkarten; auch ein Löschvorgang hängt an einer Farbkombination.                                                         | Bedeutungen, Schalterstellung und bekannte Grenzen verständlich beschreiben; keine WCAG-Erfüllung des Geräts behaupten.                          | Nur THITRONIK kann ein farbunabhängiges Signal oder eine textliche Rückmeldung bestätigen beziehungsweise am Produkt ergänzen (DSC-047, DSC-059; Rückfrage 12). |
| Fachliche Produktlogik         | Geofencing-Voraussetzungen, Berechtigungszeichen, SMS-Befehle, Radius und weitere Werte sind widersprüchlich oder unbelegt.                                                                                                                                                                 | Unsicherheit sichtbar machen, Generationen trennen und betroffene Schritte sperren oder als Entwurf kennzeichnen.                                | HTML kann keine unbekannte Gerätefunktion erschließen; BLK-005, BLK-006 und BLK-007 bleiben technische Blocker.                                                 |

### Ergebnis

1. **Eine vorhandene Textebene ist kein Zugänglichkeitsnachweis.** Sie kann sichtbare
   Zeichen auslassen, unsichtbare oder außerhalb der Seite liegende Inhalte vorlesen und
   eine falsche Lesereihenfolge erzeugen. Deshalb bleibt die visuelle Seitenprüfung neben
   der maschinellen Extraktion verpflichtend.
2. **Barrierefreies HTML ist der Primärzugang, nicht eine Darstellung des PDFs.** Der
   Content-Layer muss Bedeutung neu ausdrücken: Warnungen als Wörter, Schritte als Listen,
   Tabellen mit Kopfzellen, Abbildungen mit Textalternativen und Sprachwechsel über die
   jeweilige Route.
3. **Die Grenze des Pilots liegt am physischen Gerät.** Eine Anleitung kann die
   Farbcodierung der Status-LED erklären, aber keine zusätzliche Blinkfolge, akustische
   Rückmeldung oder Textausgabe erzeugen. Rückfrage 12 ist deshalb kein redaktioneller
   Restpunkt, sondern eine Produktentscheidung.
4. **Automatische Tests sind notwendig, aber nicht hinreichend.** Die grünen axe- und
   Browserläufe belegen nur die geprüften Regeln der HTML-Oberfläche. Sie sagen nichts über
   PDF/UA, korrekte technische Inhalte, die Status-LED oder die offene manuelle
   AT-/Zoom-/Reflow-/Forced-Colors-/Reduced-Motion-Matrix aus.
5. **Die Setup-Karte ist ein eigener physischer Zugangskanal.** Ohne bestätigte URL,
   Supportdaten, Kerbengeometrie, Braille-Dienstleister, Andruck und Tests mit betroffenen
   Personen bleibt sie ein Entwurf; SVG-Preflight und Bildvorschau ersetzen diese
   Prüfungen nicht.

Die Synthese ändert keine Freigabe. Sie ordnet die bestehenden Befunde den zuständigen
Folgearbeiten zu: HTML-QA, separate PDF-Sanierung, THITRONIK-Fachentscheidung oder
physische Prüfung.
