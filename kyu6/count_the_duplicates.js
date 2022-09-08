/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// Problem:
// Given a string return the number of duplicate numbers and letters occur in the string
// Rules:
// 1. Case-insensitive
// 2. Must be letter or number
// Input: String
// Output: Number
// Data Structure: Array
// Algo
// 1. Create a testing function for alphanumeric characters
// 2. Create a duplicate array that's empty
// 3. Split the string into an arrays of chars/ set all letters to lowercase
// 4. iterate over the chars arr
// 5. create is duplicate helper function
// a. if first index and last index of char do not equal eachother
// b. AND the char is a alphanumeric character
// c. AND the char is not in the duplicate array
// d. return true
// 6. if duplicate helper true then push char to the duplicate array
// 7. return duplicate array length


function duplicateCount(text){
  let duplicateArr = [];
  let textArr = text.toLowerCase().split('');
  
  textArr.forEach(char => {
    if (isDuplicate(char, textArr, duplicateArr)) {
      duplicateArr.push(char);
    }
  });
  return duplicateArr.length
}

function isDuplicate(char, textArr, duplicateArr) {
  return textArr.indexOf(char) !== textArr.lastIndexOf(char) &&
         /[0-9A-Za-z]/g.test(char) &&
         !duplicateArr.includes(char);
}

let char = '*';
let duplicateArr = ['b']
let textArr ='abcd4b****'

console.log(isDuplicate(char, textArr, duplicateArr))