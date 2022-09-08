// Problem
// Given an array of objects each with an 'age' property return true if there if 
// there is at least one age from every decade from 10-100
// Input: array of objects
// Output: boolean
// Data Structure: array/object
// Algo:
// - create an decades object with a property for each decade and 100 with
//   value 0
// - iterate over objects in array
// - transform each object to just the age
// - iterate over ages if age is within a decade subtract 1 from the 
//   relevant decade property
// - if ever age in decades object is below zero return true else false


function isAgeDiverse(list) {
  let decades = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 
    6: 0, 7: 0, 8: 0, 9: 0, 10: 0} 
  
  let ages = list.map(obj => obj['age'])
                 .filter(age => age < 100 && age > 9)
                 .map(age => String(age)[0]);
  
  
  if (list.some(obj => obj['age'] > 99)) decades['10'] += 1;
      
  ages.forEach(age => decades[age] += 1);

  return Object.values(decades).every(count => count > 0);

}