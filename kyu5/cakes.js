// Problem:
// Given a recipe with required units and a list of available units calculate 
// how many times the recipe can run before available units run out
// Input: 2 Objects
// Output: Number
// Data Structure: Object
// Algo:
// 1. Create a max cakes number variable set to zero
// 2. Set a cake limit not met variable set to true
// 3. Create a while loop set to cake limit not met variable
// 4. Iterate over the recipe object
// 5. On each iteration:
// a. remove the number of the recipe value from the available value
// b. if available value is less than zero then set cake limit met to false 
// 6. if cake limit not met is false then break
// 7. max cakes += 1
// 8. End Loop
// 9. Return max cakes value


function cakes(recipe, available) {
  let maxCakes = 0;
  let limitNotMet = true;
  while (limitNotMet) {
    
    for (let ingredient in recipe) {
      if (!available[ingredient]) {
        limitNotMet = false;
        break;
      }
      available[ingredient] = available[ingredient] - recipe[ingredient];
      if (available[ingredient] < 0) limitNotMet = false;
    }
    if (!limitNotMet) break;
    maxCakes += 1;
  }
  
  return maxCakes;
}