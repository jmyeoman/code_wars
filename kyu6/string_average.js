// Problem:
// Given a string with numbers from 0-9 written out average the numbers and 
// return the average as a floored whole number.
// Input: string
// Output: number
// Data Structure: Object, maybe array
// Algo:
// - create an array containing all the number string pairs from 0-9
// - Create a total variable assigned 0
// - guard clause for empty string
// - separate the string into an array of number strings
// - iterate over array of number strings. 
// - if number string not included in number list return 'n/a'
// - iterate through str array and add number to total
// - calculate average
// - return string number for average

function averageString(str) {
  if (str.trim === '') return 'n/a';
  const numberList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                     'seven', 'eight', 'nine']
  let total = 0;

  let strArr = str.split(' ');
  
  for (let i = 0; i < strArr.length; i++) {
  if (!numberList.includes(strArr[i])) return 'n/a';
  }

  strArr.forEach(num => { 
    total += numberList.indexOf(num);
  });

  let numAnswer = Math.floor(total / strArr.length);

  return numberList[numAnswer];
}