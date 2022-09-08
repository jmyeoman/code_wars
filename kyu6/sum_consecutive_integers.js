// Problem
// Given an array of integers return an array with a list of sums of consecutive
// integers including numbers that aren't repeated
// Rules:
// 1. There will always be an array with at least one integers
// Input: array
// Output: array
// Data structure: array
// Algo:
// - create result array variable assigned array with index 1 value
// - create result index variable assigned 0
// - iterate over array with for starting at index 1
// - if current value same as last value
// -   result array at result index += current value
// - else 
// -   result index += 1
// -   result array at result index assigned current value
// - End loop return result



function sumConsecutives(s) {
  let resultArr = [s[0]];
  let resultIndex = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      resultArr[resultIndex] += s[i];
    } else {
      resultIndex += 1;
      resultArr[resultIndex] = s[i];
    }
  }
  return resultArr;
}
