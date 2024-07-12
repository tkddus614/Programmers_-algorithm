function solution(survey, choices) {
  answer = ''
  const score = [0,0,0,0]
    
  for (i = 0; i < survey.length; i++) {
      if (survey[i] === 'RT') {
        score[0] += -1 * (choices[i] - 4)
      } else if (survey[i] === 'TR') {
         score[0] += choices[i] - 4
      }  else if (survey[i] === 'CF') {
         score[1] += -1 * (choices[i] - 4)
      }  else if (survey[i] === 'FC') {
         score[1] += choices[i] - 4
      }  else if (survey[i] === 'JM') {
         score[2] += -1 * (choices[i] - 4)
      }  else if (survey[i] === 'MJ') {
         score[2] += choices[i] - 4
      }  else if (survey[i] === 'AN') {
         score[3] += -1 * (choices[i] - 4)
      }  else if (survey[i] === 'NA') {
         score[3] += choices[i] - 4
      } 
  }
  

  if (score[0] >= 0) {
    answer += 'R'
  } else {
    answer += 'T'
  }
  if (score[1] >= 0) {
    answer += 'C'
  } else {
    answer += 'F'
  }
  if (score[2] >= 0) {
    answer += 'J'
  } else {
    answer += 'M'
  }
  if (score[3] >= 0) {
    answer += 'A'
  } else {
    answer += 'N'
  }
  
  return answer

}