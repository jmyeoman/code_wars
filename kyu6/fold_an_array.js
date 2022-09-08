// Problem
// given an array and a number, n, fold the array in half adding together numbers from
// opposite indexes. Do this n number of times
// Rules: 
// 1. n will be integer greater than 0
// 2. array will be numbers
// Input: Array, number
// Output: New Array
// Data Structure: Array
// Algo:
// 1. Loop n number of times
// 2. on each iteration "fold" the array
// 3. Create fold function 
// 4. create index 2 variable set to array length - 1
// 4. b Create result array
// 5. Loop
// 6. While i is less than or equal to half the length 
// 7. add numbers from index 1 and 2 and push to new array
// 7. b. decrement i2
// 8. return result array
// 9. end larger Loop
// 10. return result array
function foldArray(array, runs) {
  let result = null;

  while (runs > 0) {
    if (result) {
      result = foldOnce(result);
      runs--;
      continue;
    } 
    result = foldOnce(array);
    runs--;
  }

  return result;
}

function foldOnce(array) {
  if (array.length === 1) return array.slice();
  let result = [];
  let i2 = array.length - 1;

  for (let i1 = 0; i1 <= (array.length / 2) - 1; i1++) {
    result.push(array[i1] + array[i2]);
    i2--
  }
  
  if (array.length % 2 === 1) result.push(array[Math.floor(array.length / 2)]);
  return result;
}