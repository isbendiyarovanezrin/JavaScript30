const p = document.querySelector("p");

p.addEventListener("click", makeOrange);

function makeOrange() {
  p.style.color = "orange";
  p.style.fontSize = "4rem";
}

const dogs = [
  { id: 1, name: "Molly", age: 3 },
  { id: 2, name: "Rocky", age: 6 },
];

// Regular
console.log("Hey babe, what's up?");

// Clearing
console.clear();

// Interpolated
console.log("Hey babe %s, what's up?", "🧡");

// Styled
console.log(
  "%cHey %cbabe, %cwhat's up?",
  "font-style: italic",
  "color: orange",
  "font-size: 1rem"
);

// Warning!
console.warn("Ouu👀");

// Error
console.error("Error?");

// Testing
console.assert(4 % 2 != 0, "False!");

// Info
console.info("I'm not happy");

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Table
console.table(dogs);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(dog.id);
  console.log(`Name: ${dog.name}.`);
  console.log(`Age: ${dog.age}`);
  console.groupEnd();
});

// Counting
console.count("Nezi");
console.count("Nezi");
console.count("Nezi");
console.count("Joe");
console.count("Joe");
console.count("Joe");
console.count("Nezi");
console.count("Nezi");
console.count("Joe");
console.count("Nezi");

// Timing
console.time("fetching data");
fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((responce) => responce.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
