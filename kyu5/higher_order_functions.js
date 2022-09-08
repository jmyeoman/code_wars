// Higher order functions: my work-around


function zero(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 0 - operation[1];
      case 'times': return 0 * operation[1];
      case 'plus': return 0 + operation[1];
      case 'dividedBy': return parseInt(0 / operation[1])
    }
  }
  return 0;
}
function one(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 1 - operation[1];
      case 'times': return 1 * operation[1];
      case 'plus': return 1 + operation[1];
      case 'dividedBy': return parseInt(1 / operation[1])
    }
  }
  return 1;
}
function two(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 2 - operation[1];
      case 'times': return 2 * operation[1];
      case 'plus': return 2 + operation[1];
      case 'dividedBy': return parseInt(2 / operation[1])
    }
  }
  return 2;
}

function three(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 3 - operation[1];
      case 'times': return 3 * operation[1];
      case 'plus': return 3 + operation[1];
      case 'dividedBy': return parseInt(3 / operation[1])
    }
  }
  return 3;
}
function four(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 4 - operation[1];
      case 'times': return 4 * operation[1];
      case 'plus': return 4 + operation[1];
      case 'dividedBy': return parseInt(4 / operation[1])
    }
  }
  return 4
}
function five(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 5 - operation[1];
      case 'times': return 5 * operation[1];
      case 'plus': return 5 + operation[1];
      case 'dividedBy': return parseInt(5 / operation[1])
    }
  }
  return 5;
}
function six(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 6 - operation[1];
      case 'times': return 6 * operation[1];
      case 'plus': return 6 + operation[1];
      case 'dividedBy': return parseInt(6 / operation[1])
    }
  }
  return 6;
}
function seven(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 7 - operation[1];
      case 'times': return 7 * operation[1];
      case 'plus': return 7 + operation[1];
      case 'dividedBy': return parseInt(7 / operation[1])
    }
  }
  return 7;
}
function eight(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 8 - operation[1];
      case 'times': return 8 * operation[1];
      case 'plus': return 8 + operation[1];
      case 'dividedBy': return parseInt(8 / operation[1])
    }
  }
  return 8;
}
function nine(operation) {
  if (operation) {
    switch (operation[0]) {
      case 'minus': return 9 - operation[1];
      case 'times': return 9 * operation[1];
      case 'plus': return 9 + operation[1];
      case 'dividedBy': return parseInt(9 / operation[1])
    }
  }
  return 9
}

function plus(num) {
  return ['plus', num];
}
function minus(num) {
  return ['minus', num];
}
function times(num) {
  return ['times', num];
}
function dividedBy(num) {
  return ['dividedBy', num];
}