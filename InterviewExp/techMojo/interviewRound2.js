// console.log("Hello, World!");

let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function computeSalary(company) {
  var result = 0;
  for (key in company) {
    if (Array.isArray(company[key])) {
      company[key].forEach((item) => {
        result += item.salary;
      });
    } else {
      result += computeSalary(company[key]);
    }
  }
  return result;
}
console.log(computeSalary(company));

// multiply(4, 5); // => 20
// multiply(3, 3); // => 9
// const double = multiply(2);
// double(5);  // => 10
// double(11); // => 22

function multiply(...args) {
  // console.log(args)
  let arr = args;
  if (args.length == 2) {
    return arr[0] * arr[1];
  } else {
    return function (y) {
      return arr[0] * y;
    };
  }
}

console.log(multiply(4, 5));
console.log(multiply(3, 3));
const double = multiply(2);
console.log(double(5)); // => 10
console.log(double(11)); // => 10
