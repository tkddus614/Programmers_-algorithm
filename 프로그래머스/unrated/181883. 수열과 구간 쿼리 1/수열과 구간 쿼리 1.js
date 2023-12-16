function solution(arr, queries) {
     queries.map((v) => {
      for (i=v[0]; i<=v[1]; i++) {
        arr[i]+=1
      }
    })
    return arr;
}
