function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    if (row > column) {
      const add = Array(row - column).fill(0)
      return arr.map((v) => [...v,...add])
    }
    if (row < column) {
      for (i = 0; i < column - row; i++) {
        const add = Array(column).fill(0)
        arr.push(add)
      }
    }
    return arr
}