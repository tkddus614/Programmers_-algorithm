function solution(a, b) {
  const date = new Date(`${2016}-${a}-${b}`)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return daysOfWeek[date.getDay()]  
}