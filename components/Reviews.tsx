import { reviews } from "@/lib/content";
import ui from "./ui.module.css";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section id="reviews" className={`${ui.section} ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.titles}>
          <p className={ui.eyebrowDark}>Testimonials</p>
          <h2 className={ui.h2}>What clients say</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r) => (
            <figure key={r.name} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                “
              </span>
              <blockquote className={styles.quote}>{r.text}</blockquote>
              <figcaption className={styles.name}>— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
