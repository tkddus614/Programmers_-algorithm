function solution(s) {
    if (s.length % 2 === 1) return 0
    let answer = 0;
  
    for (let i = 0; i < s.length; i++) {
      let str = s.slice(i) + s.slice(0, i);
      const stack = [];
      let flag = 1;
      for (let s of str) {
        if (s === "(" || s === "{" || s === "[") {
          stack.push(s);
        } else {
          const last = stack.pop()
          if (s === ")" && last === "(") continue;
          if (s === "}" && last === "{") continue;
          if (s === "]" && last === "[") continue;
          flag = 0;
          break
        }
      }
      if(flag) answer++
    }
  return answer
}
