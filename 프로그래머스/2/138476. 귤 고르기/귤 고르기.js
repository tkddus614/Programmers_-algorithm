function solution(k, tangerine) {
    result = 0;
    const arr = {}
    tangerine.forEach((v) => {
      arr[v] = (arr[v] || 0) + 1
    })
  
    const sortedEntries = Object.values(arr).sort((a,b) => b - a)
    
    for (i = 0; i < sortedEntries.length; i++) {
      if (k <= 0) break;
      
      k -= sortedEntries[i]
      result++
    }
  
    return result
}