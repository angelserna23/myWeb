/* =============================================================
   Home page: career board (auto-advancing tabs), project carousel
   with filters, and the awards grid.
   ============================================================= */

const BOARD_DURATION = 7000; // ms each stage stays before auto-advancing
let stageIndex = 0;
let boardTimer = null;
let autoplay = true;
let activeFilter = "all";

/* ---------- Career board ---------- */
function barsHTML(m) {
  if (!m.b) return "";
  const max = m.max || Math.max(...m.b);
  return `<div class="bars">${[t("before"), t("after")]
    .map((label, j) => `<div class="br${j ? " br--after" : ""}"><span>${label}</span><span class="br__t"><i data-w="${m.b[j] / max}"></i></span><span>${m.b[j]}${m.u || ""}</span></div>`)
    .join("")}</div>`;
}

function renderTabs() {
  const tabs = document.getElementById("board-tabs");
  tabs.innerHTML = STAGES.map(
    (s, i) => `<button class="board__tab" role="tab" id="tab-${s.id}" aria-selected="${i === stageIndex}" tabindex="${i === stageIndex ? 0 : -1}" data-i="${i}">
      <b>${s.name}</b><small>${tr(s.dates)}</small><span class="board__bar"><i></i></span>
    </button>`
  ).join("");
  tabs.querySelectorAll(".board__tab").forEach((b) => b.addEventListener("click", () => goStage(+b.dataset.i)));
  document.getElementById("board-dots").innerHTML = STAGES.map((_, i) => `<i class="${i === stageIndex ? "is-on" : ""}"></i>`).join("");
}

function renderPanel() {
  const s = STAGES[stageIndex];
  const panel = document.getElementById("board-panel");
  panel.setAttribute("aria-labelledby", `tab-${s.id}`);
  panel.innerHTML = `<div class="board__fade">
    <div class="board__title"><h3>${s.name}</h3><span>${tr(s.dates)}</span></div>
    <p class="board__role">${tr(s.role)}</p>
    <div class="board__metrics">${s.metrics
      .map((m) => `<div class="metric"><div class="metric__v">${m.v}</div><div><div class="metric__k">${tr(m.k)}<small>${tr(m.c)}</small></div>${barsHTML(m)}</div></div>`)
      .join("")}</div>
    <a class="board__link" href="#projects" data-stage="${s.id}"><span>${t("see")}</span>${ICONS.arrow}</a>
  </div>`;
  // Two frames later the bars grow from 0 to their value (CSS transition).
  requestAnimationFrame(() =>
    requestAnimationFrame(() => panel.querySelectorAll(".br__t i").forEach((i) => (i.style.transform = `scaleX(${i.dataset.w})`)))
  );
  panel.querySelector(".board__link").addEventListener("click", () => filterProjects(s.id));
}

function goStage(i, fromTimer = false) {
  stageIndex = (i + STAGES.length) % STAGES.length;
  const panel = document.getElementById("board-panel");
  panel.classList.add("is-swapping");
  setTimeout(() => {
    renderTabs();
    renderPanel();
    panel.classList.remove("is-swapping");
    if (!fromTimer) document.querySelector(`#tab-${STAGES[stageIndex].id}`)?.focus({ preventScroll: true });
  }, 160);
  restartTimer();
}

function restartTimer() {
  clearTimeout(boardTimer);
  const board = document.getElementById("board");
  if (autoplay && !board.matches(":hover") && !board.contains(document.activeElement)) {
    boardTimer = setTimeout(() => goStage(stageIndex + 1, true), BOARD_DURATION);
  }
}

function setPlayButton() {
  const btn = document.getElementById("board-play");
  btn.innerHTML = autoplay ? ICONS.pause : ICONS.play;
  btn.setAttribute("aria-label", t(autoplay ? "pause" : "play"));
}

function initBoard() {
  const board = document.getElementById("board");
  const panel = document.getElementById("board-panel");
  board.style.setProperty("--board-dur", BOARD_DURATION + "ms");

  // Pause on hover / keyboard focus, like the old education carousel.
  const pause = () => {
    board.classList.remove("is-playing");
    clearTimeout(boardTimer);
  };
  const resume = () => {
    if (!autoplay) return;
    board.classList.add("is-playing");
    renderTabs(); // restarts the progress bar animation
    restartTimer();
  };
  board.addEventListener("mouseenter", pause);
  board.addEventListener("mouseleave", resume);
  board.addEventListener("focusin", pause);
  board.addEventListener("focusout", (e) => {
    if (!board.contains(e.relatedTarget)) resume();
  });

  document.getElementById("board-play").addEventListener("click", () => {
    autoplay = !autoplay;
    board.classList.toggle("is-playing", autoplay);
    setPlayButton();
    restartTimer();
  });

  // Arrow keys move between tabs.
  document.getElementById("board-tabs").addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goStage(stageIndex + 1);
    if (e.key === "ArrowLeft") goStage(stageIndex - 1);
  });

  // Swipe on touch screens.
  let x0 = null;
  panel.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  panel.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) goStage(stageIndex + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // Respect users who prefer no motion: start paused.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    autoplay = false;
    board.classList.remove("is-playing");
  }
}

/* ---------- Projects carousel ---------- */
let updateArrows = () => {};

function renderFilters() {
  const options = [["all", t("all")], ...STAGES.map((s) => [s.id, s.name])];
  const box = document.getElementById("proj-filters");
  box.innerHTML = options.map(([id, label]) => `<button type="button" class="chip" aria-pressed="${activeFilter === id}" data-f="${id}">${label}</button>`).join("");
  box.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => filterProjects(c.dataset.f)));
}

function renderProjects() {
  document.getElementById("proj-track").innerHTML = PROJECTS.map((p) => projectCard(p, activeFilter !== "all" && p.stage !== activeFilter)).join("");
  updateArrows();
}

function filterProjects(id) {
  activeFilter = id;
  renderFilters();
  renderProjects();
  const track = document.getElementById("proj-track");
  const first = [...track.children].find((c) => id === "all" || c.dataset.stage === id);
  if (first) track.scrollTo({ left: first.offsetLeft - track.offsetLeft, behavior: "smooth" });
}

/* ---------- Awards ---------- */
function renderAwards() {
  document.getElementById("awards-grid").innerHTML = AWARDS.map(
    (a) => `<a class="award" href="awards.html?project=${a.project}">
      <span class="award__img"><img src="${a.img}" alt="" loading="lazy"></span>
      <span class="award__place">${tr(a.place)} <small>${t("awards.place")}</small></span>
      <span class="award__contest">${a.contest}</span>
      <span class="award__what">${tr(a.what)}</span>
    </a>`
  ).join("");
}

/* ---------- Boot ---------- */
document.addEventListener("langchange", () => {
  renderTabs();
  renderPanel();
  setPlayButton();
  renderFilters();
  renderProjects();
  renderAwards();
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("proj-prev").innerHTML = ICONS.prev;
  document.getElementById("proj-next").innerHTML = ICONS.next;
  updateArrows = wireTrack(document.getElementById("proj-track"), document.getElementById("proj-prev"), document.getElementById("proj-next"));
  initBoard();
  restartTimer();
});
