// Problem
// Given two arrays convert each array to a number joined by the individual 
// digits and return the sum of the two numbers in an array of number digits
// Rule
// 1. Two empty arrays return empty array
// Input: array
// Output: array
// Data Structure: array
// Algo:
// - iterate over each array 
// - join them as characters and then convert to numbers
// - add the numbers from the two arrays
// - Convert the sum to a string split the chars and return them in an array

function addArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0) return [];
  let sum = Number(array1.join('')) + Number(array2.join(''));
  if (sum >= 0) {
    return String(sum).split('').map(num => Number(num));
  } else {
    return String(sum).slice(1)
                      .split('')
                      .map((num, i) => {
                        if (i === 0) return Number(-num)
                        return Number(num)
                      });
  }
}
