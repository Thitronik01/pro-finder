# Gegenprüfung Deutsch ↔ Englisch (DOC-IBA-SN045)

Belegte Seitenpaarung des deutschen und des englischen Sprachteils von DOC-IBA-SN045 und
die Methode, mit der deutsche Segmente gegen die englische Fassung gegengelesen werden.

## Warum diese Methode

Alle zehn Sprachfassungen von DOC-IBA-SN045 verwenden dasselbe Layout und dieselben
eingebetteten Grafiken. Belegt ist das durch die Vorlagenfehler
[DSC-022](DISCREPANCIES.md), DSC-040 und DSC-046, die in allen Fassungen identisch
auftreten. Eine falsch abgelesene Zahl, eine übersehene Tabellenzeile oder ein
übersprungener Aufzählungspunkt muss deshalb beim Vergleich mit der englischen Seite
auffallen.

Der entscheidende Punkt: Die Prüfung hängt **nicht** davon ab, dass derselbe Bearbeiter
seine eigene Arbeit noch einmal liest. Sie vergleicht die Extraktion gegen ein zweites,
unabhängiges Dokument.

Eine Abweichung wird nie stillschweigend angeglichen. Sie ist entweder

- ein eigener Lesefehler → das Segment wird korrigiert, die Korrektur steht im
  `change_reason`, oder
- ein echter Sprachunterschied der Quelle → er kommt ins
  [Widerspruchsregister](DISCREPANCIES.md) und wird nicht aufgelöst.

## Seitenpaarung

