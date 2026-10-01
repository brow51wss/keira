"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { links, menuLinks, navLinks } from "@/lib/content";
import styles from "./SiteHeader.module.css";

const DESKTOP_QUERY = "(min-width: 860px)";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [headerH, setHeaderH] = useState(72);

  const close = useCallback(() => {
    setOpen(false);
    setShown(false);
  }, []);

  const toggle = () => {
    if (open) {
      close();
      return;
    }
    setHeaderH(headerRef.current?.getBoundingClientRect().height ?? 72);
    setOpen(true);
    setShown(false);
    // Two frames so the closed state paints first and the transitions run.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setShown(true)),
    );
  };

  // Lock page scroll and hide the Messenger button while the menu is open.
  useEffect(() => {
    if (open) {
      document.body.dataset.menuOpen = "true";
    } else {
      delete document.body.dataset.menuOpen;
    }
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  // Close the menu when the viewport grows into the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <Image
            src="/assets/logo.webp"
            alt="Host Keira — Dream Big Events Management"
            width={1536}
            height={1024}
            sizes="100px"
            priority
            className={styles.logoImg}
          />
        </a>

        {/* Mobile controls (< 860px) */}
        <div className={styles.mobileBar}>
          <a href="#book" className={styles.mobileBook} onClick={close}>
            Book
          </a>
          <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className={styles.overlay}
            data-shown={shown}
            style={{ top: headerH }}
          >
            <div className={styles.watermark} aria-hidden="true">
              Keira
            </div>
            <div className={styles.rule} aria-hidden="true" />
            <div className={styles.panel}>
              <p className={styles.tagline}>Your Moment. Your Story.</p>
              <nav className={styles.menuNav}>
                {menuLinks.map((m, i) => (
                  <a
                    key={m.href}
                    href={m.href}
                    className={styles.menuLink}
                    onClick={close}
                    style={
                      {
                        "--d": `${(0.08 + i * 0.06).toFixed(2)}s`,
                      } as React.CSSProperties
                    }
                  >
                    <span className={styles.menuNum}>0{i + 1}</span>
                    <span className={styles.menuLabel}>{m.label}</span>
                  </a>
                ))}
              </nav>
              <a href="#book" className={styles.menuBook} onClick={close}>
                Book Host Keira
                <span className={styles.menuBookLine} />
              </a>
              <div className={styles.menuFoot}>
                <span className={styles.menuLocation}>
                  Malolos, Bulacan · Always open
                </span>
                <div className={styles.menuSocial}>
                  <a
                    href={links.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Messenger
                  </a>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href={links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop nav (>= 860px) */}
        <nav className={styles.desktopNav} aria-label="Main">
          {navLinks.map((n) => (
            <a key={n.href} href={n.href} className={styles.navLink}>
              {n.label}
            </a>
          ))}
          <a href="#book" className={styles.navBook}>
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
