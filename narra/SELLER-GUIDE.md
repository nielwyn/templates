# SELLER GUIDE — Narra Boutique Sales Page Template

> **Note**: For seller reference only. Do not bundle in the buyer's final .zip file.

## 1. Product Overview

- **Product Name**: Narra — Editorial Sales Page Template for Kajabi & Static Web
- **Target Audience**: Solopreneurs, boutique consultants, creative studio directors, executive coaches, and high-ticket service providers.
- **Aesthetic Direction**: Quiet luxury, organic editorial, warm ecru/linen textures, human typography with Fraunces & Plus Jakarta Sans, zero-pill discipline.
- **Reference Inspiration**: `altnndesigns.mykajabi.com/narra-sales-page`
- **Current Version**: v1.2.0
- **Status** (2026-11-08): **packaged and verified; two items left before listing** — see
  section 3. This is a build-step (tier 3) template and currently the only one in the
  catalog; `AI_CONTEXT.md` explains why that tier is the exception rather than the default.
- **Live demo**: not published yet. Publish one before listing — buyers on every one of
  these marketplaces click the demo before they read the description.

---

## 2. Suggested Marketplace Listing Copy

### Title
**Narra — Editorial Sales Page Template for Coaches, Consultants & Boutique Studios**

### Tagline
An editorial, high-converting static sales page template built with clean design tokens, modular curriculum tabs, interactive audio preview, and zero-pill typography.

### Highlights & Bullets
- **Ready for Immediate Use**: prebuilt static output you can open and host anywhere, plus the
  full React + Tailwind source if you want to rebuild it. (Do **not** claim "zero
  dependencies" — React, React DOM, Vite and Tailwind are real dependencies. Claim "no
  dependencies to install if you use the prebuilt version", which is true once `dist/` ships.)
- **Complete Sales Funnel Architecture**:
  - High-impact split hero with quantitative social proof benchmarks
  - "The Core Tension" comparison cards (The Vendor Trap vs The Sovereign Practice)
  - 4-Pillar framework cards with human editorial numbering
  - Interactive 4-phase 12-week curriculum browser
  - Proprietary Vault showcase (legal contracts, Notion hubs, pricing matrices)
  - Interactive audio masterclass preview player with animated soundwave
  - 3 in-depth client case studies with before/after revenue metrics
  - Personal brand mentor story & philosophy section
  - Tiered investment module with single payment vs 3-installment toggle
  - Objection-busting interactive FAQ accordion
  - Working multi-step application modal with input validation
- **4 Built-in Palette Presets**: Narra Linen & Cedar, Tuscan Olive & Clay, Obsidian Noir, Terracotta Silk.
- **Single-File CSS Re-theming**: Design tokens defined cleanly in `:root`.
- **Accessible & Fast**: Semantic HTML, WCAG AA contrast, no layout shifting, Google Fonts included.

### Recommended Tags
`kajabi sales page`, `coach sales page`, `editorial website`, `consulting template`, `luxury sales funnel`, `course template`, `creative agency`, `minimalist landing page`, `high converting template`

### Suggested Categories
- **Creative Market**: Web Elements → HTML / CSS Templates OR Templates → Landing Pages
- **ThemeForest**: Marketing → Landing Pages
- **Gumroad**: Design / Web Templates

### Recommended Pricing
- **Personal / Standard License**: $49 – $79
- **Commercial / Extended License**: $149 – $199

---

## 3. Pre-Publish Blockers

Restructured, repacked and re-encoded on 2026-11-10. Layout now matches
`AI_CONTEXT.md`: `product/dist/` + `product/source/` + `documentation/`,
`README.txt`, `LICENSE.txt`, `CHANGELOG.txt`, with `narra-v1.2.0.zip` beside it.

### Cleared

- [x] **Install works.** Dropped ten unused/conflicting packages (`esbuild` was
      failing ERESOLVE against Vite 8's peer range). Clean extract →
      `npm install` → `npm run build` → `npx tsc --noEmit` all exit 0, no flags,
      0 vulnerabilities, Node v24.14.1. Lockfile shipped, and the built hashes
      match the committed `dist/` — the shipped build is reproducible.
- [x] **`base: './'` set**, so `dist/index.html` isn't blank when opened from disk.
- [x] **AI Studio scaffold gone**: `README.md`, `.env.example`, `metadata.json`,
      the `DISABLE_HMR` block; `package.json` is now `narra@1.2.0`.
- [x] **Seller content out of the product.** The "View SELLER-GUIDE.md & Specs"
      modal that showed buyers your price tiers and listing tags is gone; the
      colorway switcher stays.
- [x] **`LICENSE.txt` + `documentation/` written**, both honest about the
      AI-generated photos, the fictional demo copy, and the two demo-only
      components (audio player, application form) — with the code to wire them.
- [x] **Images re-encoded to WebP**: 3.1MB → 424KB, with `width`/`height` and
      `loading`/`decoding` set. Zip is 980KB, down from 6.3MB.
- [x] **Zip verified**: single top-level `narra/`, `node_modules` excluded,
      `diff -rq` clean.

### Still blocking

- [ ] **Click through it in a real browser** — curriculum tabs, audio widget,
      3-step drawer, all four colorways, mobile/tablet/1440px. Never opened,
      only built and typechecked.
- [ ] **Listing screenshots** (`listing-assets/screenshots/`, missing for every
      template in the catalog) and a published live demo.

## 4. Pre-Publish Checklist (after the blockers are cleared)

- [x] Design tokens configured in `:root` with four colorway presets
- [x] Zero-pill metadata discipline enforced across all cards and sections
- [x] Support contact set to `nghoangnghiabt@gmail.com`
- [x] No `lorem ipsum` or unstyled broken images
- [x] Alt text on every image; `tsc --noEmit` clean
- [ ] Interactive states verified in a real browser on the built output
- [ ] High-contrast responsive layout tested at mobile, tablet, and 1440px desktop
- [x] Clean-machine check from the zip: extract → `npm install` → `npm run build` →
      `npx tsc --noEmit`, no flags, all exit 0 — passed 2026-11-08
- [ ] Replace `[seller name / shop name]` in `product/LICENSE.txt`
