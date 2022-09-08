// Problem:
// Given an array of numbers sort the numbers by decreasing frequency. If two
// numbers have the same frequency sort by increasing value
// Input: array
// Output: array
// Data Structure: array, object
// Algo
// - create count function
// - pass an array and an object to the function
// - iterate over the array
// - count each ocurrence of an element and add it to the object
// - main function
// - copy array
// - create frequency variable assigned empty object
// - invoke count function and pass arr and frequency to it
// - sort copied array
// - put higher count numbers first
// - if the same count put lower numbers first

function solve(arr){
  arr = arr.slice();
  let frequency = {};
  
  count(arr, frequency);

  arr.sort((a, b) => {
    if (a === b) return 0;
    if (frequency[String(a)] > frequency[String(b)]) return -1;
    if (frequency[String(a)] < frequency[String(b)]) return 1;
    if (a < b) return -1;
    if (a > b) return 1;
  });

  return arr;
}

function count(arr, obj) {
  arr.forEach(num => {
    obj[String(num)] ? obj[String(num)] += 1 : obj[String(num)] = 1;
  });
}