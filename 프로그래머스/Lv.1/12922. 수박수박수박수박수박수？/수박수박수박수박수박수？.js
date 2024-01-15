function solution(n) {
  return Array.from({length: n}, (v,i) => i % 2 ? v = '박' : v = '수').join('')
}