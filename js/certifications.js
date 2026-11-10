/* =============================================================
   Certifications page: cards rendered from CERTS (data.js).
   - Filter by group (Lean & quality / Leadership / Data & tools).
   - If a certificate has an image (img), it shows as a thumbnail
     and opens large in the lightbox. Esc or click outside closes it.
   ============================================================= */

let certFilter = "all";

function certCard(c) {
  const hidden = certFilter !== "all" && c.group !== certFilter;
  const thumb = c.img
    ? `<button type="button" class="cert__img" data-src="${c.img}" data-alt="${tr(c.name)}"><img src="${c.img}" alt="${tr(c.name)}" loading="lazy"></button>`
    : "";
  return `<article class="cert${hidden ? " is-hidden" : ""}${c.img ? " has-img" : ""}">
    ${thumb}
    <div class="cert__top">
      <span class="cert__year">${tr(c.date)}</span>
      <span class="cert__status cert__status--${c.status}">${t(c.status === "done" ? "cert.done" : "cert.progress")}</span>
    </div>
    <h2>${tr(c.name)}</h2>
    <p class="cert__by">${tr(c.by)}${c.id ? ` · ID ${c.id}` : ""}</p>
    ${c.text ? `<p class="cert__text">${tr(c.text)}</p>` : ""}
    <div class="cert__skills">${c.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
  </article>`;
}

function renderCerts() {
  const chips = [["all", t("all")], ...CERT_GROUPS.map(([id, label]) => [id, tr(label)])];
  const box = document.getElementById("cert-filters");
  box.innerHTML = chips
    .map(([id, label]) => {
      const n = id === "all" ? CERTS.length : CERTS.filter((c) => c.group === id).length;
      return `<button type="button" class="chip" aria-pressed="${certFilter === id}" data-f="${id}">${label} <small>${n}</small></button>`;
    })
    .join("");
  box.querySelectorAll(".chip").forEach((c) =>
    c.addEventListener("click", () => {
      certFilter = c.dataset.f;
      renderCerts();
    })
  );

  const grid = document.getElementById("certs");
  grid.innerHTML = CERTS.map(certCard).join("");
  grid.querySelectorAll(".cert__img").forEach((b) => b.addEventListener("click", () => openCertImage(b.dataset.src, b.dataset.alt)));
}

function openCertImage(src, alt) {
  const lb = document.getElementById("lightbox");
  lb.querySelector("img").src = src;
  lb.querySelector("img").alt = alt;
  lb.querySelector("p").textContent = alt;
  lb.hidden = false;
  lb.querySelector(".lightbox__close").focus();
}

document.addEventListener("langchange", renderCerts);

document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  const close = () => (lb.hidden = true);
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
});
