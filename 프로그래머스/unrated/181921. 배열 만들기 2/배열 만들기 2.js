function solution(l, r) {
    const result = [];
    for (i=l; i<=r; i++) {
      if (i % 5 === 0) {
        if ([...i.toString()].every((v) => v.includes('5') || v.includes('0'))) {
          result.push(i)
        }
      }
    }
  return result.length ? result : [-1]
}