// Problem
// Given a 2-dimensional 3x3 array perform a tic-tac-toe check. Return -1 if
// there is a 0 on the board. Return 1 if there are 3 1s in a row. Return 2
// if there's 3 2s in a row. Return 0 if it's a cat's game.
// input: array
// output: number
// data structure: array
// Algo:

// - create check column function
// - create parameters for board and player
// - iterate over array
// - if array at 0, i 1, i 2, i equal player return true
// - end loop return false

function checkColumn(board, player) {
  for (let i = 0; i < board[0].length; i++) {
   if (board[0][i] === player &&
       board[1][i] === player &&
       board[2][i] === player) return true;
  }
  return false;
}

// - Create check row function
// - Create parameters for board and player
// - iterate over board
// - if all markers in a row are player return true
// - return false

function checkRow(board, player) {
  return board.some(row => row.every(marker => marker === player));
}

// - Create function check diagonals
// - Create parameters for board and player
// - iterate over board
// - if all markers in diagonal are player return true
// - return false

function checkDiagonal(board, player) {
  if (board[1][1] !== player) return false;

  if (board[0][0] === player &&
      board[2][2] === player) return true;

  if (board[0][2] === player &&
      board[2][0] === player) return true;

  return false;
}

// - Creat check for winner function
// - Create parameters for the board and the player 
// - if one of the arrays is all the player return true
// - if a collumn is all a player return true
// - if diagonal elements are all player return true
// - return false


function isWinner(board, player) {
  if (checkColumn(board, player)) return true;
  if (checkRow(board, player)) return true;
  if (checkDiagonal(board, player)) return true;
  return false;
}


// - create check for unfinished game function
// - Create parameter for the board
// - check if any element is a 0 if it is return true 
// - return false

function isUnfinished(board) {
  return board.some(row => row.some(marker => marker === 0));
}

// - create main function
// - if check for winner passed 1 is true return 1
// - if check for winner passed 2 is true return 2
// - if check for unfinished game is true return -1
// - return 0


function isSolved(board) {
  if (isWinner(board, 1)) return 1;
  if (isWinner(board, 2)) return 2;
  if (isUnfinished(board)) return -1;
  return 0;
}