//m-1
function longestWord(Sentence) {
  var arr = Sentence.split(' ');
  console.log(arr);
  var res = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > res.length) res = arr[i];
  }
  return res.length;
}
console.log(longestWord('The world is largerwwfwrer'));

//m-2 one line soln

function findLongestWord(str) {
  return str.split(' ').sort((a, b) => {
    return b.length - a.length;
  })[0].length;
  //   return str.split(' ').sort((a, b) => b.length - a.length)[0]; instead of using return
}
// sort sorts the array in descending order and we will take the first element of it
console.log(findLongestWord('The world is largerwwfwrer'));
