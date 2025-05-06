//when inside a function there is an expensive calculation is present and each n every time it is taking  decent amount of time ,
// inorder to reduce this we will implement a memoize or caching function ,if same thing calcuated before,it will return the result without recalculating again

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    //taking from fn args
    //here contexxt is an optional
    var argsCache = JSON.stringify(args); //convert into string
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

function clumsyProduct(num1, num2) {
  for (var i = 1; i <= 100000000; i++) {}
  return num1 * num2;
}
const memoizedClumsyProduct = myMemoize(clumsyProduct);
console.log(memoizedClumsyProduct);
//same fn called with same arguments---inorder to reduce the time for second call with same args, we will be caching the result;
console.time('First Call');
// console.log(clumsyProduct(9467, 7649));//before memoize
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('First Call'); //117.8ms //after memoize...........>>>116.08203125 ms

console.time('Second Call');
// console.log(clumsyProduct(9467, 7649));//before memoize
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd('Second Call'); //112.1ms  //after memoize...........>>>0.0400390625 ms
