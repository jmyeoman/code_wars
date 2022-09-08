// Problem:
// Given an array of strings and a number, k, return the consecutive strings that add up
// to k and are the longest that do so.
// Input: Array or Strings, number
// Output: String
// Data Structure: Array
// Algo:
// 1. Guard clause for k greater than strArr length
// 2. Guard clause for empty array
// 3. Guard clause k <= 0
// 4. Result Array
// 5. Loop over strArr 
//       starting at 0 but ending at k-1 + i < length
// 6. result string
// 7. Loop counting from i to i + k -1 
//       Result string equals current string plus result string
// 8. Loop over result array
// 9. Return longest string

function longestConsec(strArr, k) {
  if (k > strArr.length) return '';
  if (k <= 0) return '';
  if (strArr.length === 0) return '';

  let resultArr = [];

  for (let i1 = 0; (k - 1 + i1) < strArr.length; i1++) {
    let resultStr = '';

    for (let i2 = i1; i2 < (i1 + k); i2++) {
      resultStr += strArr[i2];
    }
    resultArr.push(resultStr);
  }

  return resultArr.reduce((pv, cv) => cv.length > pv.length ? cv : pv);
}