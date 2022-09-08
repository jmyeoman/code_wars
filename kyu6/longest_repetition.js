// BEST VERSION
// Problem
// Given a string return an array with the character and length of the character
// with the most consecutive repetitions. 
// Rules:
// 1. Empty string returns ['', 0]
// 2. Ties go to the first occurrence
// Input: string
// output: array
// Data Structure: array
// Algo:
// - Create last char variable not assigned a value
// - Create a count variable assigned 0
// - Convert string to array of single chars
// - Iterate over array using reduce
// - anonymous function for reduce
// - set previous value and current value parameters
// - function body:
// - if current value is same as last char variable count +1
// - else
// -   last char assigned current value
// -   count assigned 1
// - if count greater than index 1 of previous value 
// -   previous value index 0 assigned current value 
// -   previous value index 1 assigned count 
// - if current value doesn't equal last char 
// - return previous value
// - end function
// - initial value assigned ['', 0] 
// - return return value of reduce call

function longestRepetition(s) {
  let lastChar;
  let count = 0;

  return s.split('').reduce((pv, cv) => {
    if (cv === lastChar) {
      count++;
    } else {
      lastChar = cv;
      count = 1;
    }

    if (count > pv[1]) {
      pv[0] = lastChar;
      pv[1] = count;
    }
    return pv;
  }, ['', 0]);
}




// Problem
// Given a string return an array with the character and length of the character
// with the most consecutive repetitions. 
// Rules:
// 1. Empty string returns ['', 0]
// 2. Ties go to the first occurrence
// Input: string
// output: array
// Data Structure: Array/ object
// Algo:
// 1. guard clause for empty string
// 2. create variable for chars assigned empty object
// 3. create current char variable assigned to first char
// 4. create current count variable assigned 1
// 5. assign curent var property current count
// 5. create check object function
// 6. iterate over string starting at index 1
//    if current char equal to last char 
//      current count +1 continue
//    else
//        if object current char var truthy 
//          if current count greater than object value count
//            cur var property assigned current count
//        else 
//           cur var property assigned current count
//         current char var assigned current char
//         current count assigned 1
//   if last index 
//      if object current char var truthy 
//          if current count greater than object value count
//            cur var property assigned current count
//      else 
//           cur var property assigned current count
// 7. iterate over object converted to array with reduce
//    return longest and first char and count
// 8. return that char and count

/*
function longestRepetition(s) {
  if (s.length === 0) return ['', 0];
  let chars = {};
  let lastChar = s[0];
  let currentCount = 1;
  chars[lastChar] = currentCount;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === lastChar) {
      currentCount += 1;
    } else {
      checkObj(chars, lastChar, currentCount);
      lastChar = s[i];
      currentCount = 1;
    }

    if (i === s.length - 1) {
      checkObj(chars, lastChar, currentCount);
    }
  }
  
  return Object.entries(chars).reduce((pv, cv) => {
    if (cv[1] > pv[1]) {
      return cv;
    } else if (cv[1] === pv[1]) {
      if (s.indexOf(cv[0].repeat(cv[1])) < s.indexOf(pv[0].repeat(pv[1]))) {
        return cv;
      } else {
        return pv;
      }
    } else {
      return pv;
    }
  });
}



function checkObj(obj, lastChar, currentCount) {
  if (obj[lastChar]) {
    if (currentCount > obj[lastChar]) obj[lastChar] = currentCount;  
  } else {
    obj[lastChar] = currentCount;
  }
}

*/
// Initial attempt with misunderstanding that I was count the total occurences of a character
// Problem
// Given a string return an array with the char that occurs the most times
// and the number of times it occurs
// Rules:
// 1. string returns: ["", 0]
// 2. if two chars occur the smae number of times return the first
// 3. there is no upper case letters
// Input: string
// output: array
// Data Structure: Array and object
// Algo
// 1. Create char variable assigned empty object
// 2. iterate over string
// 3. if char is in object char value +1
// 4. else char property with 1 value assigned
// 5. create result array assigned empty array
// 7. iterate over object converted to array
// 8. sort from greatest value to least value
// 9. filter out properties with values that don't equal first value
// 10. if length of resulting array equals 1 then return that array
// 11. iterate over resulting array 
// 12. return array with lowest index found on original string
// 13. return resulting array

/*
function longestRepetition(s) {
  if (s.length === 0) return ['', 0];

  let chars = {};

  s.split('').forEach(char => {
    if (chars[char]) {
      chars[char] += 1
    } else {
      chars[char] = 1
    }
  });

  chars = Object.entries(chars).sort((a, b) => b[1] - a[1]);

  chars = chars.filter(property => property[1] === chars[0][1]) 

  if (chars.length = 1) return chars[0];

  return chars.reduce((pv, cv) => {
    if (s.indexOf(pv[0]) > s.indexOf(cv[0])) return cv;
    return pv;
  });
}
*/

// Alternative to sort
// 1. convert object to array
// 2. iterate over new array
// 3. if value of current property greater than value of previous property
// 4. return current property
// 5. else if value of current property is equal to value of previous property
//   if index of current key less than index of previous key return current
//   current property
//   else return previous property
// 6. else return previous property

/*
function longestRepetition(s) {
  if (s.length === 0) return ['', 0];

  let chars = {};

  s.split('').forEach(char => {
    if (chars[char]) {
      chars[char] += 1
    } else {
      chars[char] = 1
    }
  });

 return mySortAndFind(s, chars)
}

function mySortAndFind(str, obj) {
  let chars = Object.entries(obj);
  return chars.reduce((pv, cv) => {
    if (cv[1] > pv[1]) {
      return cv;
    } else if (cv[1] === pv[1]) {
      if (str.indexOf(cv[0]) < str.indexOf(pv[0])) {
        return cv;
      } else {
        return pv;
      }
    } else {
      return pv;
    }
  });
}
*/