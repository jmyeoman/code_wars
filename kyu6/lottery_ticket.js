// Problem:
// Given an array of 2 value sub-arrays and a number win where the first 
// value of each sub-array is a string and the second value a number return 
// 'Winner!' or 'Loser!' depending on whether the number of subarrays with a 
// character in the string that has a char code that matches the number in 
// that string is equal to or greater than the number win.
// Input: Array, number
// Output: string
// Data Structure: Array
// Algo:
// - find-mini-win function
// - given variable wins, a string and a number
// - iterate over the string
// - if the char code of the current char equals the number add one to wins and 
// stop iterating
// - main function
// - create variable miniwins assigned 0
// - iterate over given array
// - on each iteration pass the string, the number and wins to find mini-win 
// function
// if miniwins >= wins return 'Winner!' else return 'Loser!'


function bingo(ticket, win){
  let miniwins = [0];

  for (let i = 0; i < ticket.length; i++) {
    findMiniWin(miniwins, ticket[i][0], ticket[i][1]);
    if (miniwins[0] >= win) return 'Winner!';
  };
  return 'Loser!';
}

function findMiniWin(miniwins, str, num) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === num) {
      miniwins[0] += 1;
      break;
    }
  }
}