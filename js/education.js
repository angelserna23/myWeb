/* =============================================================
   Education page.
   Each school has a skills marquee: it scrolls on its own, pauses
   on hover/focus, and the arrows jump one chip left or right.
   One generic Marquee class replaces the four copied carousels.
   ============================================================= */

class Marquee {
  constructor(root, speed = 40) {
    this.root = root;
    this.track = root.querySelector(".marquee__track");
    this.speed = speed; // px per second
    this.x = 0;
    this.paused = false;
    this.last = null;
    // Duplicate the chips so the loop has no visible jump.
    this.track.innerHTML += this.track.innerHTML;
    this.half = () => this.track.scrollWidth / 2;

    root.addEventListener("mouseenter", () => (this.paused = true));
    root.addEventListener("mouseleave", () => (this.paused = false));
    root.addEventListener("focusin", () => (this.paused = true));
    root.addEventListener("focusout", () => (this.paused = false));
    root.querySelector(".marquee__prev").addEventListener("click", () => this.jump(-1));
    root.querySelector(".marquee__next").addEventListener("click", () => this.jump(1));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) this.speed = 0;
    requestAnimationFrame((ts) => this.tick(ts));
  }

  jump(dir) {
    const chip = this.track.firstElementChild;
    const step = chip ? chip.getBoundingClientRect().width + 10 : 120;
    this.track.style.transition = "transform .45s cubic-bezier(.16,1,.3,1)";
    this.x += dir * step;
    this.wrap();
    this.paint();
    setTimeout(() => (this.track.style.transition = ""), 460);
  }

  wrap() {
    const h = this.half();
    if (this.x >= h) this.x -= h;
    if (this.x < 0) this.x += h;
  }

  paint() {
    this.track.style.transform = `translateX(${-this.x}px)`;
  }

  tick(ts) {
    if (!this.root.isConnected) return; // stop when re-rendered
    if (this.last !== null && !this.paused) {
      this.x += (this.speed * (ts - this.last)) / 1000;
      this.wrap();
      this.paint();
    }
    this.last = ts;
    requestAnimationFrame((t2) => this.tick(t2));
  }
}

function renderEducation() {
  document.getElementById("edu-list").innerHTML = EDUCATION.map(
    (e) => `<article class="school">
      <img class="school__logo" src="${e.logo}" alt="" loading="lazy">
      <div class="school__body">
        <p class="school__dates">${tr(e.dates)}</p>
        <h2>${tr(e.degree)}</h2>
        <p class="school__name">${tr(e.school)}</p>
        <p class="school__text">${tr(e.text)}</p>
        <div class="marquee" aria-label="${t("edu.skills")}">
          <button type="button" class="marquee__prev" aria-label="Previous">${ICONS.prev}</button>
          <div class="marquee__view"><div class="marquee__track">${e.skills.map((s) => `<span class="marquee__chip">${s}</span>`).join("")}</div></div>
          <button type="button" class="marquee__next" aria-label="Next">${ICONS.next}</button>
        </div>
      </div>
    </article>`
  ).join("");
  document.querySelectorAll(".marquee").forEach((m) => new Marquee(m));

  document.getElementById("langs").innerHTML = LANGUAGES.map(
    (l) => `<div class="lang-card"><b>${tr(l.name)}</b><span>${tr(l.level)}</span></div>`
  ).join("");
}

document.addEventListener("langchange", renderEducation);
