NARRA — Boutique Editorial Sales Page Template
===============================================
Version 1.2.0

Thanks for picking up Narra!

QUICK START
-----------
1. Open dist/index.html in any browser. That's the finished page — nothing
   to install, works offline.
2. To host it, upload everything in dist/ to any static host.
3. To EDIT it, you need Node.js (^20.19 or >=22.12) — see below.
4. Read documentation/documentation.html for the full guide.

EDITING
-------
The editable source is a React + TypeScript + Vite + Tailwind project:

   cd source
   npm install
   npm run dev      (live preview)
   npm run build    (writes source/dist/ — copy it over dist/)

Tested on Node v24.14.1 / npm 11.11.0. package-lock.json is included, so
no --force or --legacy-peer-deps should ever be needed.

WHAT'S INSIDE
-------------
- dist/                 prebuilt page — open or upload this
- source/               React/Vite source project
- documentation/        full setup & customization guide
- README.txt, LICENSE.txt, CHANGELOG.txt

DEMO-ONLY UI — PLEASE READ
--------------------------
Two things are presentation UI and are NOT connected to a backend:
- The audio player animates on a timer. There's no <audio> element and no
  audio file included.
- The application drawer validates and confirms, but sends nothing.
Both are a few lines from working — the documentation has the exact code.

NOTES
-----
Fonts load from Google Fonts, so the page needs a connection to render in
its intended typography. The four photographs are AI-generated placeholders
(see LICENSE.txt) — replace them, and all the demo copy, before launch.

SUPPORT
-------
nghoangnghiabt@gmail.com
