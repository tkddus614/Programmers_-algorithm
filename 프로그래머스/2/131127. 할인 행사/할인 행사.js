function solution(want, number, discount) {
    let result = 0;
    const number_count = number.reduce((acc, cur) => acc + cur, 0)
    const discount_numbers = discount.length - number_count
    
    const want_menus = want.flatMap((item, index) => {
      return Array(number[index]).fill(item);
    }).sort();    

    for (i = 0; i <= discount_numbers; i++) {
        const discount_menus = discount.slice(i, i+number_count).sort()
        
               if (JSON.stringify(discount_menus) === JSON.stringify(want_menus)) {
            result++;
        }
    }
    return result;
}