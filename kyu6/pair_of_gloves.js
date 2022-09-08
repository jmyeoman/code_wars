// Problem
// Given a list count the items in the list return total number of pairs in list
// Input: array
// Output: string
// Data Structure: Object, array
// Algo:
// - create count object assigned empty object
// - iterate over given array
// - if object property exists add one to property count else create property
//   assigned 1
// - convert object to array of values
// - iterate and reduce converted array
// - Initialize to 0
// - return value divided by two rounded down plus previous value
// - return that return value

function numberOfPairs(gloves) {
  let count = {};

  gloves.forEach(element => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });

  return Object.values(count)
               .reduce((pv, cv) => pv + Math.floor(cv / 2), 0);
}