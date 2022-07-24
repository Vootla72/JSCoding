// Write a function called same, which accepts two arrays. The function should return true if  value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false

function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  function squared(a) {
    return a * a;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  for (var i = 0; i < arr1.length; i++) {
    if (arr2[i] != squared(arr1[i])) return false;
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  function squared(a) {
    return a * a;
  }
  let hash1 = {};
  let hash2 = {};
  for (var ele of arr1) {
    if (hash1[ele]) {
      hash1[ele]++;
    } else {
      hash1[ele] = 1;
    }
  }
  for (var ele of arr2) {
    if (hash2[ele]) {
      hash2[ele]++;
    } else {
      hash2[ele] = 1;
    }
  }
  for (var ele of arr1) {
    if (hash2[squared(ele)]) {
      hash2[squared(ele)]--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
