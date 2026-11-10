/* =============================================================
   Experience page: timeline rendered from EXPERIENCE (data.js).
   - The side index highlights the job you are reading (scroll-spy).
   - Older roles start folded; "Show more" opens them.
   ============================================================= */

const OPEN_BY_DEFAULT = 3; // the three most recent roles start open
const openJobs = new Set(EXPERIENCE.slice(0, OPEN_BY_DEFAULT).map((_, i) => i));

function jobHTML(job, i) {
  const open = openJobs.has(i);
  const projects = job.projects.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  return `<article class="job${open ? " is-open" : ""}" id="job-${i}">
    <div class="job__dot" aria-hidden="true"></div>
    <header class="job__head">
      <img class="job__logo" src="${job.logo}" alt="" loading="lazy">
      <div>
        <p class="job__dates">${tr(job.dates)}</p>
        <h2>${tr(job.company)}</h2>
        <p class="job__role">${tr(job.role)}</p>
        <p class="job__place">${tr(job.place)}</p>
      </div>
    </header>
    <p class="job__summary">${tr(job.summary)}</p>
    <button type="button" class="job__toggle" aria-expanded="${open}" aria-controls="job-body-${i}" data-i="${i}">
      <span>${open ? t("proj.close") : t("exp.points")}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="job__body" id="job-body-${i}">
      <div class="job__inner">
        <h3>${t("exp.points")}</h3>
        <ul class="job__points">${tr(job.points).map((x) => `<li>${x}</li>`).join("")}</ul>
        <h3>${t("exp.skills")}</h3>
        <div class="job__skills">${job.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
        ${projects.length ? `<h3>${t("exp.projects")}</h3><div class="track track--tight">${projects.map((p) => projectCard(p)).join("")}</div>` : ""}
      </div>
    </div>
  </article>`;
}

function renderExperience() {
  document.getElementById("exp-index").innerHTML = EXPERIENCE.map(
    (job, i) => `<li><a href="#job-${i}" data-i="${i}"><b>${tr(job.company).replace(/ \(.*\)/, "")}</b><small>${tr(job.dates)}</small></a></li>`
  ).join("");
  document.getElementById("exp-list").innerHTML = EXPERIENCE.map(jobHTML).join("");

  document.querySelectorAll(".job__toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const i = +btn.dataset.i;
      const job = document.getElementById(`job-${i}`);
      const open = !job.classList.contains("is-open");
      job.classList.toggle("is-open", open);
      open ? openJobs.add(i) : openJobs.delete(i);
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector("span").textContent = open ? t("proj.close") : t("exp.points");
    })
  );

  // Opening a job from the index unfolds it.
  document.querySelectorAll("#exp-index a").forEach((a) =>
    a.addEventListener("click", () => {
      const btn = document.querySelector(`.job__toggle[data-i="${a.dataset.i}"]`);
      if (btn && btn.getAttribute("aria-expanded") === "false") btn.click();
    })
  );
  spy();
}

/* Scroll-spy: mark the job closest to the top of the screen. */
let spyObserver;
function spy() {
  spyObserver?.disconnect();
  const links = [...document.querySelectorAll("#exp-index a")];
  spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = e.target.id.split("-")[1];
        links.forEach((l) => l.classList.toggle("is-active", l.dataset.i === i));
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  document.querySelectorAll(".job").forEach((j) => spyObserver.observe(j));
}

document.addEventListener("langchange", renderExperience);
