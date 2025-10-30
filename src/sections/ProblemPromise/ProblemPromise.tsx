import styles from "./ProblemPromise.module.css";
import { landingData } from "../../data/landingData";

export default function ProblemPromise(): JSX.Element {
  const { problemPromise } = landingData;

  return (
    <section id="problem" className={styles.section} aria-labelledby="problem-title">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 id="problem-title" className={styles.title}>
            {problemPromise.title}
          </h2>

          {problemPromise.paragraphs.map((p, idx) => (
            <p key={idx} className={styles.paragraph}>
              {p}
            </p>
          ))}

          <ul className={styles.bullets} aria-label="Beneficios principales">
            {problemPromise.bullets.map((b, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.bulletIcon} aria-hidden>
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Agenda más, preocúpate menos</h3>
            <p className={styles.cardText}>
              Plantillas por rubro (restaurante, clínica, taller) para que la puesta en marcha sea inmediata.
            </p>
            <a
              className={styles.cardCta}
              href={`https://wa.me/${landingData.whatsappNumber.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Probar demo por WhatsApp
            </a>
          </div>

          <div className={styles.statRow} aria-hidden>
            <div className={styles.stat}>
              <div className={styles.statValue}>48h</div>
              <div className={styles.statLabel}>Instalación</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>−35%</div>
              <div className={styles.statLabel}>No-shows</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>+20–40%</div>
              <div className={styles.statLabel}>Reservas</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>1000%</div>
              <div className={styles.statLabel}>Efectividad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
