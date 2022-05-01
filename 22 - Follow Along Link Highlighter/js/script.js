"use strict";

const links = document.querySelectorAll("a");
const span = document.createElement("span");
span.classList = "highlight";
document.body.appendChild(span);

function highlightLink() {
  const highlightCoords = this.getBoundingClientRect();

  const coords = {
    width: highlightCoords.width,
    height: highlightCoords.height,
    top: highlightCoords.top + window.scrollY,
    left: highlightCoords.left + window.scrollX,
  };

  span.style.width = `${coords.width}px`;
  span.style.height = `${coords.height}px`;
  span.style.transform = `translate(${coords.left}px, ${coords.top}px`;
}

links.forEach((link) => link.addEventListener("mouseenter", highlightLink));
links.forEach((link) =>
  link.addEventListener("click", (e) => e.preventDefault())
);
