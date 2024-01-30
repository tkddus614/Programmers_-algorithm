function solution(k, score) {
    const result = score.reduce((acc, cur) => {
      acc.award.push(cur)
      if (acc.award.length > k) {
        acc.award = acc.award.sort((a,b) => b - a)
        acc.award.pop()
      }
      acc.minor.push(Math.min(...acc.award))
      return acc
    }, { award: [], minor: []})
    return result.minor
}