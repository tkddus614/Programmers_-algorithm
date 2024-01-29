function solution(n, arr1, arr2) {
    return arr1.map((v1, i) => {
        const binary1 = v1.toString(2).padStart(n, '0');
        const binary2 = arr2[i].toString(2).padStart(n, '0');
        return Array.from(binary1, (v,j) => v === '1' || binary2[j] === '1' ? '#' : ' ').join('')
    });
}