// *
// **
// ***
// ****
// *****

function leftTriangle(rows) {
  let string = '';
  for (var i = 0; i < rows; i++) {
    for (var k = 0; k < rows - i; k++) {
      string += ' ';
    }
    for (var j = rows; j > k - 1; j--) {
      string += '*';
    }
    string += '\n';
  }
  return string;
}
console.log(leftTriangle(5));
