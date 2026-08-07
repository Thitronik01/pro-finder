# Rückfragen an THITRONIK

Stand: 2026-08-07 · Grundlage: seitenweise Prüfung von 104 der 323 PDF-Seiten

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

_Beleg: DSC-023_

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
| Vier tschechische Substantive für dasselbe Gerät; drei Bezeichnungen für den Anlernmodus                                              | DSC-037, DSC-039               |
| Links im tschechischen Teil verweisen auf `/en/` statt `/cs/`                                                                         | S. 100, Abschnitte 6.3 und 6.4 |
| Französischer Teil hat 26 statt 23 interne Seiten; letzte Seite trägt „Page 26 de 25"                                                 | DSC-021                        |
| Rotes X in der Anschlussabbildung – in vier Sprachfassungen ohne Legendeneintrag                                                      | S. 8, 32, 56, 83               |

**Für die noch ausstehenden sechs Sprachteile gilt:** Erwartbar sind je Sprache ein eigener
SMS-Befehlssatz, dieselben Vorlagenfehler und ein bis zwei eigene Übersetzungsfehler. Neue
Befehlssätze werden in die Tabelle in DSC-033 eingetragen; alles Übrige kommt hierher.
