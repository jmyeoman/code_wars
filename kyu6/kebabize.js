// Problem
// Given a string in pascaleCase return a string with all lowercase letters and words
// separated by hyphens.
// Rules:
// 1. Ignores non-letter characters
// Input: string
// Output: string
// Data Structure: Array
// Algo
// 1. split into array of characters
// 2. create result array
// 3. create word empty array
// 4. Iterate over array of characters
// 5. if letter push lowercase to word array
// 6. if not letter push word to result array word array assigned empty array
// 7. End loop
// 8. Return result array joined by hyphens

function kebabize(str) {
  let charArr = str.split('');
  let result = [];
  let word = '';

  charArr.forEach((char, index) => {
    if (isLowerLetter(char)) {
      word += char;
    } else if (isUpperLetter(char)) {
      if (word !== '') result.push(word);
      word = char.toLowerCase();
    } 

    if (index === charArr.length - 1) result.push(word);
  });
  return result.join('-');
}

function isUpperLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerLetter(char) {
  return char >= 'a' && char <= 'z';
}