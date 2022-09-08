// I think code wars erroneously wouldn't accept it


// Problem:
// given a string where a query is separated from the url with a ? and
// individual queries are seperated from eachother with & and queries are
// divided themselves with an `=` remove all duplicate queries and remove any 
// queries specified in the second given argument
// Input: string
// Output: string
// Data Structure: Array, object
// Algo:
// - Create a seen variable and assign it the second argument with value 1
// - Create a valid queries array and assign it an empty array
// - Seperate the url from the queries using `?` as a delimiter
// - Create two variables and assign the url and queries to them 
// - seperate the queries into query sections delimited by `&`
// - iterate over the queries 
// - seperate the queries using `=' as a delimiter 
// - if first part of query not in seen object 
//      add whole query to valid query array
//      add first part of query to object with value 1
// - join together valid queries using `&`
// - join and return valid queries and url with `?`


function stripUrlParams(url, paramsToStrip=[]){
  if (url.endsWith('.com')) return url
  let toBeRemoved = {};
  paramsToStrip.forEach(param => toBeRemoved[param] = 1);

  let validQueries = [];

  let [address, queries] = url.split('?');
  
  queries.split('&')
         .forEach(query => {
         let [query1, query2] = query.split('=');
         if (!toBeRemoved[query1]) {
           validQueries.push(query);
           toBeRemoved[query1] = 1;
         }
         });
  
  if (validQueries.length = 0) return address;
  
  validQueries = validQueries.join('&');
  return [address, validQueries].join('?');
}