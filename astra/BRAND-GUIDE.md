# Host Keira — Website Brand Guide
Version 1.0 · 30 September 2026

## Purpose and source of truth
This is the forward-looking brand standard for the existing Host Keira website and future pages. `dist/brand.css` is the canonical token and reusable-component stylesheet. `dist/styles.css` contains the current site's layouts, menu animation, and integration rules. Use the same `brand.css` on every page.

The previous prototype used several individual sizes and similar gold shades. This guide deliberately consolidates those into a shared responsive system; it is not a pixel-by-pixel audit of the earlier prototype. H4–H6 and reusable component classes extend the existing design. The current site now consumes these tokens.

## Brand character
Warm, elegant, personal, confident, and celebratory. Pair expressive serif headings with clear sans-serif body copy. Give content room to breathe. Alternate cream editorial sections with black statement sections; gold marks a focal point rather than covering every surface.

## Typography
Use **Cormorant Garamond** for H1–H6 and **Montserrat** for body and interface text. The accent is **Cormorant Garamond italic**, not an additional script family. The original mood board proposed Playfair Display, but this guide intentionally follows the typeface implemented in the website.

Desktop: **1024px and wider**. Tablet: **601–1023px**. Mobile: **600px and narrower**. Sizes below are CSS pixels at the browser's default 16px root size; the stylesheet uses `rem`. Keep browser zoom and user text settings enabled.

| Role | Font family | Desktop | Tablet | Mobile | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---:|---|---|
| H1 | Cormorant Garamond | 88px | 68px | 60px | 400 | 1.03 | −0.04em | Page title; one H1 per page. |
| H2 | Cormorant Garamond | 60px | 48px | 40px | 400 | 1.08 | −0.035em | Main section heading. |
| H3 | Cormorant Garamond | 36px | 32px | 30px | 400 | 1.15 | −0.02em | Service or feature heading. |
| H4 | Cormorant Garamond | 28px | 26px | 24px | 500 | 1.2 | −0.01em | Subsection heading. |
| H5 | Cormorant Garamond | 24px | 22px | 20px | 500 | 1.25 | 0 | Small group heading. |
| H6 | Cormorant Garamond | 20px | 18px | 18px | 600 | 1.3 | 0 | Lowest heading level; not a label. |
| Body | Montserrat | 16px | 16px | 16px | 400 | 1.8 | 0 | Paragraphs and descriptions. |
| Lead | Montserrat | 18px | 18px | 16px | 400 | 1.8 | 0 | Short introductions. |
| Small | Montserrat | 14px | 14px | 14px | 400 | 1.7 | 0 | Supporting copy and form labels. |
| Caption | Montserrat | 12px | 12px | 12px | 400 | 1.6 | 0.02em | Secondary metadata only. |
| Eyebrow | Montserrat | 12px | 12px | 12px | 600 | 1.6 | 0.16em | Short uppercase section labels. |
| UI | Montserrat | 14px | 14px | 14px | 600 | 1.5 | 0.03em | Buttons and navigation. |
| Accent | Cormorant Garamond italic | 48px | 40px | 36px | 400 | 1.15 | −0.025em | Standalone signature or expressive phrase. |

An italic word inside a heading inherits that heading's size and weight. The standalone accent uses the separate accent scale. Large marketing headings can wrap naturally; do not shrink body text to preserve a particular line break. Use semantic heading levels in order; `.hk-h1` through `.hk-h6` provide a visual style independently when necessary. One H1 per page, H2 for main sections. Never choose a heading level solely to get a smaller size.

Load font weights 400, 500, 600 (display) and 400, 500, 600, 700 (body); italic display weights 400, 500, and 600. Browser fallbacks are Georgia/serif and Arial/sans-serif. The wordmark is an identity exception: Cormorant italic 48px desktop/tablet and 42px mobile; its small HOST label is not ordinary body text.

## Color system
Primary, secondary, and tertiary describe the brand palette; primary and secondary **buttons** describe action priority and are separate concepts.

