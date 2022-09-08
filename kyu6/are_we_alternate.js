// Problem:
// Given a string return a boolean result as to whether the string contains
// alternating consonants and vowels
// Input: string
// Output: boolean
// Data Structure: array
// Algo:
// - create constant vowels and assign it an array filled with vowels as 
// individual elements
// - Creat is vowel function 
// - set string as a parameter
// - iterate over vowels and return true or false if the char is a vowel
// - Create exclusive or function
// - set parameters as two booleans
// - return true if one is true and one is false
// - logic: true and not true or not true and true
// - Main function 
// - Create guard clause for only one char in string
// - iterate over string starting at second char
// - if both previous and current char are both vowels or both consonants
// return false 
// - end loop return true


const VOWELS = ['a', 'i', 'e', 'o', 'u'];

function isAlt(word) {
  if (word.length === 1) return true; 
  for (let i = 1; i < word.length; i++) {
    if (!exOr(isVowel(word[i -1]), isVowel(word[i]))) return false;
  }

  return true;
}


function isVowel(char) {
  return VOWELS.includes(char);
}

function exOr(boolean1, boolean2) {
  return (boolean1 && !boolean2) || (!boolean1 && boolean2);
}
