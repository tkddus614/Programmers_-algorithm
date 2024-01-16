function solution(left, right) {
    let initial = left;
    let total = 0;
    while (initial <= right) {
      const result = []
      for (let i = 1; i <= initial; i++) {
        if (initial % i === 0) result.push(i)
      }
      if (result.length % 2 === 0) {
        total += initial
      } else {
        total -= initial
      }
      initial++
    }
  return total
}