// Problem: 
// Given a string in PascaleCase return that string in snake_case
// rules:
// 1. Only add underscores between words
// 2. Only strings
// 3. Must consider numbers
// Input: string
// Output: string
// Data Structure: arrays
// Algo:
// 1. Set newString variable equal to array with one empty string
// 2. Set index to -1
// 3. Loop over string
// 4. if both index 0 and char not uppercase 
//    add 1 to arrIndex
//    arr[index] equals char
//    continue
// 4. If current letter uppercase and no empty string in array
//      arrindex equals index + 1
//      array element at arrindex equals lowercase char
// 5. ELSE Add char to current element in array
// 6. End Loop
// 7. Return newString Array joined with underscores



function toUnderscore(string) {
  if (typeof string === 'number') return String(string);
  let newString = [''];
  let arrIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString[arrIndex] = string[i].toLowerCase();
      continue;
    }
  
    if ((string[i] >= 'A') && (string[i] <= 'Z')) {
      arrIndex += 1;
      newString[arrIndex] = string[i].toLowerCase();
    } else {
      newString[arrIndex] += string[i];
    }
  }
  
  return newString.join('_');
}