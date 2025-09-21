/* Funcion de carousel para TSU*/
const slidesTSU = document.querySelectorAll(".education__tsu-carousel-slide");
const prevBtnTSU = document.querySelector(".education__tsu-carousel-btn.prev");
const nextBtnTSU = document.querySelector(".education__tsu-carousel-btn.next");
const containerTSU = document.querySelector(".education__tsu-carousel-container");
const rootTSU = document.querySelector(".education__tsu-carousel");

let currentIndexTSU = 0;          // se mantiene por compatibilidad (no se usa en continuo)
let autoplayIntervalTSU = null;   // ahora será el id de requestAnimationFrame
let marqueeXTSU = 0;              // desplazamiento actual en px
let marqueeSpeedTSU = 60;         // velocidad en px/seg (ajústala a gusto)
let contentWidthTSU = 0;          // ancho total del track (original + clones)
let halfWidthTSU = 0;             // mitad del track para hacer el “wrap” sin salto
let rafIdTSU = null;

/* Espera a que las imágenes carguen para medir bien anchos */
function waitForImagesTSU() {
  const imgs = containerTSU.querySelectorAll("img");
  const promises = Array.from(imgs).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
  });
  return Promise.all(promises);
}

/* Calcula el ancho total del contenido actual del contenedor */
function calcTrackWidthTSU() {
  return Array.from(containerTSU.children).reduce((sum, el) => {
    return sum + el.getBoundingClientRect().width;
  }, 0);
}

/* Clona los slides hasta que el ancho sea al menos 2x del viewport del carrusel */
function cloneToFillTSU() {
  const originalSlides = Array.from(containerTSU.children);
  let viewportW = rootTSU.getBoundingClientRect().width;

  // Para evitar loops infinitos si algo falla:
  let safety = 0;
  while (contentWidthTSU < viewportW * 2 && safety < 10) {
    originalSlides.forEach(node => {
      const clone = node.cloneNode(true);
      containerTSU.appendChild(clone);
    });
    contentWidthTSU = calcTrackWidthTSU();
    safety++;
  }
  halfWidthTSU = contentWidthTSU / 2;
}

/* Loop continuo con requestAnimationFrame */
let lastTsTSU = null;
function tickTSU(ts) {
  if (!lastTsTSU) lastTsTSU = ts;
  const dt = (ts - lastTsTSU) / 1000; // seg
  lastTsTSU = ts;

  // avanzar hacia la izquierda
  marqueeXTSU -= marqueeSpeedTSU * dt;
  containerTSU.style.transform = `translateX(${marqueeXTSU}px)`;

  // cuando cruzamos la mitad del track, “reseteamos” sumando esa mitad
  if (-marqueeXTSU >= halfWidthTSU) {
    marqueeXTSU += halfWidthTSU;
  }

  rafIdTSU = requestAnimationFrame(tickTSU);
}

/* API pública manteniendo tus nombres */
function startAutoplayTSU() {
  stopAutoplayTSU();
  lastTsTSU = null;
  rafIdTSU = requestAnimationFrame(tickTSU);
}

function stopAutoplayTSU() {
  if (rafIdTSU) {
    cancelAnimationFrame(rafIdTSU);
    rafIdTSU = null;
  }
}

function resetAutoplayTSU() {
  stopAutoplayTSU();
  startAutoplayTSU();
}

/* Botones (opcional): ajustan velocidad momentáneamente */
if (prevBtnTSU) {
  prevBtnTSU.addEventListener("click", () => {
    marqueeXTSU += rootTSU.getBoundingClientRect().width * 0.25; // “retrocede” un poco
    resetAutoplayTSU();
  });
}
if (nextBtnTSU) {
  nextBtnTSU.addEventListener("click", () => {
    marqueeXTSU -= rootTSU.getBoundingClientRect().width * 0.25; // “avanza” un poco
    resetAutoplayTSU();
  });
}

/* Pausa en hover para UX */
if (rootTSU) {
  rootTSU.addEventListener("mouseenter", stopAutoplayTSU);
  rootTSU.addEventListener("mouseleave", startAutoplayTSU);
}

/* Inicialización */
(async function initTSUMarquee() {
  if (!containerTSU || !slidesTSU || !slidesTSU.length) return;

  // Asegura que los slides estén en línea (no por páginas)
  slidesTSU.forEach(slide => {
    slide.style.display = "block";
    slide.style.minWidth = "auto";
    slide.style.flexShrink = "0";
  });

  await waitForImagesTSU();
  contentWidthTSU = calcTrackWidthTSU();
  cloneToFillTSU();     // duplica automáticamente lo necesario
  marqueeXTSU = 0;
  containerTSU.style.transition = "none"; // movimiento continuo, sin “ease”
  startAutoplayTSU();

  // Recalcular en resize (por si cambia viewport)
  window.addEventListener("resize", () => {
    stopAutoplayTSU();
    marqueeXTSU = 0;
    // Elimina clones y deja solo el set original
    const children = Array.from(containerTSU.children);
    const originals = children.slice(0, slidesTSU.length);
    containerTSU.innerHTML = "";
    originals.forEach(n => containerTSU.appendChild(n));
    contentWidthTSU = calcTrackWidthTSU();
    cloneToFillTSU();
    startAutoplayTSU();
  });
})();

