"use strict";

const inputs = document.querySelectorAll("input");

function changeValue() {
  const suffix = this.dataset.size || " ";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", changeValue));
inputs.forEach((input) => input.addEventListener("mouseover", changeValue));

// loader start
$(window).on("load", () => {
  setTimeout(removeLoader, 2000);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
// loader end
