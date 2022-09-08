// Problem:
// Given an array of values mutate and return the array with all 0s moved to the end of the array
// Input: Array
// Output: Array
// Data Structure: Array
// Algo:
// 1. iterate over array
// 2. if the element is a zero remove it and add it to the end of the array
// 3. Return the array

function moveZeros(arr) {
  let removalList = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      removalList.push(i);
    }
  }
  
  addZeros(arr, removalList.length);
  removeZeros(arr, removalList);
  
  return arr;
}

function addZeros(arr, num) {
  for (let count = 1; count <= num; count++) {
    arr.push(0);
  }
}


function removeZeros(arr, removalIdx) {
  removalIdx.sort((a, b) => b - a);
  removalIdx.forEach( idx => arr.splice(idx, 1));
  
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))