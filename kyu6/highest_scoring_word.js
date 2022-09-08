// Problem:
// Given a string of words return the word with the highest score where each word gets
// points from each letter in it according to its place in the alphabet.
// Rules:
// 1. All inputs valid
// 2. All lowercase
// Input: string
// Output: string
// Data Structure: Array and Object
// Algo:
// 1. Create an object with all the letter scores
// 2. create an empty variable with highest scoring word and it's score set to zero
// 3. Create current score variable set to 0
// 3. Split string into words Array
// 4. iterate over words 
// 5. current score set to zero
// 6. iterate over chars in word
// 7. add current chars score to current score
// 8. END iteration over chars
// 9. If current score is higher than highest score 
//    highest scoring set to current word and current score
// 10. return word from highest score

function high(str){
  let points = { a: 1,
                 b: 2,
                 c: 3,
                 d: 4,
                 e: 5,
                 f: 6,
                 g: 7,
                 h: 8,
                 i: 9,
                 j: 10,
                 k: 11,
                 l: 12,
                 m: 13,
                 n: 14,
                 o: 15,
                 p: 16,
                 q: 17,
                 r: 18,
                 s: 19,
                 t: 20,
                 u: 21,
                 v: 22,
                 w: 23,
                 x: 24,
                 y: 25,
                 z: 26,
  };
  
  let highestScore = ['', 0];
  let currentScore = 0;

  let wordArr = str.split(' ');

  for (let i = 0; i <  wordArr.length; i++) {
    let chars = wordArr[i].split('');

    currentScore = chars.reduce((pv, cv) => pv += points[cv], 0);

    if (currentScore > highestScore[1]) {
      highestScore[0] = wordArr[i];
      highestScore[1] = currentScore;
    }
    
    currentScore = 0;
  }
  return highestScore[0];
  
}