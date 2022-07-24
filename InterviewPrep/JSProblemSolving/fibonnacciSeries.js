function fibnocci(n) {
  if (n < 2) return n;
  else return fibnocci(n - 1) + fibnocci(n - 2);
}
console.log(fibnocci(4));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fibonacci1(nums) {
  let fib = [0, 1];
  let data = [];
  var sum = 0;

  for (let i = 2; i < nums; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum;
}
console.log(fibonacci1(4));
