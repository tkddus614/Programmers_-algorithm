function solution(my_string) {
    const answer = [];
    for (let i=0;i < my_string.length; i++) {
      answer.push(my_string.substr(i))
    }
  return answer.sort()
}