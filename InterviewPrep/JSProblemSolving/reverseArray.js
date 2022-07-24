var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr = arr.reverse();
// console.log(arr);

function reverseArray(arr) {
  var res = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

console.log(reverseArray(arr));
