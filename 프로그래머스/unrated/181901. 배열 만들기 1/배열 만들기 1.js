function solution(n, k) {
    return Array(Math.floor(n / k)).fill().map((v, idx) => idx * k + k)
}