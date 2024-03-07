function solution(A,B){
    const sortA = A.sort((a, b) => a - b)
    const sortB = B.sort((a, b) => b - a)
    
    return sortA.reduce((acc, cur, curIdx) => {
      return acc + cur * sortB[curIdx]
    }, 0)
}