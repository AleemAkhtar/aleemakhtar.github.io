/* =========================================================
   Aleem Akhtar - Academic Profile
   main.js  (vanilla JavaScript, no dependencies)
   ========================================================= */
(function () {
  "use strict";

  var navbar = document.getElementById("mainNav");
  var navCollapse = document.getElementById("navItems");
  var backToTop = document.getElementById("backToTop");
  var themeToggle = document.getElementById("themeToggle");

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function getNavHeight() {
    return navbar ? navbar.offsetHeight : 0;
  }

  /* ---- Smooth scrolling for in-page anchor links (offset for fixed nav) ---- */
  function handleAnchorClick(event) {
    var href = this.getAttribute("href");
    if (!href || href === "#" || href.charAt(0) !== "#") {
      return;
    }
    var target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    var top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      getNavHeight() +
      1;

    window.scrollTo({
      top: top,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });

    // Move focus to the target for keyboard/screen-reader users.
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });

    // Close the mobile navbar after selecting a link.
    closeMobileNav();
  }

  /* ---- Close the collapsible navbar on mobile ---- */
  function closeMobileNav() {
    if (!navCollapse || !navCollapse.classList.contains("show")) {
      return;
    }
    if (window.bootstrap && window.bootstrap.Collapse) {
      var instance = window.bootstrap.Collapse.getOrCreateInstance(navCollapse, {
        toggle: false
      });
      instance.hide();
    } else {
      navCollapse.classList.remove("show");
    }
  }

  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", handleAnchorClick);
  });

  /* ---- Show / hide the back-to-top button ---- */
  function toggleBackToTop() {
    if (!backToTop) {
      return;
    }
    if (window.pageYOffset > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  /* ---- Light / dark theme toggle ---- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  if (themeToggle) {
    // Sync the button state with the theme applied by the inline head script.
    applyTheme(document.documentElement.getAttribute("data-bs-theme") || "light");

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-bs-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();
