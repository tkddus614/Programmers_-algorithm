function solution(picture, k) {
    return picture.map((v) => Array(k).fill(v.split('').map((v) => v.repeat(k)).join(''))).flat()
}