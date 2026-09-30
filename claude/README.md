# Handoff: Host Keira — One-Page Website

## Overview
A single-page marketing and booking website for **Host Keira — Dream Big Events Management** (professional event host/emcee, events management, inspirational speaker, trainer; Malolos, Bulacan, Philippines). Primary goal: drive event inquiries/bookings. Secondary: showcase services, past events and reviews, and route visitors to Messenger/Instagram.

## About the Design Files
Files in `design/` are **design references built in HTML** — prototypes showing the intended look and behavior, not production code. Recreate them in the target environment. No codebase exists yet; a static-site stack is recommended (Astro, Next.js static export, or plain HTML + `host-keira.css`). Use `host-keira.css` (root of this folder) as the production stylesheet — it is the source of truth for tokens and base styles.

To view the prototypes, serve the `design/` folder locally (e.g. `npx serve design`) and open `Host Keira.dc.html` and `Host Keira Brand Guide.dc.html`. They need `support.js` beside them. Prototypes use inline styles; production should use the classes/variables in `host-keira.css`.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy and interactions. Recreate pixel-accurately. Only photography is missing (placeholders).

## Global
- Page bg `#F5EBD7`, text `#141210`, fonts loaded from Google Fonts:
  `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@400;500;600&family=Great+Vibes&display=swap`
- `html { scroll-behavior: smooth }`. All in-page links are anchors (`#about`, `#services`, `#events`, `#reviews`, `#book`, `#top`).
- Square corners everywhere (radius 0). Only exception: floating Messenger pill (radius 999px).
- Sections alternate light/dark: Header (dark) → Hero (dark) → About (beige) → Services (ivory) → Quote (dark) → Events (beige) → Reviews (dark) → Book (beige, card with dark panel) → Footer (dark).
- Section padding: `clamp(72px, 10vw, 128px) 28px`. Content container 1140px, header/hero/footer 1240px, centered.
- Section header pattern: eyebrow (Montserrat 12px, 500, 0.22em, uppercase, `#8A6D1F` on light / `#D4AF37` on dark) → 14–16px gap → H2 (Playfair 400, `clamp(34px,4vw,50px)`, lh 1.12).

## Sections

### 1. Header (sticky)
- `position: sticky; top:0; z-index:20`, bg `#0B0A09`, bottom border `1px rgba(212,175,55,.25)`.
- Inner: max-width 1240, padding `14px 28px`, flex space-between, center aligned.
- Logo (links `#top`): "HOST" Playfair 13px, letter-spacing .32em + 8px gap + "Keira" Great Vibes 38px; both `#D4AF37`, baseline aligned, nowrap.
- **Desktop (≥860px):** nav links About / Services / Events / Reviews — Montserrat 12px, 0.12em, uppercase, `#F5EBD7`, nowrap, gap `clamp(14px,2vw,26px)`; then "Book Now" button (gold bg `#D4AF37`, text `#0B0A09`, 12px 600, 0.14em, padding 11×18; hover `#E6C458`).
- **Mobile (<860px):** "Book" button (11px, padding 11×14) + 44×44 menu button (transparent, 1px border `rgba(212,175,55,.5)`, gold "☰" / "✕" glyph 18px). See Mobile Menu below.

### 2. Hero
- bg `#0B0A09`. Two-column grid `repeat(auto-fit, minmax(min(100%,440px),1fr))` — stacks on mobile.
- Left column (padding `clamp(56px,9vw,120px) 28px clamp(56px,8vw,110px)`, flex column, gap 28, vertically centered):
  - Eyebrow: "Dream Big Events Management · Malolos, Bulacan" (gold, 12px, .22em; keep "Malolos, Bulacan" on one line).
  - H1: "Your Moment." / "Your Story." / "My Stage." — Playfair 400, `clamp(44px,6vw,76px)`, lh 1.04, `#F5EBD7`. "My Stage." in Great Vibes, gold, 1.25em, lh 1.
  - Body: "A Certified Events Hosting & Events Mgmt. Services Provider, Certified Inspirational Speaker and Certified Trainer." 16px, lh 1.7, `#D9D0BE`, max-width 440.
  - Buttons (gap 14, wrap): Primary "Book Host Keira →" → `#book`; Outline "View Services" → `#services`.
