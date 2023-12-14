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




// The regular expression var reg = /[\W_]/g; is used to match any non-word character (a character that is not a letter, digit, or underscore) in a string. Let's break down the components of this regular expression:

// / and /: These forward slashes enclose the regular expression, indicating the beginning and end of the regex pattern.

// [\W_]: This is the character class or character set that defines what you want to match. In this case, [\W_] matches either a non-word character or an underscore. \W is a shorthand for matching any non-word character, and _ is a literal underscore character.

// g: This flag at the end of the regular expression (outside the second /) stands for "global." It tells the regular expression engine to find all matches in the input string, rather than stopping at the first match.



function palindrome1(str){
  var regex= /[\W_]/;
  var newStr = str.replace(regex,'');
  var reversedStr = newStr.split('').reverse().join('');
  return reversedStr=newStr;
}
console