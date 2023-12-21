function solution(arr) {
    for (i=0;i<arr.length;i++) {
      for(j=0;j<arr.length;j++) {
        if (arr[i][j] !== arr[j][i]) return 0
      }
    }
  return 1
}