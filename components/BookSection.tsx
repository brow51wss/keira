"use client";

import { useState } from "react";
import { eventTypes, links, serviceOptions } from "@/lib/content";
import ui from "./ui.module.css";
import styles from "./BookSection.module.css";

export default function BookSection() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get("name") ?? "";
    setFirstName(String(name).trim().split(" ")[0]);
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setFirstName("");
  };

  return (
    <section id="book" className={ui.section}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.intro}>
            <p className={ui.eyebrow}>Contact / Book</p>
            <h2 className={styles.title}>Let&apos;s create something amazing</h2>
            <p className={styles.sub}>
              Connect now and I&apos;ll be very glad to help you.
            </p>
          </div>

          {sent ? (
            <div className={styles.sent} role="status">
              <p className={styles.thanks}>Thank you, {firstName}!</p>
              <p className={styles.sentText}>
                Your inquiry has been received. Host Keira will get back to
                you soon about your event.
              </p>
              <button type="button" className={styles.again} onClick={reset}>
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit}>
              <input
                required
                name="name"
                placeholder="Full name *"
                autoComplete="name"
                className={`${styles.input} ${styles.wide}`}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email address *"
                autoComplete="email"
                className={styles.input}
              />
              <input
                name="phone"
                placeholder="Phone / mobile"
                autoComplete="tel"
                className={styles.input}
              />
              <select
                required
                name="service"
                defaultValue=""
                className={`${styles.input} ${styles.select}`}
              >
                <option value="">Service *</option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <select
                name="type"
                defaultValue=""
                className={`${styles.input} ${styles.select}`}
              >
                <option value="">Event type</option>
                {eventTypes.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <input
                type="date"
                name="date"
                aria-label="Event date"
                className={`${styles.input} ${styles.select} ${styles.wide} ${styles.date}`}
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your event"
                className={`${styles.input} ${styles.wide} ${styles.textarea}`}
              />
              <button type="submit" className={styles.submit}>
                Send Inquiry →
              </button>
            </form>
          )}
        </div>

        <div className={styles.right}>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Message</span>
            <a
              href={links.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.itemLink}
            >
              Messenger · HostKeira
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Instagram</span>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.itemLink}
            >
              @host.keira
            </a>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Location</span>
            <span className={styles.itemText}>
              Malolos, Bulacan, Philippines 3000
            </span>
          </div>
          <div className={styles.item}>
            <span className={styles.itemLabel}>Availability</span>
            <span className={styles.itemText}>Always open for inquiries</span>
          </div>
          <a
            href={links.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.chat}
          >
            Chat on Messenger →
          </a>
        </div>
      </div>
    </section>
  );
}
