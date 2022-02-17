// Start with strings, numbers and booleans
let surname = "Williams";
let age = 21;
let boolean = true;
console.log(surname, age, boolean);

surname = "Kerwin";
age = 25;
boolean = false;
console.log(surname, age, boolean);

// Let's say we have an array
const players = ["Joe", "Robin", "Jennifer", "Jack"];

// and we want to make a copy of it.
let copyArr = players;
console.log(copyArr);

// You might think we can just do something like this:
copyArr[1] = "Justin";
console.log(copyArr);
console.log(players);

players[2] = "James";
console.log(players);
console.log(copyArr);

// However what happens when we update that array?

// Now here is the problem!

// Oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// One way
const arr1 = players.slice();
console.log(arr1);
arr1[2] = "Jennifer";
console.log(players);
console.log(arr1);

// or create a new array and concat the old one in
const newArr = new Array();
const arr2 = newArr.concat(players);
console.log(arr2);
arr2[2] = "Jennifer";
console.log(players);
console.log(arr2);

// or use the new ES6 Spread
const arr3 = [...players];
console.log(arr3);
arr3[2] = "Jennifer";
console.log(players);
console.log(arr3);

// Now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Robin",
  age: 55,
};

// and think we make a copy:
const copyObj = person;
console.log(copyObj);
console.log(person);
copyObj.age = 21;
console.log(copyObj);
console.log(person);

// How do we take a copy instead?
const obj1 = Object.assign({}, person, { age: 85 });
console.log(obj1);
obj1.name = "Jack";
console.log(obj1);
console.log(person);

// Object spread operator (...)
const obj2 = { ...person };
console.log(obj1);
obj2.age = 50;
console.log(obj2);
console.log(person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const person2 = {
  name: "Nezrin",
  age: 21,
};

const obj3 = JSON.parse(JSON.stringify(person2));
console.log(obj3);
console.log(person2);
obj3.age = 19;
console.log(obj3);
console.log(person2);
