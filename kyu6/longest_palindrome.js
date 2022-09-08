// Problem
// Given a string return the length of the longest palindrome within the string
// Input: string
// Output: number
// Data Structure: array
// Algo:
// 1. Find odd palindromes function
// 2. Set count variable to 1
// 3. set longest length equal to one
// 4. While char at index (current index - count) equals char at index (current index +
// count)
// 5. current length = count * 2 + 1
// 6. if current length greater than longest length longest length equals current length
// 7. count =+ 1 
// 8. return longest length 
// 9. Find even palindromes 
// 10. Given index 1 and index 2
// 11. set count = 1
// 12. set longest length to 2
// 13. While char at index (index 1 - count) equals char at index (index 2 + count) 
// 14. current length = count * 2 + 2
// 15. if current length greater than longest length then longest length equals current
// current length
// 16. Main function
// 17. let longest length equal 1
// 17. iterate over string until second to last char
// 18. if index passed to odd palindromes greater than longest length longest length 
// equals odd length 
// 19. if indexes passed to even palindromes greater than longest length then longest
// longest length equals even length 
// 20. return longest length 


let longestPalindrome = function(s){
  if (s.length === 0) return 0;
  let longestLength = 1;

  for (let i = 0; i < s.length - 1; i++) {
    let oddLength = oddPalindromes(i, s);
    if (oddLength > longestLength) longestLength = oddLength;
    if (s[i] === s[i + 1]) {
      let evenLength = evenPalindromes(i, s);
      if (evenLength > longestLength) longestLength = evenLength;
    }
  }

  return longestLength;
}

function oddPalindromes(index, string) {
  let count = 1;
  let currentLength = 1;

  while ((string[index - count] === string[index + count]) && (index - count) > -1) {
    currentLength = (count * 2) + 1;
    count += 1;
  }
  return currentLength;
}

function evenPalindromes(index, string) {
  let count = 1;
  let currentLength = 2;

  while ((string[index - count] === string[index + 1 + count]) && (index - count) > -1) {
    currentLength = (count * 2) + 2;
    count += 1;
  }
  return currentLength;
}


// Problem
// Given a string return the length of the longest palindrome within the string
// Input: string
// Output: number
// Data Structure: array
// Algo:
// 1. Create function to get all substrings
// 2. Create function that iterates over string and returns the longest string that 
// begins with each character
// 3. Create a function that iterates over the starting strings and returns each 
// substring of chars
// 4. Create is palindrome function
// 5. iterate over substrings
// 6. if is palindrome and length longer than count then count equals length
// 7. return count


/*
let longestPalindrome = function(s){
  if (s.length === 0) return 0;
  let subStrs = allPalindromes(startingStr(s));

  return subStrs.reduce((pv, cv) => {
    return cv.length > pv ? cv.length : pv;
  },0);
}

function startingStr(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.slice(i));
  }
  return result;
}

function allPalindromes(arr) {
  let result = [];

  arr.forEach(subStr => {
    for (let i = 1; i <= subStr.length; i++) {
      if (isPalindrome(subStr.slice(0, i))) { 
        result.push(subStr.slice(0, i));
      }
    }
  });
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
*/