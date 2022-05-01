"use strict";

const cursor = document.getElementById("cursor");
const ul = document.querySelector(".suggestions");
const searchInput = document.querySelector(".search-input");
const cities = [];

fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((responce) => responce.json())
  .then((data) =>
    data.forEach((element) => {
      cities.push(element);
    })
  )
  .catch((error) => {
    console.error("Error:", error);
  });

searchInput.addEventListener("keyup", showMatches);

function showMatches() {
  const matchArr = findMatches(this.value, cities);
  const li = matchArr.map((element) => {
    const regex = new RegExp(this.value, "gi");
    const cityName = element.city.replace(
      regex,
      `<span class="bg">${this.value}</span>`
    );
    const stateName = element.state.replace(
      regex,
      `<span class="bg">${this.value}</span>`
    );
    return `
      <li>
         <span>${cityName}, ${stateName}</span>
         <span class="population">${numWithCommas(element.population)}</span>
      </li>
      `;
  });
  ul.innerHTML = li.join("");
}

function findMatches(wordToMatch, cities) {
  return cities.filter((element) => {
    const regex = new RegExp(wordToMatch, "gi");
    return element.city.match(regex) || element.state.match(regex);
  });
}

function numWithCommas(n) {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// cursor start
document.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

document.querySelector(".search-input").addEventListener("mousemove", () => {
  document.removeEventListener("mousemove", changeCursor);
});

document.querySelector(".search-input").addEventListener("mouseleave", () => {
  document.addEventListener("mousemove", changeCursor);
});
// cursor end

// loader start
$(window).on("load", () => {
  setTimeout(removeLoader, 1960);
});

function removeLoader() {
  $(".cssload-container").fadeOut(500, () => {
    $(".cssload-container").remove();
  });
}
// loader end
