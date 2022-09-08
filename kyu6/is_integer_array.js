// Problem
// Given an array return true if it is an empty array or if every element is an 
// integer.
// Rules:
// 1. Floating point numbers with a 0 after the decimal return true
// Input: array
// Output: boolean
// Data Structure: array
// Algo
// - if array is empty return true
// - iterate over array
// - if element is not integer return false
// - return true

function isIntArray(arr) {
  if (!arr) return false;
  if (arr.length === 0) return true;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) return false;
  }
  return true;
}