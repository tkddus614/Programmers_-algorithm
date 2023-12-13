function solution(my_string) {
    const arr = Array.from({length: 52}).fill(0)
    for (i=0; i<my_string.length; i++) {
      if (my_string.charCodeAt(i) >= 65 && my_string.charCodeAt(i) <= 90) {
        arr[my_string.charCodeAt(i)-65]++
      } else {
        arr[my_string.charCodeAt(i)-71]++
      }
    }
    return arr
}