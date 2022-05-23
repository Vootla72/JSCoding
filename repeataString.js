function repeatString(str, num) {
  if (num < 0) return '';
  return str.repeat(num); //built in method
}
// console.log(repeatString('abc', 3));

//m-2 for loop

function repeatString1(str, num) {
  if (num < 0) return '';
  var s = '';
  for (var i = 0; i < num; i++) {
    // s = str + s;
    s += str;
  }
  return s;
}
// console.log(repeatString1('abc', 3));

//m-3 recursion

function repeatString2(str, num) {
  if (num < 0) return '';
  if (num == 1) return str; //base case
  return str + repeatString1(str, num - 1);
}
console.log(repeatString2('abc', 2));
