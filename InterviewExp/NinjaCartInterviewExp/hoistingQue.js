// function invokeRes() {
//   var something = 3;
//   function invoke() {
//     console.log(something);
//   }
//   invoke();
// }
// var something = 2;
// invokeRes();

//o/p:3

//Note:it remembers from where it came .. function invoke lexical scope is global scope
//ex-2
function invoke1() {
  console.log(something); //lexical scope is global
}

function invokeRes1() {
  var something = 3;
  invoke1();
}
var something = 2;
invokeRes1();

//o/p:2;
