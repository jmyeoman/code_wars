// Problem 
// Given a a value, n, if n is an integer return a string where you add a hash 
// before and after each odd integer without starting or ending with a dash
// Rules: 
// 1. Negative numbers should be made positive
// 2. Non numbers should return null
// Input: number
// Output: string
// Data Structure: Array
// Algo
// 1. If not integer return null
// 2. If less than zero convert to positive
// 3. Set result array variable
// 4. Convert number to string.
// 5. Iterate over string
// 6. if odd push dash integer dash to array
// 7. else push interger to array
// 8. End loop
// 9. Join array
// 10. if first char dash then remove
// 11. if last char dash then remove
// 12 return string

function dashatize(num) {
  if (!Number.isInteger(num)) return 'NaN';
  if (num < 0) num = -(num);

  let result = [];
  let numString = String(num);

  for (let i = 0; i < numString.length; i++) {
    let int = numString[i];
    let lastInt = numString[i - 1];
    if (Number(int) % 2 === 1) {
      if (lastInt % 2 === 1) {
        result.push(`${int}-`);
      } else {
        result.push(`-${int}-`);
      }
    } else {
      result.push(int);
    }
  }

  result = result.join('');

  if (result[0] === '-') result = result.slice(1);
  if (result[result.length - 1] === '-') result = result.slice(0, result.length - 1);

  return result;
}

// Alternate solution:


function dashatize2(num) {
  if (!Number.isInteger(num)) return 'NaN';
  if (num < 0) num = -(num);

  let numString = String(num).split('').join('-');
  let result = ''
  console.log(numString);
  for (let i = 0; i < numString.length; i++) {
    let char = numString[i];
    let nextChar = numString[i + 1]
    let lastChar = numString[i - 1]
    if (char === '-' && Number(lastChar) % 2 === 0 && Number(nextChar) % 2 === 0) {
      result += '';
      continue;
    }
    result += char;
  }

  return result;
}