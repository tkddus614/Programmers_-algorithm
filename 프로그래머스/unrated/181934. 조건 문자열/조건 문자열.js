function solution(ineq, eq, n, m) {
    if (eq === "=") return ineq === '>' ? +(n >= m) : +(n <= m)
    return ineq === '>' ? +(n > m) : +(n < m)
}