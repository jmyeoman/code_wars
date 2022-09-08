// Problem
// Given two strings composed of exclamation marks and question marks return 
// left, right, or balanced based on the weight of the two strings where 
// an exclamation mark is 2 and a question mark is 3
// Input: 2 strings
// Output: string
// Data structure: none
// Algo:
// - Create a count function 
// - create count variable assigned 0
// - iterate over given string 
// - if char is '!' add 2 to count
// - if char is '?' add 3 to count
// - end loop return count
// - Main function
// - if left greater than right return 'left'
// - if right greater than left return 'right'
// - else return 'balance'

function countWeight(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '!') count += 2;
    if (str[i] === '?') count += 3;
  }

  return count;
}


function balance(left,right){
  if (countWeight(left) > countWeight(right)) return 'Left';
  if (countWeight(left) < countWeight(right)) return 'Right';
  return 'Balance';
}