const numbers = [1, 2, 3, 4, 5];

//slice 
console.log("slice:");
const sliced = numbers.slice(1,4);
console.log(sliced);
console.log("original:", numbers);

//concat
console.log("\nconcat:");
const unir = numbers.concat([6,7,8]);
console.log(unir);
console.log("original:", numbers);

//flat
console.log("\nflat:");
const nested = [1, 2, [3, 4], [5, [6, 7]]];
const flattened = nested.flat(2);
console.log(flattened);
console.log("original:", nested);

// flatMap
console.log("\nflatMap:");
const doubleAndFlattened = numbers.flatMap((num) => [num, num * 2]);
console.log(doubleAndFlattened)