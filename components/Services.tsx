import { services } from "@/lib/content";
import ui from "./ui.module.css";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={`${ui.section} ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.titles}>
            <p className={ui.eyebrow}>Services</p>
            <h2 className={ui.h2}>Tailored to your event</h2>
          </div>
          <p className={styles.intro}>
            From hosting and event management to inspirational talks and
            training, in person or online.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.num} className={styles.card}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.body}</p>
            </div>
          ))}
        </div>
        <div>
          <a href="#book" className={ui.btnDark}>
            Inquire Now →
          </a>
        </div>
      </div>
    </section>
  );
}
