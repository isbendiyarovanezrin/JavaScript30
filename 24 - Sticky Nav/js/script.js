"use strict";

const nav = document.querySelector("nav");
const logo = document.getElementById("logo");

function fixNav() {
  if (window.pageYOffset >= nav.offsetTop) {
    logo.style.maxWidth = "100%";
  } else {
    logo.style.maxWidth = "0";
  }
}

window.addEventListener("scroll", fixNav);
