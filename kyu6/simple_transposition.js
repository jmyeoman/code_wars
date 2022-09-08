// Problem:
// Given a string return a string made of two part concatenated. The first part
// has all the even chars concatenated and the second part has all the odd chars
// concatenated.
// Input: string
// Output: string
// Data Structure: none
// Algo:
// - create first part variable and assign it an empty string
// - create a second part variable and assign it an empty string
// - iterate over the string
// - if the index is even add the char to the first string 
// - if the index is odd add the char to the second string
// - return the first and second string parts concatenated

function simpleTransposition(text) {
  let first = '';
  let second = '';

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      first += text[i];
    } else {
      second += text[i];
    }
  }

  return first + second;
}