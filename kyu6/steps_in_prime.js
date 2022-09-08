// Problem:
// Given 3 numbers, the first the range between two prime numbers, the second and
// third the the range to search. Find two primes within the broader ranger
// separated by the smaller range. 
// Rules: Can have prime number between
// Input: 3 numbers
// Output: Array or null
// Data Structure: Array
// Algo:
// - Create is Prime function
// - given n
// - iterate over numbers between 2 and n's square root
// - if n remainder number equals 0 return false
// - end loop return true
// - main function
// - iterate over integers between m and n
// - if current number is prime and number plus g is prime return nums in Array
// - end loop return null

function isPrime(n) {
  for (let num = 2; num <= Math.sqrt(n); num++) {
    if (n % num === 0) return false;
  }
  return true;
}

function step(g, m, n) {
  for (let i = m; i <= n; i++) {
  if (isPrime(i) && isPrime(i + g)) return [i, i + g];
  }

  return null;
}