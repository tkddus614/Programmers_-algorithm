function solution(n) {
   return n % String(n).split('').reduce((acc, cur) => +acc + +cur) ? false : true
}