"use strict";

const slider = document.querySelector(".items");
const sound = document.getElementById("sound");

let isDown = false,
  scrollLeft,
  startX;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  sound.play();
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
  sound.pause();
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
  sound.pause();
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 4;
  slider.scrollLeft = scrollLeft - walk;
  sound.play();
});
