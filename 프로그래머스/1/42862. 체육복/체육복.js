function solution(n, lost, reverse) {
    let students = Array(n).fill(1);

    lost.forEach(student => students[student - 1]--);

    reverse.forEach(student => students[student - 1]++);

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) { 
            if (students[i - 1] === 2) {
                students[i]++;
                students[i - 1]--;
            } else if (students[i + 1] === 2) { 
                students[i]++;
                students[i + 1]--;
            }
        }
    }

    return students.filter(student => student > 0).length;
}