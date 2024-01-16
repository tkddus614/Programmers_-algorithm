function solution(price, money, count) {
  const arr = Array.from({length: count}, (_, i) => (i + 1) * price)
  const total = arr.reduce((acc, cur) => acc + cur, 0)
  return money - total > 0 ? 0 : Math.abs(money - total)
}