// Problem:
// Given a string of numbers separated by at least one space return 
// an ordered string of numbers according to the least to greatest
// sum of digits
// Rules:
// 1. May have trailing or leading white spaces.
// Input: String
// Output: String
// Data Structure: Array, Object
// Algo
// 1. 
// 2. Create sum object 
// 3. Trim and split string into array of number chars
// 4. Iterate over number array
// 5. On each iteration assign the value of the digits added together to the sum object with number property
// 6. Split sum object into array of entries
// 7. Sort array of entries based on smallest to largest value
// 8. Transform array into array of just the properties (initial numbers)
// 9. Join array into string and return it





function orderWeight(str) {
  if (str === '') return str;
  
  let sumArr = [];
  
  let numArr = str.trim().split(' ');
  
  for (let i = 0; i < numArr.length; i++) {
    let digitArr = numArr[i].split('');
    
    if (digitArr.length === 1) {
      sumArr.push([numArr[i], Number(numArr[i])]);
    } else {
      let sum = digitArr.reduce((pv, cv) => Number(pv) + Number(cv));
      sumArr.push([numArr[i], sum]);
    }
  }
  
  
  sumArr = sumArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return sortEqual(a[0], b[0]);
    } else {
      return a[1] - b[1];
    }
  });
  
  sumArr = sumArr.map(element => element[0]);
  
  return sumArr.join(' ');
}

function sortEqual(a, b) {
  for (let i = 0; i < isLonger(a, b); i++) {
    if (a[i] === undefined) return -1;
    if (b[i] === undefined) return 1;
    
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  
  return 0;
}

function isLonger(a, b) {
  if (a.length > b.length) {
    return a.length;
  } else {
    return b.length;
  }
}

/*

console.log(sortEqual('1', '1')) // 0
console.log(sortEqual('12', '1')) // 1
console.log(sortEqual('1', '133')) // -1
console.log(sortEqual('556', '557'))// -1
console.log(sortEqual('337', '336'))// 1

*/
 console.log(orderWeight(' 123 2 2 11 44 224 '));