function solution(str1, str2) {
  
  function splitStr(str) {
    const result = [];
    str = str.toLowerCase();
    for (let i = 0; i < str.length - 1; i++) {
      const str_result = str.slice(i, i + 2);
      if (str_result.match(/^[a-z]{2}$/)) {
        result.push(str_result);
      }
    }
    return result;
  }
  
  function getMultiset(arr) {
    const multiset = {};
    arr.forEach(el => {
      if (multiset[el]) {
        multiset[el]++;
      } else {
        multiset[el] = 1;
      }
    });
    return multiset;
  }
  
  const modified_str1 = splitStr(str1);
  const modified_str2 = splitStr(str2);
  
  const multiset1 = getMultiset(modified_str1);
  const multiset2 = getMultiset(modified_str2);
  
  let intersection = 0;
  let union = 0;
  
  const allElements = new Set([...modified_str1, ...modified_str2]);
  
  allElements.forEach(el => {
    const count1 = multiset1[el] || 0;
    const count2 = multiset2[el] || 0;
    intersection += Math.min(count1, count2);
    union += Math.max(count1, count2);
  });
  
  if (union === 0) return 65536; 
  
  return Math.floor((intersection / union) * 65536);
}