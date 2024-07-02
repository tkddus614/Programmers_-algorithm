function solution(clothes) {
    let condinations = 1;
    
    const hashMap = new Map();
    for (i = 0; i < clothes.length; i++) {
       const item = clothes[i][0];
       const category = clothes[i][1];
      
       if (hashMap.has(category)) {
            hashMap.get(category).push(item);
        } else {
            hashMap.set(category, [item]);
        }
    }
        
    for (items of hashMap.values()) {
      condinations *= (items.length + 1)
    }
  
    return condinations - 1
}