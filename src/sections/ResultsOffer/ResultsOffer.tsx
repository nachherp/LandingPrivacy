import React from "react";
import styles from "./ResultsOffer.module.css";
import { landingData } from "../../data/landingData";

export default function ResultsOffer(): JSX.Element {
  const { resultsOffer } = landingData;

  return (
    <section id="results" className={styles.section} aria-labelledby="results-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="results-title" className={styles.title}>
            {resultsOffer.title}
          </h2>
          <p className={styles.lead}>Resultados claros, métricas que puedes medir desde el primer mes.</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.benefits}>
            <ul className={styles.benefitList}>
              {resultsOffer.benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <span className={styles.check} aria-hidden>✔</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className={styles.smallNote}>
              <strong>Incluye:</strong> plantillas por rubro, recordatorios automáticos y soporte básico.
            </div>
          </div>

          <aside className={styles.offerCard} aria-labelledby="offer-title">
            <div className={styles.priceRow}>
              <div>
                <div id="offer-title" className={styles.offerTitle}>Plan Negocio Local</div>
                <div className={styles.offerSubtitle}>Sin permanencia — Instalación única</div>
              </div>
              <div className={styles.price}>
                <div className={styles.amount}>$120000 / mes</div>
              </div>
            </div>

            <ul className={styles.offerBullets}>
              <li>Flujos preconfigurados</li>
              <li>Recordatorios automáticos</li>
              <li>Soporte por WhatsApp</li>
            </ul>

            <a
              className={styles.primaryBtn}
              href={`https://wa.me/${landingData.whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar con demo
            </a>

            <div className={styles.guarantee}>
              <small>Prueba sin riesgo — cancelas cuando quieras.</small>
            </div>
          </aside>
        </div>

        <div className={styles.testimonial} aria-label="Testimonial">
          <blockquote className={styles.quote}>
            “{resultsOffer.testimonial.quote}”
          </blockquote>
          <div className={styles.credit}>
            — <strong>{resultsOffer.testimonial.author}</strong>, {resultsOffer.testimonial.company}
          </div>
        </div>
      </div>
    </section>
  );
}