/*------------------------------------------------------------------------------------*
/* Funcion de carousel para Posgraduate - desplazamiento continuo sin saltos */
const slidesPOS = document.querySelectorAll(".education__posgraduate-carousel-slide");
const prevBtnPOS = document.querySelector(".education__posgraduate-carousel-btn.prev");
const nextBtnPOS = document.querySelector(".education__posgraduate-carousel-btn.next");
const containerPOS = document.querySelector(".education__posgraduate-carousel-container");
const rootPOS = document.querySelector(".education__posgraduate-carousel");

let currentIndexPOS = 0;        // se mantiene por compatibilidad
let autoplayIntervalPOS = null; // requestAnimationFrame id
let marqueeXPOS = 0;            // desplazamiento actual en px
let marqueeSpeedPOS = 60;       // velocidad en px/seg (ajústala)
let contentWidthPOS = 0;
let halfWidthPOS = 0;
let rafIdPOS = null;

/* Espera a que las imágenes carguen */
function waitForImagesPOS() {
  const imgs = containerPOS.querySelectorAll("img");
  const promises = Array.from(imgs).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
  });
  return Promise.all(promises);
}

/* Calcula ancho del track */
function calcTrackWidthPOS() {
  return Array.from(containerPOS.children).reduce((sum, el) => {
    return sum + el.getBoundingClientRect().width;
  }, 0);
}

/* Clona slides hasta cubrir 2x viewport */
function cloneToFillPOS() {
  const originalSlides = Array.from(containerPOS.children);
  let viewportW = rootPOS.getBoundingClientRect().width;
  let safety = 0;
  while (contentWidthPOS < viewportW * 2 && safety < 10) {
    originalSlides.forEach(node => {
      const clone = node.cloneNode(true);
      containerPOS.appendChild(clone);
    });
    contentWidthPOS = calcTrackWidthPOS();
    safety++;
  }
  halfWidthPOS = contentWidthPOS / 2;
}

/* Loop continuo */
let lastTsPOS = null;
function tickPOS(ts) {
  if (!lastTsPOS) lastTsPOS = ts;
  const dt = (ts - lastTsPOS) / 1000;
  lastTsPOS = ts;

  marqueeXPOS -= marqueeSpeedPOS * dt;
  containerPOS.style.transform = `translateX(${marqueeXPOS}px)`;

  if (-marqueeXPOS >= halfWidthPOS) {
    marqueeXPOS += halfWidthPOS;
  }

  rafIdPOS = requestAnimationFrame(tickPOS);
}

/* API pública */
function startAutoplayPOS() {
  stopAutoplayPOS();
  lastTsPOS = null;
  rafIdPOS = requestAnimationFrame(tickPOS);
}

function stopAutoplayPOS() {
  if (rafIdPOS) {
    cancelAnimationFrame(rafIdPOS);
    rafIdPOS = null;
  }
}

function resetAutoplayPOS() {
  stopAutoplayPOS();
  startAutoplayPOS();
}

/* Botones (opcionales) */
if (prevBtnPOS) {
  prevBtnPOS.addEventListener("click", () => {
    marqueeXPOS += rootPOS.getBoundingClientRect().width * 0.25;
    resetAutoplayPOS();
  });
}
if (nextBtnPOS) {
  nextBtnPOS.addEventListener("click", () => {
    marqueeXPOS -= rootPOS.getBoundingClientRect().width * 0.25;
    resetAutoplayPOS();
  });
}

/* Hover pause */
if (rootPOS) {
  rootPOS.addEventListener("mouseenter", stopAutoplayPOS);
  rootPOS.addEventListener("mouseleave", startAutoplayPOS);
}

/* Inicialización */
(async function initPOSMarquee() {
  if (!containerPOS || !slidesPOS || !slidesPOS.length) return;

  slidesPOS.forEach(slide => {
    slide.style.display = "block";
    slide.style.minWidth = "auto";
    slide.style.flexShrink = "0";
  });

  await waitForImagesPOS();
  contentWidthPOS = calcTrackWidthPOS();
  cloneToFillPOS();
  marqueeXPOS = 0;
  containerPOS.style.transition = "none";
  startAutoplayPOS();

  window.addEventListener("resize", () => {
    stopAutoplayPOS();
    marqueeXPOS = 0;
    const children = Array.from(containerPOS.children);
    const originals = children.slice(0, slidesPOS.length);
    containerPOS.innerHTML = "";
    originals.forEach(n => containerPOS.appendChild(n));
    contentWidthPOS = calcTrackWidthPOS();
    cloneToFillPOS();
    startAutoplayPOS();
  });
})();

