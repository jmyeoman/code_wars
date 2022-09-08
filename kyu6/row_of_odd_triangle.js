// Can't handle large numbers

// Problem:
// given a number n return the n indexed row of a triangle where the first row
// starts with one and each consecutive row adds one more consecutive odd number
// than the last row 
// Rules:
// 1. big numbers will be used
// Input: number
// Output: array
// Data Structure: array
// Algo:
// - create makeRow function
// - pass an array to the function
// - create a result variable assigned an empty array
// - create count variable assigned given array length plus one
// - create current num variable assigned last num of given array
// -  While count greater than 0 
// - add current num plus 2 to the array
// - count reduced by 1
// - end loop
// - return result array
// - Main function
// - create current arr variable assigned [1]
// - While n is greater than 1
// - current array assign current array passed to make row function
// - n -= 1
// - return current array
/*
function oddRow(n) {
  let arr = [1];

  while (n > 1) {
  arr = makeRow(arr);
  n -= 1;
  }

  return arr;
}

function makeRow(arr) {
  let result = [];
  let count = arr.length + 1
  let currentNum = arr[arr.length - 1] + 2;

  while (count > 0) {
    result.push(currentNum);
    currentNum += 2;
    count -= 1;
  }
  
  return result;
}

console.log(oddRow(4));
*/
// - Make row function
// - pass first number and count
// - create result array assigned empty array
// - while count greater than 0
// - add first number to result
// - reduce count by 1
// - return result array
// - Main function 
// - create result array assigned empty array
// - create starting number assign 1
// - create count variable assigned 0
// - while count less than n 
// - create count 2 assigned zero 
// - create current num variable assigned starting num value
// - while count 2 less than count 1
// - current num increased by 2
// - end inner loop
// - starting num assigned current num + 2
// - end outer loop
// - return starting number and n passed to make row function

function oddRow(n) {
  let startingNum = 1;

  for (let count1 = 1; count1 < n; count1++) {
    let currentNum = startingNum;
    for (let count2 = 1; count2 < count1; count2++) {
      currentNum += 2
    }
    startingNum = currentNum += 2;
  }
  return makeRow(startingNum, n)
}

function makeRow(startingNum, n) {
  let result = [];

  while (n > 0) {
    result.push(startingNum);
    startingNum += 2;
    n -= 1;
  }

  return result;
}
