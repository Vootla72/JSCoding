// 13 characters forward or backward
//All letters will be upperCase
//Donot transform non-alphanumeric characters and pass them on

function rot13(str) {
  var solved = '';
  //find ascii value of each character and move 13 characters

  for (var i = 0; i < str.length; i++) {
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 75)
      solved += String.fromCharCode(asciiNum + 13);
    //after N move backward
    else if (asciiNum >= 75 && asciiNum <= 90)
      solved += String.fromCharCode(
        asciiNum - 13
      ); //convert ascii value to string
    else {
      //not b/n 65 and 90 characters
      solved += str[i];
    }
  }
  return solved;
}

console.log(rot13('AZ'));
