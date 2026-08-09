# Rückfragen an THITRONIK

Stand: 2026-08-09 · Grundlage: seitenweise Prüfung aller 323 PDF-Seiten sowie die
Extraktion der vierzehn deutschen Aufgaben aus DOC-IBA-SN045, Seiten 1–25

Dieses Dokument bündelt die Punkte, die der Pilot **nicht selbst entscheiden darf**. Es ist
bewusst kurz gehalten und nach Dringlichkeit sortiert. Jede Position nennt den wörtlichen
Beleg und die Fundstelle; die vollständige Herleitung steht in
[DISCREPANCIES.md](DISCREPANCIES.md).

> **Arbeitsregel ab 2026-08-07:** Dieses Dokument ist die **einzige Sammelstelle** für
> offene Fragen an THITRONIK. Neue Funde blockieren die Arbeit nicht mehr – sie werden hier
> unter „Laufend ergänzt" eingetragen, im Seitenrecord belegt und bei Bedarf in
> `DISCREPANCIES.md` hergeleitet. Der Pilot arbeitet an allem weiter, was ohne Antwort
> möglich ist, und markiert Betroffenes als Entwurf.

Geprüft sind der deutsche, englische, französische, tschechische, dänische, spanische,
italienische, niederländische, polnische und schwedische Sprachteil von
`pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf`
(DOC-IBA-SN045), die vollständige viersprachige Anleitung bis SN-044 sowie beide
Kurzanleitungen. Die PDF-Seitenprüfung ist mit 323 von 323 Seiten vollständig.

**Neu am 2026-08-08/09:** Die Generation **bis SN-044** ist inzwischen vollständig geprüft
(DOC-BMA-SN044, Seiten 1–72) – Deutsch, Englisch, Französisch, Schwedisch und Impressum.
Mehrere der unten stehenden Fragen haben dadurch weitere Belegquellen
bekommen – teils bestätigend, teils mit abweichenden Werten. Diese Ergänzungen stehen als
**Nachtrag bis SN-044** bei der jeweiligen Frage. Sie sind für Sie vermutlich der
aufschlussreichste Teil dieses Dokuments, weil sich daran ablesen lässt, welche Punkte
seit zwei Gerätegenerationen unverändert offen sind und welche erst mit der neueren
Fassung entstanden. Aus dem englischen Teil stammen Frage 16 (Betriebsart D: 8 Minuten
oder 8 Sekunden), Frage 17 (Sprache der Gerätemeldungen) und drei Nachträge zu Frage 1
(schwedischer Befehl im englischen Teil; Handbuch und Gerät widersprechen sich
spiegelbildlich in beiden Sprachen).

---

## 1. Welche SMS-Befehle akzeptiert das Gerät? (blockierend)

Zehn vollständig geprüfte Sprachfassungen dokumentieren **zehn unterschiedliche
Befehlsprofile** für dieselben Funktionen. Die spanische und die polnische Fassung mischen
dabei einen lokalisierten Einzelbefehl mit dem englischen Kapitel- und Gerätesatz;
Italienisch, Niederländisch und Schwedisch verwenden ebenfalls innerhalb ihrer Fassung
verschiedene Geofencing-Wörter.

| Funktion        | Deutsch          | Englisch        | Französisch                   | Tschechisch | Dänisch                   | Spanisch                      | Italienisch                            | Niederländisch            | Polnisch                             | Schwedisch              |
| --------------- | ---------------- | --------------- | ----------------------------- | ----------- | ------------------------- | ----------------------------- | -------------------------------------- | ------------------------- | ------------------------------------ | ----------------------- |
| Geofencing aus  | `fence aus`      | `fence off`     | `desactiver le gardiennage`   | `plot vyp`  | `fence fra`               | `valla apagada` / `fence off` | `recinto spento` / `fence disattivato` | `fence off` / `fence uit` | `ogrodzenie wyłączone` / `fence off` | `fence pa` / `fence av` |
| Statusbericht   | `status`         | `status`        | `rapport d etat`              | `stav`      | `status`                  | `status`                      | `stato`                                | `status`                  | `status`                             | `status`                |
| Ausgang A ein   | `a an`           | `a on`          | `activer la sortie A`         | `a zap`     | `a til`                   | `a on`                        | `a attivo`                             | `a aan`                   | `a on`                               | `a pa`                  |
| Ausgang gepulst | `a impuls`       | `a pulse`       | `sortie A impulsion`          | `a impuls`  | `a impuls`                | `a pulse`                     | `impulso a`                            | `a impuls`                | `a pulse`                            | `a impuls`              |
| Ausgang Zeit    | `a %min%`        | `a %min%`       | `a %min%`                     | `a %min%`   | `a %min%`                 | `a %min%`                     | `a %min%`                              | `a %min%`                 | `a %min%`                            | `a %min%`               |
| Anlernmodus     | `anlernmodus an` | `teach mode on` | `activer le mode d appairage` | `uceni zap` | `Indlaeringsmodus taendt` | `teach mode on`               | `modalita di apprendimento attiva`     | `instelmodus aan`         | `teach mode on`                      | `inlarningslage pa`     |

**Die Frage:** Akzeptiert der Pro-finder alle zehn dokumentierten Befehlsprofile? Hängt die Befehlssprache
von einer Konfiguration ab? Oder sind einzelne Fassungen schlicht falsch?

**Warum das drängt:** Ein nicht akzeptierter Befehl erzeugt keine Fehlermeldung, sondern nur
die Hilfe-SMS. Wer Geofencing vor dem Einstellen in eine Halle abschalten will und dabei den
falschen Befehl verwendet, bekommt genau die Fehlalarme, die er vermeiden wollte.

**Auffällig dabei:**

- `a %min%` lautet in allen zehn Fassungen gleich. Der Impulsbefehl lautet je nach Fassung
  `a impuls`, `a pulse`, `sortie A impulsion` oder `impulso a`. Die Lokalisierung ist also
  nicht einmal in sich stimmig.
