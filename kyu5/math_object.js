// Problem:
// Given a number round it down, round it up, or round it whichever it's nearer to from
// the decimal place
// Input: number
// Output: number
// Data Structure: Array
// Algo:
// 1. Coerce number to string
// 2. Split string into array of characters / guard clause for no decimal point
// 3. Transform characters to numbers if not '.'
// 4. reverse numbers 
// Function rounded float
// 1. given array
// 2. if index of '.' is -1 return array
// 3. create carry variable
// 4. iterate over array starting at 1 
// 5. if current is '.' if previous greater than 4 add 1 to next number
//    return copy from after period on
// 6. if previous greater than 4 add one to current
// Function carry 1
// 1. given array iterate over it
// 2. if 10 
//    if current is last push one current is 0
//    else add one to next current is 0
// 5. return number reversed transformed to chars, joined, and transformed to number
// Ceil:
// Function greater than 0
// 1. variable greater than zero set to false
// 2. 


// Easier way to round is just add .5 and drop the decimal

function roundedFloat(arr) {
  let periodIdx = arr.indexOf('.');
  if (periodIdx === 0) return arr.slice(1);
  if (arr[periodIdx - 1] > 4) {
    arr[periodIdx + 1] += 1;
  }
  return arr.slice(periodIdx + 1);
}


function carryOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      if (i === arr.length - 1) {
        arr.push(1);
      } else { 
        arr[i + 1] += 1;
      }
      arr[i] = 0;
    }
  }
  return arr;
}


Math.round = function(number) {
  if (number % 1 === 0) return number;
  number = String(number).split('').reverse();
  number = number.map(digit => {
    if (digit === '.') {
      return digit;
    } else {
      return Number(digit);
    }
  });


  number = roundedFloat(number);

  number = carryOne(number);

  return Number(number.reverse().join(''));

};



Math.ceil = function(number) {
  if (number % 1 === 0) return number;
  number = String(number).split('');
  number = number.filter((__, idx) => idx < number.indexOf('.')).join('');
  return Number(number) + 1;
};

Math.floor = function(number) {
  if (number % 1 === 0) return number;
  number = String(number).split('');
  number = number.filter((__, idx) => idx < number.indexOf('.')).join('');
  return Number(number);
};
