function solution(numbers) {
    const arr = Array.from({length: 9}, (_,i) => i + 1)
    const result = arr.filter((v) => !numbers.includes(v))
    return result.reduce((acc, cur) => acc + cur, 0)
}