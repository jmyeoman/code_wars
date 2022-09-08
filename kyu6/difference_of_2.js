// Problem
// Given an array of integers return an array with all pair of integers from
// the given array with a difference of 2
// Rules:
// 1. Return array should be in ascending order
// Input: array
// Output: array
// Data Structure: array
// Algo:
// - create result array assigned empty array
// - create copy of given array and sort it
// - order array in ascending order
// - iterate over given array
// - iterate over given array
// - if current number one different from current number 2 is 2 add pair to
// result array
// - return result array

function twosDifference(input){
  let copyInput = input.slice().sort((a, b) => a - b);
  let result = []
  
  for (let i = 0; i < copyInput.length; i++) {
    console.log(copyInput[i])
    for (let j = i + 1; j < copyInput.length; j++) {
      if (copyInput[j] - copyInput[i] === 2) {
        result.push([copyInput[i], copyInput[j]]);
        continue;
      }
    }
  }
  return result;
 }
