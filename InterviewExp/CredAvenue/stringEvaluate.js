// str="1+2-3+(1+2)"

function evaluate1(str) {
  var num = str.split('');
  //   console.log(num, num.length);
  var res = 0;
  for (var i = 0; i < num.length - 1; i++) {
    if (num[i] === '+') {
      //   console.log(i, Number(num[i - 1]));
      if (res == 0) {
        console.log('b');
        res = Number(num[i - 1]) + Number(num[i + 1]);
        i++;
      } else {
        console.log('bh');
        res += Number(num[i + 1]);
        i++;
      }
    }
    if (num[i] === '-') {
      //   console.log(i, Number(num[i - 1]));
      if (res == 0) {
        console.log('b');
        res = Number(num[i - 1]) - Number(num[i + 1]);
        i++;
      } else {
        console.log('bh');
        res -= Number(num[i + 1]);
        i++;
      }
    }
  }
  return res;
}
console.log(evaluate1('1+2+3+6-5'));

// function evaluate(str) {
//   var num = str.split('');
//   var res = 0;
//   for (var i = 0; i < num.length; i++) {
//     if (res == 0 && num[i] === '+') {
//       res += Number(num[i - 1]) + Number(num[i + 1]);
//     } else if (res !== 0 && num[i] === '+') {
//       res += Number(num[i + 1]);
//     }
//     if (res == 0 && num[i] === '-') {
//       res += Number(num[i - 1]) - Number(num[i + 1]);
//     } else if (res !== 0 && num[i] === '-') {
//       res -= Number(num[i + 1]);
//     }
//   }
//   return res;
// }
// console.log(evaluate('1+2+3+4-4-5'));

// Actual Que: ("1+2+3-(1+5)")
