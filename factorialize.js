//M-1 -- simple solution
function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
  //u can use let instead of var in both the places
}

console.log(factorial(5));

//M-2 using recursion

function factorialRecursion(num) {
  if (num === 0) return 1;
  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(4));

//M-3

function factorialM3(num) {
  for (var i = 1; num > 1; num--) {
    i = i * num;
  }
  return i;
}

console.log(factorialM3(4));

//m-4 --- using reduce
function factorialReduce(num) {
  var arr = [];
  for (i = num; i >= 1; i--) {
    arr.push(i);
  }
  //conv in to an array
  return arr.reduce((acc, cur) => {
    return acc * cur; // as it is an arrow fn it is returning
  }, 1); // reduce returning is the o/p
}

console.log(factorialReduce(6));
