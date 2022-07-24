//str-- reverse-- vowels as it is

// bhavana--- nvahaba

function reverse(str) {
  var strArr = str.split('');
  var n = strArr.length;
  var i = 0;
  var j = n - 1;
  var vowels = 'aeiou';
  while (i < j) {
    while (i < j && vowels.indexOf(strArr[i]) !== -1) i++;
    while (i < j && vowels.indexOf(strArr[j]) !== -1) j--;

    var temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join('');
}
console.log(reverse('nisarg'));
