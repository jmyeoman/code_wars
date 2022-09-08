// Problem
// Given a stock list of letters and a code in string form beginning with the stock list
// letter and ending with the number return a string with all the numbers of codes with 
// the same letter in the stock list summed together in the following format;
// '(A : 20) - (B : 1)'
// Input: Two arrays of strings
// Output: string
// Data Structure: Array and Object
// Algo: 
// 1. Create getCat function
//   a. Pass the code to the function
//   b. return the first letter of the code
// 2. Create getNum function
//   a. Pass the code to the function
//   b. Split the code into code and number
//   c. return number coerced to number
// 3. Create result array set to empty
// 4. Create list Obj and set empty
// 5. iterate over categories and add to obj as keys with 0 value
// 6. iterate over listOfArt
// 7. getCat for the code 
// 8. if listOfCat doesn't include Cat continue
// 9. getNum of code
// 10. cat in obj += num
// 11. End loop
// 12. iterate over catObj
// 13. push to result array the cat and num in format '(cat : num)'
// 14. return array joined as string delimited by ' - '

function getCat(code) {
  return code[0];
}

function getNum(code) {
  let codeArr = code.split(' ');
  return Number(codeArr[1]);
}

function stockList(listOfArt, listOfCat){
  if (!listOfArt || !listOfCat) return '';
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';
  
  let resultArr = [];
  let catCount = {};

  listOfCat.forEach(cat => catCount[cat] = 0);

  for (let i = 0; i < listOfArt.length; i++) {
    let code = listOfArt[i];
    let cat = getCat(code);
    let num = getNum(code);

    if (!listOfCat.includes(cat)) continue;
    
    catCount[cat] += num;
  }

  for (let cat in catCount) {
    resultArr.push(`(${cat} : ${catCount[cat]})`);
  }

  return resultArr.join(' - ');
}