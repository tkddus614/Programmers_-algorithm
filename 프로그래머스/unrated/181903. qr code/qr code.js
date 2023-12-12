function solution(q, r, code) {
    return [...code].reduce((acc, cur, curIdx) => {
      if (curIdx % q === r) acc += cur
      return acc
    }, [])
}