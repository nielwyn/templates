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

Restructured and repackaged on 2026-11-08. The template now matches the canonical layout in
`AI_CONTEXT.md`: `product/dist/` + `product/source/` + `documentation/`, `README.txt`,
`LICENSE.txt`, `CHANGELOG.txt`, with `narra-v1.2.0.zip` beside it and this guide outside
`product/`.

### Cleared

- [x] **Dependency conflict fixed.** Dropped the nine unused/conflicting packages
      (`@google/genai`, `express`, `dotenv`, `motion`, `lucide-react`, `tsx`, `esbuild`,
      `@types/express`, `autoprefixer`, `@types/node`) and moved the build tooling to
      `devDependencies`. The dependency list is now React + React DOM, with Vite, Tailwind,
      TypeScript and the two plugins in dev. Every remaining package is imported by the
      source.
- [x] **Clean-machine check passes from the zip.** Fresh extract → `npm install` →
      `npm run build` → `npx tsc --noEmit`, all exit 0, no `--force`, no
      `--legacy-peer-deps`, 0 vulnerabilities, on Node v24.14.1 / npm 11.11.0. 40 packages.
      `package-lock.json` is committed and shipped, and the built hashes from the extracted
      zip match the committed `product/dist/` exactly — so the shipped build is reproducible
      from the shipped source.
- [x] **`README.txt` rewritten around what actually works.** The quick start now says to
      open `dist/index.html` (the prebuilt page) and gives the Node version plus the
      install/build commands for `source/`. `strict: true` is on in `tsconfig.json` and
      typecheck is clean.
- [x] **`base: './'` set in `vite.config.ts`.** Without it the build emits absolute
      `/assets/...` paths and `dist/index.html` renders blank when opened from the
      filesystem — which is the first thing a buyer does.
- [x] **Google AI Studio scaffold removed.** Deleted `README.md` (Google banner + AI Studio
      app link + `GEMINI_API_KEY` instructions), `.env.example` and `metadata.json`;
      `package.json` is now `narra@1.2.0`; the AI Studio `DISABLE_HMR` block and the unused
      `@` path alias are out of `vite.config.ts` and `tsconfig.json`.
- [x] **Seller-only content removed from the product.** `TemplateCustomizer.tsx` no longer
      renders the "View SELLER-GUIDE.md & Specs" modal with your price tiers, target
      marketplaces, buyer avatar and listing tags. The colorway switcher stays, relabelled
      "Colorway", with a docblock and a documentation section telling the buyer how to delete
      it once they've picked a theme. The "seller" wording in `TopBar.tsx` and `App.tsx` is
      gone too; the only remaining match in `product/` is the intended
      `[seller name / shop name]` placeholder in `LICENSE.txt`.
- [x] **`LICENSE.txt` written**, and it discloses the four photographs as AI-generated,
      names the fictional demonstration copy explicitly, and states that the fonts and npm
      dependencies are not redistributed.
- [x] **`documentation/documentation.html` written** — ~520 lines, house style, leading with
      a Dependencies section. Covers the folder layout, the section/component map, editing
      copy, the token table, the four colorways, fonts, images, deploying, browser support
      and credits.
- [x] **Demo-only UI documented with working snippets.** The audio player (no `<audio>`
      element, timer-driven waveform) and the application drawer (validates, confirms,
      transmits nothing) are each flagged in `README.txt`, `CHANGELOG.txt` and the
      documentation, with the real code to connect them — `timeupdate`/`ended` listeners for
      the player, and Formspree / Netlify Forms / custom-endpoint variants for the form. The
      snippets use the actual identifiers in the source (`formData`, `validateStep1`,
      `handleNext`, `progress`).
- [x] **Zip built and verified.** `narra-v1.2.0.zip`, single top-level `narra/` folder, 39
      entries, 6.3MB, `node_modules` excluded; `diff -rq product/ /tmp/zipcheck/narra/`
      reports nothing.

### Still blocking

- [ ] **3.1MB of uncompressed hero JPEGs** (4 files, 708–892KB each). They ship twice — in
      `source/src/assets/images/` and again hashed in `dist/assets/` — which is why the zip
      is 6.3MB. Convert to WebP/AVIF at display size, target under ~1MB total, and add
      `loading`/`decoding`/`width`/`height`. The documentation currently tells the buyer to
      do this; it should not have to. This is the one real quality item left.
- [ ] **Listing screenshots.** `listing-assets/screenshots/` doesn't exist for any template
      in the catalog yet. Capture from the built page, numbered in display order.
- [ ] **Verify the interactive states in a real browser** on the built output: curriculum
      tabs, audio widget, the 3-step drawer, all four colorways, and mobile/tablet/1440px.
      Nothing here has been clicked — only built and typechecked.

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
