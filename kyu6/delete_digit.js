// Problem
// given n return the greatest number that can be computed by removing one 
// digit from n. 
// Input: number
// Output: number
// Data structure: array
// Algo: 
// - split number into array of numbers
// - create a variable remove index assigned last index of array
// - iterate over digits
// - if current digit is less than next digit 
// -   remove index assigned current index end loop
// -remove digit at remove index number
// - return array joined and turned into a number 


function deleteDigit(n) {
  let numArr = String(n).split('').map(digit => Number(digit));
  let idxForRemoval = numArr.length - 1;

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] < numArr[i + 1]) {
      idxForRemoval = i;
      break;
    }
  }
  

  numArr.splice(idxForRemoval, 1);

  return Number(numArr.join(''));
}