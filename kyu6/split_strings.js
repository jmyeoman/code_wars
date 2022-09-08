// Problem:
// Given a string return an array with two chars in each element 
// Rules: If it's odd add underscore to last substring
// Input: string
// Output: array of strings
// Data Structure: array
// Algo:
// 1. create result array
// 2. Create counter variable set to 0
// 3. Set resultIndex to 0
// 4. Iterate over string
// 5. if count 0 Result at result index equals current character
// 6. if count is 1 result element at index equals itself plus current character
// 7. count += 1
// 8. if count is 2 
//    increment resultIndex
//    count equals 0
// 9. End loop
// 10. if length odd last element equals last element plus '_'
// 11. return result array


function solution(str){
  let result = [];
  let count = 0;
  let resultIndex = 0;
  
  if (str.length % 2 === 1) str += '_';

  for (let i = 0; i < str.length; i++) {
    if (count === 0) {
      result[resultIndex] = str[i];
    } 
    if (count === 1) {
      result[resultIndex] += str[i];
      resultIndex += 1;
    }
    count += 1
    if (count === 2) count = 0;
  }
  return result;
}