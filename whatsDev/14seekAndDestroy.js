//first arg is array and remaining values. we need to remove the elements which are matches with the remaining values from an array and return the array

//in js, in order to take the arguments, we have 'arguments' keyword to catch all the arguments in an object format

// var args1 = Array.prototype.slice.call(arguments);---->convert object to an array

function seekAndDestroy(arr) {
  //here arr is ['1', '2', '3', '4', '2', '3']
  var args = Array.from(arguments);
  args.splice(0, 1); //take only arguments from an array
  var targets = args;
  var result = [];
  for (var num of arr) {
    if (targets.indexOf(num) === -1) result.push(num);
  }
  return result;
}
// console.log(seekAndDestroy(['1', '2', '3', '4', '2', '3'], '1', '2', '3', '4'));
//o/p:['1','4']

//*************************** */
//M-2 using FILTER

function seekAndDestroy1(arr) {
  //here arr is ['1', '2', '3', '4', '2', '3']
  var args = Array.from(arguments);
  args.splice(0, 1); //take only arguments from an array
  var targets = args;
  var result = [];
  return arr.filter(function (ele) {
    if (targets.indexOf(ele) === -1) return ele;
    // return !tarets.includes(ele);
  });
}
console.log;
seekAndDestroy1(['1', '2', '3', '4', '2', '3'], '1', '2', '3', '4');

//*************************** */
//M-3 using FILTER--arrow function
function seekAndDestroy2(arr) {
  //here arr is ['1', '2', '3', '4', '2', '3']
  var args = Array.from(arguments);
  args.splice(0, 1); //take only arguments from an array
  var targets = args;
  var result = [];
  return arr.filter(
    (ele) => targets.indexOf(ele) === -1
    // return !tarets.includes(ele);
  );
}
// console.log(seekAndDestroy2(['1', '2', '3', '4', '2', '3'], '2', '3', '4'));

//*************************** */
//M-4 using prototype for Args--arrow function
function seekAndDestroy3(arr) {
  //here arr is ['1', '2', '3', '4', '2', '3']
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1); //take only arguments from an array
  var targets = args;
  var result = [];
  for (var num of arr) {
    if (targets.indexOf(num) === -1) result.push(num);
  }
  return result;
}
console.log(seekAndDestroy3(['1', '2', '3', '4', '2', '3'], '1', '3', '4'));
