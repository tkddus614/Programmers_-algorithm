function solution(absolutes, signs) {
  signs.forEach((v, i) => {
    if (!v) absolutes[i] = -absolutes[i]
  })
  return absolutes.reduce((acc, cur) => acc+ cur)
}