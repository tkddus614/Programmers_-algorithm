function solution(date1, date2) {
    const day1 = new Date(date1);
    const day2 = new Date(date2);
    return day1 < day2 ? 1 : 0
}
