// Problem:
// Given a string return true or false depending on whether every letter in the alphabet
// is present.
// Rules:
// 1. Will be a string
// 2. Case doesn't matter
// Input: string
// Output: Boolean
// Algo:
// 1. Create an array of lowercase letters
// 2. Iterate over string
// 3. IF letter in string in array remove letter from array
// 4. Return if the the array is empty



function isPangram(string){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let i = 0; i < string.length; i++) {
    let currentLetterIndex = alphabet.indexOf(string[i].toLowerCase());
    if (currentLetterIndex !== -1) alphabet.splice(currentLetterIndex, 1);
  }
  console.log
  return alphabet.length === 0
}

 