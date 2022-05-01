"use strict";

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("click", (e) => {
  const sounds = document.querySelectorAll("audio[data-key]");
  sounds.forEach((sound) => {
    if (
      e.target.getAttribute("data-key") == sound.getAttribute("data-key") ||
      e.target.innerHTML.toLowerCase() == sound.getAttribute("data-key")
    ) {
      sound.currentTime = 0;
      sound.play();
    }

    const position = [
      { sound: "boom", letter: "a" },
      { sound: "clap", letter: "s" },
      { sound: "hihat", letter: "d" },
      { sound: "kick", letter: "f" },
      { sound: "openhat", letter: "g" },
      { sound: "ride", letter: "h" },
      { sound: "snare", letter: "j" },
      { sound: "tink", letter: "k" },
      { sound: "tom", letter: "l" },
    ];

    for (let i = 0; i < position.length; i++) {
      if (e.target.innerHTML.toLowerCase() == position[i].sound) {
        const audio = document.querySelector(
          `audio[data-key='${position[i].letter}']`
        );
        audio.currentTime = 0;
        audio.play();
      }
    }
  });
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
