// Problem
// Given an array and a number, n, repeat a process whereby you split the arrays
// in half and combine them by adding matching index elements together. Do this
// n times or until 1 number is left and return the array. 
// Input: array
// Output: array
// Data Structure: array
// Algo:
// - if arr has only one element return arr
// - if n is 0 return arr
// - create a first half variable assigned the first half of the array
// - create a second half variable assigned the second half of the array
// - create sum variable and assign it an empty array
// - iterate over both arrays
// - add the elements from the same indexes together and push to sum array
// - return self function with the sum array passed and n - 1

function splitAndAdd(arr, n) {
  if (arr.length === 1) return arr;
  if (n === 0) return arr;

  let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  let secondHalf = arr.slice(Math.floor(arr.length / 2));
  let sum = [];

  if (firstHalf.length !== secondHalf.length) {
    firstHalf.unshift(0);
  }

  for (let i = 0; i < firstHalf.length; i++) {
    sum.push(firstHalf[i] + secondHalf[i]);
  }

  return splitAndAdd(sum, n - 1);
}