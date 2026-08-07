#!/usr/bin/env python3
"""Rendert Seiten eines Quell-PDFs als PNG und meldet die Textebene je Seite.

Reines Inspektionswerkzeug für die seitenweise Prüfung nach docs/IST_AUDIT.md.
Es gehört nicht zum Build und wird von `npm run check` nicht berührt. Die
Originale werden ausschließlich gelesen, nie geschrieben.

Warum Python in einem Node-Projekt: In der Arbeitsumgebung ist kein `pdftoppm`
(poppler-utils) verfügbar, PyMuPDF dagegen schon. Das Werkzeug ist bewusst
minimal gehalten, damit es austauschbar bleibt – maßgeblich sind die
Seitenrecords unter sources/pages/, nicht dieses Skript.

Aufruf:
    python scripts/render-pdf-pages.py <pdf> <von> <bis> <zielordner> [dpi]

Beispiel:
    python scripts/render-pdf-pages.py \\
        sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf \\
        101 110 tmp/pdfs/batch-101-110 150

Die Ausgabe nennt je Seite Format, Anzahl extrahierbarer Zeichen und Dateiname.
Achtung bei der Zeichenzahl: In diesem Dokument liefern 34 Seiten ausschließlich
Steuerzeichen U+0003. Eine Zahl größer null bedeutet also nicht, dass die Seite
lesbaren Text enthält – im Zweifel den Rohtext ansehen.
"""

import pathlib
import sys

import fitz  # PyMuPDF


def main() -> int:
    if len(sys.argv) < 5:
        print(__doc__)
        return 2

    pdf_path = pathlib.Path(sys.argv[1])
    first = int(sys.argv[2])
    last = int(sys.argv[3])
    out_dir = pathlib.Path(sys.argv[4])
    dpi = int(sys.argv[5]) if len(sys.argv) > 5 else 150

    if not pdf_path.is_file():
        print(f"FEHLER: {pdf_path} nicht gefunden.")
        return 1

    out_dir.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(pdf_path)

    if first < 1 or last > doc.page_count or first > last:
        print(f"FEHLER: Seitenbereich {first}-{last} liegt ausserhalb von 1-{doc.page_count}.")
        doc.close()
        return 1

    print(f"PyMuPDF {fitz.VersionBind} | {pdf_path.name} | Seiten gesamt: {doc.page_count}")

    for n in range(first, last + 1):
        page = doc[n - 1]  # 1-basiert -> 0-basiert
        text = page.get_text("text")
        lesbar = [c for c in text if c.isprintable() and not c.isspace()]
        rect = page.rect
        breite_mm = round(rect.width / 72 * 25.4)
        hoehe_mm = round(rect.height / 72 * 25.4)
        png = out_dir / f"page-{n:03d}.png"
        page.get_pixmap(dpi=dpi).save(png)
        print(
            f"S.{n}: {breite_mm}x{hoehe_mm} mm | Zeichen roh: {len(text.strip())} | "
            f"davon lesbar: {len(lesbar)} | {png.name}"
        )

    doc.close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
