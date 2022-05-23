//m-1 passes only few cases go to m-2

function palindrome(str) {
  var reversed = str.split('').reverse().join('');
  if (reversed === str) return true;
  return false;
}
console.log(palindrome('eye'));

function palindrome1(str) {
  var reg = /[\W_]/g; //all non-alphanumeric characters
  var smallStr = str.replace(reg, ''); //matches with reg replace with empty
  var reversed = smallStr.split('').reverse().join('');

  if (reversed === smallStr) return true;
  return false;
}
console.log(palindrome1('_eye'));
