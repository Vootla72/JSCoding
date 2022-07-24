var arr = [0, 1, 0, 1, 1, 0, 0];

function arrangeNumbers(arr) {
  var first = 0;
  var last = arr.length - 1;
  while (first < last) {
    while (arr[first] == 0 && first < last) first++;
    while (arr[last] == 1 && first < last) last--;
    if (first < last) {
      arr[first] = 0;
      arr[last] = 1;
      first++;
      last--;
    }
  }
  return arr;
}
console.log(arrangeNumbers(arr));
