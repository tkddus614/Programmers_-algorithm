function solution(arr) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.from({length: cur}, () => cur));   
    }, []);
}