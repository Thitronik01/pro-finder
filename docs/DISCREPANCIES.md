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
  Fassung nennt einen konkreten Drittanbieter, der in keiner anderen Fassung vorkommt.
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
- **Folge für das Projekt:** Der deutsche Master darf nicht als geprüfte Wahrheit behandelt
  werden. Auch er braucht einen eigenen technischen Review, nicht nur die Übersetzungen.
- **Schwere:** hoch (Projektannahme betroffen; inhaltlich mittel) · **Status:** offen

## Mittel

### DSC-021 – Französischer Sprachteil hat 25 statt 23 interne Seiten (ab SN-045)

- **Dokument:** DOC-IBA-SN045, französische Seiten 51 ff. („Page 1 de 25") gegenüber
  deutscher Seite 3 und englischer Seite 27 („Seite/Page 1 von/of 23")
- **Befund:** Die interne Paginierung ist kein sprachübergreifender Anker. Kapitel liegen ab
  Kapitel 3 auf abweichenden internen Seiten (FR: Kapitel 3 auf 18, Kapitel 4 auf 19,
  Kapitel 5 auf 21; DE/EN: 16/15, 17/16, 19/19).
- **Bewertung:** Der Inhalt ist stichprobenweise deckungsgleich (Haftungsausschluss und
  bestimmungsgemäßer Gebrauch stehen in allen drei Fassungen auf interner Seite 3 und
  enthalten denselben Tiefentladungsabsatz). Die Differenz ist bislang typografisch
  erklärbar, nicht inhaltlich – abschließend geprüft ist das erst nach dem vollständigen
  französischen Teil.
- **Folge:** Segment-Mapping darf nicht über die interne Seitenzahl erfolgen, sondern nur
  über Kapitelnummer und PDF-Seite. **Status:** offen

### DSC-022 – Eingebettete Bildbeschriftung in keiner Sprachfassung lokalisiert (ab SN-045)

- **Dokument:** DOC-IBA-SN045, Abschnitt 1.2 – deutsche Seite 8, englische Seite 32,
  französische Seite 56
- **Beleg:** Die Beschriftung am Antennenfoto lautet in allen drei Fassungen deutsch
  „GPS-Antenne (Optional)", während die Legende danebensteht als „External GPS antenna
  (optional)" (EN) beziehungsweise „Antenne GPS externe (en option)" (FR).
- **Bewertung:** Die Grafik wurde offenbar als fertiges Bild in alle Sprachteile übernommen.
  Damit ist zu erwarten, dass alle zehn Sprachfassungen betroffen sind; bestätigt sind
  bisher DE, EN und FR.
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
  « ALARME »", Conseil dagegen „sous le nom du contact _AAlarme_". Der Fehler wurde also
  mitübersetzt statt bemerkt.
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
  passen nicht zusammen. Dasselbe auf der französischen Seite 66 („+33 pour la France"
  neben deutschen Beispielnummern) – die Erläuterung wird lokalisiert, die Beispielgrafik
  nicht.
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

> Die Befunde der Seiten 1–66 von DOC-IBA-SN045 und der Seiten 1–2 von DOC-KA-SN044 sind
> in den Seitenrecords unter [sources/pages/](../sources/pages/) erfasst und werden bei
> der Segment-Extraktion in dieses Register übernommen, sobald sie inhaltlich bewertet sind.
