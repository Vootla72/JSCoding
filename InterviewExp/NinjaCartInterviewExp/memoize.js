function foo(a, b, c) {
  return a + b + c;
}

function memo(fn) {
  let cache = {};
  return function (...args) {
    var key = JSON.stringify(args);
    // console.log(key); //o/p:[1,2,3]
    // var key = args.join('-');
    console.log(key);
    if (!cache[key]) {
      // console.log('this', this); //this refers to window object
      cache[key] = fn.call(this, ...args);
      return cache[key] + 'from calculation';
    }
    return cache[key] + 'from cache';
  };
}
const m1 = memo(foo);
console.log(m1(1, 2, 3));
console.log(m1(1, 2, 3));
