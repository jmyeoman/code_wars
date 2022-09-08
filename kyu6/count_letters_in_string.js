// Problem:
// Given a string return an object where each key is a letter in the string and
// each value is the count of the letters in the string
// Rules:
// 1. All lower-case
// Input: string
// Output: object
// Data structure: object
// Algo
// - Create variable letter count assign empty object
// - iterate over string
// - if letter is not in the object add it and give it a value of 1
// - else add 1 to letter value
// - return letter count

function letterCount(s){
  let letters = {};

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] ? letters[s[i]] += 1 : letters[s[i]] = 1;
  }
  return letters;
}