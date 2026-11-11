# Templates — AI Context

Tool-agnostic guide for any AI assistant (Claude, ChatGPT, Copilot, Cursor, etc.) working in
this repo. Paste it into context, or point the assistant at this file, before generating,
reviewing, or packaging a template here.

This repo (`nielwyn/templates` on GitHub) holds web page templates built **to sell** on design
marketplaces (confirmed: Creative Market; also considered: ThemeForest, Gumroad, Webflow
Marketplace, or direct sale). Each template is a self-contained subfolder — see
`halo-studio-template/` and `launchly-saas-landing-page/` as the reference examples this guide
is derived from, and `narra/` as the worked example of what a build-step template costs you.

## Purpose

- Produce polished, sellable static web templates — not client work, not personal projects.
- Each template must stand alone: a buyer unzips it, opens `index.html`, and gets exactly what
  the marketplace listing/screenshots showed, with zero hand-holding.
- Optimize for both *actual* code quality and *perceived* polish — marketplace reviewers and
  buyers both inspect the code, not just the screenshots.

## Project folder structure (per template)

```
template-name/
├── product/                          ← buyer-facing source — this is what gets zipped
│   ├── index.html (+ other pages)
│   ├── css/style.css                 ← one stylesheet, design tokens in :root
│   ├── js/*.js                       ← vanilla JS, feature-sectioned
│   ├── images/
│   ├── documentation/documentation.html   ← full buyer-facing setup/customization guide
│   ├── README.txt                    ← quick start, what's inside, support contact
│   ├── LICENSE.txt                   ← bundled-asset licenses (see below)
│   └── CHANGELOG.txt                 ← versioned entries, newest first
├── template-name-vX.Y.Z.zip          ← what actually gets uploaded; re-zip after any edit to product/
├── listing-assets/screenshots/       ← marketplace listing screenshots, numbered in display order
└── SELLER-GUIDE.md                   ← seller-only notes; NEVER goes in the zip
```

A build-step template (tier 3 below) keeps the same outer shape, but `product/` holds
`dist/` (the prebuilt site the buyer can open immediately), `source/` (the project the buyer
builds from), and the same `documentation/`, `README.txt`, `LICENSE.txt`, `CHANGELOG.txt`.

**Nothing seller-facing may live inside `product/`.** Pricing strategy, listing tags, buyer
avatars, marketplace notes and the seller guide itself stay in `SELLER-GUIDE.md` at the project
root. That includes UI: a theme-switcher widget shipped to buyers is fine, a panel inside it
that renders your pricing tiers is not.

`SELLER-GUIDE.md` per template should contain: a live demo link, suggested listing copy
(title, tagline, description bullets, tags, category), any marketplace-specific requirements
confirmed at write time (file format, screenshot dimensions, shop-approval gates), and a
pre-publish checklist. Marketplace rules change over time — re-verify current guidelines
before publishing rather than trusting a number written down earlier.

## Tiers (pick one deliberately per template, disclose clearly in the listing)

**Default to the lowest tier the concept allows.** The tier number tracks buyer friction and
your long-term support load — not quality, and not price.

1. **Static tier** (e.g. `launchly-saas-landing-page`) — zero runtime dependencies. Pure
   HTML/CSS/JS, no build step, no npm install, works offline after download. Default choice
   unless the concept specifically calls for a higher tier.
2. **CDN/animated tier** (e.g. `halo-studio-template`) — still no build step (buyer just
   opens `index.html`), but loads a library or two from a CDN (e.g. GSAP + ScrollTrigger,
   Three.js) for animation/3D. Requires an internet connection to preview. Must:
   - Disclose the CDN dependency clearly in the listing — don't let a buyer discover it after
     purchase.
   - Degrade gracefully to a static, fully-readable page if the CDN libraries fail to load.
   - Respect `prefers-reduced-motion`.
   - Pin exact library versions in the `<script src>` URLs, and double-check the third-party
     library's current license terms before publishing (license terms can change
     independently of this template).
   - Be priced/positioned as a premium tier — the extra craft justifies it.
3. **Build-step tier** (e.g. `narra`) — React/Vite/Tailwind or similar; the buyer runs
   `npm install` and `npm run build`. Choose this only when the concept genuinely needs
   component state that vanilla JS would make unmaintainable, and only under the extra rules
   below. Never ship it as source-only.

### Which tier actually sells better

Non-dependency wins as the default, for reasons that have nothing to do with code taste:

