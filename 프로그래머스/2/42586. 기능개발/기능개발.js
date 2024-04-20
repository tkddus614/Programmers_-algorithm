function solution(progresses, speeds) {
    const totalSchedule = []
    
    for (i = 0; i < progresses.length; i++) {
      totalSchedule.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
  
    let maxDay = totalSchedule[0]
    let count = 0;
    const result = []
    
    for (i = 0; i < totalSchedule.length; i++) {
      if (maxDay >= totalSchedule[i]) {
        count++
      } else {
        result.push(count)
        count = 1
        maxDay = totalSchedule[i]
      }
    }
    result.push(count)
  
    return result
}