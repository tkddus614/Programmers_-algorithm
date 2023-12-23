function solution(num_list) {
   let count = 0;
   for (num of num_list) {
     while (true) {
       if (num === 1) break;
       if (num % 2 === 0) {
         num = num / 2
         count += 1
       } else {
         num = (num - 1) / 2
         count += 1
       }
     }
   }
  return count
}