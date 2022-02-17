// Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
var today = new Date();
var currentYear = today.getFullYear();

// Array.prototype.some()
// Is at least one person 19 or older?
let a = people.some((person) => 19 <= currentYear - person.year);
console.log(a);

// Array.prototype.every()
// Is everyone 19 or older?
let b = people.every((person) => 19 <= currentYear - person.year);
console.log(b);

// Array.prototype.find()
// Find the comment with the ID of 823423
let comment = comments.find((comment) => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
let index = comments.findIndex((comment) => comment.id === 823423);
console.log(index);

// Delete the comment with the ID of 823423
comments.splice(index, 1);
console.log(comments);
