const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

console.log(multiply()); //here we are cloning the object //o/p:20---the spread operator makes the cloned obj instead of referencing it
console.log(multiply()); //here we are cloning the object //o/p:20
console.log(multiply(value)); //here we are referencing the object //o/p:20--->it changes the reference value
//here x will not take the default value as assigned it will take the value which we are passing
console.log(multiply(value)); //here we are referencing the object//o/p:40 and we are passing value directly previously the number has changed to 20
