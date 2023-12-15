function solution(strArr) {
    const arr = strArr.map((v) => v.length)
    const result = {};
    arr.forEach((v) => {
      result[v] = (result[v] || 0) + 1
    })
    return Math.max(...Object.values(result))
}