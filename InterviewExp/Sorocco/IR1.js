function palindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
function sum(...args) {
  var arr = args;
  // console.log(arr);

  if (args.length == 2) {
    return arr[0] * arr[1];
  } else {
    return function (y) {
      return arr[0] * y;
    };
  }
}

// console.log(sum(2, 3));
// console.log(sum(2)(3));
