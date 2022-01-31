"use strict";

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeStyle));

function removeStyle() {
  this.classList.remove("playing");
}

// cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  const x = e.pageX;
  const y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1500);
});

function removeLoader() {
  $(".cssload-container").fadeOut(500, () => {
    $(".cssload-container").remove();
  });
}
