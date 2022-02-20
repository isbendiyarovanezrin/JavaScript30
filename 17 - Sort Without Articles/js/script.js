"use strict";

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const ul = document.getElementById("bands");

function replace(band) {
  const regex = /a |an |the /i;
  return band.replace(regex, "");
}

const sortedBands = bands.sort((a, b) => replace(a).localeCompare(replace(b)));

sortedBands.forEach((band) => {
  ul.innerHTML += `<li>${band}</li>`;
});
