function solution(participant, completion) {
    const map = new Map();
    let result;
    
    participant.forEach((v) => {
      if (map.has(v)) {
         map.set(v, map.get(v) + 1)
      } else {
        map.set(v, 1)
      }
    })
    
    completion.forEach((v) => {
      map.set(v , map.get(v) - 1)
    })  
    
    map.forEach((v, i) => {
      if (v === 1) {
        result = i
      }
    })
  
    return result
  
}