function solution(players, callings) {
  
  const playerPositions = new Map();
  for (let i = 0; i < players.length; i++) {
    playerPositions.set(players[i], i);
  }
  
  for (const currentPlayer of callings) {    
    const currentIndex = playerPositions.get(currentPlayer);

    // 현재 플레이어가 첫 번째가 아닐 때
    if (currentIndex > 0) {
      const previousIndex = currentIndex - 1;
      const previousPlayer = players[previousIndex];

      players[currentIndex] = previousPlayer;
      players[previousIndex] = currentPlayer;

      playerPositions.set(currentPlayer, previousIndex);
      playerPositions.set(previousPlayer, currentIndex);
    }
  }

  return players;
}
