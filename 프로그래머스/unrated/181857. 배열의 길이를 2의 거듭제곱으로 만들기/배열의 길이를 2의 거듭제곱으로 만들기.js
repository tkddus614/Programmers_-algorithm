function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(arr.length));
  return Array.from({ length: totalLength }, (v, i) => (arr[i] ? arr[i] : 0));
}