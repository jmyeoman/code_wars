// Problem
// Given a string in camelCase return a copy of the string with a space before all 
// upper case letters
// Input: string
// Output: string
// Data Structure: Array
// Algo:
// 1. Create a result string
// 2. Create a capitals Array of letters
// 3. Iterate over string starting with the second index and ending at one greater
// than the length
// 4. Add previous character to the string
// 5. if current char is upper case but not undefined add space 
// 6. Return String

// complete the function
function solution(string) {
    const UPPER_CASE_LETTERS = ['A', 
                                'B', 
                                'C', 
                                'D', 
                                'E', 
                                'F', 
                                'G', 
                                'H', 
                                'I', 
                                'J', 
                                'K', 
                                'L',
                                'M',
                                'N',
                                'O',
                                'P',
                                'Q',
                                'R',
                                'S',
                                'T',
                                'U',
                                'V',
                                'W',
                                'X',
                                'Y',
                                'Z'];
  
  let resultStr = '';

  for (let i = 1; i < string.length + 1; i++) {
    resultStr += string[i - 1];
    if (string[i] === undefined) continue;
    if (UPPER_CASE_LETTERS.includes(string[i])) {
      resultStr += ' ';
    }
  }
  
  return resultStr;
}