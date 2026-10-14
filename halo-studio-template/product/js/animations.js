/* HALO template — scroll-driven animation (GSAP + ScrollTrigger, CDN).
   Does nothing if GSAP failed to load — main.js's fallback then force-reveals
   everything so the page still reads fine without any animation. */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return; /* CSS already shows everything statically */

  /* ---------- Hero intro, fires once the preloader finishes.
     JS only toggles .is-visible + a stagger delay; the CSS transition
     (compositor-driven) does the actual animating. A raw GSAP tween here
     would be one more thing that can stall mid-animation and leave the
     hero looking permanently faded — this can't get stuck that way. ---------- */
  document.addEventListener('halo:loaded', function () {
    var lines = document.querySelectorAll('.hero [data-reveal-line]');
    var reveals = document.querySelectorAll('.hero [data-hero-reveal]');
    lines.forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.12) + 's';
      el.classList.add('is-visible');
    });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (lines.length * 0.12 + i * 0.1) + 's';
      el.classList.add('is-visible');
    });
  });

  /* ---------- Hero: content drifts up slightly as you scroll past it.
     (No opacity fade here — a previous version faded this to near-zero
     opacity on just a little scroll, which read as the hero "losing
     color" rather than as a parallax effect.) ---------- */
  var heroInner = document.querySelector('.hero-inner');
  if (heroInner) {
    gsap.to(heroInner, {
      y: -60, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* ---------- Scroll reveals for everything below the fold.
     Same class-toggle + CSS-transition approach as the hero intro. ---------- */
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 85%',
    onEnter: function (batch) {
      batch.forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.08) + 's';
        el.classList.add('is-visible');
      });
    },
    once: true
  });

  /* ---------- Intro: numbers count up from 0 once in view.
     A setTimeout safety net forces the final value even if the counting
     tween itself never finishes (e.g. a throttled animation frame loop
     in a backgrounded tab) — so the stat can't get stuck part-counted. ---------- */
  document.querySelectorAll('.count').forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var obj = { val: 0 };
    el.textContent = '0';
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: function () {
        gsap.to(obj, {
          val: target, duration: 1.6, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.round(obj.val); }
        });
        setTimeout(function () { el.textContent = target; }, 2500);
      }
    });
  });

  /* ---------- Services: the row nearest the viewport center gets a spotlight ---------- */
  document.querySelectorAll('.service-row').forEach(function (row) {
    ScrollTrigger.create({
      trigger: row, start: 'top center', end: 'bottom center',
      onEnter: function () { row.classList.add('is-active'); },
      onEnterBack: function () { row.classList.add('is-active'); },
      onLeave: function () { row.classList.remove('is-active'); },
      onLeaveBack: function () { row.classList.remove('is-active'); }
    });
  });

  /* ---------- Work gallery: pin + scrub vertical scroll into horizontal motion,
     cards nearest the viewport center scale up and sharpen ---------- */
  ScrollTrigger.matchMedia({
    '(min-width: 901px)': function () {
      var track = document.querySelector('.work-track');
      var pin = document.querySelector('.work-pin');
      if (!track || !pin) return;
      var cards = track.querySelectorAll('.work-card');
      var distance = function () { return track.scrollWidth - pin.clientWidth; };
      gsap.to(track, {
        x: function () { return -distance(); },
        ease: 'none',
        onUpdate: function () {
          var center = window.innerWidth / 2;
          cards.forEach(function (card) {
            var rect = card.getBoundingClientRect();
            var dist = Math.abs(rect.left + rect.width / 2 - center);
            var norm = Math.min(dist / center, 1);
            card.style.transform = 'scale(' + (1 - norm * 0.12) + ')';
            card.style.opacity = 1 - norm * 0.45;
          });
        },
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: function () { return '+=' + distance(); },
          scrub: true,
          pin: true,
          invalidateOnRefresh: true
        }
      });
    }
  });

  /* ---------- About: the pull-quote decodes into place instead of a plain fade ---------- */
  function decodeText(el) {
    var original = el.textContent;
    var chars = '!<>-_\\/[]{}=+*^?#';
    var frame = 0;
    var totalFrames = 24;
    var interval = setInterval(function () {
      var revealed = Math.floor((frame / totalFrames) * original.length);
      var output = '';
      for (var i = 0; i < original.length; i++) {
        if (i < revealed || original[i] === ' ') {
          output += original[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.textContent = output;
      frame++;
      if (frame > totalFrames) {
        el.textContent = original;
        clearInterval(interval);
      }
    }, 28);
    /* Safety net: guarantee the real text within 3s even if the interval
       itself gets heavily throttled (background tab, embedded frame). */
    setTimeout(function () {
      clearInterval(interval);
      el.textContent = original;
    }, 3000);
  }
  var pullQuote = document.querySelector('.pull-quote');
  if (pullQuote) {
    ScrollTrigger.create({
      trigger: pullQuote, start: 'top 80%', once: true,
      onEnter: function () { decodeText(pullQuote); }
    });
  }

  /* ---------- Testimonials & process timeline: draw the connecting line as you scroll through it ---------- */
  var fillPath = document.querySelector('.timeline-line path.fill');
  if (fillPath) {
    var len = fillPath.getTotalLength();
    gsap.set(fillPath, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(fillPath, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: true
      }
    });
  }

  /* ---------- CTA: a dedicated scale/fade entrance (see the
     [data-cta-reveal] CSS) instead of the generic translateY reveal —
     still class-toggle + CSS-transition driven, not a raw tween. ---------- */
  var ctaTitle = document.querySelector('.cta-title');
  if (ctaTitle) {
    ScrollTrigger.create({
      trigger: ctaTitle, start: 'top 85%', once: true,
      onEnter: function () { ctaTitle.classList.add('is-visible'); }
    });
  }

  /* ---------- Footer: the giant background wordmark drifts slightly as it scrolls in.
     Animates the inner <span>, never .footer-giant-mark itself — that outer
     element's horizontal centering comes from flexbox (see style.css), not a
     transform, so this tween has nothing to clobber. ---------- */
  var giantMark = document.querySelector('.footer-giant-mark span');
  if (giantMark) {
    gsap.to(giantMark, {
      y: -40, ease: 'none',
      scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true }
    });
  }
})();
