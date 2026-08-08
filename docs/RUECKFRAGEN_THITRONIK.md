# Rückfragen an THITRONIK

Stand: 2026-08-08 · Grundlage: seitenweise Prüfung von 180 der 323 PDF-Seiten sowie die
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

Geprüft sind bisher der deutsche, englische, französische und tschechische Sprachteil von
`pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf` (DOC-IBA-SN045)
sowie beide Kurzanleitungen. Sechs Sprachteile stehen aus.

---

## 1. Welche SMS-Befehle akzeptiert das Gerät? (blockierend)

Vier geprüfte Sprachfassungen dokumentieren **vier verschiedene Befehlssätze** für dieselben
Funktionen:

| Funktion        | Deutsch          | Englisch        | Französisch                   | Tschechisch |
| --------------- | ---------------- | --------------- | ----------------------------- | ----------- |
| Geofencing aus  | `fence aus`      | `fence off`     | `desactiver le gardiennage`   | `plot vyp`  |
| Statusbericht   | `status`         | `status`        | `rapport d etat`              | `stav`      |
| Ausgang A ein   | `a an`           | `a on`          | `activer la sortie A`         | `a zap`     |
| Ausgang gepulst | `a impuls`       | `a pulse`       | `sortie A impulsion`          | `a impuls`  |
| Ausgang Zeit    | `a %min%`        | `a %min%`       | `a %min%`                     | `a %min%`   |
| Anlernmodus     | `anlernmodus an` | `teach mode on` | `activer le mode d appairage` | `uceni zap` |

**Die Frage:** Akzeptiert der Pro-finder alle vier Befehlssätze? Hängt die Befehlssprache
von einer Konfiguration ab? Oder sind einzelne Fassungen schlicht falsch?

**Warum das drängt:** Ein nicht akzeptierter Befehl erzeugt keine Fehlermeldung, sondern nur
die Hilfe-SMS. Wer Geofencing vor dem Einstellen in eine Halle abschalten will und dabei den
falschen Befehl verwendet, bekommt genau die Fehlalarme, die er vermeiden wollte.

**Auffällig dabei:**

- `a %min%` lautet in allen vier Fassungen gleich, `a impuls` in Deutsch und Tschechisch,
  im Englischen aber `a pulse`. Die Lokalisierung ist also nicht einmal in sich stimmig.
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

_Belege: DSC-013, DSC-014, DSC-026, DSC-033_

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
  Grafik wurde nie lokalisiert. _(DSC-022)_
- In der Anschlussabbildung markiert ein **rotes X** einen Anschluss zwischen B und C, ohne
  Legendeneintrag. In allen vier Fassungen unerklärt. _(Seitenrecords zu S. 8, 32, 56, 83)_

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

_Beleg: DSC-042_

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

_Beleg: DSC-044_

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

_Beleg: DSC-045_

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

_Beleg: DSC-047_

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

| Fund                                                                                                                                  | Beleg                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Kabelbezeichnung uneinheitlich: „Verbindungskabel WiPro III" (Deutsch, Tschechisch) gegenüber „câble de connexion RJ10" (Französisch) | DSC-036, S. 11, 59, 86         |
| Produktname im tschechischen Teil mehrfach verstümmelt („hledáček Pro", „vyhledávač Pro")                                             | DSC-036, S. 86, 89, 93, 96     |
| Vier tschechische Substantive für dasselbe Gerät; drei Bezeichnungen für den Anlernmodus                                              | DSC-037; S. 99 (Seitenrecord)  |
| Links im tschechischen Teil verweisen auf `/en/` statt `/cs/`                                                                         | S. 100, Abschnitte 6.3 und 6.4 |
| Französischer Teil hat 26 statt 23 interne Seiten; letzte Seite trägt „Page 26 de 25"                                                 | DSC-021                        |
| Rotes X in der Anschlussabbildung – in vier Sprachfassungen ohne Legendeneintrag                                                      | S. 8, 32, 56, 83               |
| Zwei weitere falsche Querverweise im **deutschen** Original (5.4 statt 5.5 auf S. 9; 1.5.2 statt 1.5.3 in der Betriebsartentabelle)   | DSC-040                        |
| Verweis auf 5.1 für Blinker und Sirene führt ins Leere; 5.1 beschreibt nur einen Anruf, obwohl die Überschrift SMS ankündigt          | DSC-041                        |
| „Hauptkabelbaum" wird nirgends erklärt – der gesamte Löschvorgang der Zielrufnummern hängt daran                                      | DSC-050, S. 17                 |
| Dezimaltrennzeichen der Gerätemeldungen uneinheitlich (11.2 V mit Punkt, 13,53 V mit Komma) – schon im deutschen Original             | DSC-046                        |
| Revisionsstände der Kurzanleitung widersprechen sich (Rev. 1.3.2 gegenüber Rev. 1.0 auf dem abgebildeten Umschlag)                    | DSC-049                        |
| Google-Play-Abzeichen so grob gerastert, dass es auch bei 900 dpi unlesbar bleibt                                                     | DSC-051, S. 14                 |
| Vier Fragen zu den Ausgängen, die die Quelle gar nicht beantwortet (Empfänger, Grenzwerte, Abbruch, Zustand nach Neustart)            | DSC-052, S. 23                 |

**Für die noch ausstehenden sechs Sprachteile gilt:** Erwartbar sind je Sprache ein eigener
SMS-Befehlssatz, dieselben Vorlagenfehler und ein bis zwei eigene Übersetzungsfehler. Neue
Befehlssätze werden in die Tabelle in DSC-033 eingetragen; alles Übrige kommt hierher.
