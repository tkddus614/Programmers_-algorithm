function solution(board, moves) {
  const result = []
  let count = 0;
  
  for (let i = 0; i < moves.length; i++) {
    let column = moves[i] - 1; 
    
    for (let j = 0; j < board.length; j++) {
      if (board[j][column] !== 0) { 
        result.push(board[j][column])
        board[j][column] = 0;
        break;
      }
    }
  }
  
  let i = 0;
  while (i < result.length - 1) {
    if (result[i] === result[i + 1]) {
      result.splice(i, 2);
      count += 2;
      i = 0;
    } else {
      i++;
    }
  }
  return count
}