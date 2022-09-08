// Not completed
//Problem:
// Given a number return an array with 1) the smalles number that can be created by
// moving one digit 2) The index where that digit is taken from (must be the smallest) 
// and 3) the index where you place the moved digit
// 1. Must flip indexes of replacement digit if it comes directly after new index
// 2. If beginning number is same as replacement digit move to next index and iterate 
// until it's greater
// 3. 
// Input: number
// Output: Array of numbers
// Data Structure: Array
// Algo:
// A. Create last index the same function 
// B. given index 
// C. iterate over array starting at given index 
// D. if next index doesn't equal current index return current index 
// 1. Convert number to array of digits
// 2. Find the minimum number in the array
// 3. Set the index of the min number - replacement index
// 4. Set new index to 0
// 5.   IF replacement index equals 1
//          then replacement index = 0
//          new index = index 1 plugged into last same index
//  8. let replacement number equal number take from replacement index
//  9. number array place replacement number at new index
//  10 join number array and coerce to number
//  11. return number, replacement index, and new index in array


function lastIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1) return i;
    if (arr[i + 1] !== arr[i]) return i;
  }
}

function smallest(n) {
  let numArr = String(n).split('').map(digit => Number(digit));
  let minNum = Math.min(...numArr)
  let replacementIndex = numArr.indexOf(minNum) // 0, 2, 5
  let newIndex = 0 // 0, 1, 2, 3, 4
  let newNumArr = numArr.slice()
  // must iterate in case multiple min numbers at begining of numArr
  while (numArr[replacementIndex] === newNumArr[0]) {
    newNumArr.shift();
    newIndex += 1;
    minNum = Math.min(...newNumArr);
    replacementIndex = numArr.indexOf(minNum);
  }
// 112243433
// 1122343433
  replacementIndex = numArr.lastIndexOf(minNum)

  if (replacementIndex === 1) {
    replacementIndex = 0;
    newIndex = lastIndex(numArr);
  }

// under certain circumstances newIndex should be before the first occurrence of the replacement number

  let replacementDigit = numArr.splice(replacementIndex, 1);
  numArr.splice(newIndex, 0, replacementDigit);

  let num = Number(numArr.join(''));

  return [num, replacementIndex, newIndex]
}