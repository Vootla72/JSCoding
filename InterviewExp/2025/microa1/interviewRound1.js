// return the starting indices fof matching patterns with the given text;
// it has wildcharacter is ?.. it can be any character.. but it can replace a single character at a time
// it should return te first non wild character matches with the pattern




function findPattern(text, pattern) {
  function getPatternMatch(idx, n) {
    for (let k = 0; k < n; k++) {
      if (pattern[k] !== "?" && text[k + idx] !== pattern[k]) {
        return -1;
      }
    }
    for (let k = 0; k < n; k++) {
      if (pattern[k] !== "?") return idx + k;
    }
  }

  let res = [];
  let m = text.length;
  let n = pattern.length;

  if (m === 0 || m < n) return res;

  for (let i = 0; i <= m - n; i++) {
    // Ensure valid substring check.. max the starting index to pattern length -- Important
    let currStartIdx = getPatternMatch(i, n);
    if (currStartIdx !== -1) res.push(currStartIdx);
  }

  return res;
}


// console.log("findPattern", findPattern("abcabc", "?bc")); // Output: [1, 4]
// console.log("findPattern", findPattern("abcabc", "abc")); // Output: [0, 3]



text: "abcabc"
pattern : "abc"
Output: [0, 3]




text: "abcabc"
pattern : "?bc"
Output: [1, 4]