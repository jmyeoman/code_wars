// Problem
// Given an array of Numbers return an index where the numbers to the left and right sum to the sam ammount. 
// Rules:
// 1. Only Numbers
// 2. Return negative one if there is no such index
// Input: Array
// Output: Numbers
// Algo:
// 1. Create a prior sum function
// a. It takes an array and an index and sums the numbers from beginning up to the index
// 2. Create a post-sum function
// a. It takes an array and an index and sums the number from just after the given index to the end
// 3. Iterate over the array starting at index 1 and ending at length - 1
// 4. IF priorSum and postSum are equal return the index
// 5. Return -1

function preIndexSum(arr, index) {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    sum += arr[i];
  }

  return sum;
}



function postIndexSum(arr, index) {
  let sum = 0;
  for (let i = index + 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}


function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    if (preIndexSum(arr, i) === postIndexSum(arr, i)) return i;

    if (!preIndexSum(arr, i) && !postIndexSum(arr, i)) return i;

  }
  return -1;
}
