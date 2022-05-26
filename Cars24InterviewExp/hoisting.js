function abc() {
  console.log(a);
  var a = 10;
}
abc();
//o/p:undefined --in memory allocation phase

//continuation
function abc1() {
  console.log(a, b, c);
  var a = 10;
  const b = 20;
  let c = 30;
}
abc1();
// a:undefined,b & c-- reference error as both are blocked sope and they are in temporal dead zone which means they are in thhe scope but they are not declared
