"use strict";

const btn = document.getElementById("btn");
const video = document.getElementById("player");
const images = document.getElementById("images");
const snap = document.getElementById("snap");
const hello = document.getElementById("hello");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
}

function paintCanvas() {
  hello.currentTime = 1.5;
  hello.play();
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = greenEffect(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 15);
}

function greenEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] - 1; // red
    pixels.data[i + 1] = pixels.data[i + 1] + 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
    pixels.data[i + 3] = pixels.data[i + 3] + 0.1; // alpha
  }
  return pixels;
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  const data = canvas.toDataURL("image / png");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("class", "link");
  link.setAttribute("download", "my-photo");
  link.innerHTML = `<img src=${data} alt="My photo" title="You can download it by clicking on the image." class="my-img"/>`;
  images.insertBefore(link, images.firstChild);
}

getVideo();
video.addEventListener("canplay", paintCanvas);
btn.addEventListener("click", takePhoto);

// loader
$("html").css(
  "overflow",
  "hidden",
  setTimeout(() => {
    $("html").css("overflow-y", "visible");
  }, 1700)
);

$(window).on("load", () => {
  setTimeout(removeLoader, 1700);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
