function solution(people, limit) {
  people.sort((a,b) => a-b)
  let boats = 0;
  left = 0;
  right = people.length - 1;
  
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++
      right--
    } else {
      right--
    }
    boats++
  }
  return boats
}