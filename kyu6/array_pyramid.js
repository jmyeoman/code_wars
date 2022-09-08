// Problem
// Given a number, n, return an array of subarrays filled with ones where there are n 
// subarrays and they are filled with 1 starting one 1 in the first subarray adding an 
// additional 1 to each subarray until you reach n 1s in a subarray
// Input: number
// Output: array
// Data Structure: array
// Algo:
// 1. create result array initialized to empty array
// 1b. create outer count assigned 1
// 2. while n greater than 0 
// 3. let subarray assigned empty array
// 3b. let inner count = outer count
// 4. while inner count greater than 0
// 5. Push 1 to subarray
// 6. subtract 1 from inner count
// 6. end inner loop
// 7. Add one to count
// 8. subtract one from n
// 9. add subarray to result
// 10. end outer loop
// 11. return result


function pyramid(n) {
  let result = [];
  let outerCount = 1;

  while (n > 0) {
    let subarray = [];
    let innerCount = outerCount;

    while (innerCount > 0) {
      subarray.push(1);
      innerCount--;
    }
    result.push(subarray);
    n--;
    outerCount++;
  }
  return result;
}