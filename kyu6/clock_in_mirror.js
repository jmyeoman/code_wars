// Problem
// Given a string representing the time return the time as a string that it
// would be if a clock was seen from behind with the given time. 
// Input: string
// Problem
// Given a string representing the time return the time as a string that it
// would be if a clock was seen from behind with the given time. 
// Input: string
// Output: string
// Data Structure: Object
// Algo: 
// - create an object with all the pairs of opposite hours
// - separate the string into hours and minutes 
// - return the value for the matching hour and the minutes subtracted from 60
// separated by a colon 

function WhatIsTheTime(timeInMirror) {
  const HOURS_PAIR = {'11': '12', '10': '01', '09': '02', '08': '03', 
                      '07': '04', '06': '05', '12': '11', '01': '10', 
                      '02': '09', '03': '08','04': '07', '05': '06'}
  
  let hours = timeInMirror.slice(0, 2);
  let minutes = timeInMirror.slice(3, 5);
  
  if (Number(minutes) === 0) {
    hours = String(Number(hours) - 1).padStart(2, '0');
  }

  return HOURS_PAIR[hours] + ':' + String((60 - Number(minutes)) % 60).padStart(2, '0');
}
