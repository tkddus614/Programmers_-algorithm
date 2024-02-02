function solution(answers) {
    const result = []
    const first = [1,2,3,4,5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    first_result = 0; second_result = 0; third_result = 0;
  
    answers.forEach((v, i) => {
        if (v === first[i % first.length]) first_result++;
        if (v === second[i % second.length]) second_result++;
        if (v === third[i % third.length]) third_result++;
    });
  
    const maxNum = Math.max(first_result, second_result, third_result)
  
    if (maxNum === first_result) {
      result.push(1)
    }
    if (maxNum === second_result) {
      result.push(2)
    }
    if (maxNum === third_result) {
      result.push(3)
    }
      
    return result
}