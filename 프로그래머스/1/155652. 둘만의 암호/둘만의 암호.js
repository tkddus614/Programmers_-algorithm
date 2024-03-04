function solution(s, skip, index) {
    const skipValue = [...skip].map((v) => v.charCodeAt())

    return [...s].map((v) => {
      let code = v.charCodeAt()
      
      for (i=0; i < index; i++) {
        code++
        if (code > 122) code -= 26
        
        while (skipValue.includes(code)) {
          code++;
          if (code > 122) code -= 26;
        }        
      }
      return String.fromCharCode(code)
    }).join('')
}