function solution(today, terms, privacies) {  
    const result = [];
    terms_obj = {}
    const today_date = new Date(today.replaceAll('.', '-'))
    
    for (i = 0; i < terms.length; i++) {
      const [term, duration] = terms[i].split(' ')
      terms_obj[term] = Number(duration)
    }
      
    for (i = 0; i < privacies.length; i++) {
      const [date, term] = privacies[i].split(' ')
      const expired_date = new Date(date.replaceAll('.', '-'))
      const duration = terms_obj[term]
      
      expired_date.setMonth(expired_date.getMonth() + duration);

      if (expired_date <= today_date) {
          result.push(i + 1); 
      }
    }
    
    return result
}