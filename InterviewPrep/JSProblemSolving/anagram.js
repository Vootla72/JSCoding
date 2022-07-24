function anagram(str1, str2) {
  const normalize = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };
  return normalize(str1) === normalize(str2);
}

console.log(anagram('bhavana', 'bhav'));

//This solution will utilize a helper function to remove all unwanted punctuation and symbols, basically non-alphabetic characters
