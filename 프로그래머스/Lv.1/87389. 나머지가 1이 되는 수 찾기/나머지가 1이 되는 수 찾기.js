function solution(n) {
    let num = 1;
    while(num <= n) {
      if (n % num === 1) return num
      num++
    }
}