// Problem
// Given a string return an encrypted string where:
// 1. First char is changed to it's char code
// 2. If word is more than two letters long second and last char are switched
// Input: string
// Output: string
// Data Structure: Array
// Algo
// 1. Split string into array of words
// 2. Iterate over and transform words according to the following actions
// 3. Save first letter
// 4. Save rest of word
// 5. if word shorter than 3 chars return char code of first letter plus rest of word
// 6. else save first char of rest of word
// 7. save last letter of rest of word
// 8. save in between chars
// 9. return char code of first char + last char + unchanged + second char
// 10. End loop and return array joined back into a string

var encryptThis = function(text) {
  let words = text.split(' ')
                  .map(word => {
                    let firstChar = word.slice(0, 1);
                    let secondChar = word.slice(1, 2);
                    let unchanged = word.slice(2, word.length - 1);
                    let lastChar = word.slice(word.length - 1, word.length);

                    if (word.length < 3) return firstChar.charCodeAt() + word.slice(1);

                    return firstChar.charCodeAt() + lastChar + unchanged + secondChar;
                  });
  
  return words.join(' ');
}