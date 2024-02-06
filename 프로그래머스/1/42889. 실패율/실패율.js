function solution(N, stages) {
    const result = []
    let stage = stages
    let count = 1;
  
    while (count <= N) {
      const stage_clear = stage.filter((v) => v >= count)
      const stage_fail = stage.filter((v) => v === count)

      result.push({stage: count, failure_rate : stage_fail.length / stage_clear.length})
      count++
    }
  
    result.sort((a,b) => b.failure_rate - a.failure_rate)
    return result.map((v) => v.stage)
}