// Problem:
// Given a string return a boolean as to whether or not all chars are alphanumeric. 
// RUles:
// 1. Only Strings
// 2. Not an empty string
// Input: Strings
// Output: boolean
// Data Structure: None, just looping
// Algo:
// 1. Guard clause for empty string
// 2. Function to check for lowercase letters
// 3. Function to check for digits
// 4. Function to check for upper case letters
// 5. Set is alphanumeric variable to true
// 6. Iterate over String
// 7. If none of the functions return true set variable to false and return
// 8. ENd looping
// 9. Return isalphanumeric

function alphanumeric(string){
  if (string.trim() === '') return false;
  
  for (let i = 0; i < string.length; i++) {
    if (!isLetterOrNum(string[i])) return false;
  }
  return true;
}

function isLetterOrNum(char) {
  let isUpperCase = (char <= 'Z') && (char >= 'A');
  let isLowerCase = (char <= 'z') && (char >= 'a');
  let isDigit = (char <= '9') && (char >= '0');
  return isLowerCase || isUpperCase || isDigit;
}