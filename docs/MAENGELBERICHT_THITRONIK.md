# Mängelbericht an THITRONIK

Stand: 2026-08-23 · Erstellt im Rahmen des Pro-finder Barrierefreiheits-Pilots ·
**Kein Dokument der Thitronik GmbH**

## Was dieser Bericht ist

Beim Aufbau der barrierefreien Web-Anleitung mussten alle Quelldokumente Seite für Seite
gelesen werden. Dabei sind **97 dokumentierte Befunde** entstanden. Dieser Bericht fasst die
41 Befunde der Schwere „hoch" zusammen und ordnet sie danach, was sich damit tun lässt.

Er unterscheidet sich in einem Punkt von allem anderen im Pilotprojekt: **Er braucht keine
Freigabe.** Jede Aussage über das Gerät wartet auf Ihren technischen Review. Aussagen über
Ihre Dokumente dagegen sind unsere eigenen, belegten Beobachtungen – Sie können sie sofort
prüfen und die Dokumente korrigieren, unabhängig vom Rest des Pilots.

Der Bericht behauptet **nicht**, wie sich das Gerät verhält. Er sagt nur, was in den
Dokumenten steht, wo sie sich widersprechen und wo eine Angabe fehlt.

## Wie geprüft wurde

Alle 323 Seiten der vier Quelldokumente wurden visuell gesichtet. 65 Seiten sind darüber
hinaus vollständig extrahiert und gegengelesen. Drei Prüfachsen liegen jedem Befund
zugrunde:

1. **Sprachfassung gegen Sprachfassung** innerhalb derselben Auflage.
2. **Generation gegen Generation** – niemals mit Übernahme eines Werts.
3. **Handbuch gegen Kurzanleitung** derselben Generation und Sprache.

Die Seiten liegen fast durchgängig als Bild vor, nicht als Text. Jeder Befund beruht deshalb
auf einem Rendering; strittige Einzelwerte wurden bei 400 bis 500 dpi zeichengenau
nachgerendert. Die Original-PDFs wurden ausschließlich gelesen, nie verändert.

Ein Beispiel für die Belegtiefe: Bei der Betriebsartentabelle wurden alle sechzehn Zeilen und
elf Spalten der deutschen und der englischen Fassung Zelle für Zelle verglichen.

## Die Zahlen

|                                         |                                           |
| --------------------------------------- | ----------------------------------------- |
| Geprüfte Dokumente                      | 4 (zwei Handbücher, zwei Kurzanleitungen) |
| Geprüfte Seiten                         | 323, davon 65 vollständig extrahiert      |
| Geprüfte Sprachfassungen                | 10                                        |
| Dokumentierte Befunde                   | 97                                        |
| davon Schwere „hoch"                    | 41                                        |
| Offene Entscheidungsfragen an THITRONIK | 17                                        |

---

# Teil A — Befunde, die zu einer Fehlbedienung führen können

Diese Befunde haben gemeinsam, dass eine Nutzerin, die der Anleitung folgt, etwas anderes
tut als beabsichtigt.

## A1 · Die schwedische Anleitung nennt zum Abschalten den Einschaltbefehl

**DSC-085 · DOC-IBA-SN045, schwedische Seiten 235 und 243**

Seite 235 empfiehlt, das Geofencing zu deaktivieren, wenn das Fahrzeug in einer Halle steht –
und nennt dafür wörtlich einen Befehl. Abschnitt 5.2 auf Seite 243 definiert genau diesen
Befehl als **Ein**schaltbefehl und einen anderen als Ausschaltbefehl.

Wer der Empfehlung auf Seite 235 folgt, schaltet das Geofencing also ein statt aus – und löst
damit genau die Fehlalarme aus, die der Hinweis verhindern soll.

## A2 · Eine doppelte Verneinung kehrt eine Sicherheitsaussage um

**DSC-034 · DOC-IBA-SN045, französische Seite 70**

Deutsch und Englisch schließen die Spannungswarnung für eine Betriebsart aus. Die
französische Fassung setzt an derselben Stelle eine doppelte Verneinung, die die Aussage
umkehrt. Der Satz ist grammatisch fehlerhaft und in beide Richtungen lesbar.

