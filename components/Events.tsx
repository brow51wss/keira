import Image from "next/image";
import { eventPhotos, links } from "@/lib/content";
import ui from "./ui.module.css";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <section id="events" className={ui.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.titles}>
            <p className={ui.eyebrow}>Recent Events</p>
            <h2 className={ui.h2}>Real moments on stage</h2>
          </div>
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.more}
          >
            More on Facebook →
          </a>
        </div>
        <div className={styles.grid}>
          {eventPhotos.map((p) => (
            <div key={p.id} className={styles.tile}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 519px) 100vw, (max-width: 899px) 50vw, 280px"
                className={styles.img}
                style={{ objectPosition: p.objectPosition }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
