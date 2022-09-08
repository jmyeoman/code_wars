// Problem:
// Given a number representing seconds return the time in human readable string 'hh:mm:ss'
// Input: Number
// Output: String
// Data Structure: None/String manipulation
// Algo
// 1. Set seconds to remainder 60 of given number (timeInSexonds)
// 2. Set timeInMinutes to timeInSeconds divided by 60 with no float
// 3. set minutes equal to timeInMinutes remainder 60
// 4. Set timeInHours equal to timeInMinutes divided by 60 with no float
// 5. Interpolate hours, minutes, and seconds in single string padded with zeros to 2 digits
// 6. return string

function humanReadable (timeInSeconds) {
  let seconds = timeInSeconds % 60;
  let timeInMinutes = parseInt(timeInSeconds / 60);
  let minutes = timeInMinutes % 60;
  let hours = parseInt(timeInMinutes / 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}