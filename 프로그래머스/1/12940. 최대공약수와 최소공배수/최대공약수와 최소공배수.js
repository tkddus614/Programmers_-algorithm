function solution(n, m) {
  const min = Math.min(n,m)
  const max = Math.max(n,m)
  
  const gcd = (a,b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  
  const lcm = (a,b) => (a * b) / gcd(a,b)
  
  return [gcd(min,max), lcm(min,max)]
}