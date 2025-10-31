// src/Home.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import ProblemPromise from "./sections/ProblemPromise/ProblemPromise";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import ResultsOffer from "./sections/ResultsOffer/ResultsOffer";

export default function Home(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (!location.hash) return;
      const id = location.hash.replace("#", "");
      // Espera un poco para que todo el DOM de la página se haya renderizado
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          // Ajusta el bloque si tu header sticky lo tapa
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback: intenta scroll por name
          const byName = document.getElementsByName(id)[0] as HTMLElement | undefined;
          if (byName) byName.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120); // 120ms suele ser suficiente; aumenta a 250ms si tu DOM es pesado
    };

    scrollToHash();
  }, [location]);

  return (
    <>
      <Hero />
      <ProblemPromise />
      <HowItWorks />
      <ResultsOffer />
    </>
  );
}
