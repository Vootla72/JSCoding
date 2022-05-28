// first arg is an array and second arg is a number ..
// Aim is to find out the lowest index of an array where the number (2nd arg) can be fit into the first arg(arr) after it is been sorted

//.sort() in js works lexographically or alphabetically..
//ex:['a','c','b',19,2]-----------> .sort() --------->['a','b','c',19,2] --->as 1 in 19 is less than 2

//... to resolve this, we pass a function in sort

function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return i; //if all the elements in the array are less than num
  //   return arr.length; //both r same
}

console.log(getIndexToIns([1, 2, 3, 4], 5));
//o/p  shld be index 1
