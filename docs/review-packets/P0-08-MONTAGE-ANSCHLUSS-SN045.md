# P0-08: Montage, Anschluss und elektrische Grenzwerte ab SN-045

Stand: 2026-08-23 · Status: bereit für Fachreview, keine Freigabe

## Zweck und Geltungsbereich

Vierzehn sicherheitskritische Segmente aus DOC-IBA-SN045, deutsche PDF-Seiten 5, 7, 8, 11
und 12. Alle fünf Seiten wurden am 2026-08-23 vollständig gegen die englische Fassung
derselben Auflage gelesen (Seiten 29, 31, 32, 35 und 36); Methode und Seitenpaarung stehen
in [CROSSCHECK_SN045_DE_EN.md](../CROSSCHECK_SN045_DE_EN.md).

Das Paket gilt ausschließlich ab SN-045. Kein Wert aus DOC-BMA-SN044 wird herangezogen.

**Nachtrag 2026-08-23:** Seit der Extraktion des englischen Sprachteils sind diesem Paket
zusätzlich die englischen Segmente derselben Fundstellen zugeordnet. Sie sind Extraktionen
der englischen Quelle selbst, keine Übersetzungen des deutschen Masters. Eine Entscheidung
dieses Pakets gilt damit für beide Fassungen; wo sie auseinanderlaufen, ist das in der
jeweiligen Zeile vermerkt.

## Zugeordnete Segmente

| Segment                                        | Thema                                                   | Quelle |
| ---------------------------------------------- | ------------------------------------------------------- | ------ |
| `IBA045-DE-P005-S02-STARTERBATTERIE`           | Anschluss an die Starterbatterie, Tiefentladung         | S. 5   |
| `IBA045-DE-P007-S01-MONTAGEORT-ZUGANG`         | Zugriffsschutz gegen Servicezugang                      | S. 7   |
| `IBA045-DE-P007-S02-MONTAGEORT-LAGE`           | Fahrzeuginneres, Verbot Motorraum, Lage                 | S. 7   |
| `IBA045-DE-P007-S03-FREIE-SICHT`               | freie Sicht zum Satelliten                              | S. 7   |
| `IBA045-DE-P007-S04-EXTERNE-ANTENNE-KABEL`     | feste Kabellänge zwei Meter                             | S. 7   |
| `IBA045-DE-P007-S05-EINBAULAGE-ABBILDUNG`      | rein farbliche Richtig-/Falsch-Kennzeichnung            | S. 7   |
| `IBA045-DE-P008-S01-ANSCHLUSSUEBERSICHT`       | Belegung A–D und Pin 1–8                                | S. 8   |
| `IBA045-DE-P008-S02-ANSCHLUSSABBILDUNG`        | unerklärtes rotes Feld, nicht lokalisierte Beschriftung | S. 8   |
| `IBA045-DE-P011-S01-VERSORGUNG-ANSCHLIESSEN`   | 12 V, Absicherung, Messbereich 0–30 V                   | S. 11  |
| `IBA045-DE-P011-S03-AUSGAENGE-GRENZWERTE`      | 12 V, 500 mA, Relais, Garantieverlust                   | S. 11  |
| `IBA045-DE-P011-S04-SCHALTARTEN`               | drei Schaltarten der Ausgänge                           | S. 11  |
| `IBA045-DE-P011-S05-ANTENNE-MONTIEREN`         | Klebemontage, 15 °C, waagerecht                         | S. 11  |
| `IBA045-DE-P012-S01-ANTENNE-ANSCHLIESSEN`      | spannungsfrei anschließen                               | S. 12  |
| `IBA045-DE-P012-S02-SATELLITENDATEN-SPEICHERN` | 13,5 V, mindestens fünf Minuten                         | S. 12  |

## A. Elektrische Werte und Schutz

