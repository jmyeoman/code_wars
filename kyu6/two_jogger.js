// Problem
// Given two numbers return an array containing the the multiple of each number 
// where they both match
// Input: numbers
// Output: array of numbers
// Data Structure: array
// Algo:
// - Determine larger function
// - given x, y if x greater than y return x 
// - else if y greater than x return y
// - else return x
// - if x less than y return x
// - if y less than x return y
// - else return x
// - main function
// - create variable larger assigned x,y passed to larger function
// - create variable smaller assigned x, y passed to larger function
// - create variable larger multiples arr assigned empty array
// - create variable smaller multiples arr assigned empty array
// - create multiple variable assigned one
// - Begin infinite while loop
// - larger multiple assigned multiple times larger
// - smaller multiple assigned multiple times smaller
// - larger multiple added to larger multiple array
// - smaller multiple added to smaller multiple array
// - if larger multiple array includes smaller multiple BREAK
// - multiple += 1
// - End loop
// - smaller count assigned multiple
// - larger count assigned index of last element of smaller arr + 1
// - function rightOrder
// - given x, y, larger, smaller, larger count, smaller count
// - if x equals larger return [largercount, smallercount]
// - else return [smallercount, largercount]

var nbrOfLaps = function (x, y) {
  let larger = isLarger(x, y);
  let smaller = isSmaller(x, y);
  let largerArr = [];
  let smallerArr = [];
  let multiple = 1;

  while (true) {
    let largerMultiple = larger * multiple;
    let smallerMultiple = smaller * multiple;

    largerArr.push(largerMultiple);

    if (largerArr.includes(smallerMultiple)) {
      break;
    }
    multiple += 1;
  }
  
  let smallerCount = multiple;
  let largerCount = largerArr.indexOf(smaller * smallerCount) + 1;

  if (x === larger) return [largerCount, smallerCount];
  return [smallerCount, largerCount];
}


function isLarger(x, y) {
  if (x > y) return x;
  return y;
}

function isSmaller(x, y) {
  if (x < y) return x;
  return y;
}