- Right column: full-bleed photo, min-height 520px, `object-fit: cover`. **Asset needed:** hero portrait of Keira on stage with mic.

### 3. About (`#about`)
- 2-col auto-fit grid (min 380px), gap `clamp(40px,6vw,88px)`, centered.
- Image: aspect 4/5, max-width 480, with a decorative 1px `#D4AF37` frame offset 18px right/down behind the photo. **Asset:** professional headshot.
- Text column (gap 22): eyebrow "About Host Keira"; H2 "Professional. Passionate.<br>Purpose-driven."; gold line element (120px: line – 6px dot – line); two paragraphs (16px, lh 1.8, `#3A3530`):
  - "Dream Big Events Management by Host Keira provides professional event hosting, events management, inspirational speaking and training for occasions that deserve to be remembered."
  - "Every event gets the same energy, warmth and preparation, so your guests stay engaged and your program runs the way you pictured it." *(copy pending client approval)*
  - Facts row with top border `1px rgba(20,18,16,.12)`: label (11px, .18em, caps, `#6B6B6B`) + value (Playfair 19px): "Category — Event Planner", "Background — BSBA, Marketing Management".

### 4. Services (`#services`)
- bg `#FBF6EC`, top border hairline. Header row: eyebrow "Services", H2 "Tailored to your event"; right-aligned intro (15px, max-width 420): "From hosting and event management to inspirational talks and training, in person or online."
- Grid `repeat(auto-fit, minmax(min(100%,300px),1fr))` with 1px gaps on `rgba(20,18,16,.12)` background (hairline grid), outer 1px border.
- Cell: bg `#FBF6EC` (hover `#F5EBD7`), padding `36px 32px 40px`, min-height 220, gap 14. Number (Playfair 14px, `#8A6D1F`, .1em) → H3 (Playfair 500, 24px, lh 1.25) → body (14.5px, lh 1.7, `#4A443D`).
  1. 01 Event Hosting / Emcee — "Weddings, debuts, birthdays and corporate programs, hosted with energy and warmth from opening to send-off."
  2. 02 Events Management — "Planning and on-the-day coordination so your program, suppliers and timeline stay on track."
  3. 03 Inspirational Speaking — "Talks for schools, organizations and companies that leave audiences motivated."
  4. 04 Training — "Certified trainer for workshops and seminars on hosting, presenting and personal development."
  5. 05 In-Person Classes — "Hands-on sessions for aspiring hosts and speakers, held face to face."
  6. 06 Online Classes — "The same coaching delivered live online, wherever you are."
  *(descriptions pending client approval)*
- Dark button "Inquire Now →" → `#book`.

### 5. Quote band
- bg `#0B0A09`, centered, padding `clamp(80px,11vw,140px) 28px`, max-width 880, gap 28.
- Script "Your Celebration, My Stage" (Great Vibes, `clamp(46px,6vw,78px)`, gold); italic line "Giving you the finest & quality event experience you'll never forget." (Playfair italic, `clamp(20px,2.2vw,26px)`, `#E8DFCC`); signature "— HOST KEIRA —" with 48px gold rules either side (12px, .24em).

### 6. Recent Events (`#events`)
- Header row: eyebrow "Recent Events", H2 "Real moments on stage"; link "More on Facebook →" → https://www.facebook.com/HostKeira (new tab).
- Grid `repeat(auto-fit, minmax(min(100%,240px),1fr))`, gap 16; 4 tiles aspect 3/4. **Assets:** 4 event photos (celebration, corporate, crowd/venue, speaking/training). Could later become a full gallery/lightbox.

### 7. Testimonials (`#reviews`)
- bg `#0B0A09`. Eyebrow "Testimonials", H2 "What clients say".
- Grid auto-fit min 420, gap 24. Card: 1px `rgba(212,175,55,.35)` border, padding `40px 36px`, gap 24; gold “ (Playfair 56px); quote Playfair 22px lh 1.5 `#F5EBD7`; caption 12px .18em caps gold.
  - "Super the best host/emcee ever! You are awesome! Lahat ng guests mapapabilib talaga!" — Crystal Gard
  - "Highly recommend for all your hosting needs. Very entertaining and energetic host!" — Loida Sakay Santiago
  *(verbatim from Facebook reviews — keep as-is, including Tagalog)*

