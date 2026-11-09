/* =============================================================
   Motion: the "smooth" layer, shared by every page.
   1. Reveal: cards and headings slide in once as you scroll.
   2. Count-up: numbers like −93%, 1,500+ or 4.3 count from 0.
   3. Spotlight: a soft glow follows the cursor over cards.
   Works with content that pages render later (language switch,
   board stage changes) thanks to a MutationObserver.
   Everything is skipped for users who prefer reduced motion.
   ============================================================= */

(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const REVEAL = ".sec-head, .pcard, .award, .how__grid article, .job, .case, .school, .cert, .lang-card, .board";
  const COUNT = ".metric__v, .pcard__big, .case__big, .award__place";
  const SPOT = ".pcard, .award, .cert, .school, .case, .board";
  let settled = false; // after the first load, re-rendered content appears without animation

  if (!reduced) document.documentElement.classList.add("has-motion");

  /* ---------- 1. Reveal ---------- */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        revealObs.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );

  function setupReveal(root) {
    if (reduced) return;
    root.querySelectorAll(REVEAL).forEach((el) => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      // Stagger siblings: 0, 1, 2… (capped so long lists don't lag)
      const i = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", Math.min(i, 6));
      if (settled) el.classList.add("is-in", "is-instant");
      else revealObs.observe(el);
    });
  }

  /* ---------- 2. Count-up ---------- */
  const NUM = /([−\-+]?)(\d[\d,]*\.?\d*)/; // keeps the sign, commas and decimals

  function countUp(el) {
    if (el.dataset.counted === el.textContent) return;
    const original = el.textContent;
    const m = original.match(NUM);
    if (!m || reduced) {
      el.dataset.counted = original;
      return;
    }
    const target = parseFloat(m[2].replace(/,/g, ""));
    const decimals = (m[2].split(".")[1] || "").length;
    const useComma = m[2].includes(",");
    const start = performance.now();
    const dur = 900;
    const fmt = (v) => {
      let s = v.toFixed(decimals);
      if (useComma) s = Number(s).toLocaleString("en-US", { minimumFractionDigits: decimals });
      return s;
    };
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out
      el.textContent = original.replace(m[2], fmt(target * eased));
      if (p < 1) requestAnimationFrame(step);
      else {
        el.textContent = original;
        el.dataset.counted = original;
      }
    };
    requestAnimationFrame(step);
  }

  const countObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        countUp(e.target);
        countObs.unobserve(e.target);
      });
    },
    { threshold: 0.6 }
  );

  function setupCount(root) {
    root.querySelectorAll(COUNT).forEach((el) => {
      if (el.dataset.countWatch === "1") return;
      el.dataset.countWatch = "1";
      // Board numbers change with each stage: always count them.
      if (el.closest(".board")) countUp(el);
      else countObs.observe(el);
    });
  }

  /* ---------- 3. Spotlight ---------- */
  function setupSpot(root) {
    if (reduced || !window.matchMedia("(hover: hover)").matches) return;
    root.querySelectorAll(SPOT).forEach((el) => {
      if (el.classList.contains("spot")) return;
      el.classList.add("spot");
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    });
  }

  function scan(root = document) {
    setupReveal(root);
    setupCount(root);
    setupSpot(root);
  }

  document.addEventListener("DOMContentLoaded", () => {
    scan();
    setTimeout(() => (settled = true), 1500);
    let queued = false;
    new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    }).observe(document.body, { childList: true, subtree: true });
  });
})();
