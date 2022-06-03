function sum(x) {
  return function (y) {
    if (y) return sum(x + y);
    else return x;
  };
}
