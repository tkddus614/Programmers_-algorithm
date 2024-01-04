function solution(rank, attendance) {
    const rankSet = rank.map((v, idx) => ({v, idx})).filter((_, idx) => attendance[idx])
    rankSet.sort((a,b) => a.v - b.v)
    return rankSet[0].idx * 10000 + rankSet[1].idx * 100 + rankSet[2].idx
}