## A3 · Zehn Sprachfassungen dokumentieren zehn verschiedene Befehlssätze

**DSC-033, DSC-013, DSC-014, DSC-026 · DOC-IBA-SN045, alle Sprachteile**

Keine zwei der zehn geprüften Sprachfassungen nennen denselben Befehlssatz. Nur ein einziger
Befehl lautet in allen Fassungen gleich. Spanisch und Polnisch mischen lokalisierte und
englische Befehle innerhalb eines Kapitels.

Damit lässt sich aus den Dokumenten allein nicht bestimmen, welche Zeichenfolge ein Gerät
tatsächlich annimmt. **Das ist der schwerwiegendste Einzelbefund des Projekts** und der Grund,
warum die Web-Anleitung bis heute keinen einzigen Befehl veröffentlicht.

## A4 · Handbuch und Gerät widersprechen sich – innerhalb eines Dokuments

**DSC-054 · DOC-BMA-SN044, Seiten 7 und 13 bis 16**

Auf Seite 13 ist die automatische Hilfe-Nachricht des Geräts als Abbildung wiedergegeben. Sie
nennt die Befehle, die das **Gerät selbst** für gültig hält. Der Fließtext derselben Anleitung
nennt andere. Zwei im Handbuch genannte Befehle fehlen in der Geräteliste ganz, zwei
Gerätebefehle kommen im Handbuch nicht vor.

Damit ist ausgeschlossen, dass die Unterschiede allein Übersetzungsfehler sind: Die Unklarheit
liegt im Produkt, nicht in der Übersetzung.

## A5 · Der englische Teil druckt den schwedischen Befehl

**DSC-067 · DOC-BMA-SN044, englische Seite 25**

Die englische Seite 25 nennt als Geofencing-Ausschaltbefehl die Zeichenfolge des
**schwedischen** Teils, während der eigene englische Abschnitt 2.4 eine andere schreibt.
Vorlagenkontamination zwischen Sprachfassungen ist damit innerhalb eines Dokuments belegt.

## A6 · Drei verschiedene Geofencing-Radien für dieselbe Größe

**DSC-078, DSC-061 · DOC-BMA-SN044 und DOC-IBA-SN045**

Für den Abstand, ab dem eine Diebstahlmeldung ausgelöst wird, nennen die Quellen drei Werte:
1000 m in der deutschen, englischen und schwedischen Fassung bis SN-044, **1500 m** in der
französischen Fassung desselben Handbuchs, und 900 m ab SN-045. Der französische Wert liegt
50 % über den drei Parallelfassungen – und zwar innerhalb desselben Handbuchs, nicht zwischen
Generationen.

## A7 · Betriebsart D: Faktor 60 zwischen zwei Fassungen

**DSC-066 · DOC-BMA-SN044, deutsche Seite 5 gegen englische Seite 23**

Das Intervall der automatischen Statusberichte in Betriebsart D lautet deutsch „8 Minuten",
englisch „8 seconds". Die Nachbarzeile C stimmt überein – der Fehler ist auf Zeile D begrenzt.
Beide Zellen wurden bei 300 und 400 dpi zeichengenau gesichert.

**Hinweis ohne Wertübertragung:** In der Generation ab SN-045 nennen beide Fassungen
8 Minuten. Das ist ein Anhaltspunkt für Ihre Klärung, kein Beweis für die ältere Generation.

## A8 · Die Berechtigungsregel für Zielrufnummern steht nirgends

**DSC-044, DSC-056 · beide Generationen, alle zehn Sprachfassungen**

Ob eine gespeicherte Rufnummer die Ausgänge steuern darf, hängt an einem einzelnen Zeichen vor
der Nummer. Die Syntaxgrafik erklärt zwei andere Zeichen – dieses nicht. Die Regel ist
ausschließlich aus dem Vergleich dreier Tabellenbeispiele erschließbar, und zwar in **allen
zehn** geprüften Sprachfassungen und in **beiden** Generationen.

Das ist eine sicherheitskritische Zugriffsregel, die als Regel nirgends geschrieben steht.

---

# Teil B — Dokumente, die einander widersprechen

## B1 · Die Kurzanleitung widerspricht dem Handbuch an fünf Stellen

