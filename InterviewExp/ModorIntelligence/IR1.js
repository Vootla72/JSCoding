// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// ex: [0,3,2]

function missingElement(arr) {
  var n = arr.length;
  var sum = (n * (n + 1)) / 2;
  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }
  return sum;
}
// console.log(missingElement([0, 1, 2, 3, 5]));

function stairs(num) {
  //   var res = 0;
  if (num == 1) return 1;
  if (num == 2) return 2;
  return stairs(num - 1) + stairs(num - 2);
}
// console.log(stairs(4));

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

function product(arr) {
  function multiply(arr1) {
    var res = 1;
    for (var ele of arr1) {
      res *= ele;
    }
    return res;
  }

  var left = [];
  var right = [];
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    left[i] = multiply(arr.slice(i + 1));
  }
  right[0] = arr[0];
  right[1] = arr[0];
  //   for (var i = arr.length - 1; i >= 0; i--) {
  //     // right[i] = right[i + 1] * arr[i];
  //     right[i] = multiply(arr.slice(0, i));
  //     // console.log(arr.slice(0, i));
  //   }
  for (var i = 2; i < arr.length; i++) {
    right[i] = right[i - 1] * right[i - 2];
  }
  for (var i = 0; i < arr.length; i++) {
    result[i] = left[i] * right[i];
  }
  return right;
}
console.log(product([1, 2, 3, 4]));
