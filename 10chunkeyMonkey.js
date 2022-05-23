//Given an array and a number
// return 2d array with grup of no of elements as number

//ex:(['a','b','c','d'],2) --------> [['a','b'],['c','d']]

function chunkeyMonkey(arr, size) {
  var groups = [];
  while (arr.length > 0) {
    groups.push(arr.slice(0, size));
    arr = arr.slice(size); // remaining elements
  }
  return groups;
}
// console.log(chunkeyMonkey(['a', 'b', 'c', 'd', 'e'], 4));

//using splice
// splice(0,2);//['a','b']
// and original array:['c','d']
////////////////////////////////////////////////////////////////////////////////////////////////***************************************** */

//m-2----->using splice

function chunkeyMonkey1(arr, size) {
  var groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
}
console.log(chunkeyMonkey1(['a', 'b', 'c', 'd', 'e'], 4));
