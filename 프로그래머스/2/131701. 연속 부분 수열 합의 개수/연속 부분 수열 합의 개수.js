function solution(elements) {
    const temp = [] 
  
    for (i = 1; i <= elements.length; i++) {
      for (j = 0; j < elements.length; j++) {
        let value = elements.slice(j, i + j)
        
        if (j + i > elements.length) {
          value = [...value, ...elements.slice(0, i + j - elements.length)]
        }
        
        temp.push(value.reduce((acc, cur) => acc + cur))
      }
    }
  
    return [...new Set(temp)].length
}