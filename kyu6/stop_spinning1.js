function spinWords(string){
  let arrayOfWords = string.split(' ')
  let newArray = []
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length >= 5) {
      newArray.push(arrayOfWords[i].split('').reverse().join(''))
    } else {
    newArray.push(arrayOfWords[i])
    }
  }
  return newArray.join(' ')
}

console.log(spinWords('Stop gninnipS My sdroW!'))