function solution(arr) {
  const min = Math.min(...arr)
  const result = arr.filter((v) => !(v === min))
  return result.length ? result : [-1]
}