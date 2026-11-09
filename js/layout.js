/* =============================================================
   Shared layout: navigation + footer, written once and inserted
   into every page. Each page only needs:
     <header id="site-nav"></header> … <footer id="site-footer"></footer>
   and <body data-page="home|exp|projects|edu|certs|legal">.
   ============================================================= */

const CV_URL = "assets/CV_Angel_Serna1.6.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/angel-andres-hernandez-serna-a6b91a273";
const EMAIL = "andres.hdzserna@gmail.com";
const PHONE = "+52 449 142 57 27";

const ICONS = {
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 20h16"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.71 0-1.97 1.33-1.97 2.7V21h-4z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  pause: '<svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><rect x="2" y="1" width="3" height="10"/><rect x="7" y="1" width="3" height="10"/></svg>',
  play: '<svg viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 1l8 5-8 5z"/></svg>'
};

const NAV_ITEMS = [
  ["home", "index.html", "nav.home"],
  ["exp", "workExperience.html", "nav.exp"],
  ["projects", "awards.html", "nav.projects"],
  ["edu", "education.html", "nav.edu"],
  ["certs", "certifications.html", "nav.certs"]
];

function renderNav(page) {
  const el = document.getElementById("site-nav");
  if (!el) return;
  el.className = "nav";
  el.innerHTML = `
    <div class="wrap nav__inner">
      <a class="nav__logo" href="index.html" aria-label="Angel Serna, home"><img src="media/logo-ahs.png" alt="AHS" width="34" height="34"></a>
      <nav aria-label="Main"><ul class="nav__links" id="nav-links">
        ${NAV_ITEMS.map(([id, href, key]) => `<li><a href="${href}" data-i18n="${key}" ${id === page ? 'aria-current="page"' : ""}></a></li>`).join("")}
      </ul></nav>
      <div class="lang" role="group" aria-label="Language / Idioma">
        <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
        <button type="button" data-set-lang="es" aria-pressed="false">ES</button>
      </div>
      <a class="btn btn--primary nav__cv" href="${CV_URL}" target="_blank" rel="noopener">${ICONS.download}<span data-i18n="cv.short"></span></a>
      <button class="nav__burger" type="button" aria-expanded="false" aria-controls="nav-links" data-i18n-aria="menu"><span></span></button>
    </div>`;

  const burger = el.querySelector(".nav__burger");
  burger.addEventListener("click", () => {
    const open = el.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  // Close the mobile menu when a link is chosen or Escape is pressed.
  el.querySelectorAll(".nav__links a").forEach((a) => a.addEventListener("click", () => el.classList.remove("is-open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      el.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
  el.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang)));
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "footer";
  el.innerHTML = `
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__cta">
          <h2 data-i18n-html="foot.title"></h2>
          <p data-i18n="foot.text"></p>
          <a class="btn btn--primary" href="${CV_URL}" target="_blank" rel="noopener">${ICONS.download}<span data-i18n="cv"></span></a>
        </div>
        <div>
          <h3 data-i18n="foot.contact"></h3>
          <ul class="footer__list">
            <li><a href="${LINKEDIN_URL}" target="_blank" rel="noopener">${ICONS.linkedin}<span>LinkedIn</span></a></li>
            <li><a href="mailto:${EMAIL}?subject=Job%20opportunity">${ICONS.mail}<span>${EMAIL}</span></a></li>
            <li><a href="tel:${PHONE.replace(/\s/g, "")}">${ICONS.phone}<span>${PHONE}</span></a></li>
            <li><a href="assets/CV_OCC_NEW.pdf" target="_blank" rel="noopener">${ICONS.file}<span data-i18n="foot.occ"></span></a></li>
          </ul>
        </div>
        <div>
          <h3 data-i18n="foot.site"></h3>
          <ul class="footer__list">
            ${NAV_ITEMS.map(([, href, key]) => `<li><a href="${href}" data-i18n="${key}"></a></li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="footer__base">
        <span>© ${new Date().getFullYear()} <span data-i18n="foot.rights"></span> · <span data-i18n="foot.built"></span></span>
        <a href="terms.html" data-i18n="foot.terms"></a>
        <a href="privacy.html" data-i18n="foot.privacy"></a>
      </div>
    </div>`;
}

/* Small helper used by the carousels on several pages. */
function wireTrack(track, prevBtn, nextBtn) {
  const step = () => (track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 16 : 340);
  const update = () => {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = track.scrollLeft < 4;
    nextBtn.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prevBtn && prevBtn.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  nextBtn && nextBtn.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  return update;
}

/* Project card markup, shared by home and experience. */
function projectCard(p, dim = false) {
  return `<a class="pcard${dim ? " is-dim" : ""}" href="awards.html?project=${p.id}" data-stage="${p.stage}">
    ${p.award ? `<span class="badge">${tr(p.award)}</span>` : ""}
    <span class="pcard__co">${p.company}</span>
    <span class="pcard__big">${p.big}</span>
    <h3>${tr(p.title)}</h3>
    <p>${tr(p.summary)}</p>
    <span class="pcard__tags">${p.tags.map((x) => `<span class="tag">${x}</span>`).join("")}</span>
    <span class="pcard__go">${ICONS.arrow}</span>
  </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav(document.body.dataset.page);
  renderFooter();
  setLang(initialLang());
});
