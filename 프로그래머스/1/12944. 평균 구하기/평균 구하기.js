function solution(num) {
    const average = num.reduce((acc,cur) => acc + cur)
    return average / num.length
}