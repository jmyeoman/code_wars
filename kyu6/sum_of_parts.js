// Problem
// Given an array of numbers return an array of the sums of the array for each time the
// first element is removed
// Input: Array of numbers
// Output: Array of numbers
// Data Structure: Array
// Algo
// 1. Guard clause for empty array. 
// 2. Sum all nums and set to total
// 3. Create result array
// 4. push total to result array
// 5. Iterate over array
// 6. subtract number from total and push total to array
// 7. Return array

function partsSums(ls) {
  let resultArr = []
  let total = ls.reduce((pv, cv) => pv + cv, 0);
  resultArr.push(total);

  ls.forEach(num => resultArr.push(total = total - num));
  return resultArr;
}