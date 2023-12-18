function solution(a, d, included) {
    return included.reduce((acc, cur, curIdx) => {
      if (cur) {
        acc += a + (d * curIdx)
      }
      return acc
    }, 0)
}