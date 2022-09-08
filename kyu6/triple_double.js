// Problem
// Given two numbers return 1 if the first number has the same 3 digits in a row that the 
// second number has 2 digits in a row. Else return 0.
// Input: number
// Output: Number 
// Data Structure: array
// Algo:
// 1. Create a empty array named triples
// 2. Convert numbers to strings
// 3. Create current count variable and set to 0
// 4. Iterate over first string starting at 0
// 5. If last digit is the same add one to the count
// 6. if last digit is not the same set count to 1
// 7. if count equals 3 push number to triples array
// 8. Set count to 0
// 9. Iterate over second string number
// 10. if last number same as current number add 1 to count
// 11. if last number not same as current number set count to 1
// 12. if count equals 2 AND current digit is in triples array return 1
// 13. End Loop return 0

function tripledouble(num1, num2) {
  let triples = [];
  let count = 0;
  num1 = String(num1);
  num2 = String(num2);

  for (let i = 0; i < num1.length; i++) {
    if (num1[i - 1] === num1[i]) count += 1;
    if (num1[i - 1] !== num1[i]) count = 1;
    if (count === 3) triples.push(num1[i]);
  }

  count = 0

  for (let i = 0; i < num2.length; i++) {
    if (num2[i - 1] === num2[i]) count += 1;
    if (num2[i - 1] !== num2[i]) count = 1;
    if ((count === 2) && triples.includes(num2[i])) return 1;
  }
  return 0
}