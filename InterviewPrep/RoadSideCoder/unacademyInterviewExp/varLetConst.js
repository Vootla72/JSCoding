//var is functionally scoped and let n const is block scoped
{
  var a = 'hello';
  let b = 'world';
  const c = 'hello world';
}
console.log(a); //o/p:hello
console.log(b); //o/p:Reference error
console.log(c); //o/p:Reference error

//redeclaration of var will not throw any error but redeclaration of let and const will throw syntax error

// var d = 10;
// var d = 100;
// let e = 21;
// let e = 22; //o/p:SyntaxError: Identifier 'e' has already been declared

//const cannot be reinitialized but let can be reinitialized

// 4. Two buses are running towards each other at a speed of 60 km/h and the distance between them is 60 km. A bird is flying from bus one to bus two at a speed of 50 km/h. On reaching bus two, the bird covers the same distance back to bus one. If the bird keeps on doing the same thing until the buses collide, find the distance the bird would cover?
// Example: “The speed of both the buses is 60+60 = 120km/h

// Time the buses would take to collide = distance/speed = 60/120 = 0.5 hours or 30 minutes

// Total distance travelled by the bird = Speed of the bird/time taken by train to collide = 50/0.5 = 100 km.”
