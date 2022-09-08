// Problem:
// Given a string and an array of strings return the the strings in a new array
// that begin with the given string
// Rules:
// 1. search is not case sensitive
// 2. returned strings are case sensitive
// 3. only return first five matches
// 4. no result returns empty string
// 5. special chars should be ignored
// Input: String, array of strings
// Output: array
// Data Structure: array
// Algo:
// - remove non alphabet function
// - matches function
// - Inputs of substring and string
// - remove non-alphabet characters from string
// - iterate over chars in substring and string
// - if chars match (regardless of case) return true if not return false
// - main function
// - create result variable and assign it an empty array
// - iterate over given array
// - if string matches substring add string to result array
// - if result array has 5 strings end iterating
// - return result array

function onlyLetters(str) {
  return str.replaceAll(/[^a-zA-Z]*/g, '')
}

function matches(subStr, str) {
  str = onlyLetters(str);

  for (let i = 0; i < subStr.length; i++) {
    if (subStr[i].toLowerCase() !== str[i].toLowerCase()) return false;
  }

  return true;
}

function autocomplete(input, dictionary){
  let listOfMatches = [];

  for (let i = 0; i < dictionary.length; i++) {
    if (matches(input, dictionary[i])) listOfMatches.push(dictionary[i]);
    if (listOfMatches.length === 5) break;
  }

  return listOfMatches;
}