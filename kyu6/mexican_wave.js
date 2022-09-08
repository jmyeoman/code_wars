// Problem:
// Given a string in lowercaps return an array with the string repeated, but with each
// repition a letter is made uppercase starting with the first letter and then
// continuing to the next letter to the right on the next repition.
// Input: string
// Output: Array of Strings
// Data Structure: Array
// Algo
// 1. Create result array with string in it. 
// 2. Loop over each character in the string
// 3. For each charaacter push the word to the array with that letter uppercase
// 4. Return Array
function wave(str){
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(capitalizeLetter(str, i));
  }
  return result;
}

function capitalizeLetter(word, index) {
  return word.split('')
             .map((char, idx) => {
               if (idx === index) return char.toUpperCase();
               return char;
             }).join('');
}