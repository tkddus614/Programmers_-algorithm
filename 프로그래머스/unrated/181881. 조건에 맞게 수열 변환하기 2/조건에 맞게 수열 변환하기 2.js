function solution(arr) {
    let x = 0;
    let prev = [...arr]  
  
    while (true) {
      const next = prev.map((v) => {
        if (v >= 50 && v % 2 === 0) {
          return v / 2
        } else if (v < 50 && v % 2 !== 0) {
          return v * 2 + 1
        }
        return v
      })
      
      const equal = JSON.stringify(prev) === JSON.stringify(next)
      if(equal) break;
      prev = next
      x++
      
    }
    return x
}