| ID       | Zu prüfende Aussage                                                                                           | Quelle ab SN-045     | Gegenquelle oder offene Lücke                                                                                                                             | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------- |
| P0-08-A1 | Pin 1 und Pin 8 werden polungsrichtig an 12 V Gleichspannung angeschlossen.                                   | S. 11, Abschnitt 1.4 | Sachgleich auf S. 35. Die technischen Daten nennen dagegen 9–30 V; „geeignete Spannungsversorgung“ bleibt unbestimmt.                                     | DSC-069          | Verbindlichen Betriebsspannungsbereich und das Verhalten an den Bereichsgrenzen bestätigen. |
| P0-08-A2 | Die Plusleitung wird mit der beiliegenden Sicherung abgesichert.                                              | S. 11                | Der Sicherungswert 3 A steht nur im Lieferumfang, nicht im Anschlusskapitel.                                                                              | keine eigene DSC | Sicherungswert, Typ und Einbauort im Anschlusskapitel verbindlich benennen.                 |
| P0-08-A3 | Die Pins 2 bis 5 sind Messeingänge für 0 bis 30 V.                                                            | S. 11                | Sachgleich. Eingangsimpedanz, Genauigkeit und Verhalten über 30 V fehlen.                                                                                 | keine eigene DSC | Messbereich, Toleranz, Überspannungsfestigkeit und Fehlerverhalten spezifizieren.           |
| P0-08-A4 | Pin 6 und Pin 7 liefern 12 V und dürfen mit 500 mA belastet werden.                                           | S. 11                | Sachgleich. Kein Kurzschluss- oder Übertemperaturschutz, keine Ruhestellung nach Neustart, keine zulässige Lastart dokumentiert.                          | keine eigene DSC | Schutzbeschaltung, Ruhestellung, Lastart und kontrollierbaren Fehlerzustand bestätigen.     |
| P0-08-A5 | Für mehr als 500 mA ist ein Kfz-Relais mit Freilaufdiode zu verwenden; bei Überlastung erlischt die Garantie. | S. 11                | Sachgleich. Es fehlt jede Angabe, woran eine Überlastung erkennbar ist.                                                                                   | keine eigene DSC | Erkennbarkeit einer Überlastung und Abgrenzung des Garantieausschlusses klären.             |
| P0-08-A6 | Das Gerät hängt an der Starterbatterie; für Tiefentladungsschäden wird nicht gehaftet.                        | S. 5                 | Sachgleich auf S. 29. Weder Abschaltschwelle noch Schutzmaßnahme genannt; die Spannungswarnung in Kapitel 4 nennt Schwellen, ohne den Bezug herzustellen. | keine eigene DSC | Zusammenhang zwischen Standby-Schwelle und Tiefentladungsschutz herstellen.                 |

## B. Montageort und GPS-Antenne