/*---------------------------------------------------------------------------------*/

/* Funcion de carousel para Ingeniería - desplazamiento continuo sin saltos */
const slidesENG = document.querySelectorAll(".education__engineering-carousel-slide");
const prevBtnENG = document.querySelector(".education__engineering-carousel-btn.prev");
const nextBtnENG = document.querySelector(".education__engineering-carousel-btn.next");
const containerENG = document.querySelector(".education__engineering-carousel-container");
const rootENG = document.querySelector(".education__engineering-carousel");

let currentIndexENG = 0;        // solo por compatibilidad
let autoplayIntervalENG = null; // requestAnimationFrame id
let marqueeXENG = 0;            // desplazamiento actual en px
let marqueeSpeedENG = 60;       // velocidad en px/seg
let contentWidthENG = 0;
let halfWidthENG = 0;
let rafIdENG = null;

/* Espera a que las imágenes carguen */
function waitForImagesENG() {
  const imgs = containerENG.querySelectorAll("img");
  const promises = Array.from(imgs).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
  });
  return Promise.all(promises);
}

/* Calcula ancho del track */
function calcTrackWidthENG() {
  return Array.from(containerENG.children).reduce((sum, el) => {
    return sum + el.getBoundingClientRect().width;
  }, 0);
}

/* Clona slides hasta cubrir 2x viewport */
function cloneToFillENG() {
  const originalSlides = Array.from(containerENG.children);
  let viewportW = rootENG.getBoundingClientRect().width;
  let safety = 0;
  while (contentWidthENG < viewportW * 2 && safety < 10) {
    originalSlides.forEach(node => {
      const clone = node.cloneNode(true);
      containerENG.appendChild(clone);
    });
    contentWidthENG = calcTrackWidthENG();
    safety++;
  }
  halfWidthENG = contentWidthENG / 2;
}

/* Loop continuo */
let lastTsENG = null;
function tickENG(ts) {
  if (!lastTsENG) lastTsENG = ts;
  const dt = (ts - lastTsENG) / 1000;
  lastTsENG = ts;

  marqueeXENG -= marqueeSpeedENG * dt;
  containerENG.style.transform = `translateX(${marqueeXENG}px)`;

  if (-marqueeXENG >= halfWidthENG) {
    marqueeXENG += halfWidthENG;
  }

  rafIdENG = requestAnimationFrame(tickENG);
}

/* API pública */
function startAutoplayENG() {
  stopAutoplayENG();
  lastTsENG = null;
  rafIdENG = requestAnimationFrame(tickENG);
}

function stopAutoplayENG() {
  if (rafIdENG) {
    cancelAnimationFrame(rafIdENG);
    rafIdENG = null;
  }
}

function resetAutoplayENG() {
  stopAutoplayENG();
  startAutoplayENG();
}

/* Botones (opcionales) */
if (prevBtnENG) {
  prevBtnENG.addEventListener("click", () => {
    marqueeXENG += rootENG.getBoundingClientRect().width * 0.25;
    resetAutoplayENG();
  });
}
if (nextBtnENG) {
  nextBtnENG.addEventListener("click", () => {
    marqueeXENG -= rootENG.getBoundingClientRect().width * 0.25;
    resetAutoplayENG();
  });
}

/* Hover pause */
if (rootENG) {
  rootENG.addEventListener("mouseenter", stopAutoplayENG);
  rootENG.addEventListener("mouseleave", startAutoplayENG);
}

/* Inicialización */
(async function initENGMarquee() {
  if (!containerENG || !slidesENG || !slidesENG.length) return;

  slidesENG.forEach(slide => {
    slide.style.display = "block";
    slide.style.minWidth = "auto";
    slide.style.flexShrink = "0";
  });

  await waitForImagesENG();
  contentWidthENG = calcTrackWidthENG();
  cloneToFillENG();
  marqueeXENG = 0;
  containerENG.style.transition = "none";
  startAutoplayENG();

  window.addEventListener("resize", () => {
    stopAutoplayENG();
    marqueeXENG = 0;
    const children = Array.from(containerENG.children);
    const originals = children.slice(0, slidesENG.length);
    containerENG.innerHTML = "";
    originals.forEach(n => containerENG.appendChild(n));
    contentWidthENG = calcTrackWidthENG();
    cloneToFillENG();
    startAutoplayENG();
  });
})();

