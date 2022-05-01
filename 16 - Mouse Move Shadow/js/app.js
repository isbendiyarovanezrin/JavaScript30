"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector(".text");
const mq = window.matchMedia("(max-width: 1007px)");
let walk = 200; // 200px

hero.addEventListener("mousemove", addShadow);
text.addEventListener("click", addOutline);
text.addEventListener("input", addOutline);
text.addEventListener("mouseout", removeOutline);
text.addEventListener("keydown", setMaxLength);

function addShadow(e) {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk * 2 - walk);
  const yWalk = Math.round((y / height) * walk * 2 - walk);

  text.style.textShadow = `
  ${xWalk}rem ${yWalk}rem 0 #FFFF00,
  ${xWalk * -1}rem ${yWalk}rem #9932CC,
  ${xWalk}rem ${yWalk * -1}rem 0 #3862e2,
  ${xWalk * -1}rem ${yWalk * -1}rem #00FF00
  `;
}

function addOutline() {
  text.style.outline = "3rem solid var(--black)";
}

function removeOutline() {
  text.style.outline = "0";
}

function setMaxLength(e) {
  if (text.textContent.length === 7 && e.key != "Backspace") {
    e.preventDefault();
  }
}

if (mq.matches) {
  text.removeAttribute("contenteditable");
  text.removeEventListener("click", addOutline);
}
