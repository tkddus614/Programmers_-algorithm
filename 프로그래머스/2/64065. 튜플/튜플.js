function solution(s) {
    const arr = new Map()
    const modified_s = s.replace(/[{}]/gi, "").split(',')
    
    modified_s.forEach((v) => {
        if (arr.has(v)) {
            arr.set(v, arr.get(v) + 1);
        } else {
            arr.set(v, 1);
        }
    });
  
    const sortedArray = Array.from(arr.entries()).sort((a, b) => b[1] - a[1]);
    
    return sortedArray.map((v) => Number(v[0]))
}
