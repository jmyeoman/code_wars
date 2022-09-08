// Problem:
// Given an array of strings return a single string with the words formatted into
// a sentence separated by commas except the last pair that are separated by 
// 'and'
// Rules:
// 1. Empty array returns empty string
// 2. Empty strings are ignored
// Input: array of strings
// Output: string
// Data Structure: array
// Algo:
// - Guard clause for empty array
// - filter empty strings out of array
// - separate the last word into a separate array from the rest of the words
// - join the first array of words with a commas
// - add the string to the array of the last word
// - return string joined with 'and'

function formatWords(words){
  if (!words) return '';
  if (words.length === 0) return '';

  words = words.slice().filter(word => word.length !== 0);
  
  if (words.length === 1) return words[0];

  let lastWord = words.slice(words.length - 1);
  let firstWords = words.slice(0, words.length - 1);
  
  firstWords = firstWords.join(', ');
  lastWord.unshift(firstWords);
  
  return lastWord.join(' and ');
}
