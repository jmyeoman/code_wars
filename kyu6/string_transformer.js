// Problem
// Given a string return that string with uppercase and lowercase switched and
// order of words reversed
// Input: string
// Output: string
// Data Structure: array
// Algo:
// - seperate chars into array 
// - transform lowercase to uppercase and uppercase to lowercase
// - Join all chars back together in single string
// - separate string into array of words (delimited by single space)
// - reverse words in array
// - join array back into string and return into

function stringTransformer(str) {
  return str.split('')
            .map(char => reverseCase(char))
            .join('')
            .split(' ')
            .reverse()
            .join(' ')
}

function reverseCase(char) {
  return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
}