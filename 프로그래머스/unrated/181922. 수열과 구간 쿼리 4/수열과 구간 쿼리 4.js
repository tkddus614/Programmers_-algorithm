function solution(arr, queries) {
    for (i=0; i < queries.length; i++) {
      const [s,e,k] = queries[i]
      for (j=s; j <= e; j++) {
        if (j % k === 0) {
          arr[j] += 1
        }
      }
    }
  return arr
}