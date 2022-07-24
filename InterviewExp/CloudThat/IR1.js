var number = 189765;
// o/p1: 49765
//o/p2:18765
//o/p3:18865
//o/p4:18965
//o/p3:18975

//first number is avg of first two digits and remaining same
//second number is avg of second two digits and remaining same
function ChangeNumber(num) {
  var res = [];
  for (var i = 0; i < num.length - 1; i++) {
    var r = num.slice(0, i);
    var sum = parseInt((Number(num[i]) + Number(num[i + 1])) / 2);
    var remaining = num.slice(i + 2);
    res[i] = r + sum + remaining;
  }
  return res;
}

// console.log(ChangeNumber('189765'));

//reverse the string keeping the vowels at the same place as it is

const reverseConsonants = (str = '') => {
  const arr = str.split('');
  let i = 0,
    j = arr.length - 1;
  const consonants = 'bcdfghjklnpqrstvwxyz';
  const vowels = 'aeiou';
  while (i < j) {
    while (i < j && vowels.indexOf(arr[i]) != -1) {
      i++;
    }
    while (i < j && vowels.indexOf(arr[j]) != -1) {
      j--;
    }
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(reverseConsonants('bhavana'));
console.log(5 - '6');
