function solution(cacheSize, cities) {
    const cache_hit = 1
    const cache_miss = 5
    
    if (cacheSize === 0) return cities.length * cache_miss    
    
    let result = 0;
    const cache = new Map()  
  
    const modified_cities = cities.map((v) => v.toLowerCase())
    const recent_data = modified_cities.slice(0, cacheSize)
    
    for (const city of modified_cities) {
      if (cache.has(city)) {
        result += cache_hit
        
        cache.delete(city)
        cache.set(city, true)
      } else {
        result += cache_miss
        if (cache.size >= cacheSize) {
          const first = cache.keys().next().value
          cache.delete(first)
        }
        cache.set(city, true)
      }
    }
    return result
}
