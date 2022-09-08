// Problem:
// Given a number return how many times that number must be multiplied before
// all 10 digits have shown up in one of the results of multiplying the number
// Input: number
// Output: number
// Data Structure: array, object
// Algo:
// - Create a function count full 
// - assign it one parameter for the passed object
// - iterate over the object values and return true if every value is greater
//   than 0 or return false
// - Main function
// - Create a variable count and assign it with an object where every key is 
//   a digit 0-9 and every value is 0
// - Create a variable multiple and assign it 0
// - Create a while loop that checks if count is full as the condition
// - Increment multiple by 1
// - coerce the result of given number multiplied by multiple to string
// - iterate over string
// - if current char is not counted in object add 1 to object property of char
// - end iteration
// - end while loop
// - return multiple


function countFull(obj) {
  return Object.values(obj).every(num => num);
}


function computeDepth (x){
  let count = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 
                     5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
  let multiple = 0;

  while (!countFull(count)) {
    multiple += 1;
    String(x * multiple).split('')
                        .forEach(digit => {
                          if (!count[digit]) count[digit] += 1;
                        });
  }

  return multiple;
}