**DSC-093, DSC-095, DSC-096, DSC-097 · beide Kurzanleitungen gegen beide Handbücher**

Die Kurzanleitung ist das Papier, das dem Gerät beiliegt – für viele Nutzerinnen die einzige
Anleitung, die sie je in der Hand halten. Sie sagt an fünf Stellen etwas anderes als das
Handbuch derselben Generation **und derselben Sprache**:

| Frage                          | Kurzanleitung                                                                                                                    | Handbuch                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Welche SIM-Karte?              | bis SN-044: Vertragskarte, freie Anbieterwahl · ab SN-045: eine vorkonfigurierte Karte eines namentlich genannten Netzbetreibers | beide: zwei namentlich genannte Anbieter                                         |
| Multi-SIM zulässig?            | ab SN-045 deutsch: **ausgeschlossen**, mit technischen Anforderungen                                                             | ab SN-045 deutsch: keine Aussage                                                 |
| Was enthält der Statusbericht? | Zustand der Alarmanlage, Zustand des Geofencings, Standortverweis, Geschwindigkeit, beide Ausgänge, Temperatur                   | Position, Geschwindigkeit, Ausgänge, **Spannungen der Messeingänge**, Temperatur |
| iPhone erlaubt?                | bis SN-044: **kein iPhone verwenden** · ab SN-045: iMessage deaktivieren                                                         | bis SN-044: iPhone und iMessage kommen im ganzen Handbuch nicht vor              |
| Erstinbetriebnahme             | nur über die App                                                                                                                 | bis SN-044: nur über eine Programmiernachricht                                   |

**Besonders folgenreich ist das Multi-SIM-Verbot.** Es fehlt nicht dem Deutschen, sondern dem
deutschen **Handbuch**. In der deutschen Kurzanleitung steht es wörtlich. Das ausführlichere
Dokument ist an dieser Stelle das unvollständigere.

## B2 · Fünf verschiedene SIM-Empfehlungen

**DSC-027, DSC-093 · vier Dokumente, fünf Empfehlungen**

Handbuch bis SN-044 (deutsch und englisch) nennt zwei Anbieter · Kurzanleitung bis SN-044
nennt keinen · Handbuch ab SN-045 deutsch nennt zwei Anbieter · englisch stattdessen
technische Anforderungen · französisch eine Firma, die in keiner anderen Fassung vorkommt ·
Kurzanleitung ab SN-045 eine vorkonfigurierte Karte eines namentlich genannten Betreibers.

Eine Nutzerin erhält je nach beiliegendem Papier eine andere Kaufempfehlung.

## B3 · Ein technischer Auslegungswert weicht innerhalb einer Auflage ab

**DSC-088 · DOC-IBA-SN045, deutsche Seite 25 gegen englische Seite 49**

Die Stromaufnahme im Normalbetrieb steht deutsch als Bereich, englisch nur als dessen
Obergrenze. Wer nach der englischen Fassung ein Energiebudget auslegt, rechnet mit deutlich
mehr Ruhestrom als nach der deutschen Untergrenze. Alle übrigen Zeilen der technischen Daten
stimmen überein.

## B4 · Die beiden Generationen beschreiben verschiedene Verwendungszwecke

**DSC-092 · DOC-BMA-SN044 gegen DOC-IBA-SN045**

Bis SN-044 heißt das Gerät „Telemetriemodul zur **Flottenüberwachung** und Steuerung". Ab
SN-045 ist es ein Ortungssystem für Freizeitfahrzeuge, das ausdrücklich **nicht** zum
Aufzeichnen von Routen oder zur laufenden Verfolgung bestimmt ist.

Das ist nicht nur ein anderer Wortlaut, sondern ein anderer Zweck – und damit
datenschutzrechtlich erheblich. Zusätzlich fehlen der älteren Fassung mehrere
Sorgfaltspflichten, die die neuere ausformuliert.

## B5 · Meldet Geofencing ohne die Alarmanlage?

**DSC-042 · DOC-IBA-SN045, Seiten 19 und 21**

Seite 19 knüpft die Diebstahlmeldung an eine aktivierte Alarmanlage. Seite 21 beschreibt
Geofencing unabhängig davon, geschaltet über Pin 3 oder per Nachricht. Ob ein Pro-finder
**ohne** Alarmanlage überhaupt eine Diebstahlmeldung sendet, ist aus keinem Dokument
entscheidbar.