/*-----------------------------------------------------------------------------------*/

/* Funcion de carousel para Diplomado - desplazamiento continuo sin saltos */
const slidesDIP = document.querySelectorAll(".education__diplome-carousel-slide");
const prevBtnDIP = document.querySelector(".education__diplome-carousel-btn.prev");
const nextBtnDIP = document.querySelector(".education__diplome-carousel-btn.next");
const containerDIP = document.querySelector(".education__diplome-carousel-container");
const rootDIP = document.querySelector(".education__diplome-carousel");

let currentIndexDIP = 0;        // solo por compatibilidad
let autoplayIntervalDIP = null; // requestAnimationFrame id
let marqueeXDIP = 0;            // desplazamiento actual en px
let marqueeSpeedDIP = 60;       // velocidad en px/seg
let contentWidthDIP = 0;
let halfWidthDIP = 0;
let rafIdDIP = null;

/* Espera a que las imágenes carguen */
function waitForImagesDIP() {
  const imgs = containerDIP.querySelectorAll("img");
  const promises = Array.from(imgs).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      img.addEventListener("load", res, { once: true });
      img.addEventListener("error", res, { once: true });
    });
  });
  return Promise.all(promises);
}

/* Calcula ancho del track */
function calcTrackWidthDIP() {
  return Array.from(containerDIP.children).reduce((sum, el) => {
    return sum + el.getBoundingClientRect().width;
  }, 0);
}

/* Clona slides hasta cubrir 2x viewport */
function cloneToFillDIP() {
  const originalSlides = Array.from(containerDIP.children);
  let viewportW = rootDIP.getBoundingClientRect().width;
  let safety = 0;
  while (contentWidthDIP < viewportW * 2 && safety < 10) {
    originalSlides.forEach(node => {
      const clone = node.cloneNode(true);
      containerDIP.appendChild(clone);
    });
    contentWidthDIP = calcTrackWidthDIP();
    safety++;
  }
  halfWidthDIP = contentWidthDIP / 2;
}

/* Loop continuo */
let lastTsDIP = null;
function tickDIP(ts) {
  if (!lastTsDIP) lastTsDIP = ts;
  const dt = (ts - lastTsDIP) / 1000;
  lastTsDIP = ts;

  marqueeXDIP -= marqueeSpeedDIP * dt;
  containerDIP.style.transform = `translateX(${marqueeXDIP}px)`;

  if (-marqueeXDIP >= halfWidthDIP) {
    marqueeXDIP += halfWidthDIP;
  }

  rafIdDIP = requestAnimationFrame(tickDIP);
}

/* API pública */
function startAutoplayDIP() {
  stopAutoplayDIP();
  lastTsDIP = null;
  rafIdDIP = requestAnimationFrame(tickDIP);
}

function stopAutoplayDIP() {
  if (rafIdDIP) {
    cancelAnimationFrame(rafIdDIP);
    rafIdDIP = null;
  }
}

function resetAutoplayDIP() {
  stopAutoplayDIP();
  startAutoplayDIP();
}

/* Botones (opcionales) */
if (prevBtnDIP) {
  prevBtnDIP.addEventListener("click", () => {
    marqueeXDIP += rootDIP.getBoundingClientRect().width * 0.25;
    resetAutoplayDIP();
  });
}
if (nextBtnDIP) {
  nextBtnDIP.addEventListener("click", () => {
    marqueeXDIP -= rootDIP.getBoundingClientRect().width * 0.25;
    resetAutoplayDIP();
  });
}

/* Hover pause */
if (rootDIP) {
  rootDIP.addEventListener("mouseenter", stopAutoplayDIP);
  rootDIP.addEventListener("mouseleave", startAutoplayDIP);
}

/* Inicialización */
(async function initDIPMarquee() {
  if (!containerDIP || !slidesDIP || !slidesDIP.length) return;

  slidesDIP.forEach(slide => {
    slide.style.display = "block";
    slide.style.minWidth = "auto";
    slide.style.flexShrink = "0";
  });

  await waitForImagesDIP();
  contentWidthDIP = calcTrackWidthDIP();
  cloneToFillDIP();
  marqueeXDIP = 0;
  containerDIP.style.transition = "none";
  startAutoplayDIP();

  window.addEventListener("resize", () => {
    stopAutoplayDIP();
    marqueeXDIP = 0;
    const children = Array.from(containerDIP.children);
    const originals = children.slice(0, slidesDIP.length);
    containerDIP.innerHTML = "";
    originals.forEach(n => containerDIP.appendChild(n));
    contentWidthDIP = calcTrackWidthDIP();
    cloneToFillDIP();
    startAutoplayDIP();
  });
})();
