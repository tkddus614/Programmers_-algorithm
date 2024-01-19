function solution(d, budget) {
    let count = 0;
    d.sort((a,b) => a-b).reduce((acc, cur) => {
      if (acc + cur <= budget) {
        count++
      } 
    return acc + cur
    }, 0)
    return count
}