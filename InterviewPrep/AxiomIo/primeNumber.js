function prime(num) {
  if (num <= 1) return false;
  else {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
  }
  return true; // this case for i=2  & other prime numbers
}
console.log(prime(7));
