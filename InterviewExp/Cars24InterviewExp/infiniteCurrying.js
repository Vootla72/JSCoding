//add(5)(2)(5)(4)
//ininfinite currying add 2 values return a function which takes next parameter and call the function again
function add(a) {
  return function add1(b) {
    return a + b;
  };
}
console.log(add(2)(3));

//infinite currying

function addInfinite(a) {
  return function (b) {
    if (b) return addInfinite(a + b);
    return a;
  };
}
console.log(addInfinite(5)(2)(5)(4)());

//checking

function x() {
  return function y() {
    console.log('y reached');
  };
}
const z = x;
console.log(z); //function x whole
console.log(z()); //invoking x()---> return function y
console.log(z()()); //invoking y()

//x1()() -- calls the inner inner fn which represents currying
function x1() {
  return function y1(a) {
    console.log('y reached', a);
  };
}
const z1 = x1;
console.log(z1); //function x whole
console.log(z1()); //invoking x()---> return function y
console.log(z1()(10)); //invoking y()

//**************************************** */
//lexical scope args

function x2(a) {
  return function y2() {
    console.log('y reached', a);
  };
}
const z2 = x2;
console.log(z2); //function x whole
console.log(z2(20)); //invoking x()---> return function y
console.log(z2(20)()); //invoking y()
