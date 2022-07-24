function maxRepeatedCharacter(str) {
  const normalize = (s) => {
    return s.replace(/[^\w]/g, '').toLowerCase();
  };
  const charMap = {};
  let maxValue = 0;
  let maxChar = '';
  for (var char of normalize(str)) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (var char in charMap) {
    //key value pair use in
    if (charMap[char] > maxValue) {
      maxValue = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxRepeatedCharacter('i am bhhaaaaaaa'));
