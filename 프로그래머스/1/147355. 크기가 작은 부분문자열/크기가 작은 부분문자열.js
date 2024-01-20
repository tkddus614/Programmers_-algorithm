function solution(t, p) {
    const result = []
    for (i = 0; i < t.length; i++) {
      result.push(t.slice(i, i + p.length))
    }
    return result.filter((v) => v.length === p.length && +v <= +p).length
}