const numbers = [1,2,3,4,5]

//forEach
console.log("forEach: ");
numbers.forEach((num) => {
    console.log(num);
});

//map
console.log("\nmap: ");
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

//filter
console.log("\nfilter");
const pares = numbers.filter((num) => num % 2 ===0);
console.log(pares);

//reduce
console.log("\nreduce:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

//some
console.log("\nsome: ");
const hayPar = numbers.some((num)=> num % 2 === 0);
console.log(hayPar);

//every
console.log("\nevery: ");
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive);

//find
console.log("\nfind:");
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);