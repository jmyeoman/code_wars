// Problem:
// Problem given a number, n, return the sum of all the digits 1 to n.
// Input: number
// Output: number
// Data Structure: array
// Algo:
// - create variable digits and assign it an empty array
// - iterate 1 through n and add each number to the digits
// - join the digits into one string of characters
// - separate the digits into individual numbers
// - return all the numbers added together

function twistedSum(n) {
  let digits = [];
  for (let i = 1; i <= n; i++) {
    digits.push(i);
  }

  return digits.join('')
               .split('')
               .map(digit => Number(digit))
               .reduce((pv, cv) => pv + cv)
}