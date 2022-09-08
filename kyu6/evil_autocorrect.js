// Problem
// given a string replace the following: Words that start with 'you' and 
// contain any repetition of 'u' 
// instance of a single 'u' as a word (delimited by spaces)
// Input: string
// Output: string
// Data Structure: array
// Algo
// - create constant replacement and assign it 'your sister'
// - Split string into array of words (delimited by spaces)
// - if word is 'u' replace with replacement
// - if word is 'you' replace with replacement
// - if word begins with 'you' with the 'u' repeated replace with replacement
// - end loop
// - return array with words joined into single string delimited by spaces

function autocorrect(input){
  const replacement = 'your sister';

  input = input.split(' ');

  for (let i = 0; i < input.length; i++) {
    if (input[i].toLowerCase() === 'u') replace(replacement, input, i);
    if (input[i].toLowerCase() === 'you') replace(replacement, input, i);
    if (input[i].slice(0, 3).toLowerCase() === 'you' && 
        doesRepeat(input[i].slice(3), 'u')) {
      replace(replacement, input, i)
    }
  }

  return input.join(' ');
  
}

function replace(replacement, arr, i) {
  arr[i] = replacement;
}

function doesRepeat(str, repeater) {
  return str.split('')
            .every(char => char === repeater);
}

console.log(autocorrect('You I love u, im on Youtube with Youuuuuuu'))