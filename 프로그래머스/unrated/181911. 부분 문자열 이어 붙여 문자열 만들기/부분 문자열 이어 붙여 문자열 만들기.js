function solution(my_strings, parts) {
    return my_strings.reduce((acc, cur, idx) => {
      const [from, to] = parts[idx]
      return acc + cur.slice(from ,to + 1)
    }, '')
}