// Problem
// Given a string check that it's correctly in the form of a phone number '(000) 000-0000'
// Input: string
// Output: boolean
// Data Structure: none
// Algo:
// 1. Guard clause for length 14
// 2. create numbers right position function
// 3. iterate over string
// 4. If index is 0 check for parenthesis continue or return
// 5. if index is 4 check for closing parentheses continue or return
// 6. if index is 5 check for space continue or return
// 7. if index is 9 check for hyphen continue or return
// 8. if char is not number return false
// 9. end loop and return true 

function validPhoneNumber(phoneNumber){
  if (phoneNumber.length !== 14) return false;

  for (let i = 0; i < phoneNumber.length; i++) {
    let char = phoneNumber[i];
    if (i === 0) {
      if (char !== '(') return false;
      continue;
    }
    if (i === 4) {
      if (char !== ')') return false;
      continue; 
    }
    if (i === 5) {
      if (char !== ' ') return false;
      continue;
    }
    if (i === 9) {
      if (char !== '-') return false;
      continue;
    }

    if (char < 0 || char > 9) return false;
  }

  return true;
}