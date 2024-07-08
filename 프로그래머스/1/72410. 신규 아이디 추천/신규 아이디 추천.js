function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase()
  // 2단계
  new_id = new_id.replace(/[~!@#$%^&*()=+\[\]{}:?,<>/]/g, '');
  // 3단계
  new_id = new_id.replace(/\.{2,}/g, '.');
  // 4단계
  new_id = new_id.replace(/^\.|\.$/g, '')
  // 5단계
  if (new_id === '') new_id = 'a'
  // 6단계 (4단계 한번 더 검증)
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15)
    new_id = new_id.replace(/^\.|\.$/g, '')
  } 
  // 7단계
  if (new_id.length <= 2) new_id = new_id + new_id.charAt(new_id.length - 1).repeat(3 - new_id.length)
  
  return new_id
}