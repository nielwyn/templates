# Selling "HALO" — Seller Guide

Not part of the buyer-facing zip — don't include this file in the upload.

## What's in this project folder

```
halo-studio-template/
├── product/                             ← the template source (what's zipped)
├── halo-studio-template-v1.1.5.zip      ← upload this to the marketplace
├── listing-assets/screenshots/          ← put listing screenshots here
└── SELLER-GUIDE.md                      ← this file
```

Live demo: https://claude.ai/artifact/5hpnjhtVmuWxnHFGxvgAo2

## Status (2026-11-08): v1.1.6 packaged and verified

The stale-zip problem is cleared. `halo-studio-template-v1.1.6.zip` was built
from the current `product/` and verified clean:

```
unzip -q -o halo-studio-template-v1.1.6.zip -d /tmp/zipcheck && \
  diff -rq product/ /tmp/zipcheck/halo-studio-template/
```

The stale `v1.1.5.zip` was deleted rather than kept alongside — two zips in the
folder is how the wrong one gets uploaded.

What went into v1.1.6 beyond re-zipping:

- `CHANGELOG.txt` now has a v1.1.6 entry covering the hero showcase deck, the
  case-study modal, Brand Lab, Process, the scope estimator and the carousel
  change.
- `documentation/documentation.html` gained an "Interactive sections" chapter
  documenting every new section and its `data-*` hooks, and the forms section
  is now self-contained (it previously told the buyer to go read Launchly's
  documentation, which they don't have).
- Removed docs claims that the rebuild had made false: the scroll-progress bar
  and back-to-top ring no longer exist, the work gallery is no longer a
  GSAP-pinned horizontal scroller, there is no scroll-drawn timeline, and the
  tilt effect is hero-only — the work cards don't tilt.
- `README.txt`'s file inventory and a new "What's interactive" block match the
  shipped JS.

Still to do before listing: capture screenshots from the rebuilt page (the
live demo link above predates the rebuild too — re-publish it), and verify the
interactive states in a real browser.

Everything else in the template holds up — the CDN libraries are version-pinned,
`scene.js`/`animations.js` both no-op cleanly when THREE/GSAP are missing, the
`.no-js` CSS force-reveals content, and reduced-motion is respected throughout.

## How this product differs from Launchly

Launchly (the SaaS landing page template) is fully dependency-free —
buyers get pure HTML/CSS/JS with zero runtime libraries. HALO is a
different tier: it loads **GSAP + ScrollTrigger** and **Three.js** from a
CDN to drive the scroll animation and the 3D hero object. Still zero
build tools (buyer just opens `index.html`), but:

- **Disclose this in the listing.** Say clearly it needs an internet
  connection to preview/run and uses two small animation/3D libraries
  loaded via CDN — don't let a buyer discover this after purchase.
- **GSAP's license is worth double-checking before you publish.**
  `LICENSE.txt` and the documentation both note that GreenSock/Webflow
  made GSAP free in 2024, but license terms for third-party libraries can
  change independently of anything in this template — confirm at
  gsap.com/licensing before relying on it commercially.
- Position it as a **premium/animated tier** product — the extra
  craft (custom cursor, pinned scroll gallery, 3D object, scroll-drawn
  timeline) justifies pricing it higher than a static template.

## Suggested listing copy

**Title:** HALO — Animated Studio & Small Business Template (GSAP + 3D)

**Tagline:** A bold, one-page template for branding studios, freelancers
and small businesses — kinetic typography, a 3D hero object, and
scroll-driven animation, built on plain HTML/CSS/JS.

**Description bullets:**
- One-page site: hero, services, pinned horizontal work gallery, about,
  testimonials, scroll-drawn process timeline, contact
- Custom cursor, preloader, magnetic CTA button
- 3D hero object (Three.js) and scroll-triggered animation (GSAP +
  ScrollTrigger) — loaded via CDN, no build step
- Fully responsive; gracefully degrades to a static, fully-readable page
  if the animation libraries fail to load; respects reduced-motion
- Google Fonts (Hanken Grotesk + Unbounded), zero bundled images —
  all graphics are CSS/SVG/Three.js

**Suggested tags:** agency, studio, one page, animated, gsap, three.js,
3d, small business, freelancer, branding, portfolio, dark theme

## Before you publish

- [x] Clear the stale-zip status above (changelog entry, docs update, re-zip, diff check) — done 2026-11-08, v1.1.6
- [ ] Replace `[seller name / shop name]` in `product/LICENSE.txt`
- [ ] Verify GSAP's current license terms at gsap.com/licensing
- [ ] Consider moving Three.js off r134 (2021) or saying in the listing which version is
      loaded, so buyers know what they're pinning to
- [ ] Capture listing screenshots from the live demo link above — this
  template especially benefits from a short screen-recording/GIF since
  the pinned gallery and 3D object are hard to sell with static images
  alone (check whether your marketplace supports a preview video)
