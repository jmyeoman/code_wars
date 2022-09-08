// Problem
// Given a string and a alphabet letter table where letters are assigned numbers according 
// to their alphabetical position return the highest sum of consecutive consonants
// Input: string
// Output: number
// Data Structure: Maybe array
// Algo:
// 1. Create array with alphabet/ create value array
// 2. Create current sum variable assigned 0
// 3. Create highest sum variable assigned 0
// 4. Iterate over string
// 5. If not vowel add letter index to current sum
// 6. If vowel
// 7. if current sum higher than highest sum highest sum assigned current sum
// 8. current sum assigned 0
// 9. End loop return highest sum

const ALPHABET = ['_', 'a', 'b', 'c', "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const VOWELS = ["a", "i", "o", "u", "e"];

function isVowel(char) {
  return VOWELS.includes(char);
}
function solve(str) {
  let currentSum = 0;
  let highestSum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isVowel(str[i])) {
      currentSum += ALPHABET.indexOf(str[i]);
    }
    if (isVowel(str[i]) || i === str.length - 1) {
      if (currentSum > highestSum) highestSum = currentSum;
      currentSum = 0;
    }
  }
  
  return highestSum;
};
