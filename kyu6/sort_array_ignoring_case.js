// Problem:
// Given an array of strings sort the strings in alphabetical order with 
// case-insensitive
// Input: array
// Output: array
// Algo:
// - make a copy of the array
// - sort the copy in alphabetical order ignoring case
// - return array


sortme = function( names ){
  names = names.slice();


  return names.sort((a, b) => {
    return mySort(a, b);
  });
}


function mySort(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  
  let length = a.length <= b.length ? a.length : b.length;

  if (a === b) return 0;
  
  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) return a[i].charCodeAt() < b[i].charCodeAt() ? -1 : 1;

    if (i === length - 1) return a.length < b.length ? -1 : 1;
  }

}