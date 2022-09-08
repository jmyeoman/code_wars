
function factorial(num) {
  let result = 1;
  
  for (let count = 1; count <= num; count++) {
    result *= count;
  }
  
  return result;
}

console.log(factorial(6))

console.log(factorial(30))

function zeros (n) {
  let factorialTotal = factorial(n);
  
  let count = 0;
  
  while (factorialTotal % 10 === 0) {
    factorialTotal = factorialTotal / 10
    count += 1
  }

  
  return count;
}

console.log(zeros(6))

console.log(zeros(30))
