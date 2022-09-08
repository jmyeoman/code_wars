// Problem:
// Given an array of at least three numbers find and return the unique number
// Input: array
// Output: number
// Data Structure: array
// Algo:
// 1. iterate over array
// 2. return the one where the first and last index of is the same



function findUniq(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num))[0];
}