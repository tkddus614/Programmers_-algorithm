function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"]
  
   for (i=0; i<babbling.length; i++) {
     for (j=0; j<arr.length;j++) {
       if(babbling[i].includes(arr[j].repeat(2))) break;
       babbling[i] = babbling[i].split(arr[j]).join('!');       
     }
   }

  return babbling.filter((v) => /^!+$/.test(v)).length
}