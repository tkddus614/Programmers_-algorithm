function solution(n, m, section) {
  let answer = 0;
  const wall = Array(n).fill(true)
  
  section.forEach((v) => {
    wall[v - 1] = false
  })
    
  section.forEach((v, i) => {
    if (wall[v - 1] === false) {
      for (i=0; i<m; i++) {
        wall[v - 1 + i] = true
      }
      answer += 1
    }
  })
  
  return answer
}