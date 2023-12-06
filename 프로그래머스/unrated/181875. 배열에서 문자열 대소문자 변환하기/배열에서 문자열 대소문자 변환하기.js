function solution(strArr) {
    return strArr.map((v, idx) => {
      if (idx % 2) {
        return v.toUpperCase()
      } else {
        return v.toLowerCase()
      }
    })
}