// Problem
// Given a string return the string between the first underscore and second 
// period
// Input: string
// Output: string
// Data Structure: just looping over a string
// Algo: 
// - create underscore count variable assign 0
// - create period count variable and assign 0
// - create result variable and assign wmpty string
// - iterate over given string
// - if current char period period count +1
// - if underscore count 1 or greater and period count less than two
// -   result += char
// - if current char underscore underscore count +1
// - End loop return result


class FileNameExtractor {
  static extractFileName (dirtyFileName) {
      let underscoreCount = 0;
      let periodCount = 0;
      let result = '';

      for (let i = 0; i < dirtyFileName.length; i++) {
        if (dirtyFileName[i] === '.') periodCount += 1;
        if (underscoreCount >= 1 && periodCount < 2) result += dirtyFileName[i];
        if (dirtyFileName[i] === '_') underscoreCount +=1;
      }
    
      return result;
  }
}