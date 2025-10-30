import React from "react";
import styles from "./HowItWorks.module.css";
import { landingData } from "../../data/landingData";

export default function HowItWorks(): JSX.Element {
  const { howItWorks } = landingData;

  return (
    <section id="how" className={styles.section} aria-labelledby="how-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="how-title" className={styles.title}>
            {howItWorks.title}
          </h2>
          <p className={styles.lead}>
            Implementación rápida, flujos listos por rubro y control total desde tu WhatsApp.
          </p>
        </header>

        <div className={styles.steps}>
          {howItWorks.steps.map((s, idx) => (
            <article key={idx} className={styles.step} aria-labelledby={`step-${idx}-title`}>
              <div className={styles.badge} aria-hidden>
                <span className={styles.badgeNum}>{idx + 1}</span>
              </div>

              <div className={styles.content}>
                <h3 id={`step-${idx}-title`} className={styles.stepTitle}>
                  {s.title}
                </h3>
                <p className={styles.stepDesc}>{s.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a
            href={`https://wa.me/${landingData.whatsappNumber.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Probar demo en WhatsApp
          </a>
          <a href="#problem" className={styles.ghostBtn}>
            Ver problemas resueltos
          </a>
        </div>
      </div>
    </section>
  );
}
