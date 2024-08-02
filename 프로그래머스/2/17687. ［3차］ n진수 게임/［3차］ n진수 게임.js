function solution(n, t, m, p) {
    const max = m * (t - 1) + p;
    const answer = [];
    let numbers = '';
    let value = 0;
  
    while (numbers.length < max) {
      numbers += (value++).toString(n);
    }
  
   let i = 0;
    while (answer.length < t) {
        if (i % m + 1 === p) {
            answer.push(numbers[i]);
        }
        i++;
    }
    return answer.join('').toUpperCase()
}