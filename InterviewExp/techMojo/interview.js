var a = 2;
function callMe() {
  console.log(a);
  var a = 10;
}
console.log(callMe());
// o/p: undefined.. it searches for variable a inside the function.. as before console its not initialized.. so undefined

