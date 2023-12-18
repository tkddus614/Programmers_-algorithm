function solution(my_string, queries) {
    queries.forEach(v => {
      const arr = [...my_string]
      const [from, to] = v
      const slicedText = arr.slice(from, to + 1);
      const reverseText = slicedText.reverse().join('')
      arr.splice(from, to - from +1,reverseText)
      my_string = arr.join('')
      })
    return my_string
}