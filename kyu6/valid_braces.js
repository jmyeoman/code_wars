// Problem:
// Check a string for valid braces.
// Rules:
// 1. If a brace opens it must not close before subsequent brace opens and closes
// 2. A brace is valid if there are a pair of opening and closing braces. 
// Input: string
// Output: boolean
// Data Structure: Array
// ({[}])
// [, {, (,
// Algo:
// 1. Create pairs Array
// 2. Loop over string
// 3. Case an opening brace add brace to beginning of Array
// 4. case a closing brace
//    Find corresponding opening brace in array.
//       IF none return false
//       If not first element return false
//       else remove element
// 5. End Loop
// 6. if pairs array empty return true


function validBraces(braces){
  let pairsArr = [];

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
      pairsArr.unshift(braces[i]);
      continue;
    }
    
    switch (braces[i]) {
      case '}':
        if (illegalBrace('{', pairsArr)) return false;
        pairsArr.shift();
        break;
      case ']':
        if (illegalBrace('[', pairsArr)) return false;
        pairsArr.shift();
        break;
      case ')':
        if (illegalBrace('(', pairsArr)) return false;
        pairsArr.shift();
        break;
    }
  }
  return pairsArr.length === 0;
}

function illegalBrace(brace, arr) {
  let braceIndex = arr.indexOf(brace);
  if (braceIndex !== 0) return true;
}