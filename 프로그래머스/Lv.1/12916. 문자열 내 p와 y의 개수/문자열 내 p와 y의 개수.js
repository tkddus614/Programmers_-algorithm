function solution(s) {
   const pCount = s.length - s.replaceAll(/p/gi, '').length
   const yCount = s.length - s.replaceAll(/y/gi, '').length
   return pCount - yCount === 0
}