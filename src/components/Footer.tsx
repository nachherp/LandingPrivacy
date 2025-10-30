import React from "react";
import styles from "./Footer.module.css";
import { landingData } from "../data/landingData";

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const { siteName, whatsappNumber, privacyNotice } = landingData;

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <strong>{siteName}</strong>
            <div className={styles.small}>Automatización de WhatsApp para negocios locales</div>
          </div>

          <div className={styles.contact}>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              {whatsappNumber}
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <nav className={styles.links}>
            <a href="#privacy">{privacyNotice.title}</a>
            <a href="#how">Cómo funciona</a>
            <a href="#results">Resultados</a>
          </nav>

          <div className={styles.copy}>© {year} {siteName}. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
