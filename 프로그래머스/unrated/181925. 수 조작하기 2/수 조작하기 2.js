function solution(numLog) {
    return numLog.reduce((acc, cur, curIdx, arr) => {
      if (!curIdx) return ''
      const prev = arr[curIdx-1]
      switch (cur - prev) {
        case 1:
          return acc + 'w'
        case -1:
          return acc + 's'
        case 10:
          return acc + 'd'
        case -10:
          return acc + 'a'
      }
    }, '')
}