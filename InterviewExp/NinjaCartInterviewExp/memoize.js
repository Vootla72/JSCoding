function foo(a, b, c) {
  return a + b + c;
}

function memo(fn) {
  let cache = {};
  return function (...args) {
    var key = JSON.stringify(args);
    // var key = args.join('-');
    console.log(key);
    if (!cache[key]) {
      cache[key] = fn.call(this, ...args);
      return cache[key] + 'from calculation';
    }
    return cache[key] + 'from cache';
  };
}
const m1 = memo(foo);
console.log(m1(1, 2, 3));
console.log(m1(1, 2, 3));
