/* =============================================================
   Projects page (awards.html).
   One function renders every case from PROJECTS (data.js), so the
   old per-card copies (card 1, card 2 … card 9) are no longer needed.
   - Click a case to open/close it (accordion).
   - awards.html?project=<id> opens that case, scrolls to it and
     highlights it (links from the CV, home and experience pages).
   - Click an image to see it large (lightbox, Esc to close).
   ============================================================= */

let caseFilter = "all";
const openCases = new Set();

function caseHTML(p) {
  const open = openCases.has(p.id);
  const dim = caseFilter !== "all" && p.stage !== caseFilter;
  const b = p.bars;
  const bars = b
    ? `<div class="case__bars"><p>${tr(b.label)}</p><div class="bars bars--light">${[
        [t("before"), b.before],
        [t("after"), b.after]
      ]
        .map(([l, v], j) => `<div class="br${j ? " br--after" : ""}"><span>${l}</span><span class="br__t"><i data-w="${v / b.max}"></i></span><span>${v}${b.unit}</span></div>`)
        .join("")}</div></div>`
    : "";
  const imgs = p.images.length
    ? `<div class="case__gallery"><h3>${t("proj.evidence")}</h3><div>${p.images
        .map((im) => `<button type="button" class="case__img" data-src="${im.src}" data-alt="${tr(im.alt)}"><img src="${im.src}" alt="${tr(im.alt)}" loading="lazy"></button>`)
        .join("")}</div></div>`
    : "";

  return `<article class="case${open ? " is-open" : ""}${dim ? " is-hidden" : ""}" id="${p.id}">
    <h2 class="case__h"><button type="button" class="case__head" aria-expanded="${open}" aria-controls="${p.id}-body">
      <span class="case__big">${p.big}</span>
      <span class="case__title">
        <small>${p.company} · ${tr(p.where)}</small>
        <b>${tr(p.title)}</b>
        <span>${tr(p.summary)}</span>
      </span>
      <span class="case__meta">
        ${p.award ? `<span class="badge">${tr(p.award)}</span>` : ""}
        <span class="case__chev" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>
      </span>
    </button></h2>
    <div class="case__body" id="${p.id}-body" role="region">
      <div class="case__inner">
        <div class="case__text">
          <p class="case__contest">${tr(p.contest)}</p>
          <h3>${t("proj.problem")}</h3><p>${tr(p.problem)}</p>
          <h3>${t("proj.solution")}</h3><p>${tr(p.solution)}</p>
          <h3>${t("proj.role")}</h3><p>${tr(p.role)}</p>
          ${p.extra ? `<h3>${t("proj.result")}</h3><p>${tr(p.extra)}</p>` : ""}
          <div class="case__tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        </div>
        <div class="case__side">${bars}${imgs}</div>
      </div>
    </div>
  </article>`;
}

function growBars(scope) {
  requestAnimationFrame(() =>
    requestAnimationFrame(() => scope.querySelectorAll(".br__t i").forEach((i) => (i.style.transform = `scaleX(${i.dataset.w})`)))
  );
}

function renderCases() {
  const filters = [["all", t("all")], ...STAGES.map((s) => [s.id, s.name])];
  const fbox = document.getElementById("cases-filters");
  fbox.innerHTML = filters.map(([id, l]) => `<button type="button" class="chip" aria-pressed="${caseFilter === id}" data-f="${id}">${l}</button>`).join("");
  fbox.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => {
      caseFilter = c.dataset.f;
      renderCases();
    })
  );

  const box = document.getElementById("cases");
  box.innerHTML = PROJECTS.map(caseHTML).join("");
  box.querySelectorAll(".case.is-open").forEach(growBars);

  box.querySelectorAll(".case__head").forEach((head) =>
    head.addEventListener("click", () => toggleCase(head.closest(".case")))
  );
  box.querySelectorAll(".case__img").forEach((b) => b.addEventListener("click", () => openLightbox(b.dataset.src, b.dataset.alt)));
}

function toggleCase(card, forceOpen) {
  const open = forceOpen ?? !card.classList.contains("is-open");
  card.classList.toggle("is-open", open);
  card.querySelector(".case__head").setAttribute("aria-expanded", String(open));
  open ? openCases.add(card.id) : openCases.delete(card.id);
  if (open) growBars(card);
}

/* Deep link: awards.html?project=scrap (also #scrap). */
function openFromUrl() {
  const id = new URLSearchParams(location.search).get("project") || location.hash.slice(1);
  const card = id && document.getElementById(id);
  if (!card || !card.classList.contains("case")) return;
  toggleCase(card, true);
  setTimeout(() => {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    card.classList.add("is-highlight");
    setTimeout(() => card.classList.remove("is-highlight"), 1800);
  }, 150);
}

/* Lightbox */
function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  lb.querySelector("img").src = src;
  lb.querySelector("img").alt = alt;
  lb.querySelector("p").textContent = alt;
  lb.hidden = false;
  lb.querySelector(".lightbox__close").focus();
}
function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
}

let firstRender = true;
document.addEventListener("langchange", () => {
  renderCases();
  if (firstRender) {
    firstRender = false;
    openFromUrl();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lightbox__close")) closeLightbox();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && closeLightbox());
});
