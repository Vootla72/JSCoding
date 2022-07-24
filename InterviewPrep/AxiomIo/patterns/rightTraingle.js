// *
// **
// ***
// ****
// *****

function leftTriangle(rows) {
  string = '';
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j <= i; j++) {
      string += '*';
    }
    string += '\n';
  }
  return string;
}
console.log(leftTriangle(5));
