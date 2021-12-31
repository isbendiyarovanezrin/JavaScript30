const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".video");

speed.addEventListener("mousemove", move);

function move(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = Math.round(percent * 100) + "%";
  const min = 0.1;
  const max = 4;
  const playbackRate = percent * (max - min) + min;
  video.playbackRate = playbackRate;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
}
