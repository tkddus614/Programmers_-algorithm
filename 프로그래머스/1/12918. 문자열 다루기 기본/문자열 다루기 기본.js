function solution(s) {
    const includeAlphabet = s.match(/[a-zA-Z]/g);
    return (s.length === 4 || s.length === 6) && !includeAlphabet
}