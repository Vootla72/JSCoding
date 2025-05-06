// problem is find the largest number in a nested array

function findLargestNumInNestedArr(arr) {
    let maxVal = -Infinity;
    for (let ele of arr) {
      if (Array.isArray(ele)) {
        maxVal = Math.max(maxVal, findLargestNumInNestedArr(ele));
      } else {
        maxVal = Math.max(maxVal, ele);
      }
    }
    return maxVal;
  }


  /// solution 2 - using reduce method

  function findLargestNumInNestedArr1(arr) {
    return arr.reduce((maxVal, ele) => {
      if (Array.isArray(ele)) {
        maxVal = Math.max(maxVal, findLargestNumInNestedArr1(ele));
      } else {
        maxVal = Math.max(maxVal, ele);
      }
      return maxVal;
    }, -Infinity);
  }


//   console.log(
//     'findLargestNumInNestedArr******',
//     findLargestNumInNestedArr1([1, 2, 3, [4, [5, 9,6, -1]]])
//   ); // 9