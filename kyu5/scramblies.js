// Problem:
// Given 2 strings return a boolean result depending on if all of the chars in str2 are present in str1.
// Rules: 
// 1. Only lowercase alphabet characters
// 2. Do I have to count multiple letters? Yes
// Input: 2 Strings
// Output: Boolean
// Data Structure: Array
// Algo: 
// 1. Split the first strings into one array
// 2. Iterate over the str2
// 3. Set all letters present variable to true
// 3. Find the index of the char in str1Arr
// 4. If present remove char from str1Arr
// 5. If not present set all letters present to false and break the loop
// 6. Return all letters present

// Note: Apparently doesn't work on long strings so I didn't pass that test on code wars. Not sure what's wrong

function scramble(str1, str2) {
 let allLettersPresent = true;
 let str1Arr = str1.split('');
 
 for (let i = 0; i < str2.length; i++) {
   let currentIndex = str1Arr.indexOf(str2[i]);
   
   if (currentIndex === -1) {
     allLettersPresent = false;
     break;
   }
   str1Arr.splice(currentIndex, 1);
 }
 
 return allLettersPresent;
}

console.log(scramble('scriptingjava','javascript'));
console.log(scramble('scriptjavx','javascript'));