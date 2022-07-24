var arr = [
  [1, 2],
  [3, 4],
];
var r = arr.length;
var c = arr[0].length;
var j;
var c;
function rotateArray(arr) {
  for (var i = 0; i < c; i++) {
    for (j = 0, k = c - 1; j < k; j++, k--) {
      var temp = arr[j][i];
      arr[j][i] = arr[k][i];
      arr[k][i] = temp;
    }
  }
  for (var i = 0; i < r; i++) {
    for (var j = i; j < c; j++) {
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}
console.log(rotateArray(arr));
