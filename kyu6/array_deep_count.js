// Problem:
// Given an array count each element in the array including any elements of 
// subarrays.
// Rules:
// 1. Only arrays will be entered
// Input: array
// Output: number
// Data Structure: array
// Algo:
// 1. Create function arrayCount and pass the given array to it and current count
// 2. iterate over the given array
// 3. if element is array add length of array to current count and assign to 
//   current count the recursive invocation of array count with current array passed
//   and current count passed
// 4. after iteration completes return current count
// 5. Main function
// 6. return invocation of arrayCount with given array and its length passed

function deepCount(a){
  return arrayCount(a, a.length);
}

function arrayCount(arr, currentCount) {

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      currentCount += arr[i].length;
      currentCount = arrayCount(arr[i], currentCount);
    }
  }
  return currentCount
}