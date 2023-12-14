//function takes 3 args... sentence, before, after and after
//need to replace before word in the sentence with after word in the sentence and return that.

//store the casing of word before and replace with that casing

/***************/
//M-1 using replace function
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}
// console.log(myReplace('i am Bhavana vootla', 'Bhavana', 'bhav'));

//M-2 using not replace method function
function myReplace1(str, before, after) {
  var words = str.split(' ');
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  for (var i = 0; i < words.length; i++) {
    if (words[i] === before) words[i] = after;
  }
  return words.join(' ');
}
console.log(myReplace1('i am Bhavana vootla', 'Bhavana', 'bhav'));



//Note:

// replace method returns new string and it will not idiify the original string
