function solution(number, limit, power) {
    const arr = Array(number).fill(0).map((_,i) => i + 1)
    
    return arr.map((v) => {
      let num = 0;
      for (i=1; i<Math.sqrt(v);i++) {
         if(v % i === 0) num++
      }
      num = num * 2 + Number.isInteger(Math.sqrt(v))
      return limit < num ? power : num
    }).reduce((acc, cur) => acc + cur)
}