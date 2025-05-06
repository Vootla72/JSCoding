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

////////wrong//////////

// Incorrect String Indexing: In JavaScript, \
// strings are immutable, meaning you can't change individual characters of a string by assigning them to specific indices (res[n-i+1] = s1[i]). 
// Instead, you need to build the reversed string by concatenating characters.

function reverseStr(s1){
  let res="";
  let n = s1.length;
  for(let i=n-1;i>=0;i--){
    console.log('***1223', i-n+1, i)
    res[n-i+1]= s1[i];
  }
  return res;

}