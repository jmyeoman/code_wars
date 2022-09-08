// Problem: Given a string of characters representing roman numerals return the number
// they represent.
// Input: string
// Output: number
// Data Structure: Object/ Array
// Algo:
// 1. Create a roman numeral object with the number value for each numeral
// 2. Create an empty number value Array
// 3. Split the string out to an array of characters
// 4. Set index of numberValues to 0
// 5. Loop over array
// 6. numeral object value added to number array (must account for undefined initial)
//    at numberValues index
// 7. If next numeral different from current numeral add one to numberValue index
// 9. loop over number values until second to last number value
// 10. If next number value is greater than current number value current value is //
// 11. Sum all numbers in numberValue array and return


function solution (roman) {
  let numeralObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let numberValueArr = [];
  let numberValueIndex = 0;

  let numerals = roman.split('');

  for (let i = 0; i < numerals.length; i++) {
    let currentNumVal = numeralObj[numerals[i]];

    numberValueArr[numberValueIndex] = numberValueArr[numberValueIndex] ? numberValueArr[numberValueIndex] += currentNumVal : currentNumVal;
    if (numerals[i] !== numerals[i + 1]) numberValueIndex += 1; 
  }

  for (let i = 0; i < numberValueArr.length - 1; i++) {
    if (numberValueArr[i] < numberValueArr[i + 1]) {
      numberValueArr[i] = -numberValueArr[i];
    }
  }

  return numberValueArr.reduce((pv, cv) => pv + cv)

}