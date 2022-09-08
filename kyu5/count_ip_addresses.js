// Given two string that represents an ip address return the number of addresses between them.
// Rules: 
// 1. 4 spots in ip address 
// 2. Delimited by periods
// 3. Longer address will always be second
// must handle large numbers
// Input: string
// Output: number
// Algo:
// 1. Seperate the strings into an array delimitted by periods
// 2. transform the arrays of strings to numbers 
// 3. Create a total1 and total2 variables set to 0
// 4. Iterate over arrays
// 5. if number is the same contunue
// 6. 