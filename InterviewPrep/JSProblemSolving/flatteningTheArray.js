// flat the multi dimensional array
var arr = [1, [2, 3, [4, 5, 6]]];
var res1 = [].concat(...arr);
// console.log(res1);
var res2 = arr.flat(2);
// console.log(res2);

function flatten(arr) {
  var res3 = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) res3.push(...flatten(item));
    else res3.push(item);
  });
  return res3;
}
console.log(flatten(arr));