| ID       | Zu prüfende Aussage                                                                                              | Quelle ab SN-045       | Gegenquelle oder offene Lücke                                                                                                                       | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| P0-08-B1 | Der Montageort muss gegen unbefugten Zugriff gesichert und zugleich zugänglich sein.                             | S. 7, Abschnitt 1.1    | Sachgleich auf S. 31. Kein Kriterium dafür, wann ein Ort „ausreichend gesichert“ ist.                                                               | keine eigene DSC | Prüfbares Kriterium für den Sabotageschutz liefern.                                |
| P0-08-B2 | Das Gerät darf keinesfalls im Motorraum montiert werden; die Oberseite muss nach oben zeigen.                    | S. 7                   | Sachgleich („must never be installed in the engine compartment“).                                                                                   | keine eigene DSC | Bestätigen, ob der Grund thermisch, mechanisch oder Empfang ist.                   |
| P0-08-B3 | Kunststoff, Glas und Holz beeinträchtigen die freie Sicht nicht.                                                 | S. 7                   | Sachgleich. Welche Materialien abschirmen, nennt keine Fassung – nur die durchlässigen.                                                             | keine eigene DSC | Abschirmende Materialien benennen (Metall, metallbedampfte Scheiben, Solarmodule). |
| P0-08-B4 | Das Kabel zwischen Mobilfunkmodul und GPS-Antenne ist zwei Meter lang.                                           | S. 7                   | Beide Fassungen nennen eine **feste** Länge, keine Obergrenze. In der Generation bis SN-044 steht an dieser Stelle ein Unterschied fest/Obergrenze. | DSC-073          | Bestätigen, ob die Länge fest ist und ob eine Verlängerung zulässig wäre.          |
| P0-08-B5 | Die Antenne wird geklebt; unter 15 °C ist die Klebefläche zu erwärmen, die Empfangsseite muss waagerecht liegen. | S. 11, Abschnitt 1.5.1 | Sachgleich. Keine Angabe zur Haltbarkeit der Klebeverbindung oder zur zulässigen Abweichung von der Waagerechten.                                   | keine eigene DSC | Toleranz der Ausrichtung und Anforderungen an die Klebefläche bestätigen.          |
| P0-08-B6 | Zum Anschließen der Antenne muss das Gerät spannungsfrei sein; dazu wird der Hauptkabelbaum abgezogen.           | S. 12, Abschnitt 1.5.2 | Sachgleich. Der Begriff „Hauptkabelbaum“ wird in keiner Fassung erklärt, obwohl mehrere Schritte daran hängen.                                      | DSC-050          | Bezeichnung, Lage und Aussehen des Kabelbaums eindeutig benennen.                  |
| P0-08-B7 | Nach der Installation muss die Betriebsspannung mindestens fünf Minuten über 13,5 V liegen.                      | S. 12                  | Sachgleich. Nicht gesagt: was geschieht, wenn der Vorgang abbricht, und ob er wiederholt werden muss.                                               | keine eigene DSC | Abbruchverhalten, Wiederholbarkeit und Erkennbarkeit des Abschlusses festlegen.    |

## C. Nur visuell vermittelte Sicherheitsinformation

| ID       | Zu prüfende Aussage                                                                                                           | Quelle ab SN-045    | Gegenquelle oder offene Lücke                                                                                                                                                | DSC / Rückfrage  | Benötigte THITRONIK-Entscheidung                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------- |
| P0-08-C1 | Richtige und falsche Einbaulage werden allein durch grüne beziehungsweise rote Kreise und eine Durchstreichung unterschieden. | S. 7, Abbildungen   | Identische, unbeschriftete Abbildungen in beiden Fassungen. Farbfehlsichtige Nutzerinnen erhalten die Aussage nicht.                                                         | keine eigene DSC | Freigegebene Textalternative je Abbildung liefern.                |
| P0-08-C2 | Die Anschlussabbildung enthält ein rot durchgestrichenes Feld ohne Legendeneintrag.                                           | S. 8, Abschnitt 1.2 | In allen zehn geprüften Sprachfassungen ohne Eintrag. Ohne Erklärung bleibt unklar, ob dort ein Anschluss verboten oder nur nicht belegt ist.                                | DSC-022          | Bedeutung des Felds benennen und in die Legende aufnehmen.        |
| P0-08-C3 | Die Beschriftung am Antennenfoto ist in keiner Sprachfassung lokalisiert.                                                     | S. 8                | Vorlagenfehler, in zehn Fassungen bestätigt.                                                                                                                                 | DSC-022          | Lokalisierte Abbildung oder verbindliche Textalternative liefern. |
| P0-08-C4 | Die Legende ordnet A bis D und Pin 1 bis 8 zu.                                                                                | S. 8                | Alle zwölf Zeilen stimmen mit der englischen Fassung überein. Die Zuordnung im Bild erfolgt über farbige Ziffernkreise, deren Farben in der Legende nicht wiederholt werden. | keine eigene DSC | Bestätigen, ob die Farbcodierung der Pins eine Bedeutung trägt.   |

## Reviewprotokoll

| ID-Gruppe       | Entscheidung je ID | Spezifikation | Geltungsbereich / Revision | Beleg   | Reviewer, Rolle, Datum |
| --------------- | ------------------ | ------------- | -------------------------- | ------- | ---------------------- |
| P0-08-A1 bis A6 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-08-B1 bis B7 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
| P0-08-C1 bis C4 | _offen_            | _offen_       | _offen_                    | _offen_ | _offen_                |
