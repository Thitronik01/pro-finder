#!/usr/bin/env python3
"""Rendert einen Ausschnitt einer PDF-Seite hoch aufgeloest als PNG.

Ergaenzung zu render-pdf-pages.py fuer die Faelle, in denen 150 dpi auf einer
A4-Seite nicht ausreichen: Flaggen, LED-Farben, Kabelfarben, Fussnoten,
Tabellenkoepfe, aufgedruckte Seitenzahlen. Ohne dieses Werkzeug wird bei solchen
Details geraten - und genau das verbietet der Projektauftrag.

Der Ausschnitt wird in relativen Koordinaten angegeben (0.0 bis 1.0), damit der
Aufruf unabhaengig vom Seitenformat bleibt. 0,0 ist oben links.

Aufruf:
    python scripts/crop-pdf-region.py <pdf> <seite> <x0> <y0> <x1> <y1> <ziel.png> [dpi]

Beispiel - obere linke Ecke der Seite 101 bei 400 dpi:
    python scripts/crop-pdf-region.py \\
        sources/pdf/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf \\
        101 0.25 0.30 0.60 0.40 tmp/zoom/s101-flagge.png 400

Wie render-pdf-pages.py liest das Werkzeug die Originale ausschliesslich und
gehoert nicht zum Build.
"""

import pathlib
import sys

import fitz  # PyMuPDF


def main() -> int:
    if len(sys.argv) < 8:
        print(__doc__)
        return 2

    pdf_path = pathlib.Path(sys.argv[1])
    page_no = int(sys.argv[2])
    x0, y0, x1, y1 = (float(v) for v in sys.argv[3:7])
    out_path = pathlib.Path(sys.argv[7])
    dpi = int(sys.argv[8]) if len(sys.argv) > 8 else 400

    if not pdf_path.is_file():
        print(f"FEHLER: {pdf_path} nicht gefunden.")
        return 1
    if not (0.0 <= x0 < x1 <= 1.0 and 0.0 <= y0 < y1 <= 1.0):
        print("FEHLER: Koordinaten muessen 0.0 <= x0 < x1 <= 1.0 und 0.0 <= y0 < y1 <= 1.0 erfuellen.")
        return 1

    doc = fitz.open(pdf_path)
    if page_no < 1 or page_no > doc.page_count:
        print(f"FEHLER: Seite {page_no} liegt ausserhalb von 1-{doc.page_count}.")
        doc.close()
        return 1

    page = doc[page_no - 1]
    r = page.rect
    clip = fitz.Rect(
        r.x0 + x0 * r.width,
        r.y0 + y0 * r.height,
        r.x0 + x1 * r.width,
        r.y0 + y1 * r.height,
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pix = page.get_pixmap(dpi=dpi, clip=clip)
    pix.save(out_path)
    print(
        f"S.{page_no} Ausschnitt ({x0}, {y0})-({x1}, {y1}) bei {dpi} dpi | "
        f"{pix.width}x{pix.height} px | {out_path}"
    )

    doc.close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
