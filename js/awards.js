//Cargar tarjetas por seleccion
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const projectName = params.get("project");

  if(projectName) {
    const targetCard = document.getElementById(projectName);

    if(targetCard) {
      targetCard.scrollIntoView({behavior: "smooth", block: "start"});

      targetCard.classList.add("highlight");
      setTimeout(() => targetCard.classList.remove("highlight"), 1200);
    }
  }
});

/*---------------------------------------------------------------------------*/

// Tarjeta 1
const btnOpenOne  = document.querySelector(".card__1-more");
const openOne     = document.querySelector(".card__1-more-img");
const detailOne   = document.querySelector(".card__1-detail");
const btnCloseOne = document.querySelector(".detail__1-return");
const closeOne    = document.querySelector(".detail__1-return-img");

if (btnOpenOne && openOne && detailOne) {
  btnOpenOne.addEventListener("click", () => {
    // 1) Cerrar cualquier otra tarjeta abierta
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailOne) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openOne) i.classList.remove("rotate");
    });

    // 2) Abrir/cerrar solo esta
    const isOpen = detailOne.classList.toggle("isOpen");
    openOne.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseOne && closeOne && detailOne && openOne) {
  btnCloseOne.addEventListener("click", () => {
    detailOne.classList.remove("isOpen");
    openOne.classList.remove("rotate");
    closeOne.classList.add("collapse");
    setTimeout(() => closeOne.classList.remove("collapse"), 400);
  });
}

/*---------------------------------------------------------------------------*/

//Tarjeta 2
const btnOpenTwo  = document.querySelector(".card__2-more");
const openTwo     = document.querySelector(".card__2-more-img");
const detailTwo   = document.querySelector(".card__2-detail");
const btnCloseTwo = document.querySelector(".detail__2-return");
const closeTwo    = document.querySelector(".detail__2-return-img");

if (btnOpenTwo && openTwo && detailTwo) {
  btnOpenTwo.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailTwo) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openTwo) i.classList.remove("rotate");
    });

    const isOpen = detailTwo.classList.toggle("isOpen");
    openTwo.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseTwo && closeTwo && detailTwo && openTwo) {
  btnCloseTwo.addEventListener("click", () => {
    detailTwo.classList.remove("isOpen");
    openTwo.classList.remove("rotate");
    closeTwo.classList.add("collapse");
    setTimeout(() => closeTwo.classList.remove("collapse"), 400);
  });
}
/*---------------------------------------------------------------------------*/

//Tarjeta 3
const btnOpenThree  = document.querySelector(".card__3-more");
const openThree     = document.querySelector(".card__3-more-img");
const detailThree   = document.querySelector(".card__3-detail");
const btnCloseThree = document.querySelector(".detail__3-return");
const closeThree    = document.querySelector(".detail__3-return-img");

if (btnOpenThree && openThree && detailThree) {
  btnOpenThree.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailThree) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openThree) i.classList.remove("rotate");
    });

    const isOpen = detailThree.classList.toggle("isOpen");
    openThree.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseThree && closeThree && detailThree && openThree) {
  btnCloseThree.addEventListener("click", () => {
    detailThree.classList.remove("isOpen");
    openThree.classList.remove("rotate");
    closeThree.classList.add("collapse");
    setTimeout(() => closeThree.classList.remove("collapse"), 400);
  });
}
/*---------------------------------------------------------------------------*/

//Tarjeta 4
const btnOpenFour  = document.querySelector(".card__4-more");
const openFour     = document.querySelector(".card__4-more-img");
const detailFour   = document.querySelector(".card__4-detail");
const btnCloseFour = document.querySelector(".detail__4-return");
const closeFour    = document.querySelector(".detail__4-return-img");

if (btnOpenFour && openFour && detailFour) {
  btnOpenFour.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailFour) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openFour) i.classList.remove("rotate");
    });

    const isOpen = detailFour.classList.toggle("isOpen");
    openFour.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseFour && closeFour && detailFour && openFour) {
  btnCloseFour.addEventListener("click", () => {
    detailFour.classList.remove("isOpen");
    openFour.classList.remove("rotate");
    closeFour.classList.add("collapse");
    setTimeout(() => closeFour.classList.remove("collapse"), 400);
  });
}
/*---------------------------------------------------------------------------*/

