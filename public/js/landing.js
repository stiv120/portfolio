(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var clamp = function (n, min, max) {
    return Math.min(max, Math.max(min, n));
  };

  /* ------------------------------------------------------------------
     i18n (ES / EN) — keys live in translations.js
     ------------------------------------------------------------------ */
  var currentLang = "es";

  function readStoredLang() {
    try {
      return localStorage.getItem("portfolioLanguage");
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem("portfolioLanguage", lang);
    } catch (e) {
      /* private mode: ignore */
    }
  }

  function initialLang() {
    var saved = readStoredLang();
    if (saved === "es" || saved === "en") return saved;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  // Splits "AWS (Lambda, S3), Docker" into chips without breaking parentheses.
  function renderTechChips() {
    document.querySelectorAll("[data-tech-chips]").forEach(function (el) {
      var raw = (el.textContent || "").trim();
      if (!raw) return;
      var parts = [];
      var buf = "";
      var depth = 0;
      for (var i = 0; i < raw.length; i++) {
        var ch = raw[i];
        if (ch === "(") depth++;
        if (ch === ")") depth = Math.max(0, depth - 1);
        if (ch === "," && depth === 0) {
          var item = buf.trim().replace(/\.$/, "");
          if (item) parts.push(item);
          buf = "";
          continue;
        }
        buf += ch;
      }
      var last = buf.trim().replace(/\.$/, "");
      if (last) parts.push(last);

      el.textContent = "";
      parts.forEach(function (part) {
        var chip = document.createElement("span");
        chip.className = "tech-chip";
        chip.textContent = part;
        el.appendChild(chip);
      });
    });
  }

  function applyLang(lang) {
    var t = translations[lang];
    if (!t) return;
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t[el.dataset.i18n];
      if (value) el.textContent = value;
    });

    // Trusted, hard-coded strings only (they carry <em> for the accent word).
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = t[el.dataset.i18nHtml];
      if (value) el.innerHTML = value;
    });

    root.lang = lang;
    storeLang(lang);
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    renderTechChips();
    measureParallax();
  }

  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang);
    });
  });

  /* ------------------------------------------------------------------
     Navbar
     ------------------------------------------------------------------ */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");

  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav__links a, .nav .btn").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  var sectionLinks = [];
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) sectionLinks.push({ a: a, el: target });
  });

  function updateActiveLink() {
    var line = window.innerHeight * 0.4;
    var active = null;
    sectionLinks.forEach(function (s) {
      var r = s.el.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) active = s.a;
    });
    sectionLinks.forEach(function (s) {
      s.a.classList.toggle("is-active", s.a === active);
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* ------------------------------------------------------------------
     Scroll parallax
     [data-speed]  element drifts relative to the page (+ lags, - leads)
     [data-bg]     fixed background layers drift with scroll progress
     ------------------------------------------------------------------ */
  var layers = [];
  var bgLayers = [];

  // Card images get a built-in parallax inside their overflow-hidden frame.
  document.querySelectorAll(".proj__media:not(.proj__media--contain) img").forEach(function (img) {
    img.dataset.speed = "0.09";
    img.dataset.clampRatio = "0.13";
  });

  function measureParallax() {
    var vh = window.innerHeight;
    layers = [];
    document.querySelectorAll("[data-speed]").forEach(function (el) {
      var currentPy = parseFloat(el.style.getPropertyValue("--py")) || 0;
      var r = el.getBoundingClientRect();
      var maxShift = Infinity;
      if (el.dataset.clampRatio && el.parentElement) {
        maxShift = el.parentElement.offsetHeight * parseFloat(el.dataset.clampRatio);
      }
      layers.push({
        el: el,
        speed: parseFloat(el.dataset.speed) || 0,
        // document-space center of the element at its natural (untranslated) position
        center: r.top + window.scrollY + r.height / 2 - currentPy,
        max: maxShift,
      });
    });
    bgLayers = Array.prototype.map.call(document.querySelectorAll("[data-bg]"), function (el) {
      return { el: el, amp: parseFloat(el.dataset.bg) || 0 };
    });
    renderScroll();
    return vh;
  }

  /* ------------------------------------------------------------------
     "How I build": pinned section, hexagonal architecture assembles
     piece by piece as you scroll (progress-scrubbed, no library)
     ------------------------------------------------------------------ */
  var arch = document.getElementById("build");
  var archPieces = [];
  var archSteps = [];
  var archLast = -1;
  var ARCH_STEP_AT = [0, 0.2, 0.42, 0.8];

  if (arch) {
    archSteps = Array.prototype.slice.call(arch.querySelectorAll(".arch__step"));
    archPieces = Array.prototype.map.call(arch.querySelectorAll(".a-piece"), function (el) {
      var w = el.dataset.win.split(",").map(parseFloat);
      return {
        el: el,
        s: w[0],
        e: w[1],
        from: el.dataset.from ? el.dataset.from.split(",").map(parseFloat) : null,
        spin: !!el.dataset.spin,
        line: el.dataset.draw ? el.querySelector("line") : null,
      };
    });
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function renderArch() {
    if (!arch) return;
    var r = arch.getBoundingClientRect();
    var total = Math.max(1, r.height - window.innerHeight);
    var p = reduceMotion ? 1 : clamp(-r.top / total, 0, 1);
    if (p === archLast) return;
    archLast = p;

    arch.style.setProperty("--ap", p.toFixed(4));
    arch.classList.toggle("is-done", p > 0.95);

    for (var i = 0; i < archPieces.length; i++) {
      var piece = archPieces[i];
      var t = easeOut(clamp((p - piece.s) / (piece.e - piece.s), 0, 1));
      var k = 1 - t;
      var f = piece.from;
      var tf = "";
      if (f) {
        tf =
          "translate(" + (f[0] * k).toFixed(1) + "px," + (f[1] * k).toFixed(1) + "px) rotate(" +
          (f[2] * k).toFixed(1) + "deg) scale(" + (f[3] + (1 - f[3]) * t).toFixed(3) + ")";
      }
      if (piece.spin) tf += " rotate(" + (p * 140).toFixed(1) + "deg)";
      piece.el.style.transform = tf;
      if (piece.line) {
        piece.line.style.strokeDashoffset = k.toFixed(3);
        piece.el.style.opacity = clamp(t * 4, 0, 1).toFixed(2);
      } else {
        piece.el.style.opacity = t.toFixed(2);
      }
    }

    var active = 0;
    for (var j = 0; j < ARCH_STEP_AT.length; j++) {
      if (p >= ARCH_STEP_AT[j]) active = j;
    }
    archSteps.forEach(function (el, idx) {
      el.classList.toggle("is-active", idx === active);
    });
  }

  var ticking = false;

  function renderScroll() {
    ticking = false;
    var y = window.scrollY;
    var vh = window.innerHeight;
    var vw = window.innerWidth;
    var docH = Math.max(1, document.documentElement.scrollHeight - vh);
    var p = clamp(y / docH, 0, 1);

    nav.classList.toggle("is-scrolled", y > 24);
    updateActiveLink();

    if (!reduceMotion) {
      for (var i = 0; i < layers.length; i++) {
        var l = layers[i];
        var diff = y + vh / 2 - l.center;
        if (Math.abs(diff) > vh * 2) continue; // far off-screen, skip the work
        var shift = clamp(diff * l.speed, -l.max, l.max);
        l.el.style.setProperty("--py", shift.toFixed(1) + "px");
      }

      for (var j = 0; j < bgLayers.length; j++) {
        var b = bgLayers[j];
        var ty = (p - 0.5) * b.amp * vh * 6;
        var tx = Math.sin(p * Math.PI * 2) * b.amp * vw * 0.45;
        b.el.style.transform =
          "translate3d(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px,0)";
      }
    }

    updateTimeline();
    renderArch();

    var bar = document.getElementById("progress");
    if (bar) bar.style.setProperty("--sp", p.toFixed(4));
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(renderScroll);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    measureParallax();
  });
  window.addEventListener("load", measureParallax);

  /* ------------------------------------------------------------------
     Timeline progress rail
     ------------------------------------------------------------------ */
  var timeline = document.getElementById("timeline");

  function updateTimeline() {
    if (!timeline) return;
    var r = timeline.getBoundingClientRect();
    var p = clamp((window.innerHeight * 0.62 - r.top) / r.height, 0, 1);
    timeline.style.setProperty("--p", (p * 100).toFixed(1) + "%");
  }

  /* ------------------------------------------------------------------
     Pointer effects: glass spotlight, hero depth, magnetic buttons
     ------------------------------------------------------------------ */
  if (finePointer) {
    var spot = null;
    var spotRaf = 0;
    document.addEventListener(
      "pointermove",
      function (e) {
        var glass = e.target.closest && e.target.closest(".glass");
        if (!glass) return;
        spot = { el: glass, x: e.clientX, y: e.clientY };
        if (spotRaf) return;
        spotRaf = requestAnimationFrame(function () {
          spotRaf = 0;
          var r = spot.el.getBoundingClientRect();
          spot.el.style.setProperty("--sx", spot.x - r.left + "px");
          spot.el.style.setProperty("--sy", spot.y - r.top + "px");
        });
      },
      { passive: true }
    );

    if (!reduceMotion) {
      var stage = document.getElementById("stage");
      var hero = document.getElementById("hero");
      if (stage && hero) {
        hero.addEventListener(
          "pointermove",
          function (e) {
            var r = stage.getBoundingClientRect();
            var nx = clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2), -1, 1);
            var ny = clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2), -1, 1);
            stage.style.setProperty("--mx", nx.toFixed(3));
            stage.style.setProperty("--my", ny.toFixed(3));
          },
          { passive: true }
        );
        hero.addEventListener("pointerleave", function () {
          stage.style.setProperty("--mx", "0");
          stage.style.setProperty("--my", "0");
        });
      }

      document.querySelectorAll("[data-magnet]").forEach(function (el) {
        el.addEventListener("pointermove", function (e) {
          var r = el.getBoundingClientRect();
          var x = (e.clientX - (r.left + r.width / 2)) * 0.18;
          var y = (e.clientY - (r.top + r.height / 2)) * 0.28;
          el.style.translate = x.toFixed(1) + "px " + y.toFixed(1) + "px";
        });
        el.addEventListener("pointerleave", function () {
          el.style.translate = "";
        });
      });
    }
  }

  /* ------------------------------------------------------------------
     Stat counters
     ------------------------------------------------------------------ */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var target = parseInt(el.dataset.count, 10);
    if (reduceMotion || isNaN(target)) {
      el.textContent = target;
      return;
    }
    var start = performance.now();
    var dur = 1600;
    (function step(now) {
      var t = clamp((now - start) / dur, 0, 1);
      var eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
    })(start);
  }

  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) {
      el.textContent = "0";
      cio.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     Copy email
     ------------------------------------------------------------------ */
  var copyBtn = document.getElementById("copy-mail");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var email = "gallegostiven340@gmail.com";
      var done = function () {
        var t = translations[currentLang];
        copyBtn.textContent = t.copied;
        setTimeout(function () {
          copyBtn.textContent = t.copyEmail;
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () {
          window.location.href = "mailto:" + email;
        });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  applyLang(initialLang());
  measureParallax();
})();
