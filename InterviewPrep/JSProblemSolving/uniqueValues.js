// unique values in 2 arrays
var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log([...new Set(arr3)]);

// function unique(arr1, arr2) {
//   return arr1.filter((item) => {
//     return arr2.indexOf(item) == -1;
//   });
// }
// var array3 = arr1.filter(function (obj) {
//   return arr2.indexOf(obj) == -1;
// });
// console.log(unique(arr1, arr2));
// console.log(array3);

//remove duplicates and then concat
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 3, 8];

// let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
// let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

// const unique = unique1.concat(unique2);

// console.log(unique);
// console.log(arr1.slice(1)); //except first
// console.log(arr1.slice(0, 1)); //first
// console.log(arr1.splice(0, 1));
// console.log(arr1.slice(0, 1));
