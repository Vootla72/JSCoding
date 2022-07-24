var a = 2;
function callMe() {
  console.log(a);
  var a = 10;
}
console.log(callMe());
