// Problem:
// Given a string return a string where each char is transformed to a number
// that represents how many times the char has occurred in the string at that
// point.
// Input: string
// Output: string
// Data Structure: Object, array
// Algo:
// - create result variable and assign empty array
// - create count variable and assign an empty object to it 
// - iterate over string
// - if char is in count object add 1 to the count value of the char
// - if char is not in count object add char and assign it 1
// - add count value of char to array
// - end loop
// - return array joined as a string;

function numericals(s){
  let result = [];
  let count = {};

  for (let char of s) {
    count[char] ? count[char] += 1 : count[char] = 1;
    result.push(count[char]);
  }

  return result.join('');
}