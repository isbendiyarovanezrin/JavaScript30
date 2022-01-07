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
