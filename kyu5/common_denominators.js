// Problem: 
// Given an array of numeraters and denominators in subarrays representing
// rational numbers return the array with all of the sub-arrays having a common
// denominator and representing the same numbers
// Input: array
// Output: array
// Data Structure: array
// Algo:
// - Create reduce function 
// - iterate over subarrays
// - create variable common number and assign 0
// - loop over numerator counting down to 2 
// - if current number goes into both numerator and denominator evenly 
// -    assign current number to common number and break out of loop
// - if there is a common number return the numerator and denominator
// -    divided by common number
// - else return original numerator and denominator

function reduceFraction(arr) {
  return arr.map(subArr => {
    let commonNum = 0;
    for (let count = subArr[0]; count > 1; count -= 1) {
      if (subArr[0] % count === 0 && subArr[1] % count === 0) {
        commonNum = count;
        break;
      }
    }
    if (commonNum) {
      return [(subArr[0] / commonNum), (subArr[1] / commonNum)];
    }

    return [subArr[0], subArr[1]];
  });
}

// 
// - Create largest denominator function 
// - iterate over subarrays and return the largest denominator 

function largestDenom(arr) {
  return arr.reduce((pv, cv) => {
  return pv > cv[1] ? pv : cv[1];
  }, 0);
}

// - create find common denominator function 
// - pass arr and common denominator
// - return true or false based on if every denominator goes into the common 
//   denominator evenly

function findCommon(arr, commonDenom) {
  return arr.every(subArr  => {
    return commonDenom % subArr[1] === 0;
  });
}

// - Main function
// - transform array into array with reduced denominators
// - create variable common denominator and assign largest denominator
// - Create loop for multiples of common denominator
// - if every denominator goes into current common denominator evenly stop loop
// - iterate over given array and transform into string
// - assign numerator numerator * common denominator / denominator
// - assign common denominator to denominator
// - return string

function convertFrac(arr){
  arr = reduceFraction(arr);

  let commonDenom = largestDenom(arr);
  let incrementer = commonDenom;

  while (!findCommon(arr, commonDenom)) {
  commonDenom += incrementer;
  }

  return arr.reduce((pv, cv) => {
    return pv + `(${cv[0] * (commonDenom / cv[1])},${commonDenom})`;
  }, '');
}
