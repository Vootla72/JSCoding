// var a = 10;
// function x() {
//   console.log(a);
//   var a = 100;
// }
// x();
//o/p:undefined

// var a = 10;
// function y() {
//   a = 100;
//   console.log(a);
// }
// y(); //o/p:100
// console.log(a); //o/p:100 --pointing to same memory location

// let a = 10;
// function z() {
//   a = 100;
//   console.log(a);
// }
// z(); //o/p:100
// console.log(a); //o/p:100

// let a = 10;
// {
//   a = 100;
//   console.log(a);
// }
// //o/p:100
// console.log(a); //o/p:100

// let a = 10;
// function z() {
//   let a = 100;
//   console.log(a);
// }
// z(); //o/p:100
// console.log(a); //o/p:10

// console.log(5 + '6'); //o/p:56 -- type:string
// console.log(5 - '6'); //o/p:-1 -- type:number
