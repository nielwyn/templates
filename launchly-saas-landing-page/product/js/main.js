/* Launchly template — vanilla JS, no dependencies */
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  /* Footer year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer = item.querySelector('.faq-answer');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* Pricing billing toggle (monthly / yearly) */
  var billingSwitch = document.querySelector('.switch[data-billing-toggle]');
  if (billingSwitch) {
    var monthlyLabel = document.querySelector('[data-label="monthly"]');
    var yearlyLabel = document.querySelector('[data-label="yearly"]');
    billingSwitch.addEventListener('click', function () {
      var toYearly = !billingSwitch.classList.contains('is-on');
      billingSwitch.classList.toggle('is-on', toYearly);
      if (monthlyLabel) monthlyLabel.classList.toggle('is-active', !toYearly);
      if (yearlyLabel) yearlyLabel.classList.toggle('is-active', toYearly);
      document.querySelectorAll('[data-monthly]').forEach(function (priceEl) {
        priceEl.textContent = toYearly ? priceEl.getAttribute('data-yearly') : priceEl.getAttribute('data-monthly');
      });
      document.querySelectorAll('[data-period]').forEach(function (periodEl) {
        periodEl.textContent = toYearly ? '/mo, billed yearly' : '/month';
      });
    });
  }

  /* Testimonial carousel */
  var slides = document.querySelectorAll('.testimonial-slide');
  var dots = document.querySelectorAll('.testimonial-nav .dot');
  if (slides.length) {
    var current = 0;
    var showSlide = function (index) {
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === index); });
      current = index;
    };
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { showSlide(i); });
    });
    setInterval(function () { showSlide((current + 1) % slides.length); }, 6000);
  }

  /* Demo form handling (no backend — see documentation for wiring instructions) */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks! This is a template demo — connect a form backend (see documentation) to receive real submissions.';
        status.classList.add('is-success');
      }
      form.reset();
    });
  });

});
