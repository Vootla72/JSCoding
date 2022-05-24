//fn takes two arrays as arguments and return the unique elements(the elements which are not common in both the arrays)

//M-1:using forLoops
function diffArray(arr1, arr2) {
  var res = [];

  for (var ele of arr1) {
    if (arr2.indexOf(ele) === -1) res.push(ele);
  }
  for (var ele of arr2) {
    if (arr1.indexOf(ele) === -1) res.push(ele);
  }
  return res;
}

// console.log(diffArray([1, 2, 5], [1, 2, 3, 4]));

//M-2--using filter

//concatination of both the arrays and for looping use filter and return only those elements which are occuring once

function diffArray1(arr1, arr2) {
  var combos = arr1.concat(arr2);
  return combos.filter(
    (ele) => arr1.indexOf(ele) === -1 || arr2.indexOf(ele) === -1
  );
}
console.log(diffArray1([1, 2, 5], [1, 2, 3, 4]));
