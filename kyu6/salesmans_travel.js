// Problem
// Given 2 strings one representing a list of addresses and one representing a
// zipcode return a string starting with the zipcode given followed by the 
// streets in that zip code followed by the street numbers
// Input: two strings
// Output: string
// Data Structure: Object, array
// Algo
// - Create create objects function
// - create result variable assigned empty array
// - iterate over given string and seperate by commas into an array
// - iterate over resulting array 
// - iterate over and separate into array of substrings delimited by ' '
// - create empty object named house
// - house property number assigned array[0]
// - create street variable assigned copy of array from 1 to -2 
// - join street into single string delimited by spaces
// - house property street assigned street
// - create statezipcode variable assigned copy of array from -2 to end
// - join statezipcode into string delimited by  spaces
// - result adds housekey object
// - end iterations
// - return result array

function createArrOfObjs(r) {
  let result = [];
  let arrOfAdd = r.split(',');

  for (let i = 0; i < arrOfAdd.length; i++) {
    let address = arrOfAdd[i].split(' ');
    let house = {};
    house['number'] = address[0];
    house['street'] = address.slice(1, address.length - 2).join(' ');
    house['stateZipCode'] = address.slice(address.length - 2).join(' ');
    result.push(house);
  }
  return result;
}

// - Main function
// - iterate over array result from passing str1 to create objects function
// - filter out elements that don't have the same statezipcode as str2
// - if resulting array length 0 return statezipcode concatenated to ':/'
// - create streets variable assigned first street
// - iterate over filtered array and add a comma each street starting at 1
// - add each street
// - create numbers variables assigned the first number
// - iterate over filtered array assign a comma and each number starting at 1
// - add each number
// - return a string with zipcode + : + streets + / + numbers

function travel(r, zipcode) {
  let addresses = createArrOfObjs(r);
  addresses = addresses.filter(house => house.stateZipCode === zipcode)
  if (addresses.length === 0) return zipcode + ':/';
  let streets = addresses[0]['street'];
  
  for (let i = 1; i < addresses.length; i++) {
    streets += ',';
    streets += addresses[i]['street'];
  }

  let numbers = addresses[0]['number'];

  for (let i = 1; i < addresses.length; i++) {
    numbers += ',';
    numbers += addresses[i]['number'];
  }

  return zipcode + ':' + streets + '/' + numbers;
}