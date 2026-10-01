import Image from "next/image";
import ui from "./ui.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={ui.section}>
      <div className={styles.grid}>
        <div className={styles.photo}>
          <div className={styles.frame} />
          <Image
            src="/assets/headshot.webp"
            alt="Portrait of Host Keira"
            fill
            sizes="(max-width: 519px) 100vw, 480px"
            className={styles.img}
          />
        </div>
        <div className={styles.copy}>
          <p className={ui.eyebrow}>About Host Keira</p>
          <h2 className={ui.h2}>
            Professional. Passionate.
            <br />
            Purpose-driven.
          </h2>
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.line} />
            <span className={styles.dot} />
            <span className={styles.line} />
          </div>
          <p className={styles.body}>
            Dream Big Events Management by Host Keira provides professional
            event hosting, events management, inspirational speaking and
            training for occasions that deserve to be remembered.
          </p>
          <p className={styles.body}>
            Every event gets the same energy, warmth and preparation, so your
            guests stay engaged and your program runs the way you pictured it.
          </p>
          <div className={styles.facts}>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Category</span>
              <span className={styles.factValue}>Event Planner</span>
            </div>
            <div className={styles.fact}>
              <span className={styles.factLabel}>Background</span>
              <span className={styles.factValue}>
                BSBA, Marketing Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
