function solution(n,a,b) {
    let answer = 0;
  
    while (a !== b) {
      a = Math.floor(a / 2) + (a % 2) 
      b = Math.floor(b / 2) + (b % 2)
      answer++
    }
  
    return answer
}