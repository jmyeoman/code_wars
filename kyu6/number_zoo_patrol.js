// Only works for small arrays


// Problem:
// Given a shuffled list of numbers from 1 to n return the number that's missing
// in the list
// Input: Array
// Output: number
// Data Structure: Array
// Algo:
// - sort numbers from least to greatest
// - iterate over numbers
// - return one greater than the index of the first number that isn't one
// greater than the index

// return the missing number!
function findNumber(array) {
  let arr = array.slice();

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - i !== 1) return i + 1;
  }

  return arr.length + 1;
}