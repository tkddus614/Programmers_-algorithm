function solution(citations) {
    let answer = 0
    const sortedCitations = citations.sort((a,b) => b - a)
    
    const arr = []
    
    for (i = 0; i < sortedCitations.length; i++) {
      arr.push(sortedCitations[i])
      if (sortedCitations[i] < arr.length) {
        break
      }
      answer++
    }
    
    return answer
}
