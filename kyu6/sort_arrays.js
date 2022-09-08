// Problem
// Given an array sort the array in alphabetical order ignoring case
// Input: array
// Output: array
// Data Structure: array
// Algo:
// - sort given array
// - if string in lowercase is less than other string in lowercase place it 
//   before other string
// - if string in lowercase is greater than other string in lowercase place it
//   after other string
// - if same don't change order
// - return sorted array


let sortme = function( names ){
  return names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
}
