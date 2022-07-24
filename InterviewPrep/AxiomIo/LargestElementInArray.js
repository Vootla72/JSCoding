var arr = [1, 2, 5, 6, 7];
var arr1 = [1];
// console.log(Math.max(...arr));
var max = 0;
function largest(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}

// console.log(largest(arr));

//second Largest Element in an array
function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}
// console.log(secondLargest(arr));

function secondLargestM1(arr) {
  if (arr.length < 2) return -1;
  var first = Number.MIN_VALUE;
  var second = Number.MIN_VALUE;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  if (second !== Number.MIN_VALUE) return second;
  else {
    return -1;
  }
}
console.log(secondLargestM1(arr1));
