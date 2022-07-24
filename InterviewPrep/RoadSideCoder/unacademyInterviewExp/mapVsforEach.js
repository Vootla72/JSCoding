let arr = [1, 2, 3, 4];
const mapResult = arr.map((ele) => {
  return ele + 2;
});

const forEachResult = arr.forEach((ele, i) => {
  arr[i] = ele + 3;
});
console.log(mapResult);
console.log(arr);
//map returns new array after modifying elements it will not modify the original array.
//forEach modifies the original array,it will not return the array so we can't chain with the another method
//As map returns the new array we can chain with another method
