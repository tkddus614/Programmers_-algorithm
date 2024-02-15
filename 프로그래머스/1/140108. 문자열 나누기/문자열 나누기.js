function solution(s) {
    let result = 0;

    let xSameCount = 0;
    let ySameCount = 0;
    let str;
  
    [...s].forEach((v) => {
      if (!str) {
        str = v
        xSameCount++
      } else if (str === v) {
        xSameCount++
      } else {
        ySameCount++
      }
      
      if (xSameCount === ySameCount) {
        xSameCount = 0;
        ySameCount = 0;
        str = undefined;
        result++
      } 
    })
  
    if (xSameCount !== 0 || ySameCount !== 0) result++

    return result;
}