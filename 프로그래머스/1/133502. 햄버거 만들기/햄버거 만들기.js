function solution(ingredient) {
  let result = 0;
  const wrap = '1231'
  const temp = []
  
  for (i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i])
    
    if (temp.slice(-4).join('') === wrap) {
      result++
      temp.splice(-4)
    }
  }

  return result;
}