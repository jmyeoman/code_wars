// Problem:
// Given an array of non-negative integers 0-9, return an array of the integers with one
// added if they represented a single number. 
// Input: array
// Output: array
// Data Structure: array
// Algo:
// 1. reverse array 
// 2. create function for adding
// 3. pass array as argument
// 4. Create copy of array
// 5. iterate over copy
// 6. If first index add 1 
// 7. if current value equals 10 current and not last index value equals zero next value plus one
// 8. else if current value equals 10 and last index current value equals 0 and push 1
// 9. else return reversed array


function upArray(arr){
  if (isNull(arr)) return null; 
  arr = arr.slice().reverse();
  arr[0] += 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      arr[i] = 0;
      i === arr.length - 1 ? arr.push(1) : arr[i + 1] += 1;
    } else {
      return arr.reverse();
    }
  }
}

function isNull(arr) {
  if (arr.length === 0) return true;
  return !arr.reduce((pv, cv) => {
    cv = cv >= 0 && cv <= 9;
    return cv && pv;
  }, true);
}