- **The buyer is often not a developer.** Marketplace template buyers skew designers, small
  business owners and freelancers. "Unzip, open `index.html`, edit the text" is a product they
  can use today; "install Node 22, run npm install" is a support ticket, and support tickets
  on a $29 product are where the margin goes.
- **A static template cannot fail to install.** A build-step template has a failure mode that
  a static one doesn't have at all, and it fires on the buyer's machine, after they paid.
- **It doesn't rot.** HTML/CSS/JS from five years ago still opens. A pinned React/Vite/Tailwind
  tree starts drifting the day you publish: peer ranges tighten, majors land, and every drift
  is an update you owe buyers who already paid. One seller cannot maintain many of these.
- **Review and licensing are simpler.** Marketplaces check bundled third-party assets; a
  dependency tree makes that check — and your own `LICENSE.txt` — much harder to state
  honestly.
- **The listing matches the files exactly**, which is what marketplaces actually enforce.

Where dependency templates do earn their keep: developer-audience products (admin dashboards,
app UI kits, Next.js SaaS starters) sold on developer-heavy marketplaces, where a build step is
expected and the price point is higher. That is a different market with a different support
model — enter it deliberately, not because the template happened to be scaffolded in React.

**For this catalog: static first, CDN tier when the concept needs motion, build-step only as a
hybrid.** A marketing/sales page — the kind of thing in this repo — has no requirement that a
framework satisfies and vanilla JS can't.

### Extra rules for a build-step template

Treat every one of these as a publish blocker, not a nice-to-have:

- **Ship the built output as the primary deliverable.** `product/dist/` (open
  `index.html`, works offline) plus `product/source/` for buyers who want to rebuild. The
  listing leads with the static deliverable; the source is the bonus, not the product.
- **Verify on a clean machine, from the zip, every release:** fresh extract →
  `npm install` → `npm run build` → `npx tsc --noEmit`, all exiting 0 with **no**
  `--force` or `--legacy-peer-deps`. If the install needs a flag, the template is not
  shippable.
- **Include the lockfile** so the buyer gets the dependency resolution you actually tested.
- **Every declared dependency must be imported by the source.** Grep for each one before
  release and delete what isn't used. Unused deps are install weight, audit noise, and — when
  they're things like an AI SDK or a server framework — a buyer wondering what your template
  is doing with them.
- **State the Node version** you tested in `README.txt` and the documentation.
- **No scaffold leftovers.** `package.json` `name`/`version` must be the product's own, not
  `react-example@0.0.0`. Delete the generator's `README.md`, `.env.example`, `metadata.json`,
  vendor banner images and app URLs — those leak where the template came from, can carry a
  third-party trademark into the zip, and tell buyers to configure API keys the template
  doesn't use.

## Design rules (derived from existing code — follow for consistency across the catalog)

1. **Design tokens in `:root`** — colors (incl. a `-dark` variant per hue), shadows
   (`--shadow-sm/md/lg`), radius scale (`--radius-sm/md/lg/full`), container width, font
   variables. Re-theming a template should be a one-place edit.
2. **Class naming** — structural/utility classes (`.section`, `.section-tight`, `.container`,
   `.eyebrow`), component + variant (`.btn`, `.btn-primary`, `.btn-ghost`), state as a separate
   modifier class (`.is-open`, `.is-visible`, `.is-active`) rather than inline style toggles.
3. **JS behavior hooks via `data-*` attributes** (e.g. `data-year`, `data-billing-toggle`,
   `data-monthly`/`data-yearly`), not bare `id`s — keeps JS decoupled from specific markup/CSS.
4. **Vanilla JS, wrapped in `DOMContentLoaded`, feature-sectioned with a comment per feature**
   (nav toggle, accordion, carousel, etc.) — each feature null-checks its own DOM nodes so one
   missing element never breaks the rest of the page.
5. **Progressive enhancement** — feature-detect before using an API (e.g.
   `'IntersectionObserver' in window`) with a visible fallback if unsupported.
6. **Responsive, cross-browser** (Chrome/Firefox/Safari/Edge), **accessible** baseline (semantic
   HTML, alt text, sufficient contrast, keyboard-navigable nav), and a Lighthouse-performance
   mindset (optimize images, no dead CSS/JS).
7. **No leftover placeholders** — no `lorem ipsum`, no stray `console.log`/TODOs in the final
   buyer-facing files.
8. **Interactive elements are real, or labelled.** A player with no `<audio>` behind it, a
   form that posts nowhere, a search box that filters nothing — each is a refund request
   waiting to happen. Either wire it up, or say plainly in the documentation that it's a
   demo-only UI and show the three lines of code that connect it (an `<audio src>`, a
   Formspree/Netlify form action, etc.).
