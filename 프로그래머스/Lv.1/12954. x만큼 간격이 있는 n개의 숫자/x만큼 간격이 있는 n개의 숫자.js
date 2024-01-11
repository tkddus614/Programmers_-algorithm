function solution(x, n) {
  return Array(n).fill().map((v, i) => i * x + x)
}