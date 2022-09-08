// Problem
// Given an array of integers and a number, n, return an array of n length where
// each number is added to an index of the returned array going in order and 
// circulating to the beginning again when the last index is passed. 
// Input: Array, number
// Output: Array
// Data Structure: Array
// Algo:
// 1. create result array that is n length and populated by 0s
// 2. iterate over given array
// 3. create current index assigned n remainder i 
// 4. Result at current index += current values
// 5. End loop return result

function beggars(values, n){
  let result = beggarArr(n);

  for (let i = 0; i < values.length; i++) {
    let currentIndex = i % n;
    result[currentIndex] += values[i];
  }
  return result;
}

function beggarArr(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    result[i] = 0;
  }
  
  return result;
}