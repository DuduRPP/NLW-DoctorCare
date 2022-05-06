"use strict";

let nav = document.getElementById("navigation");
let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");

function onScroll() {
  if (scrollY != 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function controlMenu() {
  document.querySelector("body").classList.toggle("menu-expanded");
}

document.addEventListener("scroll", onScroll);
openMenuBtn.addEventListener("click", controlMenu);
closeMenuBtn.addEventListener("click", controlMenu);

//ScrollReveal

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 900,
}).reveal(`#home,
  #home img,
  #home .stats,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);
