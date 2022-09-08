// order according to the number in each word.
// Input: string
// Output: string
// Data Structure: Array
// Algo
// 1. Split the string into an array of words
// 2. Create a result array
// 3. iterate over the array
// 4. Create a order number variable
// 5. On each iteration iterate again through the characters of the word
// 6. If character is a number the order number equals that number
// 7. stop iterating through the chars
// 8. Set result array at index order number minus 1 and assign it the word
// 9. End iterating through words
// 10. Return array joined to a string delimited by spaces. 


function order(words){
  let resultArr = [];
  words = words.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    let orderNum;
    
    for (let i2 = 0; i2 < words[i].length; i2++) {
      if (!Number.isNaN(Number(words[i][i2]))) {
          orderNum = Number(words[i][i2]);
          }
    }
    
    resultArr[orderNum - 1] = words[i];
  }
  
  return resultArr.join(' ');
}