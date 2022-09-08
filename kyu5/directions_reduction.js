// Problem: 
// Given an array of directions remove the unnecessary ones and return the simplified array
// Reduce by eliminating opposite directions that are next to eachother
// Input: Array
// Output: Array
// Data Structure: Array, Object???
// Algo
// 1. Create a is opposite sub-function
// 2. create a is changed variable 
// 3. create a do/while loop (while is changed is true)
// 4. create a copy of arr
// 5. set is changed variable to false
// 6. iterate over given array with for loop (length - 1)
// 7. On each iteration if next element is opposite remove both elements from copy and increase 
//    i by one and set is Changed to true
// 8. set given arr equal to copy of array
// 9. return arr

function dirReduc(arr){
  let isChanged = false;
  arr = arr.slice();
  
  do {
    isChanged = false;
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (isOpp(arr[i], arr[i + 1])) {
        arr.splice(i, 2);
        isChanged = true;
        i = arr.length;
      }
    }
  } while (isChanged)
  
  return arr;
}

function isOpp(first, second) {
  if (first === 'NORTH' && second === 'SOUTH') {
    return true;
  } else if (first === 'SOUTH' && second === 'NORTH') {
    return true;
  } else if (first === 'EAST' && second === 'WEST') {
    return true;
  } else if (first === 'WEST' && second === 'EAST') {
    return true;
  } else {
    return false;
  }
}