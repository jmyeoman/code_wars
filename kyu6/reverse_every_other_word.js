// Problem
// Given a string reverse every other word and return the new string
// Rules
// 1. Only one space between words
// 2. No whitepace at beginning or end of string
// Input: string
// Output: string
// Data Structure: array
// Algo:
// 1. Split string into array
// 2. transform array by reversing every other word
// 3. Return transformed string joined inton string



function reverse(str){
  return str.split(' ')
            .map((word, index) => {
              if (index % 2 === 1) {
                return word.split('').reverse().join('');
              } else {
                return word;
              }
            })
            .join(' ')
            .trim();
}