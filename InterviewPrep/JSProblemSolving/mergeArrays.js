var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var res1 = [...arr1, ...arr2];
var res2 = [].concat(arr1, arr2);
var res3 = arr1.concat(arr2);
console.log(res1, res2, res3);
//remove duplicates after merging
res4 = res3.filter((item, index) => res3.indexOf(item) == index);
console.log(res4);
