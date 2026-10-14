/* HALO template — core interactions (no dependencies).
   Scroll animations live in animations.js (GSAP), the 3D hero in scene.js (Three.js).
   Everything here degrades gracefully if those libraries fail to load. */
(function () {
  document.documentElement.classList.remove("no-js");

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Preloader ---------- */
  var preloader = document.querySelector(".preloader");
  var percentEl = document.getElementById("loadPercent");
  var barFill = document.querySelector(".preloader-bar-fill");
  var body = document.body;

  var loadedFired = false;
  function finishLoading() {
    body.classList.remove("is-loading");
    if (preloader) preloader.classList.add("is-done");
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    if (!loadedFired) {
      loadedFired = true;
      document.dispatchEvent(new CustomEvent("halo:loaded"));
    }
  }

  if (preloader) {
    var pct = 0;
    var tick = setInterval(function () {
      pct += Math.random() * 18 + 6;
      if (pct >= 100) {
        pct = 100;
        clearInterval(tick);
        setTimeout(finishLoading, 280);
      }
      if (percentEl) percentEl.textContent = Math.floor(pct);
      if (barFill) barFill.style.width = pct + "%";
    }, 140);
    // Safety net: never let the preloader trap the page for more than 4s.
    setTimeout(finishLoading, 4000);
  } else {
    body.classList.remove("is-loading");
  }

  /* ---------- Custom cursor: single circle, instant tracking, no lag ---------- */
  var blob = document.querySelector(".cursor-blob");
  if (
    blob &&
    !prefersReducedMotion &&
    window.matchMedia("(hover: hover)").matches
  ) {
    document.body.classList.add(
      "has-custom-cursor",
    ); /* hides the native cursor — see CSS */
    window.addEventListener("mousemove", function (e) {
      blob.style.transform =
        "translate(" +
        e.clientX +
        "px," +
        e.clientY +
        "px) translate(-50%,-50%)";
    });
    document.querySelectorAll("[data-cursor-hover]").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        blob.classList.add("is-hover");
      });
      el.addEventListener("mouseleave", function () {
        blob.classList.remove("is-hover");
      });
    });
  } else if (blob) {
    blob.style.display = "none";
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMobile = document.querySelector(".nav-mobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      navMobile.classList.toggle("is-open");
    });
    navMobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMobile.classList.remove("is-open");
      });
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Demo form ---------- */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "Thanks! This is a template demo — connect a form backend (see documentation) to receive real submissions.";
        status.classList.add("is-success");
      }
      form.reset();
    });
  });

  /* ---------- Reveal fallback: if GSAP never loads, show everything ---------- */
  window.addEventListener("load", function () {
    setTimeout(function () {
      if (typeof window.gsap === "undefined") {
        document
          .querySelectorAll(
            "[data-reveal], [data-reveal-line], [data-hero-reveal], [data-cta-reveal]",
          )
          .forEach(function (el) {
            el.classList.add("is-visible");
          });
      }
    }, 1200);
  });

  /* ---------- Scroll progress bar + back-to-top ring (plain scroll listener,
     independent of GSAP so it still works if the CDN libraries fail) ---------- */
  var progressBar = document.querySelector(".scroll-progress");
  var backToTop = document.querySelector(".back-to-top");
  var fillCircle = backToTop ? backToTop.querySelector(".fill") : null;
  var RING_CIRC = 119.4;
  if (progressBar || backToTop) {
    var updateScrollUI = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? scrollTop / docHeight : 0;
      if (progressBar) progressBar.style.width = pct * 100 + "%";
      if (fillCircle) fillCircle.style.strokeDashoffset = RING_CIRC * (1 - pct);
      if (backToTop)
        backToTop.classList.toggle(
          "is-visible",
          scrollTop > window.innerHeight * 0.6,
        );
    };
    window.addEventListener("scroll", updateScrollUI, { passive: true });
    window.addEventListener("resize", updateScrollUI);
    updateScrollUI();
  }
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  /* ---------- Marquees: plain CSS @keyframes animation, untouched by JS.
     An earlier version sped this up on scroll by shortening
     animation-duration mid-flight — that causes the browser to recompute
     the animation's progress against the new duration, which makes the
     content visibly jump/teleport instead of smoothly speeding up (easy
     to reproduce: change animation-duration on a running animation and
     read its transform before/after — the position snaps, it doesn't
     ease). Not worth the glitch for the effect, so this is intentionally
     left as a constant, glitch-free CSS animation with no JS involved. ---------- */
})();
