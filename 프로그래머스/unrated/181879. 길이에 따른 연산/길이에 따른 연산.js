function solution(num_list) {
    const add = num_list.reduce((acc, cur) => acc + cur);
    const multiply = num_list.reduce((acc, cur) => acc * cur);
    return num_list.length >= 11 ? add : multiply
}