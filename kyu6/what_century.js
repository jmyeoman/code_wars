// Problem:
// Given a 4 digit number representing a year return a string indicating the 
// century the year is in 
// Input: string
// Output: string
// Data Structure: Array
// Algo:
// - coerce string to number
// - if number remainder 100 does not equals 0 add 100 to year
// - coerce year to string of only the first two digits
// - if the second char is a '1'  and first isn't '1' add 'st' to year
// - is '2' and first isn't '1' add 'nd' to year
// - is '3' and first isn't '1' add 'rd' to year
// - else add 'th' to year
// - return year



function whatCentury(year) {
  year = Number(year)
  if (year > 9900 && year < 10000) return '100th';
  if (year % 100 !== 0) year += 100;
  year = String(year).slice(0, 2);
  
  if (year[1] === '1' && year[0] !== '1') { 
    year += 'st';
  } else if (year[1] === '2' && year[0] !== '1') {
    year += 'nd';
  } else if (year[1] === '3' && year[0] !== '1') {
    year += 'rd'
  } else {
    year += 'th';
  }
  return year;
}
