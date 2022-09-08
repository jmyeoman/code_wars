// Problem
// Given two numbers return all numbers that are both prime and when reversed
// are also prime
// Rules:
// 1. Palindromes are excluded
// 2. No results returns empty array?
// Input: Two numbers
// Output: Array of numbers
// Data Structure: Array
// Algo
// - is prime function 
// - iterate from 2 to squareroot of given number
// - if given number remainder current number is 0 return false
// - end loop
// - return true if number is greater than 1
// - reverseIsPrime function
// - given number converted to string reversed and converted to number
// - return converted number isPrime
// - function isNotPalindrome
// -   reversed variable assigned given number converted to string reversed and 
//     converted to number
// - return given number doesn't equal reverse numbers
// - Main Function
// - Create result empty array
// - iterate over numbers between 2 given numbers
// - if isnotPalindrome and isprime and reverseIsPrime 
// -   push num to result array
// - return result array

function isNotPalindrome(num) {
  return num !== Number(String(num).split('').reverse().join(''))
}

function isPrime(num) {
  for (let count = 2, s = Math.sqrt(num); count <= s; count++) {
    if (num % count === 0) return false;
  }
  return num > 1;
}

function reverseIsPrime(num) {
  let reversed = Number(String(num).split('').reverse().join(''));
  return isPrime(reversed);
}


function backwardsPrime(start, stop) {
  let result = [];

  while (start <= stop) {
    if (isNotPalindrome(start) && isPrime(start) && reverseIsPrime(start)) {
      result.push(start);
    }
    start++;
  }

  return result;
}
