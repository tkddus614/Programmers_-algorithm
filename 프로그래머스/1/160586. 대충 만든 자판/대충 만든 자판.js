function solution(keymap, targets) {
    const answer = [];
    
    targets.forEach((target) => {
        let sum = 0;
        for (let i = 0; i < target.length; i++) {
            let min = Infinity;
          
            keymap.forEach((key) => {
                const index = key.indexOf(target[i]);
                if (index !== -1) {
                    min = Math.min(min, index + 1); 
                }
            });
            sum += min;
        }
        answer.push(sum); 
    });

    return answer.map((v) => {
      if (v === Infinity) {
        return -1
      } 
      return v
    });
}