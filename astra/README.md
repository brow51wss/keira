# Host Keira — one-page website

A responsive static website based on Moodboard 02.png, WDQ.docx, and the Facebook screenshots in Host Keria.pdf.

## Included
- Introduction, about, six services, atmosphere feature, two sourced client reviews, and inquiry message builder.
- Keyboard-accessible controls, a full-screen black-and-gold mobile menu with animated links and booking CTA, responsive styling, reduced-motion support, basic search metadata and favicon.
- Service buttons preselect the inquiry service. The inquiry form creates a copyable message for Instagram; it does not send or store bookings.

## Source distinctions
- Business name, services, location, Instagram handle and testimonial text come from the supplied materials.
- Promotional wording is original website copy, not claimed verbatim client statements.
- Photography is displayed from the supplied mood board and is provisional creative imagery. Replace it with original portrait and event photographs before a public launch.
- No unverified telephone number, email address, Facebook URL, prices, event history, or credentials were invented.
- The questionnaire's proposed multi-page structure was adapted into the one-page website requested by the user.

## Files
The deployable website is in `dist/`. Serve that directory with any static web server, for example `python3 -m http.server 8000 --directory dist`.

The site uses Google Fonts with local system font fallbacks. There is no build step or framework dependency.

## Shared brand system
- `BRAND-GUIDE.md`: complete written design and implementation standards.
- `dist/brand-guide.html`: visual guide with typography, palette, and component specimens.
- `dist/brand.css`: canonical responsive tokens and reusable `hk-` components. Every new page loads this first.
- `dist/brand-guide.css`: guide presentation only.
- `dist/styles.css`: existing website layouts and integration; it consumes the shared tokens.

Open the visual guide at `/brand-guide.html` on the same local server. The updated typography is standardized at mobile ≤600px, tablet 601–1023px, and desktop ≥1024px. These are the forward-looking defaults, superseding prototype-specific sizes.
