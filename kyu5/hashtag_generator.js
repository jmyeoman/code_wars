// Problem:
// Given a string return a string with:
// 1. all words merged together
// 2. all words with first letter capitalized
// 3. starting with a # symbol
// Rules:
// 1. the string cannot be more than 140 chars if so return false
// 2. If either the returned string or entered string is empty mus return false
// Input: string
// Output: String or Boolean
// Data Structure: array
// Algo:
// 1. Guard Clause: IF empty string return false
// 2. Guard Clause: if length is greater than 139 chars with spaces removed
// return false
// 3. Create array of words from string
// 4. iterate through and transform words to be capitalized on first char
// 5. return string joined together with # at beginning

function generateHashtag (str) {
  if (str.trim() === '') return false;
  if (str.split(' ').join('').length > 139) return false;
  
  let hash = str.split(' ').filter(element => element.trim() !== '')
                .map(element => {
                  return element[0].toUpperCase() + element.slice(1);
                })
  
  return '#' + hash.join('');
}

console.log(generateHashtag(" ".repeat(200)))