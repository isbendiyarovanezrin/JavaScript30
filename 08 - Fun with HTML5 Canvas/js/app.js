"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const coordinate = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function getPosition(e) {
  coordinate.x = e.clientX - canvas.offsetLeft;
  coordinate.y = e.clientY - canvas.offsetTop;
}

function start(e) {
  getPosition(e);
  document.addEventListener("mousemove", draw);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

let hue = 0;
let lineWidth = 120;
let direction = true;

function draw(e) {
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = `${lineWidth}`;
  ctx.strokeStyle = `hsl(${hue}, 60%, 55%)`;
  ctx.globalCompositeOperation = "xor";
  ctx.moveTo(coordinate.x, coordinate.y);
  getPosition(e);
  ctx.lineTo(coordinate.x, coordinate.y);
  ctx.stroke();

  hue++;
  if (360 <= hue) {
    hue = 0;
  }

  if (ctx.lineWidth == 120 || ctx.lineWidth == 3) {
    direction = !direction;
  }

  if (direction) {
    lineWidth++;
  } else {
    lineWidth--;
  }

  ctx.closePath();
}

const p = document.getElementById("text");
setTimeout(() => {
  p.style.opacity = "0";
  p.style.transition = "1s ease";
}, 2000);

setTimeout(() => {
  p.style.display = "none";
}, 2700);
