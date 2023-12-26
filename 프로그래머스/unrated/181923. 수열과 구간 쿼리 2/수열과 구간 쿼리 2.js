function solution(arr, queries) {
    const result = []
    queries.forEach(([s,e,k]) => {
      const filter = arr.filter((v, i) => s <= i && i <= e && k < v);
      result.push(filter.length ? Math.min(...filter) : -1)
    })
    return result
}