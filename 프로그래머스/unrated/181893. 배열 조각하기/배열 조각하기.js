function solution(arr, query) {
    let answer = arr; 
  
    query.forEach((v, i) => {
      if (i % 2 === 0) {
        answer = answer.slice(0, v + 1)
      } else {
        answer = answer.slice(v)
      }
    })
    return answer
}