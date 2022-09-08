// Problem
// Given a number return the number as a string with a comma before every third
// digit counting from the right. 
// Input: number
// Output: string
// Data Structure: array
// Algo:
// - Create a result variable assigned an empty string
// - Convert number to string and then array and then reverse it 
// - add a null element to the front of the array
// - iterate over array starting at 1
// -   add char to result
// -   if index remainder 3 equals 0 add ',' to result
// - end loop
// - convert result to array, reverse it, convert back to string and return it


function groupByCommas(n) {
  let result = '';

  let num = String(n).split('').reverse();

  for (let i = 0; i < num.length; i++) {
    if (i !== 0 && i % 3 === 0) result += ',';
    result += num[i];
  }

  return result.split('').reverse().join('');
}

console.log(groupByCommas(1234));