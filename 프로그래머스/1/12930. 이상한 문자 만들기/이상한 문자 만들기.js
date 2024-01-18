function solution(s) {
    return s.split(" ").map((word) =>
        word.split('').map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase()).join('')
    ).join(' ');
}