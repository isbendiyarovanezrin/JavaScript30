"use strict";

const pressed = [];
const secretWord = "vusale";

window.addEventListener("keyup", (e) => {
  // console.log(e, e.key);
  pressed.push(e.key);
  console.log(pressed);

  pressed.splice(-secretWord.length - 1, pressed.length - secretWord.length);
  console.log(pressed);

  if (pressed.join("").includes(secretWord)) {
    console.log("🦄");
    cornify_add();
  }
});
