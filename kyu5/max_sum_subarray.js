// Problem:
// Given an array of integers return the value that represents the maximum sum of any contiguous 
// subsequence
// Rules: 
// 1. all negatives return zero
// 2. Empty list returns 0
// Input: Array
// Output: Number
// Data Structure: Array
// Algo:
// 1. create a contingency for all negative numbers
// 2. create a contingency for an empty array
// 3. create an all subarrays function
// a. Create a leading subarrays function
// i. Create a result array set to empty array
// ii. Loop through the array
// iii. On each iteration push a copy of the array from the current element index to the end
// iv. Return result Array
// b. Create a result array 
// c.loop through the leading subarrays
// d. loop through each subarray starting on the second element
// e. On each interation push a copy of the subarray that goes from beginning index to the current index
// 4. Create a result sum variable set to zero
// 5. Iterate over the array produced by calling all subarrays function on arr
// 6. On each iteration  use reduce to determine the sum of all numbers
// 7. if sum is greater than result sum then result sum equals sum
// 8. return result sum.

function maxSequence(arr){
  if (!arr) return 0;
  let resultSum = 0;
  
  arr = allSubArrays(arr);
  
  for (let i = 0; i < arr.length; i++) {
    let sum = findSum(arr[i]);
    
    if (sum > resultSum) resultSum = sum;
  }
  
  return resultSum;
}

function allSubArrays(arr) {
  let resultArr = [];
  
  arr = leadingSubArrays(arr);
  
  for (let i = 0; i < arr.length; i++) {
    for (let i2 = 0; i2 < arr[i].length; i2++) {
      resultArr.push(arr[i].slice(0, (i2 + 1)));
    }
  }
  
  return resultArr;
}

function leadingSubArrays(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr.slice(i));
  }
  
  return resultArr;
}

function findSum(arr) {
  return arr.reduce((pv, cv) => pv + cv);
}


console.log(maxSequence([]))