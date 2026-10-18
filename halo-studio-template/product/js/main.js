/* HALO — Main Interactive Systems & Features
   - Preloader & Custom Momentum Cursor
   - 3D Interactive Card Tilt
   - Case Study Modal & Brand Asset Inspector
   - Interactive Brand Identity Lab
   - Process Stepper & Deliverables Explorer
   - Project Scope & Timeline Estimator
*/
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var body = document.body;

  /* ==========================================================================
     1. Preloader
     ========================================================================== */
  var preloader = document.querySelector('.preloader');
  var percentEl = document.getElementById('loadPercent');
  var barFill = document.querySelector('.preloader-bar-fill');

  var loadedFired = false;
  function finishLoading() {
    body.classList.remove('is-loading');
    if (preloader) preloader.classList.add('is-done');
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    if (!loadedFired) {
      loadedFired = true;
      document.dispatchEvent(new CustomEvent('halo:loaded'));
    }
  }

  if (preloader) {
    var pct = 0;
    var tick = setInterval(function () {
      pct += Math.random() * 22 + 8;
      if (pct >= 100) {
        pct = 100;
        clearInterval(tick);
        setTimeout(finishLoading, 220);
      }
      if (percentEl) percentEl.textContent = Math.floor(pct);
      if (barFill) barFill.style.width = pct + '%';
    }, 90);
    setTimeout(finishLoading, 3000);
  } else {
    body.classList.remove('is-loading');
  }

  /* ==========================================================================
     2. Custom Cursor with Magnetic Tracking
     ========================================================================== */
  var blob = document.querySelector('.cursor-blob');
  if (blob && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', function (e) {
      blob.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px) translate(-50%,-50%)';
    });

    document.querySelectorAll('[data-cursor-hover], button, a, .work-card, .lab-option').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        blob.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', function () {
        blob.classList.remove('is-hover');
      });
    });
  } else if (blob) {
    blob.style.display = 'none';
  }

  /* ==========================================================================
     3. Mobile Navigation
     ========================================================================== */
  var navToggle = document.querySelector('.nav-toggle');
  var navMobile = document.querySelector('.nav-mobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navMobile.classList.toggle('is-open');
      body.style.overflow = navMobile.classList.contains('is-open') ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMobile.classList.remove('is-open');
        body.style.overflow = '';
      });
    });
  }

  /* ==========================================================================
     5. Selected Work Case Study Modal (Editorial Magazine-Grade Architecture)
     ========================================================================== */
  var PROJECT_ORDER = ['marigold', 'kindred', 'nordlys', 'fieldstone', 'nocturne', 'aura'];

  var PROJECTS_DATA = {
    'marigold': {
      title: 'Marigold Coffee',
      subtitle: 'Transforming an artisanal roaster into a category-defining national specialty brand.',
      category: 'Brand Identity & Packaging — 2025',
      client: 'Marigold Specialty Roasters',
      industry: 'Specialty Coffee & D2C Retail',
      timeline: '10 Weeks',
      scope: 'Brand Strategy · Packaging Architecture · Shopify Plus',
      stat: '+185% Wholesale Growth',
      artTheme: 'linear-gradient(135deg, rgba(255, 197, 61, 0.12), rgba(255, 122, 104, 0.08)), #18121f',
      artBadge: 'Batch Roast № 42 · Micro-Lot Collection',
      artHeadline: 'Marigold Reserve Origin',
      artSpec: ['Elevation 1,950m', 'Washed Heirloom', 'Kurz Luxor Bronze Foil', 'Single Farm Yirgacheffe'],
      artIcon: '☕',
      metrics: [
        { num: '+185%', label: 'Wholesale Accounts', desc: 'Expanded into 42 states within 6 months of identity launch' },
        { num: '3.4x', label: 'E-commerce AOV', desc: 'Average cart value grew from $22 to $75 via subscription tiers' },
        { num: '99.4%', label: 'Compostable Substrate', desc: 'FSC-certified barrier pouches with zero petroleum plastics' }
      ],
      challenge: 'Marigold was a revered Portland micro-roaster whose word-of-mouth acclaim was bottlenecked by generic kraft coffee bags and an outdated single-page order form. To secure retail distribution in premium grocers and build an enduring direct-to-consumer subscriber base, they needed a distinctive identity that honored their biodynamic farming partners while commanding premium shelf presence.',
      solution: 'We engineered a vibrant visual identity anchored by a hand-drawn geometric botanical crest, warm golden amber foil embossing, and an intuitive elevation-based flavor taxonomy system. The digital flagship was built on Shopify Plus with custom roast subscription logic, interactive flavor profile wheel, and a wholesale portal.',
      keyMoves: [
        { title: 'Elevation-Based Packaging Taxonomy:', desc: 'Color-coded micro-lot pouches (1,600m to 2,200m) allowing coffee drinkers to instinctively navigate origin profiles.' },
        { title: 'Tactile Bronze Foil & Embossed Seal:', desc: 'Custom dual-pass hot-stamping on heavy textured Colorplan stock for unforgettable sensory touch on retail shelves.' },
        { title: 'Subscription Onboarding Funnel:', desc: 'Interactive 3-question brew questionnaire yielding an 82% initial subscription checkout rate.' }
      ],
      palette: [
        { name: 'Sun Gold', hex: '#ffc53d', role: 'Primary Brand Foil' },
        { name: 'Coral Flame', hex: '#ff7a68', role: 'Origin Highlight' },
        { name: 'Deep Espresso', hex: '#1c1521', role: 'Structural Obsidian' },
        { name: 'Cream Linen', hex: '#f6f1e9', role: 'Substrate White' }
      ],
      typeSpec: [
        { title: 'Display Typography', font: 'Unbounded 700 · 36pt', usage: 'Product titles, collection banners, roast numbers' },
        { title: 'Editorial Reading', font: 'Hanken Grotesk · 15pt / 1.6', usage: 'Origin stories, brew guides, flavor notes' },
        { title: 'Technical Spec Mono', font: 'JetBrains Mono · 11pt', usage: 'Altitude, lot codes, harvest coordinates, barcoding' }
      ],
      matSpec: [
        { title: 'Primary Pouch Stock', spec: 'G.F Smith Colorplan 350gsm + Bioplastic Barrier Lining' },
        { title: 'Embossing & Foil Die', spec: 'Curved Brass Sculptured Foil Die · Kurz Luxor Matte Bronze' },
        { title: 'Peel-Away Label', spec: 'Water-soluble compostable plant adhesive with pull tab' }
      ],
      deliverablesGrouped: [
        { group: 'Brand Strategy & Identity', items: ['Master Logomark & Floral Seal', 'Elevation Roast Taxonomy', 'Brand Guidelines Figma Kit', 'Retail Signage Guidelines'] },
        { group: 'Packaging System', items: ['12oz Whole Bean Pouches (4 Variants)', 'Single-Origin Collector Tins', 'Shipping Mailer Boxes', 'Custom Wax Seal Stamp'] },
        { group: 'Digital Platform', items: ['Custom Shopify Plus Theme', 'Subscription Frequency Engine', 'Origin Farm Interactive Map', 'Wholesale Portal Integration'] }
      ],
      techStack: ['Shopify Plus', 'Liquid Theme Engine', 'WebGL Canvas', 'Figma Tokens', 'Klaviyo Custom API'],
      quote: '"HALO gave our tiny shop a brand that finally matches how good the coffee actually is. Our wholesale inbox hasn\'t stopped since launch."',
      quoteAuthor: 'Marcus Vance',
      clientRole: 'Head Roaster & Co-Founder',
      clientCompany: 'Marigold Specialty Roasters (Portland, OR)',
      clientAvatar: 'MV'
    },
    'kindred': {
      title: 'Kindred Studio',
      subtitle: 'Elevating a prestigious Scandinavian interior architecture firm with Bauhaus digital clarity.',
      category: 'Web Architecture & Portfolio — 2025',
      client: 'Kindred Interior Architecture',
      industry: 'Architecture & Spatial Design',
      timeline: '8 Weeks',
      scope: 'Editorial Portfolio · Three.js Material Engine · Headless CMS',
      stat: '4.8x Lead Conversion',
      artTheme: 'linear-gradient(135deg, rgba(255, 122, 104, 0.12), rgba(169, 156, 181, 0.08)), #15111c',
      artBadge: 'CAD Spatial Architecture · Grid 1 : 1.618',
      artHeadline: 'Kindred Spatial Monograph',
      artSpec: ['Stockholm 59°19\'N', 'London Studio', 'Three.js Material Lab', 'Bespoke Sanity CMS'],
      artIcon: '🏛️',
      metrics: [
        { num: '4.8x', label: 'Lead Inquiries', desc: 'Pre-qualified architectural inquiries rose nearly 5-fold in Q1' },
        { num: '< 0.7s', label: 'Global Load Time', desc: 'Sub-second edge caching for 4K architectural image rendering' },
        { num: '4m 12s', label: 'Average Session Time', desc: '310% increase in portfolio dwell time through material viewer' }
      ],
      challenge: 'Kindred\'s portfolio spanned multimillion-dollar residential retreats across London and Stockholm, but their legacy website was a sluggish, template-constrained slider that failed to convey the textural depth, natural lighting, and millimeter-precise craftsmanship of their physical spaces.',
      solution: 'We devised an editorial, gallery-caliber digital platform built around a custom Three.js material space. Visitors can explore stone, timber, and brushed bronze swatches in real-time lighting simulations, alongside asymmetrical Bauhaus typographic grids that frame photography with museum-level poise.',
      keyMoves: [
        { title: 'Three.js Spatial Lighting Viewer:', desc: 'Interactive digital material lab allowing prospective clients to preview real tactile textures under diurnal light.' },
        { title: 'Asymmetric Architectural Layout:', desc: 'Strict proportional grid echoing Le Corbusier modular ratios for serene, whitespace-driven rhythm.' },
        { title: 'High-Touch Private Client Portal:', desc: 'Gated portal where clients review real-time CAD revisions, material moodboards, and procurement timelines.' }
      ],
      palette: [
        { name: 'Terracotta', hex: '#ff7a68', role: 'Warm Spatial Accent' },
        { name: 'Nordic Clay', hex: '#a99cb5', role: 'Architectural Shadow' },
        { name: 'Basalt Slate', hex: '#211929', role: 'Ground Surface' },
        { name: 'Alabaster', hex: '#faf7f2', role: 'Gallery Canvas' }
      ],
      typeSpec: [
        { title: 'Display Title Face', font: 'Unbounded 600 · 40pt', usage: 'Project case titles, studio philosophy chapters' },
        { title: 'Grid Reading Face', font: 'Hanken Grotesk · 16pt / 1.65', usage: 'Project essays, materials commentary, client briefings' },
        { title: 'Dimension Spec Mono', font: 'JetBrains Mono · 10pt', usage: 'Floor area, square meters, spatial coordinates' }
      ],
      matSpec: [
        { title: 'Monograph Paper Stock', spec: 'Arctic Volume White 170gsm Silk Uncoated' },
        { title: 'Binding & Cover', spec: 'Swiss Lay-flat Open Spine with Blind Debossed Terracotta Linen' },
        { title: 'Client Specifier Binder', spec: 'Anodized 3mm Aluminum Slipcase with Laser-Cut Monogram' }
      ],
      deliverablesGrouped: [
        { group: 'Digital Architecture', items: ['Custom Headless Portfolio Platform', 'Three.js Material Interactive Room', 'Private Client Project Vault', 'Dynamic Case Study CMS'] },
        { group: 'Brand Collateral', items: ['Architectural Identity Manual', 'Hardcover Monograph Vol. 01', 'Tactile Material Sample Boxes', 'Laser-Etched Metal Studio Signage'] }
      ],
      techStack: ['Next.js Edge', 'Three.js / WebGL', 'GSAP 3 ScrollTrigger', 'Sanity CMS', 'Tailwind CSS'],
      quote: '"HALO moved fast, asked the right questions, and never over-engineered anything. Our platform now commands immediate trust with high-net-worth clients."',
      quoteAuthor: 'Elin Lindqvist',
      clientRole: 'Principal Architect & Founder',
      clientCompany: 'Kindred Interior Architecture (Stockholm & London)',
      clientAvatar: 'EL'
    },
    'nordlys': {
      title: 'Nordlys Supply Co.',
      subtitle: 'Stormproof technical branding and Arctic field identity for extreme sub-zero apparel.',
      category: 'Brand System & Expeditions — 2024',
      client: 'Nordlys Technical Apparel',
      industry: 'Technical Outerwear & Equipment',
      timeline: '12 Weeks',
      scope: 'Field Brand System · Garment Badging · E-commerce',
      stat: 'Sold Out in 48 Hours',
      artTheme: 'linear-gradient(135deg, rgba(255, 197, 61, 0.1), rgba(169, 156, 181, 0.08)), #0e0d14',
      artBadge: 'Field Spec · 69°39\'N 18°57\'E · Arctic Circle',
      artHeadline: 'Nordlys Expedition Hard Shell',
      artSpec: ['Tromsø Norway', 'Gore-Tex Pro 3L', 'Topographic Isolines', 'Mil-Spec Silicone Badges'],
      artIcon: '❄️',
      metrics: [
        { num: '48h', label: 'Inventory Sellout', desc: 'First production run of 5,000 Arctic Hard Shells sold out in 48 hours' },
        { num: '12.4k', label: 'Expedition Waitlist', desc: 'Organic community growth driven by topographic gear telemetry drops' },
        { num: 'Sub-50kb', label: 'Low-Bandwidth Shell', desc: 'Engineered for satellite-linked mountain basecamp connections' }
      ],
      challenge: 'Operating above the Arctic Circle in Tromsø, Nordlys builds mountaineering gear tested in severe blizzards. Their brand identity needed to project uncompromising utilitarian resilience without feeling like generic outdoor gear cliches.',
      solution: 'We constructed a brutalist yet refined identity grounded in vector topographic elevation contour lines, precise GPS coordinates, safety amber hazard accents, and high-frequency welded silicone garment badges. The digital storefront was optimized for extreme speed and low-bandwidth connectivity.',
      keyMoves: [
        { title: 'Topographic Isoline Visual System:', desc: 'Contour lines derived from real Lyngen Alps topographical surveys rendered as subtle vector graphics.' },
        { title: 'Mil-Spec Silicone Badging:', desc: 'Ultrasonically welded badges designed to survive -45°C windchill and 100-knot storm conditions.' },
        { title: 'Satellite-Optimized Storefront:', desc: 'Zero-bloat web architecture enabling mountaineers to place gear orders over low-speed satellite links.' }
      ],
      palette: [
        { name: 'Safety Amber', hex: '#ffc53d', role: 'High-Visibility Hazard' },
        { name: 'Glacial Lavender', hex: '#a99cb5', role: 'Permafrost Reflection' },
        { name: 'Arctic Night', hex: '#15101a', role: 'Sub-Zero Obsidian' },
        { name: 'Frost White', hex: '#ffffff', role: 'Polar Signal' }
      ],
      typeSpec: [
        { title: 'Field Technical Display', font: 'Unbounded 700 · 34pt', usage: 'Garment collection codes, model indicators' },
        { title: 'Expedition Body', font: 'Hanken Grotesk · 14pt / 1.55', usage: 'Field reports, survival specifications, care manuals' },
        { title: 'GPS Telemetry Mono', font: 'JetBrains Mono · 10pt', usage: 'Coordinates, barometric ratings, Gore-Tex denier specs' }
      ],
      matSpec: [
        { title: 'Garment Badges', spec: 'Molded High-Density Silicone with Reflective 3M Scotchlite Thread' },
        { title: 'Hangtags & Manuals', spec: '100% Recycled Polypropylene Waterproof Synthetic Paper' },
        { title: 'Hardware Accents', spec: 'Matte PVD-Coated Zinc Zipper Pulls with Laser-Etched Coordinates' }
      ],
      deliverablesGrouped: [
        { group: 'Field Brand Identity', items: ['Master Logotype & Topo Vector Library', 'GPS Coordinates Field Taxonomy', 'Garment Badging Construction Guide', 'Sub-Zero Visual Guidelines'] },
        { group: 'Physical Production', items: ['Welded Silicone Sleeve Badges', 'Waterproof Expedition Hangtags', 'Thermal-Bonded Care Labels', 'Weatherproof Equipment Duffles'] },
        { group: 'Digital Experience', items: ['Shopify Custom Field Storefront', 'Low-Bandwidth Satellite Mode', '3D Technical Garment Cutaways', 'Expedition Journal CMS'] }
      ],
      techStack: ['Shopify Storefront API', 'Vanilla JavaScript', 'SVG Morphing', 'Cloudflare Workers', 'Zero Dep Stack'],
      quote: '"Our new site books more consults in a month than the old one did in a year. The technical precision of HALO\'s design matched our garment engineering exactly."',
      quoteAuthor: 'Henrik Solberg',
      clientRole: 'Founder & Expedition Lead',
      clientCompany: 'Nordlys Technical Apparel (Tromsø, Norway)',
      clientAvatar: 'HS'
    },
    'fieldstone': {
      title: 'Fieldstone Pottery',
      subtitle: 'Crafting a digital sanctuary and limited-drop e-commerce engine for an artisanal ceramic atelier.',
      category: 'Web Experience & Atelier Identity — 2024',
      client: 'Fieldstone Ceramics Atelier',
      industry: 'Fine Ceramics & Artisan Craft',
      timeline: '6 Weeks',
      scope: 'Atelier Brand Identity · Limited-Drop E-Commerce · Film Direction',
      stat: '3,200+ Waitlist Subscribers',
      artTheme: 'linear-gradient(135deg, rgba(255, 197, 61, 0.08), rgba(110, 98, 121, 0.12)), #16121a',
      artBadge: 'Cone 10 Firing · 1,280°C Reduction Kiln',
      artHeadline: 'Fieldstone Stoneware Archive',
      artSpec: ['Hudson Valley NY', 'Hand-Thrown Porcelain', 'Ochre Glaze Mineral Slip', 'Numbered Limited Drops'],
      artIcon: '🏺',
      metrics: [
        { num: '3,200+', label: 'Kiln Drop Waitlist', desc: 'Collectors subscribing for SMS alerts before every seasonal firing' },
        { num: '< 4 min', label: 'Average Sellout Time', desc: '150 unique wheel-thrown vessels sold out in under four minutes' },
        { num: '88%', label: 'Repeat Collector Rate', desc: 'Exceptional retention driven by personalized digital certificates' }
      ],
      challenge: 'Clara Chen\'s stoneware pottery had a devoted regional following, but her limited kiln drops were being overwhelmed by unmanageable Instagram DMs and manual invoices. She wanted an elegant, calming digital atelier that preserved the unhurried craft of wheel-thrown ceramics without feeling commercialized.',
      solution: 'We designed a tactile, warm digital sanctuary featuring raw stoneware earth tones, delicate wheel-thrown profile drawings, subtle film grain, and an automated drop release mechanism with live countdowns and authenticated numbered certificates.',
      keyMoves: [
        { title: 'Kiln Firing Countdown System:', desc: 'Dynamic countdown clock synced to the kiln cooling cycle, building anticipation for each numbered collection drop.' },
        { title: 'Tactile Glaze Profile Cards:', desc: 'Interactive visual swatches detailing glaze mineral compositions, reduction atmosphere, and firing temperatures.' },
        { title: 'Artisan Packaging & Certifications:', desc: 'Unbleached kraft paper wrapping stamped with organic soy ink and numbered kiln batch certificates.' }
      ],
      palette: [
        { name: 'Ochre Glaze', hex: '#ffc53d', role: 'Reduction Lustre' },
        { name: 'Raw Umber', hex: '#6e6279', role: 'Stoneware Clay' },
        { name: 'Smoked Kiln', hex: '#1c1521', role: 'Kiln Atmosphere' },
        { name: 'Pebble Grey', hex: '#d6cedc', role: 'Raw Slip' }
      ],
      typeSpec: [
        { title: 'Display Heading', font: 'Unbounded 500 · 32pt', usage: 'Collection names, vessel series identifiers' },
        { title: 'Atelier Prose', font: 'Hanken Grotesk · 15pt / 1.7', usage: 'Artist statements, clay sourcing narratives, care instructions' },
        { title: 'Batch Stamp Mono', font: 'JetBrains Mono · 11pt', usage: 'Cone temperature (Cone 10), batch numbers, vessel weights' }
      ],
      matSpec: [
        { title: 'Packaging Wrap', spec: '120gsm Unbleached Hemp & Recycled Cotton Paper' },
        { title: 'Maker Stamp', spec: 'Hand-Carved Cherry Wood Potter Stamp with Water-Resistant Soy Ink' },
        { title: 'Certificate of Authenticity', spec: 'Letterpress Stamped 450gsm Handmade Cotton Rag' }
      ],
      deliverablesGrouped: [
        { group: 'Atelier Visual Identity', items: ['Hand-Drawn Ceramic Marks', 'Glaze Swatch Visual Standards', 'Certificate of Craftsmanship', 'Kiln Stamp System'] },
        { group: 'Drop Platform', items: ['Custom Shopify Drop Engine', 'SMS Drop Alert Funnel', 'High-Res 360° Vessel Rotators', 'Atelier Short Film Framing'] }
      ],
      techStack: ['Shopify Plus', 'Klaviyo SMS', 'Custom WebGL Smooth Zoom', 'Cloudinary Video CDN'],
      quote: '"Working with HALO felt like working with an in-house team who deeply cared about clay. They preserved the quiet soul of my studio while completely solving my drop logistics."',
      quoteAuthor: 'Clara Chen',
      clientRole: 'Founder & Ceramicist',
      clientCompany: 'Fieldstone Ceramics Atelier (Hudson Valley, NY)',
      clientAvatar: 'CC'
    },
    'nocturne': {
      title: 'Nocturne Records',
      subtitle: 'Kinetic vinyl sleeve architecture and real-time audio motion systems for an underground Berlin record label.',
      category: 'Branding & Motion Systems — 2023',
      client: 'Nocturne Vinyl & Audio Press',
      industry: 'Music, Vinyl & Electronic Arts',
      timeline: '10 Weeks',
      scope: 'Label Master Brand · Vinyl Sleeve Standards · Motion Design Kit',
      stat: 'Grammy-Nominated Release Pack',
      artTheme: 'linear-gradient(135deg, rgba(255, 197, 61, 0.12), rgba(255, 122, 104, 0.12)), #0c0910',
      artBadge: 'Matrix NOC-009-BERLIN · 33⅓ RPM Heavy 180g',
      artHeadline: 'Nocturne Sound Architecture',
      artSpec: ['Berlin Mastered', 'Concentric Grooves', 'Real-Time Audio Waveforms', 'Foil Stamped Gatefold'],
      artIcon: '🎵',
      metrics: [
        { num: 'Grammy', label: 'Packaging Nominee', desc: 'Nominated for Best Recording Package for NOC-009 Berlin Ambient release' },
        { num: '18,000', label: 'Limited Vinyl Pressings', desc: '14 consecutive sold-out vinyl drops across Europe and Japan' },
        { num: '+220%', label: 'Label Club Subscribers', desc: 'Direct-to-fan subscription club recurring annual revenue expansion' }
      ],
      challenge: 'Nocturne was pressing cutting-edge experimental electronic and modern classical vinyl in Berlin, but their releases lacked a cohesive visual universe. Each artist release was reinventing the wheel, leading to brand dilution and production delays with pressing plants.',
      solution: 'We devised an audacious, kinetic identity centered on concentric vinyl micro-groove geometries, electric amber and coral neon typography, and a modular typographic grid that pressing plants can execute flawlessly across heavyweight 180g gatefolds and inner sleeves.',
      keyMoves: [
        { title: 'Concentric Groove Sleeve Architecture:', desc: 'Standardized typographic grid aligning artist tracklists directly along the radial arcs of vinyl records.' },
        { title: 'Master Matrix Typography Tokens:', desc: 'Bespoke lacquer etching typography that doubles as collector catalog codes and run-out groove stamps.' },
        { title: 'Audio-Reactive Motion Tooling:', desc: 'Custom motion design kit that converts audio stem waveforms into pulsing amber promo assets automatically.' }
      ],
      palette: [
        { name: 'Neon Amber', hex: '#ffc53d', role: 'Master Signal' },
        { name: 'Electric Coral', hex: '#ff7a68', role: 'Frequency Peak' },
        { name: 'Deep Vinyl Black', hex: '#0e0b11', role: 'Heavy 180g Substrate' },
        { name: 'Studio Silver', hex: '#e2dbe6', role: 'Lacquer Micro-Groove' }
      ],
      typeSpec: [
        { title: 'Matrix Label Face', font: 'Unbounded 800 · 36pt', usage: 'Release catalog codes, artist nameplates, spine typography' },
        { title: 'Liner Notes Grotesk', font: 'Hanken Grotesk · 13pt / 1.5', usage: 'Track listings, synthesizer instrumentation, studio credits' },
        { title: 'Audio Spec Monospace', font: 'JetBrains Mono · 11pt', usage: '45 RPM / 33⅓ RPM indicators, master frequency, matrix codes' }
      ],
      matSpec: [
        { title: 'Vinyl Gatefold Jacket', spec: 'Heavy 400gsm Reverse-Board Cardstock with Spot Gloss UV Varnish' },
        { title: 'Inner Sleeve', spec: 'Poly-Lined Antistatic Black Paper with Foil Stamped Matrix Grid' },
        { title: 'Center Label', spec: 'Heat-Resistant Uncoated 100gsm Label Pressed at 160°C' }
      ],
      deliverablesGrouped: [
        { group: 'Label Master Brand', items: ['Master Logomark & Lacquer Seal', 'Vinyl Sleeve Modular Standards', 'Color & Neon Foil Hierarchy', 'Catalog Numbering System'] },
        { group: 'Motion & Interactive', items: ['Audio-Reactive Waveform Motion Pack', 'Bandcamp & Spotify Canvas Templates', 'Kinetic Social Announce Toolkit', 'Press Kit One-Sheet Generators'] }
      ],
      techStack: ['Three.js Audio API', 'After Effects Expressions', 'GSAP 3 Motion', 'Figma Print Tokens'],
      quote: '"HALO captured the raw, tactile soul of vinyl in a completely modern digital and physical language. The Grammy nomination was just the cherry on top."',
      quoteAuthor: 'Klaus Richter',
      clientRole: 'Label Director & Mastering Engineer',
      clientCompany: 'Nocturne Vinyl & Audio Press (Berlin)',
      clientAvatar: 'KR'
    },
    'aura': {
      title: 'Aura Botanical',
      subtitle: 'Pioneering bio-cellular visual architecture and sustainable apothecary packaging for Scandinavian skincare.',
      category: 'Identity & Bio-Packaging — 2025',
      client: 'Aura Bio-Cosmetics',
      industry: 'Clean Biotech & Luxury Skincare',
      timeline: '11 Weeks',
      scope: 'Brand Architecture · Amber Flask Packaging · Flagship E-Commerce',
      stat: '+240% DTC Subscriptions',
      artTheme: 'linear-gradient(135deg, rgba(45, 212, 191, 0.12), rgba(110, 231, 183, 0.08)), #091312',
      artBadge: 'Supercritical CO2 Botanical Extract · ISO-9001',
      artHeadline: 'Aura Bio-Cellular Formula',
      artSpec: ['Copenhagen Bio-Lab', 'Active Lipids 98.4%', 'Miron Violet Glass', 'Eco-Certified Vegan'],
      artIcon: '🌿',
      metrics: [
        { num: '+240%', label: 'Recurring Subscriptions', desc: 'D2C subscription tier grew by 240% within four months of launch' },
        { num: '68%', label: 'Checkout Conversion', desc: 'Streamlined apothecary routine builder increased checkout conversion' },
        { num: 'Net Zero', label: 'Packaging Footprint', desc: '100% infinitely recyclable ultraviolet glass and compostable cartons' }
      ],
      challenge: 'Aura had patented breakthrough supercritical bio-cellular plant extraction formulations in Copenhagen, but existing clean-beauty visual tropes (sterile medical white or generic pastel greens) failed to communicate their sophisticated scientific innovation and organic Scandinavian luxury.',
      solution: 'We conceived a striking bio-cellular identity pairing luminous bio-teal and cellular mint accents against deep spruce obsidian, graduated amber tincture flask typography, tactile blind micro-embossed secondary packaging, and an interactive formulation ingredient transparency platform.',
      keyMoves: [
        { title: 'Cellular Micro-Matrix Geometry:', desc: 'Bespoke hexagonal lattice illustrations representing active botanical lipid structures and extraction ratios.' },
        { title: 'Graduated Amber Tincture Silhouettes:', desc: 'Precision milliliter measurement markings integrated directly into primary glass bottle typography.' },
        { title: 'Interactive Ingredient Provenance Portal:', desc: 'Shopify Plus experience allowing consumers to trace every active bio-lipid back to its Scandinavian organic harvest lot.' }
      ],
      palette: [
        { name: 'Bio Teal', hex: '#2dd4bf', role: 'Active Compound Glow' },
        { name: 'Cellular Mint', hex: '#6ee7b7', role: 'Botanical Lipid' },
        { name: 'Deep Spruce', hex: '#081410', role: 'Cellular Canvas' },
        { name: 'Pure Alabaster', hex: '#f0fdfa', role: 'Clean Laboratory' }
      ],
      typeSpec: [
        { title: 'Biotech Display', font: 'Unbounded 600 · 36pt', usage: 'Formulation serum codes, product titles' },
        { title: 'Clinical Clarity Grotesk', font: 'Hanken Grotesk · 14pt / 1.6', usage: 'Dermatological study results, botanical ingredients, usage regimen' },
        { title: 'Formula Spec Mono', font: 'JetBrains Mono · 10pt', usage: 'Active lipid concentrations (%), extraction temps, batch numbers' }
      ],
      matSpec: [
        { title: 'Primary Packaging', spec: 'Miron Violet Glass Dropper Bottles (Preserves Active Bio-Photons)' },
        { title: 'Secondary Carton', spec: 'FSC-Certified Extract Paper Made from Upcycled Olive Waste (300gsm)' },
        { title: 'Finishing Technique', spec: 'Blind Sculptured Micro-Embossing + Biodegradable Matte Varnish' }
      ],
      deliverablesGrouped: [
        { group: 'Brand Strategy & Identity', items: ['Master Biomarker Logotype', 'Cellular Matrix Illustration Library', 'Formulation Naming System', 'Clinical Trial Infographic Guidelines'] },
        { group: 'Packaging Engineering', items: ['Miron Violet Dropper Specifications', '50ml Treatment Cream Jars', 'Upcycled Olive Pulp Outer Cartons', 'Eco-Refill Aluminum Tubes'] },
        { group: 'Digital Flagship', items: ['Shopify Plus Headless Store', 'Skin Routine Formulation Builder', 'Ingredient Provenance Engine', 'Klaviyo Lifecycle Automation'] }
      ],
      techStack: ['Shopify Plus', 'Hydrogen / Remix', 'Tailwind CSS', 'Figma Bio Tokens', 'Klaviyo APIs'],
      quote: '"HALO turned complex botanical science into an effortless, luxurious visual narrative. Our customers understand the biotechnology immediately, and the packaging is stunning."',
      quoteAuthor: 'Astrid Møller',
      clientRole: 'Formulation Lead & Co-Founder',
      clientCompany: 'Aura Bio-Cosmetics (Copenhagen, Denmark)',
      clientAvatar: 'AM'
    }
  };

  var modal = document.getElementById('projectModal');
  var modalTitle = document.getElementById('modalTitle');
  var modalSubtitle = document.getElementById('modalSubtitle');
  var modalCategory = document.getElementById('modalCategory');
  var modalClient = document.getElementById('modalClient');
  var modalIndustry = document.getElementById('modalIndustry');
  var modalTimeline = document.getElementById('modalTimeline');
  var modalScope = document.getElementById('modalScope');
  var modalHeroArt = document.getElementById('modalHeroArt');
  var modalKpiGrid = document.getElementById('modalKpiGrid');
  var modalChallenge = document.getElementById('modalChallenge');
  var modalSolution = document.getElementById('modalSolution');
  var modalMovesList = document.getElementById('modalMovesList');
  var modalPalette = document.getElementById('modalPalette');
  var modalTypeSpec = document.getElementById('modalTypeSpec');
  var modalMatSpec = document.getElementById('modalMatSpec');
  var modalGroupedDeliverables = document.getElementById('modalGroupedDeliverables');
  var modalTechStack = document.getElementById('modalTechStack');
  var modalQuote = document.getElementById('modalQuote');
  var modalAuthor = document.getElementById('modalAuthor');
  var modalReviewerRole = document.getElementById('modalReviewerRole');
  var modalReviewerCompany = document.getElementById('modalReviewerCompany');
  var modalAvatar = document.getElementById('modalAvatar');
  var modalClose = document.getElementById('modalClose');
  var modalPrevBtn = document.getElementById('modalPrevBtn');
  var modalNextBtn = document.getElementById('modalNextBtn');
  var modalPrevLabel = document.getElementById('modalPrevLabel');
  var modalNextLabel = document.getElementById('modalNextLabel');
  var modalCycleCounter = document.getElementById('modalCycleCounter');
  var modalInquireBtn = document.getElementById('modalInquireBtn');
  var currentProjectId = 'marigold';

  function renderModalHeroArt(data) {
    if (!modalHeroArt) return;
    modalHeroArt.style.background = data.artTheme || '#15101a';

    var specBadges = (data.artSpec || []).map(function (s) {
      return '<span>' + s + '</span>';
    }).join('<span style="opacity: 0.35;">·</span>');

    modalHeroArt.innerHTML =
      '<div class="modal-art-inner">' +
        '<div class="modal-art-badge">' + (data.artBadge || 'HALO Studio Archive') + '</div>' +
        '<div class="modal-art-emblem">' + (data.artIcon || '✦') + '</div>' +
        '<h4 class="modal-art-headline">' + (data.artHeadline || data.title) + '</h4>' +
        '<div class="modal-art-spec-strip">' + specBadges + '</div>' +
      '</div>';
  }

  function renderModalKpiGrid(metrics) {
    if (!modalKpiGrid) return;
    modalKpiGrid.innerHTML = '';
    (metrics || []).forEach(function (m) {
      var card = document.createElement('div');
      card.className = 'modal-kpi-card';
      card.innerHTML =
        '<div class="modal-kpi-num">' + m.num + '</div>' +
        '<div class="modal-kpi-label">' + m.label + '</div>' +
        '<div class="modal-kpi-desc">' + m.desc + '</div>';
      modalKpiGrid.appendChild(card);
    });
  }

  function renderModalKeyMoves(moves) {
    if (!modalMovesList) return;
    modalMovesList.innerHTML = '';
    (moves || []).forEach(function (move, idx) {
      var item = document.createElement('div');
      item.className = 'modal-move-item';
      item.innerHTML =
        '<span class="modal-move-num">0' + (idx + 1) + '</span>' +
        '<div class="modal-move-text"><strong>' + move.title + '</strong> ' + move.desc + '</div>';
      modalMovesList.appendChild(item);
    });
  }

  function renderModalPalette(palette) {
    if (!modalPalette) return;
    modalPalette.innerHTML = '';
    (palette || []).forEach(function (col) {
      var swatch = document.createElement('div');
      swatch.className = 'palette-swatch';
      swatch.setAttribute('data-cursor-hover', '');
      swatch.innerHTML =
        '<span class="swatch-color" style="background-color: ' + col.hex + '"></span>' +
        '<div class="swatch-info">' +
          '<span class="swatch-name">' + col.name + '</span>' +
          '<span class="swatch-hex">' + col.hex + '</span>' +
          (col.role ? '<span class="swatch-role">' + col.role + '</span>' : '') +
        '</div>';
      swatch.addEventListener('click', function () {
        navigator.clipboard.writeText(col.hex);
        showToast('Copied ' + col.hex + ' (' + col.name + ') to clipboard!');
      });
      modalPalette.appendChild(swatch);
    });
  }

  function renderModalTypeSpec(specs) {
    if (!modalTypeSpec) return;
    modalTypeSpec.innerHTML = '';
    var list = document.createElement('div');
    list.className = 'spec-card-list';
    (specs || []).forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'spec-card';
      card.innerHTML =
        '<div class="spec-card-title">' + item.title + '</div>' +
        '<div class="spec-card-val">' + item.font + '</div>' +
        '<div style="font-size: 11px; color: var(--ink-faint);">' + item.usage + '</div>';
      list.appendChild(card);
    });
    modalTypeSpec.appendChild(list);
  }

  function renderModalMatSpec(specs) {
    if (!modalMatSpec) return;
    modalMatSpec.innerHTML = '';
    var list = document.createElement('div');
    list.className = 'spec-card-list';
    (specs || []).forEach(function (item) {
      var card = document.createElement('div');
      card.className = 'spec-card';
      card.innerHTML =
        '<div class="spec-card-title">' + item.title + '</div>' +
        '<div class="spec-card-val" style="color: var(--accent);">' + item.spec + '</div>';
      list.appendChild(card);
    });
    modalMatSpec.appendChild(list);
  }

  function renderModalGroupedDeliverables(groups) {
    if (!modalGroupedDeliverables) return;
    modalGroupedDeliverables.innerHTML = '';
    (groups || []).forEach(function (g) {
      var box = document.createElement('div');
      box.className = 'deliverable-group';
      var itemsHtml = (g.items || []).map(function (it) {
        return '<li>' + it + '</li>';
      }).join('');
      box.innerHTML =
        '<div class="deliverable-group-title">' + g.group + '</div>' +
        '<ul>' + itemsHtml + '</ul>';
      modalGroupedDeliverables.appendChild(box);
    });
  }

  function renderModalTechStack(stack) {
    if (!modalTechStack) return;
    modalTechStack.innerHTML = '';
    (stack || []).forEach(function (tech) {
      var pill = document.createElement('span');
      pill.className = 'tech-pill';
      pill.textContent = tech;
      modalTechStack.appendChild(pill);
    });
  }

  function updateModalCycleControls() {
    var curIdx = PROJECT_ORDER.indexOf(currentProjectId);
    if (curIdx === -1) curIdx = 0;
    var prevIdx = (curIdx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length;
    var nextIdx = (curIdx + 1) % PROJECT_ORDER.length;

    var prevData = PROJECTS_DATA[PROJECT_ORDER[prevIdx]];
    var nextData = PROJECTS_DATA[PROJECT_ORDER[nextIdx]];

    if (modalPrevLabel && prevData) modalPrevLabel.textContent = prevData.title;
    if (modalNextLabel && nextData) modalNextLabel.textContent = nextData.title;
    if (modalCycleCounter) {
      modalCycleCounter.textContent = '0' + (curIdx + 1) + ' / 0' + PROJECT_ORDER.length;
    }
  }

  function resetModalTabs() {
    document.querySelectorAll('.modal-tab-btn').forEach(function (btn) {
      var isStrategy = btn.getAttribute('data-tab') === 'strategy';
      btn.classList.toggle('is-active', isStrategy);
      btn.setAttribute('aria-selected', isStrategy ? 'true' : 'false');
    });
    document.querySelectorAll('.modal-tab-panel').forEach(function (panel) {
      panel.classList.toggle('is-active', panel.id === 'tabPanelStrategy');
    });
  }

  function openProjectModal(id) {
    var data = PROJECTS_DATA[id];
    if (!data || !modal) return;
    currentProjectId = id;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle || '';
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalClient) modalClient.textContent = data.client;
    if (modalIndustry) modalIndustry.textContent = data.industry || 'Specialty';
    if (modalTimeline) modalTimeline.textContent = data.timeline || '8 Weeks';
    if (modalScope) modalScope.textContent = data.scope || 'Brand & Digital';

    if (modalChallenge) modalChallenge.textContent = data.challenge;
    if (modalSolution) modalSolution.textContent = data.solution;

    if (modalQuote) modalQuote.textContent = data.quote;
    if (modalAuthor) modalAuthor.textContent = data.quoteAuthor;
    if (modalReviewerRole) modalReviewerRole.textContent = data.clientRole || '';
    if (modalReviewerCompany) modalReviewerCompany.textContent = data.clientCompany || data.client;
    if (modalAvatar) modalAvatar.textContent = data.clientAvatar || 'HL';

    renderModalHeroArt(data);
    renderModalKpiGrid(data.metrics);
    renderModalKeyMoves(data.keyMoves);
    renderModalPalette(data.palette);
    renderModalTypeSpec(data.typeSpec);
    renderModalMatSpec(data.matSpec);
    renderModalGroupedDeliverables(data.deliverablesGrouped);
    renderModalTechStack(data.techStack);

    updateModalCycleControls();
    resetModalTabs();

    modal.classList.add('is-open');
    body.classList.add('has-modal-open');
    body.style.overflow = 'hidden';

    // Reset scroll position of dialog when opening
    var dialog = modal.querySelector('.modal-scroll-body');
    if (dialog) dialog.scrollTop = 0;
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    body.classList.remove('has-modal-open');
    body.style.overflow = '';
  }

  // Section Tab Navigation Handler
  document.querySelectorAll('.modal-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.modal-tab-btn').forEach(function (b) {
        var match = b.getAttribute('data-tab') === targetTab;
        b.classList.toggle('is-active', match);
        b.setAttribute('aria-selected', match ? 'true' : 'false');
      });

      var targetPanelId = 'tabPanel' + targetTab.charAt(0).toUpperCase() + targetTab.slice(1);
      document.querySelectorAll('.modal-tab-panel').forEach(function (panel) {
        panel.classList.toggle('is-active', panel.id === targetPanelId);
      });
    });
  });

  // Project Cycle Handlers
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener('click', function () {
      var curIdx = PROJECT_ORDER.indexOf(currentProjectId);
      var prevIdx = (curIdx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length;
      openProjectModal(PROJECT_ORDER[prevIdx]);
    });
  }
  if (modalNextBtn) {
    modalNextBtn.addEventListener('click', function () {
      var curIdx = PROJECT_ORDER.indexOf(currentProjectId);
      var nextIdx = (curIdx + 1) % PROJECT_ORDER.length;
      openProjectModal(PROJECT_ORDER[nextIdx]);
    });
  }

  // Inquire Action Bridge
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', function () {
      var curData = PROJECTS_DATA[currentProjectId];
      closeProjectModal();
      var contactSection = document.getElementById('contact');
      var contactMsg = document.getElementById('contactMsg');
      if (contactMsg && curData) {
        contactMsg.value = 'Hello HALO Studio, I reviewed your "' + curData.title + '" case study (' + curData.category + ') and would like to discuss a similar project scope for our team.';
      }
      if (contactSection) {
        setTimeout(function () {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          if (contactMsg) contactMsg.focus();
        }, 150);
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProjectModal();
    });
  }
  window.addEventListener('keydown', function (e) {
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      var curIdx = PROJECT_ORDER.indexOf(currentProjectId);
      var prevIdx = (curIdx - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length;
      openProjectModal(PROJECT_ORDER[prevIdx]);
    } else if (e.key === 'ArrowRight') {
      var curIdx2 = PROJECT_ORDER.indexOf(currentProjectId);
      var nextIdx2 = (curIdx2 + 1) % PROJECT_ORDER.length;
      openProjectModal(PROJECT_ORDER[nextIdx2]);
    }
  });

  // Bind click on work cards
  document.querySelectorAll('.work-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var id = card.getAttribute('data-project');
      if (id) openProjectModal(id);
    });
  });

  /* ==========================================================================
     Selected Work Carousel (Hero-style content swap, not a scrolling track — the
     active card is shown in place via display toggling, so switching projects
     never clips/cuts a card behind the track's edge like a scrolling "window" would.)
     ========================================================================== */
  var workTrack = document.getElementById('workTrack');
  var workPrev = document.getElementById('workPrev');
  var workNext = document.getElementById('workNext');
  var workDotsContainer = document.getElementById('workDots');
  var workDots = [];
  var workCards = document.querySelectorAll('.work-card');
  var workIndex = 0;

  if (workTrack && workCards.length > 0) {
    function renderDots() {
      if (!workDotsContainer) return;
      workDotsContainer.innerHTML = '';
      workCards.forEach(function (card, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'work-dot';
        dot.setAttribute('data-index', String(i));
        dot.setAttribute('data-cursor-hover', '');
        var titleEl = card.querySelector('.work-meta h3');
        dot.setAttribute('aria-label', 'Go to ' + (titleEl ? titleEl.textContent : 'project ' + (i + 1)));
        dot.addEventListener('click', function () {
          showWorkCard(parseInt(this.getAttribute('data-index'), 10));
        });
        workDotsContainer.appendChild(dot);
      });
      workDots = workDotsContainer.querySelectorAll('.work-dot');
    }

    function updateSliderState() {
      workDots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === workIndex);
      });

      if (workPrev) {
        var atStart = workIndex <= 0;
        workPrev.disabled = atStart;
        workPrev.style.opacity = atStart ? '0.35' : '1';
        workPrev.style.pointerEvents = atStart ? 'none' : 'auto';
      }
      if (workNext) {
        var atEnd = workIndex >= workCards.length - 1;
        workNext.disabled = atEnd;
        workNext.style.opacity = atEnd ? '0.35' : '1';
        workNext.style.pointerEvents = atEnd ? 'none' : 'auto';
      }
    }

    function showWorkCard(index) {
      if (index < 0) index = 0;
      if (index >= workCards.length) index = workCards.length - 1;
      workIndex = index;
      workCards.forEach(function (card, i) {
        card.classList.toggle('is-active', i === index);
      });
      updateSliderState();
    }

    if (workPrev) {
      workPrev.addEventListener('click', function (e) {
        e.preventDefault();
        showWorkCard(workIndex - 1);
      });
    }

    if (workNext) {
      workNext.addEventListener('click', function (e) {
        e.preventDefault();
        showWorkCard(workIndex + 1);
      });
    }

    renderDots();
    showWorkCard(0);
  }

  /* Toast Notification */
  function showToast(msg) {
    var toast = document.getElementById('haloToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'haloToast';
      toast.className = 'halo-toast';
      body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2200);
  }

  /* ==========================================================================
     6. Interactive Brand Identity Lab
     ========================================================================== */
  var LAB_CONFIGS = {
    vibes: {
      'minimal': {
        font: 'var(--font-body)',
        text: 'Quiet craft with deliberate whitespace and subtle nuance.',
        tagline: 'Quiet Precision',
        markShape: 'square'
      },
      'kinetic': {
        font: 'var(--font-display)',
        text: 'Bold geometric forms, high energy, and motion-first typography.',
        tagline: 'Bold & Kinetic',
        markShape: 'ring'
      },
      'editorial': {
        font: 'Georgia, serif',
        text: 'High-contrast luxury, literary hierarchy, and timeless craft.',
        tagline: 'Editorial Luxury',
        markShape: 'arch'
      },
      'brutalist': {
        font: 'monospace',
        text: 'Raw architectural grids, mechanical details, and zero decoration.',
        tagline: 'Brutalist Studio',
        markShape: 'cross'
      }
    },
    palettes: {
      'amber': { p1: '#ffc53d', p2: '#ff7a68', bg: '#1c1521', ink: '#f6f1e9', name: 'Sun & Coral' },
      'quartz': { p1: '#a99cb5', p2: '#ffc53d', bg: '#15101a', ink: '#ffffff', name: 'Midnight Quartz' },
      'clay': { p1: '#ff7a68', p2: '#d4a373', bg: '#221921', ink: '#faedcd', name: 'Desert Clay' },
      'mineral': { p1: '#2dd4bf', p2: '#38bdf8', bg: '#0d1821', ink: '#f0fdfa', name: 'Mineral Teal' }
    }
  };

  var currentVibe = 'kinetic';
  var currentPalette = 'amber';

  var labPreviewCard = document.getElementById('labPreviewCard');
  var labSpecimenTitle = document.getElementById('labSpecimenTitle');
  var labSpecimenTagline = document.getElementById('labSpecimenTagline');
  var labSpecimenDesc = document.getElementById('labSpecimenDesc');
  var labColorSwatches = document.getElementById('labColorSwatches');
  var labMark = document.getElementById('labMark');
  var labMarkLetter = document.getElementById('labMarkLetter');
  var labApplyBtn = document.getElementById('labApplyBtn');

  function updateLab() {
    var v = LAB_CONFIGS.vibes[currentVibe];
    var p = LAB_CONFIGS.palettes[currentPalette];
    if (!v || !p || !labPreviewCard) return;

    labPreviewCard.style.backgroundColor = p.bg;
    labPreviewCard.style.color = p.ink;
    labPreviewCard.style.borderColor = p.p1;

    if (labSpecimenTitle) {
      labSpecimenTitle.style.fontFamily = v.font;
      labSpecimenTitle.style.color = p.p1;
    }
    if (labSpecimenTagline) {
      labSpecimenTagline.textContent = v.tagline + ' — ' + p.name;
    }
    if (labSpecimenDesc) {
      labSpecimenDesc.textContent = v.text;
    }

    if (labColorSwatches) {
      labColorSwatches.innerHTML =
        '<span style="background:' + p.p1 + '"></span>' +
        '<span style="background:' + p.p2 + '"></span>' +
        '<span style="background:' + p.ink + '"></span>';
    }

    if (labMark) {
      labMark.style.borderColor = p.p1;
      labMark.style.background = 'radial-gradient(circle, ' + p.p1 + ' 0%, ' + p.p2 + ' 100%)';
      if (v.markShape === 'square') { labMark.style.borderRadius = '4px'; labMark.style.borderWidth = '2px'; }
      else if (v.markShape === 'ring') { labMark.style.borderRadius = '50%'; labMark.style.borderWidth = '2px'; }
      else if (v.markShape === 'arch') { labMark.style.borderRadius = '24px 24px 4px 4px'; labMark.style.borderWidth = '2px'; }
      else { labMark.style.borderRadius = '0'; labMark.style.borderWidth = '3px'; }
    }
    if (labMarkLetter) {
      labMarkLetter.style.fontFamily = v.font;
      labMarkLetter.style.color = p.ink;
    }
  }

  document.querySelectorAll('.lab-vibe-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.lab-vibe-btn').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentVibe = btn.getAttribute('data-vibe');
      updateLab();
    });
  });

  document.querySelectorAll('.lab-palette-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.lab-palette-btn').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentPalette = btn.getAttribute('data-palette');
      updateLab();
    });
  });

  if (labApplyBtn) {
    labApplyBtn.addEventListener('click', function () {
      var briefText = 'Hello HALO Team,\n\nI tested the Brand Lab and loved the [' +
        LAB_CONFIGS.vibes[currentVibe].tagline + '] aesthetic with the [' +
        LAB_CONFIGS.palettes[currentPalette].name + '] palette.\n\nWe would like to explore this aesthetic for our project.';
      
      var contactMsg = document.getElementById('contactMsg');
      if (contactMsg) {
        contactMsg.value = briefText;
      }
      var contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      showToast('Brand direction added to your project brief below!');
    });
  }

  updateLab();

  /* ==========================================================================
     7. Interactive Process Stepper
     ========================================================================== */
  var PROCESS_STEPS = [
    {
      num: '01',
      title: 'Discover & Strategize',
      summary: 'A short, focused immersion into your business economics, market positioning, and audience psychology.',
      deliverables: ['Competitive Landscape Audit', 'Brand Persona & Tone Principles', 'Creative Direction Moodboards', 'Project Roadmap & Technical Architecture'],
      timeline: 'Week 1–2',
      commitment: 'Two 60-min discovery sessions'
    },
    {
      num: '02',
      title: 'Design & Identity Architecture',
      summary: 'Translating strategic insight into distinctive visual identity systems and modular web design prototypes.',
      deliverables: ['3 Complete Visual Directions', 'Logo Suite & Mark Geometry', 'Typography & Color Token System', 'Interactive High-Fidelity Prototypes'],
      timeline: 'Week 3–4',
      commitment: 'One presentation + async feedback'
    },
    {
      num: '03',
      title: 'Build & Polish',
      summary: 'Engineering fast, responsive websites with considered motion, tactile interactions, and zero unnecessary bloat.',
      deliverables: ['Clean Semantic HTML/CSS/JS or React', 'Smooth GSAP/Three.js Motion Layer', 'Lighthouse 95+ Performance Tuning', 'Cross-browser & Mobile Quality Assurance'],
      timeline: 'Week 5–6',
      commitment: 'Staging preview testing'
    },
    {
      num: '04',
      title: 'Launch & Empower',
      summary: 'Delivering production code, comprehensive brand guidelines, assets, and continuing post-launch support.',
      deliverables: ['Production Deployment & DNS Setup', 'Master Brand Guidelines PDF & Figma Kit', 'Full Asset Repository (SVG, Vector, Fonts)', '30-Day Post-Launch Support Guarantee'],
      timeline: 'Week 7+',
      commitment: 'Final sign-off & launch toast'
    }
  ];

  var stepCards = document.querySelectorAll('.timeline-step');
  var processDetailEl = document.getElementById('processDetail');
  var timelineEl = document.querySelector('.timeline');
  var timelineFill = document.querySelector('.timeline-line path.fill');
  var currentStepIndex = 0;

  function isStackedLayout() {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  /* Mobile: nest the detail panel inside the selected step card itself
     (accordion-style) so picking a step and reading its detail both
     happen in the same spot. Desktop: keep it as one shared panel below
     the row of 4 steps, where it's already always in view. */
  function placeProcessDetail(index) {
    if (!processDetailEl || !stepCards[index]) return;
    if (isStackedLayout()) {
      stepCards[index].appendChild(processDetailEl);
    } else if (timelineEl) {
      timelineEl.insertAdjacentElement('afterend', processDetailEl);
    }
  }

  function renderProcessDetail(index) {
    var s = PROCESS_STEPS[index];
    if (!processDetailEl || !s) return;
    currentStepIndex = index;

    stepCards.forEach(function (card, i) {
      card.classList.toggle('is-selected', i === index);
    });

    if (timelineFill) {
      var progress = (index + 1) / stepCards.length;
      timelineFill.style.strokeDashoffset = String(1200 - 1200 * progress);
    }

    placeProcessDetail(index);

    processDetailEl.innerHTML =
      '<div class="process-detail-card">' +
        '<div class="process-detail-header">' +
          '<span class="process-detail-num">' + s.num + '</span>' +
          '<div>' +
            '<h4>' + s.title + '</h4>' +
            '<p>' + s.summary + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="process-detail-grid">' +
          '<div class="detail-box">' +
            '<div class="detail-label">Key Deliverables</div>' +
            '<ul>' + s.deliverables.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul>' +
          '</div>' +
          '<div class="detail-box">' +
            '<div class="detail-label">Timeline</div>' +
            '<div class="detail-val">' + s.timeline + '</div>' +
            '<div class="detail-label" style="margin-top:12px">Client Commitment</div>' +
            '<div class="detail-val">' + s.commitment + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  stepCards.forEach(function (step, i) {
    step.addEventListener('click', function () {
      renderProcessDetail(i);
    });
  });

  renderProcessDetail(0);

  var processResizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(processResizeTimer);
    processResizeTimer = setTimeout(function () {
      placeProcessDetail(currentStepIndex);
    }, 150);
  });

  /* ==========================================================================
     8. Interactive Scope & Budget Estimator in Contact
     ========================================================================== */
  var selectedScopes = ['Brand Identity', 'Custom Website'];
  var selectedTimeline = 'Standard (6–8 weeks)';

  function updateEstimator() {
    var scopeSummaryEl = document.getElementById('estimatorSummary');
    var scopeTimelineEl = document.getElementById('estimatorTimeline');
    var scopeTeamEl = document.getElementById('estimatorTeam');

    if (scopeSummaryEl) {
      scopeSummaryEl.textContent = selectedScopes.length ? selectedScopes.join(' + ') : 'Comprehensive Advisory';
    }
    if (scopeTimelineEl) {
      scopeTimelineEl.textContent = selectedTimeline;
    }
    if (scopeTeamEl) {
      scopeTeamEl.textContent = selectedScopes.length > 2 ? 'Studio Principal + Senior Engineer' : 'Lead Creative Technologist';
    }
  }

  document.querySelectorAll('.scope-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var scope = chip.getAttribute('data-scope');
      chip.classList.toggle('is-active');
      if (chip.classList.contains('is-active')) {
        if (selectedScopes.indexOf(scope) === -1) selectedScopes.push(scope);
      } else {
        selectedScopes = selectedScopes.filter(function (s) { return s !== scope; });
      }
      updateEstimator();
    });
  });

  document.querySelectorAll('.timeline-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.timeline-chip').forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      selectedTimeline = chip.getAttribute('data-timeline');
      updateEstimator();
    });
  });

  updateEstimator();

  /* ==========================================================================
     9. Contact Form with Live Confirmation
     ========================================================================== */
  var contactForm = document.querySelector('form.cta-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = contactForm.querySelector('.form-status');
      var btn = contactForm.querySelector('button[type="submit"]');

      if (btn) {
        btn.textContent = 'Submitting...';
        btn.disabled = true;
      }

      setTimeout(function () {
        if (status) {
          status.innerHTML = '<strong>Project inquiry received!</strong> We will review your brief and reply within 24 business hours.';
          status.classList.add('is-success');
        }
        if (btn) {
          btn.textContent = 'Sent Successfully ✓';
          btn.style.background = '#10b981';
          btn.style.borderColor = '#10b981';
          btn.style.color = '#fff';
        }
        showToast('Thank you! Project inquiry sent to HALO Studio.');
      }, 700);
    });
  }

  /* ==========================================================================
     10. Interactive Hero 3D Perspective Studio Stage (Unobstructed View)
     ========================================================================== */
  var stageWrap = document.getElementById('stageWrap');
  var heroStage = document.getElementById('heroStage');
  var stageMainCard = document.getElementById('stageMainCard');
  var stagePreview = document.getElementById('stagePreview');
  var stageCategory = document.getElementById('stageCategory');
  var stageOrigin = document.getElementById('stageOrigin');
  var stageEmblem = document.getElementById('stageEmblem');
  var stageProjectName = document.getElementById('stageProjectName');
  var stageProjectSub = document.getElementById('stageProjectSub');
  var stageSpecTagline = document.getElementById('stageSpecTagline');
  var stageStatTag = document.getElementById('stageStatTag');
  var stageDeliverables = document.getElementById('stageDeliverables');
  var stageClientRating = document.getElementById('stageClientRating');

  var STAGE_PROJECTS = {
    'marigold': {
      title: 'Marigold Coffee',
      visualClass: 'visual-marigold',
      category: 'Specialty Roasters',
      origin: 'Portland, OR',
      sub: 'Identity System & Packaging Architecture',
      specTagline: 'Bergamot · Honeycomb · Altitude 1,950m',
      stat: '+185% Wholesale Growth',
      deliverables: 'Packaging · Shopify · 3D',
      rating: 'Verified Client Rating',
      emblem: '✦'
    },
    'kindred': {
      title: 'Kindred Studio',
      visualClass: 'visual-kindred',
      category: 'Architecture & Space',
      origin: 'Stockholm & London',
      sub: 'Digital Flagship & Spatial Architecture',
      specTagline: 'Bauhaus Grid · Three.js Material Space',
      stat: '4.8x Inbound Leads',
      deliverables: 'Web Platform · CMS · Strategy',
      rating: 'Verified Client Rating',
      emblem: '◈'
    },
    'nocturne': {
      title: 'Nocturne Records',
      visualClass: 'visual-nocturne',
      category: 'Vinyl & Sound Press',
      origin: 'Berlin',
      sub: 'Kinetic Motion & Packaging Standards',
      specTagline: 'Concentric Micro-Grooves · Analog 45kHz',
      stat: 'Grammy Nominated Pack',
      deliverables: 'Motion · Vinyl · Token System',
      rating: 'Verified Client Rating',
      emblem: '◎'
    }
  };

  var currentStageId = 'marigold';

  function setStageProject(id) {
    var p = STAGE_PROJECTS[id];
    if (!p || !stagePreview) return;
    currentStageId = id;

    stagePreview.className = 'stage-card-preview ' + p.visualClass;
    if (stageMainCard) stageMainCard.setAttribute('data-project', id);
    if (stageCategory) stageCategory.textContent = p.category;
    if (stageOrigin) stageOrigin.textContent = p.origin;
    if (stageEmblem) stageEmblem.textContent = p.emblem;
    if (stageProjectName) stageProjectName.textContent = p.title;
    if (stageProjectSub) stageProjectSub.textContent = p.sub;
    if (stageSpecTagline) stageSpecTagline.textContent = p.specTagline;
    if (stageStatTag) stageStatTag.textContent = p.stat;
    if (stageDeliverables) stageDeliverables.textContent = p.deliverables;
    if (stageClientRating) stageClientRating.textContent = p.rating;

    document.querySelectorAll('.stage-switch-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-stage') === id);
    });
  }

  document.querySelectorAll('.stage-switch-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-stage');
      setStageProject(id);
    });
  });

  if (stageMainCard) {
    stageMainCard.addEventListener('click', function () {
      openProjectModal(currentStageId);
    });
  }

  // 3D Perspective Mouse Tilt on Hero Stage (Smooth & Non-Obstructive)
  if (heroStage && stageWrap && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    var heroEl = document.getElementById('top');

    (heroEl || heroStage).addEventListener('mousemove', function (e) {
      var rect = heroStage.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotX = ((y - centerY) / centerY) * -10;
      var rotY = ((x - centerX) / centerX) * 10;

      stageWrap.style.transform = 'rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg)';
    });

    (heroEl || heroStage).addEventListener('mouseleave', function () {
      stageWrap.style.transform = 'rotateX(0deg) rotateY(0deg)';
      stageWrap.style.transition = 'transform 0.5s var(--ease)';
    });

    (heroEl || heroStage).addEventListener('mouseenter', function () {
      stageWrap.style.transition = 'none';
    });
  }

  /* Footer Year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();
