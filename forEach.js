function ForCheck(arr) {
  return arr.forEach((ele) => 2 * ele);
}
console.log(ForCheck([1, 2, 3]));
//o/p:undefined as forEach method will not return anthying i.e undefined

console.log(ForCheck([1, 2, 3]));
function MapCheck(arr) {
  return arr.map((ele) => 2 * ele);
}
console.log(MapCheck([1, 2, 3]));
//o/p:[2,4,6] as map method will return new array with transformed elements
