// Problem:
// Given a string of characters return an array of each character in order but without any repeating chars in the sequence.
// Rules:
// 1. Case-insensitive
// 2. Will be a string
// Input: string
// Output: array
// Algo:
// 1. Create result array
// 2. Iterate over string
// 3. IF first letter push to array continue
// 4. ELSE IF letter equals previous letter push to array
// 5. Return array



var uniqueInOrder=function(iterable){
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      result.push(iterable[i]);
    } else if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
}
 