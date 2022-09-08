const ALPHA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function presses(phrase) {
  let result = 0;
  
  for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i];
    if (isLetter(char)) {
      result += (ALPHA.indexOf(char.toLowerCase())) % 3;
      result += 1;
    } else if (isNumber(char)) {
      result += 4
    }
  }

  return result;
}

function isLetter(char) {
  return (char >= 'A' && char <= 'Z')  || (char >= 'a' && char <= 'z');
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}