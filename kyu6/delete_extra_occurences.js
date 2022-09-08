/// Problem:
// Given a number, n, and an array of numbers, return a new array with all numbers after
// n occurrences removed while leaving the rest of the numbers in order.
// Input: Number, array
// Output: array
// Algo:
// 1. Create a count object that's empty
// 2. iterate over copied array
// 3. if the current number doesn't exist in the object create it and set it to one.
// 4. Else count for that number has one added to it
// 5. if Count for that number is greater than n remove that number
// 6. if Number removed also reduce i by 1
// 7. return array

function deleteNth(arr,n){
  let count = {};
  arr = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]] = 1;
    
    if (count[arr[i]] > n) {
      arr.splice(i, 1);
      i -= 1;
    }
  }

  return arr;
}