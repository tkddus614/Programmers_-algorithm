function solution(priorities, location) {
    const queue = []
    
    for (let i = 0; i < priorities.length; i++) {
        queue.push([priorities[i], i]);
    }
  
    let order = 0
  
    while(true) {
      let target = queue.shift()
          
      if (queue.some((v) => target[0] < v[0])) {
        queue.push(target)
      } else {
        order++
        if (target[1] === location) {
          return order
        }
      }
    }
}