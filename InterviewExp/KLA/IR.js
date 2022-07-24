var arr = [2, 2, 2];
function difference_calculator(arr) {
  var alpha = 0;
  var beta = 0;
  var count = 1;
  for (var i = 2; i <= arr.length; i++) {
    // console.log(arr[i - 1], arr[i]);
    var value = arr[i - 1];
    if (arr[i] == arr[i - 1]) {
      count++;
      console.log(count);
    } else {
      console.log(value, count);
      if (count == value) alpha++;
      count = 1;
    }
  }
  return alpha;
}

console.log(difference_calculator(arr));
