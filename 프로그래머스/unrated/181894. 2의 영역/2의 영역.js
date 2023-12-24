function solution(arr) {
    const slice = arr.reduce((acc, cur, idx) => {
        if (cur === 2) {
            acc.push(idx)
        }
        return acc;
    }, [])
    console.log(slice)
    return slice.length ? arr.slice(slice[0], slice[slice.length - 1] + 1) : [-1]
}