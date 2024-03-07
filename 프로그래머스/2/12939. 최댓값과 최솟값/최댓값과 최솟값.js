function solution(s) {
    const arr = s.split(' ').map((v) => +v)
    
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    
    return `${min} ${max}`
}