// Note: Passes standard tests but not random tests

// Problem:
// Given an array of integers return an object with two properties the pos and peaks
// of the array within an array Where peaks are the highest number between lower numbers
// and the position is the index of those numbers
// Rules:
// 1. Should return an empty object with empty arrays when input is empty array
// 2. With plateaus return the position of the first number
// Input: Array of integers
// Output: Object with arrays
// Data Structure: Object/arrays
// Algo:
// 1. Create the result object with empty arrays.
// 2. Create a current peak and set it to the 1 index
// 3. Iterate over the array starting at the second number and ending at the second to 
// last number
// a. IF previous number is not equal to current number 
// AND number is greater than previous number
// Set current peak to current index
// c. IF number after is less than current number 
// AND current number equals current peak 
// PUSH index to pos and current number to peaks
// 4. Return result Object
// 1111234543223331

function pickPeaks(arr) {
  
  let result = {pos:[],peaks:[]};
  let currentPeakIndex = 1;

  for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i -1] !== arr[i]) && (arr[i] > arr[i -1])) {
      currentPeakIndex = i;
    }

    if ((arr[i + 1] < arr[i]) && (arr[currentPeakIndex] === arr[i])) {
      result.pos.push(currentPeakIndex);
      result.peaks.push(arr[currentPeakIndex]);
    }
  }

  return result;
}
