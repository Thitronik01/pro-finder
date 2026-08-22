# Technische Prüfpakete

Dieses Verzeichnis bündelt quellenvalidierte Segmente für den realen Fachreview durch
THITRONIK. Ein Paket ist eine Arbeits- und Entscheidungshilfe, **keine Freigabe**. Der
Reviewstatus der Segmente bleibt bis zu einer protokollierten, unabhängigen Entscheidung
unverändert.

| Paket                                                   | Generation | Thema                                                            |                     Segmente | Status                |
| ------------------------------------------------------- | ---------- | ---------------------------------------------------------------- | ---------------------------: | --------------------- |
| [P0-01](P0-01-ELEKTRIK-SN044.md)                        | bis SN-044 | Elektrische Anschlüsse, Ausgänge, GPS und technische Daten       |   6 P0 + 1 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-02](P0-02-SIM-ZIELRUFNUMMERN-SN044.md)              | bis SN-044 | SIM, PIN, Zielrufnummern, Programmierung, Löschen und Status-LED | 11 P0 + 2 P1 als Gegenbelege | bereit für Fachreview |
| [P0-03](P0-03-MELDUNGEN-ALARM-GEOFENCING-SN044.md)      | bis SN-044 | Meldungen, Spannungswarnung, Alarm, Berechtigung und Geofencing  | 11 P0 + 5 P1 als Gegenbelege | bereit für Fachreview |
| [P0-04](P0-04-MONTAGE-BETRIEBSARTEN-GPS-SN044.md)       | bis SN-044 | Montage, Betriebsarten, GPS-Diagnose und Reflexionen             |  8 P0 + 4 P1 als Gegenbelege | bereit für Fachreview |
| [P0-05](P0-05-AUSGAENGE-POSITION-SN044.md)              | bis SN-044 | Ausgangssteuerung und Bewertung gespeicherter Positionen         |   5 P0 + 1 P1 als Gegenbeleg | bereit für Fachreview |
| [P0-06](P0-06-MONTAGE-ANSCHLUSS-BETRIEBSARTEN-SN045.md) | ab SN-045  | Montage, Pinbelegung, Versorgung, Ausgänge und technische Daten  | 15 P0 + 4 P1 als Gegenbelege | **in Vorbereitung**   |
| [P0-07](P0-07-BETRIEBSARTEN-GEOFENCING-SN045.md)        | ab SN-045  | Betriebsarten, Geofencing, GPS-Diagnose und Positionsbewertung   |  15 P0 + 1 P1 als Gegenbeleg | **in Vorbereitung**   |
| [P0-08](P0-08-SIM-AKTIVIERUNG-SN045.md)                 | ab SN-045  | SIM-Karte, Inbetriebnahme, Statusbericht und Anrufsteuerung      | 10 P0 + 2 P1 als Gegenbelege | **in Vorbereitung**   |
| [P0-09](P0-09-ZIELRUFNUMMERN-BERECHTIGUNG-SN045.md)     | ab SN-045  | Zielrufnummern, Programmier-SMS und Berechtigungsregel           |   9 P0 + 1 P1 als Gegenbeleg | **in Vorbereitung**   |
| [P0-10](P0-10-MELDUNGEN-ALARMWEGE-SN045.md)             | ab SN-045  | Meldungsarten, Alarmwege, Anlernmodus und Status-LED             | 11 P0 + 2 P1 als Gegenbelege | **in Vorbereitung**   |
| [EN-01](EN-01-LANGUAGE-REVIEW-SN045.md)                 | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 01–05          |           5 Aufgabenentwürfe | Review offen          |
| [EN-02](EN-02-LANGUAGE-REVIEW-SN045.md)                 | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 06–10          |           5 Aufgabenentwürfe | Review offen          |
| [EN-03](EN-03-LANGUAGE-REVIEW-SN045.md)                 | ab SN-045  | Unabhängiger englischer Sprachreview für Aufgaben 11–14          |           4 Aufgabenentwürfe | Review offen          |

Die Paket-ID ist in `/review` suchbar. Quellen der Generation ab SN-045 erscheinen in
einem Paket bis SN-044 ausschließlich als gekennzeichnete Gegenquelle; ihre Werte werden
nicht übernommen. Umgekehrt gilt dasselbe: P0-06 bis P0-10 führen Werte bis SN-044 nur
als Gegenquelle.

**P0-06 bis P0-10 sind noch nicht zum Fachreview freigegeben.** Sie existieren, damit
kein sicherheitskritisches Segment ohne Entscheidungszuordnung bleibt, bündeln aber
Erstextraktionen, deren PDF-Seiten auf `extracted` statt `validated` stehen. Sie wechseln
erst nach der unabhängigen Gegenprüfung der Seiten 5–25 auf „bereit für Fachreview".
Zusammen decken sie die 60 sicherheitskritischen Segmente der Generation ab SN-045 mit
89 Einzelentscheidungen ab.

EN-01 bis EN-03 sind davon getrennt: Sie prüfen ausschließlich die sprachliche
Übertragung des deutschen Masters ab SN-045 und verleihen keine technische Freigabe.
