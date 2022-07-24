const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); //this refers to the object shape : o/p:20
console.log(shape.perimeter()); //this refers to the window object: o/p:NaN

//when we try to do some operation on not defined it throws NaN
