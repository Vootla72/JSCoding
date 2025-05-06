function fibnocci(n) {
  if (n < 2) return n;
  else return fibnocci(n - 1) + fibnocci(n - 2);
}
console.log(fibnocci(4));
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


// to get the sequence array return the data

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


function fiboSeries(n) {
  if (n <= 1) return n;
  return fiboSeries(n - 1) + fiboSeries(n - 2);
}

function fiboSeries1(n) {
  if (n <= 1) return n;
  let f1 = 0;
  let f2 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = f1 + f2;
    f1 = f2;
    f2 = temp;
  }
  return f2;
}

function fiboSeries2(n, memo = {}) {
  if (n in memo) return memo[n];
  // if(n<=1) return n;
  // or the below one

  if (n <= 1) {
    memo[n] = n;
    return n;
  }
  memo[n] = fiboSeries2(n - 1, memo) + fiboSeries2(n - 2, memo);
  return memo[n];
}


console.log('fiboSeries*********', fiboSeries2(6));
