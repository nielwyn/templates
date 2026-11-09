========================================================================
NARRA — BOUTIQUE EDITORIAL SALES PAGE TEMPLATE
Version 1.2.0
========================================================================

Thank you for purchasing Narra!

An editorial, calm-luxury sales page for boutique agency owners,
independent consultants, executive coaches and personal brands selling
high-ticket retainers.

------------------------------------------------------------------------
QUICK START — VIEW THE TEMPLATE (no installation)
------------------------------------------------------------------------

Open  dist/index.html  in any modern browser. That is the finished,
prebuilt page. It works offline; nothing to install.

Use this folder as-is if you only want to host the page: upload the
entire contents of dist/ to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, cPanel, S3).

------------------------------------------------------------------------
QUICK START — EDIT THE TEMPLATE (build step required)
------------------------------------------------------------------------

Narra's editable source is a React + TypeScript + Vite + Tailwind CSS 4
project in  source/ . To change the page you edit source/, rebuild, and
the new dist/ replaces the one above.

Requirements:
  Node.js  ^20.19.0 or >=22.12.0   (required by Vite 8)
  Tested on Node v24.14.1, npm 11.11.0

Steps:
  1.  cd source
  2.  npm install
  3.  npm run dev        -> live preview at the URL printed in terminal
  4.  npm run build      -> writes source/dist/
  5.  Copy source/dist/ over the dist/ folder at the top level.

  npm run lint           -> TypeScript check (tsc --noEmit)

A package-lock.json is included, so npm install reproduces the exact
dependency versions this release was built and tested with. No --force
or --legacy-peer-deps flag is needed.

------------------------------------------------------------------------
WHAT IS INCLUDED
------------------------------------------------------------------------

  dist/                  Prebuilt page — open index.html, or upload
  source/                React/Vite/Tailwind source project
  documentation/         Full setup & customization guide (start here)
  README.txt             This file
  LICENSE.txt            Bundled-asset licenses & attribution
  CHANGELOG.txt          Version history

Page content:
  - 10-section editorial sales page layout, plus sticky nav and footer
  - Interactive 4-phase curriculum roadmap tabs
  - Animated masterclass audio preview widget (see DEMO-ONLY below)
  - 3-step client application drawer with inline validation
  - 4 instant colorway presets (Linen, Olive, Noir, Terracotta)
  - Design tokens in :root — retheme from one place
  - Semantic HTML, WCAG AA contrast, keyboard-navigable

------------------------------------------------------------------------
DEMO-ONLY UI — PLEASE READ
------------------------------------------------------------------------

Two components ship as presentation UI and are NOT wired to a backend.
Both are a few lines from being live, and documentation/ shows exactly
which lines:

  1. The masterclass audio player animates a waveform and progress bar
     on a timer. There is no <audio> element behind it and no audio file
     is included. See "Wiring up the audio player" in the documentation.

  2. The application drawer validates its inputs and advances to a
     confirmation screen, but does not transmit the submission anywhere.
     See "Wiring up the application form" in the documentation for
     Formspree / Netlify Forms / your own endpoint.

------------------------------------------------------------------------
FONTS & IMAGES
------------------------------------------------------------------------

Fonts (Fraunces, Plus Jakarta Sans) load from Google Fonts over the
network. The page needs an internet connection to render in its intended
typography; it falls back to Georgia / system sans-serif offline.

The four photographs are AI-generated placeholders included so the
template looks complete out of the box. Replace them with your own
photography before launch. Details in LICENSE.txt.

------------------------------------------------------------------------
SUPPORT & INQUIRIES
------------------------------------------------------------------------

Email: nghoangnghiabt@gmail.com

========================================================================
