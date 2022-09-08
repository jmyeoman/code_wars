// Problem
// Given a string representing an encrypted message decipher it and return the new
// unencrypted string
// Rules:
// 1. Second letter and last letter switched
// 2. first number is char code for first char
// Input: string
// Output: string
// Data Structure: Array
// Algo:
// 1. split string into array of words
// 2. Transform each string according to the following actions
// 3. Get beginning number and save it to a variable
// 4. Save rest of chars in a seperate string
// 5. Switch first and last char in char string
// 6. return string with char from code added to beginning
// 7. Join array into string and return into


function decipherThis(str) {
  let words = str.split(' ')
              .map(word => {
                let charCode = parseInt(word);
                let restOfWord = word.replace(String(charCode), '');

                if (restOfWord.length === 1) {
                  return String.fromCharCode(charCode) + restOfWord;
                }
                let firstChar = String.fromCharCode(charCode);
                let secondChar = restOfWord.slice(0, 1);
                let lastChar = restOfWord.slice(restOfWord.length - 1, restOfWord.length);
                let unchangedStr = restOfWord.slice(1, restOfWord.length - 1);
                
                return firstChar + lastChar + unchangedStr + secondChar;
              });
  return words.join(' ');  
}
