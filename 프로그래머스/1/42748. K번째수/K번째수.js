function solution(array, commands) {
  let count = 0; 
  const result = []
  while (count <= commands.length - 1) {
    const lastIdx = commands[count][2]
    result.push(array.slice(commands[count][0] - 1,commands[count][1]).sort((a,b) => a-b)[lastIdx - 1])
    count++
  }
  return result
}