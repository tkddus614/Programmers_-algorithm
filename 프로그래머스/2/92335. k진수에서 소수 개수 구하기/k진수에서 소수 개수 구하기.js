function solution(n, k) {
  
  const isPrime = (num) => {
    if (num <= 1) {
      return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  
  let answer = 0;
  const num_arr = n.toString(k).split('0')
  
  for (const num of num_arr) {
    if (isPrime(Number(num))) {
      answer++
    }
  }
  
  return answer
}