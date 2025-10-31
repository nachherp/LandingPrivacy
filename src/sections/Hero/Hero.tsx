import React from "react";
import styles from "./Hero.module.css";
import { landingData } from "../../data/landingData";
import Plasma from './plasma';
import { Link } from "react-router-dom";


export default function Hero(): JSX.Element {
  const { hero, whatsappNumber, siteName } = landingData;

  const openWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    // Normaliza el número: elimina caracteres no numéricos (dejar el + también está ok para wa.me)
    const onlyDigits = whatsappNumber.replace(/\D/g, "");
    const waUrl = `https://wa.me/${onlyDigits}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">

      <div style={{ width: '100%', height: ' 0px', position: 'relative', zIndex: -1 }}>
        <Plasma
          color="#25D366"
          speed={0.6}
          direction="pingpong"
          scale={1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      <div className={styles.container}>

        <div className={styles.left}>
          <div className={styles.kicker}>{siteName}</div>

          <h1 id="hero-heading" className={styles.headline}>
            {hero.headline}
          </h1>
          <p className={styles.subhead}>{hero.subheadline}</p>

          <div className={styles.ctaRow}>
<Link to="/contact" className={styles.primaryBtn}>
  {hero.cta}
</Link>


            <button className={styles.whatsappBtn} onClick={openWhatsApp} aria-label="Abrir WhatsApp">
              <svg
                className={styles.whatsappIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 .01 4.964.01 11.1c0 1.948.51 3.852 1.48 5.55L0 24l7.7-2.02A11.93 11.93 0 0012 22.2c6.627 0 11.99-4.964 11.99-11.1 0-3.01-1.17-5.83-3.47-7.62z"
                  fill="#25D366"
                />
                <path
                  d="M17.01 14.29c-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.58.13s-.66.83-.81.99c-.15.16-.31.18-.57.06-.26-.13-1.08-.4-2.06-1.27-.76-.66-1.27-1.48-1.42-1.74-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.43.13-.14.17-.24.26-.4.09-.16.04-.3-.02-.43-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.49-.01c-.17 0-.44.06-.67.3s-.88.86-.88 2.09.9 2.42 1.03 2.59c.13.17 1.79 2.73 4.34 3.83 2.42 1.04 2.42.69 2.86.65.46-.05 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.22-.06-.12-.24-.17-.5-.3z"
                  fill="#fff"
                />
              </svg>
              <span className={styles.whatsappLabel}>Abrir WhatsApp</span>
            </button>
          </div>

          <ul className={styles.metrics} aria-hidden>
            <li> Respuestas en segundos</li>
            <li> Instalación en 48 h</li>
            <li> +20–40% reservas confirmadas</li>
          </ul>
        </div>

        <div className={styles.right}>
          {/* Imagen ilustrativa. Coloca la imagen en /public/assets/images/hero-whatsapp.png */}
          <img
            src={hero.image}
            alt="Ejemplo de automatización de WhatsApp"
            className={styles.heroImage}
            onError={(e) => {
              // Fallback si la imagen no carga
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className={styles.cardShadow} aria-hidden />
        </div>
      </div>

    </section>
  );
}
