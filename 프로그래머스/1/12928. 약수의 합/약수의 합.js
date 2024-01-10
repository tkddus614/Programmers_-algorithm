function solution(n) {
    let num = 1;
    let result = 0;
    while (num <= n) {
        if (n % num === 0) {
            result += num;
        }
        num++;
    }
    return result;
}