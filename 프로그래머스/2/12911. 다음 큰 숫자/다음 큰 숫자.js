function solution(n) {
    let num = n + 1
    const binaryCount = (string) => string.toString(2).split('').reduce((acc, cur) => {
      if (cur === '1') acc += 1
      return acc
    }, 0)
        
    while(num) {
      if (binaryCount(n) === binaryCount(num)) {
        return num
        break;
      }
      num++
    }
}