## B6 · Sprachmischung in der Kurzanleitung

**DSC-003, DSC-094 · DOC-KA-SN045, Seite 2**

In der schwedischen Spalte des SIM-Abschnitts ist die Überschrift französisch, Schritt 1
schwedisch, die Schritte 2 bis 4 französisch. Die englische Spalte trägt ebenfalls eine
französische Überschrift.

Eine schwedischsprachige Nutzerin erhält drei von vier Vorbereitungsschritten in einer Sprache,
die sie nicht angefordert hat – im Abschnitt, der die SIM-Karte konfiguriert, also der
Voraussetzung dafür, dass das Gerät überhaupt meldet.

## B7 · Vertauschte Sprachlabels in der LED-Übersicht

**DSC-001, DSC-002 · DOC-KA-SN045, Seite 1**

In drei der neun LED-Zustände sind die Sprachlabels paarweise vertauscht: Unter „IT" steht
Dänisch, unter „DA" Italienisch, unter „NL" Schwedisch, unter „SV" Niederländisch. In derselben
Tabelle steht in einer Zeile „GPS", wo alle übrigen Sprachen „GSM" meinen.

Nutzerinnen dieser vier Sprachen erhalten falsch beschriftete Statusinformationen.

## B8 · Eine unbrauchbare Supportnummer

**DSC-032 · DOC-IBA-SN045, französische Seite 76**

Die französische Fassung druckt eine Supportnummer, die durch zusätzliche Ziffernblöcke
verlängert ist. Die deutsche Seite 25 und die englische Seite 49 stimmen dagegen überein. Die
französische Nummer ist nicht wählbar.

---

# Teil C — Was Barrierefreiheit an der Quelle verhindert

Diese Befunde sind der eigentliche Anlass des Pilots. Sie lassen sich zum Teil in der
Web-Anleitung auffangen – aber nur, wenn die zugrunde liegende Information überhaupt
existiert.

## C1 · Neun Gerätezustände, unterschieden allein über Farbe

**DSC-059, DSC-047 · beide Generationen**

Die Status-LED unterscheidet neun Betriebszustände ausschließlich über Farbe und
Blinkrhythmus. Es gibt keine Textausgabe, keinen Ton und keine Blinkfolge, die ohne
Farberkennung unterscheidbar wäre.

Verschärfend: **Dieselbe Farbe bedeutet je nach Schalterstellung etwas anderes.** In der
GPS-Diagnose heißt Rot „Antenne nicht angeschlossen", im Normalbetrieb „SIM-Karte fehlt oder
ist defekt".

Das ist eine Produkteigenschaft, keine Frage der Anleitung. Eine Anleitung kann die
Farbcodierung erklären, aber keine zusätzliche Rückmeldung erzeugen. **Hier ist eine
Produktentscheidung nötig.**

## C2 · Warnungen ohne Signalwort

**DSC-063 · DOC-BMA-SN044, elf geprüfte Seiten**

Auf keiner der elf geprüften Seiten trägt eine Warnung ein Signalwort. Die Sicherheitsstufe
ist ausschließlich grafisch codiert – rote Schrift, Piktogramme –, und keines dieser Mittel hat
eine Entsprechung in der Textebene. Ein ESD-Symbol ohne jeden Begleittext ist an einer Stelle
die alleinige Warnungsträgerin.

Für Screenreader ist die Warnung damit nicht als Warnung erkennbar.

## C3 · Ein funktionsrelevantes Zeichen fehlt in der Textebene

**DSC-058 · DOC-BMA-SN044, Seite 10**

Die Strukturabbildung beginnt im Seitenbild mit einem Sternzeichen vor der Ziffernfolge. Die
Textebene gibt dieses Zeichen nicht wieder. Wer die Seite vorlesen lässt oder den Text
kopiert, erhält einen unvollständigen und damit unbrauchbaren Code.

## C4 · Die englische Fassung zeigt deutsche Gerätetexte

**DSC-072 · DOC-BMA-SN044, englische Seiten 30, 31 und 35**

