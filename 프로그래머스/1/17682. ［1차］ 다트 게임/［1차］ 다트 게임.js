function solution(dartResult) {
    let result = []
    
    let pattern = /(\d+|\D)/g;
    let matchArr = dartResult.match(pattern); 
    
    for (i = 0; i < matchArr.length; i++) {
      if (matchArr[i] === 'S') {
        result.push(matchArr[i-1] ** 1)
      }
      if (matchArr[i] === 'D') {
        result.push(matchArr[i-1] ** 2)
      }
      if (matchArr[i] === 'T') {
        result.push(matchArr[i-1] ** 3)
      }
      if (matchArr[i] === '*') {
        result[result.length - 1] *= 2
        result[result.length - 2] *= 2
      }
      if (matchArr[i] === '#') {
       result[result.length - 1] = -result[result.length - 1]
      }
    }
      
    return result.reduce((acc, cur) => acc + cur)
}