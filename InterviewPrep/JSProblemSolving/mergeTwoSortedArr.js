// given two arrays which are sorted, merge them into a single sorted array

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}


// const arr1 = [2, 6, 9, 43];
// const arr2 = [1, 4, 8, 9];
// console.log("merge*****", mergeArrays(arr1, arr2));


// 2nd approach: using two pointers without using sort method

  // note this code works when both the input arrays are sorted
  function mergeArrays(arr1, arr2) {
    console.log(arr1)
    const res = [];
    let i = 0,
      j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }

    return res;
  }

  const arr1 = [1, 6, 9, 43];
  const arr2 = [1, 4, 8, 9];
  console.log('merge*****', mergeArrays(arr1, arr2));