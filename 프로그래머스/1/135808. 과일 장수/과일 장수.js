function solution(k, m, score) {
    const result = []
    const sortedArr = score.sort((a,b) => b - a)
    
    for (i=0; i<sortedArr.length;i+=m) {
      result.push(sortedArr.slice(i, i+m))
    }
  
    const filteredArr = result.filter((v) => v.length === m)
  
    return filteredArr.reduce((acc, cur) => {
      return acc += (cur[cur.length -1] * cur.length)
    }, 0)
}