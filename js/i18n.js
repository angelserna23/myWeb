/* =============================================================
   i18n: interface texts in English and Spanish + language switch.
   - Static text in HTML:  <span data-i18n="key"></span>
   - Text with HTML tags:  <p data-i18n-html="key"></p>
   - Long bilingual blocks: <div data-lang="en">…</div><div data-lang="es">…</div>
   - Content from data.js: use tr(obj) inside the page scripts.
   ============================================================= */

const UI = {
  en: {
    "nav.home": "Home", "nav.exp": "Experience", "nav.projects": "Projects", "nav.edu": "Education", "nav.certs": "Certifications",
    cv: "Download CV", "cv.short": "CV", menu: "Menu",
    role: "Senior Industrial Engineer & Continuous Improvement Lead",
    dek: "I go to the floor, work next to the team and stay until the number moves. Then I build the tool that keeps it there: <strong>time studies, OEE, labor-cost models, VBA and web apps.</strong>",
    who: "Saltillo, Coahuila · English B2 · French B2",
    board: "What moved, stage by stage", pause: "Pause", play: "Play",
    see: "See these projects", before: "Before", after: "After",
    "home.projects": "Projects", "home.projects.sub": "Each card opens the full case: the problem, what I did on the floor, and the number before and after.",
    all: "All", "view.all": "View all projects",
    "awards.title": "Five awards", "awards.sub": "Internal improvement contests at JATCO México, judged by plant management.",
    "awards.place": "place",
    "how.title": "How I work",
    "how.1.t": "Go and see", "how.1.d": "Every project starts on the floor: time studies, talking with operators, watching the real process before touching a spreadsheet.",
    "how.2.t": "Measure what matters", "how.2.d": "OEE, OOE, days in shop, repeat failures. One definition per metric, agreed with the team, so everyone argues about the problem and not the number.",
    "how.3.t": "Build the tool", "how.3.d": "When a fix depends on manual work, I automate it: VBA, Python, web apps. The improvement stays after I leave the line.",
    "how.4.t": "Bring the team", "how.4.d": "Training, standard work and weekly reviews. A result the team does not own does not last.",
    "foot.title": "Let's <span>talk</span>", "foot.text": "Looking for a Senior Industrial Engineer or Continuous Improvement Lead role in manufacturing. Based in Saltillo, Coahuila, Mexico.",
    "foot.contact": "Contact", "foot.site": "Site", "foot.terms": "Terms", "foot.privacy": "Privacy", "foot.occ": "CV for OCC",
    "foot.rights": "Ángel A. Hernández Serna", "foot.built": "Built by hand with HTML, SCSS and JavaScript.",
    "exp.title": "Expe<span>rience</span>", "exp.sub": "From an internship in France to leading maintenance and improvement for a 250-truck fleet. Each card opens the case behind the number.",
    "exp.points": "Key results", "exp.skills": "Skills", "exp.projects": "Projects",
    "proj.title": "Pro<span>jects</span>", "proj.sub": "The problem, what I did and the number before and after. Click a card to open the full case.",
    "proj.open": "Open case", "proj.close": "Close", "proj.problem": "Problem", "proj.solution": "Solution", "proj.role": "My role", "proj.result": "Result", "proj.evidence": "Evidence",
    "proj.ooe": "OOE = Overall Operation Efficiency: how much of the paid operator time goes into required work.",
    "edu.title": "Educa<span>tion</span>", "edu.sub": "Engineering in Mexico, a postgraduate year in France, and full-stack development to build my own tools.",
    "edu.langs": "Languages", "edu.skills": "What I took from it",
    "cert.title": "Certifi<span>cations</span>", "cert.sub": "Formal training behind the work: Lean and quality, people leadership, and data tools. Green Belt is my next step.",
    "cert.done": "Completed", "cert.progress": "In progress",
    "legal.updated": "Last updated: November 2026",
    "404": "Page not found"
  },
  es: {
    "nav.home": "Inicio", "nav.exp": "Experiencia", "nav.projects": "Proyectos", "nav.edu": "Educación", "nav.certs": "Certificaciones",
    cv: "Descargar CV", "cv.short": "CV", menu: "Menú",
    role: "Ingeniero Industrial Senior y Líder de Mejora Continua",
    dek: "Voy al piso, trabajo junto al equipo y me quedo hasta que el número se mueve. Después construyo la herramienta que lo sostiene: <strong>estudios de tiempos, OEE, modelos de costo de mano de obra, VBA y apps web.</strong>",
    who: "Saltillo, Coahuila · Inglés B2 · Francés B2",
    board: "Qué se movió, etapa por etapa", pause: "Pausar", play: "Reproducir",
    see: "Ver estos proyectos", before: "Antes", after: "Después",
    "home.projects": "Proyectos", "home.projects.sub": "Cada tarjeta abre el caso completo: el problema, lo que hice en piso y el número antes y después.",
    all: "Todos", "view.all": "Ver todos los proyectos",
    "awards.title": "Cinco reconocimientos", "awards.sub": "Concursos internos de mejora en JATCO México, evaluados por la dirección de planta.",
    "awards.place": "lugar",
    "how.title": "Cómo trabajo",
    "how.1.t": "Ir a ver", "how.1.d": "Todo proyecto empieza en piso: estudios de tiempos, hablar con los operadores, ver el proceso real antes de abrir una hoja de cálculo.",
    "how.2.t": "Medir lo que importa", "how.2.d": "OEE, OOE, días en taller, reincidencias. Una sola definición por métrica, acordada con el equipo, para discutir el problema y no el número.",
    "how.3.t": "Construir la herramienta", "how.3.d": "Si una mejora depende de trabajo manual, la automatizo: VBA, Python, apps web. La mejora se queda aunque yo ya no esté en la línea.",
    "how.4.t": "Sumar al equipo", "how.4.d": "Capacitación, trabajo estandarizado y revisiones semanales. Un resultado que el equipo no siente suyo no dura.",
    "foot.title": "Hablemos", "foot.text": "Busco un puesto de Ingeniero Industrial Senior o Líder de Mejora Continua en manufactura. Vivo en Saltillo, Coahuila.",
    "foot.contact": "Contacto", "foot.site": "Sitio", "foot.terms": "Términos", "foot.privacy": "Privacidad", "foot.occ": "CV para OCC",
    "foot.rights": "Ángel A. Hernández Serna", "foot.built": "Hecho a mano con HTML, SCSS y JavaScript.",
    "exp.title": "Expe<span>riencia</span>", "exp.sub": "De unas prácticas en Francia a dirigir mantenimiento y mejora de una flota de 250 tractos. Cada tarjeta abre el caso detrás del número.",
    "exp.points": "Resultados clave", "exp.skills": "Habilidades", "exp.projects": "Proyectos",
    "proj.title": "Proyec<span>tos</span>", "proj.sub": "El problema, lo que hice y el número antes y después. Da clic en una tarjeta para abrir el caso completo.",
    "proj.open": "Abrir caso", "proj.close": "Cerrar", "proj.problem": "Problema", "proj.solution": "Solución", "proj.role": "Mi rol", "proj.result": "Resultado", "proj.evidence": "Evidencia",
    "proj.ooe": "OOE = Overall Operation Efficiency: qué parte del tiempo pagado de los operadores se usa en trabajo requerido.",
    "edu.title": "Educa<span>ción</span>", "edu.sub": "Ingeniería en México, un año de posgrado en Francia y desarrollo full-stack para construir mis propias herramientas.",
    "edu.langs": "Idiomas", "edu.skills": "Lo que me llevé",
    "cert.title": "Certifica<span>ciones</span>", "cert.sub": "La formación detrás del trabajo: Lean y calidad, liderazgo de personas y herramientas de datos. Green Belt es mi siguiente paso.",
    "cert.done": "Completada", "cert.progress": "En curso",
    "legal.updated": "Última actualización: noviembre 2026",
    "404": "Página no encontrada"
  }
};

let LANG = "en";

/** Picks the current language from a {en, es} object (or returns plain strings as-is). */
function tr(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[LANG] ?? value.en;
}

function t(key) {
  return UI[LANG][key] ?? UI.en[key] ?? key;
}

function applyStaticTexts(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  root.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  root.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
}

function setLang(lang) {
  LANG = lang === "es" ? "es" : "en";
  document.documentElement.lang = LANG;
  applyStaticTexts();
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === LANG)));
  try {
    localStorage.setItem("lang", LANG);
  } catch (e) {
    /* storage can be blocked; the site still works */
  }
  // Page scripts listen to this event to re-render their content.
  document.dispatchEvent(new CustomEvent("langchange", { detail: LANG }));
}

function initialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch (e) {}
  return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
}
