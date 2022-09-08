// Problem:
// Given a string return the first non-repeating char in the string.
// Rules:
// 1. Case-insensitive
// 2. Must return char in case first found
// 3. No result returns empty string
// Input: string
// Output: string
// Data Structure: Just loops
// Algo:
// x. Create noMatch variable set to true
// x. Create a repeated letters empty object
// 1. Iterate over string
// x. If Char in repeated letters object CONTINUE
// 2. iterate over string again starting from next index
// 3. If both lowercase match 
// set noMatch to false
// set char property on repeated letters object to true
// 4. end loop
// x. If noMatch equals true return char
// 5. end loop
// 6. return empty string
// stress
// 


function firstNonRepeatingLetter(str) {
  let noMatch = true;
  let repeatedLetters = {}
  
  for (let i1 = 0; i1 < str.length; i1++) {
    if (repeatedLetters[str[i1].toLowerCase()]) continue;
    for (let i2 = i1 + 1; i2 < str.length; i2++) {
      if (str[i1].toLowerCase() === str[i2].toLowerCase()) {
        noMatch = false;
        repeatedLetters[str[i2].toLowerCase()] = true;
        }
    }
    if (noMatch) return str[i1];
    noMatch = true;
  }
  return '';
}