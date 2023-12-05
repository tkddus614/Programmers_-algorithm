function solution(str_list, ex) {
    return str_list.filter((data) => !data.includes(ex)).join('')
}