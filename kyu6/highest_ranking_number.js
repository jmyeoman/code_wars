// Problem
// Given an array of numbers return the number that occurs most often
// Rules:
// 1. If two numbers tie return the highest number
// Input: array of numbers
// Output: number
// Data Structure: object
// Algo:
// 1. Create a count object and assign it an empty object
// 2. Iterate over array
// 3. If object property exists add one to it or else create object property
// 4. Convert object to array of keys and values
// 5. Sort properties by count first than by number that's largest first
// 6. return first key in array


function highestRank(arr){
  let count = {};
  arr.forEach(num => count[num] ? count[num] += 1 : count[num] = 1);
  
  let countArr = Object.entries(count);

  countArr.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } 

    if (a[0] > b[0]) {
      return - 1;
    } else if (a[0] < b[0]) { 
      return 1;
    }
    return 0;
  });
  return Number(countArr[0][0]);
}