Alle neun Beispielabbildungen des englischen Abschnitts 2.1 und beide Bildschirmfotos in 2.8
sind die **unveränderten deutschen Bilder** mit deutschen Gerätetexten. Eine englischsprachige
Nutzerin sieht Meldungen, die sie nicht lesen kann – und kann nicht wissen, ob ihr Gerät
tatsächlich so meldet.

## C5 · Die Gerätemeldung heißt je Fassung anders

**DSC-090 · DOC-IBA-SN045, deutsche Seite 22 gegen englische Seite 46**

Bei fehlender Position zitieren beide Fassungen eine Zeichenfolge, die das Gerät ausgibt – aber
zwei verschiedene, die zudem Verschiedenes bedeuten. Gibt das Gerät nur eine feste Zeichenfolge
aus, ist mindestens eines der beiden Zitate im Feld nicht auffindbar.

## C6 · Der Seriennummernbereich in drei Schreibweisen

**DSC-048, DSC-023 · beide Dokumente ab SN-045**

Derselbe Seriennummernbereich erscheint in drei Schreibweisen. Wo die Seriennummer am Gerät
steht und wie sie zu lesen ist, ist in keinem Dokument belegt.

Das ist unmittelbar praxisrelevant: Die Generation zu bestimmen ist der **erste** Schritt jeder
Anleitung – und beide Generationen unterscheiden sich in Kartenformat, PIN-Vorgabe,
Befehlssatz und Geofencing-Radius.

---

# Teil D — Was wir von THITRONIK brauchen

Der Pilot ist an einem Punkt, an dem alles Weitere von Ihren Antworten abhängt. Wir haben
**17 entscheidungsreife Fragen** und **13 Prüfpaket-Dossiers** vorbereitet, die jede Frage mit
Quelle, Gegenquelle oder benannter Lücke belegen.

Die vier dringlichsten:

1. **Welche Befehle akzeptiert das Gerät tatsächlich?** Je Generation, je Sprache, je
   Firmwarestand. Ohne diese Antwort kann die Anleitung keinen einzigen Befehl nennen.
2. **Woran erkennt das Gerät eine berechtigte Zielrufnummer?** Die Regel steht in keinem
   Dokument, ist aber die Zugriffskontrolle des Systems.
3. **Welcher Geofencing-Radius gilt je Generation** – und meldet das Gerät ohne Alarmanlage?
4. **Kann die Status-LED eine nicht visuelle Rückmeldung bekommen?** Das ist eine
   Produktentscheidung, keine Redaktionsfrage.

## Was Sie sofort tun können, ohne auf uns zu warten

Die Befunde in Teil A und B betreffen ausschließlich Ihre Dokumente. Sie lassen sich
korrigieren, unabhängig davon, wie der Pilot weitergeht:

- **A1** (schwedischer Befehl) und **A2** (französische Verneinung) sind einzeilige
  Korrekturen mit unmittelbarer Sicherheitswirkung.
- **B7** (vertauschte Sprachlabels) und **B8** (Supportnummer) sind Satzfehler in der
  Kurzanleitung.
- **B6** (Sprachmischung) betrifft einen einzelnen Textblock der aktuellen Kurzanleitung.
- **A6**, **A7** und **B3** sind Zahlenkorrekturen, sobald der richtige Wert feststeht.

---

# Grenzen dieses Berichts

- Er bewertet **Dokumente**, nicht das Gerät. Wo eine Fassung von einer anderen abweicht,
  sagen wir nicht, welche recht hat.
- Er ist **nicht vollständig**. 65 von 323 Seiten sind vollständig extrahiert. Die acht
  Sprachfassungen außer Deutsch und Englisch sind gesichtet, aber ohne muttersprachlichen
  Review nicht abschließend beurteilbar. Weitere Befunde sind wahrscheinlich.
- Er ist **kein Konformitätsgutachten**. Automatische Prüfungen decken nur einen Teil der
  Kriterien ab; Tests mit assistiven Technologien stehen aus.
- Die vollständige Fassung aller 97 Befunde mit Zitaten und Prüfweg liegt in
  `docs/DISCREPANCIES.md`, die Entscheidungsvorlagen in `docs/review-packets/`, die Fragen in
  `docs/RUECKFRAGEN_THITRONIK.md`.
