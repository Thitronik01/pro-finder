# Technische Prüfpakete

Dieses Verzeichnis bündelt quellenvalidierte Segmente für den realen Fachreview durch
THITRONIK. Ein Paket ist eine Arbeits- und Entscheidungshilfe, **keine Freigabe**. Der
Reviewstatus der Segmente bleibt bis zu einer protokollierten, unabhängigen Entscheidung
unverändert.

| Paket                                              | Generation | Thema                                                                   |                     Segmente | Status                |
| -------------------------------------------------- | ---------- | ----------------------------------------------------------------------- | ---------------------------: | --------------------- |
| [P0-01](P0-01-ELEKTRIK-SN044.md)                   | bis SN-044 | Elektrische Anschlüsse, Ausgänge, GPS und technische Daten              |   6 P0 + 1 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-02](P0-02-SIM-ZIELRUFNUMMERN-SN044.md)         | bis SN-044 | SIM, PIN, Zielrufnummern, Programmierung, Löschen und Status-LED        | 11 P0 + 2 P1 als Gegenbelege | bereit für Fachreview |
| [P0-03](P0-03-MELDUNGEN-ALARM-GEOFENCING-SN044.md) | bis SN-044 | Meldungen, Spannungswarnung, Alarm, Berechtigung und Geofencing         | 11 P0 + 5 P1 als Gegenbelege | bereit für Fachreview |
| [P0-04](P0-04-MONTAGE-BETRIEBSARTEN-GPS-SN044.md)  | bis SN-044 | Montage, Betriebsarten, GPS-Diagnose und Reflexionen                    |  8 P0 + 4 P1 als Gegenbelege | bereit für Fachreview |
| [P0-05](P0-05-AUSGAENGE-POSITION-SN044.md)         | bis SN-044 | Ausgangssteuerung und Bewertung gespeicherter Positionen                |   5 P0 + 1 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-06](P0-06-SIM-AKTIVIERUNG-SN045.md)            | ab SN-045  | SIM-Vorbereitung und Aktivierung                                        |  3 P0 + 3 P1 als Gegenbelege | bereit für Fachreview |
| [P0-07](P0-07-ZIELRUFNUMMERN-SN045.md)             | ab SN-045  | Zielrufnummern, Programmiernachricht und Speicherlöschung               |  14 P0 + 2 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-08](P0-08-MONTAGE-ANSCHLUSS-SN045.md)          | ab SN-045  | Montage, Anschluss und elektrische Grenzwerte                           | 14 P0 + 2 P1 als Gegenbelege | bereit für Fachreview |
| [P0-09](P0-09-BETRIEBSARTEN-GPS-LED-SN045.md)      | ab SN-045  | Betriebsarten, GPS-Diagnose und Status-LED                              |  20 P0 + 2 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-10](P0-10-MELDUNGEN-ALARME-SN045.md)           | ab SN-045  | Meldungen, Alarme und Spannungswarnung                                  |  22 P0 + 2 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-11](P0-11-GEOFENCING-POSITION-SN045.md)        | ab SN-045  | Geofencing, Statusbericht und Positionsbewertung                        |  22 P0 + 2 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-12](P0-12-AUSGAENGE-TECHNISCHE-DATEN-SN045.md) | ab SN-045  | Ausgangssteuerung und technische Daten                                  |  14 P0 + 2 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-13](P0-13-KURZANLEITUNGEN.md)                  | beide      | Kurzanleitungen gegen Handbücher: fünf Abweichungen, vier Bestätigungen | 14 P0 + 4 P1 als Gegenbelege | bereit für Fachreview |
| [EN-01](EN-01-LANGUAGE-REVIEW-SN045.md)            | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 01–05                 |           5 Aufgabenentwürfe | Review offen          |
| [EN-02](EN-02-LANGUAGE-REVIEW-SN045.md)            | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 06–10                 |           5 Aufgabenentwürfe | Review offen          |
| [EN-03](EN-03-LANGUAGE-REVIEW-SN045.md)            | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 11–14                 |           4 Aufgabenentwürfe | Review offen          |

P0-06 bis P0-12 decken die Generation ab SN-045 vollständig ab: alle 126 sicherheitskritischen
Segmente des deutschen **und** des englischen Teils sind genau einem Dossier zugeordnet.
Englische Segmente sind Extraktionen der englischen Quelle, keine Übersetzungen; sie liegen
im selben Paket wie ihre deutsche Entsprechung. Ihre Segmente entstanden nicht in einer Selbstdurchsicht, sondern im Gegenlesen gegen die englische Fassung derselben Auflage; die belegte Seitenpaarung steht in
[CROSSCHECK_SN045_DE_EN.md](../CROSSCHECK_SN045_DE_EN.md).

P0-13 ist anders geschnitten als die übrigen: Es folgt nicht einem Thema, sondern einem
Befund – der Kurzanleitung, die dem Gerät beiliegt und an fünf Stellen etwas anderes sagt
als das Handbuch derselben Generation und Sprache.

Die Paket-ID ist in `/review` suchbar. Quellen der Generation ab SN-045 erscheinen in
einem Paket bis SN-044 ausschließlich als gekennzeichnete Gegenquelle; ihre Werte werden
nicht übernommen.

EN-01 bis EN-03 sind davon getrennt: Sie prüfen ausschließlich die sprachliche
Übertragung des deutschen Masters ab SN-045 und verleihen keine technische Freigabe.
