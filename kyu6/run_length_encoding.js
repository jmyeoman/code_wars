// Problem:
// Given a string return an array of subarrays where each subarray contains a 
// a pair of elements the first the number of times a char occurs and the 
// and the second the char that is present. The pairs should represent the whole
// string from beginning to end
// Input: string
// Output: array
// Data Structure: array
// Algo:
// - Create a variable charCount and assign it an empty string and the number 0
// - Create an variable result and assign it an array
// - iterate over the string
// - assign current character to charcount[0]
// - increment charCount[1] by 1
// - if next character doesn't equal current char 
// -    push a copy of charCount to result
// -    assign 0 to charCount[1]
// - return result array 


var runLengthEncoding = function(str){
  let charCount = [0, ''];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    charCount[1] = str[i];
    charCount[0] += 1;
    if (str[i] !== str[i + 1]) {
      result.push(charCount.slice());
      charCount[0] = 0;
    }
  }

  return result;
}