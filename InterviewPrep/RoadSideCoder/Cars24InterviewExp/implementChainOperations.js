//Implement the logic
//calc.add(10).multiply(5).subtract(30).add(10);
//Note: when we want to do chain oof operations, we need to return the whole object instead of value
//here returning this, not this.total

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this; //this will return the whole object so that next chain of opertions can be done with total varianle modified
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const result = calc.add(10).multiply(5).subtract(30).add(10); //returns whole object of calc
//To get the value of the operation console result.total
console.log(result);

