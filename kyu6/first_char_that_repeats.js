// Problem:
// Given a string return the char that appears first and also repeats.
// Rules: 
// 1. no repeats returns undefined
// Input: string
// Output: string
// Data Structure: Object, array
// Algo:
// 4. Main function
// 5. iterate over string
// 6. iterate over string starting at next char
// 7. if current char matches later char return char
// 8. return undefined


function firstDup (s) {
  for (let i1 = 0; i1 < s.length; i1++) {
    for (let i2 = i1 + 1; i2 < s.length; i2++) {
      if (s[i1] === s[i2]) return s[i1];
    }
  }
  return undefined;
}