### 8. Contact / Book (`#book`)
- Outer card: max 1140, bg `#FBF6EC`, 1px hairline, 2-col auto-fit (min 420).
- **Left (form)** padding `clamp(32px,5vw,56px)`: eyebrow "Contact / Book"; H2 "Let's create something amazing" (`clamp(30px,3.4vw,42px)`); "Connect now and I'll be very glad to help you."
  - Form grid auto-fit min 200, gap 14. Inputs: padding 15×16, 14px, white bg, 1px `rgba(20,18,16,.18)`, focus border `#D4AF37`, placeholder `#8A8378`.
  - Fields: Full name* (full width), Email* (type email), Phone/mobile, Service* (select: Event Hosting / Emcee, Events Management, Inspirational Speaking, Training, In-Person Classes, Online Classes), Event type (Wedding, Birthday / Debut, Corporate event, School / Seminar, Other), Event date (date, full width), Message (textarea 4 rows, full width), submit "Send Inquiry →" (primary).
- **Right (dark panel)** bg `#0B0A09`, gap 30: label/value pairs (label 11px .2em gold caps; value Playfair 21px `#F5EBD7`, link hover gold):
  - Message — "Messenger · HostKeira" → https://m.me/HostKeira
  - Instagram — "@host.keira" → https://www.instagram.com/host.keira
  - Location — "Malolos, Bulacan, Philippines 3000"
  - Availability — "Always open for inquiries"
  - Outline button "Chat on Messenger →" pinned to bottom.

### 9. Footer
- bg `#0B0A09`, top border gold 25%. Row (wrap, space-between): "Host Keira" Great Vibes 34px gold + "Dream Big Events Management" (11px caps); links Facebook / Instagram / Messenger (12px caps gold); "© 2026 Host Keira".

### 10. Floating Messenger button
- Fixed bottom-right 22px, z-index 30, gold pill, "Message Keira" (12px 600 .12em caps), padding 14×20, shadow `0 8px 24px rgba(0,0,0,.25)` → https://m.me/HostKeira. Hidden while mobile menu is open. Toggleable (prop `showMessengerButton`, default on).

## Interactions & Behavior

### Mobile menu (<860px)
- Menu button toggles a **full-screen overlay** positioned `fixed` from the header's bottom edge to viewport bottom (z-index 25), bg `#0B0A09`, scrollable.
- Contents (padding `36px 28px 32px 56px`, flex column, gap 36):
  - Script "Your Moment. Your Story." (Great Vibes 30px gold).
  - Links 01–05: About, Services, Events, Reviews, Contact(`#book`). Each: number (Playfair 13px gold, 22px wide) + label (Playfair `clamp(36px,10vw,52px)`, lh 1.05, `#F5EBD7`, hover gold), padding 10px 0.
  - Primary "Book Host Keira" with a 28px onyx rule after the text.
  - Footer block (top border gold 20%): "Malolos, Bulacan · Always open" + Messenger / Instagram / Facebook links.
  - Decorative: oversized "Keira" Great Vibes 260px at `rgba(212,175,55,.07)` bleeding off bottom-right; 1px vertical gold line at left 28px fading to transparent.
- Animation on open: overlay opacity 0→1 (.35s ease); gold line `scaleY 0→1` from top (.8s ease); links fade + slide from `translateX(-24px)` (opacity .5s ease, transform .6s `cubic-bezier(.2,.7,.2,1)`), staggered delays 0.08s + 0.06s × index; Book button delay .45s; footer block .55s.
- While open: `body { overflow: hidden }`; floating Messenger button hidden. Tapping any link closes the menu. Resizing to ≥860px closes it. Add Escape-to-close and focus trap in production; `aria-expanded` on the button.

### Booking form
- HTML5 validation on required fields (name, email, service). On submit, prototype replaces the form with a thank-you panel: script "Thank you, {firstName}!" (Great Vibes 40px `#8A6D1F`), "Your inquiry has been received. Host Keira will get back to you soon about your event.", and a text button "Send another inquiry" that resets.
- **Production:** wire to a real backend (Formspree / Netlify Forms / email API). Add loading state on button and an error message state. Consider also sending a Messenger deep link.

