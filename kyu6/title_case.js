// Problem:
// Given two strings return the first string with all words w/ first char capitalized
// and rest of chars lowercase unless word is in the second string provided
// Rules:
// 1. First word is always capitalized
// 2. Case of words in second string doesn't matter
// Input: 2 strings
// Output: string
// Data Structure: Array
// Algo:
// 1. create capitalize function 
// a. given a string return the string with the first character capitalized and rest 
//    rest lowercase
// 2. create lowercase function 
// a. Return provided string argument in lowercase
// 3. split first string into array of strings
// 4. split second string into array of words in lowercase
// 5. create result array
// 6. iterate over string array
// 7. if first word capitalize and push to result continue
// 8. if lowercase word included in lowercase words arr then lowercase and push to 
// result continue
// 9. capitalize word and push to result 
// 10. join result and return

function titleCase(title, minorWords) {
  let titleArr = title.split(' ');
  minorWords = minorWords ? minorWords.split(' ').map(word => lowerCase(word)) : [];
  let result = [];

  for (let i = 0; i < titleArr.length; i++) {
    let word = titleArr[i];

    if (i === 0) {
      result.push(capitalize(word));
      continue;
    }

    if (minorWords.includes(lowerCase(word))) {
      result.push(lowerCase(word));
      continue;
    }

    result.push(capitalize(word));
  }

  return result.join(' ');

}

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function lowerCase(word) {
  return word.toLowerCase();
}
