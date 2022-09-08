// Problem
// Given an array of strings return a number that represents the number of strings that
// are smiley faces
// Rules:
// 1. Empty array returns 0
// 2. All smiley faces have eyes that are ':' or ';' as their first character.
// 3. Smiley faces may have noses as second chars that are '-' or '~'
// 4. All smiley faces have a mouth that is a ')' or 'D'
// Input: array or strings
// Output: number
// Data Structure: array
// Algo:
// 1. create a count variable set to 0
// 2. guard clause for empty array
// 3. create valid traits object with nose eyes and mouth with array of options
// 4. iterate over array
// 5. guard clause for strings longer than 3 and shorter than 2
// 6. Create is Valid variable set to true
// 7. if first char doesn't include eyes isValid is false
// 8. if length 3 and second char doesn't include nose isValid is false
// 9. if length 3 and third char doesn't include mouth isValid is false
// 10. if length 2 and second char doesn't include mouth isValid is false
// 11. if isValid count += 1
// 12. return count

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length === 0) return 0;

  let count = 0;
  const validTraits = {eyes: [':', ';'], nose: ['-', '~'], mouth: [')', 'D']};

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.length < 2 || str.length > 3) continue;
    if (!validTraits.eyes.includes(str[0])) continue;
    if (str.length === 3 && !validTraits.nose.includes(str[1])) continue;
    if (str.length === 3 && !validTraits.mouth.includes(str[2])) continue;
    if (str.length === 2 && !validTraits.mouth.includes(str[1])) continue;
    count += 1;
  }
  return count
}