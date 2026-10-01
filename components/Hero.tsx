import Image from "next/image";
import ui from "./ui.module.css";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={ui.eyebrowDark}>
            Dream Big Events Management ·{" "}
            <span className={styles.nowrap}>Malolos, Bulacan</span>
          </p>
          <h1 className={styles.title}>
            Your Moment.
            <br />
            Your Story.
            <br />
            <span className={styles.script}>My Stage.</span>
          </h1>
          <p className={styles.lead}>
            A Certified Events Hosting &amp; Events Mgmt. Services Provider,
            Certified Inspirational Speaker and Certified Trainer.
          </p>
          <div className={styles.actions}>
            <a href="#book" className={ui.btnGold}>
              Book Host Keira →
            </a>
            <a href="#services" className={ui.btnOutline}>
              View Services
            </a>
          </div>
        </div>
        <div className={styles.photo}>
          <Image
            src="/assets/hero.webp"
            alt="Host Keira smiling, holding a microphone at an event"
            fill
            priority
            sizes="(max-width: 879px) 100vw, 620px"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