### Hover states
- Primary: `#D4AF37` → `#E6C458`. Dark: `#0B0A09` → `#221F1B` (text → `#E6C458`). Outline: bg → `rgba(212,175,55,.12)`. Service cells: bg → `#F5EBD7`. Links on light: `#8A6D1F` → `#D4AF37`.

### Responsive
- Breakpoints (brand guide): Desktop ≥1024, Tablet 768–1023, Mobile ≤767. Nav collapses at <860.
- All grids use `auto-fit/minmax` so they collapse to one column naturally. Hero and About stack image below/above text on mobile.

## State
- `menuOpen` (bool), `menuShown` (bool, flipped one frame after open to trigger transitions), viewport width (for <860 switch — use a CSS media query in production instead).
- `sent` (bool), `firstName` (string) for form success state.

## Design Tokens
See `host-keira.css` (CSS variables + responsive type scale + component classes) and `design/Host Keira Brand Guide.dc.html` for the visual spec.
- **Primary** Onyx `#0B0A09` (hover `#221F1B`) · **Secondary** Gold `#D4AF37` (hover `#E6C458`, Deep Gold `#8A6D1F` for gold text on light) · **Tertiary** Beige `#F5EBD7` (Ivory `#FBF6EC`)
- Neutrals: Ink `#141210`, Text `#3A3530`, Muted `#4A443D`, Gray `#6B6B6B`, On-dark `#D9D0BE`, On-dark muted `#B8AF9E`, White `#FFFFFF`
- Lines: `rgba(20,18,16,.12)` light, `rgba(212,175,55,.35)` on dark
- Type (Desktop / Tablet / Mobile):
  - H1 Playfair 400 76/60/44 lh 1.05 · H2 Playfair 400 50/42/34 lh 1.12 · H3 Playfair 500 32/28/24 lh 1.25 · H4 Playfair 500 24/22/20 lh 1.3 · H5 Playfair 500 19/18/17 lh 1.4 · H6/Eyebrow Montserrat 500 12/12/11 .22em caps
  - Body L 17/16/16 lh 1.8 · Body 16/15/15 lh 1.7 · Body S 14/13/13 · Label 11/11/10 .2em caps · Button Montserrat 600 13/13/12 .14em caps · Quote Playfair italic 24/22/20
  - Script XL Great Vibes 78/64/46 · Script 38/34/30 (never below 28px, one per section)
- Spacing: gutter 28/28/20 · section Y 128/96/72 · gaps 16 / 24 / 56 · radius 0 · shadow only on FAB.
- Note: the prototype uses fluid `clamp()` values for H1/H2; the stylesheet uses stepped breakpoints. Either is acceptable — stay within the listed min/max.

## Assets
- **Photography (not provided — request from client):** hero portrait, about headshot, 4 event photos. Style: real event moments, warm tungsten light, bokeh, black wardrobe (see `reference/moodboard.png`).
- **Logo:** currently set in type (HOST + Keira). The client has a raster logo with a microphone mark (seen on Facebook, `reference/facebook-profile.png`); request vector files and use them in header/footer/favicon.
- No icon set used (numbered indices instead). Social links are text.

## Open items (need client confirmation)
Phone number, business email, domain, exact address, official Facebook/Instagram URLs, approval of the written service/About copy, launch date, form destination. Also add SEO meta (title, description, OG image), favicon, analytics and a privacy notice for the form.

## Files
- `host-keira.css` — production brand stylesheet (tokens, type scale, base, components).
- `design/Host Keira.dc.html` — website prototype (open via local server).
- `design/Host Keira Brand Guide.dc.html` — brand guide.
- `design/support.js`, `design/image-slot.js`, `design/host-keira.css` — runtime needed to view prototypes.
- `reference/moodboard.png` — original moodboard.
- `reference/discovery-questionnaire.docx` — completed client questionnaire.
- `reference/facebook-profile.png`, `reference/facebook-reviews.png` — source content from the Facebook page.
