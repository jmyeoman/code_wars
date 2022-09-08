// Problem
// Given an array of strings and an array of "rotor moves" return a new array of 
// strings where as you progress through each line you move the current letter
// and all letters to the right of it the rotor moves along a predetermined list of 
// chars that wraps around.
// Input: Array of Strings, Array of Numbers
// Output: Array of Strings
// Data Structure: Array
// Algo:
// 1. Create an array of chars
// 2. Loop through and transform the chars in the str arr to current rotor positions(-1)
// 3. Iterate over the rotor arr
// 4. Iterate over the arr of nums in the rotor array
// 5. Iterate over the current rotors starting at the same indices as above
// 6. Add rotor number to current rotor number 
// 7. if rotor number is higher than array length -1 subtract arr length
// 8. current rotor position assigned to number
// 9. end Loop
// 10. Loop over current rotor positions and set to chars in char array according to 
// index
// 11. return that array

const ALL_CHARS = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '?', '!', '@', '#', '&', '(', ')', '|', '<', '>', '.', ':', '=', '-', '+', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var flapDisplay = function(lines, rotors) {
  let currentPosition = lines.map(str => str.split('').map(char => ALL_CHARS.indexOf(char)));
  
  for (let i1 = 0; i1 < rotors.length; i1++) {
    for (let i2 = 0; i2 < rotors[i1].length; i2++) {
        for (let i3 = i2; i3 < currentPosition[i1].length; i3++) {
        let rotorNum = rotors[i1][i2];
        let currentRotorNum = currentPosition[i1][i3];

        currentRotorNum = rotorNum + currentRotorNum;
        while (currentRotorNum > (ALL_CHARS.length - 1)) {
          currentRotorNum -= ALL_CHARS.length;
        }
        
        currentPosition[i1][i3] = currentRotorNum;
      }
    }
  }
  
  return currentPosition.map(subArr => subArr.map(index => ALL_CHARS[index]).join(''));

}