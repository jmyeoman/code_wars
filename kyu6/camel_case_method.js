// Problem:
// Create a string method that takes a string and converts it to camelCase
// 1. Empty string returns empty string
// Input: String
// Output: String
// Data Structure: Array
// Algo:
// 1. convert string to array of words
// 2. create result string
// 3. Iterate over array
// 4. Capitalize first letter then add word to result string
// 5. Return result string


String.prototype.camelCase=function(){
  let words = this.split(' ');
  let resultStr = '';

  words.forEach(word => resultStr += (word.slice(0, 1).toUpperCase() + word.slice(1)));
  return resultStr;
}