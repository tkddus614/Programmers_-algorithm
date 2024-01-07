function solution(a, b, c, d) {
    const max = Math.max(a,b,c,d)
    const min = Math.min(a,b,c,d)
    
    let maxCount = 0;
    let minCount = 0;
  
    const dices = [a,b,c,d]
    dices.forEach((v) => {
      if (v === max) {
        maxCount++
      } else if (v === min) {
        minCount++
      }
    })
    
    // 주사위 4개 값이 같을 때
    if (maxCount === 4) return 1111 * max
  
    // 주사위 3개의 값만 같을 때 두 유형
    if (maxCount === 3) return (10 * max + min)**2
    if (minCount === 3) return (10 * min + max)**2
  
    // 주사위가 2개씩 같은 값일 때
    if (maxCount === 2 && minCount === 2) return (max + min) * Math.abs(max - min) 
  
    // 주사위가 2개만 같고 나머지는 다를 때
    if (a === b) return c * d
    if (a === c) return b * d
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b
    if (a === d) return b * c
  
    // 주사위 4개 값이 다 다를 떄  
    return min
}