// Problem
// Given a string remove all chars between parenthesis and the parenthesis 
// themselves
// Rules:
// 1. Only regular chars will be used
// 2. Only concerned with '()'
// 3. parenthesis may be nested
// Input: string
// Output: string
// Data Structure: Just loops
// Algo:
// Create result variable and assign empty string
// Create count variable and assign 0
// Iterate over given string
// if '(' add one to count
// if count is 0 add char to result string
// if ')' reduce count by 1
// return result string

function removeParentheses(s){
  let result = '';
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') count += 1;
    if (count === 0) result += s[i];
    if (s[i] === ')') count -= 1;
  }

  return result;
}