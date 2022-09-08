// Problem:
// Given a string return a copy of the string with duplicate chars removed
// Input: string
// Output: string
// Data Structure: array
// Algo:
// - convert given string to array of chars
// - iterate over array with reduce
// - do not initialize to a value
// - if current char is same as previous char return pv 
// - else return pv plus cv 
// - return resulting value

function dup(s) {
  return s.map(str => reduceDup(str));
}

function reduceDup(s) {
  return s.split('')
          .reduce((pv, cv, i, arr) => {
            if (cv === arr[i - 1]) return pv;
            return pv + cv;
          });
  }