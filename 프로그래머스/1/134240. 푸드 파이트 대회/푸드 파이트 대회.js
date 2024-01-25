function solution(food) {
    let result = ''
    food.forEach((v, i) => {
      result += `${i}`.repeat(v / 2)
    })
    return result + '0' + [...result].reverse().join('')
}