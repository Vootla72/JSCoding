//function takes an arg called num
// which we need to convert that into roman number and return it

function convertToRoman(num) {
  // it shld be in decreasing order as we argoing through each and every key from top to bottom
  var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var roman = '';
  //to loop an obj key value pairs... use //for var in//
  for (var key in romanToNum) {
    while (num >= romanToNum[key]) {
      roman += key;
      num -= romanToNum[key];
    }
  }
  return roman;
}
console.log(convertToRoman(6));
