// Problem
// Given a 2d array return the indices (in an array) of the element that
// contains a 1
// Input: array
// Output: array
// Data structure: array
// Algo:
// - iterate over first array
// - iterate over second array
// - if current element is 1 return the current indices in an array

function mineLocation(field){
  for (let i1 = 0; i1 < field.length; i1++) {
    for (let i2 = 0; i2 < field[i1].length; i2++) {
    if (field[i1][i2] === 1) return [i1, i2];
    }
  }
}