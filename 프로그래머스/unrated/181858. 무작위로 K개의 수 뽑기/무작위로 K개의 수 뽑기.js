function solution(arr, k) {
    const result = [...new Set(arr)]
    if (k < result.length) {
      return result.slice(0, k)
    } else {
      return Array.from({length: k}, (_, i) => i < result.length ? result[i] : -1)
    }
}