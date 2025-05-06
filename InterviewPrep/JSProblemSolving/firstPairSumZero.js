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

///solution 2

function checkSum(arr, sum) {
  let res = [];
  let h = {};
  for (var ele of arr) {
    const numToFind = sum - ele;
    if (h[numToFind]) {
      res.push(h[numToFind], ele);
      return res;
    } else {
      h[ele] = ele;
    }
  }
  return res;
}

console.log(twoSum([10, 2, -2, -10, 3, 3], 0));
