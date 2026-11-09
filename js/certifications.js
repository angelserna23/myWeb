/* =============================================================
   Certifications page: cards rendered from CERTS (data.js).
   ============================================================= */

function renderCerts() {
  document.getElementById("certs").innerHTML = CERTS.map(
    (c) => `<article class="cert">
      <div class="cert__top">
        <span class="cert__year">${c.year}</span>
        <span class="cert__status cert__status--${c.status}">${t(c.status === "done" ? "cert.done" : "cert.progress")}</span>
      </div>
      <h2>${tr(c.name)}</h2>
      <p>${tr(c.by)}</p>
      <div class="cert__skills">${c.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
    </article>`
  ).join("");
}

document.addEventListener("langchange", renderCerts);
