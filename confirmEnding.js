function confirmEnding(str, target) {
  return str.endsWith(target);
  //endsWith is a javascript method applied on a string which returns true when the targetr matches with the end value of a string
}
// console.log(confirmEnding('Bhavana', 'a')); //true
// console.log(confirmEnding('Bhavana', 'n')); //false
// console.log(confirmEnding('Bhavana vootla', 'vootla')); //true
// console.log(confirmEnding('Bhavana vootla', 'la')); //true

//M-2 own without inbuilt method

function confirmEnding1(str, target) {
  var words = str.split(' ');
  var endWord = words.pop();
  var wordLength = endWord.length;
  var targetLength = target.length;
  for (var i = targetLength - 1; i >= 0; i--) {
    if (target.length !== wordLength) {
      //   console.log(target[targetLength - i - 1]); // t l a
      // console.log(endWord[wordLength - i - 1]);
      if (target[targetLength - i - 1] !== endWord[wordLength - i - 1])
        return false;
    } else {
      if (target[i] != endWord[i]) return false;
    }
  }
  return true;
}
// console.log(confirmEnding1('I am Bhavana vootla', 'vootla')); //true
// console.log(confirmEnding1('Bhavana', 'a')); //true
// console.log(confirmEnding1('Bhavana', 'ina')); //false
// console.log(confirmEnding1('Bhavana vootla', 'ootla')); //true
// console.log(confirmEnding1('Bhavana vootla', 'tla')); //true

//m-3 using substring

function confirmEnding2(str, target) {
  //to find the last word using negative symbol

  return str.substr(-target.length) === target;
}

// console.log(confirmEnding2('Bhavana', 'na')); //true

//m-4 using slice

function confirmEnding3(str, target) {
  //to find the last word using negative symbol
  return str.slice(-target.length) === target;
}

console.log(confirmEnding3('Bhavana', 'na')); //true
