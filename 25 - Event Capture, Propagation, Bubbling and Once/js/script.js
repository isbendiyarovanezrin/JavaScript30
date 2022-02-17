const button = document.querySelector("button");

button.addEventListener(
  "click",
  () => {
    console.log("Click!");
  },
  { once: true }
);

const div = document.querySelectorAll("div");

function showText(e) {
  // e.stopPropagation();
  // console.log(this)
  // console.log(this.classList)
  console.log(this.classList.value);
}

// document.body.addEventListener("click", showText);
div.forEach((div) =>
  div.addEventListener("click", showText, {
    capture: true,
    once: false,
  })
);
