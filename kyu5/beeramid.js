// Problem
// Given 2 numbers representing the number of beers you can buy return the number of
// squares you can sequentially add to eachother until they exceed the number of 
// beers you have
// Input: 2 numbers
// Output: number
// Data Structure: None just loop through numbers
// Algo
// * Create guard clause for bonus being less than 0
// 1. Create a number of beers (money / cost)
// 2. Create a number of levels variable set to 0
// 3. While Number of beers greater than 0
// 4. levels += 1
// 5. Number of beers -= levels squared
// 6. Return levels - 1


var beeramid = function(bonus, price) {
  if (bonus < 0) return 0;
  let beers = Math.floor(bonus / price);
  let levels = 0;

  while (beers >= 0) {
    levels += 1;
    beers -= levels ** 2;
  }

  return levels - 1;
}