Die interne Seitenzahl („Seite n von 23") ist **kein** Anker: Deutsch und Englisch zählen
beide 3 bis 23, tragen den gleichen Inhalt aber ab Abschnitt 2.8 auf verschiedenen internen
Seiten (DSC-021). Gemappt wird deshalb über die Kapitelüberschrift.

Der Versatz der PDF-Seitenzahlen ist ebenfalls nicht konstant: Er beträgt 24 und fällt
zwischen den Abschnitten 2.8 und Kapitel 5 auf 23.

| Kapitel / Abschnitt              | DE PDF | DE intern | EN PDF | EN intern | Versatz | Geprüft  |
| -------------------------------- | -----: | --------: | -----: | --------: | ------: | -------- |
| Haftungsausschluss, Verwendung   |      5 |         3 |     29 |         3 |      24 | **voll** |
| Lieferumfang                     |      6 |         4 |     30 |         4 |      24 | **voll** |
| 1 Montage, 1.1 Montageort        |      7 |         5 |     31 |         5 |      24 | **voll** |
| 1.2 Anschlüsse und Anzeigen      |      8 |         6 |     32 |         6 |      24 | **voll** |
| 1.3 Betriebsart auswählen        |      9 |         7 |     33 |         7 |      24 | **voll** |
| Tabelle der Betriebsarten        |     10 |         8 |     34 |         8 |      24 | **voll** |
| 1.4 Modul anschließen, 1.5/1.5.1 |     11 |         9 |     35 |         9 |      24 | **voll** |
| 1.5.2 GPS-Antenne, 1.5.3         |     12 |        10 |     36 |        10 |      24 | **voll** |
| 2 Programmieren, 2.1, 2.2        |     13 |        11 |     37 |        11 |      24 | **voll** |
| 2.3 App, 2.4 Aktivieren, 2.5     |     14 |        12 |     38 |        12 |      24 | **voll** |
| 2.6, 2.7, 2.8 Einleitung         |     15 |        13 | **39** |    **13** |      24 | **voll** |
| 2.8 Syntaxgrafik                 |     16 |        14 | _(39)_ |    _(13)_ |       – | **voll** |
| Beispieltabelle, 2.9             |     17 |        15 |     40 |        14 |      23 | **voll** |
| 3 Betriebszustände (Status-LED)  |     18 |        16 |     41 |        15 |      23 | **voll** |
| 4 Berichte und Meldungen         |     19 |        17 |     42 |        16 |      23 | **voll** |
| 4 Fortsetzung                    |     20 |        18 |  43+44 |     17+18 |       – | **voll** |
| 5 Funktionen, 5.1, 5.2           |     21 |        19 |     45 |        19 |      24 | **voll** |
| 5.3 Statusbericht, 5.4 Position  |     22 |        20 |     46 |        20 |      24 | **voll** |
| 5.5.1 bis 5.5.3 Ausgänge         |     23 |        21 |     47 |        21 |      24 | **voll** |
| 5.6 Anlernmodus, 5.7             |     24 |        22 |     48 |        22 |      24 | **voll** |
| 6 Sonstiges, technische Daten    |     25 |        23 |     49 |        23 |      24 | **voll** |

**Prüfstand der Spalte „Geprüft"**

- **voll** – beide Seiten bei 200 dpi gerendert und Satz für Satz, Zeile für Zeile
  gegeneinander gelesen (2026-08-23). Strittige Einzelwerte zusätzlich bei 400 bis 500 dpi
  nachgerendert.

**Alle 21 Seitenpaare sind vollständig gegengelesen.** Damit ist der deutsche Sprachteil von
DOC-IBA-SN045 durchgängig gegen eine zweite, unabhängige Quelle geprüft.

## Die beiden Sprungstellen

1. **Abschnitt 2.8 – hier entsteht der Versatz.** Deutsch setzt die Syntaxgrafik der
   Programmiernachricht allein auf eine eigene interne Seite 14; die restliche Seite ist
   leer. Englisch setzt Einleitung und Grafik gemeinsam auf die interne Seite 13. Ab hier
   liegt derselbe Inhalt englisch eine interne Seite früher.
2. **Kapitel 4 – hier wird er ausgeglichen.** Deutsch braucht zwei interne Seiten (17, 18),
   Englisch drei (16 bis 18). Ab Kapitel 5 stimmen beide wieder überein.

Die englische Fassung überspringt dabei **keine** Fußzeilennummer: Die Fußzeilen der
englischen PDF-Seiten 33 bis 40 laufen lückenlos „Page 7 of 23" bis „Page 14 of 23".
Beide Teile umfassen 21 Inhaltsseiten. Es fehlt kein Inhalt; die Differenz ist rein
typografisch.

## Befunde aus den vollständig gegengelesenen Seiten

| Fundstelle                 | Art                        | Register               |
| -------------------------- | -------------------------- | ---------------------- |
| 2.1 Empfehlungskasten      | echter Sprachunterschied   | DSC-086 (neu), DSC-027 |
| 2.5 und 2.8 Länderbeispiel | echter Sprachunterschied   | DSC-019                |
| 2.5 Adressbuchname         | Fehler in beiden Fassungen | DSC-016                |
| 2.8 Berechtigungszeichen   | Lücke in beiden Fassungen  | DSC-017                |
| 2.8 Seitenaufteilung       | Layoutunterschied          | DSC-021                |

Kein Segment musste wegen eines eigenen Lesefehlers korrigiert werden; die Extraktion der
fünf Seiten entstand direkt im Gegenlesen.

## Vorgehen für die nächsten Abschnitte

Der deutsche Teil ab SN-045 ist abgeschlossen. Dieselbe Methode lässt sich als Nächstes auf
DOC-BMA-SN044 außerhalb der Seiten 3–18 anwenden – dort steht mit dem englischen Teil
(Seiten 20–36) ebenfalls eine Gegenquelle bereit – oder auf den englischen Teil ab SN-045,
der dann seinerseits gegen den bereits validierten deutschen Master gelesen wird.

## Vorgehen im Einzelnen

1. Seitenpaar über die Kapitelüberschrift aus dieser Tabelle nehmen, nie über einen festen
   Versatz.
2. Die englische Seite rendern und lesen.
3. Jede Zahl, jede Tabellenzeile und jede Aufzählung gegen das deutsche Segment halten.
4. Abweichung einordnen: eigener Lesefehler oder Sprachunterschied der Quelle.
5. Erst nach vollständigem Gegenlesen steigt die Seite in
   `sources/pages/DOC-IBA-SN045.json` auf `validated`. Was geprüft wurde und was nicht,
   steht je Seite im Feld `crosscheck_note`.
