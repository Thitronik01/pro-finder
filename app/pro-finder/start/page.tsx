import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './start.module.css';

export const metadata: Metadata = {
  title: 'Anleitung für den Pro-finder',
  description:
    'Barrierefreie Anleitung für den THITRONIK Pro-finder: Gerätegeneration wählen (bis SN-044 oder ab SN-045), Sprache wählen, häufige Aufgaben, Support und PDF-Download.',
};

export default function StartPage() {
  return (
    <>
      <h1>Anleitung für den Pro-finder</h1>
      <p>
        Der Pro-finder ist ein Ortungssystem von THITRONIK. Auf dieser Seite finden Sie die passende
        Anleitung für Ihr Gerät – als barrierefreie HTML-Seiten zum Lesen am Bildschirm, mit
        Screenreader oder Tastatur. Die Original-PDFs bleiben zusätzlich als Download verfügbar.
      </p>
      <p>
        <strong>Hinweis:</strong> Dies ist ein interner Pilot. Inhalte, die noch nicht fachlich
        geprüft sind, sind deutlich als „Entwurf“ oder „in Vorbereitung“ gekennzeichnet.
      </p>

      <section aria-labelledby="sn-heading">
        <h2 id="sn-heading">Schritt 1: Ihre Gerätegeneration bestimmen</h2>
        <p>
          Es gibt zwei Gerätegenerationen des Pro-finder. Welche Anleitung für Sie gilt, hängt von
          der <strong>Seriennummer</strong> Ihres Geräts ab:
        </p>
        <ul>
          <li>
            Ist Ihr Gerät oder die zugehörige Anleitung eindeutig dem Bereich{' '}
            <strong>bis SN-044</strong> zugeordnet, wählen Sie diese Generation.
          </li>
          <li>
            Ist Ihr Gerät oder die zugehörige Anleitung eindeutig dem Bereich{' '}
            <strong>ab SN-045</strong> zugeordnet, wählen Sie diese Generation.
          </li>
        </ul>
        <p className={styles.draftNote}>
          <strong>Nicht anhand anderer Ziffern raten:</strong> Der genaue Fundort und die Leseregel
          der Seriennummer sind noch nicht technisch bestätigt. Wenn die Zuordnung auf Ihrem Gerät
          oder in Ihren Unterlagen nicht eindeutig ist, verwenden Sie noch keine versionsabhängigen
          Montage- oder Bedienschritte. Eine bebilderte, geprüfte Hilfe ist in Vorbereitung.
        </p>
        <p className={styles.sourceNote}>
          Quellenstatus: Die Grenze bis SN-044 / ab SN-045 ist im Projektauftrag und in den
          offiziellen Dokumentvarianten belegt; Fundort und Leseregel am Gerät sind noch offen.
        </p>
      </section>

      <section aria-labelledby="auswahl-heading">
        <h2 id="auswahl-heading">Schritt 2: Anleitung auswählen</h2>
        <ul className={styles.choiceList}>
          <li className={styles.choiceCard}>
            <h3>
              <Link href="/pro-finder/sn-001-044/de">Anleitung bis SN-044 (Deutsch)</Link>
            </h3>
            <p>
              Für Geräte der ersten Generation. Vollständige Bedienungs- und Montageanleitung als
              HTML, in Aufbereitung.
            </p>
          </li>
          <li className={styles.choiceCard}>
            <h3>
              <Link href="/pro-finder/sn-045-plus/de">Anleitung ab SN-045 (Deutsch)</Link>
            </h3>
            <p>
              Für Geräte der aktuellen Generation. Kurzanleitung und vollständige Anleitung als
              HTML, in Aufbereitung.
            </p>
          </li>
          <li className={styles.choiceCard}>
            <h3>
              <Link href="/pro-finder/sn-045-plus/en">Manual from SN-045 (English)</Link>
            </h3>
            <p lang="en">
              English pilot version for devices from serial number range SN-045. Translation in
              review.
            </p>
          </li>
        </ul>
        <p>
          Auf jeder Seite wird die gewählte Gerätegeneration deutlich angezeigt. Ein Wechsel der
          Generation wird immer ausdrücklich bestätigt, damit Anleitungen nicht vermischt werden.
        </p>
      </section>

      <section aria-labelledby="aufgaben-heading">
        <h2 id="aufgaben-heading">Häufige Aufgaben (ab SN-045, Deutsch)</h2>
        <ul>
          <li>
            <Link href="/pro-finder/sn-045-plus/de/status-led">Status-LED verstehen</Link>
          </li>
          <li>
            <Link href="/pro-finder/sn-045-plus/de/sim-karte">SIM-Karte einlegen</Link>
          </li>
          <li>
            <Link href="/pro-finder/sn-045-plus/de/app-und-aktivierung">
              THITRONIK App verbinden und Gerät aktivieren
            </Link>
          </li>
          <li>
            <Link href="/pro-finder/sn-045-plus/de/fehlerbehebung">Fehlerbehebung</Link>
          </li>
        </ul>
      </section>

      <section aria-labelledby="support-heading">
        <h2 id="support-heading">Support</h2>
        <p>
          Wenn Sie nicht weiterkommen, hilft der THITRONIK Support. Die barrierefreien
          Kontaktangaben (Telefon, E-Mail, Erreichbarkeit) werden derzeit mit THITRONIK abgestimmt
          und hier ergänzt.
        </p>
      </section>

      <section aria-labelledby="pdf-heading">
        <h2 id="pdf-heading">Original-Anleitungen als PDF (Sekundärweg)</h2>
        <p>
          Die HTML-Anleitung ist der empfohlene Zugang. Die offiziellen PDF-Dokumente von
          thitronik.de bleiben als Quelle und Download verfügbar. Hinweis: Die PDFs sind nur
          eingeschränkt barrierefrei (u. a. fehlende Lesezeichen, teils nicht extrahierbarer Text).
        </p>
        <ul>
          <li>
            <a href="https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro_finder-kurzanleitung-international.pdf">
              Kurzanleitung bis SN-044 (PDF, ca. 1,2 MB, mehrsprachig)
            </a>
          </li>
          <li>
            <a href="https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro-finder_-_bedienungs-_und_montageanleitung_2.6_01.pdf">
              Bedienungs- und Montageanleitung bis SN-044 (PDF, ca. 1,4 MB, Deutsch)
            </a>
          </li>
          <li>
            <a href="https://www.thitronik.de/fileadmin/user_upload/downloads/fahrzeugortung/anleitungen/pro_finder-kurzanleitung-international_sn-045.pdf">
              Kurzanleitung ab SN-045 (PDF, ca. 4,4 MB, mehrsprachig)
            </a>
          </li>
          <li>
            <a href="https://www.thitronik.de/fileadmin/user_upload/downloads/gaswarner/anleitungen/pro-finder_ab_sn045_bedienungs_und_installationsanleitung_zehn_sprachen.pdf">
              Bedienungs- und Installationsanleitung ab SN-045 (PDF, ca. 10 MB, zehn Sprachen)
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