| Tier | Name | Hex | CSS token | Use |
|---|---|---|---|---|
| Primary | Stage black | `#151410` | `--color-ink` | Dark sections, navigation, footer; default text on cream. |
| Secondary | Signature gold | `#D4AF37` | `--color-gold` | Brand accents, fine rules, decorative icons on dark surfaces. |
| Tertiary | Warm cream | `#F6F1E8` | `--color-cream` | Main light background and text on black. |
| Support | Champagne | `#E0BD5D` | `--color-action` | Primary button fill; pair with Stage black text. |
| Support | Champagne hover | `#EDCF83` | `--color-action-hover` | Primary button hover fill. |
| Support | Antique gold | `#82611E` | `--color-gold-text` | Readable gold text and links on cream or beige. |
| Support | Warm beige | `#EAE2D4` | `--color-surface-alt` | Inquiry panels and alternating light sections. |
| Support | Stone | `#686259` | `--color-text-muted` | Supporting text on light backgrounds. |
| Support | Soft sand | `#D0C9BD` | `--color-text-on-dark` | Supporting text on dark backgrounds. |
| Support | Hairline | `#D9CEBB` | `--color-border` | Decorative dividers on light surfaces. |
| Functional | Field border | `#8B8172` | `--color-field-border` | Visible boundaries around inputs. |
| Functional | Error | `#A2392E` | `--color-error` | Validation messages; always pair with explanatory text. |

Use signature gold for accents on black. On light backgrounds use **Antique gold** for readable gold text. Buttons use **Champagne with Stage black text**. Do not place white text on gold buttons. Transparent gold borders and glow effects are decorative; do not rely on them as the only control boundary.

### Verified color pairs
Ratios were calculated directly from the sRGB hex values. Use 4.5:1 as the internal minimum for all ordinary text, including small labels. This is a color-pair check, not a full accessibility audit.

| Pair | Contrast ratio | Use |
|---|---:|---|
| Stage black on warm cream | 16.38:1 | Approved for ordinary text |
| Stage black on champagne | 10.19:1 | Approved for ordinary text |
| Antique gold on warm cream | 5.08:1 | Approved for ordinary text |
| Stone on warm cream | 5.36:1 | Approved for ordinary text |
| Soft sand on stage black | 11.21:1 | Approved for ordinary text |
| Signature gold on warm cream | 1.87:1 | Decorative only; not ordinary text |

## Layout and spacing
- Shared content maximum: **1600px / 100rem**. Reading measure: **65ch** maximum.
- Section spacing, top and bottom: **108px desktop / 76px tablet / 64px mobile**.
- Side gutters: **8% desktop / 6% tablet / 7% mobile**.
- Standard grid: **3 / 2 / 1 columns**, with **40 / 32 / 24px** gaps.
- Spacing steps: **4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px**.
- Standard content stack: 24px between elements. Use 16px between a heading and short supporting copy; 32–48px between groups.
- Cards are generally open editorial blocks with a thin top rule. Avoid boxing every paragraph. Standard corner radius is 0. Circles are reserved for monograms, avatars, and compact icon controls.
- The current hero and editorial image splits are deliberate composition exceptions. Layout may adapt earlier when content needs it; font scales still follow the three shared breakpoints.

## Buttons, links, and forms
Primary: champagne fill, black text. Secondary: antique-gold outline on cream or champagne outline on black. Text link: underlined with a visible focus state. Use action language such as “Plan your event,” “Explore services,” or “Send an inquiry.”

Buttons: Montserrat 600, 14px, 1.5 line height, 0.03em tracking; minimum height 54px; 15px × 27px padding. Compact controls must remain at least 44px tall. Hover: lightened fill and optional 2px lift. Disabled: reduce opacity and disable the control. Focus: a 3px contrasting ring with a 4px offset. Do not remove keyboard focus indicators.

Forms: visible 14px labels, 16px entered text, 54px minimum control height, squared corners, distinct field border. Place labels above fields. Keep helper text at 12px minimum. Required markers supplement a label; they do not replace it. Error states use a red border **and a specific message**, connected using `aria-describedby`. Never communicate validation by color alone.

