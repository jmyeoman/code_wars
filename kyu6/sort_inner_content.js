// Problem
// Given a string return a string with the inner chars of each word sorted in
// descending order
// Rules: No null, Will always be lowercase letters
// Input: string
// Output: string
// Data Structure: array
// Algo
// - Create sort word function
// - create first char variable assigned first char
// - create last char variable assigned last char
// - create middle variable assigned middle chars
// - convert middle to array and sort in descending order
// - return first + middle + last
// - Main function
// - convert string to array of words
// - iterate over array of words and pass each word to the sort word function
// - return transformed string

function sortWord(word) {
  if (word.length < 3) return word;
  let first = word[0];
  let middle = word.slice(1, word.length - 1)
  let last = word[word.length - 1];

  middle = middle.split('').sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
    });

    middle = middle.join('');

  return first + middle + last;
}



function sortTheInnerContent(words)
{
  return words.split(' ').map(word => sortWord(word)).join(' ');
}
