

function anagrams(word, words) {
  let word1Arr = word.split('').sort();
  let resultArr = [];
  
  for (let i = 0; i < words.length; i++) {
    let word2Arr = words[i].split('').sort();
    
    if (arrEqualsArr(word1Arr, word2Arr)) {
      resultArr.push(words[i]);
    }
  }
  return resultArr;
}

function arrEqualsArr(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every((char, index) => {
    return char === arr2[index];
  })
  
  
}

let arr1 = ['a','b', 'c'];

let arr2 = ['b', '', 'c'];

let arr3 = ['a']

let arr4 = ['d', 'a', 'b']

console.log(anagrams('aabbcc', ['ababcc', 'aaaa', 'cccaaa', 'abcabc']))