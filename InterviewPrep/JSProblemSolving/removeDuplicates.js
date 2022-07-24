// remove duplicates
var arr = [1, 2, 3, 4, 3, 3, 4, 4, 4];

function removeDuplicates(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return res;
}
// console.log(removeDuplicates(arr));

//using filter method

function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => {
    console.log(arr.indexOf(item), index); //indexOf check with first occurence of the element

    return arr.indexOf(item) == index;
  });
}
// console.log(removeDuplicatesFilter(arr));

//using setMethod
// Sets are a new object type with ES6 (ES2015) that allows you to create collections of unique values.
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicatesSet(arr));

// Link:https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
