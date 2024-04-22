function solution(arr1, arr2) {
    const result = []
    
    for (i = 0; i < arr1.length; i++) {
      let temp = []
      for (j = 0; j < arr2[0].length; j++) {
        sum = 0;
        for (k = 0; k < arr1[0].length; k++) {
          sum += arr1[i][k] * arr2[k][j]
        }
        temp.push(sum)
      }
      result.push(temp)
    }
    return result
}