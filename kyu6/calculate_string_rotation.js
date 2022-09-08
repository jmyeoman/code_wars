// Problem-
// Given two strings return the number of times the first string needs to have
// its chars shifted forward (and returning the last to the front) before it 
// matches the second string. Return -1 if it never matches
// Input: Two strings
// Output: number
// Data Structure: Array
// Algo:
// - Split first string into array of chars
// - Set variable count assigned 0
// - Create shift function
//   - given an array
//   - add the last element to the begining of the array
//   - remove the last element from the array
//   - return array
// - begin loop with condition count doesn't equal second array length
// - if first array joined equals second string return count
// - pass array to shift function and invoke it
// - Add one to count
// - end loop
// - return -1

function shiftedDiff(first,second){
  let arrStr = first.split('');
  let count = 0;

  while (count !== second.length) {
  if (matches(arrStr, second)) return count;
  
  shiftArr(arrStr);
  count += 1;
  }
  return -1;
}
  
function shiftArr(arr) {
  arr.unshift(arr[arr.length - 1]);
  arr.pop();
}



function matches(arr, str) {
  return arr.join('') === str;
}