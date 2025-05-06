//if all the letters in an second arg present in first

function mutations(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) return false;
    // if the current letter in secondWord doesnot exists in firstWord,then return false
  }
  return true;
}
// console.log(mutations(['hello', 'hey']));
// console.log(mutations(['hello', 'hellllo']));

//
//................................................................

//M-2 going through one word each time instead of indices

function mutations1(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (var letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;
  }
  return true;
}
// console.log(mutations1(['hello', 'hey']));
// console.log(mutations(['hello', 'hellllo']));

//M-3 using includes

function mutations2(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (var letter of secondWord) {
    if (!firstWord.includes(letter)) return false;
  }
  return true;
}
console.log(mutations2(['hello', 'hey']));


// if all the letters in an second arg present in first ( count of each letter should be same)

function isAllCharsOfSecondPresent(arr) {
  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase();
  let m = firstWord.length;
  let n = secondWord.length;
  let count = {};
  if (m < n) return false;
  for (let i = 0; i < m; i++) {
    if (!count[firstWord[i]]) {
      count[firstWord[i]] = 1;
    } else {
      count[firstWord[i]]++;
    }
  }
  for(let i=0;i<n;i++){
    if(!count[secondWord[i]]) return false;
    else count[secondWord[i]]--;

  }
  return true;
}


// or  if the inouts are arrays

function isAllCharsOfSecondPresent(firstWord, secondWord) {
  let m = firstWord.length;
  let n = secondWord.length;
  if (m < n) return false;
  // console.log("first word", firstWord)

  const arr1Counts = firstWord.reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
  // console.log("arr1Counts_____", arr1Counts)

  for (const char of arr2) {
    if (!arr1Counts[char]) return false;
    arr1Counts[char]--;
  }

  return true;
}

const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['a', 'b', 'd', 'c'];

console.log(isAllCharsOfSecondPresent(arr1, arr2));