//i/P: an array with 2 arg(min,max)
//o/p:sum of all numbers including both values

//M-1 -- own
function sumAll(arr) {
  // to sort in ascending order of an given array
  arr.sort((a, b) => a - b);
  var minValue = arr[0];
  var maxValue = arr[1];
  var sum = 0;
  for (var i = minValue; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumAll([1, 4]));

//M-2 --
function sumAll1(arr) {
  //finding min and max  values in an array containing any no of elements
  // var minValue1 = Math.min(...arr);
  // var maxValue1 = Math.max(...arr);
  var minValue = Math.min(arr[0], arr[1]);
  var maxValue = Math.max(arr[0], arr[1]);
  var sum = 0;
  for (var i = minValue; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumAll1([15, 4]));
