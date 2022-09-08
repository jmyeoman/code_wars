// Problem
// Given a target number return the indices of the two numbers in a given array that 
// Sum to the target
// Rules:
// 1. Only valid entries with solutions will be tested
// Input: Number and array
// Output: Array of numbers
// Algo
// 1. Iterate over given an Array
// 2. If if target number minus current number is in array return the indices of found
// number and current number in an array


function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let foundNum = numbers.indexOf(target - numbers[i])
    if (foundNum !== -1 && foundNum !== i) return [i, foundNum];
  }
}