function parOImpar(num) {
  if (num % 2 === 0) {
    console.log(num + " es par");
  } else {
    console.log(num + " es impar");
  }
}

const parOImparArrow = (num) => {
  if (num % 2 === 0) {
    console.log(num + " es par");
  } else {
    console.log(num + " es impar");
  }
};

parOImpar(5);         
parOImparArrow(10);  
