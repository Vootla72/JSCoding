var arr = [1, 2, 3, 4];
var total = 0;
for (var i of arr) {
  console.log(i);
  total = arr[i];
}
console.log(total);
