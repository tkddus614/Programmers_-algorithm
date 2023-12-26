function solution(arr) {
    const stk = [];
    let i = 0;
    while(i<arr.length) {
      if (stk.length === 0) {
        stk.push(arr[i])
        i++
      } else if (stk.length > 0) {
        if (arr[i] === stk[stk.length - 1]) {
          stk.pop()
          i++
        } else {
          stk.push(arr[i])
          i++
        }
      }
    }
    return stk.length ? stk : [-1]
}