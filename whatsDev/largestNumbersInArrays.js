//Given an 2 dimensional array find largest valuess of arrays

function largest(arr) {
  var resArray = [];
  for (var i = 0; i < arr.length; i++) {
    var tempMax = arr[i][0];
    for (var j = 0; j < arr[i].length; j++) {
      if (tempMax <= arr[i][j]) {
        tempMax = arr[i][j];
      }
    }
    resArray.push(tempMax);
  }
  return resArray;
}
console.log(
  largest([
    [1, 2, 3],
    [1000, 55, 77, 99],
    [44, 66, 1, 0],
  ])
);

//M-2

function largest1(arr) {
  var resArray = [0, 0, 0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (resArray[i] <= arr[i][j]) {
        resArray[i] = arr[i][j];
      }
    }
  }
  return resArray;
}
console.log(
  largest1([
    [1, 2, 3],
    [1000, 55, 77, 99],
    [44, 66, 1, 0],
  ])
);

//M-3- removing nested loop and calling function for each subarray
function findMax(arr) {
  var maxi = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= maxi) maxi = arr[i];
  }
  return maxi;
}

function largest2(arr) {
  var resArray = [];
  for (var i = 0; i < arr.length; i++) {
    resArray.push(findMax(arr[i]));
  }
  return resArray;
}

console.log(
  largest2([
    [1, 2, 3],
    [1000, 55, 77, 99],
    [44, 66, 1, 0],
  ])
);
