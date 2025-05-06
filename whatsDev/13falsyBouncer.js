//remove falsy values in an array and return the remaining array

//own
function falsyBouncer(arr) {
  var truthies = [];
  var falseValues = [false, 0, '', undefined, NaN, null];
  for (var ele of arr) {
    if (!falseValues.includes(ele)) truthies.push(ele);
  }
  return truthies;
}

// console.log(falsyBouncer(['bhav', '', false, 7]));

//M-2
//As falsy values doesnt enter into the loop,if truthies are there , the only push the values

function falsyBouncer1(arr) {
  var truthies = [];
  var falseValues = [false, 0, '', undefined, NaN, null];
  for (var ele of arr) {
    if (ele) truthies.push(ele);
  }
  return truthies;
}

// console.log(falsyBouncer1(['bhav', '', false, 7]));

//M-3 using FILTER method

function falsyBouncer2(arr) {
  return arr.filter((ele) => ele);
  //by not using arrow function
  //   return arr.filter(function (item) {
  //     return item;
  //   });
}

console.log(falsyBouncer2(['bhav', '', false, 7]));

//M-4 using Boolean as a callback function in filter method

function falsyBouncer2(arr){
  return arr.filter(Boolean);

  }