//Tarjeta 5
const btnOpenFive  = document.querySelector(".card__5-more");
const openFive     = document.querySelector(".card__5-more-img");
const detailFive   = document.querySelector(".card__5-detail");
const btnCloseFive = document.querySelector(".detail__5-return");
const closeFive    = document.querySelector(".detail__5-return-img");

if (btnOpenFive && openFive && detailFive) {
  btnOpenFive.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailFive) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openFive) i.classList.remove("rotate");
    });

    const isOpen = detailFive.classList.toggle("isOpen");
    openFive.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseFive && closeFive && detailFive && openFive) {
  btnCloseFive.addEventListener("click", () => {
    detailFive.classList.remove("isOpen");
    openFive.classList.remove("rotate");
    closeFive.classList.add("collapse");
    setTimeout(() => closeFive.classList.remove("collapse"), 400);
  });
}
/*---------------------------------------------------------------------------*/

//Tarjeta 6
const btnOpenSix  = document.querySelector(".card__6-more");
const openSix     = document.querySelector(".card__6-more-img");
const detailSix   = document.querySelector(".card__6-detail");
const btnCloseSix = document.querySelector(".detail__6-return");
const closeSix    = document.querySelector(".detail__6-return-img");

if (btnOpenSix && openSix && detailSix) {
  btnOpenSix.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailSix) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openSix) i.classList.remove("rotate");
    });

    const isOpen = detailSix.classList.toggle("isOpen");
    openSix.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseSix && closeSix && detailSix && openSix) {
  btnCloseSix.addEventListener("click", () => {
    detailSix.classList.remove("isOpen");
    openSix.classList.remove("rotate");
    closeSix.classList.add("collapse");
    setTimeout(() => closeSix.classList.remove("collapse"), 400);
  });
}

/*---------------------------------------------------------------------------*/

//Tarjeta 7
const btnOpenSeven  = document.querySelector(".card__7-more");
const openSeven     = document.querySelector(".card__7-more-img");
const detailSeven   = document.querySelector(".card__7-detail");
const btnCloseSeven = document.querySelector(".detail__7-return");
const closeSeven    = document.querySelector(".detail__7-return-img");

if (btnOpenSeven && openSeven && detailSeven) {
  btnOpenSeven.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailSeven) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openSeven) i.classList.remove("rotate");
    });

    const isOpen = detailSeven.classList.toggle("isOpen");
    openSeven.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseSeven && closeSeven && detailSeven && openSeven) {
  btnCloseSeven.addEventListener("click", () => {
    detailSeven.classList.remove("isOpen");
    openSeven.classList.remove("rotate");
    closeSeven.classList.add("collapse");
    setTimeout(() => closeSeven.classList.remove("collapse"), 400);
  });
}

/*---------------------------------------------------------------------------*/

//Tarjeta 8
const btnOpenEight  = document.querySelector(".card__8-more");
const openEight     = document.querySelector(".card__8-more-img");
const detailEight   = document.querySelector(".card__8-detail");
const btnCloseEight = document.querySelector(".detail__8-return");
const closeEight    = document.querySelector(".detail__8-return-img");

if (btnOpenEight && openEight && detailEight) {
  btnOpenEight.addEventListener("click", () => {
    // Cerrar otras tarjetas primero
    document.querySelectorAll("section[class^='card__'] [class*='-detail'].isOpen").forEach(d => {
      if (d !== detailEight) d.classList.remove("isOpen");
    });
    document.querySelectorAll("section[class^='card__'] [class*='-more-img'].rotate").forEach(i => {
      if (i !== openEight) i.classList.remove("rotate");
    });

    const isOpen = detailEight.classList.toggle("isOpen");
    openEight.classList.toggle("rotate", isOpen);
  });
}

if (btnCloseEight && closeEight && detailEight && openEight) {
  btnCloseEight.addEventListener("click", () => {
    detailEight.classList.remove("isOpen");
    openEight.classList.remove("rotate");
    closeEight.classList.add("collapse");
    setTimeout(() => closeEight.classList.remove("collapse"), 400);
  });
}

/*---------------------------------------------------------------------------*/
