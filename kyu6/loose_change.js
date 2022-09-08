// Problem:
// Given a number representing a number of cents return an object where each key
// is a dime, penny, nickle, and quarter and each value is the count of them to
// equal the given amount using the least amount of coins. 
// Rules
// 1. Negative number or zero returns object with 0 count coins
// 2. Floating point returns object with 0 count coins
// Input: number
// Output: object
// Data Structure: object
// Algo
// - create coins variable and assign it with all four coins with zero values
// - if number less than 1 return  coins
// - if number floating point return coins
// - Create while loop
// - condition is number is greater than 0
// - if number greater than or equal to 25 subtract 25 from number and add 1 to quarters
// - continue
// - if number greater than or equal to 10 subtract 10 and add 1 to dimes
// - continue
// - if number greater than or equal to 5 subtract 5 and add 1 to nickles
// - continue
// - subtract 1 from number and add 1 to pennies
// - end loop
// - return coins

function looseChange(cents){
  let coins = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};

  if (cents < 1) return coins;
  if (cents % 1 !== 0) cents = Math.floor(cents);

  while (cents > 0) {
    if (cents >= 25) {
      cents -= 25;
      coins['Quarters'] += 1;
      continue;
    } 
    if (cents >= 10) {
      cents -= 10;
      coins['Dimes'] += 1;
      continue;
    }
    if (cents >= 5) {
      cents -= 5;
      coins['Nickels'] += 1;
      continue;
    }

    cents -= 1;
    coins['Pennies'] += 1
  }

  return coins;
}