// Problem:
// Given a string return a new string that is a copy of the string 
// except that if it has a number at the end it should be incremented
// by 1 Or if there is no number then 1 is appended.
// Rules: Leading zeroes should be preserved with the proper number of total digits
// Input: String
// Output: String
// Data Structure: Array
// Algo
// 1. Create a numberChar array and leave it empty
// 2. iterate backwards through the string
// 3. If it is a number put it at the beginning of the number array
// 4. If it is not a number end the loop
// 5. Set length of number variable to the length of number array
// 6. if (number array length 0) then return the string with 1 added to it
// 7. set a incremented number variable equal to the number array
// joined together turned into a number and 1 added
// 9. return string copy with the digits removed concatenated
// with the number coerced to characters with necessary 0s added to fromt

function incrementString (str) {
  let numChar = [];
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= 0 && str[i] <= 9) {
      numChar.unshift(str[i]);
    } else {
      break;
    }
  }
  
  let numLength = numChar.length
  
  if (numLength === 0) return str + '1';
  
  let incrementedNum = String(Number(numChar.join('')) + 1);
  
  return str.slice(0, str.length - numLength) + incrementedNum.padStart(numLength, '0')

}

console.log(incrementString('foobar'));
console.log(incrementString('foobar000'));
console.log(incrementString('foobar001'));
console.log(incrementString('foobar1'))