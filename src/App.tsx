import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero/Hero";
import ProblemPromise from "./sections/ProblemPromise/ProblemPromise";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import ResultsOffer from "./sections/ResultsOffer/ResultsOffer";
import PrivacyNotice from "./sections/PrivacyNotice/PrivacyNotice";
import styles from "./App.module.css";
import { landingData } from "./data/landingData";

/**
 * Home component (página principal) definida aquí para mantener App.tsx simple.
 * También podría moverse a su propio archivo si prefieres.
 */
function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <ProblemPromise />
      <HowItWorks />
      <ResultsOffer />
    </>
  );
}

/** Privacy page (solo muestra el aviso en su propia ruta) */
function PrivacyPage(): JSX.Element {
  return (
    <main>
      <PrivacyNotice />
    </main>
  );
}

export default function App(): JSX.Element {
  const whatsappLink = `https://wa.me/${landingData.whatsappNumber.replace(/\D/g, "")}`;

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Si quieres soportar /avisoprivacidad como alias, agrega otra Route */}
            {/* <Route path="/avisoprivacidad" element={<PrivacyPage />} /> */}
          </Routes>
        </main>

        <Footer />

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappFloat}
          aria-label="Abrir WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 .01 4.964.01 11.1c0 1.948.51 3.852 1.48 5.55L0 24l7.7-2.02A11.93 11.93 0 0012 22.2c6.627 0 11.99-4.964 11.99-11.1 0-3.01-1.17-5.83-3.47-7.62z" fill="#25D366"/>
            <path d="M17.01 14.29c-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.58.13s-.66.83-.81.99c-.15.16-.31.18-.57.06-.26-.13-1.08-.4-2.06-1.27-.76-.66-1.27-1.48-1.42-1.74-.15-.26-.02-.4.11-.53.11-.11.26-.29.39-.43.13-.14.17-.24.26-.4.09-.16.04-.3-.02-.43-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.49-.01c-.17 0-.44.06-.67.3s-.88.86-.88 2.09s.9 2.42 1.03 2.59c.13.17 1.79 2.73 4.34 3.83c2.42 1.04 2.42.69 2.86.65.46-.05 1.5-.61 1.71-1.2c.21-.6.21-1.11.15-1.22-.06-.12-.24-.17-.5-.3z" fill="#fff"/>
          </svg>
        </a>
      </div>
    </BrowserRouter>
  );
}
