// Problem
// Given an array of letters that are increasing return the one missing letter
// Input: array
// Output: string
// Data Structure Array
// Algo
// 1. Create a constant with all the letters in the alphabet
// 2. Identify the index of the starting letter of the given array in the alphabet array
// 3. Make a copy of the section of the alphabet array starting from that index and that is 1 element
// longer than the given array.
// 4. iterate over the alphabet array and check if each element is equal to the same index element
// in the given array. If it is not return the element

function findMissingLetter(array) {
  const ALPHA_LOWER = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const ALPHA_UPPER = ALPHA_LOWER.map(char => char.toUpperCase());
  let alpha;
  
  if (array[0] === array[0].toLowerCase()) {
    alpha = ALPHA_LOWER;
  } else { 
    alpha = ALPHA_UPPER;
  }
  
  
  let startingIndex = alpha.findIndex(char => array[0] === char);
  
  let alphaCopy = alpha.slice(startingIndex, (startingIndex + array.length + 1));
  
  for (let i = 0; i < alphaCopy.length; i++) {
    if (alphaCopy[i] !== array[i]) {
      return alphaCopy[i];
    }
  }
}