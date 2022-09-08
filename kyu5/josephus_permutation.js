// Problem

// must account for splicing impacting the index numbers on each loop

// Given a list of elements and k a number return an array that has added to it every k element cycling around from end to end
// Input: Array, number
// Output: Array
// Algo:
// 1. Create a count k function that takes k, an current index and an array
// a. Set index equal to i + k - 1
// b. While i is equal to or greater than items length
// c. i = i - length
// i. return new index
// 2. create a result array 
// 3. iterate with for loop with 0 initialize, length = 0, and count k function for incrementer
// 4. On each iteration splice element from array 
// 5. end loop
// 6. return array

function countK(i, k, items) {
  i = i + k - 1;

  while(i >= items.length && items.length !== 0) {
    i = i - items.length;
  }
  return i;
}
 

function josephus(items,k) {
  items = items.slice();
  let result = [];
  let i = countK(0, k, items);
  while (items.length > 0) {
    console.log(i)
    result.push(items.splice(i, 1)[0]);
    console.log(i)
    i = countK(i, k, items);
    console.log(items)
  }
  return result;
}