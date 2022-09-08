// Problem: Given a string return a string with vowels replaced with corresponding 
// numbers. Then create a function that takes a string and replaces numbers with 
// corresponding vowels.
// Input: string
// Output: string
// Data Structure: array
// Algo:
// 1. create a vowel object with numbers assigned to vowels
// 2. create a result string that's empty
// 3. iterate over string
// 4. if vowels push number to string else push char to string / return string
// 5. New function
// 6. Create is number function
// 7. decode function
// 8. create empty string
// 9. iterate over string
// 10. if number push vowel else push char
// 11. return string
// 

let vowels = [null, 'a', 'e', 'i', 'o', 'u'];

function encode(string) {
  let result = '';

  for (let char of string) {
    if (vowels.includes(char)) {
      result += vowels.indexOf(char);
    } else {
      result += char;
    }
  }
  return result;
}

function decode(string) {
  let result = '';

  for (let char of string) {
    if (isNumber(char)) {
      result += vowels[Number(char)];
    } else {
      result += char;
    }
  }
  return result;
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}