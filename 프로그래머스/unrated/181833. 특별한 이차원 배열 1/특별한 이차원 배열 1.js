function solution(n) {
  const answer = [];
  for (let i=0; i<n; i++) {
    answer.push(Array(n).fill(0))
  }
  for (let i=0; i<n; i++) {
    answer[i][i] = 1
  }
  return answer;
}