// delete 'howMany' values from the array and return the remaining values

function slashFlicker(arr, howMany) {
  return arr.splice(howMany);
}
console.log(slashFlicker([1, 2, 3, 4], 0));
console.log(slashFlicker(['burger', 'pizza', 'biryani'], 1));

//m-2

function slashFlicker1(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
console.log(slashFlicker1([1, 2, 3, 4], 0));
console.log(slashFlicker1(['burger', 'pizza', 'biryani'], 1));
