// Problem:
// Given an array of numbers return an array with the even numbers in the same place
// but with the odd numbers switched to ascending order without changing spaces
// Input: Array of numbers
// Output: Array of Numbers 
// Algo:
// 1. Create empty array set to oddIndices
// 2. Create an empty array set to odd numbers
// 3. iterate over numbers
// 4. for each odd push the index to the indices array and the number to the oddIndices
// 5. Sort odds in ascending order
// 6. iterate over new arrays
// 7. numbers array at indices i index equals odd number at i index
// 8. return numbers array
// made explicit sort and accounted for negative numbers

function sortArray(array) {
  let indices = [];
  let odds = [];

  array.forEach((element, index) => {
    if (element > 0 && element % 2 === 1) {
      indices.push(index);
      odds.push(element);
    }
    
    if (element < 0 && element % -2 === -1) {
      indices.push(index);
      odds.push(element);
    }
  });

  odds = odds.sort((a, b) => a - b);
 

  for (let i = 0; i < odds.length; i++) {
    array[indices[i]] = odds[i];
  }

  return array;
}