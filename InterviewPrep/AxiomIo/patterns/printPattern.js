function printPattern(rows) {
  let string = '';
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < i; j++) {
      string += '*';
    }
    string += '\n';
  }
  return string;
}
console.log(printPattern(5));

// *
// **
// ***
// ****

// link:https://www.tutorialstonight.com/js/javascript-star-pattern.php
