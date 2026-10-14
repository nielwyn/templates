# Selling "Launchly" on Creative Market — Seller Guide

This file is for you, the seller. It is **not** part of the buyer-facing
package — don't include it in the zip you upload.

## What's in this project folder

```
launchly-saas-landing-page/
├── product/                         ← the template itself (source files)
├── launchly-saas-landing-page-v1.0.0.zip   ← THIS is what you upload to Creative Market
├── listing-assets/screenshots/      ← put your listing screenshots here
└── SELLER-GUIDE.md                  ← this file
```

Live demo of the site (shareable link): https://claude.ai/artifact/ELNZVLJXUBb1ng9MdinXHA

## 1. Files Creative Market actually requires

Confirmed from Creative Market's own Shop Owner Upload Guidelines
(support.creativemarket.com) plus the screenshot spec on their help site:

- **Product file(s):** delivered as a **.zip** — `.rar` / `.7z` get removed
  automatically. Max 4GB for direct upload (products over that must be
  delivered via an external host right after purchase — not relevant here,
  the template zip is ~28KB).
- **No bundled third-party assets** you don't have redistribution rights
  for (fonts, photos, icon packs, frameworks) — and **no visible
  trademarks** in the files or screenshots.
  → This template only uses Google Fonts (loaded from Google's CDN, not
    bundled) and 100% custom CSS/SVG graphics, so you're clear here.
- **Documentation** describing the product and how to use it — included
  (`documentation/documentation.html`).
- **Listing must match the files** — whatever your screenshots and
  description show must be what's actually in the zip.
- **Screenshots:** 1–100 images per listing, each **910×607px minimum,
  3640×10920px maximum**, **1820×1214px recommended**, JPG/PNG/GIF,
  ideally under ~5MB each.
- **Shop approval:** you need an approved Creative Market shop before you
  can list anything. Their "Open a Shop" page says they like to see
  **10-20 examples of your best work** as a portfolio (usually just a
  link — a personal site, Behance, Dribbble, etc.) submitted with the
  application — this is a design-quality portfolio, **not** 10-20 finished
  products ready to sell. Past work, mockups, or a couple of variations
  of this template can all count. Once approved, you can list just this
  one product to start. Review can take a few days.
  → Double-check the current application page yourself before applying —
    this detail comes from a help article that may be outdated.

The `launchly-saas-landing-page-v1.0.0.zip` already in this folder is
ready to upload as-is.

## 2. Generating your listing screenshots

Since this is a static site, the easiest way to get compliant screenshots:

1. Open the live demo link above (or open `product/index.html` locally).
2. Resize your browser window close to a 3:2 ratio (e.g. 1820×1214, or
   1200×800 scaled up) before capturing, so you don't need to crop later.
3. Capture at least:
   - Hero section of the homepage (this becomes your primary/thumbnail
     shot — make it count)
   - Features + "How it works" section
   - Pricing page
   - About page
   - Contact page
   - A mobile-width screenshot (resize to ~400px wide) to show
     responsiveness — buyers specifically look for this
4. Save them into `listing-assets/screenshots/` numbered in display order,
   e.g. `01-hero.png`, `02-features.png`, etc.

If you'd like, I can capture these for you once browser automation is
available in this session — just ask and I'll generate them directly from
the live demo.

## 3. Suggested listing copy

**Title:** Launchly — SaaS Landing Page Template (HTML/CSS/JS)

**Tagline/short description:** A conversion-focused SaaS landing page
template with pricing, testimonials and FAQ sections — zero dependencies,
pure HTML/CSS/JS.

**Description bullets:**
- 5 fully responsive pages: Home, Pricing, About, Contact, 404
- Zero dependencies — no npm, no build step, no frameworks required
- Clean, modern design system driven by CSS custom properties — re-theme
  colors in one place
- Vanilla JS: mobile nav, FAQ accordion, pricing monthly/yearly toggle,
  testimonial carousel, scroll-reveal animations
- Fully commented documentation included
- Cross-browser tested (Chrome, Firefox, Safari, Edge)
- Google Fonts (Work Sans + Bricolage Grotesque), free for commercial use

**Suggested tags:** saas, landing page, html template, website template,
startup, business, pricing table, responsive, css, javascript, web design

**Category:** Templates → Website Templates (or "HTML" if Creative
Market's taxonomy offers it at submission time — categories occasionally
change, check the listing editor's own dropdown).

## 4. Before you hit publish

- [ ] Replace `[seller name / shop name]` in `product/LICENSE.txt` with
      your actual shop name
- [ ] Decide your license tiers/pricing on Creative Market's own listing
      form (Standard vs Extended use, if offered)
- [ ] Re-zip if you make any edits to `product/` (the zip currently
      mirrors the folder as of 2026-10-12)
- [ ] Double check your shop application/approval status if you haven't
      sold on Creative Market before — this gates listing entirely
