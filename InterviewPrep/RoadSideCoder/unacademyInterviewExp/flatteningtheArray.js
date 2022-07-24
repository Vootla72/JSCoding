//arr is nested array with depth 2 and arr1 is a nested array with depth 1
//o/p should be [1,2,3,4,5,6,7,8,9,10,11]
const arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11],
];
const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11],
];

//flattening the array one level
let flatted = [].concat(...arr);
// console.log(flatted); //o/p:[1,2,3,4,5,6,[7,8],9,10,11]

//M-2 to flatten the array using flat inbuilt method in JS
let flatted1 = arr.flat(2); //here 2 is the depth to flatten the array
// console.log(flatted1); //o/p:[1,2,3,4,5,6, 7, 8, 9, 10, 11]

//custom function to flatten the array

function customFlat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(customFlat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(customFlat(arr));

function customFlat1(arr, depth = 1) {
  let result1 = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      result1.push(...customFlat(item, depth - 1));
    } else {
      result1.push(item);
    }
  });
  return result1;
}

console.log(customFlat1(arr));
