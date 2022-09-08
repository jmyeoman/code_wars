// Problem:
// Given a string of names, an array of weights (numbers), and a rank (num)
// return the name that is the rank in order after doing the following
// Determine the som by Adding the lenght of each name along with the number of
// each letter in the alphabet and then multiplying by the corresponding weight.
// Then order the names in decreasing som order with the same number then 
// ordered by alphabetical order of the first letter. 
// Rules:
// 1. If string is empty return 'No participants'
// 2. if rank is greater than number of names return 'Not enough participants'
// Input: String, Array, number
// Output: String
// Data Structure: Object, array
// Algo:
// - function sum of name letters
//   - assign lowercase letters of alphabet to array starting at index 1
//   - given string of letters all in lowercase
//   - assign count variable to 0
//   - loop through letters
//   - on each iteration add the index of the letter to count
//   - return count

// - function calculate som
//   - given string to all lowercase letters
//   - set variable som assigned sum of name length plus sum of name letters
//   - return som multiplied by corresponding weight
// - function create array of names and soms
//   - given array of names
//   - create result array assigned empty array
//   - iterate over names
//   - On each iteration push array with name at first index and som of name 
//     at second index
// - main function
// - split string into array of names
// - if string empty return 'No participants'
// - if array of names's length is less than rank return 'Not enough 
//   participants'
// - set variable array of soms and names to function create array of names and 
//   soms
// - sort array of names and soms 
//   - if som is greater than put that array first
//   - if som is equal put put array of name with first letter earlier in the 
//   alphabet first

const alphabet = [-1, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                 'u', 'v', 'w', 'x', 'y', 'z'];


function rank(st, we, n) {
  let names = st.split(',');

  if (st.trim() === '') return 'No participants';
  if (n > names.length) return 'Not enough participants';

  let arrOfNamesAndSoms = createArrOfNamesAndSoms(names, we);

  arrOfNamesAndSoms.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (b[1] > a[1]) return 1;
    if (a[1] === b[1]) {
      if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
      if (b[0].toLowerCase() < a[0].toLowerCase()) return 1;
      return 0;
    }
  });

  return arrOfNamesAndSoms[n - 1][0];
}


function sumOfLetters(str) {
  let strArr = str.toLowerCase().split('');
  let count = 0;

  strArr.forEach(letter => count += alphabet.indexOf(letter));

  return count;
}


function calculateSom(str, idx, we) {
  return (str.length + sumOfLetters(str)) * we[idx];
}

function createArrOfNamesAndSoms(arrOfNames, we) {
  let resultArr = [];
  arrOfNames.forEach((element, idx) => {
    resultArr.push([element, calculateSom(element, idx, we)]);
    });
  return resultArr;
}

