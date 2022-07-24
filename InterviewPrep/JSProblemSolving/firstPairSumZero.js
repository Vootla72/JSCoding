// first pair whose sum is zero
function twoSum(array, sum) {
  let hashMap = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push([hashMap[array[i]], array[i]]);
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  return results[0];
}
console.log(twoSum([10, 2, -2, -10, 3, 3], 0));
