// Problem
// Given an array of arrays put them in order from least to greatest length they will
// increment by 1 except for one space where there will be a missing length. return
// that length
// Rules:
// 1. If the array is empty return 0
// 2. if one of the arrays within the array is empty return 0
// Input: array of arrays
// Output: number
// Data Structure: array
// Algo:
// 1. Guard clause for empty array
// 2. guard clause for empty subarray
// 3. Copy the array of arrays
// 4. sort the arrays by length
// 5. set missing length = 0
// 6. iterate over the arrays starting with second and ending last
// 7. if difference in length greater than one with previous array missing length 
// assigned current length - 1
// 8. return missing length

function getLengthOfMissingArray(arrayOfArrays) {
  if (!Array.isArray(arrayOfArrays)) return 0;
  if (!arrayOfArrays.every(element => Array.isArray(element))) return 0;
  if (arrayOfArrays.length === 0) return 0;
  if (arrayOfArrays.some(subArray => subArray.length === 0)) return 0;
 

  let copy = arrayOfArrays.slice();
  copy.sort((a, b) => a.length - b.length);
  
  let missingLength;
  
  for (let i = 1; i < copy.length; i++) {
    if (copy[i].length - copy[i - 1].length !== 1) {
      missingLength = copy[i].length - 1;
      break;
    }
  }
  return missingLength;
}
