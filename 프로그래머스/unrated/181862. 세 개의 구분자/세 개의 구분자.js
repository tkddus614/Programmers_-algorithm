function solution(myStr) {
    const res = myStr.split(/[a-c]/g).filter(v => v)
    return res.length ? res : ['EMPTY']
}