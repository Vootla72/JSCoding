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
