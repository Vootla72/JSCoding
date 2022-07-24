var c = 10;
function foo(a) {
  let b = 2;
  const d = 3;
  return function bar() {
    return a + d + c;
  };
}
console.log(foo(7)());
//o/p:20
