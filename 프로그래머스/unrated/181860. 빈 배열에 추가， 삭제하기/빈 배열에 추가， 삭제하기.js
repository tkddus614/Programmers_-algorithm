function solution(arr, flag) {
    let x = [];
    flag.forEach((v, idx) => {
      if (v) {
        for (i=0; i < arr[idx] * 2; i++) {
          x.push(arr[idx])
        } 
        } else if (!v) {
          for (i=0; i < arr[idx]; i ++) {
            x.pop()
          }
      }
    })
  return x
}