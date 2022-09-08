// Problem:
// Given a string return a string with every even char upper case and every odd one 
// lower case
// Rules:
// 1. Count starts over with each new word
// 2. 0 is even
// Input: string
// Output: string
// Data Structure: Array
// Algo:
// 1. Split the string into words
// 2. Split words into chars
// 3. loop over words
// 5. loop over chars
// 6. Make char upper case if even
// 7. Make char lowercase if odd.
// 8. return joined words in joined string 

function toWeirdCase(string){
  return string.split(' ')
               .map(word => word.split('').map((char,i) => oddOrEven(char, i)).join(''))
               .join(' ');

};

function oddOrEven(char, i) {
  return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
};