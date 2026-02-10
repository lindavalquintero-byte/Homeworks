// utils.js

// Array.isArray
console.log("Array.isArray:");
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("not an array"));

// Array.from
console.log("\nArray.from:");
const text = "hello";
const chars = Array.from(text);
console.log(chars);

// Spread operator
console.log("\nSpread operator:");
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log("original:", original);
console.log("copy:", copy);
