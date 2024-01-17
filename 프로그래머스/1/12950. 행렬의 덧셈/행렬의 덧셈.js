function solution(arr1, arr2) {
  return arr1.map((rows, rowsId) => rows.map((v, i) => v + arr2[rowsId][i]))
}