function gcd(a, b) {
  if (b === 0) return a
  else return gcd(b, a % b)
}

function lcm(a, b) {
  return a * b / gcd(a, b)
}

function solution(arr) {
  value = arr[0]
  for (i = 0; i < arr.length; i++) {
    value = lcm(value, arr[i])
  }
  
  return value
}