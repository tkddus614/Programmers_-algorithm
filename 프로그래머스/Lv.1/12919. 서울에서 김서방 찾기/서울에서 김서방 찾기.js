function solution(seoul) {
    const locate = seoul.map((v, i) => v === "Kim" && i).filter((v) => v)
    return `김서방은 ${+locate}에 있다`
}