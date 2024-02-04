function solution(nums) {
   let result = 0
   const arr = []
   for (i=0; i<nums.length;i++) {
     for (j=i+1; j<nums.length;j++) {
       for (k=j+1; k<nums.length;k++) {
          arr.push(nums[i] + nums[j] + nums[k])
       } 
     }
   }
  arr.forEach((v => {
    let prime = true
    for (i=2; i<=Math.sqrt(v);i++) {
      if (v % i === 0) {
        prime = false
      }
    }
    if (prime) result++
  }))
  
  return result
}