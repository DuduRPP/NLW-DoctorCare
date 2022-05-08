"use strict";

let nav = document.getElementById("navigation");
let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let backToTopButton = document.getElementById("backToTopButton");

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
    if (scrollY > 4480) {
      backToTopButton.classList.add("onFooter");
    } else {
      backToTopButton.classList.remove("onFooter");
    }
  } else {
    backToTopButton.classList.remove("show");
  }
}

function showNavOnScroll() {
  if (scrollY != 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function controlMenu() {
  document.querySelector("body").classList.toggle("menu-expanded");
}

window.addEventListener("scroll", onScroll);
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
  #about .content,
  #contact,
  #contact header,
  #contact .content`);
