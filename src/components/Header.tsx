import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { landingData } from "../data/landingData";

export default function Header(): JSX.Element {
  const { siteName, whatsappNumber } = landingData;
  const location = useLocation();
  const navigate = useNavigate();



  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hashId: string) => {
    e.preventDefault();

    // Si ya estamos en la home, hacemos scroll suave directo
    if (location.pathname === "/") {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Actualiza la URL sin hacer navegación completa
        window.history.replaceState({}, "", `/#${hashId}`);
        return;
      }
      // Si no existe el id aún, navegamos a la misma URL con hash (fallback)
      navigate(`/#${hashId}`);
      return;
    }

    // Si estamos en otra ruta (ej: /privacy), navegamos a home con hash.
    navigate(`/#${hashId}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={`${siteName} - Inicio`}>
          <div className={styles.logoMark} aria-hidden>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#25D366" />
              <path d="M6 12.2c1.8-3 5-3 6.4-1.2L18 6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={styles.siteName}>{siteName}</span>
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          {/* NOTA: usamos rutas con hash para facilitar la navegación a secciones internas */}
          <Link to="/#problem" className={styles.link} onClick={(e) => handleHashClick(e as any, "problem")}>
            Problema
          </Link>
          <Link to="/#how" className={styles.link} onClick={(e) => handleHashClick(e as any, "how")}>
            Cómo funciona
          </Link>
          <Link to="/#results" className={styles.link} onClick={(e) => handleHashClick(e as any, "results")}>
            Resultados
          </Link>
          {/* Esta es la ruta separada */}
          <Link to="/privacy" className={styles.link}>Aviso</Link>
        </nav>

        <div className={styles.actions}>
          <Link to="/#hero-heading" className={styles.cta} onClick={(e) => handleHashClick(e as any, "hero-heading")}>
            {landingData.hero.cta}
          </Link>

          <a
            className={styles.waMini}
            href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 .01 4.964.01 11.1c0 1.948.51 3.852 1.48 5.55L0 24l7.7-2.02A11.93 11.93 0 0012 22.2c6.627 0 11.99-4.964 11.99-11.1 0-3.01-1.17-5.83-3.47-7.62z" fill="#25D366"/>
              <path d="M17.01 14.29c-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.58.13s-.66.83-.81.99c-.15.16-.31.18-.57.06-.26-.13-1.08-.4-2.06-1.27-.76-.66-1.27-1.48-1.42-1.74-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.43.13-.14.17-.24.26-.4.09-.16.04-.3-.02-.43-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.49-.01c-.17 0-.44.06-.67.3s-.88.86-.88 2.09s.9 2.42 1.03 2.59c.13.17 1.79 2.73 4.34 3.83c2.42 1.04 2.42.69 2.86.65.46-.05 1.5-.61 1.71-1.2c.21-.6.21-1.11.15-1.22-.06-.12-.24-.17-.5-.3z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
