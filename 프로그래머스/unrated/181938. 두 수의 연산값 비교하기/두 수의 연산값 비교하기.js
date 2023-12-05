function solution(a, b) {
    const odd = +(a.toString() + b.toString())
    const even = 2 * a * b 
    return odd >= even ? odd : even
}
