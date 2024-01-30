function solution(name, yearning, photo) {
    let obj = {}
    name.forEach((v, i) => obj[v] = yearning[i])
    console.log(obj)
    return photo.map((v, i) => {
      let sum = 0;
      v.forEach((v) => {
        console.log(Object.keys(obj).includes(v))
        Object.keys(obj).includes(v) ? sum = sum + obj[v] : sum
      })
      return sum
    })
}