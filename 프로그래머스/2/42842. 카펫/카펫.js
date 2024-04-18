function solution(brown, yellow) {
    const totalSize = brown + yellow
    
    for (i = 3; i <= totalSize; i++) {
       for (j = 1; j <= totalSize; j++) {
         if (i >= j) {
           if (i * j === totalSize) {
             if ((i - 2) * (j - 2) === yellow) {
                return [i, j]
             }
           }
         }
       }
    }
}