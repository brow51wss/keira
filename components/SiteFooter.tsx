import { links } from "@/lib/content";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.script}>Host Keira</span>
          <span className={styles.tag}>Dream Big Events Management</span>
        </div>
        <div className={styles.links}>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={links.messenger} target="_blank" rel="noopener noreferrer">
            Messenger
          </a>
        </div>
        <span className={styles.copy}>© 2026 Host Keira</span>
      </div>
    </footer>
  );
}
