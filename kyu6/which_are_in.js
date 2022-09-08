// Problem:
// Given two arrays of strings return the strings in the first array that are substrings
// of any of the strings in the second array
// Rules
// 1. No matches returns an empty array
// 2. Strings are put in alphabetical order
// Input: Two Arrays of Strings
// Output: An array of Strings
// Data Structure: Array
// Algo:
// 1. create a result array 
// 2. Loop over substrings
// 3. Loop over Strings
// 4. If the string includes the substring push the string to the result array BREAK
// 5. Return sorted result array



function inArray(array1,array2){
  let result = [];

  for (let i1 = 0; i1 < array1.length; i1++) {
    for (let i2 = 0; i2 < array2.length; i2++) {
      if (array2[i2].includes(array1[i1])) {
        result.push(array1[i1]);
        break;
      }
    }
  }

  return result.sort();
}