let numbers = [3, 1, 4, 2, 5];

console.log("Array original:", numbers);

//push
console.log("\npush:");
numbers.push(6);
console.log(numbers);

//pop
console.log("\npop:");
const removed = numbers.pop();
console.log("Elemento eliminado:", removed);
console.log(numbers);

//shift
console.log("\nshift:");
numbers.shift();
console.log(numbers);

//unshift
console.log("\nunshift:");
numbers.unshift(10);
console.log(numbers);

//splice
console.log("\nsplice:");
numbers.splice(3, 1, 99);
console.log(numbers);

//reverse
console.log("\nreverse:");
numbers.reverse();
console.log(numbers);  

//sort
console.log("\nsort:");
numbers.sort((a, b) => a - b);
console.log(numbers);
