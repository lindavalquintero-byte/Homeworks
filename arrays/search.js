const fruits = ["manzana", "banano", "naranja", "banano"];

// includes
console.log("includes:");
console.log(fruits.includes("banano"));
console.log(fruits.includes("grape"));

// indexOf
console.log("\nindexOf:");
console.log(fruits.indexOf("banano"));
console.log(fruits.indexOf("grape"));

//findIndex
const numbers = [3, 7, 10, 15];

console.log("\nfindIndex:");
const primerPar = numbers.findIndex(num => num % 2 === 0);
console.log(primerPar);
