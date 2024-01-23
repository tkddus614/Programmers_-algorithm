function solution(s, n) {
    const convert = s.split('').map((v) => v.charCodeAt())
    return convert.map((v) => {
      if (65 <= v && v <= 90) {
        return String.fromCharCode((v + n - 65) % 26 + 65)
      }
      if (97 <= v && v <= 122) {
        return String.fromCharCode((v + n - 97) % 26 + 97)
      }
      return String.fromCharCode(v)
    }).join('')
}