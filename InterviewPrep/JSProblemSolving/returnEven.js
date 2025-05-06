function returnEven(arr) {
    return arr?.filter((num) => num%2==0);
  }

  console.log(returnEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]

  //note:
//   arr?.map() returns [false, true, false, true, false, true, false, true, false, true]