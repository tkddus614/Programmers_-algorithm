function solution(s) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine']
    arr.forEach((v, i) => s = s.split(v).join(i))
    return +s
}