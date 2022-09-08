// Doesn't work for high numbers

//Problem
// Given a number n return the two numbers from the sequence of numbers 1 to n that when
// multiplied equals the sum of that sequence excluding the two numbers
// Input: number
// Output: Array
// Data Structure: Array
// Algo:
// 1. create result Array
// 2. set variable to sum of all number 1 to n
// 3. Create array of number sequence
// 4. Iterate over array
// 5. Iterate over array except current number 1
// 6. Create function is multiple
// 7. pass current number 1, current number 2, sum, and resultArray
// 8. set multiple variable to number 1 times number 2
// 9. Set current sum to sum minus number 1 and number 2
// 10. if multiple equals current sum push number 1 and 2 to result array in an array
// 11. End loop return result array

function removeNb (n) {
  let resultArr = [];
  let sequence = createSequence(n);
  let sum = sequence.reduce((p, c) => p + c, 0);
  
  for (let i1 = 0; i1 < sequence.length - 1; i1++) {
    for (let i2 = 0; i2 < sequence.length; i2++) {
      if (i1 === i2) continue;
      isMultiple(sequence[i1], sequence[i2], sum, resultArr);

    }
  }

  return resultArr;
} 


function isMultiple(num1, num2, sum, arr) {
  let multiple = num1 * num2;
  let currentSum = sum - num1 - num2;


  if (multiple === currentSum) arr.push([num1, num2])
}

function createSequence(num) {
  let resultArr = [];
  for (let i = 1; i <= num; i++) {
    resultArr.push(i);
  }
  return resultArr;
}


console.log(removeNb(26))