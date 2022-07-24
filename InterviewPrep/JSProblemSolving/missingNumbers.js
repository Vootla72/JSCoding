var arr = [5];
var count = 5;
function missing(arr, count) {
  var missingNumbers = [];
  for (var i = 1; i <= count; i++) {
    if (arr.indexOf(i) === -1) missingNumbers.push(i);
  }
  return missingNumbers;
}

console.log(missing(arr, count));