9. **Every claim in `README.txt`, the documentation and the listing must be literally true.**
   "Open `index.html` in any browser" is a lie for a template whose `index.html` loads
   `/src/main.tsx`, and it is the first thing the buyer tries.

## Asset policy (minimize licensing risk)

- **Fonts:** Google Fonts, loaded via CDN `<link>`, not bundled. (SIL OFL — free for commercial
  use.)
- **Icons:** custom inline SVG, built for the template. Avoid third-party icon libraries unless
  their license explicitly permits redistribution.
- **Images/illustrations:** prefer CSS/SVG-built graphics over stock photography — avoids
  redistribution-rights questions entirely. If stock photos are ever used, their license must
  permit redistribution inside a sold template, and this must be documented in `LICENSE.txt`.
- **Weight budget:** keep the whole page under ~1MB transferred. Compress every bitmap,
  export WebP/AVIF (with a JPEG fallback if needed), set `width`/`height` to avoid layout
  shift, and `loading="lazy"` everything below the fold. Four 800KB hero JPEGs will sink the
  Lighthouse score a buyer screenshots before they buy.
- **AI-generated imagery** must be disclosed as such — in `LICENSE.txt`, and on the listing
  if the marketplace asks. Several marketplaces now have an explicit AI-content policy;
  check the current one before publishing rather than assuming.
- **No visible third-party trademarks** anywhere in the files or screenshots.

## Licensing conventions

`product/LICENSE.txt` documents only the **bundled assets and their source licenses**
(fonts, icons, code authorship) — it does **not** set the buyer's usage rights. Buyer usage
tiers (e.g. Standard vs Extended license) are configured on the marketplace's own listing form
at publish time. Always replace the `[seller name / shop name]` placeholder before publishing.

## Buyer-facing docs

- `README.txt` — plain-text quick start whose steps are the ones that actually work: unzip →
  open `index.html` (for a build-step template: open `dist/index.html`, and give the Node
  version + install/build commands for `source/`) → see `documentation/documentation.html`
  for full customization. List what's inside, state the build-tool situation honestly, and
  include the support contact (nghoangnghiabt@gmail.com).
- `documentation/documentation.html` — the full setup/customization guide (colors, fonts,
  images, forms, folder structure). For a CDN- or build-step-tier template, lead with a
  "Dependencies" section buyers must read first.
- `CHANGELOG.txt` — versioned entries, newest first, matching the zip's version number.

## Release procedure (run on every change to `product/`, not just before publishing)

The zip is the product. Source that has drifted ahead of the zip means buyers are paying for
an older template than the one in your screenshots — the single easiest way to fail a
marketplace's "listing must match the files" rule.

1. Add a `CHANGELOG.txt` entry for the change and bump the version.
2. Update `documentation/documentation.html` for any feature added, changed or removed — a
   new section or component that the docs never mention is an unfinished release.
3. Re-zip `product/` under a single top-level folder named after the template
   (`template-name/...`), so the buyer's extract doesn't spray files into their Downloads.
4. Rename the zip to match the new version.
5. Verify the zip against the source — it should report nothing:
   ```
   unzip -q -o template-name-vX.Y.Z.zip -d /tmp/zipcheck && \
     diff -rq product/ /tmp/zipcheck/template-name/
   ```
6. Build-step tier only: run the clean-machine install/build/typecheck from the extracted zip.

## Before publishing a template (checklist)

- [ ] Replace `[seller name / shop name]` in `LICENSE.txt`
- [ ] Release procedure above completed; `diff -rq` between `product/` and the zip is clean
      and the zip filename version matches `CHANGELOG.txt`'s latest entry
- [ ] Documentation covers every feature currently in the product
- [ ] Nothing seller-facing (pricing, tags, buyer avatars, this guide) is inside `product/`
- [ ] Every README/doc/listing claim is true of the files as shipped — especially the
      quick-start steps
- [ ] Verify any third-party library license (CDN tier) at its current source
- [ ] Build-step tier: clean extract → `npm install` → `npm run build` → `npx tsc --noEmit`
      all pass with no flags; no unused dependencies; no scaffold leftovers
- [ ] Page weight and Lighthouse checked on the real build; images compressed and lazy-loaded
- [ ] No `lorem ipsum`, stray TODOs, or broken links in the final build
- [ ] Screenshots captured per the target marketplace's current spec, saved numbered into
      `listing-assets/screenshots/`
- [ ] Listing copy (title, tagline, bullets, tags, category) drafted in `SELLER-GUIDE.md`
