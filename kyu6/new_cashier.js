// Problem
// Given a string return a string where the given substrings are capitalized and
// separated by a space.
// Input: string
// Output: string
// Data Structure: Array/ Object
// Algo:
// Create array with items in lowercase
// Create count object with items
// create result array
// create current word empty string
// iterate over given string
//   current word += current char
//   if current word is in the item array
//     increase count for that word by 1
//     current word assigned empty string
// end iteration
// 
// return result

function getOrder(input) {
  const ITEMS = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  let count = {Burger: 0, Fries: 0, Chicken: 0, Pizza: 0, Sandwich: 0, Onionrings: 0, Milkshake: 0, Coke: 0};
  let currentWord = '';
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (currentWord.length === 0) {
      currentWord += input[i].toUpperCase();
    } else {
      currentWord += input[i];
    }
    if (ITEMS.includes(currentWord)) {
      count[currentWord] += 1;
      currentWord = '';
    }
  }
  
  for (let i = 0; i < ITEMS.length; i++) {
    for (let i2 = count[ITEMS[i]]; i2 > 0; i2--) {
    result.push(ITEMS[i]);
    }
  }
  
  return result.join(' ');
}