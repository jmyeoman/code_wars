// Note: This didn't work when using extremely long arrays of integers

// Problem
// Given an array of integers and a number representing a sum return the first 2 integers from the array that add up to the sum
// Rules:
// 1. 0s and negative integers will occur
// 2. The earliest is the one with the second integer earlier
// 3. No result will return undefined
// Input: Array and number
// Output: Array
// Algo:
// 1. create a second number array set to empty
// 2. Iterate through the array
// a. IF the current number is in the second number array 
// return the second number minus the sum and the second number in an array 
// b. Find the difference between the sum and the current value
// c. If the second number isn't in the second number array Push that value to the second number array
// 4. return undefined

function sumPairs(arr, sum) {
  let secondNum = [];

  for (let i = 0; i <= arr.length; i++) {
    if (secondNum.includes(arr[i])) {
      return [sum - arr[i], arr[i]];
    }
    if (!secondNum.includes(sum - arr[i])) secondNum.push(sum - arr[i]);
  }

  return undefined;
} 