import Image from "next/image";
import ui from "./ui.module.css";
import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={ui.eyebrowDark}>The feeling that stays with you</p>
          <h2 className={`${ui.h2} ${styles.title}`}>
            When the room comes alive,
            <br />
            <em className={styles.em}>the memories begin.</em>
          </h2>
          <p className={styles.body}>
            For the milestones worth celebrating.
            <br />
            The ideas worth sharing.
            <br />
            And the people who make it all matter.
          </p>
          <a href="#book" className={ui.btnOutline}>
            Tell me about your occasion
          </a>
        </div>
        <div className={styles.media}>
          <Image
            src="/assets/when-the-room-comes-alive.webp"
            alt="Host Keira on stage with a microphone, facing an engaged audience"
            fill
            sizes="(max-width: 879px) 100vw, 620px"
            className={styles.img}
          />
          <div className={styles.fade} />
        </div>
      </div>
    </section>
  );
}
