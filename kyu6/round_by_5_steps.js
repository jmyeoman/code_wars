// Problem:
// Given a number round the number to the nearest .5 step. 
// Rules: If in the middle round up
// Input: number
// Output: number
// Data Structure: none
// Algo:
// - Create remainder variable and assign it given number remainder .5
// - if remainder equal to or greater than .25 return number minus remainder + 
// .5
// - else return number minus remainder


function solution(n){
  let remainder = n % .5;

  if (remainder >= .25) return n - remainder + .5;
  return n - remainder;
}

// better way

/*

let solution = (n) => Math.round(n*2)/2


*/