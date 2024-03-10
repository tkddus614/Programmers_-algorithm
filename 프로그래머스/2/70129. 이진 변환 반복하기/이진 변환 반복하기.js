function solution(s) {
    let zero = 0;
    let count = 0;
  
    while (s !== '1') {
      let str = ''
      
      for (i=0; i<s.length; i++) {
        if(s[i] === '0') {
          zero++
        } else {
          str += s[i]
        }
      }

      count++
      str = (str.length).toString(2);
      s = str;
    }
  
    return [count, zero]
}