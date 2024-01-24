function solution(s) {
    const arr = s.split('');
    return arr.map((v, i) => {
        if (i === arr.indexOf(v)) {
            return -1;
        } else {
            const firstIndex = arr.indexOf(v);
            arr[firstIndex] = ''; 
            return i - firstIndex;
        }
    });
}