"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector(".text");
let walk = 200; // 200px

hero.addEventListener("mousemove", shadow);

function shadow(e) {
  let width = hero.offsetWidth;
  let height = hero.offsetHeight;

  let x = e.offsetX;
  let y = e.offsetY;

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
