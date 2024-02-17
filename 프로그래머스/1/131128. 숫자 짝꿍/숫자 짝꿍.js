function solution(X, Y) {
    const x_arr = [...X];
    const y_arr = [...Y];
    const result = [];

    x_arr.sort((a, b) => b - a); 
    y_arr.sort((a, b) => b - a); 
  
    let i = 0;
    let j = 0;

    while (i < x_arr.length && j < y_arr.length) {
        if (x_arr[i] === y_arr[j]) {
            result.push(x_arr[i]);
            i++;
            j++;
        } else if (x_arr[i] > y_arr[j]) {
            i++;
        } else {
            j++;
        }
    }

    if (result.length === 0) return '-1';
    if (result[0] === '0') return '0';
    return result.join('');
}