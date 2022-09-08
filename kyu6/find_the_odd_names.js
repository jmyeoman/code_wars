// Problem:
// Given an array of Objects sum the char codes of all the chars in the 
// firstName value of each object. Return an array of the objects where the sum
// is odd and return them in order. 
// Input: array
// Output: array
// Data Structure: array, object
// Algo:
// - create sum code function and set oner parameter representing a passed 
// string
// - iterate over the string and add the char codes of each char
// - return the sum
// - main function
// - create a result variable and assign it an array
// - iterate over the objects 
// - invoke the sum code function and pass it the value for firstName
// - if the return value of the invocation is odd add the object to the result
// - end loop return result

function findOddNames(list) {
  let result = [];

  list.forEach(obj => {
    if (sumCharCode(obj['firstName']) % 2 === 1) result.push(obj);
  });

  return result;
}

function sumCharCode(str) {
  return str.split('').reduce((pv, cv) => {
    return pv + cv.charCodeAt(0);
  }, 0);
}
