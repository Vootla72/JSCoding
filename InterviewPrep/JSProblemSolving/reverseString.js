function reverseString(Str) {
  var reversedString = Str.split('').reverse().join('');
  return reversedString;
}
console.log(reverseString('hello'));

//M-2 not using built in methods
function reverseStringScratch(Str) {
  var s = '';
  for (var i = Str.length - 1; i >= 0; i--) {
    s = s + Str[i];
  }
  return s;
}
console.log(reverseStringScratch('bhavana'));
