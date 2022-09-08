// Problem
// Given a string return the string with all lowercase letters following the same
// uppercase letter. Sort in ascending order.
// Input: string
// Output: string
// data structure: array, object
// Algo
// - create family function
// - given a letter and number
// - return the uppercase letter followed by the lowercase letter repeated the 
// number of times
// Main function
// - create families object assign empty object
// - iterate over string
// - if Uppercase object exists and is uppercase - uppercase property element 0
//   +1
// - if is uppercase and uppercase object doesn't exist - Uppercase property 1,0
// - if lowercase and uppercase property exists uppercase propert element 1 +1
// - if lowercase and uppercase property doesn't exist uppercase property 0, 1
// - create result array
// - iterate over object 
// - push family function return value with properties passed
// - sort result array
// - join result array and return it

function findChildren(dancingBrigade) {
  let families = {};

  dancingBrigade.split('')
                .forEach(char => {
                  if (isUpperCase(char) && !!families[char]) {
                    families[char][0] += 1;
                  } else if (isUpperCase(char) && !families[char]) {
                    families[char] = [1, 0];
                  } else if (isLowerCase(char) && !!families[char.toUpperCase()]) {
                    families[char.toUpperCase()][1] += 1;
                  } else if (isLowerCase(char) && !families[char.toUpperCase()]) {
                    families[char.toUpperCase()] = [0, 1];
                  }
                });
  let result = [];

  for (let char in families) {
    result.push(family(char, families[char][0], families[char][1]));
  }

  return result.sort().join('');
}

function family(letter, upperCaseNum, lowerCaseNum) {
  return letter.toUpperCase().repeat(upperCaseNum) + letter.toLowerCase().repeat(lowerCaseNum);
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
  return char >= 'a' && char <= 'z';
}