The current inquiry flow prepares a message for Instagram. It does not submit, store, or confirm a booking. Preserve that distinction if reusing the component; a real submission flow needs a connected service and its own success/error states.

## Navigation and motion
Desktop uses a quiet horizontal navigation. At 600px and below, the burger opens a full-screen black-and-gold native dialog: fine double frame, italic invitation, numbered serif links, restrained star details, and a champagne booking panel.

Keep the dialog keyboard accessible, trap focus with native `showModal()`, close with Escape or the close button, return focus when dismissed, and unlock page scrolling. Selecting a section closes the menu and moves focus to the section. On small screens, allow the menu itself to scroll.

Standard hover transition: 200ms. Menu reveal: 420ms with `cubic-bezier(.2,.7,.2,1)`. Links can stagger by 60ms. Honor `prefers-reduced-motion` by removing movement; never hide content when animation is disabled.

## Imagery, iconography, and identity
Use warm amber event lighting, candid human connection, natural skin tones, and calm compositions with space for text. Keep subjects visible at every crop. Do not bake headings into photography. Use subtle gradients behind text when needed.

The current mood-board imagery is provisional. Replace it with approved original portraits and event photographs before a public launch. Do not present mood-board scenes as verified past events. Real review wording and attribution must remain accurate.

Use simple outline icons, 24–32px, with a consistent 1.2–1.5px stroke. Decorative stars and microphone motifs are sparing accents. The website's typographic wordmark and HK monogram are web treatments, not a replacement master logo; use approved original logo files when available. Maintain at least half the wordmark's height as clear space, and never stretch or recolor it arbitrarily.

## Voice and content
Speak warmly and directly. Make the client and their occasion the focus. Use short headings and concrete descriptions. Preserve “Your moment. Your story. My stage.” as the central brand phrase. Avoid invented credentials, prices, event counts, portfolio claims, testimonials, phone numbers, or email addresses. Use genuine client quotes with attribution.

## Implementation
New pages load the shared brand stylesheet before their own layout file. Existing home-page layouts additionally use `styles.css`; do not copy that entire file into every new page.

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="brand.css">
<link rel="stylesheet" href="your-page.css">
```

Reuse tokens instead of adding near-duplicate values:

```css
.new-section { padding-block: var(--section-space); }
.new-section__title { font-size: var(--text-h2); }
.new-section__copy { color: var(--color-text-muted); }
```

A reusable branded section:

```html
<section class="hk-section hk-dark">
  <div class="hk-container hk-stack">
    <p class="hk-eyebrow">A moment worth celebrating</p>
    <h2>Your story, <em>beautifully told.</em></h2>
    <p class="hk-body hk-muted hk-reading">Describe the service or occasion in a warm, clear voice.</p>
    <a class="hk-button hk-button--primary" href="/index.html#inquire">Plan your event</a>
  </div>
</section>
```

Primitives: `.hk-container`, `.hk-section`, `.hk-stack`, `.hk-reading`, `.hk-grid`, `.hk-card`, `.hk-rule`, `.hk-dark`, `.hk-muted`; typography `.hk-h1`–`.hk-h6`, `.hk-body`, `.hk-lead`, `.hk-small`, `.hk-caption`, `.hk-eyebrow`, `.hk-accent`; controls `.hk-button` with `--primary` / `--secondary`, `.hk-link`, `.hk-label`, `.hk-field`, `.hk-error`.

## Adding a section or page
1. Load `brand.css`; inherit the fonts and palette.
2. Choose semantic headings, then use the standard scale.
3. Reuse a section, container, grid, and button pattern.
4. Add layout-specific CSS only; avoid new font families and off-palette colors.
5. Check at 390px, 768px, and 1440px, plus the 600/601 and 1023/1024 boundaries where necessary.
6. Check long headings, 200% text enlargement, keyboard use, reduced motion, visible labels, image crops, and real empty/error states.
7. For a genuine brand change, update `brand.css`, this guide, and the visual specimen together. Record a version note instead of silently introducing exceptions.
