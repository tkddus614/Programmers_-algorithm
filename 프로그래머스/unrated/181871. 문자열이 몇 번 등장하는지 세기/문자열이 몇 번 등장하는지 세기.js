function solution(myString, pat) {
    let answer = 0;
    for (i=0; i < myString.length; i++) {
      const str = myString.slice(i, i + pat.length);
      if(str === pat) answer += 1;
    }
    return answer;
}