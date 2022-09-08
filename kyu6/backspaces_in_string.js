// Problem
// Given a string with '#' characters return a string with those characters removed and one
// character before it removed for each one. 
// Rules:
// 1. Empty string returns empty string.
// 2. All hashes return an empty string.
// Input: string
// Output: string
// Data Structure: Array
// 1. Create result Array
// 2. Iterate over string.
// 3. if not hash add char to Array
// 4. if hash remove last char from Array
// 5. Return join result array to string


function cleanString(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      result.pop();
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}