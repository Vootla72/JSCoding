// Hollow square pattern
// *****
// *   *
// *   *
// *   *
// *****

function hollowSquarePattern(rows) {
  let string = '';
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == 0 || i == rows - 1) {
        string += '*';
      } else {
        if (j == 0 || j == rows - 1) {
          string += '*';
        } else {
          string += ' ';
        }
      }
    }
    string += '\n'; //new line after each row
  }
  return string;
}
console.log(hollowSquarePattern(5));
