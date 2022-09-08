// Problem:]
// Given a string and two substrings return a boolean in regards to if the characters 
// in the substring can be found in the substrings and if the chars are in the right 
// order
// Input: 3 substrings
// Output: boolean
// Data Structure: Array
// Algo
// 1. Split string into array of characters
// 2. split substrings into arrays
// 3. filter out characters that aren't in the string
// 4. Set last index to -1
// 5. iterate over first substring
// 6. find index of char set it to current index
// 7. remove character
// 8. if current index less than last index return false
// 9. last index = current index -1
// 10. Repeat for other substring
// 11. return true if string array length is 0

// Never completed


function isMerge(s, part1, part2) {
  if (s.trim() === '') {
    return part1.trim() === '' && part2.trim() === '';
  }
  let strArr = s.split('');
  let strArrCopy = strArr.slice()
  let subStr1 = part1.split('');
  let subStr2 = part2.split('');

  subStr1 = subStr1.filter(char => strArr.includes(char));
  subStr2 = subStr2.filter(char => strArr.includes(char));
  
  let lastIndex = -1;

  for (let i = 0; i < subStr1.length; i++) {
    let currentIndex = strArr.indexOf(subStr1[i]);
    if (currentIndex !== -1) {
      strArrCopy.splice(strArrCopy.indexOf(subStr1[i]), 1);
      console.log(subStr1[i]);
      console.log(currentIndex);
      console.log(lastIndex);
      if (currentIndex < lastIndex) return false;
      lastIndex = currentIndex;
    }
  }
  
  lastIndex = -1

  for (let i = 0; i < subStr2.length; i++) {
    let currentIndex = strArr.indexOf(subStr2[i]); // 7 6
    if (currentIndex !== -1) {                    
      strArrCopy.splice(strArrCopy.indexOf(subStr1[i]), 1);  
      console.log(subStr2[i]);
      console.log(currentIndex);
      console.log(lastIndex);
      if (currentIndex < lastIndex) return false;
      lastIndex = currentIndex;
    }
  }
  if ((subStr1.length + subStr2.length) !== strArr.length) return false;
  return strArrCopy.length === 0;
}

isMerge('xcyc', 'xc', 'yc')
