// Problem: 
// Given a string count how many 'O's have a tilde on the same side as the P in
// the string and return that number
// Input: string
// Output: number
// Data Structure: just loops
// Algo:
// 1. Create a count rat body variable assigned to 0
// 2. Create a count rat tail variable assigned to 0 
// 3. Create deaf rat count variable assigned to 0
// 4. Create Piper is left variable assigned to false
// 5. Create Rat is right function
// 6. Pass the counts to the function and the current char
// 7. return the counts are equal and the current char is a 'O'
// 8. Create Rat is left function pass the counts and the current char
// 9. return the counts are equal and the current char is a tilde
// 10. Iterate over the given string
// 11. if current character is 'P' Piper is left assigned true
// 12. if current character is tilde add one to rat tail count
// 13. if current char is 'O' add one to rat body count
// 14. if rat is right AND Piper is left deaf rat count plus 1
// 15. if rat is left and Piper is not left deaf rat count plus 1
// 16. end loops
// 17. return deaf rat count


var countDeafRats = function(town) {
  let ratBodyCount = 0;
  let ratTailCount = 0;
  let deafRatCount = 0;
  let piperIsLeft = false;

  for (let i = 0; i < town.length; i++) {
    switch (town[i]) {
      case 'P':
        piperIsLeft = true;
        break;
      case '~':
        ratTailCount += 1;
        break;
      case 'O':
        ratBodyCount += 1;
        break;
    }

    if (ratIsRight(ratBodyCount, ratTailCount, town[i]) && piperIsLeft) deafRatCount += 1;
    if (ratIsLeft(ratBodyCount, ratTailCount, town[i]) && !piperIsLeft) deafRatCount += 1;
  }

  return deafRatCount;
}

function ratIsRight(ratBodyCount, ratTailCount, currentChar) {
  return ratBodyCount === ratTailCount && currentChar === 'O';
}

function ratIsLeft(ratBodyCount, ratTailCount, currentChar) {
  return ratBodyCount === ratTailCount && currentChar === '~';
}

// Simpler solution

// Problem given a string where there is a 'P' and '~O' and 'O~' return the
// number of the former where the tilde is on the right and 'P' is to the 
// right and the number where the tilde is to the left and the 'P' is to the
// left
// Input: string
// Output: number
// Data Structure: Array
// Algo
// 1. Remove spaces from given string
// 2. set ident assigned to 'O'
// 3. set count to 0
// 4. iterate over string
// 5. if 'P' ident assigned to '~' continue
// 6. if current char is ident and current index remainder 2 is 0 then count
// plus 1
// 7. return count


var countDeafRats2 = function(town) {
  town = town.split(' ').join('');
  let count = 0;
  let ident = 'O';

  for (let i = 0; i < town.length; i++) {
    if (i % 2 === 0 && town[i] === ident) count += 1;
  }
  return count;
}