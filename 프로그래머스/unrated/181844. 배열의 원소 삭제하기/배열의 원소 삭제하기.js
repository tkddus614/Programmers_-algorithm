function solution(arr, delete_list) {
    return arr.filter((data) => !delete_list.includes(data))
}