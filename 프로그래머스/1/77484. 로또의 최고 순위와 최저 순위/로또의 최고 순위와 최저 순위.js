function solution(lottos, win_nums) {
    const rank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    const matchingNumbers = win_nums.filter((v) => lottos.includes(v)).length
    const lostNumberCount = lottos.filter((v) => v === 0).length
    
    const high = matchingNumbers + lostNumberCount 
    const low = matchingNumbers 
          
    return [rank[high], rank[low]]
}