//Problem:
// Given a number, n, print a successive set of lines n number of times starting with 
// 1 asterisk in the middle and then adding 2 asterisks on each print keeping them centered
// Input: number
// Output: Print
// Algo:
// 1. Function to determine the base of the print pyramid- n - 1 * 2 + 1
// 2. Create count and set to 0 
// 3. While count less than nFloors
// 4. let each side = count - 1
// 5. let spaces equal n - 1 - each side
// 6. Print spaces number of spaces + eachSide number of asterisks + 1 asterisk
//   plus each side number of asterisks + spaces number of spaces
// 7. count += 1
// 

function towerBuilder(nFloors) {
  
  let count = 1;
  let resultArr = [];

  while (count <= nFloors) {
    let asterisksOnASide = count - 1;
    let spacesOnASide = nFloors - 1 - asterisksOnASide;
    
    asterisksOnASide = '*'.repeat(asterisksOnASide);
    spacesOnASide = ' '.repeat(spacesOnASide);

    resultArr.push(spacesOnASide + asterisksOnASide + '*' + asterisksOnASide + spacesOnASide);

    count += 1;
  }

  return resultArr;
}
