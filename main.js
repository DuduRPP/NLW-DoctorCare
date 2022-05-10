"use strict";

let nav = document.getElementById("navigation");
let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let backToTopButton = document.getElementById("backToTopButton");
let footer = document.querySelector("footer");

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  // Linha Alvo
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a secao passou da linha

  // Topo da Secao
  const sectionTop = section.offsetTop;
  //Altura da Secao
  const sectionHeight = section.offsetHeight;

  // Topo da Secao passou ou alcancou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // Verificar se a base da Secao esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  // Limites da secao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
    if (scrollY + innerHeight > footer.offsetTop) {
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

function closeMenu() {
  document.querySelector("body").classList.remove("menu-expanded");
}
function openMenu() {
  document.querySelector("body").classList.add("menu-expanded");
}

window.addEventListener("scroll", onScroll);
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

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
