// Problem
// Given a string with names separated by ; and first and last names separated by : return 
// a new string with names capiatalized in alphabetical order by last name then first name
// then joined together in parentheses with names separated by commas. 
// Input: string
// Output: string
// Data Structure: Array
// Algo:
// Example: 'john:smith;martin:black' to '(Black,Martin)(Smith,John)'
// 1. Separate into array of names by ';'
// 2. Transform and then separate into subarrays of first and last name by ':'
// 3. Transform and flip first and last name
// 4. Transform and capitalize first and last names
// 5. Sort by last name then by first name
// 6. Create result string
// 7. iterate over array and add each element separated by comma and between parentheses to
// the result string
// 8. return result string.


function meeting(str) {
  let resultStr = '';

  let strArr = str.split(';')
                  .map(names => names.split(':'))
                  .map(subArr => {
                    let firstName = subArr[0].toUpperCase();
                    let lastName = subArr[1].toUpperCase();

                    return [lastName, firstName];
                  });

  strArr.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (a[0] === b[0]) {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] < b[1]) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  strArr.forEach(name => {
    resultStr += `(${name[0]}, ${name[1]})`;
  });
  
  return resultStr;
}
