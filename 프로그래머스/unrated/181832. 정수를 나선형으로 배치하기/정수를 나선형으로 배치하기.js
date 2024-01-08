function solution(n) {
    const move = [[0,1], [1,0], [0,-1], [-1,0]]
    const answer = Array.from({length: n}, (_) => Array(n).fill(0))
    
    i = 0; j = 0; dir = 0; value = 1;
    while(value <= n ** 2) {
      answer[i][j] = value
      let nextX = i + move[dir][0];
      let nextY = j + move[dir][1];
      if (nextX >= n || nextX < 0 || nextY >= n || nextY < 0 || answer[nextX][nextY] !== 0) {
          dir = (dir + 1) % 4;
          nextX = i + move[dir][0];
          nextY = j + move[dir][1];
      }   
      i = nextX;
      j = nextY;

      value++
    }
    return answer
}