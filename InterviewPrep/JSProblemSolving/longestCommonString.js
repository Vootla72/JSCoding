// longest common string from array of strings

var arr = ['voot', 'bhav', 'v'];
var arr = ['intes', 'inteer', 'intt'];

function sharedStart(array) {
  var A = array.sort();
  console.log(A);
  a1 = A[0];
  a2 = A[A.length - 1];
  L = a1.length;
  i = 0;
  //charAt() is a method that returns the character from the specified index.
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}
console.log(sharedStart(arr));
