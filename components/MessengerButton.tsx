import { links } from "@/lib/content";
import styles from "./MessengerButton.module.css";

export default function MessengerButton() {
  return (
    <a
      href={links.messenger}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
    >
      Message Keira
    </a>
  );
}