- Alle Befehle und alle Geräte-SMS sind durchgängig **ohne Diakritika** gesetzt
  („desactiver", „uceni zap", „Napajeni mene nez 11.2 V"), während der umgebende Fließtext
  Akzente verwendet. Das spricht dafür, dass das Gerät ASCII erwartet und ausgibt.
- Die tschechische Fassung setzt als einzige eine englische Glosse hinter den Befehl:
  „plot vyp" (plot off). Sind damit zwei gültige Formen gemeint?

**Zusatzfrage (Groß-/Kleinschreibung):** Die automatische Hilfe-SMS nennt die Befehle
großgeschrieben (`STATUS`, `POS`, `STAV`), die Kapitel dagegen klein (`status`, `stav`).
Zudem heißt der Positionsbefehl in der Hilfe-SMS `POS`, im zugehörigen Kapitel aber
`position` beziehungsweise `poloha` – zwei verschiedene Wörter. Unterscheidet das Gerät
Groß- und Kleinschreibung? Sind beide Formen gültig?

**Dänischer Nachtrag:** Die Geräte-Hilfe-SMS nennt `AKTIVERET`, `DEAKTIVERET`, `STATUS`
und `POS`. Das zugehörige Kapitel 5.1 trägt zwar „via SMS" im Titel, beschreibt aber nur
einen **Anruf** und erklärt `AKTIVERET`/`DEAKTIVERET` nirgends. Die Kapitelbefehle lauten
unter anderem `fence til`/`fence fra`, `a til`/`a fra` und
`Indlaeringsmodus taendt`/`slukket`. Damit ist auch der fünfte Satz weder aus der Hilfe-SMS
allein noch aus dem Kapitel allein vollständig ableitbar.

**Spanischer Nachtrag:** Die GPS-Diagnose auf Seite 134 nennt zum Ausschalten
`valla apagada`. Kapitel 5 wechselt dagegen zu den englischen Befehlen `fence on`/
`fence off`, `a on`/`a off` und `teach mode on`/`off`; auch die vollständige Hilfe-SMS
bleibt englisch (`Invalid command! Possible: ARM, DISARM, STATUS, POS.`). Im spanischen
Kapitel stehen zusätzlich `status` und `position` statt `STATUS` und `POS`. Das spanische
Profil widerspricht sich damit innerhalb derselben Fassung bei Sprache und Zeichenfolge.

**Italienischer und niederländischer Nachtrag:** Italienisch nennt in der GPS-Diagnose
`recinto spento`, in Kapitel 5 aber `fence attivo`/`fence disattivato`; Niederländisch
wechselt von `fence off` zu `fence aan`/`fence uit`. Der niederländische Positionsbefehl
ist sichtbar nur als `positi` gesetzt, während die Hilfe-SMS `POS` nennt. Damit sind auch
das siebte und achte Profil intern widersprüchlich.

**Polnischer Nachtrag:** Die GPS-Diagnose auf Seite 209 nennt zum Ausschalten
`ogrodzenie wyłączone`, Kapitel 5 auf Seite 220 dagegen `fence off`. Die übrigen
Kapitelbefehle bleiben englisch (`status`, `position`, `a on`/`off`/`pulse`,
`teach mode on`/`off`), während die Hilfe-SMS nur `ARM`, `DISARM`, `STATUS`, `POS` nennt.
Damit ist auch das neunte Profil intern gemischt und unvollständig erklärt.

**Schwedischer Nachtrag:** Die Diagnose auf Seite 235 empfiehlt, Geofencing zu
deaktivieren, und nennt dafür `fence pa`. Abschnitt 5.2 auf Seite 243 definiert genau
`fence pa` als Einschaltbefehl und `fence av` als Ausschaltbefehl. Die schwedische
Hilfe-SMS nennt zusätzlich `SKARP`, `OSKARP`, `STATUS`, `POS`, während die Kapitel
`status` und `position` verwenden. Damit ist auch das zehnte Profil intern gemischt und
enthält einen unmittelbaren Ein-/Aus-Widerspruch (DSC-085).

**Nachtrag bis SN-044 – das Gerät widerspricht seinem eigenen Handbuch.** Bisher stützte
sich diese Frage auf den Vergleich **zwischen** zehn Sprachfassungen. Im Handbuch der
älteren Generation widersprechen sich Handbuch und Gerät **innerhalb einer Sprache und
eines Dokuments**. Die automatische Hilfe-SMS ist dort als Abbildung wiedergegeben und
nennt wörtlich:

`STATUS, SCHARF, UNSCHARF, ALARM AUS, A ON, A OFF, B ON, B OFF, A PULSE, B PULSE, FENCE ON, FENCE OFF, GPS OFF, GPS ON`

| Funktion        | Handbuch bis SN-044                     | Hilfe-SMS des Geräts | Handbuch ab SN-045 |
| --------------- | --------------------------------------- | -------------------- | ------------------ |
| Ausgang A ein   | `A an` (S. 16)                          | `A ON`               | `a an`             |
| Ausgang A aus   | `A aus` (S. 16)                         | `A OFF`              | –                  |
| Ausgang gepulst | `A impuls` (S. 16)                      | `A PULSE`            | `a impuls`         |
| Ausgang Zeit    | `A XXX` (S. 16)                         | **fehlt**            | `a %min%`          |
| Geofencing ein  | `Fence an` (S. 15)                      | `FENCE ON`           | –                  |
| Geofencing aus  | `fence aus` (S. 7), `Fence aus` (S. 15) | `FENCE OFF`          | `fence aus`        |
| Statusbericht   | `Status` (S. 15)                        | `STATUS`             | `status`           |
| Position        | `Pos` (S. 15), `(POS)` (S. 12)          | **fehlt**            | `position` / `POS` |
| Sirene/Blinker  | `alarm` (S. 14)                         | nur `ALARM AUS`      | –                  |
| GPS ein/aus     | im Handbuch nicht erwähnt               | `GPS ON`, `GPS OFF`  | –                  |

**Die zusätzlichen Fragen:** Welche Form akzeptiert das Gerät bis SN-044 – die deutsche des
Handbuchs oder die englische seiner eigenen Hilfe-SMS? Gibt es einen Positionsbefehl und
einen Befehl für eine frei wählbare Einschaltdauer, und warum fehlen sie in der Hilfe-SMS?
Was bewirken `GPS ON` und `GPS OFF`, die im Handbuch nirgends vorkommen? Und: **ist die
Hilfe-SMS die maßgebliche Auskunft?** Falls ja, wäre sie die verlässlichste Quelle für die
Befehlsliste beider Generationen – und das Handbuch wäre an mehreren Stellen falsch.

**Zweiter Nachtrag bis SN-044 – der englische Teil nennt den schwedischen Befehl.** Die
englische Seite 25 (intern „Page 5") weist zum Abschalten des Geofencings wörtlich
`fence av` an – das ist weder das englische `Fence off` des eigenen Abschnitts 2.4 noch das
`FENCE OFF` der Geräte-Hilfe-SMS, sondern der Befehl des **schwedischen** Teils desselben
Dokuments („av" = schwedisch „aus"). Zusätzlich zeigt die Textebene: Auch bis SN-044 hat
jede Sprachfassung einen eigenen Befehlssatz (DE `Fence an`/`fence aus`, EN
`Fence on`/`Fence off`, SV `fence pa`/`fence av`, FR `gardiennage active`/`gardiennage
desactive`) – und die französischen Befehle unterscheiden sich von denen der SN-045-Fassung
(`activer/desactiver le gardiennage`). **Derselbe Befehl hat sich also innerhalb einer
Sprache zwischen den Generationen geändert.** Welche Befehle akzeptiert ein Gerät bis
SN-044 in welcher Sprache tatsächlich – und ist `fence av` auf der englischen Seite ein
Druckfehler?

**Dritter Nachtrag bis SN-044 – der Widerspruch Handbuch gegen Gerät ist spiegelbildlich.**
Der inzwischen vollständig geprüfte englische Teil lehrt die Schaltbefehle `arm` und
`disarm` (Seite 32) – auf der gegenüberliegenden Seite 31 ist dieselbe Hilfe-SMS des
Geräts abgebildet wie im deutschen Teil, und sie führt stattdessen `SCHARF` und
`UNSCHARF`. Umgekehrt decken sich die englischen **Ausgangsbefehle** (`A on`, `A off`,
`A pulse`) mit der Geräteliste, die deutschen (`A an`, `A aus`, `A impuls`) nicht. Jede
Sprachfassung stimmt also mit einem anderen Teil der Geräteliste überein und widerspricht
dem anderen. Zusätzlich schreibt der englische Teil den Positionsbefehl in zwei Formen
(`POS` auf Seite 30, `Pos` auf Seite 33) – wie der deutsche.

**Abschließender Nachtrag bis SN-044 – Schwedisch komplett und erster
Generationenvergleich.** Der schwedische Satz lautet `skarp`, `oskarp`, `larm`,
`urkopplad`, `fence pa`, `fence av`, `Status`, `Pos`, `A pa`, `A av`, `A impuls`,
`A XXX`. Er widerspricht der deutschen Geräteliste ebenfalls. Innerhalb derselben Seite
stehen zudem `oskarp` und `urkopplad` für das Beenden des Alarmzustands nebeneinander.
`fence pa` und die Ausgangsbefehle sind bei 500 dpi gesichert. Die erstmals vollständige
Gegenüberstellung aller vier Sprachteile bis SN-044, der Hilfe-SMS des Geräts und der zehn
vollständig geprüften Sprachteile ab SN-045 steht als
[Synthese-Auswertung 1](DISCREPANCIES.md#synthese-befehle). Ihr Ergebnis: Es existiert
weder sprach- noch generationsübergreifend eine belastbare Masterliste; selbst die
Hilfe-SMS ist bis SN-044 ein deutsch-englischer Mischsatz mit fehlenden und unerklärten
Befehlen.

_Belege: DSC-013, DSC-014, DSC-026, DSC-033, DSC-054, DSC-067, DSC-085_

---

## 2. Welcher Stromaufnahmewert gilt? (blockierend für technische Daten)

| Fassung      | Stromaufnahme im Normalbetrieb |
| ------------ | ------------------------------ |
| Deutsch      | ca. 16–21 mA                   |
| Französisch  | env. 16–21 mA                  |
| Tschechisch  | přibližně 16–21 mA             |
| **Englisch** | **approx. 21 mA**              |

Drei Fassungen nennen den Bereich, die englische nur den oberen Wert. Alle übrigen Werte der
Tabelle (9–30 V, ca. 37 mA Netzsuche, 2 × 12 V/500 mA, −10 bis +80 °C, Bänder, GPS/QZSS,
zehn Zielrufnummern, Nano-SIM) stimmen überein.

**Die Frage:** Gilt 16–21 mA? Dann ist die englische Fassung zu korrigieren.

_Beleg: DSC-020_

---

## 3. Die französische Supportnummer ist unbrauchbar

| Fassung                        | Angegebene Rufnummer              |
| ------------------------------ | --------------------------------- |
| Deutsch, Englisch, Tschechisch | +49 4351 76744-112                |
| **Französisch**                | **+49 4351800 902 104 76744-112** |

In die französische Nummer ist offenbar eine zweite Rufnummer hineingeraten. In dieser Form
ist sie nicht wählbar. Nur die französische Fassung bezeichnet den Support zusätzlich als
kostenfrei („gratuitement").

**Die Frage:** Bitte die korrekte Nummer bestätigen. Sie soll auf die barrierefreie
Setup-Karte – ein unbrauchbarer Supportkanal wäre dort besonders folgenreich.

_Beleg: DSC-032_

---

## 4. Wo steht die Seriennummer am Gerät?

Alle vier geprüften Fassungen sagen an derselben Stelle nur: „auf dem Gerät selbst oder in
der THITRONIK® App". Weder eine Position am Gerät noch eine Leseregel wird genannt.

**Die Frage:** Wo genau steht die Nummer, und wie ist sie zu lesen? Woran erkennt eine
Nutzerin, ob ihr Gerät zu „bis SN-044" oder „ab SN-045" gehört?

**Warum das drängt:** Die geführte Versionsauswahl der digitalen Anleitung steht und fällt
damit. Ohne bestätigte Leseregel darf die Startseite keine Ziffernregel behaupten – der
Pilot zeigt deshalb bewusst keine.

_Beleg: DSC-023, ergänzt durch DSC-048_

**Nachtrag aus der deutschen Master-Extraktion:** Der Bereich wird in drei Schreibweisen
angegeben („ab Seriennr. -045", „as of serial no. -045", „SN 0699 - 045 +"), das
mehrsprachige Gesamtdeckblatt nennt gar keinen, und die Dokumente der alten Generation
tragen überhaupt keine Seriennummernkennzeichnung. Das Feld „Serial number:" auf der
Kurzanleitung – der einzige belegte Notizort – ist auch im deutschen Lieferumfang nur
englisch beschriftet.

---

## 5. Welche SIM-Empfehlung gilt?

| Fassung               | Empfehlung                                    |
| --------------------- | --------------------------------------------- |
| Deutsch               | t-mobile / Vodafone                           |
| Französisch           | namentlich die Firma **DOMOTEC**              |
| Englisch, Tschechisch | allgemein „M2M-Karte" mit Verweis auf die FAQ |

Drei Varianten in vier Fassungen; nur die französische nennt einen konkreten Drittanbieter.
Zusätzlich weicht die Liste der abzuschaltenden Zusatzfunktionen ab.

**Die Frage:** Welche Empfehlung ist verbindlich? Ist die Nennung von DOMOTEC beabsichtigt?

_Beleg: DSC-027_

---

## 6. Zwei sinnentstellte Stellen, die einen Sprachreview brauchen

**Französisch, Spannungswarnung:** „Avertissement de tension (**pas non applicable** en mode
de fonctionnement B" – eine doppelte Verneinung. Deutsch und Englisch sagen eindeutig „nicht
in Betriebsart B". Ob die Warnung dort gilt, ist aus der französischen Fassung nicht
ableitbar. _(DSC-034)_

**Tschechisch, Geofencing-Hinweis:** „Když je WiPro III **odjištěn**, je geofencing
automaticky aktivován … Geofencing se proto automaticky deaktivuje, když je zařízení WiPro III
**odjištěno**." Beide Sätze nennen denselben Zustand – einmal für die Aktivierung, einmal für
die Deaktivierung. Die anderen Fassungen nennen dort gegensätzliche Zustände. _(DSC-038)_

**Tschechisch, LED-Normalbetrieb:** Zustand 8 lautet „Přihlášen (příjem)" (eingebucht,
Empfang – zutreffend), Zustand 9 dagegen „**rezervováno (recepce)**" – wörtlich „reserviert
(Rezeption)". Beide meinen dieselbe Lage. Betroffen ist ausgerechnet der Normalbetrieb, und
die Status-LED ist der einzige Rückkanal des Geräts ohne SMS. _(DSC-039)_

---

## 7. Ein Fehler steht schon im deutschen Original

Abschnitt 1.3 verweist für die Ausgangssteuerung auf Kapitel **5.4** – das ist die
Positionsabfrage; richtig wäre 5.5. Der Fehler steht bereits im deutschen Text und wurde in
alle vier geprüften Fassungen korrekt mitübersetzt. Auf der jeweils folgenden Seite verweist
Abschnitt 1.4 dagegen richtig auf 5.5.

**Warum das hier steht:** Es zeigt, dass der deutsche Text nicht als geprüfte Quelle
behandelt werden kann. Der Pilot führt deshalb auch für Deutsch einen eigenen technischen
Review – nicht nur für die Übersetzungen. Dasselbe gilt für den Widerspruch „ALARM" gegenüber
„AAlarm" im selben Absatz, der in drei Fassungen mitübersetzt statt bemerkt wurde.

_Belege: DSC-028, DSC-016_

---

## 8. Zwei Punkte, die alle Sprachfassungen betreffen (Vorlagenfehler)

Diese Fehler stammen aus der Layoutvorlage und müssen **einmal zentral** behoben werden, nicht
je Sprache:

- Die Bildbeschriftung der optionalen Antenne ist in **allen** geprüften Fassungen deutsch
  („GPS-Antenne (Optional)"), während die Legende daneben übersetzt ist. Die eingebettete
  Grafik wurde nie lokalisiert; belegt sind DE, EN, FR, CS, DA, ES, IT, NL, PL und SV.
  _(DSC-022)_
- In der Anschlussabbildung markiert ein **rotes X** einen Anschluss zwischen B und C, ohne
  Legendeneintrag. In allen zehn vollständig geprüften Fassungen unerklärt.
  _(Seitenrecords zu S. 8, 32, 56, 83, 107, 130, 156, 180, 205, 231)_

Dazu kommen zerrissene Wörter in den Kopfzellen der Betriebsartentabelle und eine
Wortdopplung „via SMS via SMS", beide ebenfalls sprachübergreifend.

---

---

## 9. Meldet der Pro-finder einen Diebstahl auch ohne WiPro III? (blockierend für Geofencing)

Die Quelle sagt an zwei Stellen Unterschiedliches. Seite 19 knüpft die Diebstahlmeldung an
eine „aktivierte WiPro III (safe.lock)". Seite 21 beschreibt Geofencing dagegen ohne jeden
Bezug darauf – geschaltet über Pin 3 oder per SMS.

**Die Fragen:**

1. Sendet ein Pro-finder **ohne** angeschlossene WiPro III (safe.lock) eine
   Diebstahlmeldung, wenn der 900-Meter-Bereich verlassen wird?
2. Was gilt vor: die Schaltung über Pin 3 in den Stellungen 8 und B oder die automatische
   Kopplung an den Scharf-/Unscharfzustand der WiPro III?
3. Ist Geofencing in den Schalterstellungen C bis F verfügbar? Abschnitt 5.2 sagt „in
   allen anderen Schalterstellungen", die Betriebsartentabelle trifft für C bis F wegen
   verbundener Zellen keine Aussage.

**Warum das drängt:** Davon hängt ab, ob eine Diebstahlmeldung überhaupt erfolgt. Die
Aufgabe „Geofencing" der Webanleitung kann die Voraussetzungen bis dahin nicht
abschließend nennen.

**Nachtrag bis SN-044 – die ältere Quelle beantwortet Frage 2.** Abschnitt 2.4 des
Handbuchs bis SN-044 regelt genau das, was die neuere Fassung offen lässt:

> „Geofencing kann in Schalterstellung 8 und B über Pin 3 ein- und ausgeschaltet werden. In
> allen anderen Schalterstellungen kann Geofencing per SMS ein- und ausgeschaltet werden."

> „Ist WiPro geschärft, ist Geofencing automatisch aktiviert und muss nicht per SMS
> eingeschaltet werden."

**Die zusätzliche Frage:** Gilt diese Regel ab SN-045 unverändert fort? Wir übertragen sie
**nicht** von selbst – der Projektauftrag verbietet, die Generationen zu vermischen. Eine
Bestätigung würde Frage 2 unmittelbar schließen und BLK-007 auflösen.

Ungeklärt bleibt sie auch bis SN-044 in einem Punkt: Seite 7 empfiehlt, Geofencing beim
Abstellen in Gebäuden abzuschalten, ohne zu erwähnen, dass damit die Diebstahlmeldung
entfällt. Steht das Fahrzeug dabei geschärft, widerspricht das der automatischen
Aktivierung. Welcher Zustand setzt sich durch?

_Belege: DSC-042, DSC-062_

---

## 10. Woran erkennt das Gerät eine autorisierte Zielrufnummer? (sicherheitskritisch)

In den Beispielen der Programmier-SMS unterscheiden sich autorisierte und nicht
autorisierte Zielrufnummern erkennbar nur durch das Zeichen vor der Nummer. Der Fließtext
benennt diese Regel an keiner Stelle des deutschen Teils; sie ist ausschließlich aus dem
Vergleich der Beispielzeilen erschließbar.

**Die Frage:** Welches Zeichen bewirkt welche Berechtigung, und was geschieht bei einer
fehlerhaften Eingabe – wird die SMS abgewiesen oder die Nummer mit falscher Berechtigung
gespeichert?

**Warum das drängt:** Ein falsches Zeichen kippt die Steuerberechtigung einer Rufnummer.
Eine Anleitung, die diese Regel nicht nennen darf, weil sie unbelegt ist, kann Nutzende
in genau den Fehler laufen lassen, den sie verhindern soll.

**Nachtrag bis SN-044 – derselbe Mangel, zwei Generationen lang.** Das Handbuch bis SN-044
beschreibt auf Seite 9 vier Arten von Zielrufnummern und was jede darf, sagt aber ebenfalls
nicht, wie eine Nummer in eine Stufe gelangt. Die Kennzeichnung ist auch dort nur aus den
Tabellenbeispielen der Folgeseite zu erschließen: autorisierte Nummern werden mit einem
**Pluszeichen** angereiht, die nicht autorisierte im dritten Beispiel mit einem
**Minuszeichen**. Kein Satz spricht das aus.

Zusätzlich widerspricht sich die ältere Quelle beim Smartphone-Kennzeichen: Seite 9
schreibt ein kleines **s**, dessen Bedeutung allein durch Fettschrift getragen wird, Seite
10 durchgehend ein großes **S**.

**Die zusätzliche Frage:** Unterscheidet das Gerät Groß- und Kleinschreibung dieses
Kennzeichens? Und gilt die Plus-/Minus-Regel in beiden Generationen gleich?

_Belege: DSC-044, DSC-056_

---

## 11. Welche Felder enthält der Statusbericht wirklich?

Einleitung und Beispiele von Kapitel 4 decken sich nicht:

| Laut Einleitung           | In den neun Beispiel-SMS                       |
| ------------------------- | ---------------------------------------------- |
| Feld „GPS:"               | kommt in keiner Beispiel-SMS vor               |
| Feld „Pos:"               | Position steht überall ohne diesen Bezeichner  |
| Temperatur nahe dem Gerät | keine Temperaturzeile vorhanden                |
| U2 bis U5                 | zusätzlich „U1:13,53 V", im Text nicht erwähnt |
| –                         | „WiPro ON" und „Fence ON", nirgends erklärt    |

**Die Fragen:** Welche Felder enthält ein Statusbericht in welcher Betriebsart? Wie lauten
die Feldbezeichner genau? Und wie schreibt das Gerät den **ausgeschalteten**
Geofencing-Zustand – „Fence ON" ist die einzige belegte Rückmeldung, das Gegenstück zeigt
keine geprüfte Seite.

**Warum das drängt:** Die Aufgabe „Meldungen" soll Nutzenden erklären, was in einer SMS
steht. Solange die Quelle sich selbst widerspricht, kann sie das nur mit Vorbehalt.

**Nachtrag bis SN-044 – gleiche Lücke, andere Feldnamen.** Auch im Handbuch bis SN-044
decken sich Erklärung und Beispiele nicht. Abschnitt 2.1 erklärt fünf Angaben; die neun
Beispiel-SMS zeigen zusätzlich „GPS Fencing aktiv", „U1:" bis „U5:", „A off"/„B on" und
„Empfang: -99dBm" – keines davon erklärt das Kapitel. Umgekehrt fehlt die im Kapitel
genannte Temperatur in allen neun Beispielen, und das Guthabenfeld heißt auf einer Seite
„Aktuelles Guthaben", auf der nächsten „Kontostand" und im Kapitel wieder „Kontostand".

Erschwerend liegen **alle neun Beispiel-SMS ausschließlich als Bild vor** und fehlen in der
Textebene vollständig – obwohl dieses Dokument sonst eine durchgehende Textebene hat.

**Die zusätzliche Frage:** Gibt es eine maßgebliche Feldliste des Geräts je Betriebsart –
für beide Generationen? Eine solche Liste würde diese Frage für beide Fassungen zugleich
schließen.

_Belege: DSC-045, DSC-060_

---

## 12. Die GPS-Diagnose ist am Gerät nicht barrierefrei durchführbar

Die GPS-Diagnose in Schalterstellung F unterscheidet drei Zustände über die Status-LED:
Rot und Grün leuchten **beide dauerhaft**, nur Gelb blinkt. Zwei der drei Zustände sind
damit ausschließlich über die Farbe unterscheidbar. Erschwerend bedeutet dieselbe Farbe in
Stellung F etwas anderes als im Normalbetrieb (Rot: GPS-Antenne nicht angeschlossen
gegenüber SIM-Karte fehlt oder ist defekt).

**Die Fragen:** Gibt es ein farbunabhängiges Merkmal – eine Blinkfrequenz, eine Folge, eine
SMS-Rückmeldung –, mit dem sich die drei Diagnosezustände unterscheiden lassen? Falls
nicht: ist eine textliche Rückmeldung vorgesehen?

**Warum das drängt:** Das ist die einzige bisher gefundene Stelle, an der die
Barrierefreiheit **am Gerät** endet und nicht am Dokument. Die HTML-Anleitung kann sie
beschreiben, aber nicht auflösen. Sie wird in der Aufgabe „Fehlerbehebung" ausdrücklich
als Grenze benannt.

**Nachtrag bis SN-044 – die Barriere ist erheblich größer als bisher angenommen.** In der
älteren Generation betrifft sie nicht nur die dreistufige GPS-Diagnose, sondern die
**vollständige Zustandsanzeige im Normalbetrieb**. Abschnitt 1.10 führt **neun** Zustände,
die in zwei Gruppen gleicher Blinkart zerfallen; innerhalb jeder Gruppe ist die Farbe das
einzige unterscheidende Merkmal:

| Blinkend                                       | Dauerlicht      |
| ---------------------------------------------- | --------------- |
| rot/gelb, rot, grün, rot/grün, gelb, gelb/grün | rot, grün, gelb |

Wer Rot, Gelb und Grün nicht sicher unterscheidet, kann neun Gerätezustände auf zwei
reduzieren und weder „kein GSM-Empfang" von „alles in Ordnung" noch „SIM-Karte defekt" von
„Gerät versendet eine SMS" trennen. Drei Zustände sind Zweifarbwechsel, deren Reihenfolge
und Frequenz die Quelle nicht nennt. Auch der Löschvorgang der Zielrufnummern hängt an einer
farbcodierten Abbruchbedingung („warten Sie bis die Status LED gelb/grün blinkt") und ist
damit ohne Farbwahrnehmung nicht sicher durchführbar.

**Die zusätzlichen Fragen:** Gibt es für die neun Zustände ein farbunabhängiges Merkmal –
unterschiedliche Blinkfrequenzen, Blinkfolgen oder eine abrufbare Textrückmeldung? Lässt
sich der Gerätezustand alternativ per SMS abfragen? Falls nicht, ist das der zentrale
Befund des gesamten Pilots: die Anleitung lässt sich barrierefrei machen, das Gerät nicht.

_Belege: DSC-047, DSC-059_

---

## 13. Ersetzt die THITRONIK App wirklich die Kapitel 2.5 bis 2.8?

Abschnitt 2.4 erklärt bei Nutzung der App die Schritte der Kapitel 2.5 bis 2.8 für
entbehrlich. Kapitel 2.5 ist aber der Eintrag der Modulnummer im Adressbuch des
Mobiltelefons, und seine Fortsetzung verlangt dafür ausdrücklich die Ländervorwahl, damit
das Gerät aus dem Ausland erreichbar bleibt. Das ist eine Handlung am Telefon, die eine
App nicht übernimmt.

**Die Frage:** Welche Schritte entfallen bei Nutzung der App tatsächlich – und bleibt der
Adressbucheintrag mit Ländervorwahl nötig?

_Beleg: DSC-043_

---

## 14. Welcher Geofencing-Radius gilt je Generation?

Die beiden Gerätegenerationen nennen verschiedene Werte für dieselbe Auslösebedingung –
und seit dem 2026-08-09 weicht zusätzlich eine **Sprachfassung** ab:

| Generation                   | Angabe in der Quelle      | Fundstelle                            |
| ---------------------------- | ------------------------- | ------------------------------------- |
| bis SN-044 (DE/EN/SV)        | „ca.1000m" und „ca. 1 km" | DOC-BMA-SN044, S. 12/15, 30/33, 64/67 |
| bis SN-044 (**Französisch**) | **„1500 m" und „1,5 km"** | DOC-BMA-SN044, S. 47 und 50           |
| ab SN-045                    | rund 900 m                | DOC-IBA-SN045                         |

**Die Fragen:** Ist der Unterschied zwischen den Generationen eine bewusste Änderung oder
ein Fehler? Welcher Wert gilt jeweils, und bezieht er sich auf einen Radius um den Standort
beim Schärfen oder um den letzten bekannten Standort? Und: Woher stammen die französischen
1500 m – Tippfehler, Fehlübersetzung oder tatsächlich anderer Auslegungswert? Schwedisch
bestätigt Deutsch und Englisch zweimal; Französisch steht damit eins zu drei allein. Die
Differenz von 50 Prozent innerhalb **eines** Handbuchs ist mit einer Rundung nicht zu
erklären.

**Warum das drängt:** Der Radius entscheidet, wann eine Diebstahlmeldung ausgelöst wird. Der
Projektauftrag verbietet, die Generationen zu vermischen – wir übernehmen deshalb keinen der
Werte in den jeweils anderen Zweig der Anleitung und nennen sie bis zur Klärung nur als
Entwurf.

_Belege: DSC-061, DSC-078_

---

## 15. Gilt die Vorgabe, die SIM-PIN auf 0000 zu ändern, unverändert? (sicherheitskritisch)

Das Handbuch bis SN-044 verlangt auf Seite 8 zweierlei zugleich: die PIN der eingesetzten
Karte ist **vor dem Einsetzen auf 0000 zu ändern**, und die **PIN-Abfrage muss aktiviert
bleiben**. Die LED-Liste auf Seite 11 bestätigt, dass das Gerät genau diesen Wert erwartet
(„Blinkt rot/grün: PIN ist nicht 0000").

**Die Fragen:** Gilt diese Vorgabe für aktuelle Geräte beider Generationen unverändert?
Akzeptiert das Gerät alternativ eine frei gewählte PIN oder eine deaktivierte PIN-Abfrage?
Und ist die Kombination – feste, herstellerseitig vorgegebene Geheimzahl bei zugleich
aktivierter Abfrage – so beabsichtigt?

**Warum das drängt:** Eine öffentliche, barrierefreie Anleitung, die zum Setzen einer
allgemein bekannten PIN auffordert, muss diesen Schritt begründen und seine Tragweite
benennen können. Solange die Vorgabe nicht bestätigt ist, nennt die Webanleitung sie nicht.
Der Punkt gehört zusätzlich in den sicherheitstechnischen Review.

**Nachtrag 2026-08-08:** Der englische Teil desselben Handbuchs (Seite 26, intern „Page 6")
wiederholt das Vorgabenpaar wortgleich („must be changed to 0000" und „The PIN query
function must be activated"). Ein einzelner deutscher Satz- oder Übersetzungsfehler ist
damit ausgeschlossen – das Paar ist Vorlage. Die Frage, ob es technisch so gemeint ist,
bleibt unverändert offen.

_Beleg: Seitenrecords DOC-BMA-SN044, S. 8, 11 und 26_

---

## 16. Betriebsart D: Statusberichte alle 8 Minuten oder alle 8 Sekunden? (sicherheitskritisch)

Die Betriebsartentabelle des Handbuchs bis SN-044 nennt für die Schalterstellung D das
Intervall der automatischen Statusberichte **deutsch als „8 Minuten"** (Seite 5, intern
„Seite 3") und **englisch als „8 seconds"** (Seite 23, intern „Page 3") – derselbe Wert,
Faktor 60 dazwischen. Beide Zellen sind hochauflösend nachgerendert und zeichengenau
gesichert. Die Nachbarzeile C stimmt in beiden Fassungen überein (90 Sekunden).

**Die Frage:** Welches Intervall gilt in Betriebsart D?

**Warum das drängt:** C und D sind die Ortungsmodi mit dem dichtesten Meldeintervall. Wer
nach der falschen Fassung plant, erhält im Ernstfall sechzigmal seltener eine Position als
erwartet – oder produziert sechzigmal mehr kostenpflichtige SMS als kalkuliert. Solange der
Wert nicht bestätigt ist, nennt der Pilot für die Betriebsart D kein Intervall.

**Nachtrag 2026-08-09:** Die französische Tabelle (Seite 40) nennt ebenfalls **8 minutes**,
die schwedische (Seite 57) **8 minuter**. Endstand **drei zu eins** gegen die englische
Fassung – dasselbe Muster wie bei der Stromaufnahme (Frage 2), wo ebenfalls die englische
Fassung allein abweicht. Vermutlich ist „8 Minuten" richtig; bestätigen können nur Sie.

_Beleg: DSC-066; Seitenrecords DOC-BMA-SN044, S. 5, 23 und 40_

---

## 17. In welcher Sprache meldet ein Pro-finder bis SN-044?

Der englische, französische und schwedische Teil des Handbuchs bis SN-044 verwenden für
sämtliche Beispiel-SMS und Bildschirmfotos **unverändert die deutschen Abbildungen**:
Die gezeigten Gerätemeldungen
lauten „Diebstahl", „Spannung unter 11,2V", „Hilfe erbeten", „Einbruch Tuer/Fenster",
„Gas" und „manueller Alarm", und die abgebildete Hilfe-SMS nennt `SCHARF` und `UNSCHARF` –
alles in einem englischen Handbuch, das dieselben Meldungen nur als „Theft alert",
„Voltage warning" usw. beschreibt.

**Die Fragen:** Gibt ein Gerät bis SN-044 seine Meldungen ausschließlich deutsch aus, oder
werden sie lokalisiert? Falls sie deutsch kommen: An welchen Stichwörtern soll ein
englischsprachiger Nutzer eine eingehende Meldung erkennen? Und hängt die Sprache der
akzeptierten **Befehle** (Frage 1) mit der Sprache der ausgegebenen **Meldungen**
zusammen?

**Warum das drängt:** Für die Generation ab SN-045 zeigt der tschechische Teil lokalisierte
Geräte-SMS („Neplatny povel!"). Für die ältere Generation legt die Bildwahl das Gegenteil
nahe. Eine barrierefreie englische Anleitung müsste die tatsächlichen Erkennungsstichwörter
nennen – welche das sind, lässt sich aus der Quelle nicht entscheiden.

_Beleg: DSC-072; Seitenrecords DOC-BMA-SN044, S. 30/31/35, 47/48/52 und 64/65/69_

---

## Was der Pilot ohne diese Antworten nicht tun kann

- **Keinen SMS-Befehl veröffentlichen** – weder im deutschen Master noch in einer Übersetzung.
- **Keinen sprachübergreifenden Master bilden**, solange technische Werte und Empfehlungen
  zwischen den Fassungen abweichen.
- **Keine Seriennummern-Leseregel auf der Startseite anzeigen.**
- **Keine Supportdaten auf die Setup-Karte drucken.**

Bis dahin bleiben die betroffenen Inhalte als Entwurf markiert oder verborgen – so, wie der
Projektauftrag es verlangt.

---

## Laufend ergänzt

Hier sammeln sich Funde aus den noch ausstehenden Sprachteilen und Dokumenten, ohne dass sie
die Arbeit aufhalten. Sie sind gegenüber den acht Punkten oben nachrangig, aber belegt.

| Fund                                                                                                                                          | Beleg                           |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Kabelbezeichnung uneinheitlich: „Verbindungskabel WiPro III" (Deutsch, Tschechisch) gegenüber „câble de connexion RJ10" (Französisch)         | DSC-036, S. 11, 59, 86          |
| Produktname im tschechischen Teil mehrfach verstümmelt („hledáček Pro", „vyhledávač Pro")                                                     | DSC-036, S. 86, 89, 93, 96      |
| Vier tschechische Substantive für dasselbe Gerät; drei Bezeichnungen für den Anlernmodus                                                      | DSC-037; S. 99 (Seitenrecord)   |
| Links in IT, NL, CS und ES verweisen auf `/en/` statt auf die jeweilige Sprache                                                               | S. 100, 149, 173, 198; 6.3/6.4  |
| Französische, spanische, niederländische und polnische interne Seitenzählung ist jeweils um eins zu kurz                                      | DSC-021                         |
| Rotes X in der Anschlussabbildung – in allen zehn vollständig geprüften Sprachfassungen ohne Legendeneintrag                                  | DSC-022                         |
| Zwei falsche Querverweise des **deutschen** Originals (5.4 statt 5.5; 1.5.2 statt 1.5.3) stehen in allen zehn geprüften Sprachen              | DSC-040                         |
| Abschnitt 5.5 trägt im Englischen und Dänischen wortgleich den Titel von 5.1, behandelt aber die Ausgänge                                     | DSC-015, S. 46, 102, 110, 120   |
| Verweis auf 5.1 für Blinker und Sirene führt ins Leere; 5.1 beschreibt nur einen Anruf, obwohl die Überschrift SMS ankündigt                  | DSC-041                         |
| „Hauptkabelbaum" wird nirgends erklärt – der gesamte Löschvorgang der Zielrufnummern hängt daran                                              | DSC-050, S. 17                  |
| Dezimaltrennzeichen der Gerätemeldungen uneinheitlich (11.2 V mit Punkt, 13,53 V mit Komma) – in allen zehn geprüften Sprachen                | DSC-046                         |
| Revisionsstände der Kurzanleitung widersprechen sich (Rev. 1.3.2 gegenüber Rev. 1.0 auf dem abgebildeten Umschlag)                            | DSC-049                         |
| Google-Play-Abzeichen so grob gerastert, dass es auch bei 900 dpi unlesbar bleibt                                                             | DSC-051, S. 14                  |
| Vier Fragen zu den Ausgängen, die die Quelle gar nicht beantwortet (Empfänger, Grenzwerte, Abbruch, Zustand nach Neustart)                    | DSC-052, S. 23                  |
| Sprachmarke des dänischen Teils ist eine zusammengesetzte Flagge (links norwegisch, rechts dänisch, plus Diagonalstrich)                      | DSC-053, S. 1 und 101           |
| **bis SN-044:** vier falsche Querverweise in Kapitel 2; alle vier stehen in allen vier Sprachteilen – Vorlagenfehler                          | DSC-055                         |
| **bis SN-044:** zweimal auf eine „Tabelle Abfragecodes" verwiesen, die es nicht gibt; die Vorseite hat an der Stelle eine Leerfläche          | DSC-057, S. 9 und 10            |
| **bis SN-044:** das Sternzeichen des Abfragecodes steht im Seitenbild, fehlt aber in der Textebene – der Code wäre unbrauchbar                | DSC-058, S. 10                  |
| **bis SN-044:** kein einziger Warnhinweis trägt ein Signalwort; ein ESD-Symbol ohne jeden Begleittext ist alleinige Warnungsträgerin          | DSC-063, S. 6–16                |
| **bis SN-044:** die gekoppelte Alarmanlage heißt „WiPro „all in one"", ab SN-045 „WiPro III safe.lock" – verschiedene Produktnamen            | DSC-065, S. 6 und 14            |
| **bis SN-044:** Gerätetexte ersetzen Umlaute durch Vokal plus e („Ungueltiger", „Tuer") – Zeichensatzgrenze, vor Übersetzung schützen         | DSC-054, S. 13                  |
| **bis SN-044:** englisches Inhaltsverzeichnis nennt 2.4 „Installation instructions"; der Abschnitt ist Geofencing                             | DSC-068, S. 20                  |
| **bis SN-044:** SIM-Format Micro-SIM gegen Nano-SIM ab SN-045; Konformität 1999/5/EG gegen 2014/53/EU – Werte nicht übertragbar               | DSC-069, S. 18                  |
| **bis SN-044:** aufgedruckte Seitenzählung beginnt im englischen Teil neu bei „Page1"; „Seite 15" und „Page 15" im selben PDF                 | DSC-068, S. 20–26               |
| **bis SN-044:** alle vier falschen Querverweise des deutschen Teils sind wörtlich in den englischen übernommen – Vorlagenfehler               | DSC-055, S. 28, 30, 31, 33      |
| **bis SN-044:** die englische Konformitätserklärung nennt eine nicht existierende „directive 1995/5/EG" (deutsch: 1999/5/EG)                  | DSC-071, S. 36                  |
| **bis SN-044:** der Verweis „(see 2.1, Fig. 1)" nummeriert eine Abbildung, die es nicht gibt – keine der neun trägt eine Nummer               | DSC-068, S. 22, 30, 31          |
| **bis SN-044:** der französische Teil enthält sinnverändernde Übersetzungsfehler (feste 2 m statt Maximum; LED-Zustand als Fehler)            | DSC-073, S. 38–44               |
| **bis SN-044:** der im französischen Teil angekündigte FAQ-Link fehlt vollständig; kein Weg führt dort zu den Abfragecodes                    | DSC-074, S. 44                  |
| **bis SN-044:** die Kopfzeilen des französischen Teils werden vom grauen Balken verdeckt – keine sichtbaren Seitenzahlen                      | DSC-075, S. 37–46               |
| **bis SN-044:** die englische Fassung verliert das doppelte A der Adressbuch-Empfehlung („Alarm" statt „AAlarm")                              | DSC-076, S. 8, 26, 43           |
| **bis SN-044:** der französische Teil nennt 1500 m/1,5 km als Diebstahlmeldungs-Radius – dritter Wert neben 1000 m und 900 m                  | DSC-078, S. 47 und 50           |
| **bis SN-044:** der französische Statusbefehl lautet „Statut" – ein Buchstabe Abstand zu „Status"/„STATUS"                                    | DSC-067, S. 50                  |
| **bis SN-044:** der französische Konformitätsabschnitt ist unübersetzt englisch – samt der falschen „directive 1995/5/EG"                     | DSC-071, S. 53                  |
| **bis SN-044:** die späte Abfragecode-Ergänzung ist in drei von vier Sprachteilen sprachlich defekt – nur die deutsche ist sauber             | DSC-079, S. 27, 44, 61          |
| **bis SN-044:** im schwedischen Verzeichnis fehlt die Kapitelnummer 3; „PGS-position" als Tippfehler im GPS-Diagnose-Erfolgszustand           | DSC-080, S. 54 und 59           |
| **bis SN-044:** auch der schwedische Konformitätsabschnitt ist unübersetzt englisch mit „directive 1995/5/EG" – drei von vier falsch          | DSC-071, S. 70                  |
| **bis SN-044:** Notizseite und Impressum extrahieren vollständige unsichtbare Nachbarseiten außerhalb des sichtbaren Seitenrahmens            | DSC-081, S. 71 und 72           |
| Blau unterstrichene Kartenadressen sind nur auf einer deutschen Seite anklickbar; dort doppelt annotiert, in EN/FR/CS/DA/ES/IT/NL/PL/SV inert | DSC-082                         |
| Niederländisch: `Pro-Zoeker`, unvollständiges `positi`, drei Wörter für Hauptnummer und zwei für Hauptkabelbaum                               | DSC-083, S. 186/187/189/195/198 |
| Polnisch: LED-Normalzustand falsch dupliziert; `stuku 3`/`styku 3` und `wuczeniu`/`uczenia` widersprechen sich                                | DSC-084, S. 206/217/223         |
| Schwedisch: Abschaltanweisung nennt `fence pa`, das Kapitel definiert denselben Text als Einschaltbefehl                                      | DSC-085, S. 235/243             |

Die PDF-Seitenprüfung ist abgeschlossen. Neue Funde entstehen jetzt aus der
Aufgabenextraktion, den noch offenen Synthese-Auswertungen und den fachlichen Reviews;
sie werden weiterhin hier ergänzt, ohne die übrige Arbeit anzuhalten.
